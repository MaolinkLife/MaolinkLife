function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-working-with-genuine-leather-page-working-with-genuine-leather-page-module"], {
  /***/
  "./src/app/modules/leaher-furniture/components/leather-headboards/leather-headboards.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/modules/leaher-furniture/components/leather-headboards/leather-headboards.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: LeatherHeadboardsComponent */

  /***/
  function srcAppModulesLeaherFurnitureComponentsLeatherHeadboardsLeatherHeadboardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeatherHeadboardsComponent", function () {
      return LeatherHeadboardsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LeatherHeadboardsComponent = /*#__PURE__*/function () {
      function LeatherHeadboardsComponent() {
        _classCallCheck(this, LeatherHeadboardsComponent);
      }

      _createClass(LeatherHeadboardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LeatherHeadboardsComponent;
    }();

    LeatherHeadboardsComponent.ɵfac = function LeatherHeadboardsComponent_Factory(t) {
      return new (t || LeatherHeadboardsComponent)();
    };

    LeatherHeadboardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeatherHeadboardsComponent,
      selectors: [["app-leather-headboards"]],
      decls: 2,
      vars: 0,
      template: function LeatherHeadboardsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "leather-headboards works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGVhaGVyLWZ1cm5pdHVyZS9jb21wb25lbnRzL2xlYXRoZXItaGVhZGJvYXJkcy9sZWF0aGVyLWhlYWRib2FyZHMuY29tcG9uZW50Lmxlc3MifQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeatherHeadboardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-leather-headboards',
          templateUrl: './leather-headboards.component.html',
          styleUrls: ['./leather-headboards.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/leaher-furniture/leaher-furniture.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/leaher-furniture/leaher-furniture.module.ts ***!
    \*********************************************************************/

  /*! exports provided: LeaherFurnitureModule */

  /***/
  function srcAppModulesLeaherFurnitureLeaherFurnitureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaherFurnitureModule", function () {
      return LeaherFurnitureModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_leather_armchair_leather_armchair_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/leather-armchair/leather-armchair.component */
    "./src/app/modules/leaher-furniture/components/leather-armchair/leather-armchair.component.ts");
    /* harmony import */


    var src_app_shared_components_shield_item_shield_item_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/components/shield-item/shield-item.module */
    "./src/app/shared/components/shield-item/shield-item.module.ts");
    /* harmony import */


    var src_app_shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/components/button/button.module */
    "./src/app/shared/components/button/button.module.ts");
    /* harmony import */


    var src_app_shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/icons/icons.module */
    "./src/app/shared/components/icons/icons.module.ts");
    /* harmony import */


    var _components_leather_corner_sofas_leather_corner_sofas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/leather-corner-sofas/leather-corner-sofas.component */
    "./src/app/modules/leaher-furniture/components/leather-corner-sofas/leather-corner-sofas.component.ts");
    /* harmony import */


    var _components_leahter_chairs_leahter_chairs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/leahter-chairs/leahter-chairs.component */
    "./src/app/modules/leaher-furniture/components/leahter-chairs/leahter-chairs.component.ts");
    /* harmony import */


    var _components_leather_straight_sofas_leather_straight_sofas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/leather-straight-sofas/leather-straight-sofas.component */
    "./src/app/modules/leaher-furniture/components/leather-straight-sofas/leather-straight-sofas.component.ts");
    /* harmony import */


    var _components_leather_poufs_and_banquets_leather_poufs_and_banquets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/leather-poufs-and-banquets/leather-poufs-and-banquets.component */
    "./src/app/modules/leaher-furniture/components/leather-poufs-and-banquets/leather-poufs-and-banquets.component.ts");
    /* harmony import */


    var _components_leather_headboards_leather_headboards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/leather-headboards/leather-headboards.component */
    "./src/app/modules/leaher-furniture/components/leather-headboards/leather-headboards.component.ts");

    var LeaherFurnitureModule = function LeaherFurnitureModule() {
      _classCallCheck(this, LeaherFurnitureModule);
    };

    LeaherFurnitureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LeaherFurnitureModule
    });
    LeaherFurnitureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LeaherFurnitureModule_Factory(t) {
        return new (t || LeaherFurnitureModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ObbeyButtonModule"], src_app_shared_components_shield_item_shield_item_module__WEBPACK_IMPORTED_MODULE_3__["ShieldItemModule"], src_app_shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LeaherFurnitureModule, {
        declarations: [_components_leather_armchair_leather_armchair_component__WEBPACK_IMPORTED_MODULE_2__["LeatherArmchairComponent"], _components_leather_corner_sofas_leather_corner_sofas_component__WEBPACK_IMPORTED_MODULE_6__["LeatherCornerSofasComponent"], _components_leahter_chairs_leahter_chairs_component__WEBPACK_IMPORTED_MODULE_7__["LeahterChairsComponent"], _components_leather_straight_sofas_leather_straight_sofas_component__WEBPACK_IMPORTED_MODULE_8__["LeatherStraightSofasComponent"], _components_leather_poufs_and_banquets_leather_poufs_and_banquets_component__WEBPACK_IMPORTED_MODULE_9__["LeatherPoufsAndBanquetsComponent"], _components_leather_headboards_leather_headboards_component__WEBPACK_IMPORTED_MODULE_10__["LeatherHeadboardsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ObbeyButtonModule"], src_app_shared_components_shield_item_shield_item_module__WEBPACK_IMPORTED_MODULE_3__["ShieldItemModule"], src_app_shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"]],
        exports: [_components_leather_armchair_leather_armchair_component__WEBPACK_IMPORTED_MODULE_2__["LeatherArmchairComponent"], _components_leather_corner_sofas_leather_corner_sofas_component__WEBPACK_IMPORTED_MODULE_6__["LeatherCornerSofasComponent"], _components_leahter_chairs_leahter_chairs_component__WEBPACK_IMPORTED_MODULE_7__["LeahterChairsComponent"], _components_leather_straight_sofas_leather_straight_sofas_component__WEBPACK_IMPORTED_MODULE_8__["LeatherStraightSofasComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaherFurnitureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_leather_armchair_leather_armchair_component__WEBPACK_IMPORTED_MODULE_2__["LeatherArmchairComponent"], _components_leather_corner_sofas_leather_corner_sofas_component__WEBPACK_IMPORTED_MODULE_6__["LeatherCornerSofasComponent"], _components_leahter_chairs_leahter_chairs_component__WEBPACK_IMPORTED_MODULE_7__["LeahterChairsComponent"], _components_leather_straight_sofas_leather_straight_sofas_component__WEBPACK_IMPORTED_MODULE_8__["LeatherStraightSofasComponent"], _components_leather_poufs_and_banquets_leather_poufs_and_banquets_component__WEBPACK_IMPORTED_MODULE_9__["LeatherPoufsAndBanquetsComponent"], _components_leather_headboards_leather_headboards_component__WEBPACK_IMPORTED_MODULE_10__["LeatherHeadboardsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ObbeyButtonModule"], src_app_shared_components_shield_item_shield_item_module__WEBPACK_IMPORTED_MODULE_3__["ShieldItemModule"], src_app_shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"]],
          exports: [_components_leather_armchair_leather_armchair_component__WEBPACK_IMPORTED_MODULE_2__["LeatherArmchairComponent"], _components_leather_corner_sofas_leather_corner_sofas_component__WEBPACK_IMPORTED_MODULE_6__["LeatherCornerSofasComponent"], _components_leahter_chairs_leahter_chairs_component__WEBPACK_IMPORTED_MODULE_7__["LeahterChairsComponent"], _components_leather_straight_sofas_leather_straight_sofas_component__WEBPACK_IMPORTED_MODULE_8__["LeatherStraightSofasComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/working-with-genuine-leather-page/working-with-genuine-leather-page.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/working-with-genuine-leather-page/working-with-genuine-leather-page.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: WorkingWithGenuineLeatherPageModule */

  /***/
  function srcAppPagesWorkingWithGenuineLeatherPageWorkingWithGenuineLeatherPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkingWithGenuineLeatherPageModule", function () {
      return WorkingWithGenuineLeatherPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _working_with_genuine_leather_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./working-with-genuine-leather-page.component */
    "./src/app/pages/working-with-genuine-leather-page/working-with-genuine-leather-page.component.ts");
    /* harmony import */


    var src_app_modules_leaher_furniture_leaher_furniture_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modules/leaher-furniture/leaher-furniture.module */
    "./src/app/modules/leaher-furniture/leaher-furniture.module.ts");

    var WorkingWithGenuineLeatherPageModule = function WorkingWithGenuineLeatherPageModule() {
      _classCallCheck(this, WorkingWithGenuineLeatherPageModule);
    };

    WorkingWithGenuineLeatherPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WorkingWithGenuineLeatherPageModule
    });
    WorkingWithGenuineLeatherPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WorkingWithGenuineLeatherPageModule_Factory(t) {
        return new (t || WorkingWithGenuineLeatherPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_modules_leaher_furniture_leaher_furniture_module__WEBPACK_IMPORTED_MODULE_3__["LeaherFurnitureModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkingWithGenuineLeatherPageModule, {
        declarations: [_working_with_genuine_leather_page_component__WEBPACK_IMPORTED_MODULE_2__["WorkingWithGenuineLeatherPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_modules_leaher_furniture_leaher_furniture_module__WEBPACK_IMPORTED_MODULE_3__["LeaherFurnitureModule"]],
        exports: [_working_with_genuine_leather_page_component__WEBPACK_IMPORTED_MODULE_2__["WorkingWithGenuineLeatherPageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkingWithGenuineLeatherPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_working_with_genuine_leather_page_component__WEBPACK_IMPORTED_MODULE_2__["WorkingWithGenuineLeatherPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_modules_leaher_furniture_leaher_furniture_module__WEBPACK_IMPORTED_MODULE_3__["LeaherFurnitureModule"]],
          exports: [_working_with_genuine_leather_page_component__WEBPACK_IMPORTED_MODULE_2__["WorkingWithGenuineLeatherPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-working-with-genuine-leather-page-working-with-genuine-leather-page-module-es5.js.map