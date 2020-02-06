import data from '../data/data';

type UiComponentType = keyof typeof data;

export const getExamples = (componentType: UiComponentType) => {
    const component = data[componentType];
    return component ? component.examples : [];
}

export const getUsage = (componentType: UiComponentType) => {
    const component = data[componentType];
    return component ? component.usage : ``;
}

export const getPropsAndMethods = (componentType: UiComponentType) => {
    const component = data[componentType];
    return component ? component.propsAndMethods : ``;
}

export const getComponent = (componentType: UiComponentType) => {
    return data[componentType] || {};
}