"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGrowdeverController = void 0;
const growdevers_1 = require("../db/growdevers");
const createGrowdeverController = (req, res) => {
    try {
        const newGrowdever = req.body.growdeverToCreate;
        const insertedUuid = (0, growdevers_1.insertGrowdever)(newGrowdever);
        if (insertedUuid) {
            return res.json(newGrowdever);
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Erro ao processar novo growdever' });
    }
};
exports.createGrowdeverController = createGrowdeverController;
//# sourceMappingURL=createGrowdever.js.map