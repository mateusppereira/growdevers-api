import { v4 as uuidv4 } from 'uuid';

export class Address {
  constructor(
    private street: string,
    private city: string,
    private uf: string,
    private createdAt: string,
    private updatedAt: string,
    private uuid: string = uuidv4(),
  ) {
  }
}