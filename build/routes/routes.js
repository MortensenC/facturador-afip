"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRoutes = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const afipClient_1 = require("../clients/afip/afipClient");
const generadorPDF_1 = require("../services/generadorPDF");
exports.loadRoutes = (app) => {
    var clientRouter = express_1.default.Router();
    app.use(express_1.default.json());
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use("/afip", clientRouter);
    clientRouter.get("/voucherTypes", function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const voucherTypes = yield afipClient_1.getVoucherTypes({ CUIT: "20322583924", production: false });
            res.json(voucherTypes);
        });
    });
    clientRouter.get("/facturar", function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            generadorPDF_1.generarPDF();
            res.json("Ok");
        });
    });
    clientRouter.get("/fce/consultarTiposFormasCancelacion", function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const state = yield afipClient_1.consultarTiposFormasCancelacionFCE({
                CUIT: "20322583924",
                production: false
            });
            res.json(state);
        });
    });
    clientRouter.get("/fce/dummy", function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const state = yield afipClient_1.dummyFCE({ CUIT: "20322583924", production: false });
            res.json(state);
        });
    });
    clientRouter.get("/fce/consultarComprobantes", function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const state = yield afipClient_1.consultarComprobantesFCE({
                CUIT: "20322583924",
                production: false
            });
            res.json(state);
        });
    });
    clientRouter.get("/fce/consultarObligadoRecepcion", function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const state = yield afipClient_1.consultarObligadoRecepcionFCE({
                CUIT: "20322583924",
                production: false
            });
            res.json(state);
        });
    });
    clientRouter.get("/fce/consultarMontoObligadoRecepcion", function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { cuitConsultada, fechaEmision } = req.body;
            const state = yield afipClient_1.consultarMontoObligadoRecepcionFCE({
                CUIT: "20322583924",
                production: false,
            }, {
                cuitConsultada,
                fechaEmision
            });
            res.json(state);
        });
    });
    clientRouter.get("/fe/dummy", function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const state = yield afipClient_1.facturaElectronicaDummy({
                CUIT: "20322583924",
                production: false
            });
            res.json(state);
        });
    });
    app.get("/", function (req, res) {
        res.send("FACTURADOR-AFIP!");
    });
};
