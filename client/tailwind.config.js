// tailwind.config.js
module.exports = {
  content: [
    './index.html',              // Include your main HTML file
    './src/**/*.{js,jsx,ts,tsx}', // Include your source files (JavaScript, React, etc.)
    './public/**/*.html',         // Include other HTML files in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
