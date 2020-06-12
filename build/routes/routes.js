"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const afipClient_1 = require("src/afip/afipClient");
exports.loadRoutes = (app) => {
    var clientRouter = express_1.default.Router();
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use("/client", clientRouter);
    clientRouter.get("/voucherTypes", function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const voucherTypes = yield afipClient_1.getVoucherTypes({ CUIT: "20322583924", production: false });
            res.json(voucherTypes);
        });
    });
    app.get("/", function (req, res) {
        res.send("FACTURADOR-AFIP!");
    });
};
