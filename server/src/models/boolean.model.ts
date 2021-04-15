import { Entity, model, property } from '@loopback/repository';

@model()
export class Boolean extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'boolean',
  })
  name?: boolean;

  @property({
    type: 'string',
  })
  value?: string;


  constructor(data?: Partial<Boolean>) {
    super(data);
  }
}

export interface BooleanRelations {
  // describe navigational properties here
}

export type BooleanWithRelations = Boolean & BooleanRelations;
