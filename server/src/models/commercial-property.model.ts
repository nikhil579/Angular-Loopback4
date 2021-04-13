import { Entity, model, property } from '@loopback/repository';

@model()
export class CommercialProperty extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  ageOfProperty?: string;

  @property({
    type: 'number',
  })
  area?: number;

  @property({
    type: 'number',
  })
  totalUnits?: number;

  @property({
    type: 'number',
  })
  areaBand?: number;

  @property({
    type: 'string',
  })
  price?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  approvals?: string;

  @property({
    type: 'string',
  })
  timeToVisit?: string;

  @property({
    type: 'string',
  })
  loanRequired?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  amenities?: string[];


  constructor(data?: Partial<CommercialProperty>) {
    super(data);
  }
}

export interface CommercialPropertyRelations {
  // describe navigational properties here
}

export type CommercialPropertyWithRelations = CommercialProperty & CommercialPropertyRelations;
