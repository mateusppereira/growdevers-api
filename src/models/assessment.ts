import { v4 as uuidv4 } from 'uuid';

export class Assessment {
  constructor(
    private subject: string,
    private grade: number,
    private date: string,
    private createdAt: string,
    private updatedAt: string,
    private uuid: string = uuidv4(),
  ) {
  }
}