"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var i0 = require("@angular/core");
var InnerMessageService = /** @class */ (function () {
    function InnerMessageService() {
        this.subject = new rxjs_1.Subject();
    }
    InnerMessageService.prototype.sendMessage = function (message) {
        this.subject.next(message);
    };
    InnerMessageService.prototype.clearMessage = function () {
        this.subject.next();
    };
    InnerMessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    InnerMessageService.ngInjectableDef = i0.defineInjectable({ factory: function InnerMessageService_Factory() { return new InnerMessageService(); }, token: InnerMessageService, providedIn: "root" });
    InnerMessageService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], InnerMessageService);
    return InnerMessageService;
}());
exports.InnerMessageService = InnerMessageService;
//# sourceMappingURL=inner.message.service.js.map