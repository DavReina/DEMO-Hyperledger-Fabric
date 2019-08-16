"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_core_1 = require("@worldsibu/convector-core");
var motocicleta_model_1 = require("./motocicleta.model");
var MotocicletaController = (function (_super) {
    tslib_1.__extends(MotocicletaController, _super);
    function MotocicletaController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotocicletaController.prototype.create = function (motocicleta) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, motocicleta.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(motocicleta_model_1.Motocicleta))
    ], MotocicletaController.prototype, "create", null);
    MotocicletaController = tslib_1.__decorate([
        convector_core_1.Controller('motocicleta')
    ], MotocicletaController);
    return MotocicletaController;
}(convector_core_1.ConvectorController));
exports.MotocicletaController = MotocicletaController;
//# sourceMappingURL=motocicleta.controller.js.map