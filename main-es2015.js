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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-main-page-main-page-module */ "pages-main-page-main-page-module").then(__webpack_require__.bind(null, /*! ./pages/main-page/main-page.module */ "./src/app/pages/main-page/main-page.module.ts")).then(m => m.MainPageModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'furniture';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvTWFvbGluay9EZXNrdG9wL0Rldi9mdXJuaXR1cmUvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_padding_of_upholstered_furniture_page_padding_of_upholstered_furniture_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/padding-of-upholstered-furniture-page/padding-of-upholstered-furniture-page.component */ "./src/app/pages/padding-of-upholstered-furniture-page/padding-of-upholstered-furniture-page.component.ts");
/* harmony import */ var _pages_working_with_genuine_leather_page_working_with_genuine_leather_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/working-with-genuine-leather-page/working-with-genuine-leather-page.component */ "./src/app/pages/working-with-genuine-leather-page/working-with-genuine-leather-page.component.ts");
/* harmony import */ var _pages_portfolio_of_works_page_portfolio_of_works_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/portfolio-of-works-page/portfolio-of-works-page.component */ "./src/app/pages/portfolio-of-works-page/portfolio-of-works-page.component.ts");
/* harmony import */ var _pages_bars_cafes_restaurants_offices_page_bars_cafes_restaurants_offices_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/bars-cafes-restaurants-offices-page/bars-cafes-restaurants-offices-page.component */ "./src/app/pages/bars-cafes-restaurants-offices-page/bars-cafes-restaurants-offices-page.component.ts");
/* harmony import */ var _pages_shipping_and_payment_page_shipping_and_payment_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/shipping-and-payment-page/shipping-and-payment-page.component */ "./src/app/pages/shipping-and-payment-page/shipping-and-payment-page.component.ts");
/* harmony import */ var _pages_about_company_page_about_company_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/about-company-page/about-company-page.component */ "./src/app/pages/about-company-page/about-company-page.component.ts");
/* harmony import */ var _pages_furniture_care_page_furniture_care_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/furniture-care-page/furniture-care-page.component */ "./src/app/pages/furniture-care-page/furniture-care-page.component.ts");
/* harmony import */ var _pages_question_answer_page_question_answer_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/question-answer-page/question-answer-page.component */ "./src/app/pages/question-answer-page/question-answer-page.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_padding_of_upholstered_furniture_page_padding_of_upholstered_furniture_page_component__WEBPACK_IMPORTED_MODULE_4__["PaddingOfUpholsteredFurniturePageComponent"],
        _pages_working_with_genuine_leather_page_working_with_genuine_leather_page_component__WEBPACK_IMPORTED_MODULE_5__["WorkingWithGenuineLeatherPageComponent"],
        _pages_portfolio_of_works_page_portfolio_of_works_page_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioOfWorksPageComponent"],
        _pages_bars_cafes_restaurants_offices_page_bars_cafes_restaurants_offices_page_component__WEBPACK_IMPORTED_MODULE_7__["BarsCafesRestaurantsOfficesPageComponent"],
        _pages_shipping_and_payment_page_shipping_and_payment_page_component__WEBPACK_IMPORTED_MODULE_8__["ShippingAndPaymentPageComponent"],
        _pages_about_company_page_about_company_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutCompanyPageComponent"],
        _pages_furniture_care_page_furniture_care_page_component__WEBPACK_IMPORTED_MODULE_10__["FurnitureCarePageComponent"],
        _pages_question_answer_page_question_answer_page_component__WEBPACK_IMPORTED_MODULE_11__["QuestionAnswerPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_padding_of_upholstered_furniture_page_padding_of_upholstered_furniture_page_component__WEBPACK_IMPORTED_MODULE_4__["PaddingOfUpholsteredFurniturePageComponent"],
                    _pages_working_with_genuine_leather_page_working_with_genuine_leather_page_component__WEBPACK_IMPORTED_MODULE_5__["WorkingWithGenuineLeatherPageComponent"],
                    _pages_portfolio_of_works_page_portfolio_of_works_page_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioOfWorksPageComponent"],
                    _pages_bars_cafes_restaurants_offices_page_bars_cafes_restaurants_offices_page_component__WEBPACK_IMPORTED_MODULE_7__["BarsCafesRestaurantsOfficesPageComponent"],
                    _pages_shipping_and_payment_page_shipping_and_payment_page_component__WEBPACK_IMPORTED_MODULE_8__["ShippingAndPaymentPageComponent"],
                    _pages_about_company_page_about_company_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutCompanyPageComponent"],
                    _pages_furniture_care_page_furniture_care_page_component__WEBPACK_IMPORTED_MODULE_10__["FurnitureCarePageComponent"],
                    _pages_question_answer_page_question_answer_page_component__WEBPACK_IMPORTED_MODULE_11__["QuestionAnswerPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/about-company-page/about-company-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/about-company-page/about-company-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: AboutCompanyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCompanyPageComponent", function() { return AboutCompanyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutCompanyPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutCompanyPageComponent.ɵfac = function AboutCompanyPageComponent_Factory(t) { return new (t || AboutCompanyPageComponent)(); };
AboutCompanyPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutCompanyPageComponent, selectors: [["app-about-company-page"]], decls: 2, vars: 0, template: function AboutCompanyPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-company-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LWNvbXBhbnktcGFnZS9hYm91dC1jb21wYW55LXBhZ2UuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutCompanyPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-company-page',
                templateUrl: './about-company-page.component.html',
                styleUrls: ['./about-company-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/bars-cafes-restaurants-offices-page/bars-cafes-restaurants-offices-page.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/bars-cafes-restaurants-offices-page/bars-cafes-restaurants-offices-page.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: BarsCafesRestaurantsOfficesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsCafesRestaurantsOfficesPageComponent", function() { return BarsCafesRestaurantsOfficesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BarsCafesRestaurantsOfficesPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
BarsCafesRestaurantsOfficesPageComponent.ɵfac = function BarsCafesRestaurantsOfficesPageComponent_Factory(t) { return new (t || BarsCafesRestaurantsOfficesPageComponent)(); };
BarsCafesRestaurantsOfficesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarsCafesRestaurantsOfficesPageComponent, selectors: [["app-bars-cafes-restaurants-offices-page"]], decls: 2, vars: 0, template: function BarsCafesRestaurantsOfficesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bars-cafes-restaurants-offices-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhcnMtY2FmZXMtcmVzdGF1cmFudHMtb2ZmaWNlcy1wYWdlL2JhcnMtY2FmZXMtcmVzdGF1cmFudHMtb2ZmaWNlcy1wYWdlLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarsCafesRestaurantsOfficesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bars-cafes-restaurants-offices-page',
                templateUrl: './bars-cafes-restaurants-offices-page.component.html',
                styleUrls: ['./bars-cafes-restaurants-offices-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/furniture-care-page/furniture-care-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/furniture-care-page/furniture-care-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: FurnitureCarePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureCarePageComponent", function() { return FurnitureCarePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FurnitureCarePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
FurnitureCarePageComponent.ɵfac = function FurnitureCarePageComponent_Factory(t) { return new (t || FurnitureCarePageComponent)(); };
FurnitureCarePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FurnitureCarePageComponent, selectors: [["app-furniture-care-page"]], decls: 2, vars: 0, template: function FurnitureCarePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "furniture-care-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1cm5pdHVyZS1jYXJlLXBhZ2UvZnVybml0dXJlLWNhcmUtcGFnZS5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FurnitureCarePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-furniture-care-page',
                templateUrl: './furniture-care-page.component.html',
                styleUrls: ['./furniture-care-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/padding-of-upholstered-furniture-page/padding-of-upholstered-furniture-page.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/padding-of-upholstered-furniture-page/padding-of-upholstered-furniture-page.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PaddingOfUpholsteredFurniturePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaddingOfUpholsteredFurniturePageComponent", function() { return PaddingOfUpholsteredFurniturePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PaddingOfUpholsteredFurniturePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaddingOfUpholsteredFurniturePageComponent.ɵfac = function PaddingOfUpholsteredFurniturePageComponent_Factory(t) { return new (t || PaddingOfUpholsteredFurniturePageComponent)(); };
PaddingOfUpholsteredFurniturePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaddingOfUpholsteredFurniturePageComponent, selectors: [["app-padding-of-upholstered-furniture-page"]], decls: 2, vars: 0, template: function PaddingOfUpholsteredFurniturePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "padding-of-upholstered-furniture-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZGRpbmctb2YtdXBob2xzdGVyZWQtZnVybml0dXJlLXBhZ2UvcGFkZGluZy1vZi11cGhvbHN0ZXJlZC1mdXJuaXR1cmUtcGFnZS5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaddingOfUpholsteredFurniturePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-padding-of-upholstered-furniture-page',
                templateUrl: './padding-of-upholstered-furniture-page.component.html',
                styleUrls: ['./padding-of-upholstered-furniture-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/portfolio-of-works-page/portfolio-of-works-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/portfolio-of-works-page/portfolio-of-works-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: PortfolioOfWorksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioOfWorksPageComponent", function() { return PortfolioOfWorksPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioOfWorksPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioOfWorksPageComponent.ɵfac = function PortfolioOfWorksPageComponent_Factory(t) { return new (t || PortfolioOfWorksPageComponent)(); };
PortfolioOfWorksPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioOfWorksPageComponent, selectors: [["app-portfolio-of-works-page"]], decls: 2, vars: 0, template: function PortfolioOfWorksPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "portfolio-of-works-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby1vZi13b3Jrcy1wYWdlL3BvcnRmb2xpby1vZi13b3Jrcy1wYWdlLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioOfWorksPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-of-works-page',
                templateUrl: './portfolio-of-works-page.component.html',
                styleUrls: ['./portfolio-of-works-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/question-answer-page/question-answer-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/question-answer-page/question-answer-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: QuestionAnswerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswerPageComponent", function() { return QuestionAnswerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class QuestionAnswerPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuestionAnswerPageComponent.ɵfac = function QuestionAnswerPageComponent_Factory(t) { return new (t || QuestionAnswerPageComponent)(); };
QuestionAnswerPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionAnswerPageComponent, selectors: [["app-question-answer-page"]], decls: 2, vars: 0, template: function QuestionAnswerPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "question-answer-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uLWFuc3dlci1wYWdlL3F1ZXN0aW9uLWFuc3dlci1wYWdlLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionAnswerPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question-answer-page',
                templateUrl: './question-answer-page.component.html',
                styleUrls: ['./question-answer-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/shipping-and-payment-page/shipping-and-payment-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/shipping-and-payment-page/shipping-and-payment-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ShippingAndPaymentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAndPaymentPageComponent", function() { return ShippingAndPaymentPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ShippingAndPaymentPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShippingAndPaymentPageComponent.ɵfac = function ShippingAndPaymentPageComponent_Factory(t) { return new (t || ShippingAndPaymentPageComponent)(); };
ShippingAndPaymentPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShippingAndPaymentPageComponent, selectors: [["app-shipping-and-payment-page"]], decls: 2, vars: 0, template: function ShippingAndPaymentPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shipping-and-payment-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoaXBwaW5nLWFuZC1wYXltZW50LXBhZ2Uvc2hpcHBpbmctYW5kLXBheW1lbnQtcGFnZS5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShippingAndPaymentPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shipping-and-payment-page',
                templateUrl: './shipping-and-payment-page.component.html',
                styleUrls: ['./shipping-and-payment-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/working-with-genuine-leather-page/working-with-genuine-leather-page.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/working-with-genuine-leather-page/working-with-genuine-leather-page.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: WorkingWithGenuineLeatherPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingWithGenuineLeatherPageComponent", function() { return WorkingWithGenuineLeatherPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WorkingWithGenuineLeatherPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkingWithGenuineLeatherPageComponent.ɵfac = function WorkingWithGenuineLeatherPageComponent_Factory(t) { return new (t || WorkingWithGenuineLeatherPageComponent)(); };
WorkingWithGenuineLeatherPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkingWithGenuineLeatherPageComponent, selectors: [["app-working-with-genuine-leather-page"]], decls: 2, vars: 0, template: function WorkingWithGenuineLeatherPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "working-with-genuine-leather-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtpbmctd2l0aC1nZW51aW5lLWxlYXRoZXItcGFnZS93b3JraW5nLXdpdGgtZ2VudWluZS1sZWF0aGVyLXBhZ2UuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkingWithGenuineLeatherPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-working-with-genuine-leather-page',
                templateUrl: './working-with-genuine-leather-page.component.html',
                styleUrls: ['./working-with-genuine-leather-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Maolink\Desktop\Dev\furniture\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map