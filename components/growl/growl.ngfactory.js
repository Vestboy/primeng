"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./growl");
var i2 = require("@angular/common");
var i3 = require("../common/messageservice");
var GrowlModuleNgFactory = i0.ɵcmf(i1.GrowlModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.GrowlModule, i1.GrowlModule, [])]); });
exports.GrowlModuleNgFactory = GrowlModuleNgFactory;
var styles_Growl = [];
var RenderType_Growl = i0.ɵcrt({ encapsulation: 2, styles: styles_Growl, data: {} });
exports.RenderType_Growl = RenderType_Growl;
function View_Growl_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [["msgel", 1]], null, 12, "div", [["aria-live", "polite"], ["class", "ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow"]], null, [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onMessageClick(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_co.onMessageHover(_v.context.index) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-growl-message-info": 0, "ui-growl-message-warn": 1, "ui-growl-message-error": 2, "ui-growl-message-success": 3 }), (_l()(), i0.ɵeld(3, 0, null, null, 9, "div", [["class", "ui-growl-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 0, "div", [["class", "ui-growl-icon-close pi pi-times"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.remove(_v.context.index, i0.ɵnov(_v, 0)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "span", [["class", "ui-growl-image pi"]], null, null, null, null, null)), i0.ɵdid(6, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(7, { "pi-info-circle": 0, "pi-exclamation-triangle": 1, "pi-times": 2, "pi-check": 3 }), (_l()(), i0.ɵeld(8, 0, null, null, 3, "div", [["class", "ui-growl-message"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "span", [["class", "ui-growl-title"]], null, null, null, null, null)), (_l()(), i0.ɵted(10, null, ["", ""])), (_l()(), i0.ɵeld(11, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i0.ɵeld(12, 0, null, null, 0, "div", [["style", "clear: both;"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = "ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow"; var currVal_1 = _ck(_v, 2, 0, (_v.context.$implicit.severity == "info"), (_v.context.$implicit.severity == "warn"), (_v.context.$implicit.severity == "error"), (_v.context.$implicit.severity == "success")); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "ui-growl-image pi"; var currVal_3 = _ck(_v, 7, 0, (_v.context.$implicit.severity == "info"), (_v.context.$implicit.severity == "warn"), (_v.context.$implicit.severity == "error"), (_v.context.$implicit.severity == "success")); _ck(_v, 6, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_4 = _v.context.$implicit.summary; _ck(_v, 10, 0, currVal_4); var currVal_5 = (_v.context.$implicit.detail || ""); _ck(_v, 11, 0, currVal_5); }); }
function View_Growl_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { containerViewChild: 0 }), (_l()(), i0.ɵeld(1, 0, [[1, 0], ["container", 1]], null, 4, "div", [], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵdid(3, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Growl_1)), i0.ɵdid(5, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = "ui-growl ui-widget"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.value; _ck(_v, 5, 0, currVal_3); }, null); }
exports.View_Growl_0 = View_Growl_0;
function View_Growl_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-growl", [], null, null, null, View_Growl_0, RenderType_Growl)), i0.ɵdid(1, 4636672, null, 0, i1.Growl, [i0.ElementRef, i0.IterableDiffers, [2, i3.MessageService], i0.NgZone], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_Growl_Host_0 = View_Growl_Host_0;
var GrowlNgFactory = i0.ɵccf("p-growl", i1.Growl, View_Growl_Host_0, { life: "life", style: "style", styleClass: "styleClass", immutable: "immutable", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", key: "key", value: "value", sticky: "sticky" }, { onClick: "onClick", onHover: "onHover", onClose: "onClose", valueChange: "valueChange" }, []);
exports.GrowlNgFactory = GrowlNgFactory;
//# sourceMappingURL=growl.ngfactory.js.map