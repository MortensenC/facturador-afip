"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const routes_1 = require("./routes/routes");
var app = express_1.default();
routes_1.loadRoutes(app);
app.listen(process.env.PORT || 3000, function () {
    console.log(`App listening on port ${process.env.PORT || 3000}!`);
});
