function buildGlobalStyles(theme) {
  return `
    html {
      height: 100%;
    }
    body {
      background-color: ${theme.colors.ui.background};
      color: ${theme.colors.ui.text};
      font-family: ${theme.font.primaryFallback};
      font-size: ${theme.font.sizes.medium}px;
      font-weight: 400;
      height: 100%;
      margin: 0;

      button,
      input,
      select,
      textarea {
        font-family: ${theme.font.primaryFallback};
      }

      &.fonts-loaded {
        font-family: ${theme.font.primary};
        button,
        input,
        select,
        textarea {
          font-family: ${theme.font.primary};
        }
      }
    }
  `;
}

export default buildGlobalStyles;
