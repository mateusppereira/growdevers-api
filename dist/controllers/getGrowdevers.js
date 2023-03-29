"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrowdeversController = void 0;
const growdevers_1 = require("../db/growdevers");
const getGrowdeversController = (req, res) => {
    const nameFilter = req.query.nome;
    if (typeof nameFilter !== 'string' && nameFilter !== undefined) {
        return res.status(400).json({ message: 'Erro' });
    }
    const statusFilter = req.query.status;
    if (typeof statusFilter !== 'string' && statusFilter !== undefined) {
        return res.status(400).json({ message: 'Erro' });
    }
    const allGrowdevers = (0, growdevers_1.selectGrowdeversByFilter)(nameFilter, statusFilter);
    res.json(allGrowdevers);
};
exports.getGrowdeversController = getGrowdeversController;
//# sourceMappingURL=getGrowdevers.js.map