// 定义一个 “接口”, 用于限制 Person 对象的具体属性
// 暴露
export interface PersonInter {
  id: string
  name: string
  age: number
}

export type Persons = PersonInter[]