import { ComponentData } from "../types";

const usage = `
  import { TextArea } from '@inplayer-org/inplayer-ui';

  function Page(props) {
    return <TextArea defaultValue="Buy now" />;
  }
`;

const demoCode = `<TextArea defaultValue="Buy now" />`

const TextArea: ComponentData = {
  description: `Text area is a input component for text area. You can use it directly like this:`,
  path: `src/elements/TextArea/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
}

export default TextArea;