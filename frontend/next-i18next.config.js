module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
  fallbackLng: {
    default: ['fr'],
  },
  debug: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
}
