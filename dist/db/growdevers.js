"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectGrowdeversByFilter = exports.deleteByUuid = exports.updateGrowdeverSkills = exports.selectGrowdeverByUsername = exports.selectGrowdeverByUuid = exports.insertGrowdever = exports.selectAllGrowdevers = void 0;
const growdever_1 = require("../models/growdever");
let growdevers = [
    new growdever_1.Growdever('Mateus Andrade', '54026744426', 'mateus-andrade', 'minhasenha123'),
    new growdever_1.Growdever('Jonathas Silva', '09098403182', 'jonathas-silva', 'minhasenha123'),
    new growdever_1.Growdever('Felipe Costa', '41526662345', 'felipe-costa', 'minhasenha123'),
];
const selectAllGrowdevers = () => growdevers;
exports.selectAllGrowdevers = selectAllGrowdevers;
const insertGrowdever = (growdever) => {
    try {
        growdevers.push(growdever);
        return growdever.getUuid();
    }
    catch (error) {
        throw new Error('Erro ao salvar growdever na tabela');
    }
};
exports.insertGrowdever = insertGrowdever;
const selectGrowdeverByUuid = (uuidFilter) => {
    return growdevers.find((growdever) => growdever.getUuid() === uuidFilter);
};
exports.selectGrowdeverByUuid = selectGrowdeverByUuid;
const selectGrowdeverByUsername = (username) => {
    return growdevers.find((growdever) => growdever.getUsername() === username);
};
exports.selectGrowdeverByUsername = selectGrowdeverByUsername;
const updateGrowdeverSkills = (growdever) => {
    const novaLista = growdevers.map(savedGrowdever => {
        if (savedGrowdever.getUuid() === growdever.getUuid()) {
            return growdever;
        }
        return savedGrowdever;
    });
    growdevers = novaLista;
    return growdever;
};
exports.updateGrowdeverSkills = updateGrowdeverSkills;
const deleteByUuid = (uuidToRemove) => {
    const growdeversUpdated = growdevers.filter((growdever) => growdever.getUuid() !== uuidToRemove);
    const removed = growdevers.length > growdeversUpdated.length;
    growdevers = growdeversUpdated;
    return removed;
};
exports.deleteByUuid = deleteByUuid;
const selectGrowdeversByFilter = (nameFilter, statusFilter) => {
    const filteredGrowdevers = growdevers.filter((growdever) => {
        const nameMatches = nameFilter
            ? growdever.getName().toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0
            : true;
        const statusMatches = statusFilter
            ? growdever.getStatus() === statusFilter.toUpperCase()
            : true;
        return nameMatches && statusMatches;
    });
    return filteredGrowdevers;
};
exports.selectGrowdeversByFilter = selectGrowdeversByFilter;
//# sourceMappingURL=growdevers.js.map