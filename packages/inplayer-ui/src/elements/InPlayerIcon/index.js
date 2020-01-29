import styled from 'styled-components';

import {
  statusColorPrimary,
  statusColorWarning,
  statusColorInfo,
  statusColorSuccess,
  statusColorDanger,
} from 'packages/inplayer-ui/src/elements/InPlayerIcon/modifiers';
import { fontSizes } from 'packages/inplayer-ui/src/elements/InPlayerIcon/utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifiers = {
  statusColorPrimary,
  statusColorInfo,
  statusColorWarning,
  statusColorSuccess,
  statusColorDanger,
};

const iconContent = {
  heart: '\\e958',
  marketplace: '\\e95a',
  thunder: '\\e95b',
  addFile: '\\e900',
  add: '\\e901',
  analytics: '\\e902',
  angleDown: '\\e903',
  angleLeft: '\\e904',
  angleRight: '\\e905',
  angleUp: '\\e906',
  arrowRight: '\\e907',
  note: '\\e908',
  assets: '\\e909',
  asset: '\\e90b',
  attachment: '\\e90c',
  audience: '\\e90d',
  audio: '\\e90e',
  book: '\\e90f',
  bookmark: '\\e910',
  box: '\\e911',
  bullhorn: '\\e912',
  calculator: '\\e913',
  calendarExpiry: '\\e914',
  calendarPick: '\\e915',
  calendar: '\\e916',
  cardBack: '\\e917',
  cardFront: '\\e918',
  cardHolder: '\\e919',
  cardSwipe: '\\e91a',
  comment: '\\e91b',
  company: '\\e91c',
  delete: '\\e91d',
  desktop: '\\e91e',
  diamond: '\\e91f',
  done: '\\e920',
  download: '\\e921',
  edit: '\\e922',
  email: '\\e923',
  error: '\\e924',
  exit: '\\e925',
  export: '\\e926',
  file: '\\e927',
  flag: '\\e928',
  joystick: '\\e929',
  geoExclude: '\\e92a',
  geoInclude: '\\e92b',
  scriptTags: '\\e92c',
  imageAdd: '\\e92d',
  image: '\\e92e',
  info: '\\e92f',
  inplayer: '\\e930',
  laptop: '\\e931',
  live: '\\e932',
  location: '\\e933',
  lockRepeat: '\\e934',
  lock: '\\e935',
  mobile: '\\e936',
  more: '\\e937',
  music: '\\e938',
  notifications: '\\e939',
  package: '\\e93a',
  palette: '\\e93b',
  pause: '\\e93c',
  pencil: '\\e93d',
  piece: '\\e93e',
  play: '\\e93f',
  presentation: '\\e940',
  quotes: '\\e941',
  recurring: '\\e942',
  reload: '\\e943',
  rss: '\\e944',
  search: '\\e945',
  seed: '\\e946',
  settings: '\\e947',
  share: '\\e948',
  star: '\\e949',
  task: '\\e94a',
  text: '\\e94b',
  tv: '\\e94c',
  upload: '\\e94d',
  userAdd: '\\e94e',
  userDeactivate: '\\e94f',
  userDone: '\\e950',
  userExport: '\\e951',
  user: '\\e952',
  video: '\\e953',
  voucher: '\\e954',
  warning: '\\e955',
  web: '\\e956',
  wordpress: '\\e957',
};

const InPlayerIcon = styled.span`
  ${({ color }) => color && `color: ${color}`};

  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'ipic', Arial, Helvetica, sans-serif !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  font-size: ${fontSizes('medium')};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${applyStyleModifiers(modifiers)};

  ::before {
    content: ${({ name }) => `'${iconContent[name]}'`};
  }
`;

export default InPlayerIcon;
