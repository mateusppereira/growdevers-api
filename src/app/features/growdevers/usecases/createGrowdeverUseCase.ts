import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import { Growdever } from "../../../models/growdever";
import { ValidationError } from "../../../shared/exceptions/validationError";
import { GrowdeverRepository } from "../repository";

interface CreateGrowdeverDTO {
  name: string,
  cpf: string,
  username: string,
  password: string,
}

export class CreateGrowdeverUseCase {
  constructor(
    private growdeverRepository: GrowdeverRepository,
  ) {}

  async execute(params: CreateGrowdeverDTO): Promise<Growdever | undefined> {
    if (params.name.split(' ').length < 2) throw new ValidationError('Nome invalido')
    if (!cpfValidator.isValid(params.cpf)) throw new ValidationError('CPF invalido')
    if (params.username.indexOf(' ') >= 0 || params.username.length < 5) throw new ValidationError('Username invalido')
    if (params.password.indexOf(' ') >= 0 || params.password.length < 10) throw new ValidationError('Senha invalida')

    const growdeverToCreate = new Growdever(params.name, params.cpf, params.username, params.password);
    const growdeverCreated = await this.growdeverRepository.createGrowdever(growdeverToCreate);
    return growdeverCreated;
  }
}
