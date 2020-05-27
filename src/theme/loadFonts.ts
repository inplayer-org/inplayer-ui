import WebFont from 'webfontloader';

function loadFonts() {
  WebFont.load({
    google: {
      families: ['Roboto', 'sans-serif'],
    },
  });
}

export default loadFonts;
