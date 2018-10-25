Tooltip a is a component that contains three components: TooltipHolder, Tooltipneed and TooltoipInfo. You can use it directly like this:

```jsx static
import { Tooltip } from 'inplayer-ui';
const { TooltipHolder, Tipneed, TooltipInfo } = Tooltip;

function Page(props) {
  return (
    <TooltipHolder>
      <Tipneed>
        <TooltipInfo>{info}</TooltipInfo>
      </Tipneed>
    </TooltipHolder>
  );
}
```
