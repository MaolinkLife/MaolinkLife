function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-padding-furniture-page-padding-furniture-page-module"], {
  /***/
  "./src/app/modules/padding-furniture/padding-furniture.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/padding-furniture/padding-furniture.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PaddingFurnitureModule */

  /***/
  function srcAppModulesPaddingFurniturePaddingFurnitureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaddingFurnitureModule", function () {
      return PaddingFurnitureModule;
    });
    /* harmony import */


    var _shared_components_messagers_messagers_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../shared/components/messagers/messagers.module */
    "./src/app/shared/components/messagers/messagers.module.ts");
    /* harmony import */


    var _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../shared/components/icons/icons.module */
    "./src/app/shared/components/icons/icons.module.ts");
    /* harmony import */


    var _shared_components_shield_item_shield_item_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../shared/components/shield-item/shield-item.module */
    "./src/app/shared/components/shield-item/shield-item.module.ts");
    /* harmony import */


    var _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../shared/components/button/button.module */
    "./src/app/shared/components/button/button.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_corner_sofas_corner_sofas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/corner-sofas/corner-sofas.component */
    "./src/app/modules/padding-furniture/components/corner-sofas/corner-sofas.component.ts");
    /* harmony import */


    var _components_straight_sofas_straight_sofas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/straight-sofas/straight-sofas.component */
    "./src/app/modules/padding-furniture/components/straight-sofas/straight-sofas.component.ts");
    /* harmony import */


    var _components_armchairs_armchairs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/armchairs/armchairs.component */
    "./src/app/modules/padding-furniture/components/armchairs/armchairs.component.ts");
    /* harmony import */


    var _components_chairs_chairs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/chairs/chairs.component */
    "./src/app/modules/padding-furniture/components/chairs/chairs.component.ts");
    /* harmony import */


    var _components_headboards_headboards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/headboards/headboards.component */
    "./src/app/modules/padding-furniture/components/headboards/headboards.component.ts");
    /* harmony import */


    var _components_poufs_and_banquets_poufs_and_banquets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/poufs-and-banquets/poufs-and-banquets.component */
    "./src/app/modules/padding-furniture/components/poufs-and-banquets/poufs-and-banquets.component.ts");

    var PaddingFurnitureModule = function PaddingFurnitureModule() {
      _classCallCheck(this, PaddingFurnitureModule);
    };

    PaddingFurnitureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: PaddingFurnitureModule
    });
    PaddingFurnitureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function PaddingFurnitureModule_Factory(t) {
        return new (t || PaddingFurnitureModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ObbeyButtonModule"], _shared_components_shield_item_shield_item_module__WEBPACK_IMPORTED_MODULE_2__["ShieldItemModule"], _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_1__["IconsModule"], _shared_components_messagers_messagers_module__WEBPACK_IMPORTED_MODULE_0__["MessagersModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PaddingFurnitureModule, {
        declarations: [_components_straight_sofas_straight_sofas_component__WEBPACK_IMPORTED_MODULE_7__["StraightSofasComponent"], _components_corner_sofas_corner_sofas_component__WEBPACK_IMPORTED_MODULE_6__["CornerSofasComponent"], _components_armchairs_armchairs_component__WEBPACK_IMPORTED_MODULE_8__["ArmchairsComponent"], _components_chairs_chairs_component__WEBPACK_IMPORTED_MODULE_9__["ChairsComponent"], _components_headboards_headboards_component__WEBPACK_IMPORTED_MODULE_10__["HeadboardsComponent"], _components_poufs_and_banquets_poufs_and_banquets_component__WEBPACK_IMPORTED_MODULE_11__["PoufsAndBanquetsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ObbeyButtonModule"], _shared_components_shield_item_shield_item_module__WEBPACK_IMPORTED_MODULE_2__["ShieldItemModule"], _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_1__["IconsModule"], _shared_components_messagers_messagers_module__WEBPACK_IMPORTED_MODULE_0__["MessagersModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](PaddingFurnitureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          declarations: [_components_straight_sofas_straight_sofas_component__WEBPACK_IMPORTED_MODULE_7__["StraightSofasComponent"], _components_corner_sofas_corner_sofas_component__WEBPACK_IMPORTED_MODULE_6__["CornerSofasComponent"], _components_armchairs_armchairs_component__WEBPACK_IMPORTED_MODULE_8__["ArmchairsComponent"], _components_chairs_chairs_component__WEBPACK_IMPORTED_MODULE_9__["ChairsComponent"], _components_headboards_headboards_component__WEBPACK_IMPORTED_MODULE_10__["HeadboardsComponent"], _components_poufs_and_banquets_poufs_and_banquets_component__WEBPACK_IMPORTED_MODULE_11__["PoufsAndBanquetsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ObbeyButtonModule"], _shared_components_shield_item_shield_item_module__WEBPACK_IMPORTED_MODULE_2__["ShieldItemModule"], _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_1__["IconsModule"], _shared_components_messagers_messagers_module__WEBPACK_IMPORTED_MODULE_0__["MessagersModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/padding-furniture-page/padding-furniture-page.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/padding-furniture-page/padding-furniture-page.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: PaddingFurniturePageModule */

  /***/
  function srcAppPagesPaddingFurniturePagePaddingFurniturePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaddingFurniturePageModule", function () {
      return PaddingFurniturePageModule;
    });
    /* harmony import */


    var _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../modules/blocks/blocks.module */
    "./src/app/modules/blocks/blocks.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _padding_furniture_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./padding-furniture-page.component */
    "./src/app/pages/padding-furniture-page/padding-furniture-page.component.ts");
    /* harmony import */


    var src_app_modules_padding_furniture_padding_furniture_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modules/padding-furniture/padding-furniture.module */
    "./src/app/modules/padding-furniture/padding-furniture.module.ts");

    var PaddingFurniturePageModule = function PaddingFurniturePageModule() {
      _classCallCheck(this, PaddingFurniturePageModule);
    };

    PaddingFurniturePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PaddingFurniturePageModule
    });
    PaddingFurniturePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PaddingFurniturePageModule_Factory(t) {
        return new (t || PaddingFurniturePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_modules_padding_furniture_padding_furniture_module__WEBPACK_IMPORTED_MODULE_4__["PaddingFurnitureModule"], _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__["BlocksModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaddingFurniturePageModule, {
        declarations: [_padding_furniture_page_component__WEBPACK_IMPORTED_MODULE_3__["PaddingFurniturePageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_modules_padding_furniture_padding_furniture_module__WEBPACK_IMPORTED_MODULE_4__["PaddingFurnitureModule"], _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__["BlocksModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaddingFurniturePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_padding_furniture_page_component__WEBPACK_IMPORTED_MODULE_3__["PaddingFurniturePageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_modules_padding_furniture_padding_furniture_module__WEBPACK_IMPORTED_MODULE_4__["PaddingFurnitureModule"], _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__["BlocksModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-padding-furniture-page-padding-furniture-page-module-es5.js.map