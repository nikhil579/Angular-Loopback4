import {Entity, model, property} from '@loopback/repository';

@model()
export class GenderMaster extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  genderType?: string;


  constructor(data?: Partial<GenderMaster>) {
    super(data);
  }
}

export interface GenderMasterRelations {
  // describe navigational properties here
}

export type GenderMasterWithRelations = GenderMaster & GenderMasterRelations;
