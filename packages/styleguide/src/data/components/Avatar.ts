import { ComponentData } from "../types";

const usage = `
  import { Avatar } from '@inplayer-org/inplayer-ui';

  function Page(props) {
    return <Avatar imageUrl={props.imageUrl} />;
  }
`;

const demoCode = `<Avatar imageUrl="https://assets.inplayer.com/images/merchant-default-avatar.png" />`;

const Avatar: ComponentData = {
  path: 'src/elements/Avatar/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'imageUrl', type: 'string', default: 'https://assets.inplayer.com/images/merchant-default-avatar.png' },
  ],
}

export default Avatar;