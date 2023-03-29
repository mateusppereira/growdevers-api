"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
const growdeverValidatorMiddleware_1 = require("./growdeverValidatorMiddleware");
const isAdminMiddleware_1 = require("./isAdminMiddleware");
const authMiddleware_1 = require("./authMiddleware");
function logMiddleware(req, _, next) {
    console.log('[log-middleware] ---------- ');
    console.log('[log-middleware] Received req ', req.method, req.url);
    console.log('[log-middleware] Request body: ', req.body);
    console.log('[log-middleware] Request params: ', req.params);
    console.log('[log-middleware] Request query: ', req.query);
    console.log('[log-middleware] Request headers: ', req.headers);
    next();
}
const registerMiddlewares = (app) => {
    app.use(logMiddleware);
    app.post('/growdevers', [isAdminMiddleware_1.isAdminMiddleware, growdeverValidatorMiddleware_1.growdeverValidatorMiddleware]);
    app.get('*', authMiddleware_1.authMiddleware);
    app.put('*', authMiddleware_1.authMiddleware);
    app.delete('*', authMiddleware_1.authMiddleware);
};
exports.registerMiddlewares = registerMiddlewares;
//# sourceMappingURL=index.js.map