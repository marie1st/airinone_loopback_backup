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
import {EmergencyContact} from '../models';
import {EmergencyContactRepository} from '../repositories';

export class EmergencyContactController {
  constructor(
    @repository(EmergencyContactRepository)
    public emergencyContactRepository : EmergencyContactRepository,
  ) {}

  @post('/emergency-contacts', {
    responses: {
      '200': {
        description: 'EmergencyContact model instance',
        content: {'application/json': {schema: getModelSchemaRef(EmergencyContact)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmergencyContact, {
            title: 'NewEmergencyContact',
            
          }),
        },
      },
    })
    emergencyContact: EmergencyContact,
  ): Promise<EmergencyContact> {
    return this.emergencyContactRepository.create(emergencyContact);
  }

  @get('/emergency-contacts/count', {
    responses: {
      '200': {
        description: 'EmergencyContact model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(EmergencyContact) where?: Where<EmergencyContact>,
  ): Promise<Count> {
    return this.emergencyContactRepository.count(where);
  }

  @get('/emergency-contacts', {
    responses: {
      '200': {
        description: 'Array of EmergencyContact model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EmergencyContact, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(EmergencyContact) filter?: Filter<EmergencyContact>,
  ): Promise<EmergencyContact[]> {
    return this.emergencyContactRepository.find(filter);
  }

  @patch('/emergency-contacts', {
    responses: {
      '200': {
        description: 'EmergencyContact PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmergencyContact, {partial: true}),
        },
      },
    })
    emergencyContact: EmergencyContact,
    @param.where(EmergencyContact) where?: Where<EmergencyContact>,
  ): Promise<Count> {
    return this.emergencyContactRepository.updateAll(emergencyContact, where);
  }

  @get('/emergency-contacts/{id}', {
    responses: {
      '200': {
        description: 'EmergencyContact model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EmergencyContact, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(EmergencyContact, {exclude: 'where'}) filter?: FilterExcludingWhere<EmergencyContact>
  ): Promise<EmergencyContact> {
    return this.emergencyContactRepository.findById(id, filter);
  }

  @patch('/emergency-contacts/{id}', {
    responses: {
      '204': {
        description: 'EmergencyContact PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmergencyContact, {partial: true}),
        },
      },
    })
    emergencyContact: EmergencyContact,
  ): Promise<void> {
    await this.emergencyContactRepository.updateById(id, emergencyContact);
  }

  @put('/emergency-contacts/{id}', {
    responses: {
      '204': {
        description: 'EmergencyContact PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() emergencyContact: EmergencyContact,
  ): Promise<void> {
    await this.emergencyContactRepository.replaceById(id, emergencyContact);
  }

  @del('/emergency-contacts/{id}', {
    responses: {
      '204': {
        description: 'EmergencyContact DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.emergencyContactRepository.deleteById(id);
  }
}
