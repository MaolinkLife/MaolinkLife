(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-furniture-care-page-furniture-care-page-module"],{

/***/ "./src/app/pages/furniture-care-page/furniture-care-page-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/furniture-care-page/furniture-care-page-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FurnitureCarePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureCarePageRoutingModule", function() { return FurnitureCarePageRoutingModule; });
/* harmony import */ var _furniture_care_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./furniture-care-page.component */ "./src/app/pages/furniture-care-page/furniture-care-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [{ path: '', component: _furniture_care_page_component__WEBPACK_IMPORTED_MODULE_0__["FurnitureCarePageComponent"] }];
class FurnitureCarePageRoutingModule {
}
FurnitureCarePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FurnitureCarePageRoutingModule });
FurnitureCarePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FurnitureCarePageRoutingModule_Factory(t) { return new (t || FurnitureCarePageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FurnitureCarePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FurnitureCarePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _modules_blocks_components_furniture_protection_furniture_protection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/blocks/components/furniture-protection/furniture-protection.component */ "./src/app/modules/blocks/components/furniture-protection/furniture-protection.component.ts");



class FurnitureCarePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
FurnitureCarePageComponent.ɵfac = function FurnitureCarePageComponent_Factory(t) { return new (t || FurnitureCarePageComponent)(); };
FurnitureCarePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FurnitureCarePageComponent, selectors: [["app-furniture-care-page"]], decls: 1, vars: 0, template: function FurnitureCarePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "block-furniture-protection");
    } }, directives: [_modules_blocks_components_furniture_protection_furniture_protection_component__WEBPACK_IMPORTED_MODULE_1__["FurnitureProtectionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1cm5pdHVyZS1jYXJlLXBhZ2UvZnVybml0dXJlLWNhcmUtcGFnZS5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
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

/***/ "./src/app/pages/furniture-care-page/furniture-care-page.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/furniture-care-page/furniture-care-page.module.ts ***!
  \*************************************************************************/
/*! exports provided: FurnitureCarePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureCarePageModule", function() { return FurnitureCarePageModule; });
/* harmony import */ var _furniture_care_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./furniture-care-page-routing.module */ "./src/app/pages/furniture-care-page/furniture-care-page-routing.module.ts");
/* harmony import */ var src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/blocks/blocks.module */ "./src/app/modules/blocks/blocks.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _furniture_care_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./furniture-care-page.component */ "./src/app/pages/furniture-care-page/furniture-care-page.component.ts");






class FurnitureCarePageModule {
}
FurnitureCarePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FurnitureCarePageModule });
FurnitureCarePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function FurnitureCarePageModule_Factory(t) { return new (t || FurnitureCarePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_1__["BlocksModule"],
            _furniture_care_page_routing_module__WEBPACK_IMPORTED_MODULE_0__["FurnitureCarePageRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FurnitureCarePageModule, { declarations: [_furniture_care_page_component__WEBPACK_IMPORTED_MODULE_4__["FurnitureCarePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_1__["BlocksModule"],
        _furniture_care_page_routing_module__WEBPACK_IMPORTED_MODULE_0__["FurnitureCarePageRoutingModule"]], exports: [_furniture_care_page_component__WEBPACK_IMPORTED_MODULE_4__["FurnitureCarePageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FurnitureCarePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _furniture_care_page_component__WEBPACK_IMPORTED_MODULE_4__["FurnitureCarePageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_1__["BlocksModule"],
                    _furniture_care_page_routing_module__WEBPACK_IMPORTED_MODULE_0__["FurnitureCarePageRoutingModule"],
                ],
                exports: [
                    _furniture_care_page_component__WEBPACK_IMPORTED_MODULE_4__["FurnitureCarePageComponent"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-furniture-care-page-furniture-care-page-module-es2015.js.map