## Loader

### Usage

```jsx
import {Triangle} from '@inplayer-org/inplayer-ui'

const Loager = () => (
    <Triangle height={150} width={150} direction="left" color="red" lineWidth={4} />
)

export const Loader;

```

|   name    |     types    |   default  | Detail                            | Possible inputs |
| :-----:   | :----------: | :--------: | :-----------:                     | :------------:  |
| height    | Number       |  100       | Height of the svg spinner         |   any number |
| width     | Number       |  100       | Width of the svg spinner          |   any number |
| color     | String       |  "#2062a1" | Defines the color of the spinner  |   any color |
| lineWidth | Number       |  2         | Defines the width of the lines    |   any number |
| direction | String       | "right"    | Direction of the spinner          |   "up", "right", "down", "left" |