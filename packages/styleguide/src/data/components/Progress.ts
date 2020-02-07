import { ComponentData } from "../types";

const usage = `
  import { Progress } from '@inplayer-org/inplayer-ui';

  function Page(props) {
    return (
      <Progress
        type="circle"
        percent="10"
        strokeWidth="4"
        strokeColor="#D3D3D3"
      />
    );
  }
`;

const demoCode = `
  <div>
    <h3>Line Progress 10%</h3>
    <div style={{width: '250px'}}>
      <Progress type="line" percent="10" strokeWidth="2" />
    </div>
    <h3>Circle Progress 40%</h3>
    <div style={{width: '250px',height: '250px', display: 'inline-block'}}>
      <Progress type="circle" percent="40" strokeWidth="3" />
    </div>
  </div>;
`

const Progress: ComponentData = {
  description: ``,
  path: `src/elements/Progress/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'className', type: 'string', description: 'customized className' },
    { name: 'gapDegree', type: 'number', default: '0', description: 'the gap degree of half circle, 0 - 360' },
    { name: 'gapPosition', type: 'string', default: 'top' , description: 'the gap position, value: top, bottom, left, right.' },
    { name: 'percent', type: 'number', default: '0', description: 'the percent of the progress' },
    { name: 'prefixCls', type: 'string', default: 'rc-progress', description: 'A className can be passed down for further styling or extending with CSS-in-JS'},
    { name: 'strokeColor', type: 'string', default: '#07AAE6', description: 'Stroke color' },
    { name: 'strokeLinecap', type:'string', default: 'round', description: 'The shape to be used at the end of the progress bar, can be butt, square or round.' },
    { name: 'strokeWidth', type:'number', default: '1', description: 'Width of the stroke. Unit is percentage of SVG canvas size.' },
    { name: 'style', type:'Object', default: '{}', description: 'style object will be added to svg element' },
    { name: 'trailColor', type:'string', default: '#d7dde5', description: 'Color for lighter trail stroke underneath the actual progress path' },
    { name: 'trailWidth', type: 'number', default:'1', description: 'Width of the trail stroke. Unit is percentage of SVG canvas size. Trail is always centered relative to actual progress path. If trailWidth are not defined, it same as strokeWidth.' },
    { name: 'type', type: 'enum', default:'circle', description: 'One of: circle, line' },
  ]
}

export default Progress;