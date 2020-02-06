import data from '../data/data';

type UiComponentType = keyof typeof data;

export const getPropsAndMethods = (componentType: UiComponentType) => {
    const component = data[componentType];
    return component ? component.propsAndMethods : ``;
}

export const getComponent = (componentType: UiComponentType) => {
    return data[componentType] || {};
}