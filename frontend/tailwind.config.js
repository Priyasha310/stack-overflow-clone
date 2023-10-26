/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{svg,png,jpg,jpeg}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '480px',
        sm: {'max':'620px'},
        md: {'max':'760px'},
        lg: {'min':'1120px'},
      },
      colors: {
        transparent: 'transparent',
        'nav-color': '#f8f9f9',
        'nav-hover':'rgb(226, 226, 226)',
        'nav-text': 'rgb(69, 69, 69)',
        'link-color': '#1B75D0',
        'icon-color':'#ef8236',
        'bg-color': '#131324',
        'light-text': '#f0ecf9',
        'heading-color': '#6f42c1',
        'btn-color': '#4e0eff',
        'hover-btn-color': '#6531f7',
        'avatar-bg': '#009dff',
        'light-gray': '#666767',
        'text-color': '#3b4045',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '5_100': '5%',
        '10_100': '10%',
        '12_100': '12%',
        '15_100': '15%',
        '20_100': '20%',
        '25_100': '25%',
        '30_100': '30%',
        '35_100': '35%',
        '40_100': '40%',
        '45_100': '45%',
        '50_100': '50%',
        '55_100': '55%',
        '60_100': '60%',
        '65_100': '65%',
        '70_100': '70%',
        '75_100': '75%',
        '80_100': '80%',
        '85_100': '85%',
        '90_100': '90%',
        '95_100': '95%',
        'inherit': 'inherit',
        'initial': 'initial'
      },
    },
    plugins: [],
  },
}
