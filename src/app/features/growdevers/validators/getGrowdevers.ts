import { ValidationError } from "../../../shared/exceptions/validationError";

export const validateGetGrowdevers = (params: any) => {
  const nameFilter = params.nome
  if (typeof nameFilter !== 'string' && nameFilter !== undefined) {
    throw new ValidationError('Filtro nome inválido');
  }

  const statusFilter = params.status
  if (typeof statusFilter !== 'string' && statusFilter !== undefined) {
    throw new ValidationError('Filtro status inválido');
  }

  return {
    nameFilter: nameFilter as string,
    statusFilter: statusFilter as string,
  }
}
