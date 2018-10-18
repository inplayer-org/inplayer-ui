function uiColors(color, theme) {
  if (theme) {
    return theme.palette[color];
  }
  return props => props.theme.palette[color];
}

export default uiColors;
