import { ComponentData } from "../types";

const usage = `
  import { Spinner } from '@inplayer-org/inplayer-ui';

  function Page({ isLoading }) {
    if (isLoading) {
      return <Spinner />;
    }

    return (/* Your page content */);
  }
`;

const demoCode = `
<div>
  <Typography variant="h6">Standard loader</Typography>
  <Loader />

  <Typography variant="h6">Loader with custom color</Typography>
  <Loader color="#8cb" />
</div>
`;

const Loader: ComponentData = {
  description: `A simple spinner/loader to use as fallback when doing async operations. By default it inherits the primary.main theme color. Can be passed a color prop with a custom hex color.`,
  path: `src/elements/Loader/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
}

export default Loader;
