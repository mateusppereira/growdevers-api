"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Growdever = void 0;
const uuid_1 = require("uuid");
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
const validationError_1 = require("../exceptions/validationError");
const SKILLS_VALIDAS = ['Dedicado', 'Criativo', 'Pro-ativo'];
class Growdever {
    constructor(name, cpf, username, password, status = 'MATRICULADO', skills = []) {
        this.name = name;
        this.cpf = cpf;
        this.username = username;
        this.password = password;
        this.status = status;
        this.skills = skills;
        if (name.split(' ').length < 2)
            throw new validationError_1.ValidationError('Nome invalido');
        if (!cpf_cnpj_validator_1.cpf.isValid(cpf))
            throw new validationError_1.ValidationError('CPF invalido');
        if (username.indexOf(' ') >= 0 || username.length < 5)
            throw new validationError_1.ValidationError('Username invalido');
        if (password.indexOf(' ') >= 0 || password.length < 10)
            throw new validationError_1.ValidationError('Senha invalida');
        this.uuid = (0, uuid_1.v4)();
    }
    getUuid() {
        return this.uuid;
    }
    getName() {
        return this.name;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getCPF() {
        return this.cpf;
    }
    getStatus() {
        return this.status;
    }
    getSkills() {
        return this.skills;
    }
    addSkills(skill) {
        if (SKILLS_VALIDAS.map(i => i.toLowerCase()).includes(skill.toLowerCase())) {
            this.skills.push(skill);
        }
        else {
            const error = new validationError_1.ValidationError('Skill invalida');
            throw error;
        }
    }
    removeSkills(skill) {
        if (!SKILLS_VALIDAS.includes(skill)) {
            throw new validationError_1.ValidationError('Skill não existe.');
        }
        if (this.skills.includes(skill)) {
            const indexOf = this.skills.indexOf(skill);
            this.skills.splice(indexOf, 1);
        }
    }
}
exports.Growdever = Growdever;
//# sourceMappingURL=growdever.js.map