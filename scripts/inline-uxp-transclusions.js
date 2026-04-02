/**
 * Replaces UXP transclusion stubs (import Content + <Content query=.../>) with the
 * markdown body from node_modules/uxp-documentation so pages are self-contained.
 */
const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..");
const UXP_PAGES = path.join(REPO_ROOT, "src/pages/uxp");
const PKG_ROOT = path.dirname(
  require.resolve("uxp-documentation/package.json")
);

const STUB_RE =
  /^[\r\n\s]*import\s+Content\s+from\s+["']([^"']+)["']\s*;?[\r\n\s]*<Content\s+[^>]+\/?>[\r\n\s]*$/s;

function resolveImportToFile(importSpecifier) {
  const sub = importSpecifier.replace(/^uxp-documentation\/?/, "");
  const base = path.join(PKG_ROOT, sub);
  if (fs.existsSync(base) && fs.statSync(base).isFile()) {
    return base;
  }
  if (fs.existsSync(base + ".md")) {
    return base + ".md";
  }
  throw new Error(`Cannot resolve transclusion import: ${importSpecifier}`);
}

function walkMarkdownFiles(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      walkMarkdownFiles(full, out);
    } else if (name.endsWith(".md")) {
      out.push(full);
    }
  }
}

function main() {
  const roots = [
    "reference-css",
    "reference-html",
    "reference-js",
    "reference-spectrum",
  ].map((r) => path.join(UXP_PAGES, r));

  const files = [];
  for (const root of roots) {
    walkMarkdownFiles(root, files);
  }

  let inlined = 0;
  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const m = raw.match(STUB_RE);
    if (!m) {
      continue;
    }
    const importSpec = m[1];
    const sourcePath = resolveImportToFile(importSpec);
    const body = fs.readFileSync(sourcePath, "utf8");
    fs.writeFileSync(file, body, "utf8");
    inlined += 1;
  }

  console.log(`inline-uxp-transclusions: inlined ${inlined} files`);
}

main();
