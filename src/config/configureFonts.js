import WebFont from 'webfontloader';

function configureFonts(theme) {
  const fonts = [`${theme.font.primary}:100,300,400,500,700`];

  WebFont.load({
    google: {
      families: fonts,
    },
  });

  return true;
}

export default configureFonts;
