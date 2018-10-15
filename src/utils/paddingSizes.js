function paddingSizes(size, theme) {
  if (theme) {
    return theme.padding.sizes[size];
  }
  return props => props.padding.sizes[size];
}

export default paddingSizes;
