"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.growdeverValidatorMiddleware = void 0;
const validationError_1 = require("../exceptions/validationError");
const growdever_1 = require("../models/growdever");
const growdeverValidatorMiddleware = (req, res, next) => {
    try {
        console.log('[growdever-validator-middleware] Validating growdever', req.headers);
        const inputName = req.body.name;
        const inputCpf = req.body.cpf;
        const inputUsername = req.body.username;
        const inputPassword = req.body.password;
        const growdeverToCreate = new growdever_1.Growdever(inputName, inputCpf, inputUsername, inputPassword);
        req.body.growdeverToCreate = growdeverToCreate;
        next();
    }
    catch (error) {
        if (error instanceof validationError_1.ValidationError) {
            return res.status(400).json({ message: error.message });
        }
    }
};
exports.growdeverValidatorMiddleware = growdeverValidatorMiddleware;
//# sourceMappingURL=growdeverValidatorMiddleware.js.map