import { css } from 'styled-components';

export default {
  colors: {
    primary: '#ee5a04',
    primaryHover: '#f67d12',
    secondary: '#ee5a04',
    secondaryHover: '#f67d12',
    tertiary: 'black',
    tertiaryHover: '#eb2f24',
    progressBar: '#ee5a04',
    circularProgress: '#f67d12',
  },
  typography: {
    customFonts: [{
      family: 'itc_avant_garde_pro_mdbold',
      url: '/profiles/cruk_fundraising/themes/cruk_of_bootstrap/assets/fonts/itcavantgardepro/itc_-_itcavantgardepro-bold-webfont',
    }],
    fontFamilyHeadings: 'itc_avant_garde_pro_mdbold,Arial,sans-serif',
  },
  button: css`
    border-radius: 1.5rem;
    text-decoration: underline;
    text-transform: uppercase;
  `,
  avatar: {
    path: '/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/icon-avatars/su2c/',
  },
  utilities: {
    borderRadius: 'unset',
  },
};
