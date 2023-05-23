import { Growdever } from "../../../models/growdever";
import { GrowdeverRepository } from "../repository";

interface GetGrowdeversDTO {
  nameFilter?: string;
  statusFilter?: string;
}

export class GetGrowdeversUseCase {
  constructor(
    private growdeverRepository: GrowdeverRepository,
  ) {}

  async execute(params: GetGrowdeversDTO): Promise<Growdever[]> {
    const allGrowdevers = await this.growdeverRepository.getAllGrowdevers();
    return allGrowdevers;
  }
}
