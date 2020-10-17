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


    var _shared_components_messagers_messagers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/messagers/messagers.component */
    "./src/app/shared/components/messagers/messagers.component.ts");
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
      decls: 19,
      vars: 1,
      consts: [[1, "container"], [1, "form-container"], [1, "form-title"], [1, "text-upper"], [1, "messagers", "mui-space_bottom-2"], [1, "text", "mui-space_bottom-2"], [1, "form-action", 3, "formGroup"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F", 1, "mui-space_bottom-1"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443", 1, "mui-space_bottom-1"], [1, "button-contaier"], ["color", "primary", "size", "s", "uppercase", ""], [1, "underline-text"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "obbey-messagers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u043D\u0430\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0435 \u0432\u0430\u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "obbey-input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "obbey-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "obbey-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u0422\u0430\u043A \u0436\u0435 \u043C\u043E\u0436\u0435\u043C \u043F\u043E\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u043C \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B, \u0438\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0439 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        }
      },
      directives: [_shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_2__["ObbeyFormComponent"], _shared_components_messagers_messagers_component__WEBPACK_IMPORTED_MODULE_3__["MessagersComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["ObbeyInputComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ObbeyButtonComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 800px;\n  width: 100%;\n  background-image: url('fabric-catalog-background.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 100px;\n  top: 100px;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n  margin-bottom: 8px;\n}\n.text-lighter[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 14px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #939391;\n  margin-bottom: 20px;\n  justify-content: center;\n}\n.text-upper[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  margin-bottom: 8px;\n  justify-content: center;\n}\n.messagers[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n.messager[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 43px;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  color: #939391;\n  text-align: center;\n  justify-content: center;\n}\n.add-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.add-image__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fafafa;\n  border-radius: 6px;\n  margin-right: 20px;\n  -webkit-clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n          clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n}\n.add-image__label[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n}\n.input[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  width: 100%;\n  justify-content: center;\n  font-family: \"MuseoSansCyrl\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n  background-color: #fafafa;\n  outline: none;\n  border: none;\n  -webkit-clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n          clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n}\n.underline-text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: inline-block;\n  align-items: center;\n  text-align: center;\n  color: #939391;\n  max-width: 196px;\n}\n.form-action[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFicmljLWNhdGFsb2ctcGFnZS9DOi9Vc2Vycy9NYW9saW5rL0Rlc2t0b3AvRGV2L2Z1cm5pdHVyZS9zcmMvYXBwL3BhZ2VzL2ZhYnJpYy1jYXRhbG9nLXBhZ2UvZmFicmljLWNhdGFsb2ctcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvZmFicmljLWNhdGFsb2ctcGFnZS9mYWJyaWMtY2F0YWxvZy1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0RKO0FESUE7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUNGRixZQUFZO0VES1YsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE1BO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSko7QURPQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDTEo7QURRQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNOSjtBRFNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ1BKO0FEVUE7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDVEo7QURZQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ1ZKO0FEWUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEZBQUE7VUFBQSxvRkFBQTtBQ1ZSO0FEc0JJO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNwQlI7QUR3QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUdBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0RkFBQTtVQUFBLG9GQUFBO0FDekJKO0FEcUNBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNuQ0o7QURzQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNwQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYWJyaWMtY2F0YWxvZy1wYWdlL2ZhYnJpYy1jYXRhbG9nLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZhYnJpYy1jYXRhbG9nL2ZhYnJpYy1jYXRhbG9nLWJhY2tncm91bmQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwMHB4O1xuICAgIHRvcDogMTAwcHg7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgLyogb3IgMTUwJSAqL1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi50ZXh0LWxpZ2h0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5MzkzOTE7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRleHQtdXBwZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZXNzYWdlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZXNzYWdlciB7XG4gICAgd2lkdGg6IDQzcHg7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOTM5MzkxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkZC1pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgICAgICAgICAgOTglIDAsXG4gICAgICAgICAgICAxMDAlIDI1JSxcbiAgICAgICAgICAgIDEwMCUgNzUlLFxuICAgICAgICAgICAgOTglIDEwMCUsXG4gICAgICAgICAgICAyJSAxMDAlLFxuICAgICAgICAgICAgMCA3NSUsXG4gICAgICAgICAgICAwIDI1JSxcbiAgICAgICAgICAgIDIlIDBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAmX19sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxufVxuXG4uaW5wdXQge1xuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmxcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgICAgOTglIDAsXG4gICAgICAgIDEwMCUgMjUlLFxuICAgICAgICAxMDAlIDc1JSxcbiAgICAgICAgOTglIDEwMCUsXG4gICAgICAgIDIlIDEwMCUsXG4gICAgICAgIDAgNzUlLFxuICAgICAgICAwIDI1JSxcbiAgICAgICAgMiUgMFxuICAgICk7XG59XG5cbi51bmRlcmxpbmUtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOTM5MzkxO1xuICAgIG1heC13aWR0aDogMTk2cHg7XG59XG5cbi5mb3JtLWFjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA4MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmFicmljLWNhdGFsb2cvZmFicmljLWNhdGFsb2ctYmFja2dyb3VuZC5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwMHB4O1xuICB0b3A6IDEwMHB4O1xufVxuLmZvcm0tdGl0bGUge1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAvKiBvciAxNTAlICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi50ZXh0LWxpZ2h0ZXIge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTM5MzkxO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50ZXh0LXVwcGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tZXNzYWdlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWVzc2FnZXIge1xuICB3aWR0aDogNDNweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTM5MzkxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkZC1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWRkLWltYWdlX19pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oOTglIDAsIDEwMCUgMjUlLCAxMDAlIDc1JSwgOTglIDEwMCUsIDIlIDEwMCUsIDAgNzUlLCAwIDI1JSwgMiUgMCk7XG59XG4uYWRkLWltYWdlX19sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uaW5wdXQge1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDk4JSAwLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDk4JSAxMDAlLCAyJSAxMDAlLCAwIDc1JSwgMCAyNSUsIDIlIDApO1xufVxuLnVuZGVybGluZS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTM5MzkxO1xuICBtYXgtd2lkdGg6IDE5NnB4O1xufVxuLmZvcm0tYWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"],
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


    var _shared_components_messagers_messagers_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../shared/components/messagers/messagers.module */
    "./src/app/shared/components/messagers/messagers.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fabric-catalog-page.component */
    "./src/app/pages/fabric-catalog-page/fabric-catalog-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fabric_catalog_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fabric-catalog-page-routing.module */
    "./src/app/pages/fabric-catalog-page/fabric-catalog-page-routing.module.ts");

    var FabricCatalogPageModule = function FabricCatalogPageModule() {
      _classCallCheck(this, FabricCatalogPageModule);
    };

    FabricCatalogPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: FabricCatalogPageModule
    });
    FabricCatalogPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function FabricCatalogPageModule_Factory(t) {
        return new (t || FabricCatalogPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _fabric_catalog_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["FabricCatalogPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _shared_components_messagers_messagers_module__WEBPACK_IMPORTED_MODULE_0__["MessagersModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FabricCatalogPageModule, {
        declarations: [_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_3__["FabricCatalogPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _fabric_catalog_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["FabricCatalogPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _shared_components_messagers_messagers_module__WEBPACK_IMPORTED_MODULE_0__["MessagersModule"]],
        exports: [_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_3__["FabricCatalogPageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](FabricCatalogPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          declarations: [_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_3__["FabricCatalogPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _fabric_catalog_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["FabricCatalogPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _shared_components_messagers_messagers_module__WEBPACK_IMPORTED_MODULE_0__["MessagersModule"]],
          exports: [_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_3__["FabricCatalogPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-fabric-catalog-page-fabric-catalog-page-module-es5.js.map