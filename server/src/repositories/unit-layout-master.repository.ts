import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {UnitLayoutMaster, UnitLayoutMasterRelations} from '../models';

export class UnitLayoutMasterRepository extends DefaultCrudRepository<
  UnitLayoutMaster,
  typeof UnitLayoutMaster.prototype.id,
  UnitLayoutMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(UnitLayoutMaster, dataSource);
  }
}
