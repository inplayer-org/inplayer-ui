function uiColors(color, theme) {
  if (theme) {
    return theme.colors.ui[color];
  }
  return props => props.theme.colors.ui[color];
}

export default uiColors;
