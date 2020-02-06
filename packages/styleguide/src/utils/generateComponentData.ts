import data from '../data/data';

type UiComponentType = keyof typeof data;

export const getComponent = (componentType: UiComponentType) => {
    return data[componentType] || {};
}