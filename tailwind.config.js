module.exports = {
  important: true,
  prefix: '>',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },
  theme: {
    extend: {
      colors: {
        nav: '#34495E',
      },
    },
  },
  variants: {},
  plugins: [],
};
