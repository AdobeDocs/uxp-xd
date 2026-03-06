#!/usr/bin/env node
/**
 * Fixes reference links in reference-css.js, reference-html.js, reference-js.js,
 * and reference-spectrum.js: /uxp-api/ -> /uxp/ and path segments to kebab-case.
 *
 * Run from uxp-xd root: node fix-reference-links.mjs
 * Use --dry-run to preview without writing.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = __dirname;

const REFERENCE_FILES = [
  'reference-css.js',
  'reference-html.js',
  'reference-js.js',
  'reference-spectrum.js',
];

function toKebabCase(str) {
  if (!str || typeof str !== 'string') return str;
  const isScreamingSnakeCase = /^[A-Z0-9_]*$/.test(str);
  const normalized = isScreamingSnakeCase ? str.toLowerCase() : str;
  const parts = normalized.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );
  return parts ? parts.map((x) => x.toLowerCase()).join('-') : str;
}

// Folders that exist with PascalCase in reference-css (preserve as-is)
const PRESERVE_CASING = new Set([
  'General', 'Selectors', 'Styles', 'Pseudo-classes', 'Pseudo-elements', 'Modules',
]);

function fixSegment(seg) {
  if (!seg) return seg;
  if (PRESERVE_CASING.has(seg)) return seg;
  if (seg.includes(' ')) return toKebabCase(seg);
  if (/^[a-z0-9-]*$/.test(seg)) return seg;
  return toKebabCase(seg);
}

function fixPath(pathStr) {
  if (!pathStr || !pathStr.includes('/uxp-api/')) return pathStr;
  const withUxp = pathStr.replace(/\/uxp-api\//g, '/uxp/');
  const segments = withUxp.split('/').filter(Boolean).map(fixSegment);
  const hasTrailingSlash = pathStr.endsWith('/');
  return '/' + segments.join('/') + (hasTrailingSlash ? '/' : '/');
}

function processFile(filename) {
  const filepath = path.join(REPO_ROOT, filename);
  if (!fs.existsSync(filepath)) return 0;
  let content = fs.readFileSync(filepath, 'utf8');
  if (!content.includes('/uxp-api/')) return 0;
  const pathRegex = /"path":\s*"(\/uxp-api\/[^"]*)"/g;
  let count = 0;
  const newContent = content.replace(pathRegex, (match, pathVal) => {
    const fixed = fixPath(pathVal);
    if (fixed !== pathVal) count++;
    return `"path": "${fixed}"`;
  });
  if (count > 0 && !process.argv.includes('--dry-run')) {
    fs.writeFileSync(filepath, newContent, 'utf8');
  }
  return count;
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  if (dryRun) console.log('(dry run - no files will be modified)\n');
  let total = 0;
  for (const filename of REFERENCE_FILES) {
    const count = processFile(filename);
    if (count > 0) {
      console.log(`${dryRun ? '[would update] ' : ''}${filename}: ${count} paths fixed`);
      total += count;
    }
  }
  if (total > 0) console.log(`\nTotal: ${total} paths updated`);
}

main();
