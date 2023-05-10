import { Request, Response } from 'express';
import { query } from '../db/index';

export const createClienteController = async (req: Request, res: Response) => {
  const params = {
    nome: 'Api Cliente',
    cidade: 'São Bernardo',
    estado: 'SP',
    telefone: '12947438229',
    email: 'api@email.com'
  };

  const sql = 'insert into clientes (nome, cidade, estado, telefone, email) values ($1, $2, $3, $4, $5)';
  const sqlParams = [params.nome, params.cidade, params.estado, params.telefone, params.email];
  await query(sql, sqlParams);
  return res.json({ message: 'Cliente inserido com sucesso' });
};
