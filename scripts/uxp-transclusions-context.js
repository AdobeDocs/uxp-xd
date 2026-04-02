/**
 * Webpack entry: pulls in every XD transclusion .md under src/pages/uxp so
 * webpack resolves and compiles all import graphs from uxp-documentation.
 */
const ctx = require.context(
  "../src/pages/uxp",
  true,
  /^\.\/reference-(css|html|js|spectrum)\/.*\.md$/
);

ctx.keys().forEach((key) => {
  ctx(key);
});
