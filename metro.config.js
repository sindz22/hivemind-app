const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Ensure .cjs files are supported
defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;
