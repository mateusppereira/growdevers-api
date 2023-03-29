"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminMiddleware = void 0;
const ADMIN_SENHA = 'minha-senha-muito-forte';
const isAdminMiddleware = (req, res, next) => {
    console.log('[is-admin-middleware] Validando request do admin');
    if (req.body['admin-password'] === ADMIN_SENHA) {
        next();
    }
    return res.status(401).json({ message: 'Você não tem permissão' });
};
exports.isAdminMiddleware = isAdminMiddleware;
//# sourceMappingURL=isAdminMiddleware.js.map