"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const middlewares_1 = require("./middlewares");
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_, res) => {
    res.json({ message: 'API waiting for requests...' });
});
(0, middlewares_1.registerMiddlewares)(app);
(0, routes_1.registerRoutes)(app);
app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map