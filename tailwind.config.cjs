const path = require('node:path');

module.exports = {
  content: [path.join(__dirname, './**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {},
  },
  plugins: [],
};
