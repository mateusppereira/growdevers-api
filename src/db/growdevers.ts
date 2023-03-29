import { Growdever } from "../models/growdever";

let growdevers : Growdever[] = [
  new Growdever('Mateus Andrade', '54026744426', 'mateus-andrade', 'minhasenha123'),
  new Growdever('Jonathas Silva', '09098403182', 'jonathas-silva', 'minhasenha123'),
  new Growdever('Felipe Costa', '41526662345', 'felipe-costa', 'minhasenha123'),
]

export const selectAllGrowdevers = () => growdevers;

export const insertGrowdever = (growdever: Growdever) => {
  try {
    growdevers.push(growdever);
    return growdever.getUuid();
  } catch (error) {
    throw new Error('Erro ao salvar growdever na tabela')
  }
};

export const selectGrowdeverByUuid = (uuidFilter: string): Growdever | undefined => {
  return growdevers.find(
    (growdever) => growdever.getUuid() === uuidFilter
  );
}

export const selectGrowdeverByUsername = (username: string): Growdever | undefined => {
  return growdevers.find(
    (growdever) => growdever.getUsername() === username
  );
}

export const updateGrowdeverSkills = (growdever: Growdever) : Growdever => {
  const novaLista = growdevers.map(savedGrowdever => {
    if(savedGrowdever.getUuid() === growdever.getUuid()){
      return growdever;
    }
    return savedGrowdever;
  });
  growdevers = novaLista
  return growdever
}


export const deleteByUuid = (uuidToRemove: string) => {
  const growdeversUpdated = growdevers.filter((growdever) => growdever.getUuid() !== uuidToRemove)
  const removed = growdevers.length > growdeversUpdated.length;
  growdevers = growdeversUpdated;
  return removed 
}

export const selectGrowdeversByFilter = (nameFilter?: string, statusFilter?: string) : Growdever[] => {
  const filteredGrowdevers = growdevers.filter(
    (growdever) => {
      const nameMatches = nameFilter
        ? growdever.getName().toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0
        : true
      const statusMatches = statusFilter
        ? growdever.getStatus() === statusFilter.toUpperCase()
        : true
      return nameMatches && statusMatches;
    },
  )
  return filteredGrowdevers;
}