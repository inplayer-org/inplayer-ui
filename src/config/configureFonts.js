import WebFont from 'webfontloader';

function configureFonts(theme) {
  const fonts = [theme.font.primary];

  WebFont.load({
    google: {
      families: fonts,
    },
  });

  return true;
}

export default configureFonts;
