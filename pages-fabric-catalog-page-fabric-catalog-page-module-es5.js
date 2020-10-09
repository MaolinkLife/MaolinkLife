function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fabric-catalog-page-fabric-catalog-page-module"], {
  /***/
  "./src/app/pages/fabric-catalog-page/fabric-catalog-page-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/fabric-catalog-page/fabric-catalog-page-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: FabricCatalogPageRoutingModule */

  /***/
  function srcAppPagesFabricCatalogPageFabricCatalogPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabricCatalogPageRoutingModule", function () {
      return FabricCatalogPageRoutingModule;
    });
    /* harmony import */


    var _fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./fabric-catalog-page.component */
    "./src/app/pages/fabric-catalog-page/fabric-catalog-page.component.ts");
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
      component: _fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_0__["FabricCatalogPageComponent"]
    }];

    var FabricCatalogPageRoutingModule = function FabricCatalogPageRoutingModule() {
      _classCallCheck(this, FabricCatalogPageRoutingModule);
    };

    FabricCatalogPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FabricCatalogPageRoutingModule
    });
    FabricCatalogPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function FabricCatalogPageRoutingModule_Factory(t) {
        return new (t || FabricCatalogPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FabricCatalogPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FabricCatalogPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/fabric-catalog-page/fabric-catalog-page.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/fabric-catalog-page/fabric-catalog-page.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FabricCatalogPageComponent */

  /***/
  function srcAppPagesFabricCatalogPageFabricCatalogPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabricCatalogPageComponent", function () {
      return FabricCatalogPageComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/components/form/form.component */
    "./src/app/shared/components/form/form.component.ts");
    /* harmony import */


    var _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/icons/icons.component */
    "./src/app/shared/components/icons/icons.component.ts");
    /* harmony import */


    var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/input/input.component */
    "./src/app/shared/components/input/input.component.ts");
    /* harmony import */


    var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/components/button/button.component */
    "./src/app/shared/components/button/button.component.ts");

    var FabricCatalogPageComponent = /*#__PURE__*/function () {
      function FabricCatalogPageComponent() {
        _classCallCheck(this, FabricCatalogPageComponent);

        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
      }

      _createClass(FabricCatalogPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FabricCatalogPageComponent;
    }();

    FabricCatalogPageComponent.ɵfac = function FabricCatalogPageComponent_Factory(t) {
      return new (t || FabricCatalogPageComponent)();
    };

    FabricCatalogPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FabricCatalogPageComponent,
      selectors: [["app-fabric-catalog-page"]],
      decls: 27,
      vars: 1,
      consts: [[1, "container"], [1, "form-container"], [1, "form-title"], [1, "text-upper"], [1, "messagers", "mui-space_bottom-2"], [1, "messager"], ["href", "https://telegram.me/share/+79267491493"], ["name", "iconTelegrammMessager"], ["href", "viber://"], ["name", "iconViberMessager"], ["href", "whatsapp://phone=+79267491493"], ["name", "iconWhatsupMessager"], [1, "text", "mui-space_bottom-2"], [1, "form-action", 3, "formGroup"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F", 1, "mui-space_bottom-1"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443", 1, "mui-space_bottom-1"], [1, "button-contaier"], ["color", "primary", "size", "s", "uppercase", ""], [1, "underline-text"]],
      template: function FabricCatalogPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "obbey-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u0412\u044B\u0448\u043B\u0435\u043C \u0432\u0430\u043C \u043F\u043E\u043B\u043D\u044B\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u0438\u0445 \u0446\u0432\u0435\u0442\u043E\u0432 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u043D\u0430\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0435 \u0432\u0430\u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "obbey-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "obbey-input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "obbey-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \u0422\u0430\u043A \u0436\u0435 \u043C\u043E\u0436\u0435\u043C \u043F\u043E\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u043C \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B, \u0438\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0439 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        }
      },
      directives: [_shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_2__["ObbeyFormComponent"], _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["ObbeyInputComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ObbeyButtonComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 800px;\n  width: 100%;\n  background-image: url('background.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 100px;\n  top: 100px;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n  margin-bottom: 8px;\n}\n.text-lighter[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 14px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #939391;\n  margin-bottom: 20px;\n  justify-content: center;\n}\n.text-upper[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  margin-bottom: 8px;\n  justify-content: center;\n}\n.messagers[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n.messager[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 43px;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  color: #939391;\n  text-align: center;\n  justify-content: center;\n}\n.add-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.add-image__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fafafa;\n  border-radius: 6px;\n  margin-right: 20px;\n  -webkit-clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n          clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n}\n.add-image__label[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n}\n.input[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  width: 100%;\n  justify-content: center;\n  font-family: \"MuseoSansCyrl\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n  background-color: #fafafa;\n  outline: none;\n  border: none;\n  -webkit-clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n          clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n}\n.underline-text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: inline-block;\n  align-items: center;\n  text-align: center;\n  color: #939391;\n  max-width: 196px;\n}\n.form-action[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFicmljLWNhdGFsb2ctcGFnZS9DOi9Vc2Vycy9NYW9saW5rL0Rlc2t0b3AvRGV2L2Z1cm5pdHVyZS9zcmMvYXBwL3BhZ2VzL2ZhYnJpYy1jYXRhbG9nLXBhZ2UvZmFicmljLWNhdGFsb2ctcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvZmFicmljLWNhdGFsb2ctcGFnZS9mYWJyaWMtY2F0YWxvZy1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0RKO0FESUE7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUNGRixZQUFZO0VES1YsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE1BO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSko7QURPQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDTEo7QURRQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNOSjtBRFNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ1BKO0FEVUE7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDVEo7QURZQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ1ZKO0FEWUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEZBQUE7VUFBQSxvRkFBQTtBQ1ZSO0FEc0JJO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNwQlI7QUR3QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUdBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0RkFBQTtVQUFBLG9GQUFBO0FDekJKO0FEcUNBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNuQ0o7QURzQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNwQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYWJyaWMtY2F0YWxvZy1wYWdlL2ZhYnJpYy1jYXRhbG9nLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dlbmVyYWwtcGFnZS9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgICB0b3A6IDEwMHB4O1xufVxuXG4uZm9ybS10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIC8qIG9yIDE1MCUgKi9cblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4udGV4dC1saWdodGVyIHtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOTM5MzkxO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0LXVwcGVyIHtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVzc2FnZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVzc2FnZXIge1xuICAgIHdpZHRoOiA0M3B4O1xuICAgIGhlaWdodDogNDNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzkzOTM5MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZGQtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX2ljb24ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgICAgICAgIDk4JSAwLFxuICAgICAgICAgICAgMTAwJSAyNSUsXG4gICAgICAgICAgICAxMDAlIDc1JSxcbiAgICAgICAgICAgIDk4JSAxMDAlLFxuICAgICAgICAgICAgMiUgMTAwJSxcbiAgICAgICAgICAgIDAgNzUlLFxuICAgICAgICAgICAgMCAyNSUsXG4gICAgICAgICAgICAyJSAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgJl9fbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbn1cblxuLmlucHV0IHtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAgIDk4JSAwLFxuICAgICAgICAxMDAlIDI1JSxcbiAgICAgICAgMTAwJSA3NSUsXG4gICAgICAgIDk4JSAxMDAlLFxuICAgICAgICAyJSAxMDAlLFxuICAgICAgICAwIDc1JSxcbiAgICAgICAgMCAyNSUsXG4gICAgICAgIDIlIDBcbiAgICApO1xufVxuXG4udW5kZXJsaW5lLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzkzOTM5MTtcbiAgICBtYXgtd2lkdGg6IDE5NnB4O1xufVxuXG4uZm9ybS1hY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dlbmVyYWwtcGFnZS9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm0tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAwcHg7XG4gIHRvcDogMTAwcHg7XG59XG4uZm9ybS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIC8qIG9yIDE1MCUgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnRleHQtbGlnaHRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5MzkzOTE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRleHQtdXBwZXIge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1lc3NhZ2VycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZXNzYWdlciB7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM5MzkzOTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWRkLWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGQtaW1hZ2VfX2ljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNsaXAtcGF0aDogcG9seWdvbig5OCUgMCwgMTAwJSAyNSUsIDEwMCUgNzUlLCA5OCUgMTAwJSwgMiUgMTAwJSwgMCA3NSUsIDAgMjUlLCAyJSAwKTtcbn1cbi5hZGQtaW1hZ2VfX2xhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5pbnB1dCB7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oOTglIDAsIDEwMCUgMjUlLCAxMDAlIDc1JSwgOTglIDEwMCUsIDIlIDEwMCUsIDAgNzUlLCAwIDI1JSwgMiUgMCk7XG59XG4udW5kZXJsaW5lLXRleHQge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5MzkzOTE7XG4gIG1heC13aWR0aDogMTk2cHg7XG59XG4uZm9ybS1hY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FabricCatalogPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-fabric-catalog-page',
          templateUrl: './fabric-catalog-page.component.html',
          styleUrls: ['./fabric-catalog-page.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/fabric-catalog-page/fabric-catalog-page.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/fabric-catalog-page/fabric-catalog-page.module.ts ***!
    \*************************************************************************/

  /*! exports provided: FabricCatalogPageModule */

  /***/
  function srcAppPagesFabricCatalogPageFabricCatalogPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabricCatalogPageModule", function () {
      return FabricCatalogPageModule;
    });
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fabric-catalog-page.component */
    "./src/app/pages/fabric-catalog-page/fabric-catalog-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fabric_catalog_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fabric-catalog-page-routing.module */
    "./src/app/pages/fabric-catalog-page/fabric-catalog-page-routing.module.ts");

    var FabricCatalogPageModule = function FabricCatalogPageModule() {
      _classCallCheck(this, FabricCatalogPageModule);
    };

    FabricCatalogPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: FabricCatalogPageModule
    });
    FabricCatalogPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function FabricCatalogPageModule_Factory(t) {
        return new (t || FabricCatalogPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _fabric_catalog_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["FabricCatalogPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FabricCatalogPageModule, {
        declarations: [_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_2__["FabricCatalogPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _fabric_catalog_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["FabricCatalogPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]],
        exports: [_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_2__["FabricCatalogPageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FabricCatalogPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_2__["FabricCatalogPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _fabric_catalog_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["FabricCatalogPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]],
          exports: [_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_2__["FabricCatalogPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-fabric-catalog-page-fabric-catalog-page-module-es5.js.map