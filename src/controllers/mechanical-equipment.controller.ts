import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {MechanicalEquipment} from '../models';
import {MechanicalEquipmentRepository} from '../repositories';

export class MechanicalEquipmentController {
  constructor(
    @repository(MechanicalEquipmentRepository)
    public mechanicalEquipmentRepository : MechanicalEquipmentRepository,
  ) {}

  @post('/mechanical-equipments', {
    responses: {
      '200': {
        description: 'MechanicalEquipment model instance',
        content: {'application/json': {schema: getModelSchemaRef(MechanicalEquipment)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MechanicalEquipment, {
            title: 'NewMechanicalEquipment',
            
          }),
        },
      },
    })
    mechanicalEquipment: MechanicalEquipment,
  ): Promise<MechanicalEquipment> {
    return this.mechanicalEquipmentRepository.create(mechanicalEquipment);
  }

  @get('/mechanical-equipments/count', {
    responses: {
      '200': {
        description: 'MechanicalEquipment model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(MechanicalEquipment) where?: Where<MechanicalEquipment>,
  ): Promise<Count> {
    return this.mechanicalEquipmentRepository.count(where);
  }

  @get('/mechanical-equipments', {
    responses: {
      '200': {
        description: 'Array of MechanicalEquipment model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(MechanicalEquipment, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(MechanicalEquipment) filter?: Filter<MechanicalEquipment>,
  ): Promise<MechanicalEquipment[]> {
    return this.mechanicalEquipmentRepository.find(filter);
  }

  @patch('/mechanical-equipments', {
    responses: {
      '200': {
        description: 'MechanicalEquipment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MechanicalEquipment, {partial: true}),
        },
      },
    })
    mechanicalEquipment: MechanicalEquipment,
    @param.where(MechanicalEquipment) where?: Where<MechanicalEquipment>,
  ): Promise<Count> {
    return this.mechanicalEquipmentRepository.updateAll(mechanicalEquipment, where);
  }

  @get('/mechanical-equipments/{id}', {
    responses: {
      '200': {
        description: 'MechanicalEquipment model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(MechanicalEquipment, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(MechanicalEquipment, {exclude: 'where'}) filter?: FilterExcludingWhere<MechanicalEquipment>
  ): Promise<MechanicalEquipment> {
    return this.mechanicalEquipmentRepository.findById(id, filter);
  }

  @patch('/mechanical-equipments/{id}', {
    responses: {
      '204': {
        description: 'MechanicalEquipment PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MechanicalEquipment, {partial: true}),
        },
      },
    })
    mechanicalEquipment: MechanicalEquipment,
  ): Promise<void> {
    await this.mechanicalEquipmentRepository.updateById(id, mechanicalEquipment);
  }

  @put('/mechanical-equipments/{id}', {
    responses: {
      '204': {
        description: 'MechanicalEquipment PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() mechanicalEquipment: MechanicalEquipment,
  ): Promise<void> {
    await this.mechanicalEquipmentRepository.replaceById(id, mechanicalEquipment);
  }

  @del('/mechanical-equipments/{id}', {
    responses: {
      '204': {
        description: 'MechanicalEquipment DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.mechanicalEquipmentRepository.deleteById(id);
  }
}
