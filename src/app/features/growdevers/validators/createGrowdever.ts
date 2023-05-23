import { ValidationError } from "../../../shared/exceptions/validationError";

export const validateCreateGrowdever = (params: any) => {
  const name = params.name
  if (typeof name !== 'string' && name !== undefined) {
    throw new ValidationError('Nome obrigatório');
  }

  const cpf = params.cpf
  if (typeof cpf !== 'string' && cpf !== undefined) {
    throw new ValidationError('CPF obrigatório');
  }

  const username = params.username
  if (typeof username !== 'string' && username !== undefined) {
    throw new ValidationError('Username obrigatório');
  }

  const password = params.password
  if (typeof password !== 'string' && password !== undefined) {
    throw new ValidationError('Senha obrigatória');
  }

  return {
    name: name as string,
    cpf: cpf as string,
    username: username as string,
    password: password as string,
  }
}
