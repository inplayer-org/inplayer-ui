function fontWeights(weight, theme) {
  if (theme) {
    return theme.font.weights[weight];
  }
  return props => props.theme.font.weights[weight];
}

export default fontWeights;
