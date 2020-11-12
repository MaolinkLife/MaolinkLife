function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-furniture-care-page-furniture-care-page-module"], {
  /***/
  "./src/app/pages/furniture-care-page/furniture-care-page-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/furniture-care-page/furniture-care-page-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: FurnitureCarePageRoutingModule */

  /***/
  function srcAppPagesFurnitureCarePageFurnitureCarePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FurnitureCarePageRoutingModule", function () {
      return FurnitureCarePageRoutingModule;
    });
    /* harmony import */


    var _furniture_care_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./furniture-care-page.component */
    "./src/app/pages/furniture-care-page/furniture-care-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _furniture_care_page_component__WEBPACK_IMPORTED_MODULE_0__["FurnitureCarePageComponent"]
    }];

    var FurnitureCarePageRoutingModule = /*@__PURE__*/function () {
      var FurnitureCarePageRoutingModule = function FurnitureCarePageRoutingModule() {
        _classCallCheck(this, FurnitureCarePageRoutingModule);
      };

      FurnitureCarePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: FurnitureCarePageRoutingModule
      });
      FurnitureCarePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function FurnitureCarePageRoutingModule_Factory(t) {
          return new (t || FurnitureCarePageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
      return FurnitureCarePageRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FurnitureCarePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/furniture-care-page/furniture-care-page.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/furniture-care-page/furniture-care-page.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FurnitureCarePageComponent */

  /***/
  function srcAppPagesFurnitureCarePageFurnitureCarePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FurnitureCarePageComponent", function () {
      return FurnitureCarePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modules_blocks_components_furniture_protection_furniture_protection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../modules/blocks/components/furniture-protection/furniture-protection.component */
    "./src/app/modules/blocks/components/furniture-protection/furniture-protection.component.ts");

    var FurnitureCarePageComponent = /*@__PURE__*/function () {
      var FurnitureCarePageComponent = /*#__PURE__*/function () {
        function FurnitureCarePageComponent() {
          _classCallCheck(this, FurnitureCarePageComponent);
        }

        _createClass(FurnitureCarePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FurnitureCarePageComponent;
      }();

      FurnitureCarePageComponent.ɵfac = function FurnitureCarePageComponent_Factory(t) {
        return new (t || FurnitureCarePageComponent)();
      };

      FurnitureCarePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FurnitureCarePageComponent,
        selectors: [["app-furniture-care-page"]],
        decls: 1,
        vars: 0,
        template: function FurnitureCarePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "block-furniture-protection");
          }
        },
        directives: [_modules_blocks_components_furniture_protection_furniture_protection_component__WEBPACK_IMPORTED_MODULE_1__["FurnitureProtectionComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1cm5pdHVyZS1jYXJlLXBhZ2UvZnVybml0dXJlLWNhcmUtcGFnZS5jb21wb25lbnQubGVzcyJ9 */"],
        changeDetection: 0
      });
      return FurnitureCarePageComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/furniture-care-page/furniture-care-page.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/furniture-care-page/furniture-care-page.module.ts ***!
    \*************************************************************************/

  /*! exports provided: FurnitureCarePageModule */

  /***/
  function srcAppPagesFurnitureCarePageFurnitureCarePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FurnitureCarePageModule", function () {
      return FurnitureCarePageModule;
    });
    /* harmony import */


    var _furniture_care_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./furniture-care-page-routing.module */
    "./src/app/pages/furniture-care-page/furniture-care-page-routing.module.ts");
    /* harmony import */


    var src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modules/blocks/blocks.module */
    "./src/app/modules/blocks/blocks.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _furniture_care_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./furniture-care-page.component */
    "./src/app/pages/furniture-care-page/furniture-care-page.component.ts");

    var FurnitureCarePageModule = /*@__PURE__*/function () {
      var FurnitureCarePageModule = function FurnitureCarePageModule() {
        _classCallCheck(this, FurnitureCarePageModule);
      };

      FurnitureCarePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: FurnitureCarePageModule
      });
      FurnitureCarePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function FurnitureCarePageModule_Factory(t) {
          return new (t || FurnitureCarePageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_1__["BlocksModule"], _furniture_care_page_routing_module__WEBPACK_IMPORTED_MODULE_0__["FurnitureCarePageRoutingModule"]]]
      });
      return FurnitureCarePageModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FurnitureCarePageModule, {
        declarations: [_furniture_care_page_component__WEBPACK_IMPORTED_MODULE_4__["FurnitureCarePageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_1__["BlocksModule"], _furniture_care_page_routing_module__WEBPACK_IMPORTED_MODULE_0__["FurnitureCarePageRoutingModule"]],
        exports: [_furniture_care_page_component__WEBPACK_IMPORTED_MODULE_4__["FurnitureCarePageComponent"]]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-furniture-care-page-furniture-care-page-module-es5.js.map