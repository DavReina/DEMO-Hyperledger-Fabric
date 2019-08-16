"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_core_1 = require("@worldsibu/convector-core");
var motor_model_1 = require("./motor.model");
var MotorController = (function (_super) {
    tslib_1.__extends(MotorController, _super);
    function MotorController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotorController.prototype.create = function (motor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, motor.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(motor_model_1.Motor))
    ], MotorController.prototype, "create", null);
    MotorController = tslib_1.__decorate([
        convector_core_1.Controller('motor')
    ], MotorController);
    return MotorController;
}(convector_core_1.ConvectorController));
exports.MotorController = MotorController;
//# sourceMappingURL=motor.controller.js.map