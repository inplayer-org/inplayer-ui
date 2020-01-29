import { rem } from 'packages/inplayer-ui/src/utils/polished';

const gridScale = scale => props => rem(props.theme.dimensions.baseGrid * scale);

export default gridScale;
