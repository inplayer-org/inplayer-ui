const getDescendantProp = (prop, theme) => prop.split('.').reduce((a, b) => a[b], theme);

export default getDescendantProp;
