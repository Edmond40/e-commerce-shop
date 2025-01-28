/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/HTML files/*.{html,js}"],
  darkMode: 'class',
  theme: {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
    extend: {
      boxShadow: {
        neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')",
        purlpe: "0 0 8px theme('colors.blue.300')"
      },
      borderColor: {
        border: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')",
        purlpe: "0 0 8px theme('colors.blue.300')"
      }
    },
  },
  plugins: [],
}

