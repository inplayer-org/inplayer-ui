import { rem } from 'polished';

const gridScale = scale => props => rem(props.theme.dimensions.baseGrid * scale);

export default gridScale;
