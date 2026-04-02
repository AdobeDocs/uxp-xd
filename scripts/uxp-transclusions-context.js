/**
 * Webpack entry: pulls in every XD reference .md under src/pages/uxp so
 * MDX compiles after prepare-uxp (stubs are inlined by inline-uxp-transclusions.js).
 */
const ctx = require.context(
  "../src/pages/uxp",
  true,
  /^\.\/reference-(css|html|js|spectrum)\/.*\.md$/
);

ctx.keys().forEach((key) => {
  ctx(key);
});
