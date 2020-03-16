export default {
  siteConfig: {
    siteSlogan: '',
    logoSrc:
      'https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/su2c-logo.png',
  },
  colors: {
    primary: '#ee5a04',
    primaryHover: '#f67d12',
    secondary: '#ee5a04',
    secondaryHover: '#f67d12',
    tertiary: 'black',
    tertiaryHover: '#eb2f24',
    progressBar: '#ee5a04',
    circularProgress: '#f67d12',
    linkColor: '#ee5a04',
    linkColorHover: '#ee5a04',
  },
  typography: {
    customFonts: [
      {
        family: 'itc_avant_garde_pro_mdbold',
        // TODO push this to cdn.
        url: 'http://crukorg.github.io/SU2C-drupal/assets/fonts/su2c/itc_-_itcavantgardepro-bold-webfont',
      },
    ],
    fontFamilyHeadings: 'itc_avant_garde_pro_mdbold,Arial,sans-serif',
    linkTextDecoration: 'underline',
  },
  button: {
    borderRadius: '1.5rem',
    textDecoration: 'underline',
    textTransform: 'uppercase',
  },
  avatar: {
    path:
      'https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/icon-avatars/su2c/',
  },
  utilities: {
    borderRadius: 'unset',
  },
};
