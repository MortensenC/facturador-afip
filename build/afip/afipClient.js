"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Afip = require("@afipsdk/afip.js");
function facturar(params) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const afip = new Afip(params);
    });
}
exports.facturar = facturar;
function getVoucherTypes(params) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const afip = new Afip(params);
        const res = yield afip.ElectronicBilling.getVoucherTypes();
        console.log(res);
    });
}
exports.getVoucherTypes = getVoucherTypes;
