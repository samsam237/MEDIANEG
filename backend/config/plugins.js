module.exports = ({ env }) => ({
  // enable i18n plugin
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'fr',
      locales: ['fr', 'en'],
    },
  },
  // enable upload plugin
  upload: {
    config: {
      provider: 'local',
      sizeLimit: 10000000, // 10MB
    },
  },
});
