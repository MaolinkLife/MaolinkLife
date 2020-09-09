(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-page-main-page-module"],{

/***/ "./src/app/pages/main-page/main-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/main-page/main-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page.component */ "./src/app/pages/main-page/main-page.component.ts");





const routes = [{ path: '', component: _main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"] }];
class MainPageRoutingModule {
}
MainPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainPageRoutingModule });
MainPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainPageRoutingModule_Factory(t) { return new (t || MainPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MainPageComponent_a_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
} }
const _c0 = function (a0) { return { active: a0 }; };
function MainPageComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const itemIndex_r2 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleActive(itemIndex_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_a_17_div_1_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, sidebarItem_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarItem_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sidebarItem_r1.name, " ");
} }
class MainPageComponent {
    constructor() {
        this.sidebarItems = [
            {
                name: 'Петеряжка мягкой мебели',
                active: false,
            },
            {
                name: 'Работа с натуральной кожей',
                active: false,
            },
            {
                name: 'Портфолио работ',
                active: false,
            },
            {
                name: 'Каталог тканей',
                active: true,
            },
            {
                name: 'Бары, кафе, рестораны, офисы',
                active: false,
            },
            {
                name: 'Доставка и оплата',
                active: false,
            },
            {
                name: 'Как мы работаем',
                active: false,
            },
            {
                name: 'О компании',
                active: false,
            },
            {
                name: 'Отзывы',
                active: false,
            },
            {
                name: 'Как заказать',
                active: false,
            },
            {
                name: 'Уход за мебелью',
                active: false,
            },
            {
                name: 'Вопрос - ответ',
                active: false,
            },
        ];
        this.menuitems = [
            {
                name: 'Вопрос - ответ',
                active: false,
            },
        ];
    }
    ngOnInit() {
    }
    toggleActive(index) {
        this.sidebarItems.forEach(el => el.active = false);
        this.sidebarItems[index].active = true;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 24, vars: 1, consts: [[1, "frame"], [1, "sidebar"], [1, "sidebar__title"], [1, "logo"], [1, "subtitle"], [1, "underline"], [1, "sidebar__navigate"], [1, "menu"], [1, "menu__icon"], ["height", "32px", "id", "Layer_1", "version", "1.1", "viewBox", "0 0 32 32", "width", "32px", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "enable-background", "new 0 0 32 32"], ["d", "M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z", "fill", "currentColor"], [1, "menu__text"], [1, "menu-list"], ["class", "menu-list__link", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content"], [1, "header"], [1, "header__description"], [1, "header__logo"], ["src", "../../../assets/images/cup.png", "alt", ""], [1, "menu-list__link", 3, "ngClass", "click"], ["class", "menu-list__link--item", 4, "ngIf"], [1, "menu-list__link--item"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OBBEY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041C\u0435\u0431\u0435\u043B\u044C \u0443 \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041C\u0435\u043D\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MainPageComponent_a_17_Template, 3, 5, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u21162 \u043F\u043E \u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u0438 \u0440\u0435\u0441\u0442\u043E\u0432\u0440\u0430\u0446\u0438\u0438 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: inherit;\n}\n.frame[_ngcontent-%COMP%] {\n  display: flex;\n  height: inherit;\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 42pt;\n  color: #edbe7d;\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 24px;\n  border-left: 2px solid #404244;\n  display: flex;\n  flex-direction: column;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 18pt;\n  color: #fffffe;\n  text-transform: uppercase;\n  font-family: \"BerlingskeSerif-Regular\";\n}\n.sidebar[_ngcontent-%COMP%] {\n  max-width: 360px;\n  margin-left: 240px;\n  height: 100%;\n}\n.sidebar__title[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.underline[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(to left, #404244 0%, rgba(64, 66, 68, 0) 100%);\n  border-radius: 2px 0 0 2px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 36px;\n}\n.header__description[_ngcontent-%COMP%] {\n  color: #d9dbdc;\n  max-width: 234px;\n  font-size: 16pt;\n  line-height: 112%;\n}\n.header__logo[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.menu[_ngcontent-%COMP%] {\n  color: #fffffe;\n  display: flex;\n  align-items: center;\n  padding: 16px 0;\n  margin-left: 24px;\n}\n.menu__icon[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  color: #fcd977;\n}\n.menu__text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"BerlingskeSerif-Regular\";\n}\n.menu-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 56px;\n  margin-top: 44px;\n  margin-left: 24px;\n}\n.menu-list__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #e9e9e8;\n  font-family: \"MuseoSansCyrl-Black\";\n  text-transform: uppercase;\n  font-size: 12pt;\n  margin-bottom: 30px;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n  display: flex;\n  align-items: center;\n}\n.menu-list__link--item[_ngcontent-%COMP%] {\n  height: 2px;\n  background-color: #fcd977;\n  display: inline-flex;\n  width: 26px;\n  height: 3px;\n  max-height: 3px;\n  margin-right: 8px;\n  min-width: 26px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.menu-list__link[_ngcontent-%COMP%]:hover, .menu-list__link.active[_ngcontent-%COMP%] {\n  transition: 0.2s ease-in-out;\n  color: #fcd977;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7QURTQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDUEo7QURVQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDUko7QURXQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDVEo7QURZQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQ1ZKO0FEYUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1hKO0FEYUk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1hSO0FEZUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBFQUFBO0VBQ0EsMEJBQUE7QUNiSjtBRGdCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZEo7QURnQkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNkUjtBRGlCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNmUjtBRG1CQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNqQko7QURtQkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNqQlI7QURvQkk7RUFDSSxlQUFBO0VBQ0Esc0NBQUE7QUNsQlI7QURzQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNwQko7QURzQkk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNwQlI7QURzQlE7RUFFSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNyQlo7QUR5Qkk7O0VBRUksNEJBQUE7RUFDQSxjQUFBO0FDdkJSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbkBwcm9qZWN0LWNvbG9yLXByaW1hcnktYWN0aXZlOiAjZjhlMTlkO1xuQHByb2plY3QtY29sb3ItcHJpbWFyeTogI2ZjZDk3NztcbkBwcm9qZWN0LWNvbG9yLWRlZmF1bHQtdGV4dDogI2U5ZTllODtcblxuQHByb2plY3QtZm9udC1wcmltYXJ5LWJsYWNrOiBcIk11c2VvU2Fuc0N5cmwtQmxhY2tcIjtcbkBwcm9qZWN0LWZvbnQtc2Vjb25kYXJ5LXJlZ3VsYXI6IFwiQmVybGluZ3NrZVNlcmlmLVJlZ3VsYXJcIjtcblxuLmZyYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogNDJwdDtcbiAgICBjb2xvcjogI2VkYmU3ZDtcbn1cblxuLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzQwNDI0NDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB0O1xuICAgIGNvbG9yOiAjZmZmZmZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IEBwcm9qZWN0LWZvbnQtc2Vjb25kYXJ5LXJlZ3VsYXI7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLnVuZGVybGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM0MDQyNDQgMCUsIHJnYmEoNjQsIDY2LCA2OCwgMCkgMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG5cbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGNvbG9yOiAjZDlkYmRjO1xuICAgICAgICBtYXgtd2lkdGg6IDIzNHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMTIlO1xuICAgIH1cblxuICAgICZfX2xvZ28ge1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG5cbi5tZW51IHtcbiAgICBjb2xvcjogI2ZmZmZmZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICNmY2Q5Nzc7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBwcm9qZWN0LWZvbnQtc2Vjb25kYXJ5LXJlZ3VsYXI7XG4gICAgfVxufVxuXG4ubWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbi10b3A6IDQ0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG5cbiAgICAmX19saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogQHByb2plY3QtY29sb3ItZGVmYXVsdC10ZXh0O1xuICAgICAgICBmb250LWZhbWlseTogQHByb2plY3QtZm9udC1wcmltYXJ5LWJsYWNrO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAmLS1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHJvamVjdC1jb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGluazpob3ZlcixcbiAgICAmX19saW5rLmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGNvbG9yOiBAcHJvamVjdC1jb2xvci1wcmltYXJ5O1xuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbi5mcmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbi5sb2dvIHtcbiAgZm9udC1zaXplOiA0MnB0O1xuICBjb2xvcjogI2VkYmU3ZDtcbn1cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0MDQyNDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3VidGl0bGUge1xuICBmb250LXNpemU6IDE4cHQ7XG4gIGNvbG9yOiAjZmZmZmZlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJCZXJsaW5nc2tlU2VyaWYtUmVndWxhclwiO1xufVxuLnNpZGViYXIge1xuICBtYXgtd2lkdGg6IDM2MHB4O1xuICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zaWRlYmFyX190aXRsZSB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVuZGVybGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM0MDQyNDQgMCUsIHJnYmEoNjQsIDY2LCA2OCwgMCkgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xufVxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbn1cbi5oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICNkOWRiZGM7XG4gIG1heC13aWR0aDogMjM0cHg7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgbGluZS1oZWlnaHQ6IDExMiU7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudSB7XG4gIGNvbG9yOiAjZmZmZmZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm1lbnVfX2ljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZmNkOTc3O1xufVxuLm1lbnVfX3RleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJlcmxpbmdza2VTZXJpZi1SZWd1bGFyXCI7XG59XG4ubWVudS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xuICBtYXJnaW4tdG9wOiA0NHB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cbi5tZW51LWxpc3RfX2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZTllOWU4O1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLUJsYWNrXCI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1lbnUtbGlzdF9fbGluay0taXRlbSB7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkOTc3O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogM3B4O1xuICBtYXgtaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtaW4td2lkdGg6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5tZW51LWxpc3RfX2xpbms6aG92ZXIsXG4ubWVudS1saXN0X19saW5rLmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjZmNkOTc3O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/main-page/main-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/main-page/main-page.module.ts ***!
  \*****************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page-routing.module */ "./src/app/pages/main-page/main-page-routing.module.ts");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page.component */ "./src/app/pages/main-page/main-page.component.ts");





class MainPageModule {
}
MainPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainPageModule });
MainPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainPageModule_Factory(t) { return new (t || MainPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageModule, { declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-main-page-main-page-module-es2015.js.map