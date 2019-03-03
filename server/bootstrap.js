const tsConfig = require('./tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

const cleanup = tsConfigPaths.register({
  paths: tsConfig.compilerOptions.paths
});

// When path registration is no longer needed
cleanup();
