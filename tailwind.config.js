/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'ipad': '768px',
      'pro': [
        {'min': '1024px', 'max': '1500px'}
      ],
      'phone': {'max': '430px'},
      'sphone': {'max': '390px'},
      'se': {'max': '375px'},
      'dt': '1500px'
    }
  },
  plugins: [
    require('daisyui'),
  ],
}