import WebFont from 'webfontloader';

function loadFonts() {
  WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif'],
    },
  });
}

export default loadFonts;
