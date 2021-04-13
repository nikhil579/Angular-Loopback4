import { Entity, model, property } from '@loopback/repository';

@model()
export class InformationResidenceApartment extends Entity {
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
    type: 'array',
    itemType: 'string',
  })
  unitLayout?: string[];

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
    type: 'array',
    itemType: 'string',
  })
  parking?: string[];

  @property({
    type: 'number',
  })
  totalfloors?: number;

  @property({
    type: 'number',
  })
  floorNumber?: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  furnishingStatus?: string[];

  @property({
    type: 'string',
  })
  timeToVisit?: string;

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

  constructor(data?: Partial<InformationResidenceApartment>) {
    super(data);
  }
}

export interface InformationResidenceApartmentRelations {
  // describe navigational properties here
}

export type InformationResidenceApartmentWithRelations = InformationResidenceApartment & InformationResidenceApartmentRelations;
