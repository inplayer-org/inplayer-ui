import WebFont from 'webfontloader';

function loadFonts() {
  const fonts = [
    'Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
    'Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',
  ];

  WebFont.load({
    google: {
      families: fonts,
    },
  });
}

export default loadFonts;