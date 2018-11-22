A simple spinner/loader to use as fallback when doing async operations.
By default it inherits the `primary.main` theme color.
Can be passed a `color` prop with a custom hex color.

```jsx static
import { Spinner } from '@inplayer-org/inplayer-ui';

function Page({ isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  return (/* Your page content */);
}
```

### Demo

```jsx
<Typography variant="h6">Standard loader</Typography>
<Loader />

<Typography variant="h6">Loader with custom color</Typography>
<Loader color="#8cb" />
```
