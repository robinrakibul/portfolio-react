module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js",'./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
  ],
}