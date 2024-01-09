const path = require('path');

export default {
  root: path.resolve(__dirname, 'src'),
  base: '',
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  build: {
    outDir: path.join(__dirname, 'dist'),
    // rollupOptions: {
    //   input: glob.sync(path.resolve(__dirname, "src", "*.html")),
    // },
  },
  server: {
    port: 8080,
    hot: true,
  },
};
