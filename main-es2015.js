(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./projects/angular-kit/src/lib/components/button/button.component.ts":
/*!****************************************************************************!*\
  !*** ./projects/angular-kit/src/lib/components/button/button.component.ts ***!
  \****************************************************************************/
/*! exports provided: MuiButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuiButtonComponent", function() { return MuiButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["*"];
class MuiButtonComponent {
    constructor() {
        this.color = 'primary';
        this.size = 'm';
        this.style$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.style = {};
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Если флаг @isCustom установлен,
     * тогда может принимать в себя конфигурации для настройки стилей кнопки
     */
    set congif(config) {
        this.style = this.congif;
        if (this.isCustom) {
            this.style$.next(this.congif);
        }
        console.log(config);
    }
    /**
     * Если флаг @isCustom установлен,
     * тогда может принимать в себя конфигурации для настройки стилей контента кнопки
     */
    set contentConfig(conf) {
    }
    ngOnInit() {
    }
}
MuiButtonComponent.ɵfac = function MuiButtonComponent_Factory(t) { return new (t || MuiButtonComponent)(); };
MuiButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MuiButtonComponent, selectors: [["mui-button"]], hostVars: 3, hostBindings: function MuiButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-host-color", ctx.color)("data-host-size", ctx.size)("data-host-disabled", ctx.disabled);
    } }, inputs: { color: "color", size: "size", disabled: "disabled", appearance: "appearance", showLoader: "showLoader", colorScheme: "colorScheme", isCustom: "isCustom", congif: "congif", contentConfig: "contentConfig" }, outputs: { click: "click" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[3, "disabled", "ngStyle", "click"], [1, "mui-button-wrapper"], [1, "left-icon"], [1, "right-icon"]], template: function MuiButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MuiButtonComponent_Template_button_click_0_listener($event) { return ctx.click.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngStyle", ctx.style);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: inherit;\n  position: relative;\n  border: 0;\n  outline: 0;\n  width: inherit;\n  height: inherit;\n  color: inherit;\n  cursor: inherit;\n  border-radius: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 16px;\n  color: #333;\n}\n[data-host-size=\"xs\"][_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\n[_nghost-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  box-sizing: border-box;\n  transition: 0.3s ease-in-out;\n  border-radius: 4px;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n}\n[data-host-disabled=\"true\"][_nghost-%COMP%] {\n  opacity: 0.56;\n  cursor: default;\n}\n[data-host-size=\"xs\"][_nghost-%COMP%] {\n  height: 24px;\n  font-size: 13px;\n  line-height: 17px;\n}\n[data-host-size=\"s\"][_nghost-%COMP%] {\n  height: 32px;\n  font-size: 13px;\n  line-height: 17px;\n}\n[data-host-size=\"m\"][_nghost-%COMP%] {\n  height: 40px;\n  font-size: 15px;\n  line-height: 20px;\n}\n[data-host-size=\"l\"][_nghost-%COMP%] {\n  height: 44px;\n  line-height: 24px;\n  font-size: 17px;\n}\n[data-host-size=\"xl\"][_nghost-%COMP%] {\n  height: 56px;\n  font-size: 17px;\n  line-height: 24px;\n}\n[data-host-color=\"primary\"][_nghost-%COMP%] {\n  background-color: #ffdd2d;\n  transition: 0.3s ease-in-out;\n}\n[data-host-color=\"primary\"][_nghost-%COMP%]:hover:not([data-host-disabled=\"true\"]) {\n  background-color: #fcc521;\n  transition: 0.3s ease-in-out;\n}\n[data-host-color=\"success\"][_nghost-%COMP%] {\n  background-color: #39b54a;\n  transition: 0.3s ease-in-out;\n  color: #fff;\n}\n[data-host-color=\"success\"][_nghost-%COMP%]:hover:not([data-host-disabled=\"true\"]) {\n  background-color: #2ca53a;\n  transition: 0.3s ease-in-out;\n  color: #fff;\n}\n[data-host-color=\"secondary\"][_nghost-%COMP%] {\n  background-color: #ecf1f7;\n  transition: 0.3s ease-in-out;\n}\n[data-host-color=\"secondary\"][_nghost-%COMP%]:hover:not([data-host-disabled=\"true\"]) {\n  background-color: #e4ebf3;\n  transition: 0.3s ease-in-out;\n}\n[data-host-color=\"error\"][_nghost-%COMP%] {\n  background-color: #e01f19;\n  transition: 0.3s ease-in-out;\n  color: #fff;\n}\n[data-host-color=\"error\"][_nghost-%COMP%]:hover:not([data-host-disabled=\"true\"]) {\n  background-color: #d3120e;\n  transition: 0.3s ease-in-out;\n  color: #fff;\n}\n[data-host-color=\"info\"][_nghost-%COMP%] {\n  background-color: #1771e6;\n  transition: 0.3s ease-in-out;\n  color: #fff;\n}\n[data-host-color=\"info\"][_nghost-%COMP%]:hover:not([data-host-disabled=\"true\"]) {\n  background-color: #1464cc;\n  transition: 0.3s ease-in-out;\n  color: #fff;\n}\n[data-host-color=\"warning\"][_nghost-%COMP%] {\n  background-color: #ffdd2d;\n  transition: 0.3s ease-in-out;\n  color: #333;\n}\n[data-host-color=\"warning\"][_nghost-%COMP%]:hover:not([data-host-disabled=\"true\"]) {\n  background-color: #fcc521;\n  transition: 0.3s ease-in-out;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FuZ3VsYXIta2l0L3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvcHJvamVjdHMvYW5ndWxhci1raXQvc3JjL2xpYi9hc3NldHMvc3R5bGVzL2ZsZXgtZGlyZWN0aW9uLmxlc3MiLCJwcm9qZWN0cy9hbmd1bGFyLWtpdC9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5zdHlsZS5sZXNzIiwicHJvamVjdHMvYW5ndWxhci1raXQvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9wcm9qZWN0cy9hbmd1bGFyLWtpdC9zcmMvbGliL2Fzc2V0cy9zdHlsZXMvZmxleC10ZXh0Lmxlc3MiLCJwcm9qZWN0cy9hbmd1bGFyLWtpdC9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3Byb2plY3RzL2FuZ3VsYXIta2l0L3NyYy9saWIvYXNzZXRzL3N0eWxlcy9mbGV4LXNwYWNlcy5sZXNzIiwicHJvamVjdHMvYW5ndWxhci1raXQvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9wcm9qZWN0cy9hbmd1bGFyLWtpdC9zcmMvbGliL2Fzc2V0cy9zdHlsZXMvZmxleC1idXR0b25zLmxlc3MiLCJwcm9qZWN0cy9hbmd1bGFyLWtpdC9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3Byb2plY3RzL2FuZ3VsYXIta2l0L3NyYy9saWIvYXNzZXRzL3N0eWxlcy9mbGV4LWNvbHVtcy5sZXNzIiwicHJvamVjdHMvYW5ndWxhci1raXQvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9wcm9qZWN0cy9hbmd1bGFyLWtpdC9zcmMvbGliL2Fzc2V0cy9zdHlsZXMvZmxleC10YWJsZS5sZXNzIiwicHJvamVjdHMvYW5ndWxhci1raXQvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9wcm9qZWN0cy9hbmd1bGFyLWtpdC9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxtQkFBQTtBQ0NaO0FERVE7RUFDSSw4QkFBQTtBQ0FaO0FER1E7RUFDSSw2QkFBQTtBQ0RaO0FESVE7RUFDSSx5QkFBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0FDSFo7QURNUTtFQUNJLHVCQUFBO0FDSlo7QURPUTtFQUNJLHFCQUFBO0FDTFo7QURhSTtFQUNJLHNCQUFBO0FDWFI7QURhUTtFQUNJLHVCQUFBO0FDWFo7QURjUTtFQUNJLDhCQUFBO0FDWlo7QURlUTtFQUNJLDZCQUFBO0FDYlo7QURnQlE7RUFDSSxtQkFBQTtBQ2RaO0FEaUJRO0VBQ0kscUJBQUE7QUNmWjtBRGtCUTtFQUNJLHVCQUFBO0FDaEJaO0FEbUJRO0VBQ0kscUJBQUE7QUNqQlo7QURzQkk7RUFDSSxlQUFBO0FDcEJSO0FEeUJBO0VBQ0ksV0FBQTtBQ3ZCSjtBQ3hEQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUQwREo7QUN4REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBRDBEUjtBQ3ZESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FEeURSO0FDdERJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FEd0RSO0FDckRJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FEdURSO0FDcERJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FEc0RSO0FDbkRJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FEcURSO0FDbERJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEb0RSO0FDakRJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEbURSO0FDaERJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEa0RSO0FDL0NJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEaURSO0FDOUNJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEZ0RSO0FDN0NJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEK0NSO0FDNUNJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEOENSO0FDM0NJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FENkNSO0FDMUNJO0VBQ0ksaUJBQUE7QUQ0Q1I7QUN4Q0k7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUQwQ1I7QUN4Q1E7RUFDSSxZQUFBO0VBQ0EscUNBQUE7QUQwQ1o7QUN2Q1E7RUFDSSxVQUFBO0VBQ0EscUNBQUE7QUR5Q1o7QUNqQ0E7RUFDSSxZQUFBO0VBQ0EsNENBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FEa0NKO0FDaENJO0VBQ0ksVUFBQTtFQUNBLDRDQUFBO0VBRUEsZ0NBQUE7QURpQ1I7QUM3QkE7RUFDSSxVQUFBO0VBQ0EsNENBQUE7RUFFQSxnQ0FBQTtBRDhCSjtBQzNCQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FENkJKO0FDMUJBO0VBQ0kseUJBQUE7RUFDQSxrQ0FBQTtBRDRCSjtBRWxOQTtFRm9ORSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FFck5JO0VBQ0ksZUFBQTtBRnVOUjtBRXBOSTtFQUNJLGlCQUFBO0FGc05SO0FFbk5JO0VBQ0ksaUJBQUE7QUZxTlI7QUVsTkk7RUFDSSxrQkFBQTtBRm9OUjtBRWpOSTtFQUNJLGtCQUFBO0FGbU5SO0FFaE5JO0VBQ0ksa0JBQUE7QUZrTlI7QUUvTUk7RUFDSSxrQkFBQTtBRmlOUjtBRTlNSTtFQUNJLGtCQUFBO0FGZ05SO0FFN01JO0VBQ0ksa0JBQUE7QUYrTVI7QUU1TUk7RUFDSSxrQkFBQTtBRjhNUjtBRTNNSTtFQUNJLGtCQUFBO0FGNk1SO0FFeE1JO0VBQ0ksY0FBQTtBRjBNUjtBRXZNSTtFQUNJLGdCQUFBO0FGeU1SO0FFdE1JO0VBQ0ksZ0JBQUE7QUZ3TVI7QUVyTUk7RUFDSSxpQkFBQTtBRnVNUjtBRXBNSTtFQUNJLGlCQUFBO0FGc01SO0FFbk1JO0VBQ0ksaUJBQUE7QUZxTVI7QUVsTUk7RUFDSSxpQkFBQTtBRm9NUjtBRWpNSTtFQUNJLGlCQUFBO0FGbU1SO0FFaE1JO0VBQ0ksaUJBQUE7QUZrTVI7QUUvTEk7RUFDSSxpQkFBQTtBRmlNUjtBRTlMSTtFQUNJLGlCQUFBO0FGZ01SO0FFM0xJO0VBQ0ksZ0JBQUE7QUY2TFI7QUUxTEk7RUFDSSxrQkFBQTtBRjRMUjtBRXpMSTtFQUNJLGtCQUFBO0FGMkxSO0FFeExJO0VBQ0ksbUJBQUE7QUYwTFI7QUV2TEk7RUFDSSxtQkFBQTtBRnlMUjtBRXRMSTtFQUNJLG1CQUFBO0FGd0xSO0FFckxJO0VBQ0ksbUJBQUE7QUZ1TFI7QUVwTEk7RUFDSSxtQkFBQTtBRnNMUjtBRW5MSTtFQUNJLG1CQUFBO0FGcUxSO0FFbExJO0VBQ0ksbUJBQUE7QUZvTFI7QUVqTEk7RUFDSSxtQkFBQTtBRm1MUjtBRTlLSTtFQUNJLGFBQUE7QUZnTFI7QUU3S0k7RUFDSSxlQUFBO0FGK0tSO0FFNUtJO0VBQ0ksZUFBQTtBRjhLUjtBRTNLSTtFQUNJLGdCQUFBO0FGNktSO0FFMUtJO0VBQ0ksZ0JBQUE7QUY0S1I7QUV6S0k7RUFDSSxnQkFBQTtBRjJLUjtBRXhLSTtFQUNJLGdCQUFBO0FGMEtSO0FFdktJO0VBQ0ksZ0JBQUE7QUZ5S1I7QUV0S0k7RUFDSSxnQkFBQTtBRndLUjtBRXJLSTtFQUNJLGdCQUFBO0FGdUtSO0FFcEtJO0VBQ0ksZ0JBQUE7QUZzS1I7QUc1VkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBSDhWSjtBRzFWUTtFQUNJLGtEQUFBO0FINFZaO0FHelZRO0VBQ0ksMENBQUE7QUgyVlo7QUd4VlE7RUFDSSxZQUFBO0FIMFZaO0FHdlZRO0VBQ0ksa0RBQUE7RUFDQSw2QkFBQTtBSHlWWjtBR3RWUTtFQUNJLDBDQUFBO0VBQ0EsNkJBQUE7QUh3Vlo7QUdyVlE7RUFDSSxvREFBQTtBSHVWWjtBR3BWUTtFQUNJLDRDQUFBO0FIc1ZaO0FHbFZRO0VBQ0ksZ0RBQUE7QUhvVlo7QUdqVlE7RUFDSSx3Q0FBQTtFQUNBLDZCQUFBO0FIbVZaO0FHaFZRO0VBQ0ksK0NBQUE7QUhrVlo7QUcvVVE7RUFDSSx1Q0FBQTtFQUNBLDZCQUFBO0FIaVZaO0FHNVVRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUg2VVo7QUcxVVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSDJVWjtBR3hVUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FIeVVaO0FHcFVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FIc1VKO0FHblVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FIcVVKO0FJOVpJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBSmdhUjtBS3RhQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FMd2FKO0FLcmFBO0VBQ0ksZ0NBQUE7QUx1YUo7QUtwYUE7O0VBR0ksc0JBQUE7RUFDQSxnQkFBQTtBTHNhSjtBS25hQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUxxYUo7QUtsYUE7RUFFSSwrQkFBQTtFQUVBLHlCQUFBO0VBRUEsdUNBQUE7RUFDQSxVQUFBO0FMb2FKO0FLamFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FMbWFKO0FLaGFBO0VBQ0ksbUJBQUE7QUxrYUo7QUsvWkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUxpYUo7QUs5WkE7RUFDSSxtQkFBQTtBTGdhSjtBSzdaQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMK1pKO0FLNVpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUw4Wko7QUszWkE7RUFDSSw2QkFBQTtBTDZaSjtBSzFaQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMNFpKO0FLelpBOztFQUVJLFlBQUE7QUwyWko7QUt4WkE7RUFDSSxlQUFBO0FMMFpKO0FLdlpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUx5Wko7QUt0WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTHdaSjtBS3JaQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMdVpKO0FLcFpBO0VBQ0ksc0JBQUE7QUxzWko7QUtuWkE7O0VBRUksZUFBQTtBTHFaSjtBS2xaQTs7RUFFSSxnQkFBQTtBTG9aSjtBS2paQTs7RUFFSSxrQkFBQTtBTG1aSjtBS2haQTs7RUFFSSxpQkFBQTtBTGtaSjtBSy9ZQTs7RUFFSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUxpWko7QU16aEJJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBTjJoQlI7QU14aEJJO0VBQ0ksZ0JBQUE7QU4waEJSO0FNdGhCQTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FOd2hCSjtBTXRoQkk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBTndoQlI7QU1uaEJJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBTnFoQlI7QU1saEJJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBTm9oQlI7QU1qaEJJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBTm1oQlI7QU1oaEJJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBTmtoQlI7QU0vZ0JJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBTmloQlI7QU05Z0JJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBTmdoQlI7QU03Z0JJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBTitnQlI7QU01Z0JJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QU44Z0JSO0FNM2dCSTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FONmdCUjtBTTFnQkk7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FONGdCUjtBTXpnQkk7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FOMmdCUjtBTXhnQkk7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBTjBnQlI7QU12Z0JJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QU55Z0JSO0FNdGdCSTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FOd2dCUjtBTXJnQkk7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBTnVnQlI7QU1wZ0JJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QU5zZ0JSO0FNbmdCSTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FOcWdCUiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLWtpdC9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmX2hvcml6b250YWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICYtbWlkZGxlIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWVuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJl93cmFwIHtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuXG5cbiAgICB9XG5cblxuICAgICZfdmVydGljYWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICYtbWlkZGxlIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jZW50ZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcmlnaHQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICZfd3JhcCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG59XG5cblxuLmZ1bGwtc2l6ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleF9ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4X2hvcml6b250YWwtbWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X2hvcml6b250YWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF9ob3Jpem9udGFsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF9ob3Jpem9udGFsX3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleF9ob3Jpem9udGFsLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3ZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLW1pZGRsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfdmVydGljYWwtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmZsZXhfdmVydGljYWwtbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZsZXhfdmVydGljYWwtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZmxleF93cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZ1bGwtc2l6ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm11aS10ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2gxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g1IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9ib2R5LXhsIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktcyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvZHkteHMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tdWktdGV4dF9saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5tdWktdGV4dF9saW5rLWhvdmVyZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5yb3V0ZXJfbGluayB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3V0ZXJfbGluay1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG59XG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuLm11aS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tdWktc3BhY2Uge1xuICAvKiBSSUdIVCBTUEFDRSAqL1xuICAvKiBMRUZUIFNQQUNFICovXG4gIC8qIEJPVFRPTSBTUEFDRSAqL1xuICAvKiBUT1AgU1BBQ0UgKi9cbn1cbi5tdWktc3BhY2VfcmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTMge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTYge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTcge1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTgge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTkge1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTAge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5tdWktc3BhY2VfbGVmdC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC02IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNyB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi5tdWktc3BhY2VfbGVmdC05IHtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm11aS1zcGFjZV9ib3R0b20tMSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS02IHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTcge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS05IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5tdWktc3BhY2VfdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm11aS1zcGFjZV90b3AtMSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0zIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tdWktc3BhY2VfdG9wLTQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLm11aS1zcGFjZV90b3AtNSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC02IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTcge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLm11aS1zcGFjZV90b3AtOCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4ubXVpLXNwYWNlX3RvcC05IHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5tdWktYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9zaXplLWwge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtbSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25fc2l6ZS1zIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWNvbF9tZC0zIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxudGFibGUubXVpLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjOTU5YmE0O1xufVxuLm11aS10YWJsZV9fdHIge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgb3V0bGluZTogMDtcbn1cbi5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzMzMztcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgY29sb3I6ICM3OTgxOGM7XG59XG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGhlaWdodDogNzlweDtcbn1cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG46aG9zdCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBjb2xvcjogIzMzMztcbn1cbjpob3N0W2RhdGEtaG9zdC1zaXplPVwieHNcIl0gYnV0dG9uIHtcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cbjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdFtkYXRhLWhvc3QtZGlzYWJsZWQ9XCJ0cnVlXCJdIHtcbiAgb3BhY2l0eTogMC41NjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuOmhvc3RbZGF0YS1ob3N0LXNpemU9XCJ4c1wiXSB7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cbjpob3N0W2RhdGEtaG9zdC1zaXplPVwic1wiXSB7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cbjpob3N0W2RhdGEtaG9zdC1zaXplPVwibVwiXSB7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbjpob3N0W2RhdGEtaG9zdC1zaXplPVwibFwiXSB7XG4gIGhlaWdodDogNDRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbjpob3N0W2RhdGEtaG9zdC1zaXplPVwieGxcIl0ge1xuICBoZWlnaHQ6IDU2cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG46aG9zdFtkYXRhLWhvc3QtY29sb3I9XCJwcmltYXJ5XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQyZDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbjpob3N0W2RhdGEtaG9zdC1jb2xvcj1cInByaW1hcnlcIl06aG92ZXI6bm90KFtkYXRhLWhvc3QtZGlzYWJsZWQ9XCJ0cnVlXCJdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2M1MjE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdFtkYXRhLWhvc3QtY29sb3I9XCJzdWNjZXNzXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YjU0YTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdFtkYXRhLWhvc3QtY29sb3I9XCJzdWNjZXNzXCJdOmhvdmVyOm5vdChbZGF0YS1ob3N0LWRpc2FibGVkPVwidHJ1ZVwiXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNhNTNhO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0W2RhdGEtaG9zdC1jb2xvcj1cInNlY29uZGFyeVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YxZjc7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdFtkYXRhLWhvc3QtY29sb3I9XCJzZWNvbmRhcnlcIl06aG92ZXI6bm90KFtkYXRhLWhvc3QtZGlzYWJsZWQ9XCJ0cnVlXCJdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGViZjM7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdFtkYXRhLWhvc3QtY29sb3I9XCJlcnJvclwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDFmMTk7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3RbZGF0YS1ob3N0LWNvbG9yPVwiZXJyb3JcIl06aG92ZXI6bm90KFtkYXRhLWhvc3QtZGlzYWJsZWQ9XCJ0cnVlXCJdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzEyMGU7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3RbZGF0YS1ob3N0LWNvbG9yPVwiaW5mb1wiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzcxZTY7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3RbZGF0YS1ob3N0LWNvbG9yPVwiaW5mb1wiXTpob3Zlcjpub3QoW2RhdGEtaG9zdC1kaXNhYmxlZD1cInRydWVcIl0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NjRjYztcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdFtkYXRhLWhvc3QtY29sb3I9XCJ3YXJuaW5nXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQyZDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICMzMzM7XG59XG46aG9zdFtkYXRhLWhvc3QtY29sb3I9XCJ3YXJuaW5nXCJdOmhvdmVyOm5vdChbZGF0YS1ob3N0LWRpc2FibGVkPVwidHJ1ZVwiXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNjNTIxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogIzMzMztcbn1cbiIsIi5tdWktdGV4dCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgICAmX2gxIHtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDIge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbV9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LXMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS14cyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cblxuICAgICZfbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICAgJi1ob3ZlcmVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaG92ZXJlZDpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgICAgICAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG4ucm91dGVyX2xpbmsge1xuICAgIG9wYWNpdHk6IC43O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgJi1hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG4gICAgfVxufVxuXG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MDUxNTQ7XG59XG5cbi5tdWktbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgICBjb2xvcjogIzIzYmE5OSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbn1cbiIsIi5tdWktc3BhY2Uge1xuICAgIC8qIFJJR0hUIFNQQUNFICovXG5cbiAgICAmX3JpZ2h0LTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0yIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0zIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC02IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTgge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC05IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogTEVGVCBTUEFDRSAqL1xuXG4gICAgJl9sZWZ0LTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTIge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0zIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgICZfbGVmdC02IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC05IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogQk9UVE9NIFNQQUNFICovXG5cbiAgICAmX2JvdHRvbS0wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgIC8qIFRPUCBTUEFDRSAqL1xuXG4gICAgJl90b3AtMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJl90b3AtMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG5cbiAgICAmX3RvcC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgICZfdG9wLTYge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTcge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTgge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTkge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTEwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG59XG4iLCIubXVpLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcblxuXG4gICAgJl9jb2xvciB7XG4gICAgICAgICYtcHJpbWFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5W2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MtaG92ZXJlZCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2VzcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgICYtZXJyb3I6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZXJyb3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfc2l6ZSB7XG4gICAgICAgICYtbCB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMzYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLW0ge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbiIsIi5tdWktY29sIHtcblxuICAgICZfbWQtMyB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG4iLCJ0YWJsZS5tdWktdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZCxcbi5tdWktdGFibGVfX3RoIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICM5NTliYTQ7XG59XG5cbi5tdWktdGFibGVfX3RyIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGhlaWdodDogNTVweDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2hvdmVyX2Rpc2FibGVkKTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cblxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDRweCAwIDA7XG4gICAgY29sb3I6ICM3OTgxOGM7XG59XG5cbi5tdWktdGFibGVfbGF5b3V0X2ZpeGVkIHtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdHJfYm9yZGVyX3RvcCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGhlaWdodDogNzlweDtcbn1cblxuLm11aS10YWJsZV9fdHJfY3Vyc29yX3BvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX2xhc3QsXG4ubXVpLXRhYmxlX190aF9sYXN0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9vdmVyZmxvdyxcbi5tdWktdGFibGVfX3RoX3RleHRfb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL2ZsZXgtbGlicmFyeS5sZXNzXCI7XG5cbkBmb250LXNpemUtbTogMTVweDtcbkBmb250LXNpemUtczogMTNweDtcbkBmb250LXNpemUtbDogMTdweDtcblxuQGxpbmUtaGVpZ2h0LXM6IDE3cHg7XG5AbGluZS1oZWlnaHQtbTogMjBweDtcbkBsaW5lLWhlaWdodC1sOiAyNHB4O1xuXG5cbi8vIEJBU0UgXG5cblxuXG5cblxuYnV0dG9uIHtcbiAgICA6aG9zdFtkYXRhLWhvc3RdICYge1xuICAgIH1cbn1cblxuYnV0dG9uIHtcbiAgICA6aG9zdCAmIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgOmhvc3RbZGF0YS1ob3N0LXNpemU9XCJ4c1wiXSAmIHtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICB9XG59XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXJhZGl1czogQG11aS1yYWRpdXM7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJltkYXRhLWhvc3QtZGlzYWJsZWQ9XCJ0cnVlXCJdIHtcbiAgICAgICAgb3BhY2l0eTogMC41NjtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgIC8vIC5tdWktYnV0dG9uLXdyYXBwZXIge31cblxuICAgICZbZGF0YS1ob3N0LXNpemU9XCJ4c1wiXSB7XG4gICAgICAgIGhlaWdodDogQG11aS1oZWlnaHQteHM7XG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1zO1xuICAgICAgICBsaW5lLWhlaWdodDogQGxpbmUtaGVpZ2h0LXM7XG4gICAgfVxuXG4gICAgJltkYXRhLWhvc3Qtc2l6ZT1cInNcIl0ge1xuICAgICAgICBoZWlnaHQ6IEBtdWktaGVpZ2h0LXM7XG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1zO1xuICAgICAgICBsaW5lLWhlaWdodDogQGxpbmUtaGVpZ2h0LXM7XG4gICAgfVxuXG4gICAgJltkYXRhLWhvc3Qtc2l6ZT1cIm1cIl0ge1xuICAgICAgICBoZWlnaHQ6IEBtdWktaGVpZ2h0LW07XG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1tO1xuICAgICAgICBsaW5lLWhlaWdodDogQGxpbmUtaGVpZ2h0LW07XG4gICAgfVxuXG4gICAgJltkYXRhLWhvc3Qtc2l6ZT1cImxcIl0ge1xuICAgICAgICBoZWlnaHQ6IEBtdWktaGVpZ2h0LWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBAbGluZS1oZWlnaHQtbDtcbiAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLWw7XG4gICAgfVxuXG4gICAgJltkYXRhLWhvc3Qtc2l6ZT1cInhsXCJdIHtcbiAgICAgICAgaGVpZ2h0OiBAbXVpLWhlaWdodC14bDtcbiAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBAbGluZS1oZWlnaHQtbDtcbiAgICB9XG5cbiAgICAmW2RhdGEtaG9zdC1jb2xvcj1cInByaW1hcnlcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbXVpLWNvbG9yLXByaW1hcnk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgJltkYXRhLWhvc3QtY29sb3I9XCJwcmltYXJ5XCJdOmhvdmVyOm5vdChbZGF0YS1ob3N0LWRpc2FibGVkPVwidHJ1ZVwiXSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAmW2RhdGEtaG9zdC1jb2xvcj1cInN1Y2Nlc3NcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbXVpLWNvbG9yLXN1Y2Nlc3M7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGNvbG9yOiBAbXVpLWNvbG9yLWJsYW5rO1xuICAgIH1cblxuICAgICZbZGF0YS1ob3N0LWNvbG9yPVwic3VjY2Vzc1wiXTpob3Zlcjpub3QoW2RhdGEtaG9zdC1kaXNhYmxlZD1cInRydWVcIl0pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQ7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGNvbG9yOiBAbXVpLWNvbG9yLWJsYW5rO1xuICAgIH1cblxuICAgICZbZGF0YS1ob3N0LWNvbG9yPVwic2Vjb25kYXJ5XCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG11aS1jb2xvci1zZWNvbmRhcnk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgJltkYXRhLWhvc3QtY29sb3I9XCJzZWNvbmRhcnlcIl06aG92ZXI6bm90KFtkYXRhLWhvc3QtZGlzYWJsZWQ9XCJ0cnVlXCJdKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBtdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQ7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgJltkYXRhLWhvc3QtY29sb3I9XCJlcnJvclwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBtdWktY29sb3ItZXJyb3I7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGNvbG9yOiBAbXVpLWNvbG9yLWJsYW5rO1xuICAgIH1cblxuICAgICZbZGF0YS1ob3N0LWNvbG9yPVwiZXJyb3JcIl06aG92ZXI6bm90KFtkYXRhLWhvc3QtZGlzYWJsZWQ9XCJ0cnVlXCJdKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBtdWktY29sb3ItZXJyb3ItaG92ZXJlZDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgY29sb3I6IEBtdWktY29sb3ItYmxhbms7XG4gICAgfVxuXG4gICAgJltkYXRhLWhvc3QtY29sb3I9XCJpbmZvXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG11aS1jb2xvci1pbmZvO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICBjb2xvcjogQG11aS1jb2xvci1ibGFuaztcbiAgICB9XG5cbiAgICAmW2RhdGEtaG9zdC1jb2xvcj1cImluZm9cIl06aG92ZXI6bm90KFtkYXRhLWhvc3QtZGlzYWJsZWQ9XCJ0cnVlXCJdKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBtdWktY29sb3ItaW5mby1ob3ZlcmVkO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICBjb2xvcjogQG11aS1jb2xvci1ibGFuaztcbiAgICB9XG5cbiAgICAmW2RhdGEtaG9zdC1jb2xvcj1cIndhcm5pbmdcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbXVpLWNvbG9yLXdhcm5pbmc7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGNvbG9yOiBAbXVpLWNvbG9yLXRleHQ7XG4gICAgfVxuXG4gICAgJltkYXRhLWhvc3QtY29sb3I9XCJ3YXJuaW5nXCJdOmhvdmVyOm5vdChbZGF0YS1ob3N0LWRpc2FibGVkPVwidHJ1ZVwiXSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbXVpLWNvbG9yLXdhcm5pbmctaG92ZXJlZDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgY29sb3I6IEBtdWktY29sb3ItdGV4dDtcbiAgICB9XG59XG4iXX0= */"], data: { animation: [] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuiButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mui-button',
                templateUrl: './button.template.html',
                styleUrls: ['./button.style.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [],
            }]
    }], function () { return []; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.data-host-color']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.data-host-size']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.data-host-disabled']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showLoader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colorScheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCustom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], congif: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./projects/angular-kit/src/lib/components/button/button.module.ts":
/*!*************************************************************************!*\
  !*** ./projects/angular-kit/src/lib/components/button/button.module.ts ***!
  \*************************************************************************/
/*! exports provided: MuiButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuiButtonModule", function() { return MuiButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component */ "./projects/angular-kit/src/lib/components/button/button.component.ts");




class MuiButtonModule {
}
MuiButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MuiButtonModule });
MuiButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MuiButtonModule_Factory(t) { return new (t || MuiButtonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MuiButtonModule, { declarations: [_button_component__WEBPACK_IMPORTED_MODULE_2__["MuiButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_button_component__WEBPACK_IMPORTED_MODULE_2__["MuiButtonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuiButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _button_component__WEBPACK_IMPORTED_MODULE_2__["MuiButtonComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _button_component__WEBPACK_IMPORTED_MODULE_2__["MuiButtonComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/angular-kit/src/lib/components/icon/icon.component.ts":
/*!************************************************************************!*\
  !*** ./projects/angular-kit/src/lib/components/icon/icon.component.ts ***!
  \************************************************************************/
/*! exports provided: MuiIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuiIconComponent", function() { return MuiIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MuiIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "linearGradient", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_199_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_200_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_205_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_206_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_212_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_214_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_215_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_216_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_217_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_219_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_220_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_221_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_222_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_223_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_227_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_229_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_230_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_232_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_233_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_234_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_235_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_237_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_238_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_240_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_241_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_242_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MuiIconComponent_ng_container_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class MuiIconComponent {
    constructor() {
        this.src = '';
        this.type = '';
        this.cursor = 'pointer';
    }
}
MuiIconComponent.ɵfac = function MuiIconComponent_Factory(t) { return new (t || MuiIconComponent)(); };
MuiIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MuiIconComponent, selectors: [["mui-icon"]], inputs: { src: "src", type: "type", cursor: "cursor" }, decls: 244, vars: 244, consts: [[4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "focusable", "false"], ["fill", "currentColor", "d", "M15.3 9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.3 3.3c-.8.8-2 .8-2.8 0l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 13l3.3-3.3z"], ["d", "M10 13c1.7 2.2 4.8 2.7 7 1 .2-.1.4-.3.5-.5l2-2c1.9-2 1.8-5.2-.2-7.1-1.9-1.9-5-1.9-6.9 0l-.7.7M14 11c-1.7-2.2-4.8-2.7-7-1-.2.1-.4.3-.5.5l-2 2c-1.9 2-1.8 5.2.2 7.1 1.9 1.9 5 1.9 6.9 0l.7-.7", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "xmlns", "http://www.w3.org/2000/svg", "focusable", "false"], ["fill", "none", "fill-rule", "evenodd"], ["fill-opacity", ".01", "fill", "#FFF", "fill-rule", "nonzero", "d", "M0 0h32v32H0z"], ["d", "M16 23.634a8.325 8.325 0 0 0 3.704-6.93c0-2.89-1.47-5.435-3.704-6.93a8.333 8.333 0 1 1 0 13.86z", "fill", "#0AADFC"], ["d", "M16 9.774a8.325 8.325 0 0 0-3.704 6.93c0 2.889 1.47 5.435 3.704 6.93a8.333 8.333 0 1 1 0-13.86z", "fill", "#F03727"], ["d", "M16 9.774a8.325 8.325 0 0 1 3.704 6.93c0 2.889-1.47 5.435-3.704 6.93a8.325 8.325 0 0 1-3.704-6.93c0-2.89 1.47-5.435 3.704-6.93z", "fill", "#726ECC"], ["fill-rule", "nonzero", "fill", "none"], ["fill-opacity", ".01", "fill", "#FFF", "d", "M0 0h32v32H0z"], ["fill", "#0057A0", "d", "M11.257 21.302l1.618-9.143h2.587l-1.619 9.143zM23.226 12.384A6.909 6.909 0 0 0 20.907 12c-2.556 0-4.357 1.24-4.372 3.017-.014 1.314 1.286 2.047 2.267 2.485 1.007.448 1.346.734 1.34 1.134-.006.613-.803.893-1.547.893-1.036 0-1.586-.139-2.435-.48l-.334-.146-.363 2.047c.605.255 1.722.477 2.882.488 2.72 0 4.485-1.226 4.505-3.124.01-1.04-.68-1.832-2.172-2.484-.904-.423-1.458-.705-1.452-1.134 0-.38.469-.786 1.481-.786a4.93 4.93 0 0 1 1.937.35l.231.106.351-1.982M29.86 12.168h-1.999c-.62 0-1.083.162-1.355.758l-3.842 8.38h2.717s.444-1.127.545-1.375l3.313.004c.077.32.315 1.37.315 1.37h2.4l-2.094-9.137zm-3.19 5.893c.214-.527 1.03-2.556 1.03-2.556-.014.024.213-.53.344-.873l.175.789.599 2.64H26.67zM9.087 12.166L6.554 18.4l-.27-1.267c-.471-1.461-1.94-3.044-3.582-3.836l2.316 7.996 2.737-.003 4.073-9.125h-2.74"], ["d", "M4.205 12.16H.033L0 12.35c3.246.757 5.393 2.586 6.285 4.784l-.908-4.202c-.156-.58-.61-.752-1.172-.772", "fill", "#FAA61A"], ["fill", "#0057A0"], ["d", "M11.855 26.393h-1.647v1.466h1.843v.441H9.652v-4.069h2.304v.441h-1.748v1.286h1.647v.435zm1.047-2.38h.555V28.3h-.555v-4.286zm1.956 2.923c.012.718.486 1.014 1.047 1.014.398 0 .644-.066.847-.15l.1.38a2.591 2.591 0 0 1-1.022.187c-.94 0-1.502-.598-1.502-1.48 0-.88.542-1.57 1.432-1.57 1.004 0 1.263.834 1.263 1.371 0 .109-.007.187-.02.248h-2.145zm1.628-.38c.007-.332-.145-.858-.77-.858-.568 0-.808.49-.852.857h1.622zm3.559 1.642c-.145.066-.467.169-.877.169-.922 0-1.521-.598-1.521-1.491 0-.9.643-1.558 1.64-1.558.328 0 .619.078.77.157l-.126.404a1.412 1.412 0 0 0-.644-.139c-.7 0-1.079.501-1.079 1.105 0 .677.455 1.093 1.06 1.093.316 0 .524-.072.682-.139l.095.399zm1.558-3.52v.7h.795v.404h-.795v1.576c0 .363.107.568.416.568.152 0 .24-.012.322-.036l.026.404a1.58 1.58 0 0 1-.493.073c-.259 0-.467-.085-.6-.223-.15-.164-.214-.423-.214-.767v-1.595h-.474v-.404h.474v-.543l.543-.157zm1.57 1.612c0-.344-.006-.64-.025-.912h.486l.026.58h.018c.14-.393.48-.64.852-.64.057 0 .101.006.152.012v.501c-.057-.012-.113-.012-.19-.012-.39 0-.669.278-.744.676a1.533 1.533 0 0 0-.02.248V28.3h-.554v-2.01zm4.923.525c0 1.08-.79 1.552-1.521 1.552-.821 0-1.464-.58-1.464-1.503 0-.973.675-1.546 1.514-1.546.877 0 1.47.61 1.47 1.497zm-2.418.03c0 .64.38 1.123.922 1.123.53 0 .927-.477.927-1.135 0-.495-.258-1.117-.915-1.117-.65 0-.934.58-.934 1.13zm3.269-.676c0-.308-.007-.55-.025-.79h.492l.032.482h.012c.152-.272.505-.543 1.01-.543.423 0 1.08.241 1.08 1.243v1.74h-.556v-1.685c0-.47-.183-.863-.707-.863a.796.796 0 0 0-.745.543.724.724 0 0 0-.038.248V28.3h-.555V26.17z"], ["viewBox", "0 0 24 24", "height", "24", "width", "24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.3 8.3L10 14.6l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L8.6 16c.8.8 2.1.8 2.8 0l6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z", "fill", "currentColor"], ["y", "50%", "x", "50%", "viewBox", "0 0 16 16", "height", "16", "width", "16", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.9 9.6l-2.2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 2.7c.4.4 1 .3 1.4-.1l5-6c.3-.4.3-1.1-.2-1.4-.4-.3-1-.3-1.4.1L6.9 9.6z", "fill", "currentColor", "id", "a"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4 10H28C29.104 10 30 9.104 30 8C30 6.896 29.104 6 28 6H4C2.896 6 2 6.896 2 8C2 9.104 2.896 10 4 10ZM28 14H4C2.896 14 2 14.896 2 16C2 17.104 2.896 18 4 18H28C29.104 18 30 17.104 30 16C30 14.896 29.104 14 28 14ZM28 22H4C2.896 22 2 22.896 2 24C2 25.104 2.896 26 4 26H28C29.104 26 30 25.104 30 24C30 22.896 29.104 22 28 22Z", "fill", "currentColor"], ["fill", "currentColor", "d", "M20.3 8.7c.1.2.3.3.5.3h.2c1.7 0 3 1.3 3 3s-1.3 3-3 3h-.1c-.3 0-.5.2-.6.4-.1.2-.1.5.1.7l.1.1c1.2 1.2 1.2 3.1 0 4.2s-3.1 1.2-4.2 0l-.1-.1c-.2-.2-.5-.2-.7-.1-.2.1-.4.3-.4.6v.2c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-.3-.2-.6-.5-.7-.2-.1-.5-.1-.7.1l-.1.1c-1.2 1.2-3.1 1.2-4.2 0s-1.2-3.1 0-4.2l.1-.1c.2-.2.2-.5.1-.7-.1-.2-.3-.4-.6-.4H3c-1.7 0-3-1.3-3-3s1.3-3 3-3c.3 0 .6-.2.7-.5.1-.2.1-.5-.1-.7l-.1-.1c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.2 0l.1.1c.2.1.5.2.7.1.1 0 .1 0 .2-.1.2-.1.3-.3.3-.5V3c0-1.7 1.3-3 3-3s3 1.3 3 3v.1c0 .3.2.5.4.6.2.1.5.1.7-.1l.1-.1c1.2-1.2 3.1-1.2 4.2 0s1.2 3.1 0 4.2l-.1.1c-.2.2-.2.5-.1.7.1.1.1.1.1.2zm-11.2-3c-1 .3-2 .1-2.7-.6L6.3 5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.1.1c.8.8 1 1.9.6 2.9s-1.4 1.7-2.4 1.7H3c-.6 0-1 .4-1 1s.4 1 1 1h.2c1.1 0 2 .6 2.4 1.6.4 1 .2 2.2-.5 2.9l-.1.1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l.1-.1c.8-.8 1.9-1 2.9-.6s1.7 1.4 1.7 2.4v.2c0 .6.4 1 1 1s1-.4 1-1v-.2c0-1.1.6-2 1.6-2.4 1-.4 2.2-.2 2.9.5l.1.1c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.1-.1c-.8-.8-1-1.9-.5-2.9.4-1 1.4-1.6 2.4-1.6h.1c.6 0 1-.4 1-1s-.4-1-1-1h-.2c-1.1 0-2-.6-2.4-1.6 0-.1-.1-.2-.1-.3-.3-1-.1-2 .6-2.7l.1-.1c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-.1.1c-.8.8-1.9 1-2.9.5-1-.4-1.6-1.4-1.6-2.4V3c0-.6-.4-1-1-1s-1 .4-1 1v.2c0 1.1-.6 2-1.6 2.4-.1 0-.2.1-.3.1zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"], ["height", "24", "width", "24", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "translate(-12 -12)", "xmlns", "http://www.w3.org/2000/svg"], ["y", "50%", "x", "50%"], ["d", "M13.4 12l4.2 4.2c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 13.4l-4.2 4.2c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l4.2-4.2-4.3-4.2c-.3-.4-.3-1.1 0-1.5s1-.4 1.4 0l4.2 4.2 4.2-4.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L13.4 12z", "fill", "currentColor"], ["_ngcontent-loh-c5", "", "focusable", "false", "height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg"], ["_ngcontent-loh-c5", "", "d", "M11 9h9c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-9c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2zm-6 6H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v1", "fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], ["height", "16", "width", "16", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "translate(-8 -8)", "xmlns", "http://www.w3.org/2000/svg"], ["viewBox", "0 0 16 16", "height", "16", "width", "16", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "#fff", "r", "7", "cy", "8", "cx", "8"], ["d", "M8 6.3l-1-1c-.5-.5-1.2-.5-1.7 0s-.4 1.3.1 1.7l1 1-1 1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l1-1 1 1c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-1-1 1-1c.5-.5.5-1.2 0-1.7s-1.4-.4-1.8.1l-1 .9zM16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z", "fill", "currentColor"], ["fill", "inherit", "r", "9", "cy", "12", "cx", "12"], ["d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.107-8.433l-2.229-1.981a1 1 0 1 0-1.328 1.495l3 2.666a1 1 0 0 0 1.432-.107l5-6a1 1 0 0 0-1.536-1.28l-4.34 5.207z", "fill", "currentColor"], ["d", "M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM5.7 7.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2 2c.4.4.9.4 1.3.1l4-4c.4-.3.5-1 .2-1.4-.3-.4-1-.5-1.4-.2L7.1 8.7 5.7 7.3z", "fill", "currentColor"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 16", "height", "16", "width", "16"], ["fill", "inherit", "r", "7", "cy", "8", "cx", "8"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 6a1 1 0 1 0 0-2 1 1 0 1 0 0 2zm1 5V8a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0z", "fill", "currentColor"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7 3a1 1 0 1 0-2 0 1 1 0 1 0 2 0zm0-3V5a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z", "fill", "currentColor"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 16 16", "focusable", "false"], ["fill", "currentColor", "d", "M5 8c0-.3.1-.5.3-.7l4.1-4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.3L7.3 8l3.4 3.4c.4.4.4 1 0 1.3-.4.4-1 .4-1.4 0l-4.1-4C5.1 8.5 5 8.3 5 8"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0)"], ["d", "M23.2179 12.783H8.0873C7.6553 12.783 7.30469 12.4324 7.30469 12.0004C7.30469 11.5684 7.6553 11.2178 8.0873 11.2178H23.2179C23.6499 11.2178 24.0005 11.5684 24.0005 12.0004C24.0005 12.4324 23.6499 12.783 23.2179 12.783Z", "fill", "currentColor"], ["d", "M12.2609 16.9566C12.0605 16.9566 11.8603 16.8806 11.7078 16.7272L7.53397 12.5533C7.22826 12.2474 7.22826 11.7518 7.53397 11.4461L11.7078 7.27225C12.0135 6.96654 12.5091 6.96654 12.815 7.27225C13.1207 7.57796 13.1207 8.07358 12.815 8.37929L9.19414 12.0002L12.815 15.6211C13.1207 15.9268 13.1207 16.4224 12.815 16.7281C12.6616 16.8806 12.4612 16.9566 12.2609 16.9566V16.9566Z", "fill", "currentColor"], ["d", "M11.4783 23.4791C5.14963 23.4791 0 18.3295 0 12.0008C0 5.67209 5.14963 0.522461 11.4783 0.522461C16.2271 0.522461 20.4199 3.37948 22.1614 7.80191C22.32 8.20353 22.1217 8.6575 21.7201 8.81704C21.3183 8.97372 20.8643 8.77845 20.7047 8.37472C19.201 4.55549 15.5792 2.08768 11.4783 2.08768C6.01248 2.08768 1.56522 6.53514 1.56522 12.0008C1.56522 17.4664 6.01248 21.9139 11.4783 21.9139C15.5792 21.9139 19.201 19.4461 20.7047 15.628C20.8633 15.2241 21.3173 15.029 21.7201 15.1855C22.1217 15.3441 22.32 15.799 22.1614 16.2008C20.4199 20.6221 16.2271 23.4791 11.4783 23.4791V23.4791Z", "fill", "currentColor"], ["fill", "currentColor", "d", "M11 8c0 .3-.1.5-.3.7l-4.1 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.3L8.7 8 5.3 4.6c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.4 0l4.1 4c.1.2.2.4.2.7"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14ZM12 12.5C14.4853 12.5 16.5 10.4853 16.5 8C16.5 5.51472 14.4853 3.5 12 3.5C9.51472 3.5 7.5 5.51472 7.5 8C7.5 10.4853 9.51472 12.5 12 12.5Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M20.5 22H22V21C22 18.0044 20 16 17 16H7C4 16 2 18 2 21V22H3.5V21C3.5 19.067 5.067 17.5 7 17.5H17C18.933 17.5 20.5 19.067 20.5 21V22Z", "fill", "currentColor"], ["d", "M16 23.47c2.211-1.467 3.667-3.967 3.667-6.803 0-2.837-1.456-5.337-3.667-6.804a8.26 8.26 0 0 1 4.583-1.378c4.557 0 8.25 3.663 8.25 8.182 0 4.518-3.693 8.181-8.25 8.181A8.26 8.26 0 0 1 16 23.471z", "fill", "#FBB735"], ["d", "M16 9.863c-2.211 1.467-3.667 3.967-3.667 6.804 0 2.836 1.456 5.336 3.667 6.804a8.26 8.26 0 0 1-4.583 1.377c-4.557 0-8.25-3.663-8.25-8.181 0-4.519 3.693-8.182 8.25-8.182A8.26 8.26 0 0 1 16 9.863z", "fill", "#F03727"], ["d", "M16 9.863c2.211 1.467 3.667 3.967 3.667 6.804 0 2.836-1.456 5.336-3.667 6.804-2.211-1.468-3.667-3.968-3.667-6.804 0-2.837 1.456-5.337 3.667-6.804z", "fill", "#F6772D"], ["x1", "-.18%", "y1", "50%", "x2", "100%", "y2", "50%", "id", "prefix__a"], ["stop-color", "#00B4E6", "offset", "0%"], ["stop-color", "#088CCB", "offset", "100%"], ["d", "M28.408 0h-6.073c.326 2.024 2.285 3.918 4.44 3.918h4.833c.065-.196.065-.457.065-.653A3.234 3.234 0 0 0 28.408 0z", "fill", "url(#prefix__a)", "transform", "translate(0 12)"], ["d", "M22.857 16.245v4.898h2.939V18.53h2.612c1.437 0 2.678-.98 3.07-2.286h-8.62zM12.408 12v9.143h2.612s.653 0 .98-.653l2.286-4.572h.326v5.225h2.939V12h-2.612s-.653.065-.98.653l-2.286 4.571h-.326V12h-2.939zM0 21.143V12h2.939s.849 0 1.306 1.306c1.175 3.461 1.306 3.918 1.306 3.918s.261-.848 1.306-3.918C7.314 12 8.163 12 8.163 12h2.939v9.143H8.163v-4.898h-.326l-1.633 4.898H4.898l-1.633-4.898H2.94v4.898H0z", "fill", "#4DB45F"], ["height", "24", "width", "24", "xmlns", "http://www.w3.org/2000/svg", "fill", "#fff"], ["height", "16", "width", "16", "xmlns", "http://www.w3.org/2000/svg", "fill", "#fff"], ["d", "M16.5 12c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm-6 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm-6 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5z", "fill", "currentColor"], ["fill", "currentColor", "d", "M8 5c-.3 0-.5.1-.7.3l-4 4.1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.3 0L8 7.3l3.4 3.4c.4.4 1 .4 1.3 0 .4-.4.4-1 0-1.4l-4-4.1C8.5 5.1 8.3 5 8 5"], ["d", "M9.6 13.6l5.2-5.3c.3-.3.3-1 0-1.3-.4-.3-.9-.3-1.3 0l-5 5.2a3.32 3.32 0 0 1-4.7 0c-1.3-1.3-1.3-3.4 0-4.8l3.8-3.9c.7-.7 1.9-.8 2.6 0 .7.8.7 2 0 2.8l-3.8 3.9c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l3.9-4c.3-.3.3-1 0-1.3-.4-.3-.9-.3-1.3 0l-3.9 4c-.4.3-.6 1-.6 1.6 0 .6.2 1.2.7 1.7.9 1 2.4 1 3.3 0l3.8-3.9c1.5-1.5 1.5-3.9 0-5.4C10.1.7 7.8.7 6.3 2.2L2.5 6.1C1.5 7.1 1 8.5 1 9.8c0 1.3.5 2.7 1.5 3.7 1.9 2 5.1 2 7.1.1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM9 8V5c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .6.4 1 1 1s1-.4 1-1zm0 3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1"], ["d", "M14 13H2v-1l1.3-1V7.1c0-2.1 1.4-4 3.3-4.6v-.1C6.7 1.6 7.3 1 8 1s1.3.6 1.3 1.4v.2c2 .6 3.3 2.5 3.3 4.6V11l1.3 1v1zm-4.5.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M8 12.3l-4.4 3.5c-.4.3-1.1.3-1.4-.2-.1-.2-.2-.4-.2-.6V2c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v13c0 .6-.4 1-1 1-.2 0-.4-.1-.6-.2L8 12.3z"], ["fill", "currentColor", "d", "M8 12.3l-4.4 3.5c-.4.3-1.1.3-1.4-.2-.1-.2-.2-.4-.2-.6V2c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v13c0 .6-.4 1-1 1-.2 0-.4-.1-.6-.2L8 12.3zM12 2H4v11l3.4-2.7c.4-.3.9-.3 1.2 0L12 13V2z"], ["fill", "currentColor", "d", "M6 8c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1m8 6V2H2v12h12zm0 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zM9 8c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1m-6 3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1M5 6h6c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z"], ["d", "M12 3h1c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1V2c0-.6.4-1 1-1s1 .4 1 1v1h4V2c0-.6.4-1 1-1s1 .4 1 1v1zM3 13h10V6H3v7zm2-6h2v2H5V7zm4 0h2v2H9V7zm0 3h2v2H9v-2zm-4 0h2v2H5v-2z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"], ["fill", "currentColor", "d", "M3.3 4.7l8 8c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-8-8c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4z"], ["fill", "currentColor", "d", "M8 6.8l-3-3c-.3-.3-.9-.3-1.2 0-.4.3-.4.8 0 1.2l3 3-3 3c-.3.3-.3.9 0 1.2.3.3.9.3 1.2 0l3-3 3 3c.3.3.9.3 1.2 0 .3-.3.3-.9 0-1.2l-3-3 3-3c.3-.3.3-.9 0-1.2-.3-.3-.9-.3-1.2 0l-3 3z"], ["d", "M14 12V4H2v8h12zm0 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2zM2 7h12V5H2v2zm2 4h3c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1zm7 0h1c.6 0 1-.4 1-1s-.4-1-1-1h-1c-.6 0-1 .4-1 1s.4 1 1 1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M15 14H2V1c0-.6-.4-1-1-1S0 .4 0 1v13c0 1.1.9 2 2 2h13c.6 0 1-.4 1-1s-.4-1-1-1zM5 12V7c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1zm1-9v9c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1s-1 .4-1 1zm5 9v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm3 0V6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1s1-.4 1-1z"], ["fill", "currentColor", "d", "M11.1 13.1c-.9.6-2 .9-3.1.9-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.1-.3 2.3-.9 3.2-.3.5-.2 1.1.3 1.4.5.3 1.1.2 1.4-.3 2.4-3.7 1.3-8.7-2.4-11C11 .4 9.5 0 8 0 3.6 0 0 3.6 0 8s3.6 8 8 8c1.5 0 2.9-.4 4.1-1.1.5-.3.6-.9.3-1.4-.2-.5-.8-.6-1.3-.4zm1.2-.1c-.5-.2-1.1.1-1.3.6-.2.5.1 1.1.6 1.3l3 1c.5.2 1.1-.1 1.3-.6.1-.2.1-.4 0-.6l-1-3c-.2-.5-.7-.8-1.3-.6s-.8.7-.6 1.3l.4 1.1c0-.1-1.1-.5-1.1-.5zM6 8h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1zm0 3h2c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1z"], ["fill", "currentColor", "d", "M13 3v11H3V3h2c.6 0 1-.4 1-1s-.4-1-1-1H2c-.6 0-1 .4-1 1v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-.6-.4-1-1-1h-3c-.6 0-1 .4-1 1s.4 1 1 1h2z"], ["fill", "currentColor", "d", "M6 2H5c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1v2c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V1c0-.6.4-1 1-1s1 .4 1 1v1zm0 1h4V2H6v1zm.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1 1c.4.4 1 .4 1.4 0l3-3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L7 9.6l-.3-.3z"], ["d", "M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm-2 0c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm-8.3-.7l1.4 1.4 3.3-3.5c.4-.3 1.1-.2 1.4.2.3.4.2 1.1-.2 1.4l-4 4c-.4.3-1 .3-1.3-.1l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0z", "fill", "currentColor"], ["d", "M10 2.5c3 0 5.5 2.5 5.5 5.5S13 13.5 10 13.5H4.5c-2.2 0-4-1.8-4-4s1.8-4 4-4h.6c.9-1.8 2.8-3 4.9-3zM5.3 7.7c-1-.4-2.2 0-2.6 1.1s0 2.2 1.1 2.6c.2.1.5.2.8.2H10c1.9 0 3.5-1.6 3.5-3.5S11.9 4.6 10 4.6c-1.6 0-2.9 1-3.4 2.5l-.3 1-1-.4z", "fill", "currentColor"], ["fill", "currentColor", "d", "M5.4 7L9 10.6c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7L7 5.3c-.5-.5-1.2-.5-1.7 0-.4.5-.4 1.3.1 1.7z"], ["fill", "currentColor", "d", "M9 5.4L5.4 9c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0L10.6 7c.5-.5.5-1.2 0-1.7s-1.2-.4-1.6.1z"], ["fill", "currentColor", "d", "M13 13h1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v9c0 1.1.9 2 2 2h5.7l3.7 2.8c.4.3 1.1.2 1.4-.2.1-.2.2-.4.2-.6v-2zm-2 0l-2.4-1.8c-.2-.1-.4-.2-.6-.2H2V2h12v9h-2c-.6 0-1 .4-1 1v1zM5 6h6c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm-.3 3h2.7c.3 0 .6-.4.6-1s-.3-1-.7-1H4.7c-.4 0-.7.4-.7 1s.3 1 .7 1z"], ["fill", "currentColor", "d", "M5 5V2H2v3h3zm0 2H2C.9 7 0 6.1 0 5V2C0 .9.9 0 2 0h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2zm9-2V2h-3v3h3zm0 2h-3c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2zm-9 7v-3H2v3h3zm0 2H2c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2zm9-2v-3h-3v3h3zm0 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2z"], ["d", "M13 6H6v7h7V6zm0 9H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2zM3 3v8c0 .6-.4 1-1 1s-1-.4-1-1V3c0-1.1.9-2 2-2h7c.6 0 1 .4 1 1s-.4 1-1 1H3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 9v5H2V2h4c.6 0 1-.4 1-1s-.4-1-1-1H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-.6-.4-1-1-1s-1 .4-1 1zM8 7.4V8h.6l5-5-.6-.6-5 5zM13.7.3l2 2c.4.4.4 1 0 1.4l-6 6c-.2.2-.4.3-.7.3H7c-.6 0-1-.4-1-1V7c0-.3.1-.5.3-.7l6-6c.4-.4 1-.4 1.4 0z"], ["fill", "currentColor", "d", "M5 3V2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1h3.1c.5 0 .9.4.9 1s-.4 1-.9 1H1.9C1.4 5 1 4.6 1 4s.4-1 .9-1H5zm4 0V2H7v1h2zM2 7.1c-.1-.5.4-1 .9-1.1s1 .3 1.1.9l.8 6c.1.6.6 1.1 1.2 1.1h4c.6 0 1.1-.5 1.2-1.1l.8-6c.1-.5.5-1 1.1-.9.5.1 1 .5.9 1.1l-.8 6C13 14.7 11.6 16 10 16H6c-1.6 0-3-1.3-3.2-2.9l-.8-6z"], ["fill", "currentColor", "d", "M5 9h6c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 3h6c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm8 2V2H3v12h10zm0 2H3c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zM5 6h4c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z"], ["d", "M7 7.6V2c0-.6.4-1 1-1s1 .4 1 1v5.6l1.3-1.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L9.4 10c-.8.8-2 .8-2.8 0L4.3 7.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L7 7.6zM1 11c0-.6.4-1 1-1s1 .4 1 1v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1c0-.6.4-1 1-1s1 .4 1 1v1c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3v-1z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M8.4 3H14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4c.3 0 .5.1.7.3L8.4 3zM5.6 3H2v10h12V5H8c-.3 0-.5-.1-.7-.3L5.6 3zm.4 7h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1zm1-3v4c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1s-1 .4-1 1z"], ["fill", "currentColor", "d", "M8.4 3H14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4c.3 0 .5.1.7.3L8.4 3zM5.6 3H2v10h12V5H8c-.3 0-.5-.1-.7-.3L5.6 3zm.4 7h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1z"], ["fill", "currentColor", "d", "M8.4 3H14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4c.3 0 .5.1.7.3L8.4 3z"], ["fill", "currentColor", "d", "M8.4 3H14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4c.3 0 .5.1.7.3L8.4 3zM5.6 3H2v10h12V5H8c-.3 0-.5-.1-.7-.3L5.6 3z"], ["fill", "currentColor", "d", "M14 14V2H2v12h12zm0 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2z"], ["fill", "currentColor", "d", "M15 4H1c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1z"], ["fill", "currentColor", "d", "M5 5v10c0 .6.4 1 1 1s1-.4 1-1V5c0-.6-.4-1-1-1s-1 .4-1 1z"], ["fill", "currentColor", "d", "M9 9.9c.8-.1 1.5-.3 2.3-.5.4-.2.8-.3 1.2-.5 0 .1.1.1.1.2l1.4 1.4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-1.3-1.3c.7-.6 1.3-1.4 1.7-2.3.2-.5 0-1.1-.5-1.3-.5-.2-1.1 0-1.3.5-.3.7-.8 1.3-1.4 1.8-.6.5-1.3.9-2.1 1.2-.7.1-1.6.3-2.5.3-.9 0-1.8-.2-2.6-.5s-1.5-.7-2.1-1.2c-.6-.5-1-1.1-1.4-1.8-.2-.4-.8-.6-1.3-.4-.5.2-.7.8-.5 1.3.4.9 1 1.7 1.8 2.3L.6 9c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L3.4 9s.1-.1.1-.2c.4.2.8.4 1.2.5.7.4 1.5.5 2.3.6V12c0 .6.4 1 1 1s1-.4 1-1V9.9z"], ["d", "M8 1l-.5.4L1 8.6V14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-4c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v4c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V8.6L8.5 1.4 8 1z", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM7 8v3c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1s-1 .4-1 1zm2-3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM9.7 6.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-2 2c-.4.4-.4 1 0 1.4l2 2c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L8.4 8l1.3-1.3z"], ["fill", "currentColor", "d", "M5 5V3H3v2h2zm0 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zm4-2h6c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1zm-4 8v-2H3v2h2zm0 2H3c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zm4-2h6c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1z"], ["d", "M5 7v5h6V7H5zm2-2h2.031V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1zm4.031 0A2 2 0 0 1 13 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2V4a3 3 0 0 1 3-3h.031a3 3 0 0 1 3 3v1z", "fill", "currentColor"], ["d", "M7 5h2V4c0-.6-.4-1-1-1s-1 .4-1 1v1zm4 0c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2V4c0-1.7 1.3-3 3-3s3 1.3 3 3v1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 12V4H2v8h12zm0 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"], ["fill", "currentColor", "d", "M2.6 3.2c-.4-.4-1-.3-1.4.1s-.3 1 .1 1.4l6 5c.4.3.9.3 1.3 0l6-5c.4-.3.5-1 .2-1.4-.3-.4-1-.5-1.4-.2L8 7.7 2.6 3.2z"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM6 9h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1z"], ["d", "M3 7h10c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M11 8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zM7 8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zM3 8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1z"], ["fill", "currentColor", "d", "M8 5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"], ["d", "M5.2 7h7.6c.6 0 1 .4 1 1s-.4 1-1 1H5.2l2.3 2.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L2.8 9.4c-.8-.8-.8-2 0-2.8l3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L5.2 7z", "fill", "currentColor"], ["fill", "currentColor", "d", "M9 13c0 .6-.4 1-1 1s-1-.4-1-1-.4-1-1-1-1 .4-1 1c0 1.7 1.3 3 3 3s3-1.3 3-3c0-.6-.4-1-1-1s-1 .4-1 1z"], ["fill", "currentColor", "d", "M11.1 8.5c-.1-.2-.1-.3-.1-.5V5c0-1.7-1.3-3-3-3S5 3.3 5 5v3c0 .2 0 .3-.1.5L3.4 11h9.1l-1.4-2.5zM3 7.7V5c0-2.8 2.2-5 5-5s5 2.2 5 5v2.7l1.8 3.2c.5 1-.2 2-1.3 2H2.4c-1.1 0-1.8-1.1-1.2-2.1L3 7.7z"], ["fill", "currentColor", "d", "M9 6V1c0-.6-.4-1-1-1S7 .4 7 1v5c0 .6.4 1 1 1s1-.4 1-1zM2.4 2.3C.9 3.8 0 5.8 0 8c0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-.9-4.2-2.4-5.7-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4 2.4 2.3 2.4 6.1.1 8.5s-6.1 2.4-8.5.1C2.6 11.2 2 9.6 2 8c0-1.6.7-3.2 1.8-4.3.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm-9 2V6c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1zm4 0V6c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1z"], ["fill", "currentColor", "d", "M11 5c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1M5.8 5.4c-.3-.4-1-.5-1.4-.2l-.2.2-4 6c-.3.5-.2 1.1.3 1.4.5.3 1.1.2 1.4-.3l3.2-4.9 3.1 3.9c.3.4 1 .5 1.4.2 0 0 .1 0 .1-.1L12 9.4l2.3 2.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0L9.1 9.5 5.8 5.4z"], ["fill", "currentColor", "d", "M8 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm5-1c0-2.8-2.2-5-5-5S3 4.2 3 7c0 1.9.9 3.7 2.3 5.2 1 1 2.4 1.8 2.7 1.8s1.6-.8 2.7-1.8C12.1 10.7 13 8.9 13 7zm2 0c0 4.6-4.4 9-7 9s-7-4.4-7-9c0-3.9 3.1-7 7-7s7 3.1 7 7z"], ["fill", "currentColor", "d", "M11.8 8.3l-.1.1-5.1 3.2c-.2.1-.4.1-.5-.1 0-.1-.1-.1-.1-.2V5c0-.2.1-.3.3-.3.1 0 .1 0 .2.1L11.6 8c.3 0 .3.2.2.3M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm-9 3V5l4 3-4 3z"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM6 9h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1zm1-3v4c0 .6.4 1 1 1s1-.4 1-1V6c0-.6-.4-1-1-1s-1 .4-1 1z"], ["fill", "currentColor", "d", "M7.1 7.1H2.9c-.5 0-.9.4-.9.9s.4.9.9.9h4.3v4.3c-.1.4.3.8.8.8s.9-.4.9-.9V8.9h4.3c.4 0 .8-.4.8-.9s-.4-.9-.9-.9H8.9V2.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v4.2z"], ["fill", "currentColor", "d", "M4 12H2V8h12v4h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H2C.9 6 0 6.9 0 8v4c0 1.1.9 2 2 2h2c.6 0 1-.4 1-1s-.4-1-1-1z"], ["fill", "currentColor", "d", "M5 7V2h6v5c0 .6.4 1 1 1s1-.4 1-1V2c0-1.1-.9-2-2-2H5C3.9 0 3 .9 3 2v5c0 .6.4 1 1 1s1-.4 1-1zm6 7v-2H5v2h6zm0 2H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z"], ["fill", "currentColor", "d", "M13 9c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5c.6 0 1-.4 1-1s-.4-1-1-1C4.1 2 1 5.1 1 9s3.1 7 7 7 7-3.1 7-7c0-.6-.4-1-1-1s-1 .4-1 1z"], ["d", "M8 1l2 2-2 2", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM6.3 9.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l2-2c.4-.4.4-1 0-1.4l-2-2c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L7.6 8 6.3 9.3z"], ["fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-width", "2"], ["r", "5.5", "cx", "6.5", "cy", "6.5"], ["d", "M11 11l4 4"], ["fill", "currentColor", "d", "M3 15V1c0-.6-.4-1-1-1S1 .4 1 1v14c0 .6.4 1 1 1s1-.4 1-1zm12 0V1c0-.6-.4-1-1-1s-1 .4-1 1v14c0 .6.4 1 1 1s1-.4 1-1zm-6 0V1c0-.6-.4-1-1-1S7 .4 7 1v14c0 .6.4 1 1 1s1-.4 1-1z"], ["fill", "currentColor", "d", "M1 9h2c.6 0 1-.4 1-1s-.4-1-1-1H1c-.6 0-1 .4-1 1s.4 1 1 1zm6 4h2c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1zm6-7h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1 .4-1 1s.4 1 1 1z"], ["fill", "currentColor", "d", "M5.4 1.2l.1-.4c.1-.5.5-.8.9-.8h3.1c.5 0 .9.3 1 .8l.1.4.2 1.1c.2.1.5.3.7.4l1.1-.4.4-.1c.4-.1.9 0 1.2.5l.2.4L15.5 5l.2.4c.2.4.2.9-.2 1.3l-.3.3-.8.7v.8l.8.7.3.3c.4.3.4.8.2 1.3l-.2.4-1.1 1.8-.2.4c-.2.4-.7.6-1.2.5l-.5-.1-1.1-.4c-.2.2-.5.3-.7.4l-.2 1.1-.1.4c-.1.5-.5.8-1 .8h-3c-.5 0-.9-.3-1-.8l-.1-.4-.2-1.1c-.3-.1-.5-.3-.7-.4l-1.1.4-.4.1c-.4.1-.9 0-1.2-.5l-.2-.4-1.1-1.9-.2-.4c-.3-.4-.2-1 .1-1.3l.3-.3.8-.7V8v-.4l-.7-.7-.4-.3C0 6.2-.1 5.7.1 5.3l.2-.4 1.1-1.8.2-.4c.2-.4.7-.6 1.2-.5l.5.1 1.1.4c.2-.2.5-.3.7-.4l.3-1.1zM10 8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"], ["fill", "currentColor", "d", "M9 8c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1zm2 0c0 1.7-1.3 3-3 3S5 9.7 5 8s1.3-3 3-3 3 1.3 3 3zM5.4 1.2l.1-.4c.1-.5.5-.8.9-.8h3.1c.5 0 .9.3 1 .8l.1.4.2 1.1c.2.1.5.3.7.4l1.1-.4.4-.1c.4-.1.9 0 1.2.5l.2.4L15.5 5l.2.4c.2.4.2.9-.2 1.3l-.3.3-.8.7v.8l.8.7.3.3c.4.3.4.8.2 1.3l-.2.4-1.1 1.8-.2.4c-.2.4-.7.6-1.2.5l-.5-.1-1.1-.4c-.2.2-.5.3-.7.4l-.2 1.1-.1.4c-.1.5-.5.8-1 .8h-3c-.5 0-.9-.3-1-.8l-.1-.4-.2-1.1c-.3-.1-.5-.3-.7-.4l-1.1.4-.4.1c-.4.1-.9 0-1.2-.5l-.2-.4-1.1-1.9-.2-.4c-.3-.4-.2-.9.1-1.3l.3-.3.8-.7V8v-.4l-.7-.7-.4-.3C0 6.2-.1 5.7.1 5.3l.2-.4 1.1-1.8.2-.4c.2-.4.7-.6 1.2-.5l.5.1 1.1.4c.2-.2.5-.3.7-.4l.3-1.1zm1.8.8L7 3.2c-.1.4-.4.7-.7.8-.4.1-.9.4-1.2.6-.3.2-.6.3-1 .2l-1.3-.4L2 5.6l1 .8c.3.2.4.6.3.9v.1c0 .4-.1.5-.1.6s0 .2.1.5v.2c.1.3 0 .7-.3.9l-1 .8.8 1.2 1.3-.4c.3-.1.7 0 1 .2.4.3.8.5 1.2.7.3.1.6.4.7.7l.2 1.2h1.5l.3-1.2c.1-.3.3-.6.7-.7.4-.2.9-.4 1.2-.7.3-.2.6-.3 1-.2l1.3.4.8-1.2-1-.8c-.3-.2-.4-.6-.4-.9v-.1c.1-.3.1-.4.1-.5 0-.1 0-.2-.1-.5v-.1c0-.5.1-.9.4-1.1l1-.8-.8-1.2-1.3.4c-.3.1-.7 0-1-.2-.3-.2-.8-.5-1.2-.6-.3-.1-.6-.4-.7-.8L8.8 2H7.2z"], ["fill", "currentColor", "d", "M2.3 8.4c.3.5.7 1 1.1 1.5C4.6 11.2 6.1 12 8 12s3.4-.8 4.6-2.1c.5-.5.9-1.1 1.3-1.8-.3-.7-.8-1.3-1.3-1.9C11.4 4.8 9.9 4 8 4c-1.9 0-3.4.8-4.6 2.2-.5.6-1 1.2-1.3 1.9 0 .1.1.2.2.3zM8 14c-2.5 0-4.5-1-6.1-2.8-.9-1-1.5-2-1.8-2.7-.1-.2-.1-.5 0-.7C.4 7 .9 6 1.9 4.9 3.5 3.1 5.5 2 8 2s4.5 1.1 6.1 2.9c1 1.1 1.5 2.1 1.8 2.9.1.2.1.5 0 .7-.3.7-.9 1.7-1.8 2.7C12.5 13 10.5 14 8 14zm0-3c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1c0 .5.4 1 1 1z"], ["d", "M4.1 6H12c.3 0 .5.2.5.5 0 .1 0 .2-.1.3l-3.9 4.7c-.2.2-.5.2-.7.1l-.1-.1-4-4.7c-.2-.2-.2-.5 0-.7.1-.1.3-.1.4-.1z", "fill", "currentColor"], ["d", "M11.9 10.9H4.1c-.3 0-.5-.2-.5-.5 0-.1 0-.2.1-.3l3.9-4.7c.2-.2.5-.2.7-.1l.1.1 3.9 4.7c.2.2.1.5-.1.7 0 0-.2.1-.3.1z", "fill", "currentColor"], ["d", "M3.8 10h8.3c.5 0 .8.4.8.8s-.4.8-.8.8H3.8c-.5 0-.8-.4-.8-.8s.4-.8.8-.8zm0-6h4.3c.5 0 .9.4.9.8s-.4.9-.8.9H3.8c-.4 0-.8-.4-.8-.9 0-.4.4-.8.8-.8zm0 3h6.3c.5 0 .9.4.9.8s-.4.8-.8.8H3.8c-.4.1-.8-.3-.8-.8s.4-.8.8-.8z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M3.8 4h8.3c.5 0 .9.4.9.8s-.4.8-.8.8H3.8c-.4.1-.8-.3-.8-.8 0-.4.4-.8.8-.8zm0 6h4.3c.5 0 .9.4.9.8s-.4.8-.8.8H3.8c-.5 0-.8-.4-.8-.8s.4-.8.8-.8zm0-3h6.3c.5 0 .9.4.9.8s-.4.8-.8.8H3.8c-.4.1-.8-.3-.8-.8s.4-.8.8-.8z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M8 11.9L4.3 14 5 9.7 2 6.6 6.1 6 8 2l1.9 3.9 4.1.7-3 3.1.7 4.3L8 11.9z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M7.9 3L6.8 5.9c-.2.4-.6.7-1 .7H3L5.2 9c.3.3.4.7.2 1.1l-.9 2.7 2.8-1.7c.3-.2.8-.2 1.1 0l3 1.9-.8-2.9c-.1-.4 0-.7.2-1L13 6.6h-3c-.4 0-.8-.3-1-.7L7.9 3zM5.3 5L7 .6c.3-.8 1.5-.8 1.9 0L10.7 5H15c.9 0 1.3 1 .8 1.7l-3.1 3.5 1.3 4.6c.2.9-.7 1.6-1.5 1.1L8 13.2l-4.5 2.7c-.8.5-1.8-.3-1.5-1.2l1.5-4.5L.3 6.7C-.3 6.1.1 5 1 5h4.3z"], ["d", "M15 3c0 1.1-.9 2-2 2s-2-.9-2-2h0c0-1.1.9-2 2-2s2 .9 2 2zm0 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2h0zM5 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm1 0h3m0 0l2-3m0 6L9 8", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.3 10L8 8.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3c.8.8.8 2 0 2.8l-2.3 2.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L9.3 12H6.7c-1.7 0-3-1.3-3-3V2c0-.6.4-1 1-1s1 .4 1 1v7c0 .6.4 1 1 1h2.6z", "fill", "currentColor"], ["d", "M9 7.6V5c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .3.1.6.4.8l1.9 1.9c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L9 7.6zm7 .4c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM7 5v3c0 .6.4 1 1 1s1-.4 1-1V5c0-.6-.4-1-1-1s-1 .4-1 1zm3.7 4.3l-2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4z"], ["d", "M5 4V3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1h1.1c.5 0 .9.4.9 1s-.4 1-.9 1H3.9C3.4 6 3 5.6 3 5s.4-1 .9-1H5zm4 0V3H7v1h2zM3 8.1c-.1-.5.4-1 .9-1.1s1 .3 1.1.9l.5 4.1c.1.6.4 1 1 1h3c.6 0 .9-.4 1-1l.5-4.1c.1-.5.5-1 1.1-.9.5.1 1 .5.9 1.1l-.5 4c-.2 1.6-1.4 2.9-3 2.9h-3c-1.6 0-2.8-1.3-3-2.9l-.5-4z", "fill", "currentColor"], ["fill", "currentColor", "d", "M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm-.7-3.5c0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7zm-.7-5.6s0-.2.1-.3c.2-.2.6-.4 1.3-.4.3 0 .5 0 .7.1.5.1.7.4.7 1.3 0 .2-.2.5-.5.7-.2.2-.4.3-.6.4-.6.3-1 1.1-1 1.7 0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.1.1-.4.3-.4.2-.1.5-.3.8-.5.6-.5 1-1.1 1-1.8 0-1.5-.7-2.4-1.8-2.7-.3-.2-.6-.2-1-.2-1.1 0-1.9.4-2.4 1-.3.4-.4.8-.4 1.1 0 .4.3.7.7.7.4 0 .7-.3.7-.7z"], ["fill", "currentColor", "d", "M8 13.6c3.1 0 5.6-2.5 5.6-5.6S11.1 2.4 8 2.4C4.9 2.4 2.4 4.9 2.4 8s2.5 5.6 5.6 5.6zM8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm-.7-3.5c0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7zm-.7-5.6s0-.2.1-.3c.2-.2.6-.4 1.3-.4.3 0 .5 0 .7.1.5.1.7.4.7 1.3 0 .2-.2.5-.5.7-.2.2-.4.3-.6.4-.6.3-1 1.1-1 1.7 0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.1.1-.4.3-.4.2-.1.5-.3.8-.5.6-.5 1-1.1 1-1.8 0-1.5-.7-2.4-1.8-2.7-.3-.2-.6-.2-1-.2-1.1 0-1.9.4-2.4 1-.3.4-.4.8-.4 1.1 0 .4.3.7.7.7.4 0 .7-.3.7-.7z"], ["d", "M8 1L6 3l2 2", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M8 4c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5c0-.6-.4-1-1-1s-1 .4-1 1c0 3.9 3.1 7 7 7s7-3.1 7-7-3.1-7-7-7c-.6 0-1 .4-1 1s.4 1 1 1z"], ["fill", "currentColor", "d", "M13 14V8H3v6h10zm0 2H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2z"], ["fill", "currentColor", "d", "M6 7V4c0-1.1.9-2 2-2s2 .9 2 2c0 .6.4 1 1 1s1-.4 1-1c0-2.2-1.8-4-4-4S4 1.8 4 4v3c0 .6.4 1 1 1s1-.4 1-1z"], ["d", "M7 4.4L5.7 5.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L6.6 2c.8-.8 2-.8 2.8 0l2.3 2.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L9 4.4V10c0 .6-.4 1-1 1s-1-.4-1-1V4.4zM1 11c0-.6.4-1 1-1s1 .4 1 1v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1c0-.6.4-1 1-1s1 .4 1 1v1c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3v-1z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M8 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-3.1 3.5c-.3.5-.9.7-1.4.4-.5-.3-.7-.8-.4-1.3l.4-.9C4 10.7 5 10 6.2 10h3.5c1.1 0 2.2.6 2.7 1.7l.4.9c.2.5 0 1.1-.5 1.3-.5.2-1 0-1.3-.4l-.4-.9c-.2-.3-.5-.6-.9-.6H6.2c-.4 0-.7.2-.9.6l-.4.9z", "fill", "currentColor"], ["d", "M14 15H2c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1z", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M13 10c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1"], ["d", "M12 5V1L2 5", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M18 16h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2zm-8 3a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4a1 1 0 0 1-2 0V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4zM8 7h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6-6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 8a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V8zm.293 7.707a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414z"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM11 8v4a1 1 0 0 0 2 0V8a1 1 0 0 0-2 0zm.293 7.707a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414z"], ["cx", "12", "cy", "18", "r", "1", "fill", "currentColor"], ["d", "M12 5c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1s-1-.4-1-1V6c0-.6.4-1 1-1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M15.2 2.3c.3-.2.7-.3 1.1-.3h2.2C20.4 2 22 3.6 22 5.5V18c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h6.7l2.5-1.7zM6 6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5.5c0-.8-.7-1.5-1.5-1.5h-2.2l-3 2H6zm2 1h2v2H8V7zm2 2h2v2h-2V9zm-2 2h2v2H8v-2zm2 2h2v2h-2v-2zm-2 2h2v2H8v-2zm2 2h2v2h-2v-2z"], ["fill", "currentColor", "d", "M13 15.6V7.1c0-.6-.4-1.1-1-1.1s-1 .5-1 1.1v8.5l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.3 3.3c.8.8 2 .8 2.8 0l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L13 15.6z"], ["fill", "currentColor", "d", "M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11zm0-2c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"], ["fill", "currentColor", "d", "M15.1 9.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.3 3.3c-.8.8-2 .8-2.8 0l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3 3.3-3.3z"], ["d", "M7.7 10.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.3 4.3c.8.8 2 .8 2.8 0l4.3-4.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 14.6l-4.3-4.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14.3 8.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-3.3 3.3c-.8.8-.8 2 0 2.8l3.3 3.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L11 12l3.3-3.3z"], ["d", "M6.4 11l4.3-4.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4l6 6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L6.4 13H20c.6 0 1-.4 1-1s-.4-1-1-1H6.4z", "fill", "currentColor"], ["d", "M13.3 6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10.4 12l4.3 4.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L9 13.4c-.8-.8-.8-2 0-2.8l4.3-4.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M10.3 8.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.3 3.3c.8.8.8 2 0 2.8l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3.3-3.3-3.3-3.3z"], ["fill", "currentColor", "d", "M17.6 11l-4.3-4.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4l-6 6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l4.3-4.3H4c-.6 0-1-.4-1-1s.4-1 1-1h13.6z"], ["d", "M10.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.3 4.3-4.3 4.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l4.3-4.3c.8-.8.8-2 0-2.8l-4.3-4.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M13 9.4v8.5c0 .6-.4 1.1-1 1.1s-1-.5-1-1.1V9.4l-2.3 2.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L10.6 7c.8-.8 2-.8 2.8 0l3.3 3.3c.4.4.4 1 0 1.4s-1 .4-1.4 0L13 9.4z"], ["fill", "currentColor", "d", "M15.3 14.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L13.4 10c-.8-.8-2-.8-2.8 0l-3.3 3.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l3.3-3.3 3.3 3.3z"], ["fill", "currentColor", "d", "M15.1 14.5c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-3.3-3.3c-.8-.8-2-.8-2.8 0l-3.3 3.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l3.3-3.3 3.3 3.3z"], ["d", "M7.7 15.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l4.3-4.3c.8-.8 2-.8 2.8 0l4.3 4.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 11.4l-4.3 4.3z", "fill", "currentColor"], ["d", "M20.3 10.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8.5 8c-2.6 2.4-6.7 2.4-9.2 0-2.6-2.4-2.6-6.4 0-8.9l8.5-8c1.8-1.7 4.8-1.7 6.6 0 1.8 1.6 1.9 4.4.2 6.2l-.2.2-8.5 8c-1.1 1-2.9 1-4 0s-1.1-2.7-.1-3.8l.1-.1 7.9-7.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L8 15.1c-.3.2-.3.7-.1 1l.1.1c.3.3.9.3 1.3 0l8.5-8c1-1 1-2.5 0-3.5-1.1-1-2.8-1-3.9 0l-8.5 8c-1.8 1.7-1.8 4.3 0 6 1.8 1.7 4.7 1.7 6.5 0l8.4-8z", "fill", "currentColor"], ["d", "M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm0 2C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm1.7-13.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9 10.6c-.8.8-.8 2 0 2.8l3.3 3.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L10.4 12l3.3-3.3z", "fill", "currentColor"], ["d", "M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm1.7-13.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9 10.6c-.8.8-.8 2 0 2.8l3.3 3.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L10.4 12l3.3-3.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M19 4a1 1 0 0 1 2 0v16a1 1 0 0 1-2 0V4zm-4 4a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0V8zm-4 6a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6zm-4-2a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0v-8zm-4 5a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3z"], ["fill", "currentColor", "d", "M10 17v1c0 1.1.9 2 2 2s2-.9 2-2v-1h3.6l-.6-1.8V11c0-2.2-1.4-4-3-4h-1V5c0-.6-.4-1-1-1s-1 .4-1 1v2h-1c-1.3 0-3 1.9-3 4v4.2L6.4 17H10zm-6.4 2L5 14.8V11c0-2.7 1.9-5.2 4-5.8V5c0-1.7 1.3-3 3-3s3 1.3 3 3v.1c2.3.6 4 3 4 5.9v3.8l1.4 4.2h-4.5c-.4 1.8-2 3-3.9 3-1.8 0-3.4-1.2-3.9-3H3.6z"], ["d", "M21 19H3v-1.5l2-1.9v-4.8c0-3 2-5.7 5-6.5v-.4c0-1 .9-1.9 2-1.9s2 .9 2 1.9v.3c3 .9 5 3.5 5 6.5v4.8l2 1.9V19zm-7 1c0 1.1-.9 2-2 2s-2-.9-2-2", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M18 19.1V5c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v14.1l5.4-3.9c.3-.2.8-.2 1.2 0l5.4 3.9zm-6-1.9l-6.4 4.6c-.4.3-1.1.2-1.4-.2-.1-.2-.2-.4-.2-.6V5c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v16c0 .6-.4 1-1 1-.2 0-.4-.1-.6-.2L12 17.2z"], ["d", "M19 10H5v8c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-8zm-3-5V4c0-.6.4-1 1-1s1 .4 1 1v1c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3V4c0-.6.4-1 1-1s1 .4 1 1v1h8zm-9 7h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm0 3h2v2h-2v-2zm-4 0h2v2h-2v-2zm-4 0h2v2H7v-2z", "fill", "currentColor"], ["d", "M13.9 11.9c-.4-1-1.5-1.6-2.5-1.3-.6.2-1.1.7-1.3 1.3-2.4-.1-4.5-.5-6.1-1.1V9.1c0-1 .8-1.9 1.9-1.9h2.4v-.8c0-1.3 1-2.4 2.3-2.4h2.7c1.3 0 2.4 1.1 2.4 2.4v.8h2.4c1.1 0 1.9.8 1.9 1.9v1.7c-1.7.5-3.7.9-6.1 1.1zm0 1.1c2.3-.1 4.3-.5 6.1-1v6.3c0 1-.9 1.7-1.9 1.7H5.9c-1 0-1.9-.6-1.9-1.7V12c1.7.5 3.8.9 6.1 1 .3 1.1 1.4 1.7 2.5 1.4.6-.2 1.1-.7 1.3-1.4zM10 6.4v.8h4v-.8c0-.3-.3-.8-.6-.8h-2.7c-.4 0-.7.4-.7.8z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M17.4 6H19c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V9c0-1.7 1.3-3 3-3h5.6l.4-.4c.4-.4.9-.6 1.4-.6h3.2c.5 0 1 .2 1.4.6l.4.4zM4 9v8c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-2.4l-1-1h-3.2l-1 1H5c-.6 0-1 .4-1 1zm10 8c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"], ["fill", "currentColor", "d", "M19 6.4c3.1 3.9 2.5 9.5-1.4 12.6-3.3 2.6-8 2.6-11.2 0L19 6.4zM17.6 5L5 17.6C1.9 13.7 2.5 8.1 6.4 5c3.3-2.7 7.9-2.7 11.2 0zM12 23c6.1 0 11-4.9 11-11S18.1 1 12 1 1 5.9 1 12s4.9 11 11 11z"], ["d", "M4 14v4h12v-4H4zm0-2h12v-2H4v2zm-2-2c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8zm20 5c0 .6-.4 1-1 1s-1-.4-1-1V6H7c-.6 0-1-.4-1-1s.4-1 1-1h13c1.1 0 2 .9 2 2v9z", "fill", "currentColor"], ["fill", "currentColor", "d", "M7 20c0 .6-.4 1-1 1s-1-.4-1-1v-7c0-.6.4-1 1-1s1 .4 1 1v7zm6 .1c0 .5-.4.9-1 .9s-1-.4-1-.9V8.9c0-.5.4-.9 1-.9s1 .4 1 .9v11.2zm6-.1c0 .5-.4 1-1 1s-1-.4-1-1V4c0-.5.4-1 1-1s1 .4 1 1v16z"], ["fill", "currentColor", "d", "M4 16zm11 0v2.7l3.3-2.7H20V6H4v10h11zM2 6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-1l-4.5 3.7c-.8.7-1.5.4-1.5-.7v-3H4c-1.1 0-2-.9-2-2V6zm5 4h10c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1zm0 4h4c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1z"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.818a8.182 8.182 0 1 0 0-16.364 8.182 8.182 0 0 0 0 16.364zm-1.107-6.615l4.339-5.207a1 1 0 0 1 1.536 1.28l-5 6a1 1 0 0 1-1.432.107l-3-2.666a1 1 0 1 1 1.328-1.495l2.229 1.98z"], ["fill", "currentColor", "d", "M13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 1.414-1.414L12 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414L13.414 12zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"], ["fill", "currentColor", "d", "M13.414 12l2.293-2.293a1 1 0 1 0-1.414-1.414L12 10.586 9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"], ["d", "M12 10.8l3-3c.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2l-3 3 3 3c.3.3.3.9 0 1.2-.3.3-.9.3-1.2 0l-3-3-3 3c-.3.3-.9.3-1.2 0-.3-.3-.3-.9 0-1.2l3-3-3-3c-.3-.3-.3-.9 0-1.2.3-.3.9-.3 1.2 0l3 3z", "fill", "currentColor"], ["d", "M16.4 12l2.3 2.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L15 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l2.3-2.3-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.3 2.3 2.3-2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L16.4 12zM21 3c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H8c-.3 0-.6-.1-.8-.3l-7-8c-.3-.4-.3-.9 0-1.3l7-8c.2-.3.5-.4.8-.4h13zm0 16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H8.5l-6.1 7 6.1 7H21z", "fill", "currentColor"], ["fill", "currentColor", "d", "M15.414 12l2.293-2.293a1 1 0 1 0-1.414-1.414L14 10.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L12.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414L14 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L15.414 12zM20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H9a1 1 0 0 1-.753-.341l-7-8a1 1 0 0 1 0-1.318l7-8A1 1 0 0 1 9 3h11z"], ["fill", "currentColor", "d", "M13 12.998l2.293-2.292a1 1 0 0 1 1.414 1.414l-3.294 3.294a1.996 1.996 0 0 1-2.826 0L7.293 12.12a1 1 0 1 1 1.414-1.414L11 12.998V4a1 1 0 0 1 2 0v8.998zM2 16.003a1 1 0 1 1 2 0v1C4 18.1 4.9 19 5.993 19h12.014c1.1 0 1.993-.894 1.993-1.997v-1a1 1 0 1 1 2 0v1A3.995 3.995 0 0 1 18.007 21H5.993A4.003 4.003 0 0 1 2 17.003v-1z"], ["d", "M12 3l5.7 5.6c2.3 2.2 3 5.6 1.7 8.6-1.2 2.9-4.2 4.8-7.4 4.8s-6.2-1.9-7.4-4.9c-1.2-2.9-.5-6.3 1.7-8.6L12 3z", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round"], ["d", "M18.7 15.3v3c0 1.7-1.3 3-3 3h-10c-1.7 0-3-1.3-3-3v-10c0-1.7 1.3-3 3-3h5l-2 2h-3c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-3l2-2v2zm-11 1v-4.4l8.6-8.6c.8-.8 2-.8 2.8 0l1.6 1.6c.8.8.8 2 0 2.8l-8.6 8.6H7.7zm11.6-10l-1.6-1.6-8 8v1.6h1.6l8-8z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 7.8l-9.9 9.9-.1.3v2h2l.3-.1 9.9-9.9L14 7.8zM7.7 21.3c-.4.4-1.1.7-1.7.7H3c-.6 0-1-.4-1-1v-3c0-.6.3-1.3.7-1.7L13.3 5.7c.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4L7.7 21.3zm7.6-16.6c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4 4c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-4-4z"], ["fill", "currentColor", "d", "M4 6v12c0 .5.4 1 1 1h14c.5 0 1-.4 1-1V6c0-.5-.5-1-1-1H5c-.6 0-1 .4-1 1zM2 6c0-1.7 1.3-3 3-3h14c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V6zm5 3c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm3-9c0 .6.4 1 1 1h6c.5 0 1-.4 1-1s-.4-1-1-1h-6c-.5 0-1 .4-1 1zm0 4c0 .6.4 1 1 1h6c.5 0 1-.4 1-1s-.4-1-1-1h-6c-.5 0-1 .4-1 1zm0 4c0 .6.4 1 1 1h6c.5 0 1-.4 1-1s-.4-1-1-1h-6c-.5 0-1 .4-1 1z"], ["d", "M15.7 5h-1.8c-2.2 0-3.7 1.4-3.7 3.5v1.4H8.3c-.2 0-.3.2-.3.3v2.4c0 .2.1.3.3.3h1.9v5.8c0 .2.1.3.3.3h2.6c.2 0 .3-.1.3-.3v-5.8h2.3c.2 0 .3-.1.3-.3v-2.4c0-.1 0-.2-.1-.2-.1-.1-.1-.1-.2-.1h-2.3V8.8c0-.7.2-1 1.1-1h1.2c.2 0 .3-.1.3-.3V5.3c0-.2-.1-.3-.3-.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M9.8 8.7c-.1.3-.4.5-.7.5l-5 .8 3.5 3.5c.3.2.4.5.4.8l-.8 4.9 4.4-2.3c.3-.2.6-.2.9 0l4.4 2.3-.9-4.9c-.1-.3.1-.7.3-.9l3.5-3.5-4.9-.7c-.3 0-.6-.3-.8-.5L12 4.3 9.8 8.7zM8.2 7.3l2.9-5.8c.2-.5.8-.7 1.3-.5.2.1.4.3.5.5l2.9 5.8 6.4.9c.5.1.9.6.8 1.1 0 .2-.1.4-.3.6l-4.6 4.5 1.1 6.4c.1.5-.3 1.1-.8 1.2-.2 0-.4 0-.6-.1l-5.7-3-5.7 3c-.5.3-1.1.1-1.4-.4-.1-.2-.1-.4-.1-.6L6 14.5 1.3 10c-.4-.4-.4-1 0-1.4.2-.2.4-.3.6-.3l6.3-1z"], ["fill", "currentColor", "d", "M13 3.4V8h4.6L13 3.4zm6 6.6h-7c-.6 0-1-.4-1-1V3H6c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V10zm-6-9c.3 0 .5.1.7.3l7 7c.2.2.3.4.3.7v11c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V4c0-1.7 1.3-3 3-3h7z"], ["fill", "currentColor", "d", "M3 15V3c0-.3.1-.5.3-.7.2-.2.6-.5 1.2-.7C5.4 1.2 6.6 1 8 1s2.4.3 4.4 1.1c1.7.7 2.5.9 3.6.9 1.2 0 2.1-.2 2.8-.4.3-.1.5-.2.5-.3.6-.6 1.7-.2 1.7.7v12c0 .3-.1.5-.3.7-.2.2-.6.5-1.2.7-.9.4-2.1.6-3.5.6s-2.4-.3-4.4-1.1C9.9 15.2 9.1 15 8 15c-1.2 0-2.1.2-2.8.4-.1 0-.2.1-.2.1V22c0 .6-.4 1-1 1s-1-.4-1-1v-7zm5-2c1.4 0 2.4.3 4.4 1.1 1.8.7 2.5.9 3.6.9 1.2 0 2.1-.2 2.8-.4.1 0 .2-.1.2-.1V4.6c-.8.3-1.8.4-3 .4-1.4 0-2.4-.3-4.4-1.1C9.9 3.2 9.1 3 8 3c-1.2 0-2.1.2-2.8.4 0 .1-.1.1-.2.1v9.9c.8-.3 1.8-.4 3-.4z"], ["fill", "currentColor", "d", "M15.2 2.3c.3-.2.7-.3 1.1-.3h2.2C20.4 2 22 3.6 22 5.5V18c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h6.7l2.5-1.7zM6 6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5.5c0-.8-.7-1.5-1.5-1.5h-2.2l-3 2H6z"], ["d", "M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zM3 9h18M9 21V9", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M12 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-1 1.9C8.3 12.3 6.6 9.7 7.1 7c.5-2.3 2.5-4 4.9-4 2.8 0 5 2.2 5 5 0 2.4-1.7 4.4-4 4.9V20c0 .6-.4 1-1 1s-1-.4-1-1v-7.1z"], ["fill", "currentColor", "d", "M17.457 13.895a6.619 6.619 0 0 0 1.31-3.963c0-3.697-3.028-6.699-6.767-6.699-3.74 0-6.767 3.002-6.767 6.7 0 1.447.463 2.822 1.31 3.962.06.08.106.162.14.247l4.64 6.015a.854.854 0 0 0 1.352 0l4.625-5.972c.036-.1.088-.197.157-.29zM3 9.932C3 4.997 7.032 1 12 1s9 3.997 9 8.932a8.848 8.848 0 0 1-1.508 4.951 1.14 1.14 0 0 1-.188.362l-4.863 6.28a3.087 3.087 0 0 1-4.886-.004l-4.843-6.278a1.134 1.134 0 0 1-.17-.31 8.848 8.848 0 0 1-1.542-5zm9 4.14a4.073 4.073 0 1 1 0-8.145 4.073 4.073 0 0 1 0 8.146zm0-2.232a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68z"], ["fill", "currentColor", "d", "M3 9.932C3 4.997 7.032 1 12 1s9 3.997 9 8.932a8.848 8.848 0 0 1-1.508 4.951 1.14 1.14 0 0 1-.188.362l-4.863 6.28a3.087 3.087 0 0 1-4.886-.004l-4.843-6.278a1.134 1.134 0 0 1-.17-.31 8.848 8.848 0 0 1-1.542-5zm9 4.14a4.073 4.073 0 1 0 0-8.145 4.073 4.073 0 0 0 0 8.146zm0-2.232a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68z"], ["fill", "currentColor", "d", "M11 17c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zm-1-8c0-.1 0-.2.2-.4.2-.4.8-.6 1.8-.6.5 0 .7 0 1 .1.7.2 1 .6 1 1.9 0 .3-.2.7-.7 1l-.9.6c-.8.5-1.4 1.5-1.4 2.4 0 .6.4 1 1 1s1-.4 1-1c0-.2.2-.5.4-.6.4-.2.8-.5 1.2-.8.8-.7 1.4-1.6 1.4-2.6 0-2.2-1-3.5-2.5-3.9C13 6 12.6 6 12 6c-1.6 0-2.8.5-3.4 1.4C8.1 8 8 8.6 8 9c0 .6.4 1 1 1s1-.4 1-1z"], ["fill", "currentColor", "d", "M19.543 12.577a15.98 15.98 0 0 1-1.647 2.264C16.15 16.832 14.17 18 12.017 18a6.905 6.905 0 0 1-4.245-1.579 1 1 0 0 0-1.264 1.55A8.915 8.915 0 0 0 12 20c2.84 0 5.31-1.457 7.4-3.84a17.956 17.956 0 0 0 1.855-2.55c.317-.524.534-.937.65-1.186a1 1 0 0 0-.011-.872 16.91 16.91 0 0 0-4.401-5.524 1 1 0 1 0-1.266 1.55 14.859 14.859 0 0 1 3.647 4.426c-.09.163-.2.356-.33.573zM4.457 11.423A15.98 15.98 0 0 1 6.104 9.16C7.85 7.168 9.83 6 12.003 6a6 6 0 0 1 1.472.18 1 1 0 0 0 .486-1.94A7.995 7.995 0 0 0 12 4C9.16 4 6.69 5.457 4.6 7.84a17.956 17.956 0 0 0-1.855 2.55 13.64 13.64 0 0 0-.65 1.186 1 1 0 0 0 .01.871 17.294 17.294 0 0 0 1.876 2.963 1 1 0 1 0 1.572-1.237 15.245 15.245 0 0 1-1.427-2.176c.089-.163.2-.356.33-.574zm5.318 3.216a3.338 3.338 0 0 0 3.157.79c1.229-.336 2.175-1.348 2.48-2.627a3.766 3.766 0 0 0-.653-3.147l6.948-6.948a1 1 0 1 0-1.414-1.414l-18 18a1 1 0 0 0 1.414 1.414l6.068-6.068zm3.54-3.54c.194.367.254.812.152 1.239-.139.58-.551 1.022-1.062 1.161a1.332 1.332 0 0 1-1.213-.277l2.123-2.123z"], ["fill", "currentColor", "d", "M20 11.6V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1 .7 1.8 1.6 2l9.3-9.3c1.2-1.2 3.1-1.2 4.2 0l.9.9zm0 2.8l-2.3-2.3c-.4-.4-1-.4-1.4 0L8.4 20H18c1.1 0 2-.9 2-2v-3.6zM6 2h12c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V6c0-2.2 1.8-4 4-4zm3 4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"], ["fill", "currentColor", "d", "M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11zm0-2c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9zm1-5c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4zm-1.7-6.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z"], ["d", "M9 5h6c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4zm3 10c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm3.4-5.6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-.1c-.5 0-.9.4-.9.9.2.6.6.9 1 .9z", "fill", "currentColor"], ["d", "M5.8 10h12.4c.9 0 1.8.6 1.8 1.4v9.2c0 .8-.8 1.4-1.8 1.4H5.8c-1 0-1.8-.6-1.8-1.4v-9.2c0-.8.8-1.4 1.8-1.4zm.2 1.8v8.3h12v-8.3H6zm6 6.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-3-8H7V7.1C7 4.3 9.2 2 12 2s5 2.3 5 5.1V10h-2V7.1C15 5.4 13.6 4 12 4S9 5.4 9 7.1V10z", "fill", "currentColor"], ["d", "M7 10V7.1C7 4.3 9.2 2 12 2s5 2.3 5 5.1V10h1.2c.9 0 1.8.6 1.8 1.4v9.2c0 .8-.8 1.4-1.8 1.4H5.8c-1 0-1.8-.6-1.8-1.4v-9.2c0-.8.8-1.4 1.8-1.4H7zm2 0h6V7.1C15 5.4 13.6 4 12 4S9 5.4 9 7.1V10zm3 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z", "fill", "currentColor"], ["d", "M5.8 10h12.4c.9 0 1.8.6 1.8 1.4v9.2c0 .8-.8 1.4-1.8 1.4H5.8c-1 0-1.8-.6-1.8-1.4v-9.2c0-.8.8-1.4 1.8-1.4zm.2 1.8v8.3h12v-8.3H6zm6 6.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4.9-12.5c.2.7-.2 1.1-.6 1.2-.3.2-1.1 0-1.3-.7-.4-1.2-1.5-2-2.8-2-1.6 0-3 1.4-3 3.1V10h-2V7.1c0-2.8 2.2-5.1 5-5.1 2.2 0 4.1 1.5 4.7 3.5z", "fill", "currentColor"], ["d", "M7.2 10V7.1c0-2.8 2.2-5.1 5-5.1 2.2 0 4.1 1.5 4.8 3.5.2.7-.2 1.1-.6 1.2-.4.2-1.2 0-1.4-.7-.4-1.2-1.5-2-2.8-2-1.6 0-3 1.4-3 3.1V10h9c.9 0 1.8.6 1.8 1.4v9.2c0 .8-.8 1.4-1.8 1.4H5.8c-1 0-1.8-.6-1.8-1.4v-9.2c0-.8.8-1.4 1.8-1.4h1.4zm4.8 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 11l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3c.8.8.8 2 0 2.8l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L14 13H4c-.6 0-1-.4-1-1s.4-1 1-1h10zM9 22c-.6 0-1-.4-1-1s.4-1 1-1h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H9c-.6 0-1-.4-1-1s.4-1 1-1h9c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H9z"], ["d", "M3.1 13.3c-.7 0-1.2.6-1.1 1.3 0 0-.1-.4 0 0 1.2 4.2 5.1 7.3 9.8 7.3C17.5 22 22 17.5 22 12S17.5 2 11.8 2C7.2 2 3.2 5.1 2.1 9.3c-.1.7.3 1.3 1.1 1.3h8.5c.2 0 .2-.1.1-.2l-1.5-1.5C9 7.6 10.9 5.8 12.2 7l4.1 4.1c.5.5.5 1.2 0 1.7l-4.1 4.1c-1.3 1.3-3.2-.6-1.9-1.9l1.5-1.5c.1-.1.1-.2-.1-.2H3.1z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M4 17zm0-9v9h16V8l-8 6.2C12 14.3 4 8 4 8zm1.9-1l6.1 4.7L18.1 7H5.9zM4 19c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4z"], ["fill", "currentColor", "d", "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"], ["fill", "currentColor", "d", "M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11zm0-2c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9zm-4-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1H8z"], ["d", "M7 11h10c.6 0 1 .4 1 1s-.4 1-1 1H7c-.6 0-1-.4-1-1s.4-1 1-1z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M12 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0 6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0 6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z", "fill", "currentColor"], ["fill", "currentColor", "d", "M7 15V7.1c0-1.3.9-2.5 2.1-2.9L16.4 2c1.1-.3 2.2.3 2.5 1.3.1.3.1.5.1.7v11.2c0 1.9-1.6 3.5-3.5 3.5S12 17.1 12 15.2s1.6-3.5 3.5-3.5c.5 0 1 .1 1.5.3V4L9.7 6.2c-.4.1-.7.5-.7.9v11c0 1.9-1.6 3.5-3.5 3.5S2 20.1 2 18.2s1.6-3.5 3.5-3.5c.5 0 1 .1 1.5.3zm8.5 1.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm-10 3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.6-1.5 1.5c0 .8.7 1.5 1.5 1.5z"], ["d", "M11.2 15.3c-1.3-.1-2.5-.4-3.5-1.2-.1-.1-.3-.2-.4-.3-.4-.4-.5-.9-.1-1.3.3-.4.8-.5 1.3-.3.1 0 .2.1.3.2 1.9 1.2 4.4 1.2 6.3.1l.6-.3c.4-.1.9 0 1.1.4.3.4.3.8-.1 1.2-.5.5-1.1.9-1.8 1.1-.7.2-1.4.4-2.1.4l.2.2c1 .9 1.9 1.8 2.9 2.7.3.3.4.7.2 1.1-.1.5-.6.7-1 .7-.3 0-.5-.1-.7-.3-.7-.7-1.5-1.4-2.2-2.1-.2-.2-.3-.2-.5 0-.7.7-1.5 1.4-2.2 2.1-.3.3-.7.4-1.1.2-.4-.2-.7-.6-.7-1 0-.3.2-.5.3-.7.9-.9 1.9-1.8 2.8-2.7.2 0 .3-.1.4-.2zm.6-3.1c-2.2 0-4.1-1.9-4-4.1 0-2.3 1.8-4.1 4-4.1 2.3 0 4.1 1.9 4.1 4.1 0 2.3-1.9 4.1-4.1 4.1zm2-4.1c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z", "fill", "currentColor"], ["fill", "currentColor", "d", "M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11zm0-2c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9zm-1-6c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v6zm4 0c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v6z"], ["fill", "currentColor", "d", "M20 16.5c0-.4-.3-.8-.7-.8-.9-.1-1.9-.4-2.8-.7-.3-.1-.6 0-.8.2l-1.1 1.1c-.3.3-.8.4-1.2.2-2.4-1.4-4.4-3.4-5.8-5.8-.2-.4-.2-.9.2-1.2l1.1-1.1c.2-.3.2-.7.1-1-.3-.8-.5-1.8-.7-2.7 0-.4-.4-.7-.8-.7H4.8c-.4 0-.8.4-.8.8v.1c.3 2.6 1.2 5.2 2.6 7.4 1.3 2.1 3.1 3.8 5.1 5.1 2.2 1.4 4.7 2.3 7.3 2.6.4 0 .8-.3.9-.7V16.5zm2 2.7c0 1.5-1.2 2.8-2.8 2.8h-.3c-2.9-.3-5.7-1.3-8.2-2.9-2.3-1.5-4.3-3.4-5.7-5.7C3.3 10.9 2.3 8 2 5.1 1.9 3.5 3 2.2 4.6 2h3c1.4 0 2.6 1 2.8 2.4.1.8.3 1.6.6 2.3.4 1 .1 2.2-.6 3l-.6.6c1 1.6 2.4 3 4 4l.6-.6c.8-.8 1.9-1 3-.6.7.3 1.5.5 2.3.6 1.4.2 2.4 1.4 2.4 2.8-.1 0-.1 2.7-.1 2.7z"], ["fill", "currentColor", "d", "M13 11h2.2c.442 0 .8.448.8 1s-.358 1-.8 1H13v2.2c0 .442-.448.8-1 .8s-1-.358-1-.8V13H8.8c-.442 0-.8-.448-.8-1s.358-1 .8-1H11V8.8c0-.442.448-.8 1-.8s1 .358 1 .8V11zm-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"], ["fill", "currentColor", "d", "M13 11V8.8c0-.442-.448-.8-1-.8s-1 .358-1 .8V11H8.8c-.442 0-.8.448-.8 1s.358 1 .8 1H11v2.2c0 .442.448.8 1 .8s1-.358 1-.8V13h2.2c.442 0 .8-.448.8-1s-.358-1-.8-1H13zm-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"], ["fill", "currentColor", "fill-rule", "evenodd", "d", "M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z"], ["fill", "currentColor", "d", "M19 19v3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-3H4c-1.7 0-3-1.3-3-3v-5c0-1.7 1.3-3 3-3h1V2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v6h1c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3h-1zm0-2h1c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h1v-3c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v3zM7 8h10V3H7v5zm0 13h10v-6H7v6z"], ["d", "M12 20v1.6c0 .6-.4 1-1 1-.3 0-.5-.1-.7-.3l-2.6-2.6c-.4-.4-.4-1 0-1.4l2.6-2.6c.4-.4 1-.4 1.4 0 .2.2.3.4.3.7V18c3.3 0 6-2.7 6-6 0-.5-.1-1-.2-1.6l1.6-1.6c1.7 4.1-.2 8.8-4.2 10.5-1.1.5-2.1.7-3.2.7zm0-16V2.4c0-.6.4-1 1-1 .3 0 .5.1.7.3l2.6 2.6c.4.4.4 1 0 1.4l-2.6 2.6c-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7V6c-3.3 0-6 2.7-6 6 0 .5.1 1 .2 1.6l-1.6 1.6c-1.7-4.1.2-8.8 4.3-10.6 1-.4 2-.6 3.1-.6z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14.1 17H5c-.6 0-1-.4-1-1s.4-1 1-1h9.1c.6-2.1 2.7-3.4 4.9-2.9 1.8.5 3 2 3 3.9 0 2.2-1.8 4-4 4-1.8 0-3.4-1.2-3.9-3zM9.9 7H19c.6 0 1 .4 1 1s-.4 1-1 1H9.9c-.6 2.1-2.7 3.4-4.9 2.9-1.8-.5-3-2-3-3.9 0-2.2 1.8-4 4-4 1.8 0 3.4 1.2 3.9 3zM6 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"], ["fill", "currentColor", "d", "M4.457 12.577a15.98 15.98 0 0 0 1.647 2.264C7.85 16.832 9.83 18 12 18s4.15-1.168 5.896-3.16a15.98 15.98 0 0 0 1.98-2.84 15.98 15.98 0 0 0-1.98-2.84C16.15 7.167 14.17 6 12 6S7.85 7.168 6.104 9.16A15.98 15.98 0 0 0 4.124 12c.09.164.2.358.333.577zm-2.363-1c.117-.25.334-.663.65-1.188A17.956 17.956 0 0 1 4.6 7.841C6.69 5.457 9.16 4 12 4c2.84 0 5.31 1.457 7.4 3.84a17.985 17.985 0 0 1 1.855 2.55c.317.524.534.937.65 1.186a1 1 0 0 1 0 .848c-.116.249-.333.662-.65 1.187a17.956 17.956 0 0 1-1.855 2.548C17.31 18.543 14.84 20 12 20c-2.84 0-5.31-1.457-7.4-3.84a17.956 17.956 0 0 1-1.855-2.55 13.64 13.64 0 0 1-.65-1.186 1 1 0 0 1 0-.848zm9.951 3.923a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"], ["d", "M5 7v2h4V7H5zM4 5h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm1 10v2h4v-2H5zm-1-2h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zm11 2v2h4v-2h-4zm-1-2h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zm1-6v2h4V7h-4zm-1-2h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M15.6 16l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3c.8.8.8 2 0 2.8l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l2.3-2.3H12c-3.3 0-6-2.7-6-6V3c0-.6.4-1 1-1s1 .4 1 1v9c0 2.2 1.8 4 4 4h3.6z"], ["d", "M12 18.6L5.8 22 7 14.8 2 9.6l6.9-1.1L12 2l3.1 6.6 6.9 1-5 5.1 1.2 7.2-6.2-3.3z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.678-5.882a1 1 0 1 1-1.06 1.696l-3.148-1.966A1 1 0 0 1 11 13V8a1 1 0 0 1 2 0v4.446l2.678 1.672z"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.678-7.882L13 12.446V8a1 1 0 0 0-2 0v5a1 1 0 0 0 .47.848l3.148 1.966a1 1 0 1 0 1.06-1.696z"], ["d", "M12 19c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-6c0-.1 0 0 .3-.2l.2-.1c1-.5 1.5-1.3 1.5-2.6C15 8.4 13.7 7 12 7c-1.6 0-3 1-3 2.5 0 .6.4 1 1 1s1-.4 1-1c0-.2.4-.5 1-.5.5 0 1 .5 1 1.1 0 .5-.1.6-.5.8l-.2.1c-.9.5-1.3 1-1.3 2 0 .6.4 1 1 1s1-.4 1-1zm-1 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M10 6h4V4h-4v2zM8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h3c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h3zm-3 5.1c-.1-.5.3-1 .9-1.1.5-.1 1 .3 1.1.9l.8 8c.1.6.6 1.1 1.2 1.1h6c.6 0 1.1-.5 1.2-1.1l.8-8c.1-.5.5-1 1.1-.9.5.1 1 .5.9 1.1l-.8 8C18 20.7 16.6 22 15 22H9c-1.6 0-3-1.3-3.2-2.9l-.8-8z"], ["d", "M10 6h4V4h-4v2zM8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h3c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h3zm-3 4.1c-.1-.6.3-1.1.9-1.1h12.2c.6 0 .9.5.9 1.1l-.8 9C18 20.7 16.6 22 15 22H9c-1.6 0-3-1.3-3.2-2.9l-.8-9z", "fill", "currentColor"], ["d", "M20 7.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1.1 1.4-1.8-.6.4-1.4.7-2.1.8-1.2-1.3-3.3-1.4-4.6-.2-.9.8-1.2 2-1 3.1-2.6 0-5-1.2-6.7-3.3-.3.5-.4 1.1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.7 2.3 3.1 2.3-1.2.9-2.6 1.4-4.1 1.4H4c1.5 1 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z", "fill", "currentColor"], ["d", "M13 5.9V15c0 .6-.4 1-1 1s-1-.4-1-1V5.9L8.7 8.2c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3.3-3.3c.8-.8 2-.8 2.8 0l3.3 3.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L13 5.9zM2 16c0-.6.4-1 1-1s1 .4 1 1v1c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-1c0-.6.4-1 1-1s1 .4 1 1v1c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4v-1z", "fill", "currentColor"], ["d", "M12 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm8.4 5.4C18.6 20.2 15.5 22 12 22s-6.6-1.8-8.4-4.6c1-2 3-3.4 5.4-3.4h6c2.4 0 4.4 1.4 5.4 3.4z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M17.8 13.4c.5.6 1.1 1.1 1.6 1.7l.6.9c.2.5 0 1-.4 1h-2.3c-.6.1-1.1-.2-1.5-.7-.3-.4-.6-.8-.9-1.1-.1-.2-.3-.3-.4-.4-.3-.2-.6-.2-.8.2-.2.4-.2.8-.2 1.2 0 .6-.2.8-.7.8-1.2.1-2.3-.1-3.3-.8-.9-.6-1.6-1.4-2.2-2.3-1.2-1.8-2.1-3.8-3-5.8-.4-.5-.3-.7.2-.8h2.3c.3 0 .5.2.6.5.4 1.2.9 2.3 1.5 3.2.2.3.3.5.6.7.3.2.5.1.6-.2.1-.2.1-.4.1-.7.1-.8.1-1.6 0-2.3-.1-.5-.3-.8-.7-.9-.2 0-.2-.1-.1-.3.2-.1.4-.3.7-.3h2.6c.4.1.5.3.6.8V11c0 .2.1.7.4.8.2.1.4-.1.5-.3.6-.7 1.1-1.6 1.5-2.5.2-.4.3-.8.5-1.2.1-.3.3-.5.6-.4h2.7c.4.1.5.3.4.7-.2.7-.6 1.3-1 1.9-.4.6-.9 1.3-1.3 1.9-.3.6-.3.9.2 1.5z", "fill", "currentColor"], ["d", "M4 5h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1zm0 4h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1zm0 4h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1zm0 4h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1z", "fill", "currentColor"], ["d", "M19.4 7c-.6-.7-1.6-1-3.7-1H8.3c-2.1 0-3.2.3-3.7 1.1C4 7.9 4 9 4 10.5v3c0 3 .7 4.5 4.3 4.5h7.4c1.8 0 2.7-.3 3.4-.9.6-.7.9-1.7.9-3.6v-3c0-1.6 0-2.7-.6-3.5zm-5.1 5.4l-3.4 1.9c-.2.1-.4.1-.5 0-.2-.1-.3-.3-.2-.5v-3.7c0-.2.1-.4.2-.5.2-.1.3-.1.5 0l3.4 1.9c.2.1.3.3.3.5 0 .1-.2.3-.3.4z", "fill", "currentColor"], ["fill", "currentColor", "d", "M10 8.7v6.5c0 .2.2.4.4.4.1 0 .2 0 .2-.1l4.9-3.3c.2-.1.2-.4.1-.6l-.1-.1-4.9-3.3c-.2-.1-.4-.1-.6.1v.4z"], ["fill", "currentColor", "d", "M19.048 19l-4.91-7.248h-.057V19h-3.162v-7.248h-.056L5.952 19H2l5.73-7.606L2.593 5h3.67l4.6 6.2h.056V5h3.162v6.2h.056l4.6-6.2h3.67l-5.137 6.394L23 19z"], ["fill", "currentColor", "d", "M4.27 4L3 5.27l6.97 6.97L7.5 18h3l1.57-3.66L17.73 20 19 18.73 4.55 4.27 4.27 4zM7 4v.18L9.82 7h2.4l-.72 1.68 2.1 2.1L15.21 7H21V4H7z"], ["fill", "currentColor", "d", "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"], ["fill", "currentColor", "d", "M0 18h24v4H0zm8.959-5.795L7.598 16H5l5.34-14h3.32L19 16h-2.598l-1.36-3.795H8.958zm4.948-3.146a203.88 203.88 0 0 1-1.897-5.565h-.04a165.888 165.888 0 0 1-1.877 5.565L9.7 10.16h4.598l-.392-1.101z"], ["fill", "currentColor", "d", "M9.925 19H7.086V7.452H3V5h11.01v2.452H9.926zm8.928 0H16.57v-7.092H14V10h7.424v1.908h-2.571z"], ["fill", "currentColor", "d", "M3 18h18v2H3zm16.424-1.125h-2.746l-2.186-6.327h-.034l-1.526 6.327h-2.44l1.457-6.048h-.034l-4.762 6.048H4l5.763-6.64L7.423 4.5h2.662l1.932 5.927h.034L13.49 4.5h2.441l-1.373 5.649h.034l4.34-5.649H22l-5.186 6.014z"], ["d", "M-379-12h536v48h-536z"], ["d", "M0 0h24v24H0z"], ["fill", "#E7E8EA", "d", "M0 18h4v4H0z"], ["fill", "#CBCFD3", "d", "M4 18h4v4H4z"], ["fill", "#E7E8EA", "d", "M8 18h4v4H8z"], ["fill", "#CBCFD3", "d", "M12 18h4v4h-4z"], ["fill", "#E7E8EA", "d", "M16 18h4v4h-4z"], ["fill", "#CBCFD3", "d", "M20 18h4v4h-4z"], ["fill", "currentColor", "d", "M7.417 9.997a.25.25 0 0 0-.426.146c-.124 1.022-.662 2.218-1.438 3.197a.25.25 0 0 0 .019.332l.573.573-1.573 1.574a.25.25 0 0 0 .116.419l2 .5a.25.25 0 0 0 .237-.066l.824-.822.323.322a.25.25 0 0 0 .305.038l.735-.44c.837-.564 1.676-.897 2.493-.992a.251.251 0 0 0 .149-.426L7.416 9.996zM19.633 3.44l-.992-1.002a1.53 1.53 0 0 0-1.965-.15L8.1 8.738a.25.25 0 0 0-.027.377l4.878 4.9a.25.25 0 0 0 .178.073h.017a.25.25 0 0 0 .183-.1l6.454-8.572c.443-.61.38-1.442-.15-1.977z"], ["fill", "currentColor", "d", "M2 11h20v2H2z"], ["fill", "currentColor", "d", "M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm3.998 13.703l-.027-3.019a1.372 1.372 0 0 0-.44-1.026l-2.688-2.392a1.018 1.018 0 0 0-1.372 0l-3.708 3.296c-.39.355-.98.355-1.371 0l-1.15-1.022a1.018 1.018 0 0 0-1.371 0l-3.43 3.043a1.372 1.372 0 0 0-.439 1.026v.094A1.222 1.222 0 0 0 5.134 20h13.718a1.21 1.21 0 0 0 .84-.407c.214-.244.325-.564.306-.89z"], ["fill", "currentColor", "d", "M10 9h10v2H10zm-2 3l-4 3V9zM4 5h16v2H4zm6 8h10v2H10zm-6 4h12v2H4z"], ["fill", "currentColor", "d", "M18.086 19h-3.657l-4.315-6.945h-.057L8.257 19H5L8.6 5h3.257l-1.428 5.567h.057L16.714 5H21l-7.714 6.642z"], ["fill", "currentColor", "d", "M7 8h10v2H7zM4 5h16v2H4zm0 6h16v2H4zm3 3h10v2H7zm-3 3h16v2H4z"], ["fill", "currentColor", "d", "M4 8h16v2H4zm0-3h16v2H4zm0 6h16v2H4zm0 3h16v2H4zm0 3h16v2H4z"], ["fill", "currentColor", "d", "M4 8h10v2H4zm0-3h16v2H4zm0 6h16v2H4zm0 3h10v2H4zm0 3h16v2H4z"], ["fill", "currentColor", "d", "M10 8h10v2H10zM4 5h16v2H4zm0 6h16v2H4zm6 3h10v2H10zm-6 3h16v2H4z"], ["fill", "currentColor", "d", "M9.662 13.682c-.554-1.195 1.193-2.274 1.764-1.07 1.032 2.223 3.144 1.91 4.627.394 1.063-1.08 2.105-2.18 3.156-3.267.3-.277.583-.571.848-.882a2.269 2.269 0 0 0-.622-3.198c-2.461-1.701-4.04.83-5.585 2.427-.927.965-2.399-.478-1.486-1.432 1.046-1.077 2.148-2.678 3.584-3.322 1.435-.644 3.183-.286 4.481.516a4.329 4.329 0 0 1 .887 6.676c-1.347 1.446-2.714 2.914-4.136 4.286-2.321 2.235-6.088 1.974-7.518-1.128zM13.84 10.8c.555 1.195-1.19 2.273-1.76 1.073-1.032-2.227-3.144-1.906-4.63-.395-1.06 1.077-2.103 2.176-3.153 3.264-.301.276-.584.57-.849.882a2.266 2.266 0 0 0 .623 3.207c2.458 1.692 4.04-.838 5.585-2.436.924-.954 2.406.478 1.482 1.435-1.042 1.074-2.142 2.675-3.58 3.319-1.439.644-3.186.287-4.484-.516a4.331 4.331 0 0 1-.884-6.676c1.347-1.443 2.721-2.914 4.136-4.286 2.32-2.235 6.085-1.974 7.514 1.129z"], ["fill", "currentColor", "d", "M8 5h12v2H8zM4.209 7.76V5.755h-.841v-.83c.311 0 .542-.05.692-.147.15-.097.243-.255.277-.474h1.031V7.76H4.209zm.415 2.48c.288 0 .538.048.752.143.213.095.377.224.49.388a.93.93 0 0 1 .17.546c0 .267-.078.481-.237.643-.159.162-.388.3-.689.414a4.4 4.4 0 0 0-.415.177.681.681 0 0 0-.193.133.288.288 0 0 0-.068.135h1.698v.877h-2.99c-.007-.08-.01-.16-.01-.24 0-.381.073-.69.218-.927.145-.237.396-.443.754-.616.21-.104.363-.181.458-.233.095-.052.175-.11.24-.175a.302.302 0 0 0 .098-.218.234.234 0 0 0-.07-.18.276.276 0 0 0-.195-.066.307.307 0 0 0-.248.11c-.062.074-.093.18-.093.321H3.177c-.003-.394.122-.698.376-.911.253-.214.61-.321 1.071-.321zm-.01 6c.293 0 .547.04.76.118.213.078.377.19.493.334a.793.793 0 0 1 .172.508c0 .18-.045.328-.135.445-.09.117-.237.212-.44.285v.01c.217.07.374.167.472.29a.747.747 0 0 1 .148.48c0 .213-.06.4-.18.56-.12.16-.29.283-.508.37-.218.087-.474.13-.767.13-.5 0-.882-.106-1.147-.317-.266-.212-.398-.52-.398-.923h1.14c0 .147.034.257.103.33.068.073.167.11.297.11a.38.38 0 0 0 .25-.075c.06-.05.09-.118.09-.205 0-.107-.037-.186-.113-.238-.075-.051-.192-.077-.352-.077h-.08v-.77h.12a.48.48 0 0 0 .293-.08.25.25 0 0 0 .107-.21.255.255 0 0 0-.083-.203c-.055-.048-.134-.072-.237-.072-.127 0-.223.037-.29.11a.437.437 0 0 0-.1.305h-1.09c0-.38.13-.677.39-.892.26-.216.622-.323 1.085-.323zM8 11h12v2H8zm0 6h12v2H8z"], ["fill", "currentColor", "d", "M8 5h12v2H8z"], ["cx", "5", "cy", "6", "r", "1", "fill", "currentColor"], ["cx", "5", "cy", "18", "r", "1", "fill", "currentColor"], ["cx", "5", "cy", "12", "r", "1", "fill", "currentColor"], ["fill", "currentColor", "d", "M8 11h12v2H8zm0 6h12v2H8z"], ["fill", "currentColor", "d", "M10 9h10v2H10zm-6 3l4 3V9zm0-7h16v2H4zm6 8h10v2H10zm-6 4h12v2H4z"], ["fill", "currentColor", "d", "M14.424 16.116a6.254 6.254 0 0 0 1.67-1.67 4.569 4.569 0 0 0 .768-2.199c-.777 0-1.449-.185-2.014-.556-.565-.372-.848-1.016-.848-1.935 0-.777.265-1.431.795-1.961A2.602 2.602 0 0 1 16.703 7c.813 0 1.528.336 2.146 1.007.619.671.928 1.572.928 2.703 0 1.555-.406 2.88-1.219 3.975-.813 1.095-1.837 2.032-3.074 2.809l-1.06-1.378zm-9 0a6.254 6.254 0 0 0 1.67-1.67 4.569 4.569 0 0 0 .768-2.199c-.777 0-1.449-.185-2.014-.556C5.283 11.319 5 10.675 5 9.755c0-.777.265-1.431.795-1.961A2.602 2.602 0 0 1 7.703 7c.813 0 1.528.336 2.147 1.007.618.671.927 1.572.927 2.703 0 1.555-.406 2.88-1.219 3.975-.813 1.095-1.837 2.032-3.074 2.809l-1.06-1.378z"], ["fill", "currentColor", "d", "M19.5 10.969a.306.306 0 0 1-.112.238l-7.022 5.669a.278.278 0 0 1-.347.001.31.31 0 0 1-.094-.35l1.412-3.753C7.818 12.624 5.303 13.433 2 19c.901-4.806 2.695-9.2 11.337-9.835L11.925 5.41a.31.31 0 0 1 .094-.35.275.275 0 0 1 .347.002l7.022 5.668c.07.056.112.144.112.238z"], ["fill", "currentColor", "d", "M11.307 10.22h-.92v2.003l2.149-2.15a4.8 4.8 0 0 1-1.23.147m4.97 1.776l-2.03 2.03c.049.17.08.351.08.554 0 .546-.22.983-.66 1.31-.44.326-1.026.49-1.76.49h-.013L9.672 18.6a9.29 9.29 0 0 0 2.235.26c1.106 0 2.08-.17 2.92-.51.84-.34 1.493-.82 1.96-1.44.467-.62.7-1.35.7-2.19 0-.908-.22-1.64-.66-2.2a3.17 3.17 0 0 0-.551-.525M11.787 6.48c.72 0 1.293.167 1.72.5.426.333.64.773.64 1.32 0 .064-.015.122-.021.183l2.527-2.526a3.512 3.512 0 0 0-.826-.897C14.88 4.353 13.567 4 11.887 4c-1.813 0-3.217.423-4.21 1.27-.994.847-1.49 2.037-1.49 3.57h3.16c0-1.573.813-2.36 2.44-2.36M8.71 13.9H6.005c0 .865.157 1.61.448 2.254L8.71 13.9zM5 19.04L19.464 4.56l1.417 1.417-14.464 14.48z"], ["fill", "currentColor", "d", "M9.886 19l-1.974-3.32c-.321.547-.64 1.1-.954 1.66-.314.56-.64 1.114-.976 1.66H3l3.421-5.164a150.463 150.463 0 0 0-1.568-2.418A457.043 457.043 0 0 1 3.263 9h3.07c.293.492.574.99.845 1.496.27.505.544 1.004.822 1.496L9.71 9h3.027l-3.18 4.775L13 19H9.886zm4.546 3.056c.02-.55.11-1.034.271-1.454.162-.42.365-.791.61-1.115.246-.325.52-.61.824-.857.303-.247.607-.469.91-.666a4.43 4.43 0 0 0 .581-.434.477.477 0 0 0 .165-.349.44.44 0 0 0-.15-.338c-.1-.092-.257-.137-.47-.137-.232 0-.484.061-.755.185-.272.123-.572.326-.901.608l-.872-1.333a3.307 3.307 0 0 1 1.225-.835 3.89 3.89 0 0 1 1.43-.275c.316 0 .617.04.905.122.287.08.54.204.76.37.22.165.394.373.523.624.13.25.194.544.194.882 0 .459-.136.86-.407 1.206-.271.345-.694.68-1.269 1.004-.22.127-.403.24-.552.339a2.762 2.762 0 0 0-.368.285 1.687 1.687 0 0 0-.387.529h2.983v1.639h-5.25z"], ["fill", "currentColor", "d", "M9.886 19l-1.974-3.32c-.321.547-.64 1.1-.954 1.66-.314.56-.64 1.114-.976 1.66H3l3.421-5.164a150.463 150.463 0 0 0-1.568-2.418A457.041 457.041 0 0 1 3.263 9h3.07c.293.492.574.99.845 1.496.27.505.544 1.004.822 1.496L9.71 9h3.027l-3.18 4.775L13 19H9.886zm4.546-6.944c.02-.55.11-1.034.271-1.454.162-.42.365-.791.61-1.115.246-.325.52-.61.824-.857.303-.247.607-.469.91-.666a4.43 4.43 0 0 0 .581-.434.477.477 0 0 0 .165-.349.44.44 0 0 0-.15-.338c-.1-.092-.257-.137-.47-.137-.232 0-.484.061-.755.185-.272.123-.572.326-.901.608l-.872-1.333a3.307 3.307 0 0 1 1.225-.835 3.89 3.89 0 0 1 1.43-.275c.316 0 .617.04.905.122.287.08.54.204.76.37.22.165.394.373.523.624.13.25.194.544.194.882 0 .459-.136.86-.407 1.206-.271.345-.694.68-1.269 1.004-.22.127-.403.24-.552.339a2.762 2.762 0 0 0-.368.285 1.687 1.687 0 0 0-.387.529h2.983v1.639h-5.25z"], ["fill", "currentColor", "d", "M14.13 17v-4.939a12.925 12.925 0 0 1-3.549.486c-1.46 0-2.588-.35-3.385-1.049C6.399 10.798 6 9.809 6 8.53V4h2.87v3.967c0 .767.226 1.352.68 1.752.452.401 1.107.602 1.963.602.923 0 1.795-.145 2.617-.435V4H17v13h-2.87zM6 19h13v2H6z"], ["fill", "currentColor", "d", "M2.323 11.204l7.022 5.668a.278.278 0 0 0 .348.002.31.31 0 0 0 .094-.35L8.375 12.77c5.518-.149 8.034.659 11.337 6.226-.902-4.806-2.695-9.2-11.337-9.835l1.412-3.753a.31.31 0 0 0-.095-.35.275.275 0 0 0-.347 0l-7.022 5.67a.306.306 0 0 0-.111.237c0 .094.04.182.111.239z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "viewBox", "0 0 32 32", "focusable", "false"], ["fill", "currentColor", "d", "M21.6 16l9.7 11.4c1.1 1.1.8 2.8-.3 3.9-1.1.8-2.5.8-3.6 0L16 21.6 4.6 31.3c-1.1 1.1-2.8.8-3.9-.3-.8-1.1-.8-2.5 0-3.6L10.4 16 .7 4.6C-.4 3.5-.1 1.8 1 .7c1.1-.8 2.5-.8 3.6 0L16 10.4 27.4.7c1.1-1.1 2.8-.8 3.9.3.8 1.1.8 2.5 0 3.6L21.6 16z"], ["fill", "currentColor", "d", "M24.4 22.5c.9.7 1.5 1.6 1.5 2.9v3.1c0 .7-.4 1.5-1.1 1.8-2.4 1.1-5.8 1.6-8.2 1.6h-.7c-2.5 0-6-.7-8.5-1.8-.7-.4-1.1-1.1-1.1-1.8v-2.9c0-1.3.5-2.2 1.5-2.9l5.5-2.5c.5-.2.7-.4.7-.9v-.5c0-.2 0-.2.2-.4h.4c1.1.5 2 .5 3.3 0h.4c.2 0 .2.2.2.4v.5c0 .5.4.7.7.9l5.2 2.5zm-5.3-7.6c-.9 1.3-2 2-3.1 2-1.3 0-2.4-.7-3.1-2h-.2c-3.1 0-4.7-.7-4.7-.7-.2 0-.2-.2-.4-.2v-.4c.5-2.2 1.6-2.5 1.3-6.7 0-2 .7-3.6 2-4.9C12.4.7 14 0 16 0c1.1 0 2 0 2.9 1.5 0 0 .9-.5 2 .5.4.4.7.9 1.1 1.3.7 1.1 1.1 2.4 1.1 3.6-.4 4.2.4 4.5 1.3 6.5 0 .2 0 .4-.2.4-.4.6-3.1 1.1-5.1 1.1z"], ["fill", "currentColor", "d", "M14.8 0h2.4c1.6 0 2.7 1.1 2.7 2.7V3l-1.1 18.7c0 1.3-1.3 2.4-2.7 2.4h-.3c-1.3 0-2.7-1.1-2.7-2.4l-1-18.8c0-1.6 1.1-2.9 2.7-2.9zm1.1 26.7c1.6 0 2.7 1.1 2.7 2.7s-1.1 2.7-2.7 2.7-2.7-1.1-2.7-2.7c0-1.7 1.3-2.7 2.7-2.7z"], ["fill", "currentColor", "d", "M25.6 20c1.3.7 1.7 1.7 1.7 3v4.2c0 .6-.2 1.1-.7 1.5-2.6 2-6.5 3.1-10.2 3.3h-.6c-3.9 0-7.6-1.3-10.3-3.3-.6-.2-.7-.7-.7-1.3V23c0-1.3.4-2.4 1.7-3h.2l6.1-2.4c.6-.2.9-.2 1.5 0 1.1.6 2.4.6 3.7 0 .4-.2.9-.2 1.3 0l6.3 2.4zM22.1 8.2c.4.7-.2 1.8-1.3 3.3l-.2 1.1c0 1.1-.7 1.8-1.8 2.6 0 0-1.1.6-1.8.7h-1.3c-.2 0-.4 0-.6-.2-.7-.2-1.7-.7-1.7-.7-1.1-.6-1.7-1.5-1.8-2.6l-.2-1.1C10.3 9.7 9.7 8.6 10.1 8c0-.2.2-.4.4-.4.2-.2.4-.6.4-.7l-.6-2.4c-.2-.6-.2-1.1.2-1.5.2-.2.4-.4.7-.6h.4c.5-1 1.1-1.4 1.4-1.6.9-.7 2.2-.9 4.4-.7C20.5.5 22 1.4 22 2.7c0 .4 0 .6-.2.9l-.6 3.3c0 .4.2.6.4.7.1.2.3.4.5.6z"], ["fill", "currentColor", "d", "M25.1 20.5c1.3.5 1.6 1.6 1.6 2.9v4c0 .5-.2 1.1-.7 1.5-2.6 2-6 3.1-9.7 3.1h-.5c-3.7 0-7.1-1.3-9.9-3.1-.4-.4-.7-.9-.7-1.5v-4.2c0-1.3.4-2.2 1.6-2.9H7l5.9-2.4c.4-.2.9-.2 1.3 0 1.1.5 2.2.5 3.5 0 .4-.2.9-.2 1.3 0l5.9 2.4c.1.2.2.2.2.2zM16 15.9c-3.5 0-6.4-5.1-6.4-9.5S12.5 0 16 0s6.4 2 6.4 6.4-2.9 9.5-6.4 9.5z"], ["fill", "currentColor", "d", "M10.7 18.6L28.2 4.4c.9-.7 2.6-.7 3.3.2.7.9.7 2.4-.2 3.1L12.2 27.5c-.9.9-2.4.9-3.3 0l-.2-.2-3.8-4.2-4.2-5c-.9-.9-.7-2.6.2-3.3.7-.7 1.9-.7 2.6-.2l7.2 4z"]], template: function MuiIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MuiIconComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MuiIconComponent_ng_container_1_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MuiIconComponent_ng_container_2_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MuiIconComponent_ng_container_3_Template, 8, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MuiIconComponent_ng_container_4_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MuiIconComponent_ng_container_5_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MuiIconComponent_ng_container_6_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MuiIconComponent_ng_container_7_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MuiIconComponent_ng_container_8_Template, 6, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MuiIconComponent_ng_container_9_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MuiIconComponent_ng_container_10_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MuiIconComponent_ng_container_11_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MuiIconComponent_ng_container_12_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MuiIconComponent_ng_container_13_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MuiIconComponent_ng_container_14_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MuiIconComponent_ng_container_15_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MuiIconComponent_ng_container_16_Template, 6, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MuiIconComponent_ng_container_17_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MuiIconComponent_ng_container_18_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MuiIconComponent_ng_container_19_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MuiIconComponent_ng_container_20_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MuiIconComponent_ng_container_21_Template, 8, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MuiIconComponent_ng_container_22_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MuiIconComponent_ng_container_23_Template, 10, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MuiIconComponent_ng_container_24_Template, 6, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MuiIconComponent_ng_container_25_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MuiIconComponent_ng_container_26_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MuiIconComponent_ng_container_27_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MuiIconComponent_ng_container_28_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MuiIconComponent_ng_container_29_Template, 6, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MuiIconComponent_ng_container_30_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MuiIconComponent_ng_container_31_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MuiIconComponent_ng_container_32_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MuiIconComponent_ng_container_33_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MuiIconComponent_ng_container_34_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MuiIconComponent_ng_container_35_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MuiIconComponent_ng_container_36_Template, 6, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MuiIconComponent_ng_container_37_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MuiIconComponent_ng_container_38_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MuiIconComponent_ng_container_39_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MuiIconComponent_ng_container_40_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MuiIconComponent_ng_container_41_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MuiIconComponent_ng_container_42_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MuiIconComponent_ng_container_43_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MuiIconComponent_ng_container_44_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MuiIconComponent_ng_container_45_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MuiIconComponent_ng_container_46_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MuiIconComponent_ng_container_47_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MuiIconComponent_ng_container_48_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MuiIconComponent_ng_container_49_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, MuiIconComponent_ng_container_50_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, MuiIconComponent_ng_container_51_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MuiIconComponent_ng_container_52_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, MuiIconComponent_ng_container_53_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, MuiIconComponent_ng_container_54_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, MuiIconComponent_ng_container_55_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, MuiIconComponent_ng_container_56_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, MuiIconComponent_ng_container_57_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, MuiIconComponent_ng_container_58_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, MuiIconComponent_ng_container_59_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, MuiIconComponent_ng_container_60_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, MuiIconComponent_ng_container_61_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, MuiIconComponent_ng_container_62_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, MuiIconComponent_ng_container_63_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, MuiIconComponent_ng_container_64_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, MuiIconComponent_ng_container_65_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, MuiIconComponent_ng_container_66_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, MuiIconComponent_ng_container_67_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, MuiIconComponent_ng_container_68_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, MuiIconComponent_ng_container_69_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, MuiIconComponent_ng_container_70_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, MuiIconComponent_ng_container_71_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, MuiIconComponent_ng_container_72_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, MuiIconComponent_ng_container_73_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, MuiIconComponent_ng_container_74_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, MuiIconComponent_ng_container_75_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, MuiIconComponent_ng_container_76_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, MuiIconComponent_ng_container_77_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, MuiIconComponent_ng_container_78_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, MuiIconComponent_ng_container_79_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, MuiIconComponent_ng_container_80_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, MuiIconComponent_ng_container_81_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, MuiIconComponent_ng_container_82_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, MuiIconComponent_ng_container_83_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, MuiIconComponent_ng_container_84_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, MuiIconComponent_ng_container_85_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, MuiIconComponent_ng_container_86_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, MuiIconComponent_ng_container_87_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, MuiIconComponent_ng_container_88_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, MuiIconComponent_ng_container_89_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, MuiIconComponent_ng_container_90_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, MuiIconComponent_ng_container_91_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, MuiIconComponent_ng_container_92_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, MuiIconComponent_ng_container_93_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, MuiIconComponent_ng_container_94_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, MuiIconComponent_ng_container_95_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, MuiIconComponent_ng_container_96_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, MuiIconComponent_ng_container_97_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, MuiIconComponent_ng_container_98_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, MuiIconComponent_ng_container_99_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, MuiIconComponent_ng_container_100_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, MuiIconComponent_ng_container_101_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, MuiIconComponent_ng_container_102_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, MuiIconComponent_ng_container_103_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, MuiIconComponent_ng_container_104_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, MuiIconComponent_ng_container_105_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, MuiIconComponent_ng_container_106_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, MuiIconComponent_ng_container_107_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, MuiIconComponent_ng_container_108_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, MuiIconComponent_ng_container_109_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, MuiIconComponent_ng_container_110_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, MuiIconComponent_ng_container_111_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, MuiIconComponent_ng_container_112_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, MuiIconComponent_ng_container_113_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, MuiIconComponent_ng_container_114_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, MuiIconComponent_ng_container_115_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, MuiIconComponent_ng_container_116_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, MuiIconComponent_ng_container_117_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, MuiIconComponent_ng_container_118_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, MuiIconComponent_ng_container_119_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, MuiIconComponent_ng_container_120_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, MuiIconComponent_ng_container_121_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, MuiIconComponent_ng_container_122_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, MuiIconComponent_ng_container_123_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, MuiIconComponent_ng_container_124_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, MuiIconComponent_ng_container_125_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, MuiIconComponent_ng_container_126_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, MuiIconComponent_ng_container_127_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, MuiIconComponent_ng_container_128_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, MuiIconComponent_ng_container_129_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, MuiIconComponent_ng_container_130_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, MuiIconComponent_ng_container_131_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, MuiIconComponent_ng_container_132_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, MuiIconComponent_ng_container_133_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, MuiIconComponent_ng_container_134_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, MuiIconComponent_ng_container_135_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, MuiIconComponent_ng_container_136_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, MuiIconComponent_ng_container_137_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, MuiIconComponent_ng_container_138_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, MuiIconComponent_ng_container_139_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, MuiIconComponent_ng_container_140_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, MuiIconComponent_ng_container_141_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, MuiIconComponent_ng_container_142_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, MuiIconComponent_ng_container_143_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, MuiIconComponent_ng_container_144_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, MuiIconComponent_ng_container_145_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, MuiIconComponent_ng_container_146_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, MuiIconComponent_ng_container_147_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, MuiIconComponent_ng_container_148_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, MuiIconComponent_ng_container_149_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, MuiIconComponent_ng_container_150_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, MuiIconComponent_ng_container_151_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, MuiIconComponent_ng_container_152_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, MuiIconComponent_ng_container_153_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](154, MuiIconComponent_ng_container_154_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, MuiIconComponent_ng_container_155_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, MuiIconComponent_ng_container_156_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, MuiIconComponent_ng_container_157_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, MuiIconComponent_ng_container_158_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, MuiIconComponent_ng_container_159_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, MuiIconComponent_ng_container_160_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, MuiIconComponent_ng_container_161_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, MuiIconComponent_ng_container_162_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, MuiIconComponent_ng_container_163_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](164, MuiIconComponent_ng_container_164_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, MuiIconComponent_ng_container_165_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, MuiIconComponent_ng_container_166_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](167, MuiIconComponent_ng_container_167_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, MuiIconComponent_ng_container_168_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, MuiIconComponent_ng_container_169_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, MuiIconComponent_ng_container_170_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, MuiIconComponent_ng_container_171_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, MuiIconComponent_ng_container_172_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, MuiIconComponent_ng_container_173_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, MuiIconComponent_ng_container_174_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](175, MuiIconComponent_ng_container_175_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](176, MuiIconComponent_ng_container_176_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](177, MuiIconComponent_ng_container_177_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](178, MuiIconComponent_ng_container_178_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, MuiIconComponent_ng_container_179_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, MuiIconComponent_ng_container_180_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](181, MuiIconComponent_ng_container_181_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](182, MuiIconComponent_ng_container_182_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](183, MuiIconComponent_ng_container_183_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](184, MuiIconComponent_ng_container_184_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](185, MuiIconComponent_ng_container_185_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, MuiIconComponent_ng_container_186_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](187, MuiIconComponent_ng_container_187_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](188, MuiIconComponent_ng_container_188_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](189, MuiIconComponent_ng_container_189_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](190, MuiIconComponent_ng_container_190_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](191, MuiIconComponent_ng_container_191_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](192, MuiIconComponent_ng_container_192_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](193, MuiIconComponent_ng_container_193_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](194, MuiIconComponent_ng_container_194_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](195, MuiIconComponent_ng_container_195_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](196, MuiIconComponent_ng_container_196_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](197, MuiIconComponent_ng_container_197_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](198, MuiIconComponent_ng_container_198_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](199, MuiIconComponent_ng_container_199_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](200, MuiIconComponent_ng_container_200_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](201, MuiIconComponent_ng_container_201_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, MuiIconComponent_ng_container_202_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, MuiIconComponent_ng_container_203_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](204, MuiIconComponent_ng_container_204_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](205, MuiIconComponent_ng_container_205_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](206, MuiIconComponent_ng_container_206_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](207, MuiIconComponent_ng_container_207_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](208, MuiIconComponent_ng_container_208_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](209, MuiIconComponent_ng_container_209_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, MuiIconComponent_ng_container_210_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, MuiIconComponent_ng_container_211_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](212, MuiIconComponent_ng_container_212_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](213, MuiIconComponent_ng_container_213_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](214, MuiIconComponent_ng_container_214_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](215, MuiIconComponent_ng_container_215_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](216, MuiIconComponent_ng_container_216_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](217, MuiIconComponent_ng_container_217_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](218, MuiIconComponent_ng_container_218_Template, 12, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](219, MuiIconComponent_ng_container_219_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](220, MuiIconComponent_ng_container_220_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](221, MuiIconComponent_ng_container_221_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](222, MuiIconComponent_ng_container_222_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](223, MuiIconComponent_ng_container_223_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](224, MuiIconComponent_ng_container_224_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](225, MuiIconComponent_ng_container_225_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](226, MuiIconComponent_ng_container_226_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](227, MuiIconComponent_ng_container_227_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](228, MuiIconComponent_ng_container_228_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](229, MuiIconComponent_ng_container_229_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](230, MuiIconComponent_ng_container_230_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](231, MuiIconComponent_ng_container_231_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](232, MuiIconComponent_ng_container_232_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](233, MuiIconComponent_ng_container_233_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](234, MuiIconComponent_ng_container_234_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](235, MuiIconComponent_ng_container_235_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](236, MuiIconComponent_ng_container_236_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](237, MuiIconComponent_ng_container_237_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](238, MuiIconComponent_ng_container_238_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](239, MuiIconComponent_ng_container_239_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](240, MuiIconComponent_ng_container_240_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](241, MuiIconComponent_ng_container_241_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](242, MuiIconComponent_ng_container_242_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](243, MuiIconComponent_ng_container_243_Template, 3, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowDownLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconLinkLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMaestro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconVisaElectron");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheckLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMenuBurgerLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSettingsLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCopyLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseCircleFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheckFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheckFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconInfoFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAttentionFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconLogoutLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAvatarLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconLinkLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMaestro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconVisaElectron");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMasterCard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconWorldCard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconVisaCard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheckLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMenuBurgerLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSettingsLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseCircleFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheckFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheckFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconInfoFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAttentionFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconLogoutLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMoreInformationLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAvatarLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowTop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAttachFiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAttention");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconNotificationFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMarkerFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMarker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconList");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCalendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconBlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDiagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconChatCircle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheckBlank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheckCircle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseCircle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconChat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCopy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconEdit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDelete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconBlank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDownload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAddFile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconRemoveFile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconFileFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconFile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSystemLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconHide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconHome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconInfo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowLeftCircle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconNormalize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconLock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconLockFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconRemoveCircle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconRemove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMoreInformation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMoreInformationVertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowBack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconNotification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconShutdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPauseCircle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconImage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMapMark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPlayCircleFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPlayCircle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAddCircle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPlus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPrinter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconRepeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowRightCircle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSettingsFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSettings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconEye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowDownFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowTopFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSortBottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSortTop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconFavoritesFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconFavorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconNetwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconEnter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconTimerFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconTimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDeleteSmall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconHintFill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconHint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconUpdate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconLocked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconUpload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAvatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPurse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAddWidgetLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAttentionCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAttentionCircleFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAttentionLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconFolderLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowDownLongLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowDownSmallLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowDownCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowDownLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowLeftCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowLeftLongLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowLeftLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowRightCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowRightLongLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowRightLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowTopLongLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowTopSmallLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowTopCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowTopLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAttachFilesLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowBackCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowBackCircleFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDiagramLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconNotificationLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconNotificationFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMarkLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCalendarLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPortfolioLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPhotoLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconBlockLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCopyFilesLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDiagramSmallLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconChatLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheckCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseCircleFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseSmallLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseMarkLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseMarkFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDownloadLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconBlobLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconEditLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPenLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconListLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconFacebookLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconFavoritesLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDocumentLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconFlagLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconFileLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconBoxLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSwitcherLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMapMarkLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMapMarkFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconHintLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconInvisibleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconImageLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconInfoCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconInstagramLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconLockLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconLockFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconUnlockLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconUnlockFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconExitLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconArrowNextFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMailLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMenuLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconRemoveCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconRemoveLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMoreInformationVerticalLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMusicLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconClassmatesLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPauseCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPhoneLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAddCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAddCircleFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPlusLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPrinterLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconReloadLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDoubleSwitcherLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconEyeLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSortLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconEnterLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconFavoritesFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconTimerLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconTimerFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconHintFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDeleteLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconDeleteFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconTwitterLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconUploadLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAvatarFillLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconVkontakteLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconMenuGridLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconYoutubeLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPlayCircleLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconBoldTextEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCrossedTextEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSourceCodeEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconColorTextEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconSizeTextEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconUnderlineTextEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconColorEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconHyphenEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconImageEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconParagraphEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconItalicsEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconTextAlignCenterEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconTextAlignBetweenEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconTextAlignLeftEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconTextAlignRightEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconLinkEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconNumberListEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconListEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconPositionEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconQuotesEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconNextEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCrossedNumberEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconIndexTopEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconIndexBottomEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconUnderlineEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconBackEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCloseMarker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconWomenMarker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAttentionMarker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconManMarker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconAvatarMarker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "iconCheckMarker");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  min-width: inherit;\n  min-height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FuZ3VsYXIta2l0L3NyYy9saWIvY29tcG9uZW50cy9pY29uL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3Byb2plY3RzL2FuZ3VsYXIta2l0L3NyYy9saWIvY29tcG9uZW50cy9pY29uL2ljb24uc3R5bGUubGVzcyIsInByb2plY3RzL2FuZ3VsYXIta2l0L3NyYy9saWIvY29tcG9uZW50cy9pY29uL2ljb24uc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLWtpdC9zcmMvbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWluLXdpZHRoOiBpbmhlcml0O1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG4iLCI6aG9zdCB7XG4gIG1pbi13aWR0aDogaW5oZXJpdDtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuiIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mui-icon',
                templateUrl: './icon.template.html',
                styleUrls: ['./icon.style.less']
            }]
    }], null, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cursor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./projects/angular-kit/src/lib/components/icon/icon.module.ts":
/*!*********************************************************************!*\
  !*** ./projects/angular-kit/src/lib/components/icon/icon.module.ts ***!
  \*********************************************************************/
/*! exports provided: MuiIconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuiIconModule", function() { return MuiIconModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.component */ "./projects/angular-kit/src/lib/components/icon/icon.component.ts");




class MuiIconModule {
}
MuiIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MuiIconModule });
MuiIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MuiIconModule_Factory(t) { return new (t || MuiIconModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MuiIconModule, { declarations: [_icon_component__WEBPACK_IMPORTED_MODULE_2__["MuiIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_icon_component__WEBPACK_IMPORTED_MODULE_2__["MuiIconComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuiIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _icon_component__WEBPACK_IMPORTED_MODULE_2__["MuiIconComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _icon_component__WEBPACK_IMPORTED_MODULE_2__["MuiIconComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/angular-kit/src/public-api.ts":
/*!************************************************!*\
  !*** ./projects/angular-kit/src/public-api.ts ***!
  \************************************************/
/*! exports provided: MuiButtonComponent, MuiButtonModule, MuiIconComponent, MuiIconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components/button/button.component */ "./projects/angular-kit/src/lib/components/button/button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiButtonComponent", function() { return _lib_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__["MuiButtonComponent"]; });

/* harmony import */ var _lib_components_button_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/button/button.module */ "./projects/angular-kit/src/lib/components/button/button.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiButtonModule", function() { return _lib_components_button_button_module__WEBPACK_IMPORTED_MODULE_1__["MuiButtonModule"]; });

/* harmony import */ var _lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/icon/icon.component */ "./projects/angular-kit/src/lib/components/icon/icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiIconComponent", function() { return _lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["MuiIconComponent"]; });

/* harmony import */ var _lib_components_icon_icon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/icon/icon.module */ "./projects/angular-kit/src/lib/components/icon/icon.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiIconModule", function() { return _lib_components_icon_icon_module__WEBPACK_IMPORTED_MODULE_3__["MuiIconModule"]; });

/*
 * Public API Surface of angular-kit
 */






/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/profile-page/profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main.component */ "./src/app/pages/main.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _pages_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            {
                path: 'profile',
                component: _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_1__["ProfilePageComponent"],
            },
            {
                path: 'mui-flex-library',
                loadChildren: () => __webpack_require__.e(/*! import() | projects-mui-flex-library-mui-flex-library-module */ "projects-mui-flex-library-mui-flex-library-module").then(__webpack_require__.bind(null, /*! ./projects/mui-flex-library/mui-flex-library.module */ "./src/app/projects/mui-flex-library/mui-flex-library.module.ts")).then(m => m.MuiFlexLibraryModule),
            },
            {
                path: 'gamer',
                loadChildren: () => __webpack_require__.e(/*! import() | projects-gamer-gamer-module */ "projects-gamer-gamer-module").then(__webpack_require__.bind(null, /*! ./projects/gamer/gamer.module */ "./src/app/projects/gamer/gamer.module.ts")).then(m => m.GamerModule),
            },
            {
                path: '',
                component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__["HomePageComponent"],
            },
        ],
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-auth-module */ "pages-auth-auth-module").then(__webpack_require__.bind(null, /*! ./pages/auth/auth.module */ "./src/app/pages/auth/auth.module.ts")).then((m) => m.AuthModule),
    },
    {
        path: '**',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/auth/services/auth.service */ "./src/app/pages/auth/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_components_root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/root/root.component */ "./src/app/shared/components/root/root.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AppComponent {
    constructor(authService, httpClient) {
        this.authService = authService;
        this.httpClient = httpClient;
        this.defaultTheme = 'tech-dark';
    }
    ngOnInit() {
        this.httpClient.get('http://localhost:3000/users').subscribe(r => console.log(r));
        // window.sessionStorage.setItem('session', 'true');
    }
    get auth() {
        return this.authService.authorization;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[3, "theme"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mui-root", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.defaultTheme);
    } }, directives: [_shared_components_root_root_component__WEBPACK_IMPORTED_MODULE_3__["MuiRootComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: inherit;\n}\nrouter-outlet[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7QURFQTtFQUNJLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5yb3V0ZXItb3V0bGV0Kyoge1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxucm91dGVyLW91dGxldCArICoge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return [{ type: _pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_mw_svg_mw_svg_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/mw-svg/mw-svg.module */ "./src/app/shared/components/mw-svg/mw-svg.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _shared_components_root_root_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/root/root.module */ "./src/app/shared/components/root/root.module.ts");
/* harmony import */ var _pages_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/main.component */ "./src/app/pages/main.component.ts");
/* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/profile-page/profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _pages_profile_page_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/profile-page/user-info/user-info.component */ "./src/app/pages/profile-page/user-info/user-info.component.ts");
/* harmony import */ var _pages_profile_page_user_projects_preview_user_projects_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/profile-page/user-projects-preview/user-projects-preview.component */ "./src/app/pages/profile-page/user-projects-preview/user-projects-preview.component.ts");
/* harmony import */ var projects_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! projects/angular-kit/src/public-api */ "./projects/angular-kit/src/public-api.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");


















const LIBRARY_MODULES = [_shared_components_root_root_module__WEBPACK_IMPORTED_MODULE_9__["MuiRootModule"], projects_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_14__["MuiIconModule"]];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            LIBRARY_MODULES,
            _shared_components_mw_svg_mw_svg_module__WEBPACK_IMPORTED_MODULE_1__["MwSvgModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
        _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_11__["ProfilePageComponent"],
        _pages_profile_page_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__["UserInfoComponent"],
        _pages_profile_page_user_projects_preview_user_projects_preview_component__WEBPACK_IMPORTED_MODULE_13__["UserProjectsPreviewComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _shared_components_root_root_module__WEBPACK_IMPORTED_MODULE_9__["MuiRootModule"], projects_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_14__["MuiIconModule"],
        _shared_components_mw_svg_mw_svg_module__WEBPACK_IMPORTED_MODULE_1__["MwSvgModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                    _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_11__["ProfilePageComponent"],
                    _pages_profile_page_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__["UserInfoComponent"],
                    _pages_profile_page_user_projects_preview_user_projects_preview_component__WEBPACK_IMPORTED_MODULE_13__["UserProjectsPreviewComponent"],
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    LIBRARY_MODULES,
                    _shared_components_mw_svg_mw_svg_module__WEBPACK_IMPORTED_MODULE_1__["MwSvgModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/auth/services/auth.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/services/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.auth$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.sessionStorage = window.sessionStorage;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    get authorization() {
        const auth = this.sessionStorage.getItem('auth');
        if (auth) {
            if (auth === 'true') {
                return true;
            }
            return false;
        }
    }
    /**
     *
     * @param login получает логин пользователя для регистрации на сервере
     * @param password строка, по которой будет определяться пароль пользователя
     * @param email эл.почта пользователя, по которой связывается регистрация на серере
     */
    register$(login, password, email) {
        return this.httpClient.post('https://api.microworld.exluap.com/api/user/register', { login, password, email }, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            if (err.error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    }
    /**
     *
     * @param login
     * @param password
     */
    login$(login, password) {
        console.log({ login, password });
        return this.httpClient.post('https://api.microworld.exluap.com/api/user/login', { login, password }, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            if (err.error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    }
    /**
     *
     */
    updateSessionStorage() {
        this.sessionStorage.setItem('auth', 'true');
    }
    // public resetPassword$(email: string): Observable<UserInterface | null> {
    //     return this.httpClient.post<UserInterface>('', email, this.httpOptions).pipe(
    //         catchError(() => {
    //             return of(null);
    //         })
    //     );
    // }
    getUUID() {
    }
    getUserInfo$(UUID) {
        return this.httpClient.get('');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function HomePageComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0411\u043B\u043E\u0433\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0411\u043B\u043E\u0433\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomePageComponent {
    constructor() {
        this.isModalDialogVisible = false;
    }
    showDialog() {
        this.isModalDialogVisible = true;
    }
    closeModal(isConfirmed) {
        this.isModalDialogVisible = false;
    }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 53, vars: 0, consts: [[1, "main-logo-container"], [1, "logo", "mui-space_right-10"], ["width", "128", "height", "128", "viewBox", "0 0 128 128", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M63.7503 11.25C49.394 11.25 36.4737 17.2316 27.1253 26.75C27.124 26.7917 27.124 26.8333 27.1253 26.875C27.0652 26.9365 26.9352 26.9382 26.8753 27C26.6354 27.1229 26.4228 27.2929 26.2503 27.5C25.7212 28.1921 25.0884 28.9267 24.5003 29.625C24.2538 29.916 23.9906 30.2036 23.7503 30.5C23.5168 30.7775 23.3599 31.0906 23.1253 31.375C22.9971 31.54 22.8766 31.7084 22.7503 31.875C22.3393 32.3832 21.8979 32.8326 21.5003 33.375C21.2406 33.7453 21.0007 34.1228 20.7503 34.5C20.4992 34.8769 20.2358 35.2257 20.0003 35.625C19.8679 35.8559 19.7829 36.1109 19.7503 36.375C14.9682 44.251 12.0939 53.3831 12.0003 63.25C11.9951 63.3333 11.9951 63.4167 12.0003 63.5C11.9999 63.5856 12.0003 63.6643 12.0003 63.75C12.0003 66.4457 12.2535 69.1558 12.6253 71.75C12.6298 71.7908 12.6209 71.8342 12.6253 71.875C12.6333 72.0887 12.6755 72.2997 12.7503 72.5C13.0882 74.6499 13.5423 76.6947 14.1253 78.75C9.27996 83.132 5.25418 86.6292 2.7503 90C1.41338 91.7996 0.429702 93.5352 0.125302 95.5C-0.172698 97.4248 0.294502 99.422 1.3753 101.25C1.3995 101.268 1.3613 101.349 1.3753 101.375C3.1567 104.676 6.63938 106.855 11.1253 107.375C15.6823 107.903 21.4257 107.023 28.5003 104.625C29.0159 104.446 29.6 104.189 30.1253 104C39.2648 111.823 50.9134 116.75 63.7503 116.75C91.075 116.75 113.398 95.2117 115.5 68C115.502 67.9583 115.502 67.9167 115.5 67.875C115.601 66.5329 115.75 65.1173 115.75 63.75C115.75 59.5982 115.209 55.7818 114.375 52C118.966 47.6355 122.967 43.0939 125.375 38.875C126.752 36.4638 127.59 34.0838 127.875 31.875C128.143 29.8054 127.592 27.8232 126.25 26.25L126.375 26.125C126.324 26.045 126.18 26.076 126.125 26C124.472 23.712 121.391 22.8768 117.375 23C117.33 23.0012 117.296 22.9984 117.25 23C117.211 22.9565 117.169 22.9148 117.125 22.875H116.625C116.584 22.8737 116.542 22.8737 116.5 22.875C112.363 23.1746 106.684 24.576 100.375 26.75C90.9633 17.232 78.0376 11.25 63.7503 11.25ZM63.7503 15.25C78.4492 15.25 91.5794 22.0218 100.375 32.625C100.664 32.9794 101.024 33.4428 101.25 33.75C101.319 33.884 101.403 34.0098 101.5 34.125C103.505 36.7369 105.291 39.5013 106.75 42.5H83.0003C79.6823 42.5 77.2503 45.2668 77.2503 48.25C77.2503 51.234 79.6823 54.125 83.0003 54.125H90.2503H94.7503C89.6697 57.9695 84.0606 61.8969 77.8753 65.875H71.2503C66.0613 65.875 61.7503 70.2804 61.7503 75.5V75.75C48.1122 83.6194 35.0135 89.6712 25.3753 93C23.1929 90.0923 21.4506 86.9152 20.0003 83.5C19.9804 83.3286 19.9384 83.1606 19.8753 83C19.4644 81.9546 19.0432 80.9158 18.6253 79.875C17.9575 77.8666 17.4112 75.8711 17.0003 73.75H37.0003C40.1757 73.75 42.7503 71.0466 42.7503 67.875C42.7503 64.5514 40.176 61.75 37.0003 61.75H16.1253C16.1616 60.8596 16.1674 60.0025 16.2503 59.125H37.0003C37.2653 59.1287 37.5284 59.0798 37.7744 58.981C38.0203 58.8821 38.2442 58.7354 38.4329 58.5493C38.6216 58.3632 38.7715 58.1415 38.8738 57.897C38.9761 57.6525 39.0288 57.39 39.0288 57.125C39.0288 56.86 38.9761 56.5975 38.8738 56.353C38.7715 56.1085 38.6216 55.8868 38.4329 55.7007C38.2442 55.5146 38.0203 55.3679 37.7744 55.269C37.5284 55.1702 37.2653 55.1213 37.0003 55.125H16.8753C17.934 49.1513 19.9988 43.628 23.0003 38.625H56.2503C59.4257 38.625 62.0003 35.922 62.0003 32.75C62.0003 29.4268 59.4259 26.75 56.2503 26.75H33.0003C41.2994 19.6219 51.9657 15.25 63.7503 15.25ZM71.5003 26.75C68.3246 26.75 65.7503 29.4268 65.7503 32.75C65.7503 35.9216 68.3246 38.625 71.5003 38.625C74.6757 38.625 77.2503 35.922 77.2503 32.75C77.2503 29.4268 74.676 26.75 71.5003 26.75ZM116.75 26.875C116.792 26.8763 116.834 26.8763 116.875 26.875C120.866 26.603 122.436 27.5138 123 28.375C123.076 28.4655 123.16 28.5492 123.25 28.625C123.838 29.223 124.183 29.9638 124 31.375C123.818 32.7858 123.087 34.7514 121.875 36.875C119.451 41.1218 115.079 46.1538 109.875 50.875C109.874 50.9167 109.874 50.9583 109.875 51C104.815 55.8433 98.4579 61.0243 91.3753 66.125C91.1355 66.2481 90.923 66.4181 90.7503 66.625C84.5506 71.0608 77.8182 75.365 70.7503 79.625C69.8475 80.1691 68.9044 80.5926 68.0003 81.125C67.7604 81.2479 67.5478 81.4179 67.3753 81.625C55.8912 88.3471 44.4414 94.0514 34.3753 98.125C34.2892 98.1609 34.2057 98.2026 34.1253 98.25C34.0881 98.265 34.0375 98.235 34.0003 98.25C33.8664 98.3191 33.7406 98.403 33.6253 98.5C31.4244 99.3781 29.1668 100.167 27.1253 100.875C20.3946 103.156 15.2651 103.797 11.6253 103.375C7.9855 102.953 5.99618 101.666 4.8753 99.5C4.8355 99.4565 4.79379 99.4148 4.7503 99.375C4.01178 98.1614 3.83734 97.177 4.0003 96.125C4.1631 95.0734 4.7675 93.8662 5.8753 92.375C7.68927 89.9329 11.3621 86.3998 15.3753 82.75C15.5043 83.0957 15.7393 83.4079 15.8753 83.75C14.1732 86.7016 12.6603 89.132 12.6253 91.75C12.6223 91.794 12.6273 91.835 12.6253 91.875C12.5577 93.3218 12.9785 94.7872 13.8753 95.75C14.7983 96.7408 16.0119 97.1788 17.2503 97.5C19.7271 98.1428 22.5526 98.0306 25.1253 97.375C25.1688 97.3352 25.2105 97.2935 25.2503 97.25C35.3973 93.896 49.3309 87.4514 63.7503 79.125C64.1171 79.116 64.4744 79.0063 64.7831 78.8079C65.0917 78.6095 65.3399 78.33 65.5003 78C67.1698 77.0202 68.8242 76.1538 70.5003 75.125C73.4395 73.3724 76.1937 71.6608 79.0003 69.875C79.4023 69.8792 79.7961 69.7621 80.1306 69.5392C80.465 69.3162 80.7246 68.9976 80.8753 68.625C93.2938 60.6055 104.179 52.4551 111.125 45.625C111.169 45.5852 111.211 45.5435 111.25 45.5C115.334 41.0276 116.734 36.2744 115 32.75C113.964 30.896 111.967 29.9342 109.75 29.625C107.979 29.377 105.875 29.8166 103.75 30.375C103.672 30.279 103.579 30.221 103.5 30.125C108.601 28.5122 113.715 27.1066 116.75 26.875ZM28.7503 30.75H56.2503C57.101 30.75 58.0003 31.394 58.0003 32.75C58.0003 33.6756 57.1013 34.625 56.2503 34.625H25.7503C26.7381 33.3686 27.6779 32.0936 28.7503 30.75ZM71.5003 30.75C72.3512 30.75 73.2503 31.394 73.2503 32.75C73.2503 33.6756 72.3515 34.625 71.5003 34.625C70.6494 34.625 69.7503 33.6752 69.7503 32.75C69.7503 31.394 70.6494 30.75 71.5003 30.75ZM106.625 33.625C107.579 33.5095 108.4 33.524 109.125 33.625C110.484 33.813 111.193 34.2632 111.375 34.5C111.379 34.5 111.372 34.621 111.375 34.625C111.769 35.5412 111.614 37.6822 110.125 40.25C108.977 37.9657 107.578 35.8309 106.125 33.75C106.283 33.7251 106.472 33.6435 106.625 33.625ZM83.0003 46.5H104.25C102.928 47.662 101.508 48.9012 100 50.125H97.7503H90.2503H83.0003C81.7164 50.125 81.2503 49.3628 81.2503 48.25C81.2503 47.1396 81.7164 46.5 83.0003 46.5ZM44.7503 55.125C43.5998 55.125 42.7503 55.9502 42.7503 57.125C42.7503 58.2886 43.5994 59.125 44.7503 59.125C45.6131 59.125 46.5003 58.2998 46.5003 57.125C46.5003 55.9626 45.6131 55.125 44.7503 55.125ZM110.875 55.25C111.387 58.0397 111.75 60.7983 111.75 63.75C111.75 64.468 111.655 65.1644 111.625 65.875H102.875H98.2503C102.885 62.3168 107.157 58.6951 110.875 55.25ZM16.1253 65.75H37.0003C37.851 65.75 38.7503 66.5182 38.7503 67.875C38.7503 68.7998 37.8513 69.75 37.0003 69.75H16.5003C16.3615 68.4064 16.1897 67.0548 16.1253 65.75ZM71.2503 69.875H71.5003C70.4825 70.4969 69.5327 71.1344 68.5003 71.75C67.8395 72.1556 67.1609 72.4768 66.5003 72.875C67.479 71.1524 69.3005 69.875 71.2503 69.875ZM93.0003 69.875H102.875H111C110.555 73.741 109.56 77.6094 108.125 81.375H75.6253C81.745 77.5972 87.5716 73.8061 93.0003 69.875ZM69.2503 85.25C70.1063 85.4832 70.8189 85.375 71.2503 85.375H106.875C106.076 87.0329 105.096 88.5788 104.125 90.125H79.2503C79.2086 90.1237 79.167 90.1237 79.1253 90.125C78.8627 90.1332 78.6042 90.1931 78.3647 90.3012C78.1252 90.4092 77.9093 90.5635 77.7294 90.755C77.5495 90.9465 77.4091 91.1716 77.3161 91.4174C77.2232 91.6632 77.1796 91.9249 77.1878 92.1875C77.196 92.4501 77.2559 92.7086 77.364 92.9481C77.4721 93.1876 77.6263 93.4035 77.8178 93.5834C78.0093 93.7633 78.2344 93.9037 78.4802 93.9967C78.726 94.0896 78.9877 94.1332 79.2503 94.125H101.375C92.5847 105.494 79.0362 112.75 63.7503 112.75C57.8227 112.75 52.1209 111.677 46.8753 109.625H62.0003C62.2653 109.629 62.5284 109.58 62.7744 109.481C63.0203 109.382 63.2442 109.235 63.4329 109.049C63.6216 108.863 63.7715 108.641 63.8738 108.397C63.9761 108.152 64.0288 107.89 64.0288 107.625C64.0288 107.36 63.9761 107.098 63.8738 106.853C63.7715 106.609 63.6216 106.387 63.4329 106.201C63.2442 106.015 63.0203 105.868 62.7744 105.769C62.5284 105.67 62.2653 105.621 62.0003 105.625H39.0003C38.9586 105.624 38.917 105.624 38.8753 105.625C37.3108 104.649 35.8252 103.515 34.3753 102.375C34.4997 102.326 34.6255 102.299 34.7503 102.25C34.7938 102.21 34.8355 102.168 34.8753 102.125C34.9123 102.11 34.9633 102.14 35.0003 102.125H58.0003C58.2653 102.129 58.5284 102.08 58.7744 101.981C59.0203 101.882 59.2442 101.735 59.4329 101.549C59.6216 101.363 59.7715 101.141 59.8738 100.897C59.9761 100.652 60.0288 100.39 60.0288 100.125C60.0288 99.86 59.9761 99.5975 59.8738 99.353C59.7715 99.1085 59.6216 98.8868 59.4329 98.7007C59.2442 98.5146 59.0203 98.3679 58.7744 98.269C58.5284 98.1702 58.2653 98.1213 58.0003 98.125H44.3753C52.3318 94.5125 60.7696 90.1991 69.2503 85.25ZM17.8753 88.375C18.8634 90.2847 19.9068 92.121 21.1253 93.875C20.0283 93.9117 19.0305 93.828 18.2503 93.625C17.5114 93.433 17.0937 93.2328 16.8753 93C16.6569 92.764 16.5865 92.5544 16.6253 92C16.6266 91.9583 16.6266 91.9167 16.6253 91.875C16.6253 91.2089 17.122 89.958 17.8753 88.375ZM71.5003 90.125C70.3498 90.125 69.5003 91.0752 69.5003 92.25C69.5003 93.426 70.3494 94.25 71.5003 94.25C72.6508 94.25 73.5003 93.4248 73.5003 92.25C73.5003 91.0724 72.6512 90.125 71.5003 90.125ZM67.7503 106C66.6 106 65.7503 106.866 65.7503 107.75C65.7503 108.928 66.5994 109.75 67.7503 109.75C68.6131 109.75 69.5003 108.925 69.5003 107.75C69.5003 106.866 68.6131 106 67.7503 106Z", "fill", "url(#paint0_linear)", "fill-opacity", "0.9"], ["id", "paint0_linear", "x1", "63.989", "y1", "11.25", "x2", "63.989", "y2", "116.75", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#20FFE5"], ["offset", "1", "stop-color", "#008D6E"], [1, "logo"], ["d", "M63.9996 98.7227C73.2405 98.739 82.1261 95.1631 88.7796 88.7502C89.0336 88.4907 89.1765 88.1425 89.1782 87.7794C89.1799 87.4163 89.0402 87.0668 88.7887 86.8049C88.5372 86.543 88.1937 86.3893 87.8308 86.3763C87.4679 86.3633 87.1142 86.492 86.8446 86.7352C80.7112 92.6483 72.5192 95.9456 63.9996 95.9302C45.8096 95.9302 31.0121 81.1302 31.0121 62.9302C31.0121 44.7302 45.8096 29.9302 64.0121 29.9302C64.7046 29.9302 65.3996 29.9527 66.0821 29.9952C66.2693 30.0142 66.4584 29.9952 66.6381 29.9394C66.8178 29.8835 66.9843 29.792 67.1277 29.6702C67.2712 29.5484 67.3885 29.3989 67.4728 29.2307C67.5571 29.0625 67.6065 28.879 67.6181 28.6912C67.6297 28.5034 67.6033 28.3152 67.5404 28.1378C67.4776 27.9605 67.3795 27.7977 67.2522 27.6591C67.1249 27.5206 66.9709 27.4092 66.7995 27.3316C66.628 27.2541 66.4427 27.2119 66.2546 27.2077C65.5046 27.1602 64.7546 27.1377 64.0046 27.1377C44.2746 27.1377 28.2246 43.1877 28.2246 62.9177C28.2246 82.6477 44.2696 98.7227 63.9996 98.7227Z", "fill", "url(#paint0_linear)", "fill-opacity", "0.9"], ["d", "M95.1871 73.7152C94.6315 75.3197 93.9537 76.8793 93.1596 78.3802C93.0735 78.542 93.0201 78.7192 93.0025 78.9017C92.9849 79.0842 93.0035 79.2683 93.0571 79.4436C93.1108 79.6189 93.1984 79.7819 93.3151 79.9233C93.4318 80.0647 93.5752 80.1817 93.7371 80.2677C93.9376 80.3759 94.1618 80.4326 94.3896 80.4327C94.6443 80.4323 94.8941 80.3622 95.1118 80.23C95.3295 80.0978 95.5068 79.9085 95.6246 79.6827C96.4882 78.0545 97.2245 76.3619 97.8271 74.6202C97.8946 74.4451 97.9262 74.2582 97.92 74.0706C97.9137 73.883 97.8697 73.6986 97.7906 73.5284C97.7115 73.3582 97.599 73.2056 97.4597 73.0799C97.3204 72.9541 97.1572 72.8577 96.9798 72.7964C96.8024 72.7351 96.6145 72.7101 96.4272 72.723C96.24 72.7359 96.0573 72.7864 95.89 72.8714C95.7226 72.9565 95.5742 73.0744 95.4534 73.218C95.3327 73.3617 95.2421 73.5282 95.1871 73.7077V73.7152Z", "fill", "url(#paint1_linear)", "fill-opacity", "0.9"], ["d", "M98.2073 67.8546C98.5521 67.8541 98.8844 67.7261 99.1405 67.4954C99.3967 67.2647 99.5585 66.9474 99.5948 66.6046C99.7179 65.3893 99.7796 64.1686 99.7798 62.9471C99.7809 56.856 98.2278 50.8654 95.2673 45.5421C95.1779 45.3821 95.0578 45.2412 94.9139 45.1276C94.77 45.014 94.6051 44.9298 94.4286 44.8799C94.2522 44.83 94.0677 44.8153 93.8856 44.8367C93.7035 44.8581 93.5274 44.9152 93.3673 45.0046C93.2073 45.0941 93.0664 45.2142 92.9528 45.3581C92.8392 45.502 92.755 45.6669 92.7051 45.8433C92.6552 46.0197 92.6405 46.2043 92.6619 46.3864C92.6833 46.5685 92.7404 46.7446 92.8298 46.9046C96.114 52.8168 97.505 59.5943 96.8148 66.3221C96.7778 66.6908 96.8887 67.059 97.1231 67.3459C97.3575 67.6328 97.6962 67.8149 98.0648 67.8521C98.1123 67.8554 98.1598 67.8563 98.2073 67.8546V67.8546Z", "fill", "url(#paint2_linear)", "fill-opacity", "0.9"], ["d", "M109.709 94.0477C115.965 84.8824 119.302 74.0392 119.282 62.9427C119.282 32.4602 94.482 7.66016 63.9995 7.66016C54.424 7.65717 45.0119 10.1407 36.6845 14.8677C36.5189 14.9551 36.3725 15.0749 36.2541 15.22C36.1357 15.3651 36.0477 15.5326 35.9953 15.7124C35.9429 15.8922 35.9271 16.0807 35.949 16.2667C35.9709 16.4527 36.0299 16.6324 36.1226 16.7951C36.2153 16.9578 36.3397 17.1003 36.4885 17.214C36.6373 17.3277 36.8075 17.4103 36.9889 17.4569C37.1702 17.5036 37.3591 17.5133 37.5443 17.4855C37.7295 17.4577 37.9073 17.393 38.067 17.2952C45.9726 12.8068 54.9086 10.449 63.9995 10.4527C92.942 10.4527 116.499 34.0002 116.499 62.9527C116.519 73.4874 113.351 83.7816 107.412 92.4827C107.302 92.6339 107.224 92.8057 107.181 92.9879C107.139 93.17 107.134 93.3588 107.165 93.5431C107.197 93.7273 107.266 93.9033 107.367 94.0605C107.468 94.2178 107.6 94.3532 107.755 94.4586C107.909 94.564 108.083 94.6374 108.266 94.6743C108.45 94.7112 108.639 94.711 108.822 94.6736C109.005 94.6362 109.179 94.5624 109.333 94.4566C109.487 94.3508 109.619 94.2152 109.719 94.0577L109.709 94.0477Z", "fill", "url(#paint3_linear)", "fill-opacity", "0.9"], ["d", "M31.3892 20.018C31.2743 19.8748 31.1324 19.7557 30.9714 19.6674C30.8105 19.5791 30.6337 19.5234 30.4513 19.5034C30.2688 19.4834 30.0842 19.4996 29.9079 19.551C29.7317 19.6024 29.5674 19.688 29.4242 19.803C28.3767 20.643 27.3467 21.533 26.3617 22.4505C26.2274 22.5752 26.1191 22.7252 26.0427 22.8919C25.9664 23.0585 25.9237 23.2385 25.917 23.4217C25.9102 23.6049 25.9396 23.7876 26.0035 23.9594C26.0674 24.1312 26.1645 24.2887 26.2892 24.423C26.414 24.5573 26.564 24.6656 26.7306 24.742C26.8973 24.8183 27.0773 24.861 27.2605 24.8677C27.4436 24.8745 27.6263 24.8451 27.7981 24.7812C27.9699 24.7173 28.1274 24.6202 28.2617 24.4955C29.1992 23.6255 30.1767 22.7805 31.1717 21.9955C31.3169 21.8807 31.4378 21.7381 31.5274 21.5762C31.6171 21.4143 31.6736 21.2362 31.6939 21.0522C31.7141 20.8682 31.6976 20.6821 31.6453 20.5045C31.593 20.327 31.506 20.1616 31.3892 20.018V20.018Z", "fill", "url(#paint4_linear)", "fill-opacity", "0.9"], ["d", "M63.9994 118.225C68.232 118.226 72.451 117.745 76.5744 116.79C76.9354 116.706 77.2484 116.482 77.4443 116.167C77.6403 115.853 77.7033 115.473 77.6194 115.112C77.5355 114.751 77.3117 114.438 76.9971 114.242C76.6825 114.046 76.3029 113.983 75.9419 114.067C72.026 114.975 68.0192 115.433 63.9994 115.432C35.0569 115.432 11.4994 91.8846 11.4994 62.9321C11.4763 51.8639 14.9789 41.0759 21.4994 32.1322C21.6303 31.9865 21.729 31.815 21.7893 31.6287C21.8496 31.4425 21.8701 31.2456 21.8495 31.0509C21.8288 30.8562 21.7675 30.6681 21.6695 30.4986C21.5715 30.3291 21.4389 30.1821 21.2805 30.0671C21.122 29.9522 20.9411 29.8718 20.7496 29.8312C20.5581 29.7906 20.3602 29.7907 20.1687 29.8314C19.9772 29.8722 19.7964 29.9528 19.6381 30.0679C19.4797 30.183 19.3473 30.3301 19.2494 30.4997C12.3811 39.9202 8.69198 51.2837 8.71692 62.9422C8.71692 93.4247 33.5169 118.225 63.9994 118.225Z", "fill", "url(#paint5_linear)", "fill-opacity", "0.9"], ["d", "M49.3085 59.5348C49.2582 59.7164 49.2452 59.9063 49.2701 60.093C49.2951 60.2798 49.3576 60.4596 49.4539 60.6216C49.5501 60.7835 49.6781 60.9244 49.8302 61.0357C49.9823 61.1469 50.1553 61.2263 50.3388 61.2689C50.5223 61.3116 50.7126 61.3167 50.8981 61.284C51.0837 61.2513 51.2607 61.1813 51.4186 61.0784C51.5764 60.9755 51.7118 60.8417 51.8166 60.6852C51.9214 60.5286 51.9935 60.3524 52.0285 60.1673C52.6838 57.3443 54.3161 54.8439 56.6367 53.108C58.9573 51.3721 61.8169 50.5125 64.7101 50.6811C67.6032 50.8497 70.3436 52.0357 72.4469 54.0295C74.5501 56.0232 75.8808 58.6963 76.2038 61.5763C76.5267 64.4563 75.8211 67.3577 74.2117 69.7678C72.6023 72.1779 70.1926 73.9413 67.4087 74.7466C64.6247 75.5518 61.6458 75.3469 58.9983 74.1681C56.3508 72.9893 54.2053 70.9125 52.941 68.3048C52.8693 68.1271 52.7618 67.9661 52.6252 67.8318C52.4886 67.6975 52.3258 67.5928 52.1469 67.5242C51.968 67.4556 51.777 67.4245 51.5856 67.433C51.3942 67.4415 51.2066 67.4893 51.0345 67.5735C50.8624 67.6576 50.7095 67.7763 50.5853 67.9222C50.461 68.068 50.3682 68.2379 50.3125 68.4212C50.2568 68.6045 50.2395 68.7973 50.2616 68.9876C50.2837 69.1779 50.3448 69.3616 50.441 69.5273C51.4191 71.5538 52.8403 73.3346 54.5993 74.7379C56.3584 76.1412 58.4103 77.1313 60.6035 77.6348C61.7305 77.8977 62.8838 78.0311 64.041 78.0323C66.8768 78.0268 69.6535 77.2221 72.0528 75.7105C74.4521 74.199 76.3768 72.0417 77.606 69.4862C78.8352 66.9307 79.3192 64.0805 79.0025 61.2625C78.6858 58.4445 77.5812 55.7728 75.8154 53.554C74.0496 51.3351 71.6941 49.6589 69.0191 48.7176C66.3441 47.7763 63.458 47.6081 60.6918 48.2322C57.9256 48.8563 55.3913 50.2475 53.3797 52.2462C51.368 54.2449 49.9605 56.7702 49.3185 59.5323L49.3085 59.5348Z", "fill", "url(#paint6_linear)", "fill-opacity", "0.9"], ["d", "M107.787 107.25C107.788 104.658 107.019 102.124 105.58 99.9692C104.14 97.8142 102.094 96.1344 99.6998 95.1424C97.3055 94.1504 94.6709 93.8907 92.129 94.3962C89.5871 94.9017 87.2522 96.1496 85.4197 97.9822C83.5871 99.8147 82.3392 102.15 81.8337 104.691C81.3282 107.233 81.5879 109.868 82.5799 112.262C83.5719 114.657 85.2517 116.703 87.4067 118.142C89.5618 119.582 92.0954 120.35 94.6871 120.35C98.16 120.345 101.489 118.963 103.945 116.508C106.401 114.052 107.782 110.722 107.787 107.25V107.25ZM84.377 107.25C84.3766 105.21 84.9808 103.217 86.1134 101.521C87.246 99.8251 88.856 98.5033 90.7399 97.7226C92.6237 96.9418 94.6968 96.7373 96.6969 97.1348C98.697 97.5324 100.534 98.5141 101.976 99.9559C103.419 101.398 104.401 103.235 104.799 105.235C105.197 107.235 104.993 109.308 104.212 111.192C103.432 113.076 102.111 114.686 100.415 115.819C98.7197 116.952 96.7263 117.557 94.6871 117.557C91.9539 117.554 89.3334 116.468 87.4006 114.535C85.4677 112.603 84.3804 109.983 84.377 107.25Z", "fill", "url(#paint7_linear)", "fill-opacity", "0.9"], ["d", "M82.9831 44.0004C84.8968 44.0009 86.7677 43.4338 88.3591 42.3709C89.9506 41.308 91.191 39.797 91.9236 38.029C92.6562 36.261 92.848 34.3155 92.4748 32.4385C92.1016 30.5615 91.18 28.8374 89.8268 27.4841C88.4736 26.1309 86.7494 25.2094 84.8724 24.8362C82.9954 24.4629 81.0499 24.6548 79.2819 25.3873C77.514 26.1199 76.003 27.3604 74.94 28.9518C73.8771 30.5432 73.3101 32.4141 73.3105 34.3279C73.3139 36.8922 74.334 39.3505 76.1472 41.1637C77.9604 42.9769 80.4188 43.9971 82.9831 44.0004V44.0004ZM82.9831 27.4479C84.3438 27.4479 85.674 27.8514 86.8054 28.6074C87.9368 29.3634 88.8186 30.4379 89.3394 31.695C89.8601 32.9522 89.9963 34.3355 89.7309 35.6701C89.4654 37.0047 88.8101 38.2306 87.848 39.1928C86.8858 40.155 85.6599 40.8102 84.3253 41.0757C82.9907 41.3412 81.6074 41.2049 80.3502 40.6842C79.093 40.1634 78.0185 39.2816 77.2625 38.1502C76.5066 37.0188 76.1031 35.6886 76.1031 34.3279C76.105 32.5038 76.8305 30.755 78.1203 29.4652C79.4102 28.1754 81.159 27.4499 82.9831 27.4479Z", "fill", "url(#paint8_linear)", "fill-opacity", "0.9"], ["id", "paint0_linear", "x1", "58.7014", "y1", "27.1377", "x2", "58.7014", "y2", "98.7228", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#23BA99"], ["offset", "1", "stop-color", "#20FFE5"], ["id", "paint1_linear", "x1", "95.4584", "y1", "72.7197", "x2", "95.4584", "y2", "80.4327", "gradientUnits", "userSpaceOnUse"], ["id", "paint2_linear", "x1", "96.2161", "y1", "44.8271", "x2", "96.2161", "y2", "67.8555", "gradientUnits", "userSpaceOnUse"], ["id", "paint3_linear", "x1", "77.6108", "y1", "7.66016", "x2", "77.6108", "y2", "94.7018", "gradientUnits", "userSpaceOnUse"], ["id", "paint4_linear", "x1", "28.8091", "y1", "19.4951", "x2", "28.8091", "y2", "24.8687", "gradientUnits", "userSpaceOnUse"], ["id", "paint5_linear", "x1", "43.1862", "y1", "29.8008", "x2", "43.1862", "y2", "118.225", "gradientUnits", "userSpaceOnUse"], ["id", "paint6_linear", "x1", "64.1773", "y1", "47.8623", "x2", "64.1773", "y2", "78.0323", "gradientUnits", "userSpaceOnUse"], ["id", "paint7_linear", "x1", "94.6845", "y1", "94.1445", "x2", "94.6845", "y2", "120.35", "gradientUnits", "userSpaceOnUse"], ["id", "paint8_linear", "x1", "82.9856", "y1", "24.6504", "x2", "82.9856", "y2", "44.0004", "gradientUnits", "userSpaceOnUse"], [1, "main-description-container"], [1, "title"], [1, "subtitle"], ["class", "content-container", 4, "ngIf"], [1, "content-container"], [1, "block", "red"], [1, "block__text", "block__text--fist"], [1, "block__content"], [1, "block__text", "block__text--last"], [1, "block", "green"], [1, "block", "blue"], [1, "block", "yellow"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "linearGradient", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "linearGradient", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "linearGradient", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "linearGradient", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "linearGradient", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "linearGradient", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "linearGradient", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "linearGradient", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "linearGradient", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0414\u043E\u0440\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043D\u0430\u0448 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043C\u0438\u0440!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u041A\u0443\u0434\u0430 \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0441\u044F?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, HomePageComponent_div_52_Template, 26, 0, "div", 31);
    } }, styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.main-logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n}\n.main-description-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  margin-bottom: 40px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.3px;\n}\n.title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 36px;\n  letter-spacing: -0.3px;\n  margin-bottom: 16px;\n}\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 12px;\n}\n.block__content[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 400px;\n  background-color: #2E3339;\n  border-radius: 4px;\n}\n.block__text[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  line-height: 24px;\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n.block__text--last[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n}\n.content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-bottom: 40px;\n}\n.red[_ngcontent-%COMP%] {\n  color: #AE143E;\n}\n.green[_ngcontent-%COMP%] {\n  color: #6BB755;\n}\n.yellow[_ngcontent-%COMP%] {\n  color: #F6D265;\n}\n.blue[_ngcontent-%COMP%] {\n  color: #43B4DE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1kaXJlY3Rpb24ubGVzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC10ZXh0Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtc3BhY2VzLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtYnV0dG9ucy5sZXNzIiwic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWNvbHVtcy5sZXNzIiwic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRhYmxlLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0FDQVo7QURHUTtFQUNJLDZCQUFBO0FDRFo7QURJUTtFQUNJLHlCQUFBO0FDRlo7QURLUTtFQUNJLGVBQUE7QUNIWjtBRE1RO0VBQ0ksdUJBQUE7QUNKWjtBRE9RO0VBQ0kscUJBQUE7QUNMWjtBRGFJO0VBQ0ksc0JBQUE7QUNYUjtBRGFRO0VBQ0ksdUJBQUE7QUNYWjtBRGNRO0VBQ0ksOEJBQUE7QUNaWjtBRGVRO0VBQ0ksNkJBQUE7QUNiWjtBRGdCUTtFQUNJLG1CQUFBO0FDZFo7QURpQlM7RUFDSSx5QkFBQTtBQ2ZiO0FEa0JRO0VBQ0kscUJBQUE7QUNoQlo7QURtQlE7RUFDSSx1QkFBQTtBQ2pCWjtBRG9CUTtFQUNJLHFCQUFBO0FDbEJaO0FEdUJJO0VBQ0ksZUFBQTtBQ3JCUjtBRDBCQTtFQUNJLFdBQUE7QUN4Qko7QUMzREE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FENkRKO0FDM0RJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUQ2RFI7QUMxREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBRDREUjtBQ3pESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRDJEUjtBQ3hESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRDBEUjtBQ3ZESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHlEUjtBQ3RESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHdEUjtBQ3JESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHVEUjtBQ3BESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHNEUjtBQ25ESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHFEUjtBQ2xESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRG9EUjtBQ2pESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRG1EUjtBQ2hESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGtEUjtBQy9DSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGlEUjtBQzlDSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRGdEUjtBQzdDSTtFQUNJLGlCQUFBO0FEK0NSO0FDM0NJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FENkNSO0FDM0NRO0VBQ0ksWUFBQTtFQUNBLHFDQUFBO0FENkNaO0FDMUNRO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO0FENENaO0FDcENBO0VBQ0ksWUFBQTtFQUNBLDRDQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBRHFDSjtBQ25DSTtFQUNJLFVBQUE7RUFDQSw0Q0FBQTtFQUVBLGdDQUFBO0FEb0NSO0FDaENBO0VBQ0ksVUFBQTtFQUNBLDRDQUFBO0VBRUEsZ0NBQUE7QURpQ0o7QUM5QkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGdDSjtBQzdCQTtFQUNJLHlCQUFBO0VBQ0Esa0NBQUE7QUQrQko7QUVyTkE7RUZ1TkUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBRXhOSTtFQUNJLGVBQUE7QUYwTlI7QUV2Tkk7RUFDSSxpQkFBQTtBRnlOUjtBRXROSTtFQUNJLGlCQUFBO0FGd05SO0FFck5JO0VBQ0ksa0JBQUE7QUZ1TlI7QUVwTkk7RUFDSSxrQkFBQTtBRnNOUjtBRW5OSTtFQUNJLGtCQUFBO0FGcU5SO0FFbE5JO0VBQ0ksa0JBQUE7QUZvTlI7QUVqTkk7RUFDSSxrQkFBQTtBRm1OUjtBRWhOSTtFQUNJLGtCQUFBO0FGa05SO0FFL01JO0VBQ0ksa0JBQUE7QUZpTlI7QUU5TUk7RUFDSSxrQkFBQTtBRmdOUjtBRTNNSTtFQUNJLGNBQUE7QUY2TVI7QUUxTUk7RUFDSSxnQkFBQTtBRjRNUjtBRXpNSTtFQUNJLGdCQUFBO0FGMk1SO0FFeE1JO0VBQ0ksaUJBQUE7QUYwTVI7QUV2TUk7RUFDSSxpQkFBQTtBRnlNUjtBRXRNSTtFQUNJLGlCQUFBO0FGd01SO0FFck1JO0VBQ0ksaUJBQUE7QUZ1TVI7QUVwTUk7RUFDSSxpQkFBQTtBRnNNUjtBRW5NSTtFQUNJLGlCQUFBO0FGcU1SO0FFbE1JO0VBQ0ksaUJBQUE7QUZvTVI7QUVqTUk7RUFDSSxpQkFBQTtBRm1NUjtBRTlMSTtFQUNJLGdCQUFBO0FGZ01SO0FFN0xJO0VBQ0ksa0JBQUE7QUYrTFI7QUU1TEk7RUFDSSxrQkFBQTtBRjhMUjtBRTNMSTtFQUNJLG1CQUFBO0FGNkxSO0FFMUxJO0VBQ0ksbUJBQUE7QUY0TFI7QUV6TEk7RUFDSSxtQkFBQTtBRjJMUjtBRXhMSTtFQUNJLG1CQUFBO0FGMExSO0FFdkxJO0VBQ0ksbUJBQUE7QUZ5TFI7QUV0TEk7RUFDSSxtQkFBQTtBRndMUjtBRXJMSTtFQUNJLG1CQUFBO0FGdUxSO0FFcExJO0VBQ0ksbUJBQUE7QUZzTFI7QUVqTEk7RUFDSSxhQUFBO0FGbUxSO0FFaExJO0VBQ0ksZUFBQTtBRmtMUjtBRS9LSTtFQUNJLGVBQUE7QUZpTFI7QUU5S0k7RUFDSSxnQkFBQTtBRmdMUjtBRTdLSTtFQUNJLGdCQUFBO0FGK0tSO0FFNUtJO0VBQ0ksZ0JBQUE7QUY4S1I7QUUzS0k7RUFDSSxnQkFBQTtBRjZLUjtBRTFLSTtFQUNJLGdCQUFBO0FGNEtSO0FFektJO0VBQ0ksZ0JBQUE7QUYyS1I7QUV4S0k7RUFDSSxnQkFBQTtBRjBLUjtBRXZLSTtFQUNJLGdCQUFBO0FGeUtSO0FHL1ZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUhpV0o7QUc3VlE7RUFDSSxrREFBQTtBSCtWWjtBRzVWUTtFQUNJLDBDQUFBO0FIOFZaO0FHM1ZRO0VBQ0ksWUFBQTtBSDZWWjtBRzFWUTtFQUNJLGtEQUFBO0VBQ0EsNkJBQUE7QUg0Vlo7QUd6VlE7RUFDSSwwQ0FBQTtFQUNBLDZCQUFBO0FIMlZaO0FHeFZRO0VBQ0ksb0RBQUE7QUgwVlo7QUd2VlE7RUFDSSw0Q0FBQTtBSHlWWjtBR3JWUTtFQUNJLGdEQUFBO0FIdVZaO0FHcFZRO0VBQ0ksd0NBQUE7RUFDQSw2QkFBQTtBSHNWWjtBR25WUTtFQUNJLCtDQUFBO0FIcVZaO0FHbFZRO0VBQ0ksdUNBQUE7RUFDQSw2QkFBQTtBSG9WWjtBRy9VUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FIZ1ZaO0FHN1VRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUg4VVo7QUczVVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSDRVWjtBR3ZVQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBSHlVSjtBR3RVQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBSHdVSjtBSWphSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUptYVI7QUt6YUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBTDJhSjtBS3hhQTtFQUNJLGdDQUFBO0FMMGFKO0FLdmFBOztFQUdJLHNCQUFBO0VBQ0EsZ0JBQUE7QUx5YUo7QUt0YUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FMd2FKO0FLcmFBO0VBRUksK0JBQUE7RUFFQSx5QkFBQTtFQUVBLHVDQUFBO0VBQ0EsVUFBQTtBTHVhSjtBS3BhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBTHNhSjtBS25hQTtFQUNJLG1CQUFBO0FMcWFKO0FLbGFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FMb2FKO0FLamFBO0VBQ0ksbUJBQUE7QUxtYUo7QUtoYUE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTGthSjtBSy9aQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMaWFKO0FLOVpBO0VBQ0ksNkJBQUE7QUxnYUo7QUs3WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTCtaSjtBSzVaQTs7RUFFSSxZQUFBO0FMOFpKO0FLM1pBO0VBQ0ksZUFBQTtBTDZaSjtBSzFaQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMNFpKO0FLelpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwyWko7QUt4WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTDBaSjtBS3ZaQTtFQUNJLHNCQUFBO0FMeVpKO0FLdFpBOztFQUVJLGVBQUE7QUx3Wko7QUtyWkE7O0VBRUksZ0JBQUE7QUx1Wko7QUtwWkE7O0VBRUksa0JBQUE7QUxzWko7QUtuWkE7O0VBRUksaUJBQUE7QUxxWko7QUtsWkE7O0VBRUksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FMb1pKO0FNaGpCQTtFQUNJLGNBQUE7QU5rakJKO0FNL2lCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FOaWpCSjtBTTlpQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBTmdqQko7QU03aUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FOK2lCSjtBTTVpQkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBTjhpQko7QU0xaUJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QU40aUJKO0FNemlCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QU4yaUJKO0FNemlCSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBTjJpQlI7QU14aUJJO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFTjBpQk4scUNBQXFDO0VNdmlCL0IsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QU55aUJSO0FNdmlCUTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBTnlpQlo7QU1uaUJBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FOcWlCSjtBTWhpQkE7RUFDSSxjQUFBO0FOa2lCSjtBTS9oQkE7RUFDSSxjQUFBO0FOaWlCSjtBTTloQkE7RUFDSSxjQUFBO0FOZ2lCSjtBTTdoQkE7RUFDSSxjQUFBO0FOK2hCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICZfaG9yaXpvbnRhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmX3dyYXAge1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jZW50ZXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxuXG4gICAgJl92ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgfVxuXG4gICAgICAgICYtcmlnaHQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICZfd3JhcCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG59XG5cblxuLmZ1bGwtc2l6ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleF9ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4X2hvcml6b250YWwtbWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X2hvcml6b250YWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF9ob3Jpem9udGFsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF9ob3Jpem9udGFsX3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleF9ob3Jpem9udGFsLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3ZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLW1pZGRsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfdmVydGljYWwtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mdWxsLXNpemUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tdWktdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9oMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2gzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDQge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfYm9keS14bCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWwge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1sX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW0ge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1tX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LXMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9keS1zX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXhzIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubXVpLXRleHRfbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm11aS10ZXh0X2xpbmstaG92ZXJlZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucm91dGVyX2xpbmsge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDAgOHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucm91dGVyX2xpbmstYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xufVxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cbi5tdWktbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXNwYWNlIHtcbiAgLyogUklHSFQgU1BBQ0UgKi9cbiAgLyogTEVGVCBTUEFDRSAqL1xuICAvKiBCT1RUT00gU1BBQ0UgKi9cbiAgLyogVE9QIFNQQUNFICovXG59XG4ubXVpLXNwYWNlX3JpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC02IHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC03IHtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC04IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC05IHtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0xMCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubXVpLXNwYWNlX2xlZnQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5tdWktc3BhY2VfbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNiB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTcge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtOSB7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMyB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS00IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS03IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTgge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOSB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC0wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5tdWktc3BhY2VfdG9wLTEge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0yIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm11aS1zcGFjZV90b3AtMyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubXVpLXNwYWNlX3RvcC00IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm11aS1zcGFjZV90b3AtNiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC03IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5tdWktc3BhY2VfdG9wLTgge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLm11aS1zcGFjZV90b3AtOSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm11aS1idXR0b25fY29sb3Itc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fc2l6ZS1sIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubXVpLWJ1dHRvbl9zaXplLW0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtcyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1jb2xfbWQtMyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnRhYmxlLm11aS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzk1OWJhNDtcbn1cbi5tdWktdGFibGVfX3RyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IDA7XG59XG4ubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogNTVweDtcbiAgY29sb3I6ICMzMzM7XG59XG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGNvbG9yOiAjNzk4MThjO1xufVxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBoZWlnaHQ6IDc5cHg7XG59XG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluLWxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ubG9nbyB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cbi5tYWluLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uc3VidGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG59XG4udGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMnB4O1xufVxuLmJsb2NrX19jb250ZW50IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzMzM5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYmxvY2tfX3RleHQge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMTQlICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ibG9ja19fdGV4dC0tbGFzdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnJlZCB7XG4gIGNvbG9yOiAjQUUxNDNFO1xufVxuLmdyZWVuIHtcbiAgY29sb3I6ICM2QkI3NTU7XG59XG4ueWVsbG93IHtcbiAgY29sb3I6ICNGNkQyNjU7XG59XG4uYmx1ZSB7XG4gIGNvbG9yOiAjNDNCNERFO1xufVxuIiwiLm11aS10ZXh0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuICAgICZfaDEge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gzIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g0IHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g1IHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g2IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2JvZHkteGwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktcyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHktc19zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuXG4gICAgJl9saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICAgICAmLWhvdmVyZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1ob3ZlcmVkOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgICAgIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbi5yb3V0ZXJfbGluayB7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmLWFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UyYjUxZjtcbiAgICB9XG59XG5cbi5yb3V0ZXJfbGluazpob3Zlcjpub3QoLnJvdXRlcl9saW5rLWFjdGl2ZSkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cblxuLm11aS1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4ubXVpLWxpbms6aG92ZXI6bm90KFtuZy1yZWZsZWN0LXJvdXRlci1saW5rPScnXSkge1xuICAgIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xufVxuIiwiLm11aS1zcGFjZSB7XG4gICAgLyogUklHSFQgU1BBQ0UgKi9cblxuICAgICZfcmlnaHQtMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC00IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC03IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBMRUZUIFNQQUNFICovXG5cbiAgICAmX2xlZnQtMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICZfbGVmdC0xIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC01IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTYge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC04IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBCT1RUT00gU1BBQ0UgKi9cblxuICAgICZfYm90dG9tLTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICZfYm90dG9tLTEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS00IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS01IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS02IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS03IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS04IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS05IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgLyogVE9QIFNQQUNFICovXG5cbiAgICAmX3RvcC0wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAmX3RvcC0xIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgJl90b3AtNCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgJl90b3AtNiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtOCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgJl90b3AtOSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMTAge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbn1cbiIsIi5tdWktYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xuXG5cbiAgICAmX2NvbG9yIHtcbiAgICAgICAgJi1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgJi1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lcnJvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm86aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9zaXplIHtcbiAgICAgICAgJi1sIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtbSB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLXMge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuIiwiLm11aS1jb2wge1xuXG4gICAgJl9tZC0zIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cbiIsInRhYmxlLm11aS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogIzk1OWJhNDtcbn1cblxuLm11aS10YWJsZV9fdHIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuXG4ubXVpLXRhYmxlX19zdWJ0ZXh0IHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICBjb2xvcjogIzc5ODE4Yztcbn1cblxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgaGVpZ2h0OiA3OXB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9hbGlnbl9jZW50ZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfY2VudGVyLFxuLm11aS10YWJsZV9fdGhfdGV4dF9jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtbGlicmFyeS5sZXNzJztcblxuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYWluLWxvZ28tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogMTI4cHg7XG4gICAgaGVpZ2h0OiAxMjhweDtcbn1cblxuLm1haW4tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG59XG5cblxuLnRpdGxlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAxMnB4O1xuXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJFMzMzOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMTQlICovXG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICYtLWxhc3Qge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG5cbn1cblxuLnJlZCB7XG4gICAgY29sb3I6ICNBRTE0M0U7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6ICM2QkI3NTU7XG59XG5cbi55ZWxsb3cge1xuICAgIGNvbG9yOiAjRjZEMjY1O1xufVxuXG4uYmx1ZSB7XG4gICAgY29sb3I6ICM0M0I0REU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/main.component.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/main.component.ts ***!
  \*****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/auth/services/auth.service */ "./src/app/pages/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_mw_svg_mw_svg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/mw-svg/mw-svg.component */ "./src/app/shared/components/mw-svg/mw-svg.component.ts");






function MainComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mw-svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", widget_r1.icon);
} }
const _c0 = function (a0) { return { hidden: a0 }; };
class MainComponent {
    constructor(authService, router, renderer) {
        this.authService = authService;
        this.router = router;
        this.renderer = renderer;
        this.widgets = [];
        this.fastAccessIsVisible = true;
    }
    ngOnInit() {
        this.widgets = [
            {
                icon: 'iconSearchLarge',
            }, {
                icon: 'iconMailLarge',
            },
        ];
        // if (!this.authService.authorization) {
        //     this.router.navigateByUrl('/auth');
        // }
    }
    ngAfterViewChecked() {
    }
    toggleVisibleFastAccess() {
        this.fastAccessIsVisible = !this.fastAccessIsVisible;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 9, vars: 9, consts: [[1, "frame", 3, "ngClass"], [1, "fast-access", 3, "ngClass"], ["id", "toggleVisible", 1, "icon", 3, "click"], [3, "src"], ["class", "icon", 4, "ngFor", "ngForOf"], [1, "icon"], [1, "frame__content"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_2_listener() { return ctx.toggleVisibleFastAccess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mw-svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mw-svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !ctx.fastAccessIsVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, !ctx.fastAccessIsVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "iconLogoutLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.widgets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "iconPlusLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _shared_components_mw_svg_mw_svg_component__WEBPACK_IMPORTED_MODULE_4__["MwSvgComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@font-face {\n  font-family: \"Roboto Black\";\n  src: url('Roboto-Black.eot');\n  src: url('Roboto-Black.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Black.woff') format(\"woff\"), url('Roboto-Black.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto BlackItalic\";\n  src: url('Roboto-BlackItalic.eot');\n  src: url('Roboto-BlackItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-BlackItalic.woff') format(\"woff\"), url('Roboto-BlackItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto Bold\";\n  src: url('Roboto-Bold.eot');\n  src: url('Roboto-Bold.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Bold.woff') format(\"woff\"), url('Roboto-Bold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto BoldItalic\";\n  src: url('Roboto-BoldItalic.eot');\n  src: url('Roboto-BoldItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-BoldItalic.woff') format(\"woff\"), url('Roboto-BoldItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto MediumItalic\";\n  src: url('Roboto-MediumItalic.eot');\n  src: url('Roboto-MediumItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-MediumItalic.woff') format(\"woff\"), url('Roboto-MediumItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto Light\";\n  src: url('Roboto-Light.eot');\n  src: url('Roboto-Light.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Light.woff') format(\"woff\"), url('Roboto-Light.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto LightItalic\";\n  src: url('Roboto-LightItalic.eot');\n  src: url('Roboto-LightItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-LightItalic.woff') format(\"woff\"), url('Roboto-LightItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto Medium\";\n  src: url('Roboto-Medium.eot');\n  src: url('Roboto-Medium.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Medium.woff') format(\"woff\"), url('Roboto-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto MediumItalic\";\n  src: url('Roboto-MediumItalic.eot');\n  src: url('Roboto-MediumItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-MediumItalic.woff') format(\"woff\"), url('Roboto-MediumItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto Regular\";\n  src: url('Roboto-Regular.eot');\n  src: url('Roboto-Regular.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Regular.woff') format(\"woff\"), url('Roboto-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto Thin\";\n  src: url('Roboto-Thin.eot');\n  src: url('Roboto-Thin.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Thin.woff') format(\"woff\"), url('Roboto-Thin.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto ThinItalic\";\n  src: url('Roboto-ThinItalic.eot');\n  src: url('Roboto-ThinItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-ThinItalic.woff') format(\"woff\"), url('Roboto-ThinItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  padding-top: 60px;\n  display: block;\n  height: inherit;\n  background-color: #17181c;\n  color: #9ca4af;\n}\n.frame[_ngcontent-%COMP%] {\n  height: inherit;\n  padding-top: 60px;\n  padding-right: 48px;\n  transition: 0.5s ease-in-out;\n  position: relative;\n}\n.frame__content[_ngcontent-%COMP%] {\n  height: inherit;\n  padding-bottom: 48px;\n}\n.frame[_ngcontent-%COMP%]:not(.hidden) {\n  padding-left: 176px;\n}\n.frame.hidden[_ngcontent-%COMP%] {\n  padding-left: 128px;\n}\n.fast-access[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  bottom: 48px;\n  left: 0;\n  top: 60px;\n  background: #232429;\n  box-shadow: 8px 0px 16px rgba(0, 0, 0, 0.75);\n  transition: 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px 28px;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  margin-bottom: 24px;\n}\n.fast-access[_ngcontent-%COMP%]:not(.hidden) {\n  transform: translate3d(48px, 0px, 0px);\n}\n.fast-access[_ngcontent-%COMP%]:not(.hidden)   #toggleVisible[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  transition: 0.5s ease-in-out;\n}\n.fast-access.hidden[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0px, 0px) rotate(0deg);\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n}\n.fast-access.hidden[_ngcontent-%COMP%]   #toggleVisible[_ngcontent-%COMP%] {\n  transform: rotate(0);\n  transition: 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by5sZXNzIiwic3JjL2FwcC9wYWdlcy9tYWluLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtZGlyZWN0aW9uLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC10ZXh0Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1zcGFjZXMubGVzcyIsInNyYy9hcHAvcGFnZXMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWJ1dHRvbnMubGVzcyIsInNyYy9hcHAvcGFnZXMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWNvbHVtcy5sZXNzIiwic3JjL2FwcC9wYWdlcy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtdGFibGUubGVzcyIsInNyYy9hcHAvcGFnZXMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2FwcC9wYWdlcy9tYWluLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG9KQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDSSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0tBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0FDSko7QURPQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpSkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFVBO0VBQ0ksZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1LQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1ZKO0FEYUE7RUFDSSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUtBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0FDYko7QURnQkE7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0pBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0FDaEJKO0FEbUJBO0VBQ0ksaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNLQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtBQ25CSjtBRHNCQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1SkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QUN0Qko7QUR5QkE7RUFDSSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUtBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0FDekJKO0FENEJBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBKQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtBQzVCSjtBRCtCQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpSkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QUMvQko7QURrQ0E7RUFDSSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUtBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0FDbENKO0FDbkZBO0VBQ0ksYUFBQTtBRHFGSjtBQ25GSTtFQUNJLG1CQUFBO0FEcUZSO0FDbkZRO0VBQ0ksbUJBQUE7QURxRlo7QUNsRlE7RUFDSSw4QkFBQTtBRG9GWjtBQ2pGUTtFQUNJLDZCQUFBO0FEbUZaO0FDaEZRO0VBQ0kseUJBQUE7QURrRlo7QUMvRVE7RUFDSSxlQUFBO0FEaUZaO0FDOUVRO0VBQ0ksdUJBQUE7QURnRlo7QUM3RVE7RUFDSSxxQkFBQTtBRCtFWjtBQ3ZFSTtFQUNJLHNCQUFBO0FEeUVSO0FDdkVRO0VBQ0ksdUJBQUE7QUR5RVo7QUN0RVE7RUFDSSw4QkFBQTtBRHdFWjtBQ3JFUTtFQUNJLDZCQUFBO0FEdUVaO0FDcEVRO0VBQ0ksbUJBQUE7QURzRVo7QUNuRVM7RUFDSSx5QkFBQTtBRHFFYjtBQ2xFUTtFQUNJLHFCQUFBO0FEb0VaO0FDakVRO0VBQ0ksdUJBQUE7QURtRVo7QUNoRVE7RUFDSSxxQkFBQTtBRGtFWjtBQzdESTtFQUNJLGVBQUE7QUQrRFI7QUMxREE7RUFDSSxXQUFBO0FENERKO0FFL0lBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBRmlKSjtBRS9JSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FGaUpSO0FFOUlJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUZnSlI7QUU3SUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUYrSVI7QUU1SUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUY4SVI7QUUzSUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUY2SVI7QUUxSUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUY0SVI7QUV6SUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUYySVI7QUV4SUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUYwSVI7QUV2SUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUZ5SVI7QUV0SUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUZ3SVI7QUVySUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUZ1SVI7QUVwSUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUZzSVI7QUVuSUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUZxSVI7QUVsSUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUZvSVI7QUVqSUk7RUFDSSxpQkFBQTtBRm1JUjtBRS9ISTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBRmlJUjtBRS9IUTtFQUNJLFlBQUE7RUFDQSxxQ0FBQTtBRmlJWjtBRTlIUTtFQUNJLFVBQUE7RUFDQSxxQ0FBQTtBRmdJWjtBRXhIQTtFQUNJLFlBQUE7RUFDQSw0Q0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUZ5SEo7QUV2SEk7RUFDSSxVQUFBO0VBQ0EsNENBQUE7RUFFQSxnQ0FBQTtBRndIUjtBRXBIQTtFQUNJLFVBQUE7RUFDQSw0Q0FBQTtFQUVBLGdDQUFBO0FGcUhKO0FFbEhBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUZvSEo7QUVqSEE7RUFDSSx5QkFBQTtFQUNBLGtDQUFBO0FGbUhKO0FHelNBO0VIMlNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUc1U0k7RUFDSSxlQUFBO0FIOFNSO0FHM1NJO0VBQ0ksaUJBQUE7QUg2U1I7QUcxU0k7RUFDSSxpQkFBQTtBSDRTUjtBR3pTSTtFQUNJLGtCQUFBO0FIMlNSO0FHeFNJO0VBQ0ksa0JBQUE7QUgwU1I7QUd2U0k7RUFDSSxrQkFBQTtBSHlTUjtBR3RTSTtFQUNJLGtCQUFBO0FId1NSO0FHclNJO0VBQ0ksa0JBQUE7QUh1U1I7QUdwU0k7RUFDSSxrQkFBQTtBSHNTUjtBR25TSTtFQUNJLGtCQUFBO0FIcVNSO0FHbFNJO0VBQ0ksa0JBQUE7QUhvU1I7QUcvUkk7RUFDSSxjQUFBO0FIaVNSO0FHOVJJO0VBQ0ksZ0JBQUE7QUhnU1I7QUc3Ukk7RUFDSSxnQkFBQTtBSCtSUjtBRzVSSTtFQUNJLGlCQUFBO0FIOFJSO0FHM1JJO0VBQ0ksaUJBQUE7QUg2UlI7QUcxUkk7RUFDSSxpQkFBQTtBSDRSUjtBR3pSSTtFQUNJLGlCQUFBO0FIMlJSO0FHeFJJO0VBQ0ksaUJBQUE7QUgwUlI7QUd2Ukk7RUFDSSxpQkFBQTtBSHlSUjtBR3RSSTtFQUNJLGlCQUFBO0FId1JSO0FHclJJO0VBQ0ksaUJBQUE7QUh1UlI7QUdsUkk7RUFDSSxnQkFBQTtBSG9SUjtBR2pSSTtFQUNJLGtCQUFBO0FIbVJSO0FHaFJJO0VBQ0ksa0JBQUE7QUhrUlI7QUcvUUk7RUFDSSxtQkFBQTtBSGlSUjtBRzlRSTtFQUNJLG1CQUFBO0FIZ1JSO0FHN1FJO0VBQ0ksbUJBQUE7QUgrUVI7QUc1UUk7RUFDSSxtQkFBQTtBSDhRUjtBRzNRSTtFQUNJLG1CQUFBO0FINlFSO0FHMVFJO0VBQ0ksbUJBQUE7QUg0UVI7QUd6UUk7RUFDSSxtQkFBQTtBSDJRUjtBR3hRSTtFQUNJLG1CQUFBO0FIMFFSO0FHclFJO0VBQ0ksYUFBQTtBSHVRUjtBR3BRSTtFQUNJLGVBQUE7QUhzUVI7QUduUUk7RUFDSSxlQUFBO0FIcVFSO0FHbFFJO0VBQ0ksZ0JBQUE7QUhvUVI7QUdqUUk7RUFDSSxnQkFBQTtBSG1RUjtBR2hRSTtFQUNJLGdCQUFBO0FIa1FSO0FHL1BJO0VBQ0ksZ0JBQUE7QUhpUVI7QUc5UEk7RUFDSSxnQkFBQTtBSGdRUjtBRzdQSTtFQUNJLGdCQUFBO0FIK1BSO0FHNVBJO0VBQ0ksZ0JBQUE7QUg4UFI7QUczUEk7RUFDSSxnQkFBQTtBSDZQUjtBSW5iQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FKcWJKO0FJamJRO0VBQ0ksa0RBQUE7QUptYlo7QUloYlE7RUFDSSwwQ0FBQTtBSmtiWjtBSS9hUTtFQUNJLFlBQUE7QUppYlo7QUk5YVE7RUFDSSxrREFBQTtFQUNBLDZCQUFBO0FKZ2JaO0FJN2FRO0VBQ0ksMENBQUE7RUFDQSw2QkFBQTtBSithWjtBSTVhUTtFQUNJLG9EQUFBO0FKOGFaO0FJM2FRO0VBQ0ksNENBQUE7QUo2YVo7QUl6YVE7RUFDSSxnREFBQTtBSjJhWjtBSXhhUTtFQUNJLHdDQUFBO0VBQ0EsNkJBQUE7QUowYVo7QUl2YVE7RUFDSSwrQ0FBQTtBSnlhWjtBSXRhUTtFQUNJLHVDQUFBO0VBQ0EsNkJBQUE7QUp3YVo7QUluYVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSm9hWjtBSWphUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FKa2FaO0FJL1pRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUpnYVo7QUkzWkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUo2Wko7QUkxWkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUo0Wko7QUtyZkk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FMdWZSO0FNN2ZBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QU4rZko7QU01ZkE7RUFDSSxnQ0FBQTtBTjhmSjtBTTNmQTs7RUFHSSxzQkFBQTtFQUNBLGdCQUFBO0FONmZKO0FNMWZBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBTjRmSjtBTXpmQTtFQUVJLCtCQUFBO0VBRUEseUJBQUE7RUFFQSx1Q0FBQTtFQUNBLFVBQUE7QU4yZko7QU14ZkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QU4wZko7QU12ZkE7RUFDSSxtQkFBQTtBTnlmSjtBTXRmQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBTndmSjtBTXJmQTtFQUNJLG1CQUFBO0FOdWZKO0FNcGZBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QU5zZko7QU1uZkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTnFmSjtBTWxmQTtFQUNJLDZCQUFBO0FOb2ZKO0FNamZBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QU5tZko7QU1oZkE7O0VBRUksWUFBQTtBTmtmSjtBTS9lQTtFQUNJLGVBQUE7QU5pZko7QU05ZUE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTmdmSjtBTTdlQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FOK2VKO0FNNWVBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QU44ZUo7QU0zZUE7RUFDSSxzQkFBQTtBTjZlSjtBTTFlQTs7RUFFSSxlQUFBO0FONGVKO0FNemVBOztFQUVJLGdCQUFBO0FOMmVKO0FNeGVBOztFQUVJLGtCQUFBO0FOMGVKO0FNdmVBOztFQUVJLGlCQUFBO0FOeWVKO0FNdGVBOztFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBTndlSjtBTzVuQkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FQOG5CSjtBTzdpQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QVAraUJKO0FPN2lCSTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBUCtpQlI7QU8zaUJBO0VBQ0ksbUJBQUE7QVA2aUJKO0FPMWlCQTtFQUNJLG1CQUFBO0FQNGlCSjtBT3ppQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FQMmlCSjtBT3hpQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBUDBpQko7QU92aUJBO0VBQ0ksc0NBQUE7QVB5aUJKO0FPMWlCQTtFQUlRLHlCQUFBO0VBQ0EsNEJBQUE7QVB5aUJSO0FPcGlCQTtFQUNJLGtEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBUHNpQko7QU8xaUJBO0VBT1Esb0JBQUE7RUFDQSw0QkFBQTtBUHNpQlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEJsYWNrXCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tQmxhY2suZW90XCIpO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUJsYWNrLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXG4gICAgICAgIHVybChcIlJvYm90by1CbGFjay53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1CbGFjay50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBCbGFja0l0YWxpY1wiO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUJsYWNrSXRhbGljLmVvdFwiKTtcbiAgICBzcmM6IHVybChcIlJvYm90by1CbGFja0l0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tQmxhY2tJdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tQmxhY2tJdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQm9sZFwiO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUJvbGQuZW90XCIpO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcbiAgICAgICAgdXJsKFwiUm9ib3RvLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBCb2xkSXRhbGljXCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tQm9sZEl0YWxpYy5lb3RcIik7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tQm9sZEl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tQm9sZEl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1Cb2xkSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1lZGl1bUl0YWxpY1wiO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLU1lZGl1bUl0YWxpYy5lb3RcIik7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tTWVkaXVtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXG4gICAgICAgIHVybChcIlJvYm90by1NZWRpdW1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tTWVkaXVtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tTGlnaHQuZW90XCIpO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUxpZ2h0LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXG4gICAgICAgIHVybChcIlJvYm90by1MaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBMaWdodEl0YWxpY1wiO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUxpZ2h0SXRhbGljLmVvdFwiKTtcbiAgICBzcmM6IHVybChcIlJvYm90by1MaWdodEl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tTGlnaHRJdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tTGlnaHRJdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTWVkaXVtXCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tTWVkaXVtLmVvdFwiKTtcbiAgICBzcmM6IHVybChcIlJvYm90by1NZWRpdW0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcbiAgICAgICAgdXJsKFwiUm9ib3RvLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1NZWRpdW0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTWVkaXVtSXRhbGljXCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tTWVkaXVtSXRhbGljLmVvdFwiKTtcbiAgICBzcmM6IHVybChcIlJvYm90by1NZWRpdW1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcbiAgICAgICAgdXJsKFwiUm9ib3RvLU1lZGl1bUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1NZWRpdW1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gUmVndWxhclwiO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLVJlZ3VsYXIuZW90XCIpO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLVJlZ3VsYXIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcbiAgICAgICAgdXJsKFwiUm9ib3RvLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBUaGluXCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tVGhpbi5lb3RcIik7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tVGhpbi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tVGhpbi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1UaGluLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFRoaW5JdGFsaWNcIjtcbiAgICBzcmM6IHVybChcIlJvYm90by1UaGluSXRhbGljLmVvdFwiKTtcbiAgICBzcmM6IHVybChcIlJvYm90by1UaGluSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXG4gICAgICAgIHVybChcIlJvYm90by1UaGluSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcbiAgICAgICAgdXJsKFwiUm9ib3RvLVRoaW5JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBCbGFja1wiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1CbGFjay5lb3RcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLUJsYWNrLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1CbGFjay53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1CbGFjay50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQmxhY2tJdGFsaWNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQmxhY2tJdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1CbGFja0l0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQmxhY2tJdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQmxhY2tJdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQm9sZEl0YWxpY1wiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1Cb2xkSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZEl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZEl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1Cb2xkSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNZWRpdW1JdGFsaWNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBMaWdodFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1MaWdodC5lb3RcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLUxpZ2h0LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1MaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTGlnaHRJdGFsaWNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTGlnaHRJdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1MaWdodEl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTGlnaHRJdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTGlnaHRJdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1lZGl1bVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW0uZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1lZGl1bUl0YWxpY1wiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tUmVndWxhci5lb3RcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gVGhpblwiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1UaGluLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tVGhpbi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tVGhpbi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1UaGluLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBUaGluSXRhbGljXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLVRoaW5JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1UaGluSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1UaGluSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLVRoaW5JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleF9ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4X2hvcml6b250YWwtbWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X2hvcml6b250YWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF9ob3Jpem9udGFsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF9ob3Jpem9udGFsX3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleF9ob3Jpem9udGFsLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3ZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLW1pZGRsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfdmVydGljYWwtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mdWxsLXNpemUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tdWktdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9oMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2gzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDQge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfYm9keS14bCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWwge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1sX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW0ge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1tX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LXMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9keS1zX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXhzIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubXVpLXRleHRfbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm11aS10ZXh0X2xpbmstaG92ZXJlZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucm91dGVyX2xpbmsge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDAgOHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucm91dGVyX2xpbmstYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xufVxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cbi5tdWktbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXNwYWNlIHtcbiAgLyogUklHSFQgU1BBQ0UgKi9cbiAgLyogTEVGVCBTUEFDRSAqL1xuICAvKiBCT1RUT00gU1BBQ0UgKi9cbiAgLyogVE9QIFNQQUNFICovXG59XG4ubXVpLXNwYWNlX3JpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC02IHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC03IHtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC04IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC05IHtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0xMCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubXVpLXNwYWNlX2xlZnQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5tdWktc3BhY2VfbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNiB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTcge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtOSB7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMyB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS00IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS03IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTgge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOSB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC0wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5tdWktc3BhY2VfdG9wLTEge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0yIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm11aS1zcGFjZV90b3AtMyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubXVpLXNwYWNlX3RvcC00IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm11aS1zcGFjZV90b3AtNiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC03IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5tdWktc3BhY2VfdG9wLTgge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLm11aS1zcGFjZV90b3AtOSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm11aS1idXR0b25fY29sb3Itc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fc2l6ZS1sIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubXVpLWJ1dHRvbl9zaXplLW0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtcyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1jb2xfbWQtMyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnRhYmxlLm11aS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzk1OWJhNDtcbn1cbi5tdWktdGFibGVfX3RyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IDA7XG59XG4ubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogNTVweDtcbiAgY29sb3I6ICMzMzM7XG59XG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGNvbG9yOiAjNzk4MThjO1xufVxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBoZWlnaHQ6IDc5cHg7XG59XG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuOmhvc3Qge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTgxYztcbiAgY29sb3I6ICM5Y2E0YWY7XG59XG4uZnJhbWUge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZnJhbWVfX2NvbnRlbnQge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHBhZGRpbmctYm90dG9tOiA0OHB4O1xufVxuLmZyYW1lOm5vdCguaGlkZGVuKSB7XG4gIHBhZGRpbmctbGVmdDogMTc2cHg7XG59XG4uZnJhbWUuaGlkZGVuIHtcbiAgcGFkZGluZy1sZWZ0OiAxMjhweDtcbn1cbi5mYXN0LWFjY2VzcyB7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDhweDtcbiAgbGVmdDogMDtcbiAgdG9wOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMjMyNDI5O1xuICBib3gtc2hhZG93OiA4cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjRweCAyOHB4O1xufVxuLmljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uZmFzdC1hY2Nlc3M6bm90KC5oaWRkZW4pIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0OHB4LCAwcHgsIDBweCk7XG59XG4uZmFzdC1hY2Nlc3M6bm90KC5oaWRkZW4pICN0b2dnbGVWaXNpYmxlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cbi5mYXN0LWFjY2Vzcy5oaWRkZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mYXN0LWFjY2Vzcy5oaWRkZW4gI3RvZ2dsZVZpc2libGUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cbiIsIi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJl9ob3Jpem9udGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfd3JhcCB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFzZWxpbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiAgICAmX3ZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWxlZnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgJl93cmFwIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbn1cblxuXG4uZnVsbC1zaXplIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIi5tdWktdGV4dCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgICAmX2gxIHtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDIge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbV9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LXMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS14cyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cblxuICAgICZfbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICAgJi1ob3ZlcmVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaG92ZXJlZDpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgICAgICAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG4ucm91dGVyX2xpbmsge1xuICAgIG9wYWNpdHk6IC43O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgJi1hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG4gICAgfVxufVxuXG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MDUxNTQ7XG59XG5cbi5tdWktbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgICBjb2xvcjogIzIzYmE5OSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbn1cbiIsIi5tdWktc3BhY2Uge1xuICAgIC8qIFJJR0hUIFNQQUNFICovXG5cbiAgICAmX3JpZ2h0LTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0yIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0zIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC02IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTgge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC05IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogTEVGVCBTUEFDRSAqL1xuXG4gICAgJl9sZWZ0LTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTIge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0zIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgICZfbGVmdC02IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC05IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogQk9UVE9NIFNQQUNFICovXG5cbiAgICAmX2JvdHRvbS0wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgIC8qIFRPUCBTUEFDRSAqL1xuXG4gICAgJl90b3AtMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJl90b3AtMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG5cbiAgICAmX3RvcC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgICZfdG9wLTYge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTcge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTgge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTkge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTEwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG59XG4iLCIubXVpLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcblxuXG4gICAgJl9jb2xvciB7XG4gICAgICAgICYtcHJpbWFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5W2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MtaG92ZXJlZCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2VzcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgICYtZXJyb3I6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZXJyb3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfc2l6ZSB7XG4gICAgICAgICYtbCB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMzYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLW0ge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbiIsIi5tdWktY29sIHtcblxuICAgICZfbWQtMyB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG4iLCJ0YWJsZS5tdWktdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZCxcbi5tdWktdGFibGVfX3RoIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICM5NTliYTQ7XG59XG5cbi5tdWktdGFibGVfX3RyIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGhlaWdodDogNTVweDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2hvdmVyX2Rpc2FibGVkKTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cblxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDRweCAwIDA7XG4gICAgY29sb3I6ICM3OTgxOGM7XG59XG5cbi5tdWktdGFibGVfbGF5b3V0X2ZpeGVkIHtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdHJfYm9yZGVyX3RvcCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGhlaWdodDogNzlweDtcbn1cblxuLm11aS10YWJsZV9fdHJfY3Vyc29yX3BvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX2xhc3QsXG4ubXVpLXRhYmxlX190aF9sYXN0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9vdmVyZmxvdyxcbi5tdWktdGFibGVfX3RoX3RleHRfb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiIsIkBpbXBvcnQgdXJsKCcuLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8ubGVzcycpO1xuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtbGlicmFyeS5sZXNzJztcblxuQG11aS1mbGV4LWNvbG9yX19wcmltYXJ5LXRleHQ6ICM5Y2E0YWY7XG5AbXVpLWZsZXgtY29sb3JfX2JhY2tncm91bmQtZGVmYXVsdDogIzE3MTgxYztcbkBtdWktZmxleC1jb2xvcl9fYmFja2dyb3VuZDogIzIzMjQyOTtcbkBtdWktZmxleC1jb2xvcl9fYm94LWJhY2tncm91bmQ6ICMxNTE2MWE7XG5cblxuQG11aS1mb250LWxpbms6ICdSb2JvdG8gUmVndWxhcicsIHNhbnMtc2VyaWY7XG5cbjpob3N0IHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQG11aS1mbGV4LWNvbG9yX19iYWNrZ3JvdW5kLWRlZmF1bHQ7XG4gICAgY29sb3I6IEBtdWktZmxleC1jb2xvcl9fcHJpbWFyeS10ZXh0O1xuXG4gICAgLy8gICAgIC5tYWluLXBhZ2Uge1xuICAgIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLy8gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIC5sZWZ0LXBhbmVsIHtcbiAgICAvLyAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgLy8gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG11aS1mbGV4LWNvbG9yX19iYWNrZ3JvdW5kO1xuXG4gICAgLy8gICAgICAgICAmX19mb290ZXIge1xuICAgIC8vICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIC5yaWdodC13aW5kb3cge1xuICAgIC8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG5cbiAgICAvLyAgICAgICAgICZfX2NvbnRlbnQge1xuICAgIC8vICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAvLyAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAvLyAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIC8vICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIC5tZW51LWJhciB7XG4gICAgLy8gICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gICAgICAgICBmb250LWZhbWlseTogQG11aS1mb250LWxpbms7XG4gICAgLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG11aS1mbGV4LWNvbG9yX19ib3gtYmFja2dyb3VuZDtcbiAgICAvLyAgICAgICAgIGNvbG9yOiBAbXVpLWZsZXgtY29sb3JfX3ByaW1hcnktdGV4dDtcbiAgICAvLyAgICAgICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICAvLyAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgLy8gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLy8gICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICAubGlua3Mge1xuICAgIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIC5saW5rcz5hIHtcbiAgICAvLyAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAvLyAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIC8vICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XG4gICAgLy8gICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgLy8gICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIC5saW5rcz5hIHtcbiAgICAvLyAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIC5saW5rcz5hOmhvdmVyLFxuICAgIC8vICAgICAubGlua3M+YS5hY3RpdmUge1xuICAgIC8vICAgICAgICAgY29sb3I6ICMyM0JBOTk7XG4gICAgLy8gICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcbiAgICAvLyAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgICAvLyAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAvLyAgICAgfVxuXG59XG5cblxuLmZyYW1lIHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDhweDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQ4cHg7XG4gICAgfVxufVxuXG4uZnJhbWU6bm90KC5oaWRkZW4pIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE3NnB4O1xufVxuXG4uZnJhbWUuaGlkZGVuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyOHB4O1xufVxuXG4uZmFzdC1hY2Nlc3Mge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQ4cHg7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogIzIzMjQyOTtcbiAgICBib3gtc2hhZG93OiA4cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjRweCAyOHB4O1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uZmFzdC1hY2Nlc3M6bm90KC5oaWRkZW4pIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDQ4cHgsIDBweCwgMHB4KTtcblxuICAgICN0b2dnbGVWaXNpYmxlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xuICAgIH1cbn1cblxuXG4uZmFzdC1hY2Nlc3MuaGlkZGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICN0b2dnbGVWaXNpYmxlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzc3cHgpIHtcbi8vICAgICAuX3BhZ2Uge1xuLy8gICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbi8vICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgICAgfVxuXG4vLyAgICAgLmxlZnQtY29sdW1uIHtcbi8vICAgICAgICAgbWF4LXdpZHRoOiAzNDBweDtcbi8vICAgICAgICAgbWluLXdpZHRoOiAzNDBweDtcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjMjMyNDI5O1xuLy8gICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgICAgfVxuXG5cblxuXG5cblxuLy8gICAgIC5yZWxhdGl2ZS1jb250YWluZXIge1xuLy8gICAgICAgICBtaW4td2lkdGg6IDM0MHB4O1xuLy8gICAgICAgICBtYXgtd2lkdGg6IDM0MHB4O1xuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgfVxuXG4vLyAgICAgLnJpZ2h0LWNvbnRlbnQge1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMzc2cHgpIHtcbi8vICAgICAuX3BhZ2Uge1xuLy8gICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbi8vICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgICAgfVxuXG4vLyAgICAgLmxlZnQtY29sdW1uIHtcbi8vICAgICAgICAgbWF4LXdpZHRoOiAzNDBweDtcbi8vICAgICAgICAgbWluLXdpZHRoOiAzNDBweDtcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjMjMyNDI5O1xuLy8gICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgICAgfVxuXG4vLyAgICAgLm1lbnUtYmFyIHtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTYxYTtcbi8vICAgICAgICAgY29sb3I6ICM5Y2E0YWY7XG4vLyAgICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbi8vICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4vLyAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICAubGlua3Mge1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4vLyAgICAgfVxuXG4vLyAgICAgLmxpbmtzPmEge1xuLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcbi8vICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuLy8gICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbi8vICAgICB9XG5cbi8vICAgICAubGlua3M+YSB7XG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbi8vICAgICB9XG5cbi8vICAgICAubGlua3M+YTpob3Zlcixcbi8vICAgICAubGlua3M+YS5hY3RpdmUge1xuLy8gICAgICAgICBjb2xvcjogIzIzQkE5OTtcbi8vICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XG4vLyAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbi8vICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuLy8gICAgIH1cblxuXG4vLyAgICAgLnJlbGF0aXZlLWNvbnRhaW5lciB7XG4vLyAgICAgICAgIG1pbi13aWR0aDogMzQwcHg7XG4vLyAgICAgICAgIG1heC13aWR0aDogMzQwcHg7XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB9XG5cbi8vICAgICAucmlnaHQtY29udGVudCB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4vLyAgICAgLl9wYWdlIHtcbi8vICAgICAgICAgbWF4LXdpZHRoOiA2NDhweDtcbi8vICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgICAgfVxuXG4vLyAgICAgLmxlZnQtY29sdW1uIHtcbi8vICAgICAgICAgbWF4LXdpZHRoOiAzNDBweDtcbi8vICAgICAgICAgbWluLXdpZHRoOiAzNDBweDtcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjMjMyNDI5O1xuLy8gICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgICAgfVxuXG4vLyAgICAgLm1lbnUtYmFyIHtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTYxYTtcbi8vICAgICAgICAgY29sb3I6ICM5Y2E0YWY7XG4vLyAgICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbi8vICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4vLyAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICAubGlua3Mge1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4vLyAgICAgfVxuXG4vLyAgICAgLmxpbmtzPmEge1xuLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcbi8vICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuLy8gICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbi8vICAgICB9XG5cbi8vICAgICAubGlua3M+YSB7XG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbi8vICAgICB9XG5cbi8vICAgICAubGlua3M+YTpob3Zlcixcbi8vICAgICAubGlua3M+YS5hY3RpdmUge1xuLy8gICAgICAgICBjb2xvcjogIzIzQkE5OTtcbi8vICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XG4vLyAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbi8vICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuLy8gICAgIH1cblxuXG4vLyAgICAgLnJlbGF0aXZlLWNvbnRhaW5lciB7XG4vLyAgICAgICAgIG1pbi13aWR0aDogMzQwcHg7XG4vLyAgICAgICAgIG1heC13aWR0aDogMzQwcHg7XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB9XG5cbi8vICAgICAucmlnaHQtY29udGVudCB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuLy8gICAgIC5fcGFnZSB7XG4vLyAgICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4vLyAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgIH1cblxuLy8gICAgIC5sZWZ0LWNvbHVtbiB7XG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgfVxuXG4vLyAgICAgLm1lbnUtYmFyIHtcbi8vICAgICAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgICB9XG5cbi8vICAgICAucmlnaHQtY29udGVudCB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgfVxuXG4vLyB9XG5cblxuLy8gYSB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4vLyAuZm9ybS1jb250YWluZXIge1xuLy8gICAgIHBhZGRpbmc6IDQ1cHggMjVweCAyNXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI0Mjk7XG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vIH1cblxuLy8gLmZvcm0tY29udGFpbmVyPio6bm90KDpsYXN0LWNoaWxkKSB7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbi8vIH1cblxuXG4vLyAuaW5wdXQge1xuXG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgICAgb3V0bGluZTogbm9uZTtcbi8vICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG5cblxuLy8gICAgICZfZGFyay1tb2RlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTYxQTtcbi8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzljYTRhZjtcbi8vICAgICAgICAgY29sb3I6ICM5Y2E0YWY7XG4vLyAgICAgfVxuXG4vLyAgICAgJl9hcm91bmRlZCB7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbi8vICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vIH1cblxuXG4vLyAuYnV0dG9uLWxvZ2luIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbi8vICAgICBib3JkZXI6IG5vbmU7XG4vLyAgICAgb3V0bGluZTogbm9uZTtcbi8vICAgICBoZWlnaHQ6IDQwcHg7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNiYTk5O1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgY29sb3I6ICNlNWUzZTY7XG4vLyB9XG5cblxuLy8gLm1lbnUtbGluayB7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vIH1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 28, vars: 0, consts: [[1, "container"], [1, "container__error"], ["width", "96", "height", "96", "viewBox", "0 0 96 96", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M26.3781 44.6351C26.3781 44.6351 26.7355 26.7679 27.2715 21.2291C27.8074 15.6904 32.0957 1.75404 50.6775 2.11123C50.6775 2.11123 68.6832 2.63079 69.9276 24.8023C69.9674 25.5092 69.967 26.2155 69.9542 26.9233C69.891 30.408 69.7095 41.6977 69.8999 47.3278C69.9289 48.1931 70.0842 49.0487 70.3958 49.8566C70.6714 50.5719 70.99 51.6395 71.043 52.8491C71.1209 54.6247 71.4762 56.3734 72.2472 57.9746C73.381 60.3294 75.1605 63.5509 77.385 66.014C78.7952 67.5752 79.4864 69.6999 79.0566 71.7592C78.8114 72.9345 78.255 74.1275 77.121 75.0094C77.121 75.0094 83.0172 81.9776 75.6917 88.9459C75.6917 88.9459 72.8331 91.8043 68.7794 93.3632C67.6782 93.7865 66.4969 93.9547 65.3194 93.8775C58.3977 93.4234 31.0223 90.0735 17.8394 65.4015C16.909 63.6602 16.4577 61.6766 16.7026 59.7176C16.9977 57.3559 18.2489 54.6793 22.269 54.105C22.269 54.105 21.1454 50.3068 24.1292 48.5767C25.5199 47.7695 26.337 46.2427 26.3781 44.6351Z", "fill", "url(#container)"], ["d", "M75.6909 88.9451C83.0163 81.9769 77.1202 75.0086 77.1202 75.0086C78.2545 74.1264 78.8109 72.9332 79.0559 71.7577C79.4849 69.701 78.799 67.5782 77.39 66.0195C75.1422 63.5332 73.3482 60.2713 72.215 57.9093C71.4582 56.3317 71.117 54.6058 71.0424 52.8579C70.991 51.6538 70.676 50.5895 70.4011 49.8725C70.0839 49.0445 69.9267 48.167 69.8971 47.2809C69.7094 41.6358 69.8902 30.3978 69.9532 26.9225C69.9659 26.2147 69.9663 25.5084 69.9266 24.8015C68.6825 2.63004 50.6767 2.11066 50.6767 2.11066C49.9062 2.09585 49.169 2.11422 48.4469 2.14685C50.2889 3.14435 52.6151 4.91322 53.6718 7.80129C54.2169 9.2906 53.5061 10.9757 52.0591 11.6248C48.1687 13.3698 40.5536 19.1915 41.8779 37.8431C41.8779 37.8431 39.7156 53.6554 54.041 64.0387C55.5858 65.1585 56.6444 66.8428 57.0059 68.7161C57.2988 70.2337 57.4606 72.1245 57.1248 74.0829C56.7927 76.0183 54.7289 77.1583 52.9289 76.3729C52.0929 76.0078 51.1848 75.5405 50.3397 74.9585C49.9338 74.6792 49.3916 74.618 48.98 74.889C48.3581 75.2981 48.2677 76.136 48.7445 76.6588C49.6897 77.6951 51.4464 79.4899 53.5029 80.9585C53.5029 80.9585 49.1649 87.5827 37.2217 85.3567C48.9472 92.2016 61.0394 93.5957 65.318 93.8764C66.4955 93.9536 67.6767 93.7854 68.7779 93.362C72.832 91.8035 75.6909 88.9451 75.6909 88.9451Z", "fill", "#9CA4AF"], ["d", "M57.4982 15.5603C60.401 16.9433 63.0324 19.5808 63.7918 24.5224C63.8752 25.0652 63.9118 25.6142 63.9395 26.1628L65.0441 47.9764C65.1915 50.8886 65.7483 53.7559 66.5396 56.5626C67.1685 58.7933 67.2977 61.6127 64.4471 62.5718C64.1797 62.6618 63.8973 62.7004 63.6155 62.7088C61.0142 62.7885 47.9664 62.19 38.8732 43.1749C38.1771 41.7191 37.6926 40.171 37.4162 38.5811C36.7365 34.6678 36.0713 27.1881 39.3381 21.3203C42.8961 14.9297 50.8954 12.4142 57.4982 15.5603Z", "fill", "#15161A"], ["d", "M54.9454 14.6376C48.9486 13.1114 42.4478 15.7356 39.3387 21.3201C36.3139 26.7529 36.6606 33.5622 37.2681 37.6486C39.0186 39.1555 41.098 39.4124 42.4812 39.3721C43.3733 39.3462 44.1405 39.9921 44.2806 40.8734L44.6526 43.2123C44.7544 43.8522 45.306 44.323 45.954 44.323H47.478C48.1587 44.323 48.7272 43.8048 48.7903 43.1273L49.0425 40.4163C49.1012 39.7874 49.6287 39.3066 50.2602 39.3066C50.8864 39.3066 51.4116 39.7799 51.4763 40.4029L51.7615 43.1418C51.8314 43.8132 52.3973 44.3232 53.0723 44.3232H54.3608C55.0886 44.3232 55.6787 43.7331 55.6787 43.0053V40.7095C55.6787 40.0553 56.1934 39.517 56.8468 39.4878L57.015 39.4803C57.7112 39.4491 58.2925 40.0051 58.2925 40.702V42.5386C58.2925 43.2664 58.8823 43.8565 59.6102 43.8565C60.3381 43.8565 60.928 43.2664 60.928 42.5386V25.5407C60.9283 19.9229 57.5695 16.4757 54.9454 14.6376Z", "fill", "url(#skull)"], ["d", "M49.3714 24.593C47.8107 24.5816 44.7576 24.9504 43.498 27.8308C43.0495 28.8558 42.9441 30.0185 43.2691 31.0892C43.2766 31.1137 43.2843 31.1385 43.2921 31.1634C43.9998 33.3778 46.7286 34.185 48.5744 32.7714C48.6486 32.7146 48.7242 32.6557 48.8005 32.5955C50.7179 31.0794 51.6687 28.5662 51.0456 26.2023C50.9924 26.0002 50.9279 25.8003 50.8504 25.6053C50.6095 24.9995 50.023 24.5977 49.3714 24.593Z", "fill", "#15161A"], ["d", "M56.1821 25.4467C57.2981 25.6721 59.2909 26.4078 59.4163 28.7932C59.4413 29.2672 59.3108 29.7374 59.0901 30.1574L59.0672 30.2009C58.3738 31.4969 56.5845 31.6867 55.5985 30.5964C55.573 30.5681 55.5473 30.5394 55.5212 30.5101C54.4731 29.3281 54.1423 27.6114 54.832 26.1901C54.8595 26.1331 54.8888 26.0769 54.9197 26.0214C55.1687 25.5734 55.6796 25.3452 56.1821 25.4467Z", "fill", "#15161A"], ["d", "M54.3353 32.5336C54.6017 32.9493 54.8832 33.4385 55.1084 33.9479C55.3309 34.4514 54.948 35.0167 54.3975 35.0167H53.2823C52.7704 35.0167 52.4012 34.5288 52.5419 34.0366C52.6491 33.6611 52.7869 33.2026 52.9502 32.7069C53.1548 32.0857 53.9822 31.9831 54.3353 32.5336Z", "fill", "#15161A"], ["d", "M31.614 59.4013C34.0287 61.6267 37.7134 64.8281 40.7819 66.6614C41.5907 67.1448 41.7302 68.2556 41.047 68.9047C40.5139 69.4109 39.684 69.4263 39.1367 68.9356C37.3694 67.3511 33.5772 63.7768 30.9068 60.0232C30.5789 59.5619 31.198 59.0178 31.614 59.4013Z", "fill", "#9CA4AF"], ["id", "container", "x1", "48.0002", "y1", "17.6599", "x2", "48.0002", "y2", "134.964", "gradientUnits", "userSpaceOnUse"], ["offset", "0.0103", "stop-color", "#E5E3E6"], ["offset", "0.942708", "stop-color", "#9CA4AF"], ["id", "skull", "x1", "48.8934", "y1", "39.9788", "x2", "48.8934", "y2", "-6.66311", "gradientUnits", "userSpaceOnUse"], ["offset", "0.0051", "stop-color", "#23BA99"], ["offset", "1", "stop-color", "#23BA99", "stop-opacity", "0"], [1, "title"], [1, "error"], [1, "container__description", "mui-text_body-m"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "linearGradient", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "stop", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "stop", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "linearGradient", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "stop", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "stop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041E\u0448\u0438\u0431\u043A\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u041D\u0430\u0448\u0438 \u0448\u0430\u043C\u0430\u043D\u044B \u0443\u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043D\u0430\u0434 \u044D\u0442\u0438\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: inherit;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.container__error[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container__description[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  \n  text-align: center;\n  letter-spacing: -0.3px;\n  \n  color: #686D73;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 44px;\n  \n  letter-spacing: -0.3px;\n  \n  color: #e5e3e6;\n}\n.error[_ngcontent-%COMP%] {\n  color: #f64d54;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdJO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VDRE4sWUFBWTtFRElOLGtCQUFBO0VBQ0Esc0JBQUE7RUNGTixpQkFBaUI7RURNWCxjQUFBO0FDSlI7QURRQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ05GLHFDQUFxQztFRFNuQyxzQkFBQTtFQ1BGLGlCQUFpQjtFRFdmLGNBQUE7QUNUSjtBRFlBO0VBQ0ksY0FBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJl9fZXJyb3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIC8qIG9yIDExNCUgKi9cblxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG5cbiAgICAgICAgLyogRGVmYXVsdCBUZXh0ICovXG5cbiAgICAgICAgY29sb3I6ICM2ODZENzM7XG4gICAgfVxufVxuXG4udGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTEwJSAqL1xuXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcblxuICAgIC8qIFRleHQgSG92ZXJlZCAqL1xuXG4gICAgY29sb3I6ICNlNWUzZTY7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6ICNmNjRkNTQ7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyX19lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lcl9fZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvKiBvciAxMTQlICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgLyogRGVmYXVsdCBUZXh0ICovXG4gIGNvbG9yOiAjNjg2RDczO1xufVxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDExMCUgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgLyogVGV4dCBIb3ZlcmVkICovXG4gIGNvbG9yOiAjZTVlM2U2O1xufVxuLmVycm9yIHtcbiAgY29sb3I6ICNmNjRkNTQ7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _projects_angular_kit_src_lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../projects/angular-kit/src/lib/components/icon/icon.component */ "./projects/angular-kit/src/lib/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_projects_preview_user_projects_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-projects-preview/user-projects-preview.component */ "./src/app/pages/profile-page/user-projects-preview/user-projects-preview.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/pages/profile-page/user-info/user-info.component.ts");










const _c0 = ["avatarElement"];
const _c1 = ["headerImg"];
const _c2 = ["headerMask"];
function ProfilePageComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.userinfo.nickname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.userinfo.position, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.userinfo.qoute, " ");
} }
class ProfilePageComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.checkBox = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](true, []);
        this.headerMask = 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 133, 255, 0.33)100%)';
        this.headerUrl = 'https://million-wallpapers.ru/wallpapers/2/61/16771467067221162384/landscape-an-evening-journey-street-city-painting-eveni.jpg';
        this.userinfo = {
            avatar: '',
            nickname: 'Maolink Magniel',
            position: 'Несерьёзный кот',
            qoute: 'Я живу моментом',
            projects: [
                {
                    name: 'Какое-то название',
                    imagine: '',
                    source: '',
                },
                {
                    name: 'Опять что-то',
                    imagine: '',
                    source: '',
                },
                {
                    name: 'Ха, бред',
                    imagine: '',
                    source: '',
                },
                {
                    name: 'Ууу, название',
                    imagine: '',
                    source: '',
                },
                {
                    name: 'АБВГД',
                    imagine: '',
                    source: '',
                },
                {
                    name: 'Просто 6',
                    imagine: '',
                    source: '',
                },
            ],
        };
        this.items = [
            {
                caption: 'Основная информация',
                elements: [
                    {
                        name: 'Логин',
                        value: 'Maolink',
                        canEdit: true,
                    },
                    {
                        name: 'Эл.почта',
                        value: 'maolink686@gmail.com',
                        canEdit: false,
                    },
                ],
            },
            {
                caption: 'Дополнительная  информация',
                elements: [
                    {
                        name: 'Описание',
                        value: '',
                        canEdit: true,
                    },
                ],
            },
            {
                caption: 'Безопасность',
                elements: [
                    {
                        name: 'Пароль',
                        value: '******',
                        canEdit: true,
                    },
                    {
                        name: 'Привязанный номер телефона',
                        value: '2412^dw',
                        canEdit: false,
                    },
                ],
            },
        ];
    }
    ngAfterViewInit() {
        this.setAvatarImg('https://sun9-15.userapi.com/c857728/v857728514/2093aa/q8xuFAy6y1k.jpg');
        this.setHeaderImg(this.headerUrl);
        this.setHeaderMask(this.headerMask);
    }
    setAvatarImg(url) {
        this.renderer.setStyle(this.avatarElement.nativeElement, 'background-image', `url(${url})`);
    }
    setHeaderImg(url) {
        this.renderer.setStyle(this.headerElement.nativeElement, 'background-image', `url(${url})`);
    }
    setHeaderMask(mask) {
        this.renderer.setStyle(this.headerMaskElement.nativeElement, 'background', mask);
    }
    editAvatar() {
        console.log('Work');
    }
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], viewQuery: function ProfilePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerMaskElement = _t.first);
    } }, decls: 33, vars: 6, consts: [[1, "title", "mui-text_h1"], [1, "content"], [1, "content__header"], ["headerElement", ""], [1, "content__header--img"], ["headerImg", ""], [1, "content__header--mask"], ["headerMask", ""], [1, "icon"], ["type", "iconMoreInformationLarge", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "disabled"], ["mat-menu-item", "", "role", "menuitemcheckbox"], ["labelPosition", "before", 1, "example-margin", 3, "formControl"], ["mat-menu-item", ""], [1, "avatar", "flex"], [1, "avatar__avatar-content"], [1, "avatar__avatar-img"], ["avatarElement", ""], [1, "avatar__edit-avatar", 3, "click"], [1, "body"], [1, "body__left-collum"], ["class", "user-info", 4, "ngIf"], [3, "projects"], [1, "information", 3, "items"], [1, "user-info"], [1, "avatar-text"], [1, "mui-space_bottom-3", "mui-text_body-xl"], [1, "mui-space_bottom-1", "mui-text_body-m_secondary"], [1, "avatar-text__qoute", "mui-text_body-xs"]], template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mui-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-menu", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0432\u0435\u0442 \u0444\u043E\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0444\u043E\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0444\u043E\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePageComponent_Template_div_click_26_listener() { return ctx.editAvatar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProfilePageComponent_div_30_Template, 8, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-user-projects-preview", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "app-user-info", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.checkBox.value === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.checkBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("projects", ctx.userinfo.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_projects_angular_kit_src_lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["MuiIconComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _user_projects_preview_user_projects_preview_component__WEBPACK_IMPORTED_MODULE_6__["UserProjectsPreviewComponent"], _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"]], styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: inherit;\n}\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n  display: inline-flex;\n  background: linear-gradient(to right, #43b4de, #6bb755);\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.33);\n  border-radius: 4px;\n  height: calc(100% - 104px);\n  background-color: #232429;\n}\n.content__header[_ngcontent-%COMP%] {\n  max-height: 210px;\n  min-height: 210px;\n  position: relative;\n  border-radius: 4px 4px 0 0;\n}\n.content__header--img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background: no-repeat center center;\n  position: absolute;\n}\n.content__header--mask[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.avatar-text[_ngcontent-%COMP%] {\n  color: #e5e3e6;\n  text-align: center;\n}\n.avatar-text__qoute[_ngcontent-%COMP%] {\n  color: #9ca4af;\n}\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n.body__left-collum[_ngcontent-%COMP%] {\n  padding: 86px 16px 16px;\n  display: flex;\n  min-width: 378px;\n  flex-direction: column;\n  border-right: 0.5px solid #3d4047;\n}\n.block[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 40px;\n}\n.user-info[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  position: absolute;\n  left: 126px;\n  bottom: -30%;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.56);\n  border-radius: 50%;\n  justify-content: center;\n}\n.avatar__avatar-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  position: relative;\n}\n.avatar__avatar-img[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  position: absolute;\n  border-radius: 50%;\n  background: no-repeat center center;\n  background-size: cover;\n  transition: 0.3s ease-in-out;\n}\n.avatar__edit-avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-self: center;\n  opacity: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  color: #e5e3e6;\n}\n.avatar__avatar-content[_ngcontent-%COMP%]:hover   .avatar__edit-avatar[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: 0.3s ease-in-out;\n}\n.avatar__avatar-content[_ngcontent-%COMP%]:hover   .avatar__avatar-img[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  -webkit-filter: brightness(60%) blur(1px);\n          filter: brightness(60%) blur(1px);\n}\n.information[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 34px;\n  overflow-y: scroll;\n}\n.caption[_ngcontent-%COMP%] {\n  color: #23ba99;\n}\n.default-text-color[_ngcontent-%COMP%] {\n  color: #686d73;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  cursor: pointer;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1kaXJlY3Rpb24ubGVzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC10ZXh0Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtc3BhY2VzLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtYnV0dG9ucy5sZXNzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWNvbHVtcy5sZXNzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRhYmxlLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0FDQVo7QURHUTtFQUNJLDZCQUFBO0FDRFo7QURJUTtFQUNJLHlCQUFBO0FDRlo7QURLUTtFQUNJLGVBQUE7QUNIWjtBRE1RO0VBQ0ksdUJBQUE7QUNKWjtBRE9RO0VBQ0kscUJBQUE7QUNMWjtBRGFJO0VBQ0ksc0JBQUE7QUNYUjtBRGFRO0VBQ0ksdUJBQUE7QUNYWjtBRGNRO0VBQ0ksOEJBQUE7QUNaWjtBRGVRO0VBQ0ksNkJBQUE7QUNiWjtBRGdCUTtFQUNJLG1CQUFBO0FDZFo7QURpQlM7RUFDSSx5QkFBQTtBQ2ZiO0FEa0JRO0VBQ0kscUJBQUE7QUNoQlo7QURtQlE7RUFDSSx1QkFBQTtBQ2pCWjtBRG9CUTtFQUNJLHFCQUFBO0FDbEJaO0FEdUJJO0VBQ0ksZUFBQTtBQ3JCUjtBRDBCQTtFQUNJLFdBQUE7QUN4Qko7QUMzREE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FENkRKO0FDM0RJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUQ2RFI7QUMxREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBRDREUjtBQ3pESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRDJEUjtBQ3hESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRDBEUjtBQ3ZESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHlEUjtBQ3RESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHdEUjtBQ3JESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHVEUjtBQ3BESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHNEUjtBQ25ESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHFEUjtBQ2xESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRG9EUjtBQ2pESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRG1EUjtBQ2hESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGtEUjtBQy9DSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGlEUjtBQzlDSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRGdEUjtBQzdDSTtFQUNJLGlCQUFBO0FEK0NSO0FDM0NJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FENkNSO0FDM0NRO0VBQ0ksWUFBQTtFQUNBLHFDQUFBO0FENkNaO0FDMUNRO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO0FENENaO0FDcENBO0VBQ0ksWUFBQTtFQUNBLDRDQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBRHFDSjtBQ25DSTtFQUNJLFVBQUE7RUFDQSw0Q0FBQTtFQUVBLGdDQUFBO0FEb0NSO0FDaENBO0VBQ0ksVUFBQTtFQUNBLDRDQUFBO0VBRUEsZ0NBQUE7QURpQ0o7QUM5QkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGdDSjtBQzdCQTtFQUNJLHlCQUFBO0VBQ0Esa0NBQUE7QUQrQko7QUVyTkE7RUZ1TkUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBRXhOSTtFQUNJLGVBQUE7QUYwTlI7QUV2Tkk7RUFDSSxpQkFBQTtBRnlOUjtBRXROSTtFQUNJLGlCQUFBO0FGd05SO0FFck5JO0VBQ0ksa0JBQUE7QUZ1TlI7QUVwTkk7RUFDSSxrQkFBQTtBRnNOUjtBRW5OSTtFQUNJLGtCQUFBO0FGcU5SO0FFbE5JO0VBQ0ksa0JBQUE7QUZvTlI7QUVqTkk7RUFDSSxrQkFBQTtBRm1OUjtBRWhOSTtFQUNJLGtCQUFBO0FGa05SO0FFL01JO0VBQ0ksa0JBQUE7QUZpTlI7QUU5TUk7RUFDSSxrQkFBQTtBRmdOUjtBRTNNSTtFQUNJLGNBQUE7QUY2TVI7QUUxTUk7RUFDSSxnQkFBQTtBRjRNUjtBRXpNSTtFQUNJLGdCQUFBO0FGMk1SO0FFeE1JO0VBQ0ksaUJBQUE7QUYwTVI7QUV2TUk7RUFDSSxpQkFBQTtBRnlNUjtBRXRNSTtFQUNJLGlCQUFBO0FGd01SO0FFck1JO0VBQ0ksaUJBQUE7QUZ1TVI7QUVwTUk7RUFDSSxpQkFBQTtBRnNNUjtBRW5NSTtFQUNJLGlCQUFBO0FGcU1SO0FFbE1JO0VBQ0ksaUJBQUE7QUZvTVI7QUVqTUk7RUFDSSxpQkFBQTtBRm1NUjtBRTlMSTtFQUNJLGdCQUFBO0FGZ01SO0FFN0xJO0VBQ0ksa0JBQUE7QUYrTFI7QUU1TEk7RUFDSSxrQkFBQTtBRjhMUjtBRTNMSTtFQUNJLG1CQUFBO0FGNkxSO0FFMUxJO0VBQ0ksbUJBQUE7QUY0TFI7QUV6TEk7RUFDSSxtQkFBQTtBRjJMUjtBRXhMSTtFQUNJLG1CQUFBO0FGMExSO0FFdkxJO0VBQ0ksbUJBQUE7QUZ5TFI7QUV0TEk7RUFDSSxtQkFBQTtBRndMUjtBRXJMSTtFQUNJLG1CQUFBO0FGdUxSO0FFcExJO0VBQ0ksbUJBQUE7QUZzTFI7QUVqTEk7RUFDSSxhQUFBO0FGbUxSO0FFaExJO0VBQ0ksZUFBQTtBRmtMUjtBRS9LSTtFQUNJLGVBQUE7QUZpTFI7QUU5S0k7RUFDSSxnQkFBQTtBRmdMUjtBRTdLSTtFQUNJLGdCQUFBO0FGK0tSO0FFNUtJO0VBQ0ksZ0JBQUE7QUY4S1I7QUUzS0k7RUFDSSxnQkFBQTtBRjZLUjtBRTFLSTtFQUNJLGdCQUFBO0FGNEtSO0FFektJO0VBQ0ksZ0JBQUE7QUYyS1I7QUV4S0k7RUFDSSxnQkFBQTtBRjBLUjtBRXZLSTtFQUNJLGdCQUFBO0FGeUtSO0FHL1ZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUhpV0o7QUc3VlE7RUFDSSxrREFBQTtBSCtWWjtBRzVWUTtFQUNJLDBDQUFBO0FIOFZaO0FHM1ZRO0VBQ0ksWUFBQTtBSDZWWjtBRzFWUTtFQUNJLGtEQUFBO0VBQ0EsNkJBQUE7QUg0Vlo7QUd6VlE7RUFDSSwwQ0FBQTtFQUNBLDZCQUFBO0FIMlZaO0FHeFZRO0VBQ0ksb0RBQUE7QUgwVlo7QUd2VlE7RUFDSSw0Q0FBQTtBSHlWWjtBR3JWUTtFQUNJLGdEQUFBO0FIdVZaO0FHcFZRO0VBQ0ksd0NBQUE7RUFDQSw2QkFBQTtBSHNWWjtBR25WUTtFQUNJLCtDQUFBO0FIcVZaO0FHbFZRO0VBQ0ksdUNBQUE7RUFDQSw2QkFBQTtBSG9WWjtBRy9VUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FIZ1ZaO0FHN1VRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUg4VVo7QUczVVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSDRVWjtBR3ZVQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBSHlVSjtBR3RVQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBSHdVSjtBSWphSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUptYVI7QUt6YUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBTDJhSjtBS3hhQTtFQUNJLGdDQUFBO0FMMGFKO0FLdmFBOztFQUdJLHNCQUFBO0VBQ0EsZ0JBQUE7QUx5YUo7QUt0YUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FMd2FKO0FLcmFBO0VBRUksK0JBQUE7RUFFQSx5QkFBQTtFQUVBLHVDQUFBO0VBQ0EsVUFBQTtBTHVhSjtBS3BhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBTHNhSjtBS25hQTtFQUNJLG1CQUFBO0FMcWFKO0FLbGFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FMb2FKO0FLamFBO0VBQ0ksbUJBQUE7QUxtYUo7QUtoYUE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTGthSjtBSy9aQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMaWFKO0FLOVpBO0VBQ0ksNkJBQUE7QUxnYUo7QUs3WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTCtaSjtBSzVaQTs7RUFFSSxZQUFBO0FMOFpKO0FLM1pBO0VBQ0ksZUFBQTtBTDZaSjtBSzFaQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMNFpKO0FLelpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwyWko7QUt4WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTDBaSjtBS3ZaQTtFQUNJLHNCQUFBO0FMeVpKO0FLdFpBOztFQUVJLGVBQUE7QUx3Wko7QUtyWkE7O0VBRUksZ0JBQUE7QUx1Wko7QUtwWkE7O0VBRUksa0JBQUE7QUxzWko7QUtuWkE7O0VBRUksaUJBQUE7QUxxWko7QUtsWkE7O0VBRUksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FMb1pKO0FNaGpCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FOa2pCSjtBTS9pQkE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEsdURBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0Esb0NBQUE7QU5nakJKO0FNN2lCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FOK2lCSjtBTTdpQkk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBTitpQlI7QU03aUJRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBRUEsa0JBQUE7QU44aUJaO0FNNWlCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QU44aUJaO0FNemlCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBTjJpQko7QU16aUJJO0VBQ0ksY0FBQTtBTjJpQlI7QU12aUJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBTnlpQko7QU12aUJJO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FOeWlCUjtBTXBpQkE7RUFDSSxtQkFBQTtBTnNpQko7QU1uaUJBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FOcWlCSjtBTWxpQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QU5vaUJKO0FNbGlCSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBTm9pQlI7QU1qaUJJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FObWlCUjtBTWhpQkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FOa2lCUjtBTTloQkE7RUFDSSxVQUFBO0VBQ0EsNEJBQUE7QU5naUJKO0FNN2hCQTtFQUNJLDRCQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBTitoQko7QU01aEJBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBTjhoQko7QU0zaEJBO0VBQ0ksY0FBQTtBTjZoQko7QU0xaEJBO0VBQ0ksY0FBQTtBTjRoQko7QU16aEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QU4yaEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJl9ob3Jpem9udGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfd3JhcCB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFzZWxpbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiAgICAmX3ZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWxlZnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgJl93cmFwIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbn1cblxuXG4uZnVsbC1zaXplIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mbGV4X2hvcml6b250YWwge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZsZXhfaG9yaXpvbnRhbC1taWRkbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5mbGV4X2hvcml6b250YWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2hvcml6b250YWxfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mbGV4X2hvcml6b250YWwtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF9ob3Jpem9udGFsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfdmVydGljYWwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXhfdmVydGljYWwtbWlkZGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF92ZXJ0aWNhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfdmVydGljYWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmZsZXhfdmVydGljYWwtbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZsZXhfdmVydGljYWwtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZmxleF93cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZ1bGwtc2l6ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm11aS10ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2gxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g1IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9ib2R5LXhsIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktcyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvZHkteHMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tdWktdGV4dF9saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5tdWktdGV4dF9saW5rLWhvdmVyZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5yb3V0ZXJfbGluayB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3V0ZXJfbGluay1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG59XG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuLm11aS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tdWktc3BhY2Uge1xuICAvKiBSSUdIVCBTUEFDRSAqL1xuICAvKiBMRUZUIFNQQUNFICovXG4gIC8qIEJPVFRPTSBTUEFDRSAqL1xuICAvKiBUT1AgU1BBQ0UgKi9cbn1cbi5tdWktc3BhY2VfcmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTMge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTYge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTcge1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTgge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTkge1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTAge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5tdWktc3BhY2VfbGVmdC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC02IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNyB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi5tdWktc3BhY2VfbGVmdC05IHtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm11aS1zcGFjZV9ib3R0b20tMSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS02IHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTcge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS05IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5tdWktc3BhY2VfdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm11aS1zcGFjZV90b3AtMSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0zIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tdWktc3BhY2VfdG9wLTQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLm11aS1zcGFjZV90b3AtNSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC02IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTcge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLm11aS1zcGFjZV90b3AtOCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4ubXVpLXNwYWNlX3RvcC05IHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5tdWktYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9zaXplLWwge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtbSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25fc2l6ZS1zIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWNvbF9tZC0zIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxudGFibGUubXVpLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjOTU5YmE0O1xufVxuLm11aS10YWJsZV9fdHIge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgb3V0bGluZTogMDtcbn1cbi5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzMzMztcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgY29sb3I6ICM3OTgxOGM7XG59XG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGhlaWdodDogNzlweDtcbn1cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDNiNGRlLCAjNmJiNzU1KTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwNHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjQyOTtcbn1cbi5jb250ZW50X19oZWFkZXIge1xuICBtYXgtaGVpZ2h0OiAyMTBweDtcbiAgbWluLWhlaWdodDogMjEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG59XG4uY29udGVudF9faGVhZGVyLS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRlbnRfX2hlYWRlci0tbWFzayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5hdmF0YXItdGV4dCB7XG4gIGNvbG9yOiAjZTVlM2U2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXZhdGFyLXRleHRfX3FvdXRlIHtcbiAgY29sb3I6ICM5Y2E0YWY7XG59XG4uYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ib2R5X19sZWZ0LWNvbGx1bSB7XG4gIHBhZGRpbmc6IDg2cHggMTZweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDM3OHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICMzZDQwNDc7XG59XG4uYmxvY2s6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4udXNlci1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5hdmF0YXIge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTI2cHg7XG4gIGJvdHRvbTogLTMwJTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjU2KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hdmF0YXJfX2F2YXRhci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdmF0YXJfX2F2YXRhci1pbWcge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbi5hdmF0YXJfX2VkaXQtYXZhdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZTVlM2U2O1xufVxuLmF2YXRhcl9fYXZhdGFyLWNvbnRlbnQ6aG92ZXIgLmF2YXRhcl9fZWRpdC1hdmF0YXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmF2YXRhcl9fYXZhdGFyLWNvbnRlbnQ6aG92ZXIgLmF2YXRhcl9fYXZhdGFyLWltZyB7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpIGJsdXIoMXB4KTtcbn1cbi5pbmZvcm1hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzNHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uY2FwdGlvbiB7XG4gIGNvbG9yOiAjMjNiYTk5O1xufVxuLmRlZmF1bHQtdGV4dC1jb2xvciB7XG4gIGNvbG9yOiAjNjg2ZDczO1xufVxuLmljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cbiIsIi5tdWktdGV4dCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgICAmX2gxIHtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDIge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbV9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LXMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS14cyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cblxuICAgICZfbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICAgJi1ob3ZlcmVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaG92ZXJlZDpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgICAgICAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG4ucm91dGVyX2xpbmsge1xuICAgIG9wYWNpdHk6IC43O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgJi1hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG4gICAgfVxufVxuXG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MDUxNTQ7XG59XG5cbi5tdWktbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgICBjb2xvcjogIzIzYmE5OSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbn1cbiIsIi5tdWktc3BhY2Uge1xuICAgIC8qIFJJR0hUIFNQQUNFICovXG5cbiAgICAmX3JpZ2h0LTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0yIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0zIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC02IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTgge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC05IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogTEVGVCBTUEFDRSAqL1xuXG4gICAgJl9sZWZ0LTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTIge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0zIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgICZfbGVmdC02IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC05IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogQk9UVE9NIFNQQUNFICovXG5cbiAgICAmX2JvdHRvbS0wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgIC8qIFRPUCBTUEFDRSAqL1xuXG4gICAgJl90b3AtMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJl90b3AtMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG5cbiAgICAmX3RvcC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgICZfdG9wLTYge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTcge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTgge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTkge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTEwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG59XG4iLCIubXVpLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcblxuXG4gICAgJl9jb2xvciB7XG4gICAgICAgICYtcHJpbWFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5W2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MtaG92ZXJlZCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2VzcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgICYtZXJyb3I6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZXJyb3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfc2l6ZSB7XG4gICAgICAgICYtbCB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMzYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLW0ge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbiIsIi5tdWktY29sIHtcblxuICAgICZfbWQtMyB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG4iLCJ0YWJsZS5tdWktdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZCxcbi5tdWktdGFibGVfX3RoIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICM5NTliYTQ7XG59XG5cbi5tdWktdGFibGVfX3RyIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGhlaWdodDogNTVweDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2hvdmVyX2Rpc2FibGVkKTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cblxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDRweCAwIDA7XG4gICAgY29sb3I6ICM3OTgxOGM7XG59XG5cbi5tdWktdGFibGVfbGF5b3V0X2ZpeGVkIHtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdHJfYm9yZGVyX3RvcCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGhlaWdodDogNzlweDtcbn1cblxuLm11aS10YWJsZV9fdHJfY3Vyc29yX3BvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX2xhc3QsXG4ubXVpLXRhYmxlX190aF9sYXN0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9vdmVyZmxvdyxcbi5tdWktdGFibGVfX3RoX3RleHRfb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1saWJyYXJ5Lmxlc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc291cmNlL3N0eWxlcy9taWNyby13b3JsZC5zdHlsZXMubGVzc1wiO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgICBiYWNrZ3JvdW5kOiBAbXctZ3JhZGllbnQtYmx1ZS10by1ncmVlbjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcbiAgICBib3JkZXItcmFkaXVzOiBAbXVpLXJhZGl1cztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwNHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbXctY29sb3ItYmFja2dyb3VuZC1kZWZhdWx0O1xuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgbWF4LWhlaWdodDogMjEwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuXG4gICAgICAgICYtLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcblxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgICYtLW1hc2t7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmF2YXRhci10ZXh0IHtcbiAgICBjb2xvcjogQG13LWNvbG9yLWRlZmF1bHQtdGV4dC1ob3ZlcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICZfX3FvdXRlIHtcbiAgICAgICAgY29sb3I6IEBtdy1jb2xvci1wcmltYXJ5LXRleHQ7XG4gICAgfVxufVxuXG4uYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICZfX2xlZnQtY29sbHVtIHtcbiAgICAgICAgcGFkZGluZzogODZweCAxNnB4IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi13aWR0aDogMzc4cHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJvcmRlci1yaWdodDogMC41cHggc29saWQgQG13LWNvbG9yLWdyYXktNDAwO1xuXG4gICAgfVxufVxuXG4uYmxvY2s6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnVzZXItaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYXZhdGFyIHtcbiAgICB3aWR0aDogMTI4cHg7XG4gICAgaGVpZ2h0OiAxMjhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTI2cHg7XG4gICAgYm90dG9tOiAtMzAlO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC41Nik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJl9fYXZhdGFyLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICZfX2F2YXRhci1pbWcge1xuICAgICAgICB3aWR0aDogMTI4cHg7XG4gICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICZfX2VkaXQtYXZhdGFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiBAbXctY29sb3ItZGVmYXVsdC10ZXh0LWhvdmVyZWQ7XG4gICAgfVxufVxuXG4uYXZhdGFyX19hdmF0YXItY29udGVudDpob3ZlciAuYXZhdGFyX19lZGl0LWF2YXRhciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5hdmF0YXJfX2F2YXRhci1jb250ZW50OmhvdmVyIC5hdmF0YXJfX2F2YXRhci1pbWcge1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKSBibHVyKDFweCk7XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMzRweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5jYXB0aW9uIHtcbiAgICBjb2xvcjogQG13LWNvbG9yLXNlY29uZGFyeTtcbn1cblxuLmRlZmF1bHQtdGV4dC1jb2xvciB7XG4gICAgY29sb3I6IEBtdy1jb2xvci1kZWZhdWx0LXRleHQ7XG59XG5cbi5pY29uIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICAgIHJpZ2h0OiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfilePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile-page',
                templateUrl: './profile-page.component.html',
                styleUrls: ['./profile-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { avatarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['avatarElement', { static: true }]
        }], headerElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['headerImg', { static: true }]
        }], headerMaskElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['headerMask', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/profile-page/user-info/user-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile-page/user-info/user-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function UserInfoComponent_div_0_div_3_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function UserInfoComponent_div_0_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserInfoComponent_div_0_div_3_div_4_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
} }
function UserInfoComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserInfoComponent_div_0_div_3_div_4_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r5.canEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r5.value ? element_r5.value : "\u041F\u0443\u0441\u0442\u043E");
} }
function UserInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserInfoComponent_div_0_div_3_Template, 8, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.elements);
} }
function UserInfoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clipPath", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserInfoComponent {
}
UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) { return new (t || UserInfoComponent)(); };
UserInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserInfoComponent, selectors: [["app-user-info"]], inputs: { items: "items" }, decls: 3, vars: 1, consts: [["class", "block", 4, "ngFor", "ngForOf"], ["icon", ""], [1, "block"], [1, "mui-text_body-m", "caption"], ["class", "block__rows", 4, "ngFor", "ngForOf"], [1, "block__rows"], [1, "body__secondary", "mui-text_body-s"], [1, "mui-space_right-2"], ["style", "display: inline-block", 4, "ngIf"], [1, "body__about", "mui-text_body-s"], [2, "display", "inline-block"], [4, "ngTemplateOutlet"], ["width", "15", "height", "14", "viewBox", "0 0 15 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0)"], ["d", "M0.915771 11.0829V14H3.83059L12.4312 5.39266L9.51641 2.47559L0.915771 11.0829Z", "fill", "#9CA4AF"], ["d", "M14.6776 2.04388L12.8626 0.227531C12.5595 -0.0758438 12.0659 -0.0758438 11.7627 0.227531L10.3403 1.65106L13.2551 4.56813L14.6776 3.1446C14.9807 2.84123 14.9807 2.34726 14.6776 2.04388Z", "fill", "#9CA4AF"], ["id", "clip0"], ["width", "13.9892", "height", "14", "fill", "white", "transform", "translate(0.915771)"]], template: function UserInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserInfoComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserInfoComponent_ng_template_1_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n.body__left-collum[_ngcontent-%COMP%] {\n  padding: 86px 16px 16px;\n  display: flex;\n  min-width: 378px;\n  flex-direction: column;\n  border-right: 0.5px solid #3d4047;\n}\n.body__secondary[_ngcontent-%COMP%] {\n  color: #9ca4af;\n}\n.body__about[_ngcontent-%COMP%] {\n  color: #686d73;\n  margin-left: 100px;\n}\n.block[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 40px;\n}\n.block[_ngcontent-%COMP%] {\n  max-width: 396px;\n  display: flex;\n  flex-direction: column;\n}\n.block__rows[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.caption[_ngcontent-%COMP%] {\n  color: #23ba99;\n}\n.default-text-color[_ngcontent-%COMP%] {\n  color: #686d73;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL3VzZXItaW5mby9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtZGlyZWN0aW9uLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLWluZm8vdXNlci1pbmZvLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLWluZm8vRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRleHQubGVzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL3VzZXItaW5mby9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtc3BhY2VzLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLWluZm8vRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWJ1dHRvbnMubGVzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL3VzZXItaW5mby9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtY29sdW1zLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLWluZm8vRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRhYmxlLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLWluZm8vRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2FwcC9wYWdlcy9wcm9maWxlLXBhZ2UvdXNlci1pbmZvL3VzZXItaW5mby5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxtQkFBQTtBQ0NaO0FERVE7RUFDSSw4QkFBQTtBQ0FaO0FER1E7RUFDSSw2QkFBQTtBQ0RaO0FESVE7RUFDSSx5QkFBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0FDSFo7QURNUTtFQUNJLHVCQUFBO0FDSlo7QURPUTtFQUNJLHFCQUFBO0FDTFo7QURhSTtFQUNJLHNCQUFBO0FDWFI7QURhUTtFQUNJLHVCQUFBO0FDWFo7QURjUTtFQUNJLDhCQUFBO0FDWlo7QURlUTtFQUNJLDZCQUFBO0FDYlo7QURnQlE7RUFDSSxtQkFBQTtBQ2RaO0FEaUJTO0VBQ0kseUJBQUE7QUNmYjtBRGtCUTtFQUNJLHFCQUFBO0FDaEJaO0FEbUJRO0VBQ0ksdUJBQUE7QUNqQlo7QURvQlE7RUFDSSxxQkFBQTtBQ2xCWjtBRHVCSTtFQUNJLGVBQUE7QUNyQlI7QUQwQkE7RUFDSSxXQUFBO0FDeEJKO0FDM0RBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBRDZESjtBQzNESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FENkRSO0FDMURJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUQ0RFI7QUN6REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUQyRFI7QUN4REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUQwRFI7QUN2REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUR5RFI7QUN0REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUR3RFI7QUNyREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUR1RFI7QUNwREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURzRFI7QUNuREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURxRFI7QUNsREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURvRFI7QUNqREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURtRFI7QUNoREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURrRFI7QUMvQ0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURpRFI7QUM5Q0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURnRFI7QUM3Q0k7RUFDSSxpQkFBQTtBRCtDUjtBQzNDSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBRDZDUjtBQzNDUTtFQUNJLFlBQUE7RUFDQSxxQ0FBQTtBRDZDWjtBQzFDUTtFQUNJLFVBQUE7RUFDQSxxQ0FBQTtBRDRDWjtBQ3BDQTtFQUNJLFlBQUE7RUFDQSw0Q0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QURxQ0o7QUNuQ0k7RUFDSSxVQUFBO0VBQ0EsNENBQUE7RUFFQSxnQ0FBQTtBRG9DUjtBQ2hDQTtFQUNJLFVBQUE7RUFDQSw0Q0FBQTtFQUVBLGdDQUFBO0FEaUNKO0FDOUJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURnQ0o7QUM3QkE7RUFDSSx5QkFBQTtFQUNBLGtDQUFBO0FEK0JKO0FFck5BO0VGdU5FLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUV4Tkk7RUFDSSxlQUFBO0FGME5SO0FFdk5JO0VBQ0ksaUJBQUE7QUZ5TlI7QUV0Tkk7RUFDSSxpQkFBQTtBRndOUjtBRXJOSTtFQUNJLGtCQUFBO0FGdU5SO0FFcE5JO0VBQ0ksa0JBQUE7QUZzTlI7QUVuTkk7RUFDSSxrQkFBQTtBRnFOUjtBRWxOSTtFQUNJLGtCQUFBO0FGb05SO0FFak5JO0VBQ0ksa0JBQUE7QUZtTlI7QUVoTkk7RUFDSSxrQkFBQTtBRmtOUjtBRS9NSTtFQUNJLGtCQUFBO0FGaU5SO0FFOU1JO0VBQ0ksa0JBQUE7QUZnTlI7QUUzTUk7RUFDSSxjQUFBO0FGNk1SO0FFMU1JO0VBQ0ksZ0JBQUE7QUY0TVI7QUV6TUk7RUFDSSxnQkFBQTtBRjJNUjtBRXhNSTtFQUNJLGlCQUFBO0FGME1SO0FFdk1JO0VBQ0ksaUJBQUE7QUZ5TVI7QUV0TUk7RUFDSSxpQkFBQTtBRndNUjtBRXJNSTtFQUNJLGlCQUFBO0FGdU1SO0FFcE1JO0VBQ0ksaUJBQUE7QUZzTVI7QUVuTUk7RUFDSSxpQkFBQTtBRnFNUjtBRWxNSTtFQUNJLGlCQUFBO0FGb01SO0FFak1JO0VBQ0ksaUJBQUE7QUZtTVI7QUU5TEk7RUFDSSxnQkFBQTtBRmdNUjtBRTdMSTtFQUNJLGtCQUFBO0FGK0xSO0FFNUxJO0VBQ0ksa0JBQUE7QUY4TFI7QUUzTEk7RUFDSSxtQkFBQTtBRjZMUjtBRTFMSTtFQUNJLG1CQUFBO0FGNExSO0FFekxJO0VBQ0ksbUJBQUE7QUYyTFI7QUV4TEk7RUFDSSxtQkFBQTtBRjBMUjtBRXZMSTtFQUNJLG1CQUFBO0FGeUxSO0FFdExJO0VBQ0ksbUJBQUE7QUZ3TFI7QUVyTEk7RUFDSSxtQkFBQTtBRnVMUjtBRXBMSTtFQUNJLG1CQUFBO0FGc0xSO0FFakxJO0VBQ0ksYUFBQTtBRm1MUjtBRWhMSTtFQUNJLGVBQUE7QUZrTFI7QUUvS0k7RUFDSSxlQUFBO0FGaUxSO0FFOUtJO0VBQ0ksZ0JBQUE7QUZnTFI7QUU3S0k7RUFDSSxnQkFBQTtBRitLUjtBRTVLSTtFQUNJLGdCQUFBO0FGOEtSO0FFM0tJO0VBQ0ksZ0JBQUE7QUY2S1I7QUUxS0k7RUFDSSxnQkFBQTtBRjRLUjtBRXpLSTtFQUNJLGdCQUFBO0FGMktSO0FFeEtJO0VBQ0ksZ0JBQUE7QUYwS1I7QUV2S0k7RUFDSSxnQkFBQTtBRnlLUjtBRy9WQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FIaVdKO0FHN1ZRO0VBQ0ksa0RBQUE7QUgrVlo7QUc1VlE7RUFDSSwwQ0FBQTtBSDhWWjtBRzNWUTtFQUNJLFlBQUE7QUg2Vlo7QUcxVlE7RUFDSSxrREFBQTtFQUNBLDZCQUFBO0FINFZaO0FHelZRO0VBQ0ksMENBQUE7RUFDQSw2QkFBQTtBSDJWWjtBR3hWUTtFQUNJLG9EQUFBO0FIMFZaO0FHdlZRO0VBQ0ksNENBQUE7QUh5Vlo7QUdyVlE7RUFDSSxnREFBQTtBSHVWWjtBR3BWUTtFQUNJLHdDQUFBO0VBQ0EsNkJBQUE7QUhzVlo7QUduVlE7RUFDSSwrQ0FBQTtBSHFWWjtBR2xWUTtFQUNJLHVDQUFBO0VBQ0EsNkJBQUE7QUhvVlo7QUcvVVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSGdWWjtBRzdVUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FIOFVaO0FHM1VRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUg0VVo7QUd2VUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUh5VUo7QUd0VUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUh3VUo7QUlqYUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FKbWFSO0FLemFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUwyYUo7QUt4YUE7RUFDSSxnQ0FBQTtBTDBhSjtBS3ZhQTs7RUFHSSxzQkFBQTtFQUNBLGdCQUFBO0FMeWFKO0FLdGFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBTHdhSjtBS3JhQTtFQUVJLCtCQUFBO0VBRUEseUJBQUE7RUFFQSx1Q0FBQTtFQUNBLFVBQUE7QUx1YUo7QUtwYUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUxzYUo7QUtuYUE7RUFDSSxtQkFBQTtBTHFhSjtBS2xhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBTG9hSjtBS2phQTtFQUNJLG1CQUFBO0FMbWFKO0FLaGFBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUxrYUo7QUsvWkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTGlhSjtBSzlaQTtFQUNJLDZCQUFBO0FMZ2FKO0FLN1pBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwrWko7QUs1WkE7O0VBRUksWUFBQTtBTDhaSjtBSzNaQTtFQUNJLGVBQUE7QUw2Wko7QUsxWkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTDRaSjtBS3paQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMMlpKO0FLeFpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwwWko7QUt2WkE7RUFDSSxzQkFBQTtBTHlaSjtBS3RaQTs7RUFFSSxlQUFBO0FMd1pKO0FLclpBOztFQUVJLGdCQUFBO0FMdVpKO0FLcFpBOztFQUVJLGtCQUFBO0FMc1pKO0FLblpBOztFQUVJLGlCQUFBO0FMcVpKO0FLbFpBOztFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBTG9aSjtBTWhqQkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FOa2pCSjtBTWhqQkk7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QU5rakJSO0FNOWlCSTtFQUNJLGNBQUE7QU5nakJSO0FNN2lCSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBTitpQlI7QU0zaUJBO0VBQ0ksbUJBQUE7QU42aUJKO0FNMWlCQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FONGlCSjtBTTFpQkk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QU40aUJSO0FNeGlCQTtFQUNJLGNBQUE7QU4waUJKO0FNdmlCQTtFQUNJLGNBQUE7QU55aUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL3VzZXItaW5mby91c2VyLWluZm8ubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJl9ob3Jpem9udGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfd3JhcCB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFzZWxpbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiAgICAmX3ZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWxlZnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgJl93cmFwIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbn1cblxuXG4uZnVsbC1zaXplIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mbGV4X2hvcml6b250YWwge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZsZXhfaG9yaXpvbnRhbC1taWRkbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5mbGV4X2hvcml6b250YWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2hvcml6b250YWxfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mbGV4X2hvcml6b250YWwtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF9ob3Jpem9udGFsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfdmVydGljYWwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXhfdmVydGljYWwtbWlkZGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF92ZXJ0aWNhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfdmVydGljYWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmZsZXhfdmVydGljYWwtbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZsZXhfdmVydGljYWwtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZmxleF93cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZ1bGwtc2l6ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm11aS10ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2gxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g1IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9ib2R5LXhsIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktcyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvZHkteHMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tdWktdGV4dF9saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5tdWktdGV4dF9saW5rLWhvdmVyZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5yb3V0ZXJfbGluayB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3V0ZXJfbGluay1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG59XG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuLm11aS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tdWktc3BhY2Uge1xuICAvKiBSSUdIVCBTUEFDRSAqL1xuICAvKiBMRUZUIFNQQUNFICovXG4gIC8qIEJPVFRPTSBTUEFDRSAqL1xuICAvKiBUT1AgU1BBQ0UgKi9cbn1cbi5tdWktc3BhY2VfcmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTMge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTYge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTcge1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTgge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTkge1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTAge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5tdWktc3BhY2VfbGVmdC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC02IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNyB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi5tdWktc3BhY2VfbGVmdC05IHtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm11aS1zcGFjZV9ib3R0b20tMSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS02IHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTcge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS05IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5tdWktc3BhY2VfdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm11aS1zcGFjZV90b3AtMSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0zIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tdWktc3BhY2VfdG9wLTQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLm11aS1zcGFjZV90b3AtNSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC02IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTcge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLm11aS1zcGFjZV90b3AtOCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4ubXVpLXNwYWNlX3RvcC05IHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5tdWktYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9zaXplLWwge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtbSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25fc2l6ZS1zIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWNvbF9tZC0zIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxudGFibGUubXVpLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjOTU5YmE0O1xufVxuLm11aS10YWJsZV9fdHIge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgb3V0bGluZTogMDtcbn1cbi5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzMzMztcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgY29sb3I6ICM3OTgxOGM7XG59XG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGhlaWdodDogNzlweDtcbn1cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ib2R5X19sZWZ0LWNvbGx1bSB7XG4gIHBhZGRpbmc6IDg2cHggMTZweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDM3OHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICMzZDQwNDc7XG59XG4uYm9keV9fc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICM5Y2E0YWY7XG59XG4uYm9keV9fYWJvdXQge1xuICBjb2xvcjogIzY4NmQ3MztcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuLmJsb2NrOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmJsb2NrIHtcbiAgbWF4LXdpZHRoOiAzOTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ibG9ja19fcm93cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jYXB0aW9uIHtcbiAgY29sb3I6ICMyM2JhOTk7XG59XG4uZGVmYXVsdC10ZXh0LWNvbG9yIHtcbiAgY29sb3I6ICM2ODZkNzM7XG59XG4iLCIubXVpLXRleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gICAgJl9oMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gyIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDMge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDQge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfYm9keS14bCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbF9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW0ge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1zIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS1zX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHkteHMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG5cbiAgICAmX2xpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgICAgICYtaG92ZXJlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWhvdmVyZWQ6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICAgICAgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuLnJvdXRlcl9saW5rIHtcbiAgICBvcGFjaXR5OiAuNztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICYtYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xuICAgIH1cbn1cblxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuXG4ubXVpLWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gICAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG59XG4iLCIubXVpLXNwYWNlIHtcbiAgICAvKiBSSUdIVCBTUEFDRSAqL1xuXG4gICAgJl9yaWdodC0wIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICZfcmlnaHQtMSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC01IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC04IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEwIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIExFRlQgU1BBQ0UgKi9cblxuICAgICZfbGVmdC0wIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0yIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC00IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC03IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTgge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC0xMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIEJPVFRPTSBTUEFDRSAqL1xuXG4gICAgJl9ib3R0b20tMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0yIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTgge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTEwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAvKiBUT1AgU1BBQ0UgKi9cblxuICAgICZfdG9wLTAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgICZfdG9wLTEge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG5cbiAgICAmX3RvcC0zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAmX3RvcC00IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAmX3RvcC01IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAmX3RvcC02IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAmX3RvcC03IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB9XG5cbiAgICAmX3RvcC04IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAmX3RvcC05IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICB9XG5cbiAgICAmX3RvcC0xMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxufVxuIiwiLm11aS1idXR0b24ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG5cblxuICAgICZfY29sb3Ige1xuICAgICAgICAmLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeVtkaXNhYmxlZF0ge1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3M6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3Mge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG5cblxuICAgICAgICAmLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWVycm9yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8taG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8pO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX3NpemUge1xuICAgICAgICAmLWwge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1tIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcyB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwibFwiXSB7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwic1wiXSB7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4iLCIubXVpLWNvbCB7XG5cbiAgICAmX21kLTMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuIiwidGFibGUubXVpLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfYm9yZGVyX25vbmUpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjOTU5YmE0O1xufVxuXG4ubXVpLXRhYmxlX190ciB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG59XG5cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiA0cHggMCAwO1xuICAgIGNvbG9yOiAjNzk4MThjO1xufVxuXG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX3NpemVfbCxcbi5tdWktdGFibGVfc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBoZWlnaHQ6IDc5cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm11aS10YWJsZV9fdGRfZmlyc3QsXG4ubXVpLXRhYmxlX190aF9maXJzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X3JpZ2h0LFxuLm11aS10YWJsZV9fdGhfdGV4dF9yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtbGlicmFyeS5sZXNzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbWljcm8td29ybGQuc3R5bGVzLmxlc3NcIjtcblxuLmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmX19sZWZ0LWNvbGx1bSB7XG4gICAgICAgIHBhZGRpbmc6IDg2cHggMTZweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtaW4td2lkdGg6IDM3OHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIEBtdy1jb2xvci1ncmF5LTQwMDtcblxuICAgIH1cblxuICAgICZfX3NlY29uZGFyeSB7XG4gICAgICAgIGNvbG9yOiBAbXctY29sb3ItcHJpbWFyeS10ZXh0O1xuICAgIH1cblxuICAgICZfX2Fib3V0IHtcbiAgICAgICAgY29sb3I6IEBtdy1jb2xvci1kZWZhdWx0LXRleHQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICB9XG59XG5cbi5ibG9jazpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uYmxvY2sge1xuICAgIG1heC13aWR0aDogMzk2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJl9fcm93cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG59XG5cbi5jYXB0aW9uIHtcbiAgICBjb2xvcjogQG13LWNvbG9yLXNlY29uZGFyeTtcbn1cblxuLmRlZmF1bHQtdGV4dC1jb2xvciB7XG4gICAgY29sb3I6IEBtdy1jb2xvci1kZWZhdWx0LXRleHQ7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-info',
                templateUrl: './user-info.component.html',
                styleUrls: ['../../profile-page/user-info/user-info.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/profile-page/user-projects-preview/user-projects-preview.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/profile-page/user-projects-preview/user-projects-preview.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UserProjectsPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectsPreviewComponent", function() { return UserProjectsPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function UserProjectsPreviewComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r5.name, " ");
} }
function UserProjectsPreviewComponent_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r6.name, " ");
} }
function UserProjectsPreviewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserProjectsPreviewComponent_div_5_div_2_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserProjectsPreviewComponent_div_5_div_5_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 2, ctx_r0.projects, 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 6, ctx_r0.projects, 3, 6));
} }
function UserProjectsPreviewComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0422\u0443\u0442 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserProjectsPreviewComponent {
    showAllProjects() {
        console.log('Work!');
    }
}
UserProjectsPreviewComponent.ɵfac = function UserProjectsPreviewComponent_Factory(t) { return new (t || UserProjectsPreviewComponent)(); };
UserProjectsPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProjectsPreviewComponent, selectors: [["app-user-projects-preview"]], inputs: { projects: "projects" }, decls: 8, vars: 2, consts: [[1, "space-between"], [1, "secondary", "mui-text_body-xl"], [1, "watch-all", 3, "click"], ["class", "project-content", 4, "ngIf", "ngIfElse"], ["noContentTemplate", ""], [1, "project-content"], [1, "rows", "flex"], ["class", "project-content__secondary-items center", 4, "ngFor", "ngForOf"], [1, "rows", "flex", "mui-space_top-3"], [1, "project-content__secondary-items", "center"], ["src", ""], [1, "project-content__secondary-items--mask"], [1, "mui-text_h5", "default-text-color", "no-content"]], template: function UserProjectsPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProjectsPreviewComponent_Template_div_click_3_listener() { return ctx.showAllProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0451");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserProjectsPreviewComponent_div_5_Template, 7, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserProjectsPreviewComponent_ng_template_6_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]], styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.project-content[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n.project-content__secondary-items[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 4px;\n  background-color: grey;\n  cursor: pointer;\n}\n.project-content__secondary-items--mask[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  opacity: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transform: translateY(10px);\n  transition: 0.1s ease-in-out;\n}\n.project-content__secondary-items[_ngcontent-%COMP%]:hover   .project-content__secondary-items--mask[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0px);\n  transition: 0.2s ease-in-out;\n}\n.no-content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.default-text-color[_ngcontent-%COMP%] {\n  color: #686d73;\n}\n.secondary[_ngcontent-%COMP%] {\n  color: #23ba99;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.rows[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  width: 100%;\n}\n.space-between[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.watch-all[_ngcontent-%COMP%] {\n  margin-left: 28px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL3VzZXItcHJvamVjdHMtcHJldmlldy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtZGlyZWN0aW9uLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLXByb2plY3RzLXByZXZpZXcvdXNlci1wcm9qZWN0cy1wcmV2aWV3Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLXByb2plY3RzLXByZXZpZXcvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRleHQubGVzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL3VzZXItcHJvamVjdHMtcHJldmlldy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtc3BhY2VzLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLXByb2plY3RzLXByZXZpZXcvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWJ1dHRvbnMubGVzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL3VzZXItcHJvamVjdHMtcHJldmlldy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtY29sdW1zLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLXByb2plY3RzLXByZXZpZXcvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRhYmxlLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLXByb2plY3RzLXByZXZpZXcvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2FwcC9wYWdlcy9wcm9maWxlLXBhZ2UvdXNlci1wcm9qZWN0cy1wcmV2aWV3L3VzZXItcHJvamVjdHMtcHJldmlldy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxtQkFBQTtBQ0NaO0FERVE7RUFDSSw4QkFBQTtBQ0FaO0FER1E7RUFDSSw2QkFBQTtBQ0RaO0FESVE7RUFDSSx5QkFBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0FDSFo7QURNUTtFQUNJLHVCQUFBO0FDSlo7QURPUTtFQUNJLHFCQUFBO0FDTFo7QURhSTtFQUNJLHNCQUFBO0FDWFI7QURhUTtFQUNJLHVCQUFBO0FDWFo7QURjUTtFQUNJLDhCQUFBO0FDWlo7QURlUTtFQUNJLDZCQUFBO0FDYlo7QURnQlE7RUFDSSxtQkFBQTtBQ2RaO0FEaUJTO0VBQ0kseUJBQUE7QUNmYjtBRGtCUTtFQUNJLHFCQUFBO0FDaEJaO0FEbUJRO0VBQ0ksdUJBQUE7QUNqQlo7QURvQlE7RUFDSSxxQkFBQTtBQ2xCWjtBRHVCSTtFQUNJLGVBQUE7QUNyQlI7QUQwQkE7RUFDSSxXQUFBO0FDeEJKO0FDM0RBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBRDZESjtBQzNESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FENkRSO0FDMURJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUQ0RFI7QUN6REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUQyRFI7QUN4REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUQwRFI7QUN2REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUR5RFI7QUN0REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUR3RFI7QUNyREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUR1RFI7QUNwREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURzRFI7QUNuREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURxRFI7QUNsREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURvRFI7QUNqREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURtRFI7QUNoREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURrRFI7QUMvQ0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURpRFI7QUM5Q0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURnRFI7QUM3Q0k7RUFDSSxpQkFBQTtBRCtDUjtBQzNDSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBRDZDUjtBQzNDUTtFQUNJLFlBQUE7RUFDQSxxQ0FBQTtBRDZDWjtBQzFDUTtFQUNJLFVBQUE7RUFDQSxxQ0FBQTtBRDRDWjtBQ3BDQTtFQUNJLFlBQUE7RUFDQSw0Q0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QURxQ0o7QUNuQ0k7RUFDSSxVQUFBO0VBQ0EsNENBQUE7RUFFQSxnQ0FBQTtBRG9DUjtBQ2hDQTtFQUNJLFVBQUE7RUFDQSw0Q0FBQTtFQUVBLGdDQUFBO0FEaUNKO0FDOUJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURnQ0o7QUM3QkE7RUFDSSx5QkFBQTtFQUNBLGtDQUFBO0FEK0JKO0FFck5BO0VGdU5FLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUV4Tkk7RUFDSSxlQUFBO0FGME5SO0FFdk5JO0VBQ0ksaUJBQUE7QUZ5TlI7QUV0Tkk7RUFDSSxpQkFBQTtBRndOUjtBRXJOSTtFQUNJLGtCQUFBO0FGdU5SO0FFcE5JO0VBQ0ksa0JBQUE7QUZzTlI7QUVuTkk7RUFDSSxrQkFBQTtBRnFOUjtBRWxOSTtFQUNJLGtCQUFBO0FGb05SO0FFak5JO0VBQ0ksa0JBQUE7QUZtTlI7QUVoTkk7RUFDSSxrQkFBQTtBRmtOUjtBRS9NSTtFQUNJLGtCQUFBO0FGaU5SO0FFOU1JO0VBQ0ksa0JBQUE7QUZnTlI7QUUzTUk7RUFDSSxjQUFBO0FGNk1SO0FFMU1JO0VBQ0ksZ0JBQUE7QUY0TVI7QUV6TUk7RUFDSSxnQkFBQTtBRjJNUjtBRXhNSTtFQUNJLGlCQUFBO0FGME1SO0FFdk1JO0VBQ0ksaUJBQUE7QUZ5TVI7QUV0TUk7RUFDSSxpQkFBQTtBRndNUjtBRXJNSTtFQUNJLGlCQUFBO0FGdU1SO0FFcE1JO0VBQ0ksaUJBQUE7QUZzTVI7QUVuTUk7RUFDSSxpQkFBQTtBRnFNUjtBRWxNSTtFQUNJLGlCQUFBO0FGb01SO0FFak1JO0VBQ0ksaUJBQUE7QUZtTVI7QUU5TEk7RUFDSSxnQkFBQTtBRmdNUjtBRTdMSTtFQUNJLGtCQUFBO0FGK0xSO0FFNUxJO0VBQ0ksa0JBQUE7QUY4TFI7QUUzTEk7RUFDSSxtQkFBQTtBRjZMUjtBRTFMSTtFQUNJLG1CQUFBO0FGNExSO0FFekxJO0VBQ0ksbUJBQUE7QUYyTFI7QUV4TEk7RUFDSSxtQkFBQTtBRjBMUjtBRXZMSTtFQUNJLG1CQUFBO0FGeUxSO0FFdExJO0VBQ0ksbUJBQUE7QUZ3TFI7QUVyTEk7RUFDSSxtQkFBQTtBRnVMUjtBRXBMSTtFQUNJLG1CQUFBO0FGc0xSO0FFakxJO0VBQ0ksYUFBQTtBRm1MUjtBRWhMSTtFQUNJLGVBQUE7QUZrTFI7QUUvS0k7RUFDSSxlQUFBO0FGaUxSO0FFOUtJO0VBQ0ksZ0JBQUE7QUZnTFI7QUU3S0k7RUFDSSxnQkFBQTtBRitLUjtBRTVLSTtFQUNJLGdCQUFBO0FGOEtSO0FFM0tJO0VBQ0ksZ0JBQUE7QUY2S1I7QUUxS0k7RUFDSSxnQkFBQTtBRjRLUjtBRXpLSTtFQUNJLGdCQUFBO0FGMktSO0FFeEtJO0VBQ0ksZ0JBQUE7QUYwS1I7QUV2S0k7RUFDSSxnQkFBQTtBRnlLUjtBRy9WQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FIaVdKO0FHN1ZRO0VBQ0ksa0RBQUE7QUgrVlo7QUc1VlE7RUFDSSwwQ0FBQTtBSDhWWjtBRzNWUTtFQUNJLFlBQUE7QUg2Vlo7QUcxVlE7RUFDSSxrREFBQTtFQUNBLDZCQUFBO0FINFZaO0FHelZRO0VBQ0ksMENBQUE7RUFDQSw2QkFBQTtBSDJWWjtBR3hWUTtFQUNJLG9EQUFBO0FIMFZaO0FHdlZRO0VBQ0ksNENBQUE7QUh5Vlo7QUdyVlE7RUFDSSxnREFBQTtBSHVWWjtBR3BWUTtFQUNJLHdDQUFBO0VBQ0EsNkJBQUE7QUhzVlo7QUduVlE7RUFDSSwrQ0FBQTtBSHFWWjtBR2xWUTtFQUNJLHVDQUFBO0VBQ0EsNkJBQUE7QUhvVlo7QUcvVVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSGdWWjtBRzdVUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FIOFVaO0FHM1VRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUg0VVo7QUd2VUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUh5VUo7QUd0VUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUh3VUo7QUlqYUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FKbWFSO0FLemFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUwyYUo7QUt4YUE7RUFDSSxnQ0FBQTtBTDBhSjtBS3ZhQTs7RUFHSSxzQkFBQTtFQUNBLGdCQUFBO0FMeWFKO0FLdGFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBTHdhSjtBS3JhQTtFQUVJLCtCQUFBO0VBRUEseUJBQUE7RUFFQSx1Q0FBQTtFQUNBLFVBQUE7QUx1YUo7QUtwYUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUxzYUo7QUtuYUE7RUFDSSxtQkFBQTtBTHFhSjtBS2xhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBTG9hSjtBS2phQTtFQUNJLG1CQUFBO0FMbWFKO0FLaGFBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUxrYUo7QUsvWkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTGlhSjtBSzlaQTtFQUNJLDZCQUFBO0FMZ2FKO0FLN1pBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwrWko7QUs1WkE7O0VBRUksWUFBQTtBTDhaSjtBSzNaQTtFQUNJLGVBQUE7QUw2Wko7QUsxWkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTDRaSjtBS3paQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMMlpKO0FLeFpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwwWko7QUt2WkE7RUFDSSxzQkFBQTtBTHlaSjtBS3RaQTs7RUFFSSxlQUFBO0FMd1pKO0FLclpBOztFQUVJLGdCQUFBO0FMdVpKO0FLcFpBOztFQUVJLGtCQUFBO0FMc1pKO0FLblpBOztFQUVJLGlCQUFBO0FMcVpKO0FLbFpBOztFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBTG9aSjtBTWhqQkE7RUFDSSxjQUFBO0FOa2pCSjtBTS9pQkE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBTmlqQko7QU0vaUJJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBTmlqQlI7QU0vaUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FOaWpCWjtBTTdpQkk7RUFDSSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBTitpQlI7QU0zaUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FONmlCSjtBTTFpQkE7RUFDSSxjQUFBO0FONGlCSjtBTXppQkE7RUFDSSxjQUFBO0FOMmlCSjtBTXhpQkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBTjBpQko7QU12aUJBO0VBQ0ksOEJBQUE7RUFDQSxXQUFBO0FOeWlCSjtBTXRpQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QU53aUJKO0FNcmlCQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FOdWlCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS91c2VyLXByb2plY3RzLXByZXZpZXcvdXNlci1wcm9qZWN0cy1wcmV2aWV3Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICZfaG9yaXpvbnRhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmX3dyYXAge1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jZW50ZXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxuXG4gICAgJl92ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgfVxuXG4gICAgICAgICYtcmlnaHQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICZfd3JhcCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG59XG5cblxuLmZ1bGwtc2l6ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleF9ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4X2hvcml6b250YWwtbWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X2hvcml6b250YWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF9ob3Jpem9udGFsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF9ob3Jpem9udGFsX3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleF9ob3Jpem9udGFsLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3ZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLW1pZGRsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfdmVydGljYWwtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mdWxsLXNpemUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tdWktdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9oMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2gzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDQge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfYm9keS14bCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWwge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1sX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW0ge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1tX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LXMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9keS1zX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXhzIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubXVpLXRleHRfbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm11aS10ZXh0X2xpbmstaG92ZXJlZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucm91dGVyX2xpbmsge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDAgOHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucm91dGVyX2xpbmstYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xufVxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cbi5tdWktbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXNwYWNlIHtcbiAgLyogUklHSFQgU1BBQ0UgKi9cbiAgLyogTEVGVCBTUEFDRSAqL1xuICAvKiBCT1RUT00gU1BBQ0UgKi9cbiAgLyogVE9QIFNQQUNFICovXG59XG4ubXVpLXNwYWNlX3JpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC02IHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC03IHtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC04IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC05IHtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0xMCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubXVpLXNwYWNlX2xlZnQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5tdWktc3BhY2VfbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNiB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTcge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtOSB7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMyB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS00IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS03IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTgge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOSB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC0wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5tdWktc3BhY2VfdG9wLTEge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0yIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm11aS1zcGFjZV90b3AtMyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubXVpLXNwYWNlX3RvcC00IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm11aS1zcGFjZV90b3AtNiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC03IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5tdWktc3BhY2VfdG9wLTgge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLm11aS1zcGFjZV90b3AtOSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm11aS1idXR0b25fY29sb3Itc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fc2l6ZS1sIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubXVpLWJ1dHRvbl9zaXplLW0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtcyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1jb2xfbWQtMyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnRhYmxlLm11aS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzk1OWJhNDtcbn1cbi5tdWktdGFibGVfX3RyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IDA7XG59XG4ubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogNTVweDtcbiAgY29sb3I6ICMzMzM7XG59XG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGNvbG9yOiAjNzk4MThjO1xufVxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBoZWlnaHQ6IDc5cHg7XG59XG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcm9qZWN0LWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvamVjdC1jb250ZW50X19zZWNvbmRhcnktaXRlbXMge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2plY3QtY29udGVudF9fc2Vjb25kYXJ5LWl0ZW1zLS1tYXNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBvcGFjaXR5OiAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xufVxuLnByb2plY3QtY29udGVudF9fc2Vjb25kYXJ5LWl0ZW1zOmhvdmVyIC5wcm9qZWN0LWNvbnRlbnRfX3NlY29uZGFyeS1pdGVtcy0tbWFzayB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLm5vLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRlZmF1bHQtdGV4dC1jb2xvciB7XG4gIGNvbG9yOiAjNjg2ZDczO1xufVxuLnNlY29uZGFyeSB7XG4gIGNvbG9yOiAjMjNiYTk5O1xufVxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucm93cyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2F0Y2gtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4iLCIubXVpLXRleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gICAgJl9oMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gyIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDMge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDQge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfYm9keS14bCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbF9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW0ge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1zIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS1zX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHkteHMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG5cbiAgICAmX2xpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgICAgICYtaG92ZXJlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWhvdmVyZWQ6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICAgICAgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuLnJvdXRlcl9saW5rIHtcbiAgICBvcGFjaXR5OiAuNztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICYtYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xuICAgIH1cbn1cblxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuXG4ubXVpLWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gICAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG59XG4iLCIubXVpLXNwYWNlIHtcbiAgICAvKiBSSUdIVCBTUEFDRSAqL1xuXG4gICAgJl9yaWdodC0wIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICZfcmlnaHQtMSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC01IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC04IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEwIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIExFRlQgU1BBQ0UgKi9cblxuICAgICZfbGVmdC0wIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0yIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC00IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC03IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTgge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC0xMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIEJPVFRPTSBTUEFDRSAqL1xuXG4gICAgJl9ib3R0b20tMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0yIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTgge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTEwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAvKiBUT1AgU1BBQ0UgKi9cblxuICAgICZfdG9wLTAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgICZfdG9wLTEge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG5cbiAgICAmX3RvcC0zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAmX3RvcC00IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAmX3RvcC01IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAmX3RvcC02IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAmX3RvcC03IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB9XG5cbiAgICAmX3RvcC04IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAmX3RvcC05IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICB9XG5cbiAgICAmX3RvcC0xMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxufVxuIiwiLm11aS1idXR0b24ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG5cblxuICAgICZfY29sb3Ige1xuICAgICAgICAmLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeVtkaXNhYmxlZF0ge1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3M6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3Mge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG5cblxuICAgICAgICAmLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWVycm9yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8taG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8pO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX3NpemUge1xuICAgICAgICAmLWwge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1tIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcyB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwibFwiXSB7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwic1wiXSB7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4iLCIubXVpLWNvbCB7XG5cbiAgICAmX21kLTMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuIiwidGFibGUubXVpLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfYm9yZGVyX25vbmUpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjOTU5YmE0O1xufVxuXG4ubXVpLXRhYmxlX190ciB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG59XG5cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiA0cHggMCAwO1xuICAgIGNvbG9yOiAjNzk4MThjO1xufVxuXG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX3NpemVfbCxcbi5tdWktdGFibGVfc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBoZWlnaHQ6IDc5cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm11aS10YWJsZV9fdGRfZmlyc3QsXG4ubXVpLXRhYmxlX190aF9maXJzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X3JpZ2h0LFxuLm11aS10YWJsZV9fdGhfdGV4dF9yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtbGlicmFyeS5sZXNzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbWljcm8td29ybGQuc3R5bGVzLmxlc3NcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvamVjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICZfX3NlY29uZGFyeS1pdGVtcyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQG11aS1yYWRpdXM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmLS1tYXNrIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDsgICAgICAgICAgIFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19zZWNvbmRhcnktaXRlbXM6aG92ZXIgLnByb2plY3QtY29udGVudF9fc2Vjb25kYXJ5LWl0ZW1zLS1tYXNrIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG59XG5cbi5uby1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGVmYXVsdC10ZXh0LWNvbG9yIHtcbiAgICBjb2xvcjogQG13LWNvbG9yLWRlZmF1bHQtdGV4dDtcbn1cblxuLnNlY29uZGFyeSB7XG4gICAgY29sb3I6IEBtdy1jb2xvci1zZWNvbmRhcnk7XG59XG5cbi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucm93cyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc3BhY2UtYmV0d2VlbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53YXRjaC1hbGx7XG4gICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProjectsPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-projects-preview',
                templateUrl: './user-projects-preview.component.html',
                styleUrls: ['.././user-projects-preview/user-projects-preview.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { projects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _web_web_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web/web.component */ "./src/app/shared/components/header/web/web.component.ts");



class HeaderComponent {
    // @ViewChild('dropContent', { static: true })
    // element: ElementRef<HTMLElement>;
    // public title = 'micro-world';
    // public isVisible = false;
    // public active$ = new BehaviorSubject<boolean>(false);
    // public style$: Observable<Record<string, string>>
    //     = this.active$.pipe(
    //         switchMap((result: boolean) => {
    //             if (!result) {
    //                 return of({ 'background-color': '#686d73' });
    //             }
    //             return of({ 'background-color': '#23ba99' });
    //         })
    //     );
    // private sliderOffsetHeight: number;
    constructor(changeDetectorRef, renderer) {
        this.renderer = renderer;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // console.log(this.element);
        // this.sliderOffsetHeight = this.element.nativeElement.offsetHeight;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["mw-header"]], decls: 1, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-web");
    } }, directives: [_web_web_component__WEBPACK_IMPORTED_MODULE_1__["WebComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 100;\n  width: 100%;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.icon-button[_ngcontent-%COMP%] {\n  color: #686d73;\n  transition-property: color;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n.icon-button.active[_ngcontent-%COMP%] {\n  color: #23ba99;\n  transition-property: color;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n@media screen and (max-width: 375px) {\n  .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .logo-mobile[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #20ffe5;\n    font-family: 'Roboto Bold';\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 30px;\n  }\n  .header-box[_ngcontent-%COMP%] {\n    max-width: 375px;\n    width: 100%;\n    min-height: 60px;\n    max-height: 60px;\n    display: flex;\n    position: relative;\n  }\n  .fixed-panel[_ngcontent-%COMP%] {\n    position: fixed;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    background-color: #3D4047;\n    padding: 0 16px;\n    min-height: 60px;\n    max-height: 60px;\n    z-index: 100;\n    box-sizing: border-box;\n    max-width: inherit;\n  }\n  .mobileContent[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n  }\n  #slider_menu[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    width: 100%;\n    position: fixed;\n    padding: 12px 12px 20px;\n    margin-top: 60px;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);\n    z-index: 99;\n    background-color: #15161a;\n  }\n  #slider_menu[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 20px;\n  }\n  .menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 19px;\n    color: #9ca4af;\n    text-decoration: none;\n    font-family: 'Roboto Regular';\n  }\n  .menu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n    color: #23ba99;\n  }\n  .menu-list[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 20px;\n  }\n  button.icon-button[_ngcontent-%COMP%] {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n  }\n  .avatar-container[_ngcontent-%COMP%] {\n    min-height: 70px;\n    max-height: 70px;\n  }\n  .avatar-box[_ngcontent-%COMP%] {\n    min-height: inherit;\n    max-height: inherit;\n    border-bottom: 1px solid #2b2c31;\n    position: relative;\n  }\n  .overview-box[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12px;\n    top: 0;\n    color: #9ca4af;\n    cursor: pointer;\n    width: 24px;\n    height: 24px;\n  }\n  .avatar-img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    max-width: 50px;\n    max-height: 50px;\n    min-width: 50px;\n    min-height: 50px;\n    box-sizing: border-box;\n    border: 2px solid transparent;\n    background-image: url('avatar.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin-right: 12px;\n    transition: border 0.3s ease-in-out;\n  }\n  .avatar-img[_ngcontent-%COMP%]:hover {\n    border: 2px solid #23ba99;\n    transition: border 0.3s ease-in-out;\n  }\n}\n@media screen and (min-width: 376px) {\n  .header-box[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n    min-height: 60px;\n    max-height: 60px;\n    overflow: hidden;\n    background-color: #3D4047;\n    display: flex;\n    position: relative;\n  }\n  .logo[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .logo-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .fixed-panel[_ngcontent-%COMP%] {\n    position: fixed;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    background-color: #3D4047;\n    padding: 0 16px;\n    min-height: 60px;\n    max-height: 60px;\n    z-index: 100;\n    box-sizing: border-box;\n  }\n  .mobileContent[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dropdown-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.user-name[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 21px;\n  color: #e5e3e6;\n  margin-bottom: 10px;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-family: 'Roboto Light';\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 15px;\n  color: #9ca4af;\n  margin-right: 10px;\n}\n.status-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n}\n.status-icon_success[_ngcontent-%COMP%] {\n  background-color: #6bb755;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal_between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal_between_fullscreen[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.flex_horizontal_between_fullscreen[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  float: left;\n}\n.flex_horizontal_between_fullscreen[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  float: right;\n}\n.flex_horizontal_around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal_middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal_center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical_middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjtBREVBO0VBQ0ksd0JBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBQ0RKO0FESUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FDRko7QURPQTtFQUNJO0lBQ0ksYUFBQTtFQ0xOO0VEUUU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLGNBQUE7SUFDQSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNOTjtFRFNFO0lBQ0ksZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQ1BOO0VEVUU7SUFDSSxlQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQ1JOO0VEV0U7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtFQ1ROO0VEYUU7SUFDSSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLDJDQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0VDWE47RURlRTtJQUNJLG1CQUFBO0VDYk47RURnQkU7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtFQ2ROO0VEaUJFO0lBQ0ksY0FBQTtFQ2ZOO0VEa0JFO0lBQ0ksbUJBQUE7RUNoQk47RURtQkU7SUFDSSw2QkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ2pCTjtFRG9CRTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7RUNsQk47RURxQkU7SUFDSSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0NBQUE7SUFDQSxrQkFBQTtFQ25CTjtFRHNCRTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLE1BQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDcEJOO0VEdUJFO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsbUNBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1DQUFBO0VDckJOO0VEd0JFO0lBQ0kseUJBQUE7SUFDQSxtQ0FBQTtFQ3RCTjtBQUNGO0FEMkJBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDekJOO0VENEJFO0lBQ0ksYUFBQTtFQzFCTjtFRDZCRTtJQUNJLGFBQUE7RUMzQk47RUQ4QkU7SUFDSSxlQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7RUM1Qk47RUQrQkU7SUFDSSxhQUFBO0VDN0JOO0VEZ0NFO0lBQ0ksYUFBQTtFQzlCTjtBQUNGO0FEbUNBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDakNKO0FEb0NBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDbENKO0FEcUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ25DSjtBRHFDSTtFQUNJLHlCQUFBO0FDbkNSO0FEeUNBO0VBQ0ksYUFBQTtBQ3ZDSjtBRHlDSTtFQUNJLG1CQUFBO0FDdkNSO0FEeUNRO0VBQ0ksOEJBQUE7QUN2Q1o7QUR5Q1k7RUFDSSxXQUFBO0FDdkNoQjtBRDBDWTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ3hDaEI7QUQ0Q1k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUMxQ2hCO0FEK0NRO0VBQ0ksNkJBQUE7QUM3Q1o7QURnRFE7RUFDSSxtQkFBQTtBQzlDWjtBRGlEUTtFQUNJLHVCQUFBO0FDL0NaO0FEbURJO0VBQ0ksc0JBQUE7QUNqRFI7QURtRFE7RUFDSSx1QkFBQTtBQ2pEWiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbi1idXR0b24ge1xuICAgIGNvbG9yOiAjNjg2ZDczO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi5pY29uLWJ1dHRvbi5hY3RpdmUge1xuICAgIGNvbG9yOiAjMjNiYTk5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgIC5sb2dvIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubG9nby1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjMjBmZmU1O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAuaGVhZGVyLWJveCB7XG4gICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmZpeGVkLXBhbmVsIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNENDA0NztcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAubW9iaWxlQ29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG5cbiAgICAjc2xpZGVyX21lbnUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHggMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE2MWE7XG4gICAgfVxuXG5cbiAgICAjc2xpZGVyX21lbnU+Kjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAubWVudS1pdGVtPmEge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICBjb2xvcjogIzljYTRhZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICB9XG5cbiAgICAubWVudS1pdGVtPmEuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICMyM2JhOTk7XG4gICAgfVxuXG4gICAgLm1lbnUtbGlzdD4qOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIGJ1dHRvbi5pY29uLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgfVxuXG4gICAgLmF2YXRhci1ib3gge1xuICAgICAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJiMmMzMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5vdmVydmlldy1ib3gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGNvbG9yOiAjOWNhNGFmO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgLmF2YXRhci1pbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1heC13aWR0aDogNTBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2F2YXRhci5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgLmF2YXRhci1pbWc6aG92ZXIge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjNiYTk5O1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgLmhlYWRlci1ib3gge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Q0MDQ3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5sb2dvLW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZpeGVkLXBhbmVsIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNENDA0NztcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgLm1vYmlsZUNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1saXN0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbn1cblxuXG4udXNlci1uYW1lIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgY29sb3I6ICNlNWUzZTY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN0YXR1cy10ZXh0IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiAjOWNhNGFmO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnN0YXR1cy1pY29uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgaGVpZ2h0OiAxM3B4O1xuXG4gICAgJl9zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZiYjc1NTtcbiAgICB9XG59XG5cblxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICZfaG9yaXpvbnRhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgJl9iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgJl9mdWxsc2NyZWVuPioge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX2Z1bGxzY3JlZW4+KjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAmX2Z1bGxzY3JlZW4+KjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgICZfYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9taWRkbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICZfY2VudGVyIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl92ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJl9taWRkbGUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uaWNvbi1idXR0b24ge1xuICBjb2xvcjogIzY4NmQ3MztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cbi5pY29uLWJ1dHRvbi5hY3RpdmUge1xuICBjb2xvcjogIzIzYmE5OTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5sb2dvLW1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzIwZmZlNTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG4gIC5oZWFkZXItYm94IHtcbiAgICBtYXgtd2lkdGg6IDM3NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuZml4ZWQtcGFuZWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNENDA0NztcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxuICAubW9iaWxlQ29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNzbGlkZXJfbWVudSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcGFkZGluZzogMTJweCAxMnB4IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE2MWE7XG4gIH1cbiAgI3NsaWRlcl9tZW51ID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5tZW51LWl0ZW0gPiBhIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgY29sb3I6ICM5Y2E0YWY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICB9XG4gIC5tZW51LWl0ZW0gPiBhLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMyM2JhOTk7XG4gIH1cbiAgLm1lbnUtbGlzdCA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBidXR0b24uaWNvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogNzBweDtcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICB9XG4gIC5hdmF0YXItYm94IHtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYjJjMzE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5vdmVydmlldy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTJweDtcbiAgICB0b3A6IDA7XG4gICAgY29sb3I6ICM5Y2E0YWY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuICAuYXZhdGFyLWltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1heC13aWR0aDogNTBweDtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2F2YXRhci5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICAuYXZhdGFyLWltZzpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIzYmE5OTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgLmhlYWRlci1ib3gge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Q0MDQ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5sb2dvLW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZml4ZWQtcGFuZWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNENDA0NztcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC5tb2JpbGVDb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5kcm9wZG93bi1saXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4udXNlci1uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgY29sb3I6ICNlNWUzZTY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3RhdHVzLXRleHQge1xuICBmb250LWZhbWlseTogJ1JvYm90byBMaWdodCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICM5Y2E0YWY7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zdGF0dXMtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbn1cbi5zdGF0dXMtaWNvbl9zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiYjc1NTtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mbGV4X2hvcml6b250YWwge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZsZXhfaG9yaXpvbnRhbF9iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfaG9yaXpvbnRhbF9iZXR3ZWVuX2Z1bGxzY3JlZW4gPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmxleF9ob3Jpem9udGFsX2JldHdlZW5fZnVsbHNjcmVlbiA+ICo6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDtcbn1cbi5mbGV4X2hvcml6b250YWxfYmV0d2Vlbl9mdWxsc2NyZWVuID4gKjpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5mbGV4X2hvcml6b250YWxfYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF9ob3Jpem9udGFsX21pZGRsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmxleF9ob3Jpem9udGFsX2NlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXhfdmVydGljYWxfbWlkZGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mw-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/header/header.module.ts ***!
  \***********************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _menu_burger_menu_burger_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../menu-burger/menu-burger.module */ "./src/app/shared/components/menu-burger/menu-burger.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _micro_world_logo_micro_world_logo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../micro-world-logo/micro-world-logo.module */ "./src/app/shared/components/micro-world-logo/micro-world-logo.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _web_web_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web/web.component */ "./src/app/shared/components/header/web/web.component.ts");
/* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/shared/components/header/mobile/mobile.component.ts");









class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _micro_world_logo_micro_world_logo_module__WEBPACK_IMPORTED_MODULE_2__["MicroWorldLogoModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _menu_burger_menu_burger_module__WEBPACK_IMPORTED_MODULE_0__["MenuBurgerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _web_web_component__WEBPACK_IMPORTED_MODULE_6__["WebComponent"],
        _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_7__["MobileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _micro_world_logo_micro_world_logo_module__WEBPACK_IMPORTED_MODULE_2__["MicroWorldLogoModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _menu_burger_menu_burger_module__WEBPACK_IMPORTED_MODULE_0__["MenuBurgerModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _web_web_component__WEBPACK_IMPORTED_MODULE_6__["WebComponent"],
        _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_7__["MobileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _web_web_component__WEBPACK_IMPORTED_MODULE_6__["WebComponent"],
                    _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_7__["MobileComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _micro_world_logo_micro_world_logo_module__WEBPACK_IMPORTED_MODULE_2__["MicroWorldLogoModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _menu_burger_menu_burger_module__WEBPACK_IMPORTED_MODULE_0__["MenuBurgerModule"],
                ],
                exports: [
                    _header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _web_web_component__WEBPACK_IMPORTED_MODULE_6__["WebComponent"],
                    _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_7__["MobileComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/mobile/mobile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/header/mobile/mobile.component.ts ***!
  \*********************************************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
function MobileComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Micro World");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class MobileComponent {
    constructor() { }
    ngOnInit() {
    }
}
MobileComponent.ɵfac = function MobileComponent_Factory(t) { return new (t || MobileComponent)(); };
MobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileComponent, selectors: [["app-mobile"]], decls: 2, vars: 0, consts: [["mobile", ""], [1, "mobileContent"], [1, "logo-mobile", 3, "routerLink"], ["id", "slide_button", 1, "icon-button"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4 10H28C29.104 10 30 9.104 30 8C30 6.896 29.104 6 28 6H4C2.896 6 2 6.896 2 8C2 9.104 2.896 10 4 10ZM28 14H4C2.896 14 2 14.896 2 16C2 17.104 2.896 18 4 18H28C29.104 18 30 17.104 30 16C30 14.896 29.104 14 28 14ZM28 22H4C2.896 22 2 22.896 2 24C2 25.104 2.896 26 4 26H28C29.104 26 30 25.104 30 24C30 22.896 29.104 22 28 22Z", "fill", "currentColor"]], template: function MobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MobileComponent_ng_template_0_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9tb2JpbGUvbW9iaWxlLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile',
                templateUrl: './mobile.component.html',
                styleUrls: ['./mobile.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/web/web.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/header/web/web.component.ts ***!
  \***************************************************************/
/*! exports provided: WebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebComponent", function() { return WebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _micro_world_logo_micro_world_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../micro-world-logo/micro-world-logo.component */ "./src/app/shared/components/micro-world-logo/micro-world-logo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/main"]; };
const _c1 = function () { return ["/main/profile"]; };
class WebComponent {
    constructor() { }
    ngOnInit() {
    }
}
WebComponent.ɵfac = function WebComponent_Factory(t) { return new (t || WebComponent)(); };
WebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebComponent, selectors: [["app-web"]], decls: 11, vars: 4, consts: [[1, "logo"], [1, "logo", 3, "routerLink"], [1, "user-info"], [1, "user-info__avatar"], ["routerLinkActive", "_active", "src", "../../../../../assets/images/avatar.png", "alt", "", 1, "mui-space_right-3", "user-info__avatar--image", 3, "routerLink"], [1, "mui-space_right-3", "user-info__name"], [1, "user-info__icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13 24H11C10.173 24 9.5 23.327 9.5 22.5V20.638C8.86 20.453 8.244 20.1975 7.6595 19.8745L6.3425 21.192C5.7755 21.759 4.788 21.758 4.221 21.192L2.8065 19.778C2.523 19.495 2.367 19.118 2.367 18.7175C2.367 18.317 2.523 17.94 2.8065 17.657L4.124 16.339C3.8015 15.756 3.546 15.14 3.3615 14.4995H1.5C0.673 14.4995 0 13.8265 0 12.9995V10.9995C0 10.5985 0.156 10.222 0.439 9.939C0.7225 9.656 1.099 9.4995 1.5 9.4995H3.362C3.547 8.8605 3.802 8.244 4.125 7.66L2.808 6.3425C2.223 5.7575 2.223 4.8065 2.808 4.2215L4.222 2.807C4.7885 2.241 5.7765 2.24 6.3435 2.807L7.661 4.1245C8.245 3.802 8.861 3.5465 9.5 3.362V1.5C9.5 0.673 10.173 0 11 0H13C13.827 0 14.5 0.673 14.5 1.5V3.362C15.14 3.547 15.756 3.8025 16.339 4.1245L17.6565 2.807C18.2235 2.241 19.211 2.24 19.778 2.807L21.1925 4.221C21.476 4.504 21.632 4.881 21.632 5.2815C21.632 5.682 21.476 6.059 21.1925 6.342L19.8755 7.6595C20.1985 8.2435 20.454 8.8595 20.6385 9.4995H22.5C23.327 9.4995 24 10.1725 24 10.9995V12.9995C24 13.4005 23.844 13.777 23.561 14.06C23.278 14.343 22.901 14.4995 22.5 14.4995H20.638C20.453 15.1395 20.1975 15.756 19.875 16.3395L21.192 17.657C21.777 18.242 21.777 19.193 21.192 19.778L19.778 21.1925C19.211 21.759 18.2235 21.759 17.6565 21.1925L16.34 19.875C15.756 20.198 15.1395 20.453 14.5005 20.638V22.5C14.5 23.327 13.8275 24 13 24ZM7.5785 18.749C7.668 18.749 7.7585 18.773 7.839 18.822C8.547 19.255 9.3135 19.573 10.1175 19.7675C10.342 19.822 10.5 20.0225 10.5 20.2535V22.5C10.5 22.776 10.7245 23 11 23H13C13.2755 23 13.5 22.776 13.5 22.5V20.2535C13.5 20.0225 13.658 19.822 13.8825 19.7675C14.6855 19.573 15.452 19.256 16.1605 18.8225C16.3585 18.702 16.6115 18.7325 16.775 18.8955L18.364 20.485C18.5515 20.672 18.8835 20.673 19.0715 20.485L20.4855 19.0705C20.6805 18.8755 20.6805 18.5585 20.4855 18.3635L18.896 16.774C18.7325 16.611 18.7025 16.3565 18.823 16.1595C19.2555 15.4525 19.573 14.686 19.7675 13.8815C19.8215 13.657 20.0225 13.4985 20.2535 13.4985H22.5C22.6335 13.4985 22.7595 13.4465 22.854 13.352C22.948 13.259 23 13.1335 23 12.9995V10.9995C23 10.7235 22.7755 10.4995 22.5 10.4995H20.2535C20.0225 10.4995 19.8215 10.3415 19.7675 10.1165C19.5735 9.313 19.256 8.5465 18.823 7.8385C18.7025 7.6415 18.7325 7.388 18.896 7.224L20.4855 5.6345C20.5785 5.541 20.632 5.4125 20.632 5.281C20.632 5.1495 20.5785 5.0205 20.4855 4.9275L19.071 3.5135C18.882 3.325 18.5525 3.325 18.3635 3.5135L16.774 5.103C16.611 5.267 16.3575 5.2975 16.1595 5.176C15.453 4.744 14.687 4.426 13.8825 4.2315C13.6585 4.178 13.5 3.9775 13.5 3.7465V1.5C13.5 1.224 13.2755 1 13 1H11C10.7245 1 10.5 1.224 10.5 1.5V3.7465C10.5 3.9775 10.342 4.178 10.1175 4.2325C9.3145 4.4265 8.548 4.744 7.8395 5.177C7.642 5.2975 7.3885 5.2675 7.2255 5.104L5.636 3.5145C5.447 3.326 5.1175 3.326 4.9285 3.5145L3.515 4.9285C3.32 5.1235 3.32 5.4405 3.515 5.6355L5.1045 7.225C5.268 7.388 5.298 7.6425 5.1775 7.8395C4.7445 8.5475 4.427 9.314 4.233 10.117C4.179 10.3415 3.978 10.5 3.747 10.5H1.5C1.3665 10.5 1.2405 10.552 1.146 10.6465C1.052 10.74 1 10.8655 1 10.9995V12.9995C1 13.2755 1.2245 13.4995 1.5 13.4995H3.7465C3.9775 13.4995 4.1785 13.6575 4.2325 13.8825C4.427 14.6865 4.7445 15.453 5.177 16.16C5.2975 16.357 5.2675 16.6105 5.104 16.7745L3.5145 18.3645C3.4215 18.458 3.368 18.5865 3.368 18.718C3.368 18.8495 3.4215 18.9785 3.5145 19.0715L4.929 20.4855C5.1175 20.674 5.4475 20.674 5.6365 20.4855L7.2255 18.896C7.3215 18.799 7.449 18.749 7.5785 18.749Z", "fill", "#9CA4AF"], ["d", "M12 17C9.24302 17 7 14.757 7 12C7 9.243 9.24302 7 12 7C14.7571 7 17.0001 9.243 17.0001 12C17.0001 14.757 14.7576 17 12 17ZM12 8C9.79452 8 8.00001 9.7945 8.00001 12C8.00001 14.2055 9.79452 16 12 16C14.2055 16 16.0001 14.2055 16.0001 12C16.0001 9.7945 14.206 8 12 8Z", "fill", "#9CA4AF"]], template: function WebComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "micro-world-logo", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Maolink Magniel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_micro_world_logo_micro_world_logo_component__WEBPACK_IMPORTED_MODULE_1__["MicroWorldLogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background: #3D4047;\n  justify-content: space-between;\n  padding: 0 24px;\n  width: 100%;\n  position: fixed;\n}\n[_nghost-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 19px;\n  line-height: 28px;\n  text-align: center;\n  color: #9CA4AF;\n}\n[_nghost-%COMP%]   .user-info__avatar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .user-info__avatar--image[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  transition: 0.2s ease-in-out;\n  cursor: pointer;\n  outline: none;\n}\n[_nghost-%COMP%]   .user-info__avatar--image._active[_ngcontent-%COMP%], [_nghost-%COMP%]   .user-info__avatar--image[_ngcontent-%COMP%]:hover {\n  transition: 0.2s ease-in-out;\n  border: 2px solid #23BA99;\n}\n[_nghost-%COMP%]   .user-info__icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n.logo[_ngcontent-%COMP%] {\n  outline: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL3dlYi9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtZGlyZWN0aW9uLmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci93ZWIvd2ViLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvd2ViL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC10ZXh0Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci93ZWIvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXNwYWNlcy5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvd2ViL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1idXR0b25zLmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci93ZWIvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWNvbHVtcy5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvd2ViL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC10YWJsZS5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvd2ViL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL3dlYi93ZWIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0FDQVo7QURHUTtFQUNJLDZCQUFBO0FDRFo7QURJUTtFQUNJLHlCQUFBO0FDRlo7QURLUTtFQUNJLGVBQUE7QUNIWjtBRE1RO0VBQ0ksdUJBQUE7QUNKWjtBRE9RO0VBQ0kscUJBQUE7QUNMWjtBRGFJO0VBQ0ksc0JBQUE7QUNYUjtBRGFRO0VBQ0ksdUJBQUE7QUNYWjtBRGNRO0VBQ0ksOEJBQUE7QUNaWjtBRGVRO0VBQ0ksNkJBQUE7QUNiWjtBRGdCUTtFQUNJLG1CQUFBO0FDZFo7QURpQlM7RUFDSSx5QkFBQTtBQ2ZiO0FEa0JRO0VBQ0kscUJBQUE7QUNoQlo7QURtQlE7RUFDSSx1QkFBQTtBQ2pCWjtBRG9CUTtFQUNJLHFCQUFBO0FDbEJaO0FEdUJJO0VBQ0ksZUFBQTtBQ3JCUjtBRDBCQTtFQUNJLFdBQUE7QUN4Qko7QUMzREE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FENkRKO0FDM0RJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUQ2RFI7QUMxREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBRDREUjtBQ3pESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRDJEUjtBQ3hESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRDBEUjtBQ3ZESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHlEUjtBQ3RESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHdEUjtBQ3JESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHVEUjtBQ3BESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHNEUjtBQ25ESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHFEUjtBQ2xESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRG9EUjtBQ2pESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRG1EUjtBQ2hESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGtEUjtBQy9DSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGlEUjtBQzlDSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRGdEUjtBQzdDSTtFQUNJLGlCQUFBO0FEK0NSO0FDM0NJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FENkNSO0FDM0NRO0VBQ0ksWUFBQTtFQUNBLHFDQUFBO0FENkNaO0FDMUNRO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO0FENENaO0FDcENBO0VBQ0ksWUFBQTtFQUNBLDRDQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBRHFDSjtBQ25DSTtFQUNJLFVBQUE7RUFDQSw0Q0FBQTtFQUVBLGdDQUFBO0FEb0NSO0FDaENBO0VBQ0ksVUFBQTtFQUNBLDRDQUFBO0VBRUEsZ0NBQUE7QURpQ0o7QUM5QkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGdDSjtBQzdCQTtFQUNJLHlCQUFBO0VBQ0Esa0NBQUE7QUQrQko7QUVyTkE7RUZ1TkUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBRXhOSTtFQUNJLGVBQUE7QUYwTlI7QUV2Tkk7RUFDSSxpQkFBQTtBRnlOUjtBRXROSTtFQUNJLGlCQUFBO0FGd05SO0FFck5JO0VBQ0ksa0JBQUE7QUZ1TlI7QUVwTkk7RUFDSSxrQkFBQTtBRnNOUjtBRW5OSTtFQUNJLGtCQUFBO0FGcU5SO0FFbE5JO0VBQ0ksa0JBQUE7QUZvTlI7QUVqTkk7RUFDSSxrQkFBQTtBRm1OUjtBRWhOSTtFQUNJLGtCQUFBO0FGa05SO0FFL01JO0VBQ0ksa0JBQUE7QUZpTlI7QUU5TUk7RUFDSSxrQkFBQTtBRmdOUjtBRTNNSTtFQUNJLGNBQUE7QUY2TVI7QUUxTUk7RUFDSSxnQkFBQTtBRjRNUjtBRXpNSTtFQUNJLGdCQUFBO0FGMk1SO0FFeE1JO0VBQ0ksaUJBQUE7QUYwTVI7QUV2TUk7RUFDSSxpQkFBQTtBRnlNUjtBRXRNSTtFQUNJLGlCQUFBO0FGd01SO0FFck1JO0VBQ0ksaUJBQUE7QUZ1TVI7QUVwTUk7RUFDSSxpQkFBQTtBRnNNUjtBRW5NSTtFQUNJLGlCQUFBO0FGcU1SO0FFbE1JO0VBQ0ksaUJBQUE7QUZvTVI7QUVqTUk7RUFDSSxpQkFBQTtBRm1NUjtBRTlMSTtFQUNJLGdCQUFBO0FGZ01SO0FFN0xJO0VBQ0ksa0JBQUE7QUYrTFI7QUU1TEk7RUFDSSxrQkFBQTtBRjhMUjtBRTNMSTtFQUNJLG1CQUFBO0FGNkxSO0FFMUxJO0VBQ0ksbUJBQUE7QUY0TFI7QUV6TEk7RUFDSSxtQkFBQTtBRjJMUjtBRXhMSTtFQUNJLG1CQUFBO0FGMExSO0FFdkxJO0VBQ0ksbUJBQUE7QUZ5TFI7QUV0TEk7RUFDSSxtQkFBQTtBRndMUjtBRXJMSTtFQUNJLG1CQUFBO0FGdUxSO0FFcExJO0VBQ0ksbUJBQUE7QUZzTFI7QUVqTEk7RUFDSSxhQUFBO0FGbUxSO0FFaExJO0VBQ0ksZUFBQTtBRmtMUjtBRS9LSTtFQUNJLGVBQUE7QUZpTFI7QUU5S0k7RUFDSSxnQkFBQTtBRmdMUjtBRTdLSTtFQUNJLGdCQUFBO0FGK0tSO0FFNUtJO0VBQ0ksZ0JBQUE7QUY4S1I7QUUzS0k7RUFDSSxnQkFBQTtBRjZLUjtBRTFLSTtFQUNJLGdCQUFBO0FGNEtSO0FFektJO0VBQ0ksZ0JBQUE7QUYyS1I7QUV4S0k7RUFDSSxnQkFBQTtBRjBLUjtBRXZLSTtFQUNJLGdCQUFBO0FGeUtSO0FHL1ZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUhpV0o7QUc3VlE7RUFDSSxrREFBQTtBSCtWWjtBRzVWUTtFQUNJLDBDQUFBO0FIOFZaO0FHM1ZRO0VBQ0ksWUFBQTtBSDZWWjtBRzFWUTtFQUNJLGtEQUFBO0VBQ0EsNkJBQUE7QUg0Vlo7QUd6VlE7RUFDSSwwQ0FBQTtFQUNBLDZCQUFBO0FIMlZaO0FHeFZRO0VBQ0ksb0RBQUE7QUgwVlo7QUd2VlE7RUFDSSw0Q0FBQTtBSHlWWjtBR3JWUTtFQUNJLGdEQUFBO0FIdVZaO0FHcFZRO0VBQ0ksd0NBQUE7RUFDQSw2QkFBQTtBSHNWWjtBR25WUTtFQUNJLCtDQUFBO0FIcVZaO0FHbFZRO0VBQ0ksdUNBQUE7RUFDQSw2QkFBQTtBSG9WWjtBRy9VUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FIZ1ZaO0FHN1VRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUg4VVo7QUczVVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSDRVWjtBR3ZVQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBSHlVSjtBR3RVQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBSHdVSjtBSWphSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUptYVI7QUt6YUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBTDJhSjtBS3hhQTtFQUNJLGdDQUFBO0FMMGFKO0FLdmFBOztFQUdJLHNCQUFBO0VBQ0EsZ0JBQUE7QUx5YUo7QUt0YUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FMd2FKO0FLcmFBO0VBRUksK0JBQUE7RUFFQSx5QkFBQTtFQUVBLHVDQUFBO0VBQ0EsVUFBQTtBTHVhSjtBS3BhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBTHNhSjtBS25hQTtFQUNJLG1CQUFBO0FMcWFKO0FLbGFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FMb2FKO0FLamFBO0VBQ0ksbUJBQUE7QUxtYUo7QUtoYUE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTGthSjtBSy9aQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMaWFKO0FLOVpBO0VBQ0ksNkJBQUE7QUxnYUo7QUs3WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTCtaSjtBSzVaQTs7RUFFSSxZQUFBO0FMOFpKO0FLM1pBO0VBQ0ksZUFBQTtBTDZaSjtBSzFaQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMNFpKO0FLelpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwyWko7QUt4WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTDBaSjtBS3ZaQTtFQUNJLHNCQUFBO0FMeVpKO0FLdFpBOztFQUVJLGVBQUE7QUx3Wko7QUtyWkE7O0VBRUksZ0JBQUE7QUx1Wko7QUtwWkE7O0VBRUksa0JBQUE7QUxzWko7QUtuWkE7O0VBRUksaUJBQUE7QUxxWko7QUtsWkE7O0VBRUksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FMb1pKO0FNampCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FObWpCSjtBTTNqQkE7RUFXUSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QU5rakJSO0FNaGpCUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FOa2pCWjtBTWhqQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FOa2pCaEI7QU0vaUJZOztFQUVJLDRCQUFBO0VBQ0EseUJBQUE7QU5pakJoQjtBTTdpQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QU4raUJaO0FNemlCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FOMmlCSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci93ZWIvd2ViLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmX2hvcml6b250YWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICYtbWlkZGxlIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWVuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJl93cmFwIHtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuXG5cbiAgICB9XG5cblxuICAgICZfdmVydGljYWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICYtbWlkZGxlIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jZW50ZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICAmLWVuZCB7XG4gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgIH1cblxuICAgICAgICAmLXJpZ2h0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtbGVmdCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFzZWxpbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAmX3dyYXAge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxufVxuXG5cbi5mdWxsLXNpemUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIiwiLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsZXhfaG9yaXpvbnRhbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZmxleF9ob3Jpem9udGFsLW1pZGRsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmxleF9ob3Jpem9udGFsLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZmxleF9ob3Jpem9udGFsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZsZXhfaG9yaXpvbnRhbF93cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZmxleF92ZXJ0aWNhbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxleF92ZXJ0aWNhbC1taWRkbGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZmxleF92ZXJ0aWNhbC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmxleF92ZXJ0aWNhbC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZsZXhfdmVydGljYWwtcmlnaHQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZmxleF92ZXJ0aWNhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZnVsbC1zaXplIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubXVpLXRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfaDEge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2gyIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oMyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g0IHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2JvZHkteGwge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxOXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1sIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbF9zZWNvbmRhcnkge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1tIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbV9zZWNvbmRhcnkge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1zIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvZHktc19zZWNvbmRhcnkge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9keS14cyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm11aS10ZXh0X2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLm11aS10ZXh0X2xpbmstaG92ZXJlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tdWktdGV4dF9saW5rLWhvdmVyZWQ6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnJvdXRlcl9saW5rIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgbWFyZ2luOiAwIDhweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnJvdXRlcl9saW5rLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UyYjUxZjtcbn1cbi5yb3V0ZXJfbGluazpob3Zlcjpub3QoLnJvdXRlcl9saW5rLWFjdGl2ZSkge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MDUxNTQ7XG59XG4ubXVpLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG4ubXVpLWxpbms6aG92ZXI6bm90KFtuZy1yZWZsZWN0LXJvdXRlci1saW5rPScnXSkge1xuICBjb2xvcjogIzIzYmE5OSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm11aS1zcGFjZSB7XG4gIC8qIFJJR0hUIFNQQUNFICovXG4gIC8qIExFRlQgU1BBQ0UgKi9cbiAgLyogQk9UVE9NIFNQQUNFICovXG4gIC8qIFRPUCBTUEFDRSAqL1xufVxuLm11aS1zcGFjZV9yaWdodC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLm11aS1zcGFjZV9yaWdodC0xIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTIge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMyB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtNCB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtNSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtNiB7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtNyB7XG4gIG1hcmdpbi1yaWdodDogMjhweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtOCB7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtOSB7XG4gIG1hcmdpbi1yaWdodDogMzZweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMTAge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLm11aS1zcGFjZV9sZWZ0LTEge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTIge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTMge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5tdWktc3BhY2VfbGVmdC00IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTYge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cbi5tdWktc3BhY2VfbGVmdC03IHtcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtOCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTkge1xuICBtYXJnaW4tbGVmdDogMzZweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0xIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTMge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS01IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTYge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNyB7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS04IHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTkge1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMTAge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLm11aS1zcGFjZV90b3AtMCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ubXVpLXNwYWNlX3RvcC0xIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLm11aS1zcGFjZV90b3AtMiB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5tdWktc3BhY2VfdG9wLTMge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLm11aS1zcGFjZV90b3AtNCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ubXVpLXNwYWNlX3RvcC01IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tdWktc3BhY2VfdG9wLTYge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLm11aS1zcGFjZV90b3AtNyB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG4ubXVpLXNwYWNlX3RvcC04IHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cbi5tdWktc3BhY2VfdG9wLTkge1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuLm11aS1zcGFjZV90b3AtMTAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLm11aS1idXR0b24ge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeS1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeSk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5W2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXN1Y2Nlc3M6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MtaG92ZXJlZCk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3Itc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zZWNvbmRhcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeS1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnkpO1xufVxuLm11aS1idXR0b25fY29sb3ItZXJyb3I6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yLWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3IpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWluZm86aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8taG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8pO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX3NpemUtbCB7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLm11aS1idXR0b25fc2l6ZS1tIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubXVpLWJ1dHRvbl9zaXplLXMge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwibFwiXSB7XG4gIG1heC13aWR0aDogMjgwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwic1wiXSB7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tdWktY29sX21kLTMge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG50YWJsZS5tdWktdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfYm9yZGVyX25vbmUpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG4ubXVpLXRhYmxlX190ZCxcbi5tdWktdGFibGVfX3RoIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICM5NTliYTQ7XG59XG4ubXVpLXRhYmxlX190ciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiAwO1xufVxuLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMTRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2hvdmVyX2Rpc2FibGVkKTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG59XG4ubXVpLXRhYmxlX19zdWJ0ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBjb2xvcjogIzc5ODE4Yztcbn1cbi5tdWktdGFibGVfbGF5b3V0X2ZpeGVkIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdHJfYm9yZGVyX3RvcCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tdWktdGFibGVfX3RkX3NpemVfbCxcbi5tdWktdGFibGVfc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgaGVpZ2h0OiA3OXB4O1xufVxuLm11aS10YWJsZV9fdHJfY3Vyc29yX3BvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubXVpLXRhYmxlX190ZF9hbGlnbl9jZW50ZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm11aS10YWJsZV9fdGRfZmlyc3QsXG4ubXVpLXRhYmxlX190aF9maXJzdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5tdWktdGFibGVfX3RkX2xhc3QsXG4ubXVpLXRhYmxlX190aF9sYXN0IHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfY2VudGVyLFxuLm11aS10YWJsZV9fdGhfdGV4dF9jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X3JpZ2h0LFxuLm11aS10YWJsZV9fdGhfdGV4dF9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9vdmVyZmxvdyxcbi5tdWktdGFibGVfX3RoX3RleHRfb3ZlcmZsb3cge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbjpob3N0IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjM0Q0MDQ3O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbjpob3N0IC51c2VyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5Q0E0QUY7XG59XG46aG9zdCAudXNlci1pbmZvX19hdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC51c2VyLWluZm9fX2F2YXRhci0taW1hZ2Uge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG46aG9zdCAudXNlci1pbmZvX19hdmF0YXItLWltYWdlLl9hY3RpdmUsXG46aG9zdCAudXNlci1pbmZvX19hdmF0YXItLWltYWdlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAycHggc29saWQgIzIzQkE5OTtcbn1cbjpob3N0IC51c2VyLWluZm9fX2ljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9nbyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi5tdWktdGV4dCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgICAmX2gxIHtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDIge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbV9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LXMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS14cyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cblxuICAgICZfbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICAgJi1ob3ZlcmVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaG92ZXJlZDpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgICAgICAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG4ucm91dGVyX2xpbmsge1xuICAgIG9wYWNpdHk6IC43O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgJi1hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG4gICAgfVxufVxuXG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MDUxNTQ7XG59XG5cbi5tdWktbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgICBjb2xvcjogIzIzYmE5OSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbn1cbiIsIi5tdWktc3BhY2Uge1xuICAgIC8qIFJJR0hUIFNQQUNFICovXG5cbiAgICAmX3JpZ2h0LTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0yIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0zIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC02IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTgge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC05IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogTEVGVCBTUEFDRSAqL1xuXG4gICAgJl9sZWZ0LTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTIge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0zIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgICZfbGVmdC02IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC05IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogQk9UVE9NIFNQQUNFICovXG5cbiAgICAmX2JvdHRvbS0wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgIC8qIFRPUCBTUEFDRSAqL1xuXG4gICAgJl90b3AtMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJl90b3AtMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG5cbiAgICAmX3RvcC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgICZfdG9wLTYge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTcge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTgge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTkge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTEwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG59XG4iLCIubXVpLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcblxuXG4gICAgJl9jb2xvciB7XG4gICAgICAgICYtcHJpbWFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5W2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MtaG92ZXJlZCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2VzcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgICYtZXJyb3I6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZXJyb3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfc2l6ZSB7XG4gICAgICAgICYtbCB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMzYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLW0ge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbiIsIi5tdWktY29sIHtcblxuICAgICZfbWQtMyB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG4iLCJ0YWJsZS5tdWktdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZCxcbi5tdWktdGFibGVfX3RoIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICM5NTliYTQ7XG59XG5cbi5tdWktdGFibGVfX3RyIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGhlaWdodDogNTVweDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2hvdmVyX2Rpc2FibGVkKTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cblxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDRweCAwIDA7XG4gICAgY29sb3I6ICM3OTgxOGM7XG59XG5cbi5tdWktdGFibGVfbGF5b3V0X2ZpeGVkIHtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdHJfYm9yZGVyX3RvcCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGhlaWdodDogNzlweDtcbn1cblxuLm11aS10YWJsZV9fdHJfY3Vyc29yX3BvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX2xhc3QsXG4ubXVpLXRhYmxlX190aF9sYXN0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9vdmVyZmxvdyxcbi5tdWktdGFibGVfX3RoX3RleHRfb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWxpYnJhcnkubGVzcyc7XG5cbjpob3N0IHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMzRDQwNDc7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAudXNlci1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90byxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzlDQTRBRjtcblxuICAgICAgICAmX19hdmF0YXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgJi0taW1hZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLS1pbWFnZS5fYWN0aXZlLFxuICAgICAgICAgICAgJi0taW1hZ2U6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjNCQTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJl9faWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4ubG9nbyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web',
                templateUrl: './web.component.html',
                styleUrls: ['./web.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/menu-burger/menu-burger.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/menu-burger/menu-burger.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuBurgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBurgerComponent", function() { return MenuBurgerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class MenuBurgerComponent {
    constructor() {
        this.size = 'l';
        this.active = false;
        this.eventClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    menuClick() {
        this.active = !this.active;
        this.eventClick.emit(this.active);
    }
}
MenuBurgerComponent.ɵfac = function MenuBurgerComponent_Factory(t) { return new (t || MenuBurgerComponent)(); };
MenuBurgerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuBurgerComponent, selectors: [["app-menu-burger"]], hostVars: 3, hostBindings: function MenuBurgerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-host-size", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_active", ctx.active);
    } }, inputs: { size: "size", active: "active", customStyle: "customStyle" }, outputs: { eventClick: "eventClick" }, decls: 5, vars: 3, consts: [[1, "menu-container", 3, "click"], ["menuContainer", ""], [1, "bar1", 3, "ngStyle"], [1, "bar2", 3, "ngStyle"], [1, "bar3", 3, "ngStyle"]], template: function MenuBurgerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBurgerComponent_Template_div_click_0_listener($event) { ctx.menuClick(); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.customStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.customStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.customStyle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n[data-host-size='l'][_nghost-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n[data-host-size='l'][_nghost-%COMP%]   .bar1[_ngcontent-%COMP%], [data-host-size='l'][_nghost-%COMP%]   .bar2[_ngcontent-%COMP%], [data-host-size='l'][_nghost-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 4px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n}\n._active[data-host-size='l'][_nghost-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: rotate(-45deg) translate(-7px, 6px);\n}\n._active[data-host-size='l'][_nghost-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n._active[data-host-size='l'][_nghost-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: rotate(45deg) translate(-8px, -8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS1idXJnZXIvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51LWJ1cmdlci9tZW51LWJ1cmdlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS1idXJnZXIvbWVudS1idXJnZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDUjtBREhJOzs7RUFPUSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDQ1o7QURqQkE7RUFxQlEscUJBQUE7RUFDQSxlQUFBO0FDRFI7QURRSTtFQUdRLDhDQUFBO0FDUFo7QURJSTtFQU9RLFVBQUE7QUNSWjtBRENJO0VBWVEsOENBQUE7QUNUWiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUtYnVyZ2VyL21lbnUtYnVyZ2VyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmW2RhdGEtaG9zdC1zaXplPSdsJ10ge1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuXG4gICAgICAgIC5iYXIxLFxuICAgICAgICAuYmFyMixcbiAgICAgICAgLmJhcjMge1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG5cblxuOmhvc3QuX2FjdGl2ZSB7XG4gICAgJltkYXRhLWhvc3Qtc2l6ZT0nbCddIHtcbiAgICAgICAgLmJhcjEge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtN3B4LCA2cHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTdweCwgNnB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYXIyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFyMyB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0W2RhdGEtaG9zdC1zaXplPSdsJ10ge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuOmhvc3RbZGF0YS1ob3N0LXNpemU9J2wnXSAuYmFyMSxcbjpob3N0W2RhdGEtaG9zdC1zaXplPSdsJ10gLmJhcjIsXG46aG9zdFtkYXRhLWhvc3Qtc2l6ZT0nbCddIC5iYXIzIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBtYXJnaW46IDZweCAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdC5fYWN0aXZlW2RhdGEtaG9zdC1zaXplPSdsJ10gLmJhcjEge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC03cHgsIDZweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC03cHgsIDZweCk7XG59XG46aG9zdC5fYWN0aXZlW2RhdGEtaG9zdC1zaXplPSdsJ10gLmJhcjIge1xuICBvcGFjaXR5OiAwO1xufVxuOmhvc3QuX2FjdGl2ZVtkYXRhLWhvc3Qtc2l6ZT0nbCddIC5iYXIzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuBurgerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-burger',
                templateUrl: './menu-burger.component.html',
                styleUrls: ['./menu-burger.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.data-host-size']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class._active']
        }], eventClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], customStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/menu-burger/menu-burger.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/menu-burger/menu-burger.module.ts ***!
  \*********************************************************************/
/*! exports provided: MenuBurgerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBurgerModule", function() { return MenuBurgerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _menu_burger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-burger.component */ "./src/app/shared/components/menu-burger/menu-burger.component.ts");




class MenuBurgerModule {
}
MenuBurgerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuBurgerModule });
MenuBurgerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuBurgerModule_Factory(t) { return new (t || MenuBurgerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuBurgerModule, { declarations: [_menu_burger_component__WEBPACK_IMPORTED_MODULE_2__["MenuBurgerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_menu_burger_component__WEBPACK_IMPORTED_MODULE_2__["MenuBurgerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuBurgerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _menu_burger_component__WEBPACK_IMPORTED_MODULE_2__["MenuBurgerComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _menu_burger_component__WEBPACK_IMPORTED_MODULE_2__["MenuBurgerComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/micro-world-logo/micro-world-logo.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/micro-world-logo/micro-world-logo.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MicroWorldLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroWorldLogoComponent", function() { return MicroWorldLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MicroWorldLogoComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "linearGradient", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MicroWorldLogoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "linearGradient", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MicroWorldLogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
MicroWorldLogoComponent.ɵfac = function MicroWorldLogoComponent_Factory(t) { return new (t || MicroWorldLogoComponent)(); };
MicroWorldLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MicroWorldLogoComponent, selectors: [["micro-world-logo"]], inputs: { size: "size" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["width", "135", "height", "19", "viewBox", "0 0 135 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M14.6414 1.42307C15.0414 1.42307 15.3854 1.56707 15.6734 1.85507C15.9774 2.12707 16.1294 2.47107 16.1294 2.88707V16.7831C16.1294 17.1991 15.9934 17.5511 15.7214 17.8391C15.4494 18.1111 15.0894 18.2471 14.6414 18.2471C14.1934 18.2471 13.8254 18.1111 13.5374 17.8391C13.2654 17.5671 13.1294 17.2151 13.1294 16.7831V7.11107L9.16944 13.1591C9.00944 13.3511 8.82544 13.5111 8.61744 13.6391C8.40944 13.7511 8.19344 13.7991 7.96944 13.7831C7.76144 13.7991 7.55344 13.7511 7.34544 13.6391C7.13744 13.5111 6.95344 13.3511 6.79344 13.1591L2.83344 6.89507V16.7831C2.83344 17.2151 2.70544 17.5671 2.44944 17.8391C2.19344 18.1111 1.85744 18.2471 1.44144 18.2471C1.04144 18.2471 0.713438 18.1111 0.457438 17.8391C0.201438 17.5511 0.0734376 17.1991 0.0734376 16.7831V2.88707C0.0734376 2.48707 0.217438 2.14307 0.505438 1.85507C0.809438 1.56707 1.16944 1.42307 1.58544 1.42307C1.82544 1.42307 2.06544 1.48707 2.30544 1.61507C2.54544 1.72707 2.72944 1.87907 2.85744 2.07107L8.08944 10.1111L13.4654 2.07107C13.5934 1.87907 13.7614 1.72707 13.9694 1.61507C14.1934 1.48707 14.4174 1.42307 14.6414 1.42307ZM22.2095 16.7831C22.2095 17.1991 22.0735 17.5511 21.8015 17.8391C21.5295 18.1111 21.1855 18.2471 20.7695 18.2471C20.3535 18.2471 20.0095 18.1111 19.7375 17.8391C19.4655 17.5511 19.3295 17.1991 19.3295 16.7831V6.87107C19.3295 6.45507 19.4655 6.11107 19.7375 5.83907C20.0095 5.55107 20.3535 5.40707 20.7695 5.40707C21.1855 5.40707 21.5295 5.55107 21.8015 5.83907C22.0735 6.11107 22.2095 6.45507 22.2095 6.87107V16.7831ZM20.7455 3.84707C20.2015 3.84707 19.8175 3.75907 19.5935 3.58307C19.3695 3.40707 19.2575 3.09507 19.2575 2.64707V2.19107C19.2575 1.74307 19.3775 1.43107 19.6175 1.25507C19.8575 1.07907 20.2415 0.991069 20.7695 0.991069C21.3295 0.991069 21.7215 1.07907 21.9455 1.25507C22.1695 1.43107 22.2815 1.74307 22.2815 2.19107V2.64707C22.2815 3.11107 22.1615 3.43107 21.9215 3.60707C21.6975 3.76707 21.3055 3.84707 20.7455 3.84707ZM30.7614 5.16707C32.1214 5.16707 33.2174 5.38307 34.0494 5.81507C34.8814 6.23107 35.2974 6.79107 35.2974 7.49507C35.2974 7.84707 35.1934 8.15907 34.9854 8.43107C34.7774 8.68707 34.5054 8.81507 34.1694 8.81507C33.9134 8.81507 33.7054 8.78307 33.5454 8.71907C33.3854 8.63907 33.2254 8.54307 33.0654 8.43107C32.9214 8.30307 32.7774 8.19907 32.6334 8.11907C32.4734 8.03907 32.2334 7.96707 31.9134 7.90307C31.6094 7.83907 31.3614 7.80707 31.1694 7.80707C29.9694 7.80707 29.0254 8.18307 28.3374 8.93507C27.6654 9.67107 27.3294 10.6391 27.3294 11.8391C27.3294 12.9911 27.6734 13.9511 28.3614 14.7191C29.0494 15.4711 29.9294 15.8471 31.0014 15.8471C31.7854 15.8471 32.3694 15.7511 32.7534 15.5591C32.8494 15.5111 32.9774 15.4311 33.1374 15.3191C33.3134 15.1911 33.4734 15.0951 33.6174 15.0311C33.7614 14.9671 33.9374 14.9351 34.1454 14.9351C34.5454 14.9351 34.8574 15.0631 35.0814 15.3191C35.3214 15.5751 35.4414 15.9031 35.4414 16.3031C35.4414 16.6871 35.2174 17.0471 34.7694 17.3831C34.3214 17.7191 33.7294 17.9911 32.9934 18.1991C32.2574 18.3911 31.4734 18.4871 30.6414 18.4871C29.4094 18.4871 28.3214 18.1991 27.3774 17.6231C26.4494 17.0471 25.7294 16.2551 25.2174 15.2471C24.7054 14.2231 24.4494 13.0871 24.4494 11.8391C24.4494 10.5431 24.7134 9.39107 25.2414 8.38307C25.7854 7.37507 26.5374 6.59107 27.4974 6.03107C28.4574 5.45507 29.5454 5.16707 30.7614 5.16707ZM44.1929 5.16707C44.6729 5.16707 45.0729 5.30307 45.3929 5.57507C45.7289 5.84707 45.8969 6.16707 45.8969 6.53507C45.8969 7.03107 45.7689 7.40707 45.5129 7.66307C45.2569 7.90307 44.9529 8.02307 44.6009 8.02307C44.3609 8.02307 44.0889 7.96707 43.7849 7.85507C43.7369 7.83907 43.6249 7.80707 43.4489 7.75907C43.2889 7.71107 43.1129 7.68707 42.9209 7.68707C42.5049 7.68707 42.1049 7.81507 41.7209 8.07107C41.3369 8.32707 41.0169 8.71907 40.7609 9.24707C40.5209 9.75907 40.4009 10.3751 40.4009 11.0951V16.7831C40.4009 17.1991 40.2649 17.5511 39.9929 17.8391C39.7209 18.1111 39.3769 18.2471 38.9609 18.2471C38.5449 18.2471 38.2009 18.1111 37.9289 17.8391C37.6569 17.5511 37.5209 17.1991 37.5209 16.7831V6.87107C37.5209 6.45507 37.6569 6.11107 37.9289 5.83907C38.2009 5.55107 38.5449 5.40707 38.9609 5.40707C39.3769 5.40707 39.7209 5.55107 39.9929 5.83907C40.2649 6.11107 40.4009 6.45507 40.4009 6.87107V7.18307C40.7689 6.52707 41.2969 6.03107 41.9849 5.69507C42.6729 5.34307 43.4089 5.16707 44.1929 5.16707ZM59.7241 11.8391C59.7241 13.1191 59.4361 14.2711 58.8601 15.2951C58.2841 16.3031 57.4921 17.0871 56.4841 17.6471C55.4921 18.2071 54.3961 18.4871 53.1961 18.4871C51.9801 18.4871 50.8761 18.2071 49.8841 17.6471C48.8921 17.0871 48.1081 16.3031 47.5321 15.2951C46.9561 14.2711 46.6681 13.1191 46.6681 11.8391C46.6681 10.5591 46.9561 9.41507 47.5321 8.40707C48.1081 7.38307 48.8921 6.59107 49.8841 6.03107C50.8761 5.45507 51.9801 5.16707 53.1961 5.16707C54.3961 5.16707 55.4921 5.45507 56.4841 6.03107C57.4921 6.59107 58.2841 7.38307 58.8601 8.40707C59.4361 9.41507 59.7241 10.5591 59.7241 11.8391ZM56.8441 11.8391C56.8441 11.0551 56.6761 10.3591 56.3401 9.75107C56.0201 9.12707 55.5801 8.64707 55.0201 8.31107C54.4761 7.97507 53.8681 7.80707 53.1961 7.80707C52.5241 7.80707 51.9081 7.97507 51.3481 8.31107C50.8041 8.64707 50.3641 9.12707 50.0281 9.75107C49.7081 10.3591 49.5481 11.0551 49.5481 11.8391C49.5481 12.6231 49.7081 13.3191 50.0281 13.9271C50.3641 14.5351 50.8041 15.0071 51.3481 15.3431C51.9081 15.6791 52.5241 15.8471 53.1961 15.8471C53.8681 15.8471 54.4761 15.6791 55.0201 15.3431C55.5801 15.0071 56.0201 14.5351 56.3401 13.9271C56.6761 13.3191 56.8441 12.6231 56.8441 11.8391ZM87.9849 1.37507C88.3689 1.37507 88.7209 1.52707 89.0409 1.83107C89.3769 2.11907 89.5449 2.48707 89.5449 2.93507C89.5449 3.07907 89.5209 3.23907 89.4729 3.41507L84.7449 17.3351C84.6489 17.6071 84.4809 17.8231 84.2409 17.9831C84.0009 18.1431 83.7369 18.2311 83.4489 18.2471C83.1609 18.2471 82.8889 18.1671 82.6329 18.0071C82.3769 17.8471 82.1769 17.6151 82.0329 17.3111L78.6249 9.55907L75.1929 17.3111C75.0489 17.6151 74.8489 17.8471 74.5929 18.0071C74.3369 18.1671 74.0649 18.2471 73.7769 18.2471C73.4889 18.2311 73.2249 18.1431 72.9849 17.9831C72.7449 17.8231 72.5769 17.6071 72.4809 17.3351L67.7529 3.41507C67.7049 3.23907 67.6809 3.07907 67.6809 2.93507C67.6809 2.48707 67.8409 2.11907 68.1609 1.83107C68.4969 1.52707 68.8649 1.37507 69.2649 1.37507C69.5849 1.37507 69.8729 1.46307 70.1289 1.63907C70.3849 1.79907 70.5609 2.02307 70.6569 2.31107L74.2329 13.1591L77.3529 5.67107C77.4809 5.38307 77.6649 5.15907 77.9049 4.99907C78.1449 4.82307 78.4169 4.74307 78.7209 4.75907C79.0249 4.74307 79.2889 4.82307 79.5129 4.99907C79.7529 5.15907 79.9369 5.38307 80.0649 5.67107L83.0169 13.0871L86.5689 2.31107C86.6649 2.02307 86.8409 1.79907 87.0969 1.63907C87.3689 1.46307 87.6649 1.37507 87.9849 1.37507ZM103.482 11.8391C103.482 13.1191 103.194 14.2711 102.618 15.2951C102.042 16.3031 101.25 17.0871 100.242 17.6471C99.2499 18.2071 98.1539 18.4871 96.9539 18.4871C95.7379 18.4871 94.6339 18.2071 93.6419 17.6471C92.6499 17.0871 91.8659 16.3031 91.2899 15.2951C90.7139 14.2711 90.4259 13.1191 90.4259 11.8391C90.4259 10.5591 90.7139 9.41507 91.2899 8.40707C91.8659 7.38307 92.6499 6.59107 93.6419 6.03107C94.6339 5.45507 95.7379 5.16707 96.9539 5.16707C98.1539 5.16707 99.2499 5.45507 100.242 6.03107C101.25 6.59107 102.042 7.38307 102.618 8.40707C103.194 9.41507 103.482 10.5591 103.482 11.8391ZM100.602 11.8391C100.602 11.0551 100.434 10.3591 100.098 9.75107C99.7779 9.12707 99.3379 8.64707 98.7779 8.31107C98.2339 7.97507 97.6259 7.80707 96.9539 7.80707C96.2819 7.80707 95.6659 7.97507 95.1059 8.31107C94.5619 8.64707 94.1219 9.12707 93.7859 9.75107C93.4659 10.3591 93.3059 11.0551 93.3059 11.8391C93.3059 12.6231 93.4659 13.3191 93.7859 13.9271C94.1219 14.5351 94.5619 15.0071 95.1059 15.3431C95.6659 15.6791 96.2819 15.8471 96.9539 15.8471C97.6259 15.8471 98.2339 15.6791 98.7779 15.3431C99.3379 15.0071 99.7779 14.5351 100.098 13.9271C100.434 13.3191 100.602 12.6231 100.602 11.8391ZM112.56 5.16707C113.04 5.16707 113.44 5.30307 113.76 5.57507C114.096 5.84707 114.264 6.16707 114.264 6.53507C114.264 7.03107 114.136 7.40707 113.88 7.66307C113.624 7.90307 113.32 8.02307 112.968 8.02307C112.728 8.02307 112.456 7.96707 112.152 7.85507C112.104 7.83907 111.992 7.80707 111.816 7.75907C111.656 7.71107 111.48 7.68707 111.288 7.68707C110.872 7.68707 110.472 7.81507 110.088 8.07107C109.704 8.32707 109.384 8.71907 109.128 9.24707C108.888 9.75907 108.768 10.3751 108.768 11.0951V16.7831C108.768 17.1991 108.632 17.5511 108.36 17.8391C108.088 18.1111 107.744 18.2471 107.328 18.2471C106.912 18.2471 106.568 18.1111 106.296 17.8391C106.024 17.5511 105.888 17.1991 105.888 16.7831V6.87107C105.888 6.45507 106.024 6.11107 106.296 5.83907C106.568 5.55107 106.912 5.40707 107.328 5.40707C107.744 5.40707 108.088 5.55107 108.36 5.83907C108.632 6.11107 108.768 6.45507 108.768 6.87107V7.18307C109.136 6.52707 109.664 6.03107 110.352 5.69507C111.04 5.34307 111.776 5.16707 112.56 5.16707ZM119.414 16.7831C119.414 17.1991 119.27 17.5511 118.982 17.8391C118.71 18.1111 118.366 18.2471 117.95 18.2471C117.55 18.2471 117.214 18.1111 116.942 17.8391C116.67 17.5511 116.534 17.1991 116.534 16.7831V1.95107C116.534 1.53507 116.67 1.19107 116.942 0.919069C117.23 0.63107 117.582 0.48707 117.998 0.48707C118.398 0.48707 118.734 0.63107 119.006 0.919069C119.278 1.19107 119.414 1.53507 119.414 1.95107V16.7831ZM132.921 0.48707C133.337 0.48707 133.681 0.62307 133.953 0.895069C134.225 1.16707 134.361 1.51907 134.361 1.95107V16.7831C134.361 17.1991 134.225 17.5511 133.953 17.8391C133.681 18.1111 133.337 18.2471 132.921 18.2471C132.505 18.2471 132.161 18.1111 131.889 17.8391C131.633 17.5671 131.497 17.2231 131.481 16.8071C131.081 17.2711 130.537 17.6711 129.849 18.0071C129.177 18.3271 128.465 18.4871 127.713 18.4871C126.609 18.4871 125.609 18.2071 124.713 17.6471C123.817 17.0711 123.105 16.2791 122.577 15.2711C122.065 14.2631 121.809 13.1191 121.809 11.8391C121.809 10.5591 122.065 9.41507 122.577 8.40707C123.089 7.38307 123.785 6.59107 124.665 6.03107C125.561 5.45507 126.545 5.16707 127.617 5.16707C128.385 5.16707 129.105 5.31107 129.777 5.59907C130.449 5.87107 131.017 6.22307 131.481 6.65507V1.95107C131.481 1.53507 131.617 1.19107 131.889 0.919069C132.161 0.63107 132.505 0.48707 132.921 0.48707ZM128.073 15.8471C129.113 15.8471 129.961 15.4711 130.617 14.7191C131.273 13.9511 131.601 12.9911 131.601 11.8391C131.601 10.6871 131.273 9.72707 130.617 8.95907C129.961 8.19107 129.113 7.80707 128.073 7.80707C127.049 7.80707 126.209 8.19107 125.553 8.95907C124.897 9.72707 124.569 10.6871 124.569 11.8391C124.569 12.9911 124.889 13.9511 125.529 14.7191C126.185 15.4711 127.033 15.8471 128.073 15.8471Z", "fill", "url(#paint0_linear)"], ["id", "paint0_linear", "x1", "-1.72656", "y1", "9.24706", "x2", "136.273", "y2", "9.24707", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#23BA99"], ["offset", "0.507408", "stop-color", "#20FFE5"], ["offset", "1", "stop-color", "#23BA99"], ["width", "203", "height", "28", "viewBox", "0 0 203 28", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M22.552 1.764C23.152 1.764 23.668 1.98 24.1 2.412C24.556 2.82 24.784 3.336 24.784 3.96V24.804C24.784 25.428 24.58 25.956 24.172 26.388C23.764 26.796 23.224 27 22.552 27C21.88 27 21.328 26.796 20.896 26.388C20.488 25.98 20.284 25.452 20.284 24.804V10.296L14.344 19.368C14.104 19.656 13.828 19.896 13.516 20.088C13.204 20.256 12.88 20.328 12.544 20.304C12.232 20.328 11.92 20.256 11.608 20.088C11.296 19.896 11.02 19.656 10.78 19.368L4.84 9.972V24.804C4.84 25.452 4.648 25.98 4.264 26.388C3.88 26.796 3.376 27 2.752 27C2.152 27 1.66 26.796 1.276 26.388C0.892 25.956 0.7 25.428 0.7 24.804V3.96C0.7 3.36 0.916 2.844 1.348 2.412C1.804 1.98 2.344 1.764 2.968 1.764C3.328 1.764 3.688 1.86 4.048 2.052C4.408 2.22 4.684 2.448 4.876 2.736L12.724 14.796L20.788 2.736C20.98 2.448 21.232 2.22 21.544 2.052C21.88 1.86 22.216 1.764 22.552 1.764ZM33.9041 24.804C33.9041 25.428 33.7001 25.956 33.2921 26.388C32.8841 26.796 32.3681 27 31.7441 27C31.1201 27 30.6041 26.796 30.1961 26.388C29.7881 25.956 29.5841 25.428 29.5841 24.804V9.936C29.5841 9.312 29.7881 8.796 30.1961 8.388C30.6041 7.956 31.1201 7.74 31.7441 7.74C32.3681 7.74 32.8841 7.956 33.2921 8.388C33.7001 8.796 33.9041 9.312 33.9041 9.936V24.804ZM31.7081 5.4C30.8921 5.4 30.3161 5.268 29.9801 5.004C29.6441 4.74 29.4761 4.272 29.4761 3.6V2.916C29.4761 2.244 29.6561 1.776 30.0161 1.512C30.3761 1.248 30.9521 1.116 31.7441 1.116C32.5841 1.116 33.1721 1.248 33.5081 1.512C33.8441 1.776 34.0121 2.244 34.0121 2.916V3.6C34.0121 4.296 33.8321 4.776 33.4721 5.04C33.1361 5.28 32.5481 5.4 31.7081 5.4ZM46.7319 7.38C48.7719 7.38 50.4159 7.704 51.6639 8.352C52.9119 8.976 53.5359 9.816 53.5359 10.872C53.5359 11.4 53.3799 11.868 53.0679 12.276C52.7559 12.66 52.3479 12.852 51.8439 12.852C51.4599 12.852 51.1479 12.804 50.9079 12.708C50.6679 12.588 50.4279 12.444 50.1879 12.276C49.9719 12.084 49.7559 11.928 49.5399 11.808C49.2999 11.688 48.9399 11.58 48.4599 11.484C48.0039 11.388 47.6319 11.34 47.3439 11.34C45.5439 11.34 44.1279 11.904 43.0959 13.032C42.0879 14.136 41.5839 15.588 41.5839 17.388C41.5839 19.116 42.0999 20.556 43.1319 21.708C44.1639 22.836 45.4839 23.4 47.0919 23.4C48.2679 23.4 49.1439 23.256 49.7199 22.968C49.8639 22.896 50.0559 22.776 50.2959 22.608C50.5599 22.416 50.7999 22.272 51.0159 22.176C51.2319 22.08 51.4959 22.032 51.8079 22.032C52.4079 22.032 52.8759 22.224 53.2119 22.608C53.5719 22.992 53.7519 23.484 53.7519 24.084C53.7519 24.66 53.4159 25.2 52.7439 25.704C52.0719 26.208 51.1839 26.616 50.0799 26.928C48.9759 27.216 47.7999 27.36 46.5519 27.36C44.7039 27.36 43.0719 26.928 41.6559 26.064C40.2639 25.2 39.1839 24.012 38.4159 22.5C37.6479 20.964 37.2639 19.26 37.2639 17.388C37.2639 15.444 37.6599 13.716 38.4519 12.204C39.2679 10.692 40.3959 9.516 41.8359 8.676C43.2759 7.812 44.9079 7.38 46.7319 7.38ZM66.8793 7.38C67.5993 7.38 68.1993 7.584 68.6793 7.992C69.1833 8.4 69.4353 8.88 69.4353 9.432C69.4353 10.176 69.2433 10.74 68.8593 11.124C68.4753 11.484 68.0193 11.664 67.4913 11.664C67.1313 11.664 66.7233 11.58 66.2673 11.412C66.1953 11.388 66.0273 11.34 65.7633 11.268C65.5233 11.196 65.2593 11.16 64.9713 11.16C64.3473 11.16 63.7473 11.352 63.1713 11.736C62.5953 12.12 62.1153 12.708 61.7313 13.5C61.3713 14.268 61.1913 15.192 61.1913 16.272V24.804C61.1913 25.428 60.9873 25.956 60.5793 26.388C60.1713 26.796 59.6553 27 59.0312 27C58.4073 27 57.8913 26.796 57.4833 26.388C57.0753 25.956 56.8713 25.428 56.8713 24.804V9.936C56.8713 9.312 57.0753 8.796 57.4833 8.388C57.8913 7.956 58.4073 7.74 59.0312 7.74C59.6553 7.74 60.1713 7.956 60.5793 8.388C60.9873 8.796 61.1913 9.312 61.1913 9.936V10.404C61.7433 9.42 62.5353 8.676 63.5673 8.172C64.5993 7.644 65.7033 7.38 66.8793 7.38ZM90.176 17.388C90.176 19.308 89.744 21.036 88.88 22.572C88.016 24.084 86.828 25.26 85.316 26.1C83.828 26.94 82.184 27.36 80.384 27.36C78.56 27.36 76.904 26.94 75.416 26.1C73.928 25.26 72.752 24.084 71.888 22.572C71.024 21.036 70.592 19.308 70.592 17.388C70.592 15.468 71.024 13.752 71.888 12.24C72.752 10.704 73.928 9.516 75.416 8.676C76.904 7.812 78.56 7.38 80.384 7.38C82.184 7.38 83.828 7.812 85.316 8.676C86.828 9.516 88.016 10.704 88.88 12.24C89.744 13.752 90.176 15.468 90.176 17.388ZM85.856 17.388C85.856 16.212 85.604 15.168 85.1 14.256C84.62 13.32 83.96 12.6 83.12 12.096C82.304 11.592 81.392 11.34 80.384 11.34C79.376 11.34 78.452 11.592 77.612 12.096C76.796 12.6 76.136 13.32 75.632 14.256C75.152 15.168 74.912 16.212 74.912 17.388C74.912 18.564 75.152 19.608 75.632 20.52C76.136 21.432 76.796 22.14 77.612 22.644C78.452 23.148 79.376 23.4 80.384 23.4C81.392 23.4 82.304 23.148 83.12 22.644C83.96 22.14 84.62 21.432 85.1 20.52C85.604 19.608 85.856 18.564 85.856 17.388ZM132.567 1.692C133.143 1.692 133.671 1.92 134.151 2.376C134.655 2.808 134.907 3.36 134.907 4.032C134.907 4.248 134.871 4.488 134.799 4.752L127.707 25.632C127.563 26.04 127.311 26.364 126.951 26.604C126.591 26.844 126.195 26.976 125.763 27C125.331 27 124.923 26.88 124.539 26.64C124.155 26.4 123.855 26.052 123.639 25.596L118.527 13.968L113.379 25.596C113.163 26.052 112.863 26.4 112.479 26.64C112.095 26.88 111.687 27 111.255 27C110.823 26.976 110.427 26.844 110.067 26.604C109.707 26.364 109.455 26.04 109.311 25.632L102.219 4.752C102.147 4.488 102.111 4.248 102.111 4.032C102.111 3.36 102.351 2.808 102.831 2.376C103.335 1.92 103.887 1.692 104.487 1.692C104.967 1.692 105.399 1.824 105.783 2.088C106.167 2.328 106.431 2.664 106.575 3.096L111.939 19.368L116.619 8.136C116.811 7.704 117.087 7.368 117.447 7.128C117.807 6.864 118.215 6.744 118.671 6.768C119.127 6.744 119.523 6.864 119.859 7.128C120.219 7.368 120.495 7.704 120.687 8.136L125.115 19.26L130.443 3.096C130.587 2.664 130.851 2.328 131.235 2.088C131.643 1.824 132.087 1.692 132.567 1.692ZM155.813 17.388C155.813 19.308 155.381 21.036 154.517 22.572C153.653 24.084 152.465 25.26 150.953 26.1C149.465 26.94 147.821 27.36 146.021 27.36C144.197 27.36 142.541 26.94 141.053 26.1C139.565 25.26 138.389 24.084 137.525 22.572C136.661 21.036 136.229 19.308 136.229 17.388C136.229 15.468 136.661 13.752 137.525 12.24C138.389 10.704 139.565 9.516 141.053 8.676C142.541 7.812 144.197 7.38 146.021 7.38C147.821 7.38 149.465 7.812 150.953 8.676C152.465 9.516 153.653 10.704 154.517 12.24C155.381 13.752 155.813 15.468 155.813 17.388ZM151.493 17.388C151.493 16.212 151.241 15.168 150.737 14.256C150.257 13.32 149.597 12.6 148.757 12.096C147.941 11.592 147.029 11.34 146.021 11.34C145.013 11.34 144.089 11.592 143.249 12.096C142.433 12.6 141.773 13.32 141.269 14.256C140.789 15.168 140.549 16.212 140.549 17.388C140.549 18.564 140.789 19.608 141.269 20.52C141.773 21.432 142.433 22.14 143.249 22.644C144.089 23.148 145.013 23.4 146.021 23.4C147.029 23.4 147.941 23.148 148.757 22.644C149.597 22.14 150.257 21.432 150.737 20.52C151.241 19.608 151.493 18.564 151.493 17.388ZM169.43 7.38C170.15 7.38 170.75 7.584 171.23 7.992C171.734 8.4 171.986 8.88 171.986 9.432C171.986 10.176 171.794 10.74 171.41 11.124C171.026 11.484 170.57 11.664 170.042 11.664C169.682 11.664 169.274 11.58 168.818 11.412C168.746 11.388 168.578 11.34 168.314 11.268C168.074 11.196 167.81 11.16 167.522 11.16C166.898 11.16 166.298 11.352 165.722 11.736C165.146 12.12 164.666 12.708 164.282 13.5C163.922 14.268 163.742 15.192 163.742 16.272V24.804C163.742 25.428 163.538 25.956 163.13 26.388C162.722 26.796 162.206 27 161.582 27C160.958 27 160.442 26.796 160.034 26.388C159.626 25.956 159.422 25.428 159.422 24.804V9.936C159.422 9.312 159.626 8.796 160.034 8.388C160.442 7.956 160.958 7.74 161.582 7.74C162.206 7.74 162.722 7.956 163.13 8.388C163.538 8.796 163.742 9.312 163.742 9.936V10.404C164.294 9.42 165.086 8.676 166.118 8.172C167.15 7.644 168.254 7.38 169.43 7.38ZM179.711 24.804C179.711 25.428 179.495 25.956 179.063 26.388C178.655 26.796 178.139 27 177.515 27C176.915 27 176.411 26.796 176.003 26.388C175.595 25.956 175.391 25.428 175.391 24.804V2.556C175.391 1.932 175.595 1.416 176.003 1.008C176.435 0.575999 176.963 0.36 177.587 0.36C178.187 0.36 178.691 0.575999 179.099 1.008C179.507 1.416 179.711 1.932 179.711 2.556V24.804ZM199.971 0.36C200.595 0.36 201.111 0.563999 201.519 0.971998C201.927 1.38 202.131 1.908 202.131 2.556V24.804C202.131 25.428 201.927 25.956 201.519 26.388C201.111 26.796 200.595 27 199.971 27C199.347 27 198.831 26.796 198.423 26.388C198.039 25.98 197.835 25.464 197.811 24.84C197.211 25.536 196.395 26.136 195.363 26.64C194.355 27.12 193.287 27.36 192.159 27.36C190.503 27.36 189.003 26.94 187.659 26.1C186.315 25.236 185.247 24.048 184.455 22.536C183.687 21.024 183.303 19.308 183.303 17.388C183.303 15.468 183.687 13.752 184.455 12.24C185.223 10.704 186.267 9.516 187.587 8.676C188.931 7.812 190.407 7.38 192.015 7.38C193.167 7.38 194.247 7.596 195.255 8.028C196.263 8.436 197.115 8.964 197.811 9.612V2.556C197.811 1.932 198.015 1.416 198.423 1.008C198.831 0.575999 199.347 0.36 199.971 0.36ZM192.699 23.4C194.259 23.4 195.531 22.836 196.515 21.708C197.499 20.556 197.991 19.116 197.991 17.388C197.991 15.66 197.499 14.22 196.515 13.068C195.531 11.916 194.259 11.34 192.699 11.34C191.163 11.34 189.903 11.916 188.919 13.068C187.935 14.22 187.443 15.66 187.443 17.388C187.443 19.116 187.923 20.556 188.883 21.708C189.867 22.836 191.139 23.4 192.699 23.4Z", "fill", "url(#paint0_linear)"], ["id", "paint0_linear", "x1", "-2", "y1", "13.5", "x2", "205", "y2", "13.5", "gradientUnits", "userSpaceOnUse"], ["offset", "0.5", "stop-color", "#20FFE5"]], template: function MicroWorldLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MicroWorldLogoComponent_ng_container_0_Template, 8, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MicroWorldLogoComponent_ng_template_1_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.size === "s")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWljcm8td29ybGQtbG9nby9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21pY3JvLXdvcmxkLWxvZ28vbWljcm8td29ybGQtbG9nby5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWljcm8td29ybGQtbG9nby9taWNyby13b3JsZC1sb2dvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWljcm8td29ybGQtbG9nby9taWNyby13b3JsZC1sb2dvLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MicroWorldLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'micro-world-logo',
                templateUrl: './micro-world-logo.component.html',
                styleUrls: ['./micro-world-logo.component.less']
            }]
    }], function () { return []; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/micro-world-logo/micro-world-logo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/micro-world-logo/micro-world-logo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MicroWorldLogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroWorldLogoModule", function() { return MicroWorldLogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _micro_world_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./micro-world-logo.component */ "./src/app/shared/components/micro-world-logo/micro-world-logo.component.ts");




class MicroWorldLogoModule {
}
MicroWorldLogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MicroWorldLogoModule });
MicroWorldLogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MicroWorldLogoModule_Factory(t) { return new (t || MicroWorldLogoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MicroWorldLogoModule, { declarations: [_micro_world_logo_component__WEBPACK_IMPORTED_MODULE_2__["MicroWorldLogoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_micro_world_logo_component__WEBPACK_IMPORTED_MODULE_2__["MicroWorldLogoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MicroWorldLogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _micro_world_logo_component__WEBPACK_IMPORTED_MODULE_2__["MicroWorldLogoComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _micro_world_logo_component__WEBPACK_IMPORTED_MODULE_2__["MicroWorldLogoComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/mw-svg/mw-svg.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/mw-svg/mw-svg.component.ts ***!
  \**************************************************************/
/*! exports provided: MwSvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MwSvgComponent", function() { return MwSvgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MwSvgComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clipPath", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MwSvgComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clipPath", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MwSvgComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MwSvgComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MwSvgComponent {
    constructor() {
        this.src = '';
    }
    ngOnInit() {
    }
}
MwSvgComponent.ɵfac = function MwSvgComponent_Factory(t) { return new (t || MwSvgComponent)(); };
MwSvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MwSvgComponent, selectors: [["mw-svg"]], inputs: { src: "src" }, decls: 5, vars: 5, consts: [[3, "ngSwitch"], ["width", "24", "height", "25", "viewBox", "0 0 24 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "24", "height", "25", "viewBox", "0 0 24 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0)"], ["d", "M0.782238 12.9636H15.9128C16.3448 12.9636 16.6954 12.6114 16.6954 12.1775C16.6954 11.7435 16.3448 11.3914 15.9128 11.3914H0.782238C0.350237 11.3914 -0.000371933 11.7435 -0.000371933 12.1775C-0.000371933 12.6114 0.350237 12.9636 0.782238 12.9636Z", "fill", "#9CA4AF"], ["d", "M11.7388 17.1612C11.9392 17.1612 12.1395 17.0848 12.2919 16.9305L16.4658 12.7342C16.7715 12.4266 16.7715 11.9283 16.4658 11.621L12.2919 7.42461C11.9862 7.11725 11.4906 7.11725 11.1847 7.42461C10.879 7.73196 10.879 8.23026 11.1847 8.53761L14.8056 12.178L11.1847 15.8185C10.879 16.1258 10.879 16.6241 11.1847 16.9315C11.3381 17.0848 11.5386 17.1612 11.7388 17.1612Z", "fill", "#9CA4AF"], ["d", "M12.5217 23.7181C18.8504 23.7181 24 18.5407 24 12.1779C24 5.81508 18.8504 0.637695 12.5217 0.637695C7.77291 0.637695 3.58014 3.51012 1.83857 7.95639C1.67998 8.36017 1.87831 8.81659 2.27993 8.97699C2.68174 9.13451 3.13572 8.93819 3.29526 8.53229C4.79895 4.69247 8.42081 2.21135 12.5217 2.21135C17.9875 2.21135 22.4348 6.68278 22.4348 12.1779C22.4348 17.673 17.9875 22.1445 12.5217 22.1445C8.42081 22.1445 4.79895 19.6633 3.29526 15.8247C3.13667 15.4186 2.6827 15.2224 2.27993 15.3798C1.87831 15.5392 1.67998 15.9966 1.83857 16.4006C3.58014 20.8457 7.77291 23.7181 12.5217 23.7181Z", "fill", "#9CA4AF"], ["id", "clip0"], ["width", "24", "height", "24.1294", "fill", "white", "transform", "matrix(-1 0 0 1 24 0.113281)"], ["d", "M23.3397 23.8376C22.4593 24.7227 21.0323 24.7227 20.1518 23.8376L16.1739 19.8382C14.5385 20.893 12.6053 21.5214 10.518 21.5214C4.70949 21.5214 0 16.7872 0 10.9467C0 5.10624 4.70949 0.37207 10.518 0.37207C16.3273 0.37207 21.036 5.10614 21.036 10.9467C21.036 13.0446 20.4101 14.9889 19.3617 16.6339L23.3397 20.6333C24.2201 21.5185 24.2201 22.9524 23.3397 23.8376ZM10.518 3.39338C6.36905 3.39338 3.00516 6.77465 3.00516 10.9467C3.00516 15.1187 6.3691 18.5 10.518 18.5C14.6676 18.5 18.0308 15.1187 18.0308 10.9467C18.0308 6.77465 14.6676 3.39338 10.518 3.39338Z", "fill", "#23BA99", "fill-opacity", "0.9"], ["width", "24", "height", "24.1294", "fill", "white", "transform", "translate(0 0.37207)"], ["d", "M21.8906 3.50537H2.10938C0.947719 3.50537 0 4.45716 0 5.62612V19.7644C0 20.9294 0.9435 21.8852 2.10938 21.8852H21.8906C23.0494 21.8852 24 20.9366 24 19.7644V5.62612C24 4.46112 23.0565 3.50537 21.8906 3.50537ZM21.5993 4.9192L12.0447 14.5254L2.40745 4.9192H21.5993ZM1.40625 19.4717V5.91214L8.1787 12.6627L1.40625 19.4717ZM2.40061 20.4713L9.17733 13.6581L11.5519 16.0249C11.8268 16.2989 12.2703 16.298 12.5441 16.0228L14.8594 13.695L21.5994 20.4713H2.40061ZM22.5938 19.4716L15.8537 12.6953L22.5938 5.91887V19.4716Z", "fill", "#9CA4AF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11 2.89844V11.947H2V13.9577H11V23.0063H13V13.9577H22V11.947H13V2.89844H11Z", "fill", "#9CA4AF"]], template: function MwSvgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MwSvgComponent__svg_svg_1_Template, 8, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MwSvgComponent__svg_svg_2_Template, 6, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MwSvgComponent__svg_svg_3_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MwSvgComponent__svg_svg_4_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.src);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "iconLogoutLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "iconSearchLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "iconMailLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "iconPlusLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL213LXN2Zy9tdy1zdmcuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MwSvgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mw-svg',
                templateUrl: './mw-svg.component.html',
                styleUrls: ['./mw-svg.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/mw-svg/mw-svg.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/mw-svg/mw-svg.module.ts ***!
  \***********************************************************/
/*! exports provided: MwSvgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MwSvgModule", function() { return MwSvgModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _mw_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mw-svg.component */ "./src/app/shared/components/mw-svg/mw-svg.component.ts");




class MwSvgModule {
}
MwSvgModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MwSvgModule });
MwSvgModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MwSvgModule_Factory(t) { return new (t || MwSvgModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MwSvgModule, { declarations: [_mw_svg_component__WEBPACK_IMPORTED_MODULE_2__["MwSvgComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_mw_svg_component__WEBPACK_IMPORTED_MODULE_2__["MwSvgComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MwSvgModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _mw_svg_component__WEBPACK_IMPORTED_MODULE_2__["MwSvgComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _mw_svg_component__WEBPACK_IMPORTED_MODULE_2__["MwSvgComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/root/root.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/root/root.component.ts ***!
  \**********************************************************/
/*! exports provided: MuiRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuiRootComponent", function() { return MuiRootComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/shared/components/header/header.component.ts");





function MuiRootComponent_mw_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mw-header");
} }
function MuiRootComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 2);
} }
const _c0 = ["*"];
class MuiRootComponent {
    constructor(ViewContainerRef) {
        this.ViewContainerRef = ViewContainerRef;
        this.showHeader = true;
        this.popupIsVisible = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    ngOnInit() {
        // console.log(this.showHeader)
    }
    ngOnChanges(changes) {
        console.log(changes);
        // console.log(this.showHeader)
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
    }
}
MuiRootComponent.ɵfac = function MuiRootComponent_Factory(t) { return new (t || MuiRootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
MuiRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MuiRootComponent, selectors: [["mui-root"]], hostVars: 1, hostBindings: function MuiRootComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-host-theme", ctx.theme);
    } }, inputs: { customHeaderComponent: "customHeaderComponent", theme: "theme", showHeader: "showHeader", backgroundColor: "backgroundColor" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[4, "ngIf"], [4, "ngTemplateOutlet"], ["customHeaderElement", ""]], template: function MuiRootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MuiRootComponent_mw_header_0_Template, 1, 0, "mw-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MuiRootComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showHeader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: inherit;\n  width: inherit;\n}\n[data-host-theme=\"tech-dark\"][_nghost-%COMP%] {\n  background-color: #17181c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcm9vdC9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Jvb3Qvcm9vdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcm9vdC9yb290LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDREo7QURHSTtFQUNJLHlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yb290L3Jvb3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL3N0eWxlcy9taWNyby13b3JsZC5zdHlsZXMubGVzcyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG5cbiAgICAmW2RhdGEtaG9zdC10aGVtZT1cInRlY2gtZGFya1wiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBtdy1jb2xvci1iYWNrZ3JvdW5kLXNlY29uZGFyeTtcbiAgICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuOmhvc3RbZGF0YS1ob3N0LXRoZW1lPVwidGVjaC1kYXJrXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTgxYztcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MuiRootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mui-root',
                templateUrl: './root.component.html',
                styleUrls: ['./root.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]; }, { customHeaderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.data-host-theme']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/root/root.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/root/root.module.ts ***!
  \*******************************************************/
/*! exports provided: MuiRootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuiRootModule", function() { return MuiRootModule; });
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../header/header.module */ "./src/app/shared/components/header/header.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.component */ "./src/app/shared/components/root/root.component.ts");





class MuiRootModule {
}
MuiRootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MuiRootModule });
MuiRootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MuiRootModule_Factory(t) { return new (t || MuiRootModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_0__["HeaderModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MuiRootModule, { declarations: [_root_component__WEBPACK_IMPORTED_MODULE_3__["MuiRootComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_0__["HeaderModule"]], exports: [_root_component__WEBPACK_IMPORTED_MODULE_3__["MuiRootComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MuiRootModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _root_component__WEBPACK_IMPORTED_MODULE_3__["MuiRootComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _header_header_module__WEBPACK_IMPORTED_MODULE_0__["HeaderModule"],
                ],
                exports: [
                    _root_component__WEBPACK_IMPORTED_MODULE_3__["MuiRootComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiEndpoints: {
        register: 'api/user/register',
        login: 'api/user/login',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Maolink\Development\Dev\micro-world\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map