"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const growdevers_1 = require("../db/growdevers");
const unauthorizedError_1 = require("../exceptions/unauthorizedError");
const validationError_1 = require("../exceptions/validationError");
const authMiddleware = (req, res, next) => {
    try {
        console.log('[auth-middleware] Validando usuário e senha');
        const username = req.headers.username;
        const password = req.headers.password;
        if (!username || !password)
            throw new validationError_1.ValidationError('Usuário e/ou senha não enviados');
        const growdever = (0, growdevers_1.selectGrowdeverByUsername)(username.toString());
        if ((growdever === null || growdever === void 0 ? void 0 : growdever.getPassword()) === password.toString()) {
            next();
        }
        else {
            throw new unauthorizedError_1.UnauthorizedError('Usuario e/ou senha incorretos');
        }
    }
    catch (error) {
        if (error instanceof validationError_1.ValidationError) {
            return res.status(400).json({ message: error.message });
        }
        if (error instanceof unauthorizedError_1.UnauthorizedError) {
            return res.status(401).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Um erro inesperado aconteceu' });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map