import data from '../data/data';

const generateProps = (example: any) => {
    return (
        Object.keys(example).map(x => typeof example[x] === "boolean" ? `${x}` : `${x} = ${example[x]}`).join(' ')
    );
}

const generateExample = (componentType: string, example: any) => {
    return (
        `<${componentType} ${generateProps(example)} />`
    );
}

export const generateExamples = (componentType: string) => {
    const component = data.Checkbox;
    return (
        `
        <div>
        ${component.examples.map(x => generateExample(componentType, x)).join('\n \t')}
        </div>
        `
    );
}

export const getUsage = (componentType: string) => {
    const component = data.Checkbox;
    return component.usage;
}