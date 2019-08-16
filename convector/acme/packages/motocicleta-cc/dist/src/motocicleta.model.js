"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Motocicleta = (function (_super) {
    tslib_1.__extends(Motocicleta, _super);
    function Motocicleta() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.motocicleta';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required()
    ], Motocicleta.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Motocicleta.prototype, "name", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number())
    ], Motocicleta.prototype, "created", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number())
    ], Motocicleta.prototype, "modified", void 0);
    return Motocicleta;
}(convector_core_model_1.ConvectorModel));
exports.Motocicleta = Motocicleta;
//# sourceMappingURL=motocicleta.model.js.map