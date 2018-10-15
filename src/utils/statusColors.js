function statusColors(color, theme) {
  if (theme) {
    return theme.colors.status[color];
  }
  return props => props.theme.colors.status[color];
}

export default statusColors;
