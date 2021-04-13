import { Entity, model, property } from '@loopback/repository';

@model()
export class ResidenceVilla extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  societyName?: string;

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
  price?: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  parking?: string;

  @property({
    type: 'string',
  })
  furnishingStatus?: string;

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

  constructor(data?: Partial<ResidenceVilla>) {
    super(data);
  }
}

export interface ResidenceVillaRelations {
  // describe navigational properties here
}

export type ResidenceVillaWithRelations = ResidenceVilla & ResidenceVillaRelations;
