import FontFaceObserver from 'fontfaceobserver';

function configureFonts(theme) {
  const fontObservers = [new FontFaceObserver(theme.font.primary)];

  function fontLoadSuccess() {
    document.body.classList.add('fonts-loaded');
  }

  function fontLoadFailure(e) {
    console.error('ERROR', e);
    document.body.classList.remove('fonts-loaded');
  }

  Promise.all(fontObservers.map(o => o.load())).then(fontLoadSuccess, fontLoadFailure);

  return true;
}

export default configureFonts;
