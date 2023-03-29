"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGrowdeverController = void 0;
const growdevers_1 = require("../db/growdevers");
const deleteGrowdeverController = (req, res) => {
    const uuidToRemove = req.params.uuid;
    const removed = (0, growdevers_1.deleteByUuid)(uuidToRemove);
    if (removed) {
        return res.status(200).json({});
    }
    return res.status(404).json({ message: "Recurso não encontrado" });
};
exports.deleteGrowdeverController = deleteGrowdeverController;
//# sourceMappingURL=deleteGrowdever.js.map