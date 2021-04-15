import { Entity, model, property } from '@loopback/repository';

@model()
export class BaseMaster extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  typeName?: string;//to be changed to Name


  constructor(data?: Partial<BaseMaster>) {
    super(data);
  }
}

export interface BaseMasterRelations {
  // describe navigational properties here
}

export type BaseMasterWithRelations = BaseMaster & BaseMasterRelations;
