"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSkillGrowdeverController = void 0;
const growdevers_1 = require("../db/growdevers");
const validationError_1 = require("../exceptions/validationError");
const addSkillGrowdeverController = (req, res) => {
    try {
        const uuid = req.params.uuid;
        const user = (0, growdevers_1.selectGrowdeverByUuid)(uuid);
        const skill = req.body.skill;
        if (!skill) {
            throw new validationError_1.ValidationError('Skill not sent');
        }
        if (!user) {
            throw new validationError_1.ValidationError('User not found');
        }
        user === null || user === void 0 ? void 0 : user.addSkills(skill);
        const updatedGrowdever = (0, growdevers_1.updateGrowdeverSkills)(user);
        return res.status(200).json(updatedGrowdever);
    }
    catch (error) {
        if (error instanceof validationError_1.ValidationError) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro ao processar novo growdever' });
    }
};
exports.addSkillGrowdeverController = addSkillGrowdeverController;
//# sourceMappingURL=addSkillGrowdever.js.map