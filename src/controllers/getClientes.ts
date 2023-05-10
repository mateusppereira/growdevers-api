import { Request, Response } from 'express';
import { query } from '../db/index';

export const getClientesController = async (req: Request, res: Response) => {
  const { id } = req.params; 
  const sql = 'select * from clientes where id = $1';
  const sqlParams = [id];
  const result = await query(sql, sqlParams);
  if (result.length === 0) {
    return res.status(404).json({ message: 'Cliente não encontrado' });
  }
  return res.json({ cliente: result[0] });
};
