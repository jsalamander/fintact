module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'red': '#f0412d',
      'purple': {
        100: '#5A46E6',
        200: '#292546',
      },
      'black': '#000',
    },
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
