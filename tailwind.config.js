/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*js",
    './src/**/*.html',
      './src/components/**/*.js',
      './src/container/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotocondesed: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-color-1':
          'var(--new-gradient-color-1, linear-gradient(90deg, #E0F5FA 0%, #FFFDE6 100%))',
        'gradient-color-2':
          'var(--new-gradient-color-2, linear-gradient(90deg, #E79B24 0.11%, #F1CC30 99.85%))',
        'gradient-color-3':
          'var(--new-gradient-color-3, linear-gradient(90deg, rgba(0, 104, 139, 0.15) 0%, rgba(2, 203, 219, 0.15) 100%))',
        'gradient-color-4':
          'var(--new-gradient-color-4, linear-gradient(90deg, #00688B 0%, #02CBDB 100%))',
        'gradient-color-5':
          'var(--new-gradient-color-5, linear-gradient(180deg, rgba(39, 6, 85, 0.80) 0%, rgba(118, 32, 243, 0.81) 100%)',
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        36: '36px',
        46: '46px',
        76: '76px',
      },
      colors: {
        primary: {
          100: '#081420',
          200: '#192431',
          300: '#6D5AE6',
          400: '#1BCE93',
          500: '#FFFFFF',
          600: '#ffffff14',
          700: '#F9B223',
          800: '#ECECEC',
          900: '#B1B1B5',
          1000: '#70798B',
          1100: '#2B3541',
        },
        gray: {
          900: '#3D3D3D',
          800: '#EAEAEA',
          700: '#A3A3A3',
        },
        primary:'#02073E',
        orange:'#EF9E48',
      },
      borderRadius: {
        20: '20px',
      },
    },
    screens: {
      sm: '	640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xl2: '1366px',
      '2xl': '1536px',
      '3xl': '1836px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
}