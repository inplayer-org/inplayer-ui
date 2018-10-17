function paddingSizes(size, theme) {
  if (theme) {
    return theme.padding.sizes[size];
  }
  return props => props.theme.padding.sizes[size];
}

export default paddingSizes;
