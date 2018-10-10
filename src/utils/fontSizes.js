function fontSizes(size, theme) {
  if (theme) {
    return theme.font.sizes[size];
  }
  return props => props.theme.font.sizes[size];
}

export default fontSizes;
