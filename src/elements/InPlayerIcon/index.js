import styled from 'styled-components';

import {
  statusColorPrimary,
  statusColorWarning,
  statusColorInfo,
  statusColorSuccess,
  statusColorDanger,
} from 'modifiers';
import { fontSizes } from 'utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifiers = {
  statusColorPrimary,
  statusColorInfo,
  statusColorWarning,
  statusColorSuccess,
  statusColorDanger,
};

const iconContent = {
  donate: '\\e958',
  required: '\\e959',
  marketplace: '\\e95a',
  trigger: '\\e95b',
  'add-file': '\\e900',
  add: '\\e901',
  analytics: '\\e902',
  'angle-down': '\\e903',
  'angle-left': '\\e904',
  'angle-right': '\\e905',
  'angle-up': '\\e906',
  'arr-right': '\\e907',
  library: '\\e908',
  'asset-many': '\\e909',
  'asset-one': '\\e90a',
  asset: '\\e90b',
  attachment: '\\e90c',
  audience: '\\e90d',
  audio: '\\e90e',
  book: '\\e90f',
  bookmark: '\\e910',
  box: '\\e911',
  bullhorn: '\\e912',
  calculator: '\\e913',
  'calendar-expiry': '\\e914',
  'calendar-pick': '\\e915',
  calendar: '\\e916',
  'card-back': '\\e917',
  'card-front': '\\e918',
  'card-holder': '\\e919',
  'card-swipe': '\\e91a',
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
  game: '\\e929',
  'geo-exclude': '\\e92a',
  'geo-include': '\\e92b',
  html: '\\e92c',
  'image-add': '\\e92d',
  image: '\\e92e',
  info: '\\e92f',
  inplayer: '\\e930',
  laptop: '\\e931',
  live: '\\e932',
  location: '\\e933',
  'lock-repeat': '\\e934',
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
  'user-add': '\\e94e',
  'user-deactivate': '\\e94f',
  'user-done': '\\e950',
  'user-export': '\\e951',
  user: '\\e952',
  video: '\\e953',
  voucher: '\\e954',
  warning: '\\e955',
  web: '\\e956',
  wordpress: '\\e957',
};

const InPlayerIcon = styled.span`
  ${({ color }) => color && `color: ${color}`};
  width: 20px;
  height: 20px;

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
    width: 20px;
    height: 20px;
  }
`;

export default InPlayerIcon;
