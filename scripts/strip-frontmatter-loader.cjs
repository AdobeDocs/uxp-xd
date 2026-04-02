/**
 * Strips YAML frontmatter (--- ... ---) so @mdx-js/loader can parse source docs
 * that use frontmatter (same pattern as Gatsby's MDX pipeline).
 */
module.exports = function stripFrontmatterLoader(content) {
  const src = content.toString();
  if (!src.startsWith("---")) {
    return src;
  }
  const end = src.indexOf("\n---", 3);
  if (end === -1) {
    return src;
  }
  return src.slice(end + "\n---".length).replace(/^\r?\n/, "");
};
