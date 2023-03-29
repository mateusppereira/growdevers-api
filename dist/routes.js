"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const addSkillGrowdever_1 = require("./controllers/addSkillGrowdever");
const createGrowdever_1 = require("./controllers/createGrowdever");
const deleteGrowdever_1 = require("./controllers/deleteGrowdever");
const deleteSkillGrowdever_1 = require("./controllers/deleteSkillGrowdever");
const getGrowdeverByUuid_1 = require("./controllers/getGrowdeverByUuid");
const getGrowdevers_1 = require("./controllers/getGrowdevers");
const updateGrowdever_1 = require("./controllers/updateGrowdever");
function registerRoutes(app) {
    app.get('/growdevers', getGrowdevers_1.getGrowdeversController);
    app.get('/growdevers/:uuid', getGrowdeverByUuid_1.getGrowdeverByUuidController);
    // app.post('/growdevers', (req: Request, res: Response) => createGrowdever(req, res))
    app.post('/growdevers', createGrowdever_1.createGrowdeverController);
    app.put('/growdever/:uuid/add-skills', addSkillGrowdever_1.addSkillGrowdeverController);
    app.put('/growdever/:uuid/remove-skills', deleteSkillGrowdever_1.deleteSkillGrowdeverController);
    app.put('/growdevers/:uuid', updateGrowdever_1.updateGrowdeverController);
    app.delete('/growdevers/:uuid', deleteGrowdever_1.deleteGrowdeverController);
}
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=routes.js.map