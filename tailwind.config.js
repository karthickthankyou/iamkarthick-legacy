const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

// #e63746

const primaryPallete = {
  DEFAULT: 'hsl(355, 78%, 56%)',
  25: 'hsl(355, 78%, 98%)',
  50: 'hsl(355, 78%, 92%)',
  100: 'hsl(355, 78%, 88%)',
  200: 'hsl(355, 78%, 78%)',
  300: 'hsl(355, 78%, 70%)',
  400: 'hsl(355, 78%, 64%)',
  500: 'hsl(355, 78%, 56%)',
  600: 'hsl(355, 78%, 40%)',
  700: 'hsl(355, 78%, 28%)',
  800: 'hsl(355, 78%, 12%)',
  900: 'hsl(355, 78%, 04%)',
}
const bluePallete = {
  DEFAULT: 'hsl(182, 43%, 76%)',
  25: 'hsl(182, 43%, 98%)',
  50: 'hsl(182, 43%, 92%)',
  100: 'hsl(182, 43%, 88%)',
  200: 'hsl(182, 43%, 78%)',
  300: 'hsl(182, 43%, 70%)',
  400: 'hsl(182, 43%, 64%)',
  500: 'hsl(182, 43%, 56%)',
  600: 'hsl(182, 43%, 40%)',
  700: 'hsl(182, 43%, 28%)',
  800: 'hsl(182, 43%, 12%)',
  900: 'hsl(182, 43%, 04%)',
}
const grayPallete = {
  DEFAULT: 'hsl(208, 10%, 32%)',
  25: 'hsl(208, 10%, 98%)',
  50: 'hsl(208, 10%, 92%)',
  100: 'hsl(208, 10%, 80%)',
  200: 'hsl(208, 10%, 70%)',
  300: 'hsl(208, 10%, 60%)',
  400: 'hsl(208, 10%, 50%)',
  500: 'hsl(208, 10%, 32%)',
  600: 'hsl(208, 10%, 24%)',
  700: 'hsl(208, 10%, 16%)',
  800: 'hsl(208, 10%, 08%)',
  900: 'hsl(208, 10%, 04%)',
}
const yellowPallete = {
  DEFAULT: 'hsl(52, 100%, 50%)',
  25: 'hsl(52, 100%, 98%)',
  50: 'hsl(52, 100%, 92%)',
  100: 'hsl(52, 100%, 84%)',
  200: 'hsl(52, 100%, 75%)',
  300: 'hsl(52, 100%, 66%)',
  400: 'hsl(52, 100%, 58%)',
  500: 'hsl(52, 100%, 50%)',
  600: 'hsl(52, 100%, 38%)',
  700: 'hsl(52, 100%, 24%)',
  800: 'hsl(52, 100%, 10%)',
  900: 'hsl(52, 100%, 04%)',
}
const greenPallete = {
  DEFAULT: 'hsl(116, 100%, 27%)',
  25: 'hsl(116, 100%, 98%)',
  50: 'hsl(116, 100%, 90%)',
  100: 'hsl(116, 100%, 78%)',
  200: 'hsl(116, 100%, 66%)',
  300: 'hsl(116, 100%, 54%)',
  400: 'hsl(116, 100%, 40%)',
  500: 'hsl(116, 100%, 27%)',
  600: 'hsl(116, 100%, 21%)',
  700: 'hsl(116, 100%, 14%)',
  800: 'hsl(116, 100%, 08%)',
  900: 'hsl(116, 100%, 04%)',
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      primary: primaryPallete,
      blue: bluePallete,

      green: greenPallete,
      yellow: yellowPallete,
      gray: grayPallete,
      accent: primaryPallete.DEFAULT,
    },
    extend: {
      minHeight: {
        '50vh': '50vh',
      },
      height: {
        screen50: '50vh',
        screen60: '60vh',
        screen80: '80vh',
        screen90: '90vh',
      },
      strokeWidth: {
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        16: '16px',
        32: '32px',
      },
      borderWidth: {
        // DEFAULT: '1px',
        1.5: '1.5px',
      },
      animation: {
        'spin-reverse': 'reverse-spin 1s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'spin-90': 'spin 90s linear infinite',
        'spin-180': 'spin 180s linear infinite',
        'spin-360': 'spin 360s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        slide: 'slide 1s ease-in-out infinite',
        'slide-up': 'slide-up 1s linear infinite',
        'slide-left': 'slide-left 1s linear infinite',
        'slide-left-100': 'slide-left-100 1s linear infinite',
        'slide-up-100': 'slide-up-100 1s linear infinite',
        'slide-down-100': 'slide-up-100 1s linear infinite',
        'slide-right-100': 'slide-up-100 1s linear infinite',
        'slide-right': 'slide-right 1s linear infinite',

        'breathe-20': 'breathe-20 30s ease-in-out infinite',
        'breathe-30': 'breathe-30 30s ease-in-out infinite',
        'breathe-40': 'breathe-40 30s ease-in-out infinite',
        'breathe-50': 'breathe-50 30s ease-in-out infinite',
        'breathe-60': 'breathe-60 30s ease-in-out infinite',
        'breathe-70': 'breathe-70 30s ease-in-out infinite',
        'breathe-80': 'breathe-80 30s ease-in-out infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slide: {
          '0%': { opacity: 1 },
          '100%': { transform: 'translateX(25%)' },
        },
        'slide-right': {
          '40%,60%': {
            opacity: 1,
          },
          '46%': { transform: 'translateX(25%)', opacity: 0 },
          '54%': {
            transform: 'translateX(-25%)',
            opacity: 0,
          },
        },
        'slide-up': {
          '40%,60%': {
            opacity: 1,
          },
          '46%': { transform: 'translateY(-25%) rotate(12deg)', opacity: 0 },
          '54%': {
            transform: 'translateY(25%) rotate(-12deg)',
            opacity: 0,
          },
        },
        'slide-left': {
          '40%,60%': {
            opacity: 1,
          },
          '46%': { transform: 'translateX(-25%)', opacity: 0 },
          '54%': {
            transform: 'translateX(25%)',
            opacity: 0,
          },
        },
        'slide-left-100': {
          '40%,60%': {
            opacity: 1,
          },
          '46%': { transform: 'translateX(-100%)', opacity: 0 },
          '54%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
        },
        'slide-right-100': {
          '40%,60%': {
            opacity: 1,
          },
          '46%': { transform: 'translateX(100%)', opacity: 0 },
          '54%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
        },
        'slide-up-100': {
          '40%,60%': {
            opacity: 1,
          },
          '46%': { transform: 'translateY(-100%)', opacity: 0 },
          '54%': {
            transform: 'translateY(100%)',
            opacity: 0,
          },
        },
        'slide-down-100': {
          '40%,60%': {
            opacity: 1,
          },
          '46%': { transform: 'translateY(100%)', opacity: 0 },
          '54%': {
            transform: 'translateY(-100%)',
            opacity: 0,
          },
        },
        'breathe-80': {
          '0%, 100%': { transform: 'scale(.1)', opacity: 0.8 },
          '80%': {
            transform: 'scale(4)',
            opacity: 1,
          },
        },
        'breathe-70': {
          '0%, 100%': { transform: 'scale(.1)', opacity: 0.8 },
          '70%': {
            transform: 'scale(4)',
            opacity: 1,
          },
        },
        'breathe-60': {
          '0%, 100%': { transform: 'scale(.1)', opacity: 0.8 },
          '60%': {
            transform: 'scale(4)',
            opacity: 1,
          },
        },
        'breathe-50': {
          '0%, 100%': { transform: 'scale(.1)', opacity: 0.8 },
          '50%': {
            transform: 'scale(4)',
            opacity: 1,
          },
        },
        'breathe-40': {
          '0%, 100%': { transform: 'scale(.1)', opacity: 0.8 },
          '40%': {
            transform: 'scale(4)',
            opacity: 1,
          },
        },
        'breathe-30': {
          '0%, 100%': { transform: 'scale(.1)', opacity: 0.8 },
          '30%': {
            transform: 'scale(4)',
            opacity: 1,
          },
        },
        'breathe-20': {
          '0%, 100%': { transform: 'scale(.1)', opacity: 0.8 },
          '20%': {
            transform: 'scale(4)',
            opacity: 1,
          },
        },
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        custom: 'cubic-bezier(0,.84,.17,1.27)',
      },
      transitionDuration: {
        2000: '2000ms',
      },
      boxShadow: {
        'inner-l': 'inset 6px 0px 3px rgba(0, 0, 0, 0.3)',
        'inner-r': 'inset -6px 0px 3px rgba(0, 0, 0, 0.3)',
        'inner-lr':
          'inset 8px 0px 2px rgba(0, 0, 0, 0.3), inset -8px 0px 2px rgba(0, 0, 0, 0.3)',
      },
      zIndex: {
        '-60': '-60',
        '-50': '-50',
        '-40': '-40',
        '-30': '-30',
        '-20': '-20',
        '-10': '-10',
      },
      backgroundImage: {
        hero: "url('https://res.cloudinary.com/thankyou/image/upload/b_black,o_80/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg')",
        hloan:
          "url('https://res.cloudinary.com/thankyou/image/upload/c_fit,q_auto:eco/a_0/v1640717751/nike/misc/surface-0WFE46jwO8o-unsplash_lk8dfy.jpg')",
        hero2:
          "url('https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg')",
      },

      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem',
        '90p': '90%',
      },

      lineHeight: {
        '80p': '80%',
        '90p': '90%',
      },
      fontFamily: {
        display: ['Helvetica'],
      },
      outlineWidth: {
        1.5: '1.5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
}
