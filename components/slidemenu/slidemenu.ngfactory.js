"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./slidemenu");
var i2 = require("../../../../node_modules/@angular/router/router.ngfactory");
var i3 = require("@angular/common");
var i4 = require("@angular/router");
var SlideMenuModuleNgFactory = i0.ɵcmf(i1.SlideMenuModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i4.RouterModule, i4.RouterModule, [[2, i4.ɵangular_packages_router_router_a], [2, i4.Router]]), i0.ɵmpd(1073742336, i1.SlideMenuModule, i1.SlideMenuModule, [])]); });
exports.SlideMenuModuleNgFactory = SlideMenuModuleNgFactory;
var styles_SlideMenuSub = [];
var RenderType_SlideMenuSub = i0.ɵcrt({ encapsulation: 2, styles: styles_SlideMenuSub, data: {} });
exports.RenderType_SlideMenuSub = RenderType_SlideMenuSub;
function View_SlideMenuSub_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "li", [["class", "ui-menu-separator ui-widget-content"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-helper-hidden": 0 })], function (_ck, _v) { var currVal_0 = "ui-menu-separator ui-widget-content"; var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit.visible === false)); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_SlideMenuSub_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "ui-menuitem-icon"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null)], function (_ck, _v) { var currVal_0 = "ui-menuitem-icon"; var currVal_1 = _v.parent.parent.parent.context.$implicit.icon; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_SlideMenuSub_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "span", [["class", "ui-submenu-icon pi pi-fw pi-caret-right"]], null, null, null, null, null))], null, null); }
function View_SlideMenuSub_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "a", [["class", "ui-menuitem-link ui-corner-all"]], [[8, "href", 4], [1, "target", 0], [1, "title", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.itemClick($event, _v.parent.parent.context.$implicit, i0.ɵnov(_v.parent, 0)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-state-disabled": 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenuSub_5)), i0.ɵdid(4, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 1, "span", [["class", "ui-menuitem-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(6, null, ["", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenuSub_6)), i0.ɵdid(8, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_4 = "ui-menuitem-link ui-corner-all"; var currVal_5 = _ck(_v, 2, 0, _v.parent.parent.context.$implicit.disabled); _ck(_v, 1, 0, currVal_4, currVal_5); var currVal_6 = _v.parent.parent.context.$implicit.icon; _ck(_v, 4, 0, currVal_6); var currVal_8 = _v.parent.parent.context.$implicit.items; _ck(_v, 8, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = (_v.parent.parent.context.$implicit.url || "#"); var currVal_1 = _v.parent.parent.context.$implicit.target; var currVal_2 = _v.parent.parent.context.$implicit.title; var currVal_3 = _v.parent.parent.context.$implicit.id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_7 = _v.parent.parent.context.$implicit.label; _ck(_v, 6, 0, currVal_7); }); }
function View_SlideMenuSub_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "ui-menuitem-icon"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null)], function (_ck, _v) { var currVal_0 = "ui-menuitem-icon"; var currVal_1 = _v.parent.parent.parent.context.$implicit.icon; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_SlideMenuSub_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "span", [["class", "ui-submenu-icon pi pi-fw pi-caret-right"]], null, null, null, null, null))], null, null); }
function View_SlideMenuSub_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 13, "a", [["class", "ui-menuitem-link ui-corner-all"]], [[8, "href", 4], [1, "target", 0], [1, "title", 0], [1, "id", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.itemClick($event, _v.parent.parent.context.$implicit, i0.ɵnov(_v.parent, 0)) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-state-disabled": 0 }), i0.ɵdid(3, 671744, [[2, 4]], 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i3.LocationStrategy], { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] }, null), i0.ɵdid(4, 1720320, null, 2, i4.RouterLinkActive, [i4.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), i0.ɵqud(603979776, 1, { links: 1 }), i0.ɵqud(603979776, 2, { linksWithHrefs: 1 }), i0.ɵpod(7, { exact: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenuSub_8)), i0.ɵdid(9, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(10, 0, null, null, 1, "span", [["class", "ui-menuitem-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(11, null, ["", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenuSub_9)), i0.ɵdid(13, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_6 = "ui-menuitem-link ui-corner-all"; var currVal_7 = _ck(_v, 2, 0, _v.parent.parent.context.$implicit.disabled); _ck(_v, 1, 0, currVal_6, currVal_7); var currVal_8 = _v.parent.parent.context.$implicit.queryParams; var currVal_9 = _v.parent.parent.context.$implicit.routerLink; _ck(_v, 3, 0, currVal_8, currVal_9); var currVal_10 = (_v.parent.parent.context.$implicit.routerLinkActiveOptions || _ck(_v, 7, 0, false)); var currVal_11 = "ui-state-active"; _ck(_v, 4, 0, currVal_10, currVal_11); var currVal_12 = _v.parent.parent.context.$implicit.icon; _ck(_v, 9, 0, currVal_12); var currVal_14 = _v.parent.parent.context.$implicit.items; _ck(_v, 13, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = (_v.parent.parent.context.$implicit.url || "#"); var currVal_1 = _v.parent.parent.context.$implicit.target; var currVal_2 = _v.parent.parent.context.$implicit.title; var currVal_3 = _v.parent.parent.context.$implicit.id; var currVal_4 = i0.ɵnov(_v, 3).target; var currVal_5 = i0.ɵnov(_v, 3).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_13 = _v.parent.parent.context.$implicit.label; _ck(_v, 11, 0, currVal_13); }); }
function View_SlideMenuSub_10(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-slideMenuSub", [["class", "ui-submenu"]], null, null, null, View_SlideMenuSub_0, RenderType_SlideMenuSub)), i0.ɵdid(1, 180224, null, 0, i1.SlideMenuSub, [i1.SlideMenu], { item: [0, "item"], menuWidth: [1, "menuWidth"], index: [2, "index"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.parent.context.$implicit; var currVal_1 = _co.menuWidth; var currVal_2 = (_co.index + 1); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_SlideMenuSub_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [["listitem", 1]], null, 9, "li", [], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-menuitem ui-widget ui-corner-all": 0, "ui-menuitem-active": 1, "ui-helper-hidden": 2 }), i0.ɵdid(3, 278528, null, 0, i3.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenuSub_4)), i0.ɵdid(5, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenuSub_7)), i0.ɵdid(7, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenuSub_10)), i0.ɵdid(9, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit.styleClass; var currVal_1 = _ck(_v, 2, 0, true, (i0.ɵnov(_v, 0) == _co.activeItem), (_v.parent.context.$implicit.visible === false)); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _v.parent.context.$implicit.style; _ck(_v, 3, 0, currVal_2); var currVal_3 = !_v.parent.context.$implicit.routerLink; _ck(_v, 5, 0, currVal_3); var currVal_4 = _v.parent.context.$implicit.routerLink; _ck(_v, 7, 0, currVal_4); var currVal_5 = _v.parent.context.$implicit.items; _ck(_v, 9, 0, currVal_5); }, null); }
function View_SlideMenuSub_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenuSub_2)), i0.ɵdid(1, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenuSub_3)), i0.ɵdid(3, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.separator; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_v.context.$implicit.separator; _ck(_v, 3, 0, currVal_1); }, null); }
function View_SlideMenuSub_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "ul", [], [[4, "width", "px"], [4, "left", "px"], [4, "transitionProperty", null], [4, "transitionDuration", null], [4, "transitionTimingFunction", null]], null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(2, { "ui-slidemenu-rootlist": 0, "ui-submenu-list": 1, "ui-active-submenu": 2 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenuSub_1)), i0.ɵdid(4, 278528, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_5 = _ck(_v, 2, 0, _co.root, !_co.root, ((0 - _co.slideMenu.left) == (_co.index * _co.menuWidth))); _ck(_v, 1, 0, currVal_5); var currVal_6 = (_co.root ? _co.item : _co.item.items); _ck(_v, 4, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.menuWidth; var currVal_1 = (_co.root ? _co.slideMenu.left : _co.slideMenu.menuWidth); var currVal_2 = (_co.root ? "left" : "none"); var currVal_3 = (_co.effectDuration + "ms"); var currVal_4 = _co.easing; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
exports.View_SlideMenuSub_0 = View_SlideMenuSub_0;
function View_SlideMenuSub_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-slideMenuSub", [], null, null, null, View_SlideMenuSub_0, RenderType_SlideMenuSub)), i0.ɵdid(1, 180224, null, 0, i1.SlideMenuSub, [i1.SlideMenu], null, null)], null, null); }
exports.View_SlideMenuSub_Host_0 = View_SlideMenuSub_Host_0;
var SlideMenuSubNgFactory = i0.ɵccf("p-slideMenuSub", i1.SlideMenuSub, View_SlideMenuSub_Host_0, { item: "item", root: "root", backLabel: "backLabel", menuWidth: "menuWidth", effectDuration: "effectDuration", easing: "easing", index: "index" }, {}, []);
exports.SlideMenuSubNgFactory = SlideMenuSubNgFactory;
var styles_SlideMenu = [];
var RenderType_SlideMenu = i0.ɵcrt({ encapsulation: 2, styles: styles_SlideMenu, data: { "animation": [{ type: 7, name: "overlayAnimation", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { transform: "translateY(5%)", opacity: 0 }, offset: null }, options: undefined }, { type: 0, name: "visible", styles: { type: 6, styles: { transform: "translateY(0)", opacity: 1 }, offset: null }, options: undefined }, { type: 1, expr: "void => visible", animation: { type: 4, styles: null, timings: "{{showTransitionParams}}" }, options: null }, { type: 1, expr: "visible => void", animation: { type: 4, styles: null, timings: "{{hideTransitionParams}}" }, options: null }], options: {} }] } });
exports.RenderType_SlideMenu = RenderType_SlideMenu;
function View_SlideMenu_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [[1, 0], ["container", 1]], null, 13, "div", [], [[24, "@overlayAnimation", 0], [24, "@.disabled", 0]], [[null, "click"], [null, "@overlayAnimation.start"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("@overlayAnimation.start" === en)) {
        var pd_1 = (_co.onOverlayAnimationStart($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i3.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-slidemenu ui-widget ui-widget-content ui-corner-all": 0, "ui-slidemenu-dynamic ui-shadow": 1 }), i0.ɵdid(3, 278528, null, 0, i3.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(4, { showTransitionParams: 0, hideTransitionParams: 1 }), i0.ɵpod(5, { value: 0, params: 1 }), (_l()(), i0.ɵeld(6, 0, null, null, 7, "div", [["class", "ui-slidemenu-wrapper"]], [[4, "height", "px"]], null, null, null, null)), (_l()(), i0.ɵeld(7, 0, [[3, 0], ["slideMenuContent", 1]], null, 2, "div", [["class", "ui-slidemenu-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 1, "p-slideMenuSub", [["root", "root"]], null, null, null, View_SlideMenuSub_0, RenderType_SlideMenuSub)), i0.ɵdid(9, 180224, null, 0, i1.SlideMenuSub, [i1.SlideMenu], { item: [0, "item"], root: [1, "root"], menuWidth: [2, "menuWidth"], effectDuration: [3, "effectDuration"], easing: [4, "easing"], index: [5, "index"] }, null), (_l()(), i0.ɵeld(10, 0, [[2, 0], ["backward", 1]], null, 3, "div", [["class", "ui-slidemenu-backward ui-widget-header ui-corner-all"]], [[4, "display", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(11, 0, null, null, 0, "span", [["class", "ui-slidemenu-backward-icon pi pi-fw pi-caret-left"]], null, null, null, null, null)), (_l()(), i0.ɵeld(12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(13, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.styleClass; var currVal_3 = _ck(_v, 2, 0, true, _co.popup); _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_4 = _co.style; _ck(_v, 3, 0, currVal_4); var currVal_6 = _co.model; var currVal_7 = "root"; var currVal_8 = _co.menuWidth; var currVal_9 = _co.effectDuration; var currVal_10 = _co.easing; var currVal_11 = 0; _ck(_v, 9, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 5, 0, "visible", _ck(_v, 4, 0, _co.showTransitionOptions, _co.hideTransitionOptions)); var currVal_1 = (_co.popup !== true); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_5 = _co.viewportHeight; _ck(_v, 6, 0, currVal_5); var currVal_12 = (_co.left ? "block" : "none"); _ck(_v, 10, 0, currVal_12); var currVal_13 = _co.backLabel; _ck(_v, 13, 0, currVal_13); }); }
function View_SlideMenu_0(_l) { return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { container: 0 }), i0.ɵqud(671088640, 2, { backward: 0 }), i0.ɵqud(671088640, 3, { slideMenuContent: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SlideMenu_1)), i0.ɵdid(4, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.popup || _co.visible); _ck(_v, 4, 0, currVal_0); }, null); }
exports.View_SlideMenu_0 = View_SlideMenu_0;
function View_SlideMenu_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-slideMenu", [], null, null, null, View_SlideMenu_0, RenderType_SlideMenu)), i0.ɵdid(1, 8568832, null, 0, i1.SlideMenu, [i0.ElementRef, i0.Renderer2], null, null)], null, null); }
exports.View_SlideMenu_Host_0 = View_SlideMenu_Host_0;
var SlideMenuNgFactory = i0.ɵccf("p-slideMenu", i1.SlideMenu, View_SlideMenu_Host_0, { model: "model", popup: "popup", style: "style", styleClass: "styleClass", menuWidth: "menuWidth", viewportHeight: "viewportHeight", effectDuration: "effectDuration", easing: "easing", backLabel: "backLabel", appendTo: "appendTo", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions" }, {}, []);
exports.SlideMenuNgFactory = SlideMenuNgFactory;
//# sourceMappingURL=slidemenu.ngfactory.js.map