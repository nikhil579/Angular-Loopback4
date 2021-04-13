import { Entity, model, property } from '@loopback/repository';

@model()
export class InformationCommercialProperty extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  approvals?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  loanRequired?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  amenities?: string[];

  constructor(data?: Partial<InformationCommercialProperty>) {
    super(data);
  }
}

export interface InformationCommercialPropertyRelations {
  // describe navigational properties here
}

export type InformationCommercialPropertyWithRelations = InformationCommercialProperty & InformationCommercialPropertyRelations;
