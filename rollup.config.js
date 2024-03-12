const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      copy({
        targets: [
          { src: 'src/assets/*.png', dest: 'dist/assets' }, // Adjust the source and destination paths as needed
        ],
      })
    );
    return config;
  },
};