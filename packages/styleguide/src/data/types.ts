export interface PropsAndMethods {
  name: string;
  type: string;
  default?: string;
  description?: string;
}
export interface Example {
  title: string;
  code: string;
}
export interface ComponentData {
  description?: string;
  path: string;
  usage: string;
  examples: Example[];
  propsAndMethods?: PropsAndMethods[],
}