export interface MiniModelFields {
  modelName: string,
  name: string,
  typeName: string,
  isList: boolean,
  isEnum: boolean
}

export interface MiniModel {
  [key: string]: MiniModelFields
}
