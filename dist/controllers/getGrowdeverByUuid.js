"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrowdeverByUuidController = void 0;
const growdevers_1 = require("../db/growdevers");
const getGrowdeverByUuidController = (req, res) => {
    const uuidFilter = req.params.uuid;
    const growdeverFound = (0, growdevers_1.selectGrowdeverByUuid)(uuidFilter);
    if (growdeverFound) {
        return res.status(200).json(growdeverFound);
    }
    return res.status(404).json({ message: "Recurso não encontrado" });
};
exports.getGrowdeverByUuidController = getGrowdeverByUuidController;
//# sourceMappingURL=getGrowdeverByUuid.js.map