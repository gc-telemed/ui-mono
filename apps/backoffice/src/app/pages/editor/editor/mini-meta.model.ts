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


export interface ModelFields {
  name: string,
  kind: string,
  isList: boolean,
  isRequired: boolean,
  isUnique: boolean,
  isId: boolean,
  isReadOnly: boolean,
  hasDefaultValue: boolean,
  type: string,
  isGenerated: boolean,
  isUpdatedAt: boolean
}

export interface Model {
  [key: string]: ModelFields
}
