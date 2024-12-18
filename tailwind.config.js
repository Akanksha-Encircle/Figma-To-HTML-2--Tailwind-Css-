/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '2xl': '1432px',
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1432px',
        },
      },
      fontFamily: {
        roboto_reg: ['RobotoRegular', 'sans-serif'],
        roboto_bold: ['RobotoBold', 'sans-serif'],
        jungle: ['JungleFever', 'sans-serif'],
      },
      colors: {
        'marron': '#A93800',
        'yellow': '#F8FF00',
      },
    },
  },
  plugins: [],
}

