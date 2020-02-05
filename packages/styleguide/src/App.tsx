import React, { FunctionComponent } from 'react';
import CodePreview from './components/CodePreview';
import CodeEditor from './components/CodeEditor';
import { generateExamples, getUsage } from './utils/generateComponentData';

const App: FunctionComponent<{}> = () => (
    <div>
        <CodeEditor code={generateExamples('Checkbox')} scopeComponent="Checkbox" />
        <CodePreview code={getUsage('Checkbox')} />
    </div>

);

export default App;
