function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mui-flex-icons-page-mui-flex-icons-page-module"], {
  /***/
  "./src/app/projects/mui-flex-library/configs/icons.config.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/configs/icons.config.ts ***!
    \*******************************************************************/

  /*! exports provided: PREVIEW_ICONS_PAGE_CONFIG */

  /***/
  function srcAppProjectsMuiFlexLibraryConfigsIconsConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PREVIEW_ICONS_PAGE_CONFIG", function () {
      return PREVIEW_ICONS_PAGE_CONFIG;
    });
    /* harmony import */


    var _pages_mui_flex_icons_page_examples_example_normal_icons_example_normal_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../pages/mui-flex-icons-page/examples/example-normal-icons/example-normal-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-normal-icons/example-normal-icons.component.ts");
    /* harmony import */


    var _pages_mui_flex_icons_page_mui_flex_icons_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../pages/mui-flex-icons-page/mui-flex-icons-page.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/mui-flex-icons-page.component.ts");
    /* harmony import */


    var _pages_mui_flex_icons_page_examples_example_base_icons_example_base_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../pages/mui-flex-icons-page/examples/example-base-icons/example-base-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-base-icons/example-base-icons.component.ts");
    /* harmony import */


    var _pages_mui_flex_icons_page_examples_example_large_icons_example_large_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pages/mui-flex-icons-page/examples/example-large-icons/example-large-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-large-icons/example-large-icons.component.ts");
    /* harmony import */


    var _pages_mui_flex_icons_page_examples_example_editor_icons_example_editor_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pages/mui-flex-icons-page/examples/example-editor-icons/example-editor-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-editor-icons/example-editor-icons.component.ts");
    /* harmony import */


    var _pages_mui_flex_icons_page_examples_example_marker_icons_example_marker_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pages/mui-flex-icons-page/examples/example-marker-icons/example-marker-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-marker-icons/example-marker-icons.component.ts");
    /* harmony import */


    var _pages_mui_flex_icons_page_examples_example_other_icons_example_other_icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../pages/mui-flex-icons-page/examples/example-other-icons/example-other-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-other-icons/example-other-icons.component.ts");

    var PREVIEW_ICONS_PAGE_CONFIG = {
      description: {
        examples: [{
          description: ['Примеры использования', 'Для получения атрибута src, просто кликните по нужной иконке, и название скопируется в буфер обмена'],
          codePreview: [{
            code: '<mui-icon [src]="iconArrowDownLarge"></mui-icon>',
            language: 'html',
            fileName: 'HTML'
          }],
          previewComponent: null
        }, {
          description: ['Иконки'],
          previewComponent: _pages_mui_flex_icons_page_examples_example_base_icons_example_base_icons_component__WEBPACK_IMPORTED_MODULE_2__["ExampleBaseIconsComponent"]
        }, {
          description: ['Интерфейсные иконки normal (16px)'],
          previewComponent: _pages_mui_flex_icons_page_examples_example_normal_icons_example_normal_icons_component__WEBPACK_IMPORTED_MODULE_0__["ExampleNormalIconsComponent"]
        }, {
          description: ['Интерфейсные иконки large (24px)'],
          previewComponent: _pages_mui_flex_icons_page_examples_example_large_icons_example_large_icons_component__WEBPACK_IMPORTED_MODULE_3__["ExampleLargeIconsComponent"]
        }, {
          description: ['Иконки WYSIWYG-редактора'],
          previewComponent: _pages_mui_flex_icons_page_examples_example_editor_icons_example_editor_icons_component__WEBPACK_IMPORTED_MODULE_4__["ExampleEditorIconsComponent"]
        }, {
          description: ['Маркерные иконки'],
          previewComponent: _pages_mui_flex_icons_page_examples_example_marker_icons_example_marker_icons_component__WEBPACK_IMPORTED_MODULE_5__["ExampleMarkerIconsComponent"]
        }, {
          description: [' Прочие иконки'],
          previewComponent: _pages_mui_flex_icons_page_examples_example_other_icons_example_other_icons_component__WEBPACK_IMPORTED_MODULE_6__["ExampleOtherIconsComponent"]
        }]
      },
      connection: {
        moduleName: 'MuiButtonModule',
        codeElements: [{
          codePreview: {
            code: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { MuiIconModule } from \'@mui-flex-library/angular-kit\'; \n\n@NgModule({\n\tdeclarations: [\n\t\tExampleComponent,\n\t],\n\timports: [\n\t\tMuiIconModule,\n\t\tCommonModule\n\t],\n})\nexport class ExampleModule {}',
            language: 'typescript'
          }
        }]
      },
      componentPreview: _pages_mui_flex_icons_page_mui_flex_icons_page_component__WEBPACK_IMPORTED_MODULE_1__["MuiFlexIconsPageComponent"]
    };
    /***/
  },

  /***/
  "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-base-icons/example-base-icons.component.ts":
  /*!*********************************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-base-icons/example-base-icons.component.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: ExampleBaseIconsComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryPagesMuiFlexIconsPageExamplesExampleBaseIconsExampleBaseIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleBaseIconsComponent", function () {
      return ExampleBaseIconsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExampleBaseIconsComponent = /*#__PURE__*/function () {
      function ExampleBaseIconsComponent() {
        _classCallCheck(this, ExampleBaseIconsComponent);
      }

      _createClass(ExampleBaseIconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExampleBaseIconsComponent;
    }();

    ExampleBaseIconsComponent.ɵfac = function ExampleBaseIconsComponent_Factory(t) {
      return new (t || ExampleBaseIconsComponent)();
    };

    ExampleBaseIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleBaseIconsComponent,
      selectors: [["app-example-base-icons"]],
      decls: 26,
      vars: 0,
      consts: [[1, "flex", "flex_horizontal", "wrapper"], ["mui-flex-icon", "", "size", "small", 1, "preview"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "xmlns", "http://www.w3.org/2000/svg", "focusable", "false"], ["fill", "none", "fill-rule", "evenodd"], ["fill-opacity", ".01", "fill", "#FFF", "fill-rule", "nonzero", "d", "M0 0h32v32H0z"], ["d", "M16 23.47c2.211-1.467 3.667-3.967 3.667-6.803 0-2.837-1.456-5.337-3.667-6.804a8.26 8.26 0 0 1 4.583-1.378c4.557 0 8.25 3.663 8.25 8.182 0 4.518-3.693 8.181-8.25 8.181A8.26 8.26 0 0 1 16 23.471z", "fill", "#FBB735"], ["d", "M16 9.863c-2.211 1.467-3.667 3.967-3.667 6.804 0 2.836 1.456 5.336 3.667 6.804a8.26 8.26 0 0 1-4.583 1.377c-4.557 0-8.25-3.663-8.25-8.181 0-4.519 3.693-8.182 8.25-8.182A8.26 8.26 0 0 1 16 9.863z", "fill", "#F03727"], ["d", "M16 9.863c2.211 1.467 3.667 3.967 3.667 6.804 0 2.836-1.456 5.336-3.667 6.804-2.211-1.468-3.667-3.968-3.667-6.804 0-2.837 1.456-5.337 3.667-6.804z", "fill", "#F6772D"], ["x1", "-.18%", "y1", "50%", "x2", "100%", "y2", "50%", "id", "prefix__a"], ["stop-color", "#00B4E6", "offset", "0%"], ["stop-color", "#088CCB", "offset", "100%"], ["d", "M28.408 0h-6.073c.326 2.024 2.285 3.918 4.44 3.918h4.833c.065-.196.065-.457.065-.653A3.234 3.234 0 0 0 28.408 0z", "fill", "url(#prefix__a)", "transform", "translate(0 12)"], ["d", "M22.857 16.245v4.898h2.939V18.53h2.612c1.437 0 2.678-.98 3.07-2.286h-8.62zM12.408 12v9.143h2.612s.653 0 .98-.653l2.286-4.572h.326v5.225h2.939V12h-2.612s-.653.065-.98.653l-2.286 4.571h-.326V12h-2.939zM0 21.143V12h2.939s.849 0 1.306 1.306c1.175 3.461 1.306 3.918 1.306 3.918s.261-.848 1.306-3.918C7.314 12 8.163 12 8.163 12h2.939v9.143H8.163v-4.898h-.326l-1.633 4.898H4.898l-1.633-4.898H2.94v4.898H0z", "fill", "#4DB45F"], ["fill-rule", "nonzero", "fill", "none"], ["fill-opacity", ".01", "fill", "#FFF", "d", "M0 0h32v32H0z"], ["fill", "#0057A0", "d", "M11.257 21.302l1.618-9.143h2.587l-1.619 9.143zM23.226 12.384A6.909 6.909 0 0 0 20.907 12c-2.556 0-4.357 1.24-4.372 3.017-.014 1.314 1.286 2.047 2.267 2.485 1.007.448 1.346.734 1.34 1.134-.006.613-.803.893-1.547.893-1.036 0-1.586-.139-2.435-.48l-.334-.146-.363 2.047c.605.255 1.722.477 2.882.488 2.72 0 4.485-1.226 4.505-3.124.01-1.04-.68-1.832-2.172-2.484-.904-.423-1.458-.705-1.452-1.134 0-.38.469-.786 1.481-.786a4.93 4.93 0 0 1 1.937.35l.231.106.351-1.982M29.86 12.168h-1.999c-.62 0-1.083.162-1.355.758l-3.842 8.38h2.717s.444-1.127.545-1.375l3.313.004c.077.32.315 1.37.315 1.37h2.4l-2.094-9.137zm-3.19 5.893c.214-.527 1.03-2.556 1.03-2.556-.014.024.213-.53.344-.873l.175.789.599 2.64H26.67zM9.087 12.166L6.554 18.4l-.27-1.267c-.471-1.461-1.94-3.044-3.582-3.836l2.316 7.996 2.737-.003 4.073-9.125h-2.74"], ["d", "M4.205 12.16H.033L0 12.35c3.246.757 5.393 2.586 6.285 4.784l-.908-4.202c-.156-.58-.61-.752-1.172-.772", "fill", "#FAA61A"]],
      template: function ExampleBaseIconsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "linearGradient", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "stop", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "stop", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n\n[mui-flex-icon][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 24px !important;\n  min-height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 38px !important;\n  min-height: 38px !important;\n  max-width: 38px !important;\n  max-height: 38px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: inherit;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%]:hover {\n  transform: scale(1.4);\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-input-icon][_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtYmFzZS1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtZGlyZWN0aW9uLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLWJhc2UtaWNvbnMvZXhhbXBsZS1iYXNlLWljb25zLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1iYXNlLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC10ZXh0Lmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLWJhc2UtaWNvbnMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXNwYWNlcy5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1iYXNlLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1idXR0b25zLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLWJhc2UtaWNvbnMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWNvbHVtcy5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1iYXNlLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC10YWJsZS5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1iYXNlLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtYmFzZS1pY29ucy9leGFtcGxlLWJhc2UtaWNvbnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0FDQVo7QURHUTtFQUNJLDZCQUFBO0FDRFo7QURJUTtFQUNJLHlCQUFBO0FDRlo7QURLUTtFQUNJLGVBQUE7QUNIWjtBRE1RO0VBQ0ksdUJBQUE7QUNKWjtBRE9RO0VBQ0kscUJBQUE7QUNMWjtBRGFJO0VBQ0ksc0JBQUE7QUNYUjtBRGFRO0VBQ0ks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QkFBQTtBRnNOUjtBRW5OSTtFQUNJLGtCQUFBO0FGcU5SO0FFbE5JO0VBQ0ksa0JBQUE7QUZvTlI7QUVqTkk7RUFDSSxrQkFBQTtBRm1OUjtBRWhOSTtFQUNJLGtCQUFBO0FGa05SO0FFL01JO0VBQ0ksa0JBQUE7QUZpTlI7QUU5TUk7RUFDSSxrQkFBQTtBRmdOUjtBRTNNSTtFQUNJLGNBQUE7QUY2TVI7QUUxTUk7RUFDSSxnQkFBQTtBRjRNUjtBRXpNSTtFQUNJLGdCQUFBO0FGMk1SO0FFeE1JO0VBQ0ksaUJBQUE7QUYwTVI7QUV2TUk7RUFDSSxpQkFBQTtBRnlNUjtBRXRNSTtFQUNJLGlCQUFBO0FGd01SO0FFck1JO0VBQ0ksaUJBQUE7QUZ1TVI7QUVwTUk7RUFDSSxpQkFBQTtBRnNNUjtBRW5NSTtFQUNJLGlCQUFBO0FGcU1SO0FFbE1JO0VBQ0ksaUJBQUE7QUZvTVI7QUVqTUk7RUFDSSxpQkFBQTtBRm1NUjtBRTlMSTtFQUNJLGdCQUFBO0FGZ01SO0FFN0xJO0VBQ0ksa0JBQUE7QUYrTFI7QUU1TEk7RUFDSSxrQkFBQTtBRjhMUjtBRTNMSTtFQUNJLG1CQUFBO0FGNkxSO0FFMUxJO0VBQ0ksbUJBQUE7QUY0TFI7QUV6TEk7RUFDSSxtQkFBQTtBRjJMUjtBRXhMSTtFQUNJLG1CQUFBO0FGMExSO0FFdkxJO0VBQ0ksbUJBQUE7QUZ5TFI7QUV0TEk7RUFDSSxtQkFBQTtBRndMUjtBRXJMSTtFQUNJLG1CQUFBO0FGdUxSO0FFcExJO0VBQ0ksbUJBQUE7QUZzTFI7QUVqTEk7RUFDSSxhQUFBO0FGbUxSO0FFaExJO0VBQ0ksZUFBQTtBRmtMUjtBRS9LSTtFQUNJLGVBQUE7QUZpTFI7QUU5S0k7RUFDSSxnQkFBQTtBRmdMUjtBRTdLSTtFQUNJLGdCQUFBO0FGK0tSO0FFNUtJO0VBQ0ksZ0JBQUE7QUY4S1I7QUUzS0k7RUFDSSxnQkFBQTtBRjZLUjtBRTFLSTtFQUNJLGdCQUFBO0FGNEtSO0FFektJO0VBQ0ksZ0JBQUE7QUYyS1I7QUV4S0k7RUFDSSxnQkFBQTtBRjBLUjtBRXZLSTtFQUNJLGdCQUFBO0FG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QTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBTmlqQko7QU05aUJBO0VBQ0ksOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FOZ2pCSjtBTTdpQkE7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QU4raUJKO0FNNWlCQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FOOGlCSjtBTTNpQkE7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QU42aUJKO0FNMWlCQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FONGlCSjtBTXppQkE7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0FOMmlCSjtBTXhpQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBTjBpQko7QU12aUJBO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QU55aUJKO0FNdGlCQTtFQUNJLGdCQUFBO0FOd2lCSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLWJhc2UtaWNvbnMvZXhhbXBsZS1iYXNlLWljb25zLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmX2hvcml6b250YWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICYtbWlkZGxlIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWVuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJl93cmFwIHtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuXG5cbiAgICB9XG5cblxuICAgICZfdmVydGljYWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICYtbWlkZGxlIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jZW50ZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICAmLWVuZCB7XG4gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgIH1cblxuICAgICAgICAmLXJpZ2h0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtbGVmdCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFzZWxpbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAmX3dyYXAge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxufVxuXG5cbi5mdWxsLXNpemUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIiwiLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsZXhfaG9yaXpvbnRhbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZmxleF9ob3Jpem9udGFsLW1pZGRsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmxleF9ob3Jpem9udGFsLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZmxleF9ob3Jpem9udGFsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZsZXhfaG9yaXpvbnRhbF93cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZmxleF92ZXJ0aWNhbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxleF92ZXJ0aWNhbC1taWRkbGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZmxleF92ZXJ0aWNhbC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmxleF92ZXJ0aWNhbC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZsZXhfdmVydGljYWwtcmlnaHQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZmxleF92ZXJ0aWNhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZnVsbC1zaXplIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubXVpLXRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfaDEge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2gyIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oMyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g0IHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2JvZHkteGwge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxOXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1sIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbF9zZWNvbmRhcnkge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1tIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbV9zZWNvbmRhcnkge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1zIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvZHktc19zZWNvbmRhcnkge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9keS14cyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm11aS10ZXh0X2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLm11aS10ZXh0X2xpbmstaG92ZXJlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tdWktdGV4dF9saW5rLWhvdmVyZWQ6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnJvdXRlcl9saW5rIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgbWFyZ2luOiAwIDhweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnJvdXRlcl9saW5rLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UyYjUxZjtcbn1cbi5yb3V0ZXJfbGluazpob3Zlcjpub3QoLnJvdXRlcl9saW5rLWFjdGl2ZSkge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MDUxNTQ7XG59XG4ubXVpLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG4ubXVpLWxpbms6aG92ZXI6bm90KFtuZy1yZWZsZWN0LXJvdXRlci1saW5rPScnXSkge1xuICBjb2xvcjogIzIzYmE5OSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm11aS1zcGFjZSB7XG4gIC8qIFJJR0hUIFNQQUNFICovXG4gIC8qIExFRlQgU1BBQ0UgKi9cbiAgLyogQk9UVE9NIFNQQUNFICovXG4gIC8qIFRPUCBTUEFDRSAqL1xufVxuLm11aS1zcGFjZV9yaWdodC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLm11aS1zcGFjZV9yaWdodC0xIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTIge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMyB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtNCB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtNSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtNiB7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtNyB7XG4gIG1hcmdpbi1yaWdodDogMjhweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtOCB7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtOSB7XG4gIG1hcmdpbi1yaWdodDogMzZweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMTAge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLm11aS1zcGFjZV9sZWZ0LTEge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTIge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTMge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5tdWktc3BhY2VfbGVmdC00IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTYge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cbi5tdWktc3BhY2VfbGVmdC03IHtcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtOCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTkge1xuICBtYXJnaW4tbGVmdDogMzZweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0xIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTMge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS01IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTYge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNyB7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS04IHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTkge1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMTAge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLm11aS1zcGFjZV90b3AtMCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ubXVpLXNwYWNlX3RvcC0xIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLm11aS1zcGFjZV90b3AtMiB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5tdWktc3BhY2VfdG9wLTMge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLm11aS1zcGFjZV90b3AtNCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ubXVpLXNwYWNlX3RvcC01IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tdWktc3BhY2VfdG9wLTYge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLm11aS1zcGFjZV90b3AtNyB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG4ubXVpLXNwYWNlX3RvcC04IHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cbi5tdWktc3BhY2VfdG9wLTkge1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuLm11aS1zcGFjZV90b3AtMTAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLm11aS1idXR0b24ge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeS1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeSk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5W2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXN1Y2Nlc3M6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MtaG92ZXJlZCk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3Itc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zZWNvbmRhcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeS1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnkpO1xufVxuLm11aS1idXR0b25fY29sb3ItZXJyb3I6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yLWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3IpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWluZm86aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8taG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8pO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX3NpemUtbCB7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLm11aS1idXR0b25fc2l6ZS1tIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubXVpLWJ1dHRvbl9zaXplLXMge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwibFwiXSB7XG4gIG1heC13aWR0aDogMjgwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwic1wiXSB7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tdWktY29sX21kLTMge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG50YWJsZS5tdWktdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfYm9yZGVyX25vbmUpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG4ubXVpLXRhYmxlX190ZCxcbi5tdWktdGFibGVfX3RoIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICM5NTliYTQ7XG59XG4ubXVpLXRhYmxlX190ciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiAwO1xufVxuLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMTRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2hvdmVyX2Rpc2FibGVkKTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG59XG4ubXVpLXRhYmxlX19zdWJ0ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBjb2xvcjogIzc5ODE4Yztcbn1cbi5tdWktdGFibGVfbGF5b3V0X2ZpeGVkIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdHJfYm9yZGVyX3RvcCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tdWktdGFibGVfX3RkX3NpemVfbCxcbi5tdWktdGFibGVfc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgaGVpZ2h0OiA3OXB4O1xufVxuLm11aS10YWJsZV9fdHJfY3Vyc29yX3BvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubXVpLXRhYmxlX190ZF9hbGlnbl9jZW50ZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm11aS10YWJsZV9fdGRfZmlyc3QsXG4ubXVpLXRhYmxlX190aF9maXJzdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5tdWktdGFibGVfX3RkX2xhc3QsXG4ubXVpLXRhYmxlX190aF9sYXN0IHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfY2VudGVyLFxuLm11aS10YWJsZV9fdGhfdGV4dF9jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X3JpZ2h0LFxuLm11aS10YWJsZV9fdGhfdGV4dF9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9vdmVyZmxvdyxcbi5tdWktdGFibGVfX3RoX3RleHRfb3ZlcmZsb3cge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4vKiBJQ09OUyAqL1xuW211aS1mbGV4LWljb25dIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuW211aS1mbGV4LWljb25dLnByZXZpZXcge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblttdWktZmxleC1pY29uXVtzaXplPVwic21hbGxcIl0ge1xuICBtYXJnaW46IDZweDtcbiAgbWluLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbn1cblttdWktZmxleC1pY29uXVtzaXplPVwic21hbGxcIl0gPiBkaXYge1xuICBtaW4td2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuW211aS1mbGV4LWljb25dW3NpemU9XCJub3JtYWxcIl0ge1xuICBtYXJnaW46IDZweDtcbiAgbWluLXdpZHRoOiAzOHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAzOHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cblttdWktZmxleC1pY29uXVtzaXplPVwibm9ybWFsXCJdID4gZGl2IHtcbiAgbWluLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbn1cblttdWktZmxleC1pY29uXSA+IGRpdiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG59XG5bbXVpLWZsZXgtaWNvbl0gPiBkaXYgPiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuW211aS1mbGV4LWljb25dLnByZXZpZXc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuW211aS1mbGV4LWlucHV0LWljb25dIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbiIsIi5tdWktdGV4dCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgICAmX2gxIHtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDIge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbV9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LXMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS14cyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cblxuICAgICZfbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICAgJi1ob3ZlcmVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaG92ZXJlZDpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgICAgICAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG4ucm91dGVyX2xpbmsge1xuICAgIG9wYWNpdHk6IC43O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgJi1hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG4gICAgfVxufVxuXG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MDUxNTQ7XG59XG5cbi5tdWktbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgICBjb2xvcjogIzIzYmE5OSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbn1cbiIsIi5tdWktc3BhY2Uge1xuICAgIC8qIFJJR0hUIFNQQUNFICovXG5cbiAgICAmX3JpZ2h0LTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0yIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0zIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC02IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTgge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC05IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogTEVGVCBTUEFDRSAqL1xuXG4gICAgJl9sZWZ0LTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTIge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0zIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgICZfbGVmdC02IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC05IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogQk9UVE9NIFNQQUNFICovXG5cbiAgICAmX2JvdHRvbS0wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgIC8qIFRPUCBTUEFDRSAqL1xuXG4gICAgJl90b3AtMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJl90b3AtMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG5cbiAgICAmX3RvcC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgICZfdG9wLTYge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTcge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTgge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTkge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTEwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG59XG4iLCIubXVpLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcblxuXG4gICAgJl9jb2xvciB7XG4gICAgICAgICYtcHJpbWFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5W2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MtaG92ZXJlZCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2VzcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgICYtZXJyb3I6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZXJyb3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfc2l6ZSB7XG4gICAgICAgICYtbCB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMzYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLW0ge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbiIsIi5tdWktY29sIHtcblxuICAgICZfbWQtMyB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG4iLCJ0YWJsZS5tdWktdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZCxcbi5tdWktdGFibGVfX3RoIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICM5NTliYTQ7XG59XG5cbi5tdWktdGFibGVfX3RyIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGhlaWdodDogNTVweDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2hvdmVyX2Rpc2FibGVkKTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cblxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDRweCAwIDA7XG4gICAgY29sb3I6ICM3OTgxOGM7XG59XG5cbi5tdWktdGFibGVfbGF5b3V0X2ZpeGVkIHtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdHJfYm9yZGVyX3RvcCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGhlaWdodDogNzlweDtcbn1cblxuLm11aS10YWJsZV9fdHJfY3Vyc29yX3BvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX2xhc3QsXG4ubXVpLXRhYmxlX190aF9sYXN0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9vdmVyZmxvdyxcbi5tdWktdGFibGVfX3RoX3RleHRfb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWxpYnJhcnkubGVzcyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogSUNPTlMgKi9cblxuW211aS1mbGV4LWljb25dIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuW211aS1mbGV4LWljb25dLnByZXZpZXcge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cInNtYWxsXCJdIHtcbiAgICBtYXJnaW46IDZweDtcbiAgICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuXG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cInNtYWxsXCJdPmRpdiB7XG4gICAgbWluLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuW211aS1mbGV4LWljb25dW3NpemU9XCJub3JtYWxcIl0ge1xuICAgIG1hcmdpbjogNnB4O1xuICAgIG1pbi13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cblttdWktZmxleC1pY29uXVtzaXplPVwibm9ybWFsXCJdPmRpdiB7XG4gICAgbWluLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbn1cblxuW211aS1mbGV4LWljb25dPmRpdiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0XG59XG5cblttdWktZmxleC1pY29uXT5kaXY+aW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblttdWktZmxleC1pY29uXS5wcmV2aWV3OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cblttdWktZmxleC1pbnB1dC1pY29uXSB7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xufVxuIl19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleBaseIconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-base-icons',
          templateUrl: './example-base-icons.component.html',
          styleUrls: ['./example-base-icons.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-editor-icons/example-editor-icons.component.ts":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-editor-icons/example-editor-icons.component.ts ***!
    \*************************************************************************************************************************************/

  /*! exports provided: ExampleEditorIconsComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryPagesMuiFlexIconsPageExamplesExampleEditorIconsExampleEditorIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleEditorIconsComponent", function () {
      return ExampleEditorIconsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExampleEditorIconsComponent = /*#__PURE__*/function () {
      function ExampleEditorIconsComponent() {
        _classCallCheck(this, ExampleEditorIconsComponent);
      }

      _createClass(ExampleEditorIconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExampleEditorIconsComponent;
    }();

    ExampleEditorIconsComponent.ɵfac = function ExampleEditorIconsComponent_Factory(t) {
      return new (t || ExampleEditorIconsComponent)();
    };

    ExampleEditorIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleEditorIconsComponent,
      selectors: [["app-example-editor-icons"]],
      decls: 101,
      vars: 0,
      consts: [[1, "flex", "flex_horizontal", "wrapper"], ["mui-flex-icon", "", "size", "normal", 1, "preview"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "focusable", "false"], ["fill", "#666", "d", "M19.73 5.655L5.655 19.73A9.959 9.959 0 0 0 12 22c5.523 0 10-4.477 10-10a9.959 9.959 0 0 0-2.27-6.345zm-1.417-1.411A9.959 9.959 0 0 0 12 2C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 2.244 6.313l14.069-14.07zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"], ["fill", "currentColor", "d", "M20.316 10.71a1 1 0 0 1 1.372 1.456l-8.51 8.026c-2.556 2.41-6.678 2.41-9.234 0-2.59-2.442-2.59-6.428 0-8.87l8.51-8.026c1.832-1.728 4.78-1.728 6.613 0a4.356 4.356 0 0 1 0 6.399l-8.52 8.025a2.933 2.933 0 0 1-3.992 0 2.678 2.678 0 0 1 0-3.927l7.862-7.406a1 1 0 1 1 1.372 1.456L7.927 15.25a.679.679 0 0 0 0 1.016c.339.32.91.32 1.25 0l8.518-8.026c1.029-.97 1.029-2.517 0-3.488-1.062-1.001-2.807-1.001-3.869 0l-8.51 8.026c-1.752 1.653-1.752 4.307 0 5.96 1.786 1.684 4.704 1.684 6.49 0l8.51-8.026z"], ["fill", "currentColor", "d", "M19.048 19l-4.91-7.248h-.057V19h-3.162v-7.248h-.056L5.952 19H2l5.73-7.606L2.593 5h3.67l4.6 6.2h.056V5h3.162v6.2h.056l4.6-6.2h3.67l-5.137 6.394L23 19z"], ["fill", "currentColor", "d", "M4.27 4L3 5.27l6.97 6.97L7.5 18h3l1.57-3.66L17.73 20 19 18.73 4.55 4.27 4.27 4zM7 4v.18L9.82 7h2.4l-.72 1.68 2.1 2.1L15.21 7H21V4H7z"], ["fill", "currentColor", "d", "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"], ["fill", "currentColor", "d", "M0 18h24v4H0zm8.959-5.795L7.598 16H5l5.34-14h3.32L19 16h-2.598l-1.36-3.795H8.958zm4.948-3.146a203.88 203.88 0 0 1-1.897-5.565h-.04a165.888 165.888 0 0 1-1.877 5.565L9.7 10.16h4.598l-.392-1.101z"], ["fill", "currentColor", "d", "M9.925 19H7.086V7.452H3V5h11.01v2.452H9.926zm8.928 0H16.57v-7.092H14V10h7.424v1.908h-2.571z"], ["fill", "currentColor", "d", "M3 18h18v2H3zm16.424-1.125h-2.746l-2.186-6.327h-.034l-1.526 6.327h-2.44l1.457-6.048h-.034l-4.762 6.048H4l5.763-6.64L7.423 4.5h2.662l1.932 5.927h.034L13.49 4.5h2.441l-1.373 5.649h.034l4.34-5.649H22l-5.186 6.014z"], ["fill", "none", "fill-rule", "evenodd"], ["d", "M-379-12h536v48h-536z"], ["d", "M0 0h24v24H0z"], ["fill", "#E7E8EA", "d", "M0 18h4v4H0z"], ["fill", "#CBCFD3", "d", "M4 18h4v4H4z"], ["fill", "#E7E8EA", "d", "M8 18h4v4H8z"], ["fill", "#CBCFD3", "d", "M12 18h4v4h-4z"], ["fill", "#E7E8EA", "d", "M16 18h4v4h-4z"], ["fill", "#CBCFD3", "d", "M20 18h4v4h-4z"], ["fill", "currentColor", "d", "M7.417 9.997a.25.25 0 0 0-.426.146c-.124 1.022-.662 2.218-1.438 3.197a.25.25 0 0 0 .019.332l.573.573-1.573 1.574a.25.25 0 0 0 .116.419l2 .5a.25.25 0 0 0 .237-.066l.824-.822.323.322a.25.25 0 0 0 .305.038l.735-.44c.837-.564 1.676-.897 2.493-.992a.251.251 0 0 0 .149-.426L7.416 9.996zM19.633 3.44l-.992-1.002a1.53 1.53 0 0 0-1.965-.15L8.1 8.738a.25.25 0 0 0-.027.377l4.878 4.9a.25.25 0 0 0 .178.073h.017a.25.25 0 0 0 .183-.1l6.454-8.572c.443-.61.38-1.442-.15-1.977z"], ["fill", "currentColor", "d", "M2 11h20v2H2z"], ["fill", "currentColor", "d", "M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm3.998 13.703l-.027-3.019a1.372 1.372 0 0 0-.44-1.026l-2.688-2.392a1.018 1.018 0 0 0-1.372 0l-3.708 3.296c-.39.355-.98.355-1.371 0l-1.15-1.022a1.018 1.018 0 0 0-1.371 0l-3.43 3.043a1.372 1.372 0 0 0-.439 1.026v.094A1.222 1.222 0 0 0 5.134 20h13.718a1.21 1.21 0 0 0 .84-.407c.214-.244.325-.564.306-.89z"], ["fill", "currentColor", "d", "M10 9h10v2H10zm-2 3l-4 3V9zM4 5h16v2H4zm6 8h10v2H10zm-6 4h12v2H4z"], ["fill", "currentColor", "d", "M18.086 19h-3.657l-4.315-6.945h-.057L8.257 19H5L8.6 5h3.257l-1.428 5.567h.057L16.714 5H21l-7.714 6.642z"], ["fill", "currentColor", "d", "M7 8h10v2H7zM4 5h16v2H4zm0 6h16v2H4zm3 3h10v2H7zm-3 3h16v2H4z"], ["fill", "currentColor", "d", "M4 8h16v2H4zm0-3h16v2H4zm0 6h16v2H4zm0 3h16v2H4zm0 3h16v2H4z"], ["fill", "currentColor", "d", "M4 8h10v2H4zm0-3h16v2H4zm0 6h16v2H4zm0 3h10v2H4zm0 3h16v2H4z"], ["fill", "currentColor", "d", "M10 8h10v2H10zM4 5h16v2H4zm0 6h16v2H4zm6 3h10v2H10zm-6 3h16v2H4z"], ["fill", "currentColor", "d", "M9.662 13.682c-.554-1.195 1.193-2.274 1.764-1.07 1.032 2.223 3.144 1.91 4.627.394 1.063-1.08 2.105-2.18 3.156-3.267.3-.277.583-.571.848-.882a2.269 2.269 0 0 0-.622-3.198c-2.461-1.701-4.04.83-5.585 2.427-.927.965-2.399-.478-1.486-1.432 1.046-1.077 2.148-2.678 3.584-3.322 1.435-.644 3.183-.286 4.481.516a4.329 4.329 0 0 1 .887 6.676c-1.347 1.446-2.714 2.914-4.136 4.286-2.321 2.235-6.088 1.974-7.518-1.128zM13.84 10.8c.555 1.195-1.19 2.273-1.76 1.073-1.032-2.227-3.144-1.906-4.63-.395-1.06 1.077-2.103 2.176-3.153 3.264-.301.276-.584.57-.849.882a2.266 2.266 0 0 0 .623 3.207c2.458 1.692 4.04-.838 5.585-2.436.924-.954 2.406.478 1.482 1.435-1.042 1.074-2.142 2.675-3.58 3.319-1.439.644-3.186.287-4.484-.516a4.331 4.331 0 0 1-.884-6.676c1.347-1.443 2.721-2.914 4.136-4.286 2.32-2.235 6.085-1.974 7.514 1.129z"], ["fill", "currentColor", "d", "M8 5h12v2H8zM4.209 7.76V5.755h-.841v-.83c.311 0 .542-.05.692-.147.15-.097.243-.255.277-.474h1.031V7.76H4.209zm.415 2.48c.288 0 .538.048.752.143.213.095.377.224.49.388a.93.93 0 0 1 .17.546c0 .267-.078.481-.237.643-.159.162-.388.3-.689.414a4.4 4.4 0 0 0-.415.177.681.681 0 0 0-.193.133.288.288 0 0 0-.068.135h1.698v.877h-2.99c-.007-.08-.01-.16-.01-.24 0-.381.073-.69.218-.927.145-.237.396-.443.754-.616.21-.104.363-.181.458-.233.095-.052.175-.11.24-.175a.302.302 0 0 0 .098-.218.234.234 0 0 0-.07-.18.276.276 0 0 0-.195-.066.307.307 0 0 0-.248.11c-.062.074-.093.18-.093.321H3.177c-.003-.394.122-.698.376-.911.253-.214.61-.321 1.071-.321zm-.01 6c.293 0 .547.04.76.118.213.078.377.19.493.334a.793.793 0 0 1 .172.508c0 .18-.045.328-.135.445-.09.117-.237.212-.44.285v.01c.217.07.374.167.472.29a.747.747 0 0 1 .148.48c0 .213-.06.4-.18.56-.12.16-.29.283-.508.37-.218.087-.474.13-.767.13-.5 0-.882-.106-1.147-.317-.266-.212-.398-.52-.398-.923h1.14c0 .147.034.257.103.33.068.073.167.11.297.11a.38.38 0 0 0 .25-.075c.06-.05.09-.118.09-.205 0-.107-.037-.186-.113-.238-.075-.051-.192-.077-.352-.077h-.08v-.77h.12a.48.48 0 0 0 .293-.08.25.25 0 0 0 .107-.21.255.255 0 0 0-.083-.203c-.055-.048-.134-.072-.237-.072-.127 0-.223.037-.29.11a.437.437 0 0 0-.1.305h-1.09c0-.38.13-.677.39-.892.26-.216.622-.323 1.085-.323zM8 11h12v2H8zm0 6h12v2H8z"], ["fill", "currentColor", "d", "M10 9h10v2H10zm-6 3l4 3V9zm0-7h16v2H4zm6 8h10v2H10zm-6 4h12v2H4z"], ["fill", "currentColor", "d", "M14.424 16.116a6.254 6.254 0 0 0 1.67-1.67 4.569 4.569 0 0 0 .768-2.199c-.777 0-1.449-.185-2.014-.556-.565-.372-.848-1.016-.848-1.935 0-.777.265-1.431.795-1.961A2.602 2.602 0 0 1 16.703 7c.813 0 1.528.336 2.146 1.007.619.671.928 1.572.928 2.703 0 1.555-.406 2.88-1.219 3.975-.813 1.095-1.837 2.032-3.074 2.809l-1.06-1.378zm-9 0a6.254 6.254 0 0 0 1.67-1.67 4.569 4.569 0 0 0 .768-2.199c-.777 0-1.449-.185-2.014-.556C5.283 11.319 5 10.675 5 9.755c0-.777.265-1.431.795-1.961A2.602 2.602 0 0 1 7.703 7c.813 0 1.528.336 2.147 1.007.618.671.927 1.572.927 2.703 0 1.555-.406 2.88-1.219 3.975-.813 1.095-1.837 2.032-3.074 2.809l-1.06-1.378z"], ["fill", "currentColor", "d", "M19.5 10.969a.306.306 0 0 1-.112.238l-7.022 5.669a.278.278 0 0 1-.347.001.31.31 0 0 1-.094-.35l1.412-3.753C7.818 12.624 5.303 13.433 2 19c.901-4.806 2.695-9.2 11.337-9.835L11.925 5.41a.31.31 0 0 1 .094-.35.275.275 0 0 1 .347.002l7.022 5.668c.07.056.112.144.112.238z"], ["fill", "currentColor", "d", "M11.307 10.22h-.92v2.003l2.149-2.15a4.8 4.8 0 0 1-1.23.147m4.97 1.776l-2.03 2.03c.049.17.08.351.08.554 0 .546-.22.983-.66 1.31-.44.326-1.026.49-1.76.49h-.013L9.672 18.6a9.29 9.29 0 0 0 2.235.26c1.106 0 2.08-.17 2.92-.51.84-.34 1.493-.82 1.96-1.44.467-.62.7-1.35.7-2.19 0-.908-.22-1.64-.66-2.2a3.17 3.17 0 0 0-.551-.525M11.787 6.48c.72 0 1.293.167 1.72.5.426.333.64.773.64 1.32 0 .064-.015.122-.021.183l2.527-2.526a3.512 3.512 0 0 0-.826-.897C14.88 4.353 13.567 4 11.887 4c-1.813 0-3.217.423-4.21 1.27-.994.847-1.49 2.037-1.49 3.57h3.16c0-1.573.813-2.36 2.44-2.36M8.71 13.9H6.005c0 .865.157 1.61.448 2.254L8.71 13.9zM5 19.04L19.464 4.56l1.417 1.417-14.464 14.48z"], ["fill", "currentColor", "d", "M9.886 19l-1.974-3.32c-.321.547-.64 1.1-.954 1.66-.314.56-.64 1.114-.976 1.66H3l3.421-5.164a150.463 150.463 0 0 0-1.568-2.418A457.043 457.043 0 0 1 3.263 9h3.07c.293.492.574.99.845 1.496.27.505.544 1.004.822 1.496L9.71 9h3.027l-3.18 4.775L13 19H9.886zm4.546 3.056c.02-.55.11-1.034.271-1.454.162-.42.365-.791.61-1.115.246-.325.52-.61.824-.857.303-.247.607-.469.91-.666a4.43 4.43 0 0 0 .581-.434.477.477 0 0 0 .165-.349.44.44 0 0 0-.15-.338c-.1-.092-.257-.137-.47-.137-.232 0-.484.061-.755.185-.272.123-.572.326-.901.608l-.872-1.333a3.307 3.307 0 0 1 1.225-.835 3.89 3.89 0 0 1 1.43-.275c.316 0 .617.04.905.122.287.08.54.204.76.37.22.165.394.373.523.624.13.25.194.544.194.882 0 .459-.136.86-.407 1.206-.271.345-.694.68-1.269 1.004-.22.127-.403.24-.552.339a2.762 2.762 0 0 0-.368.285 1.687 1.687 0 0 0-.387.529h2.983v1.639h-5.25z"], ["fill", "currentColor", "d", "M9.886 19l-1.974-3.32c-.321.547-.64 1.1-.954 1.66-.314.56-.64 1.114-.976 1.66H3l3.421-5.164a150.463 150.463 0 0 0-1.568-2.418A457.041 457.041 0 0 1 3.263 9h3.07c.293.492.574.99.845 1.496.27.505.544 1.004.822 1.496L9.71 9h3.027l-3.18 4.775L13 19H9.886zm4.546-6.944c.02-.55.11-1.034.271-1.454.162-.42.365-.791.61-1.115.246-.325.52-.61.824-.857.303-.247.607-.469.91-.666a4.43 4.43 0 0 0 .581-.434.477.477 0 0 0 .165-.349.44.44 0 0 0-.15-.338c-.1-.092-.257-.137-.47-.137-.232 0-.484.061-.755.185-.272.123-.572.326-.901.608l-.872-1.333a3.307 3.307 0 0 1 1.225-.835 3.89 3.89 0 0 1 1.43-.275c.316 0 .617.04.905.122.287.08.54.204.76.37.22.165.394.373.523.624.13.25.194.544.194.882 0 .459-.136.86-.407 1.206-.271.345-.694.68-1.269 1.004-.22.127-.403.24-.552.339a2.762 2.762 0 0 0-.368.285 1.687 1.687 0 0 0-.387.529h2.983v1.639h-5.25z"], ["fill", "currentColor", "d", "M6.28 9.783v6.21H4.43v-6.21H2.1V8.168h6.513v1.615H6.281zm5.552 5.165c.25 0 .456-.062.62-.187a.716.716 0 0 0 .289-.483h1.807a2.24 2.24 0 0 1-.481.961 2.48 2.48 0 0 1-.936.682 3.19 3.19 0 0 1-1.278.247c-.592 0-1.1-.128-1.524-.385a2.491 2.491 0 0 1-.968-1.066c-.221-.454-.332-.974-.332-1.56 0-.557.111-1.057.332-1.5.221-.443.544-.791.968-1.044.424-.253.925-.38 1.503-.38.634 0 1.176.16 1.625.479.45.319.77.756.963 1.313a3.2 3.2 0 0 1 .166.681c.032.242.048.532.048.869h-3.861c.021.49.128.842.32 1.055a.951.951 0 0 0 .739.318zm0-3.516a.923.923 0 0 0-.685.269c-.178.18-.292.46-.342.84h2.043c-.036-.373-.147-.651-.332-.835a.936.936 0 0 0-.684-.274zm10.267 4.56h-2.182l-1.369-2.703h-.021l-1.38 2.703h-2.171l2.364-4.01-2.236-3.814h2.129l1.294 2.615h.021l1.284-2.615h2.128l-2.235 3.813 2.374 4.011z"], ["fill", "currentColor", "d", "M8 5h12v2H8z"], ["cx", "5", "cy", "6", "r", "1", "fill", "currentColor"], ["cx", "5", "cy", "18", "r", "1", "fill", "currentColor"], ["cx", "5", "cy", "12", "r", "1", "fill", "currentColor"], ["fill", "currentColor", "d", "M8 11h12v2H8zm0 6h12v2H8z"], ["fill", "currentColor", "d", "M14.13 17v-4.939a12.925 12.925 0 0 1-3.549.486c-1.46 0-2.588-.35-3.385-1.049C6.399 10.798 6 9.809 6 8.53V4h2.87v3.967c0 .767.226 1.352.68 1.752.452.401 1.107.602 1.963.602.923 0 1.795-.145 2.617-.435V4H17v13h-2.87zM6 19h13v2H6z"], ["fill", "currentColor", "d", "M2.323 11.204l7.022 5.668a.278.278 0 0 0 .348.002.31.31 0 0 0 .094-.35L8.375 12.77c5.518-.149 8.034.659 11.337 6.226-.902-4.806-2.695-9.2-11.337-9.835l1.412-3.753a.31.31 0 0 0-.095-.35.275.275 0 0 0-.347 0l-7.022 5.67a.306.306 0 0 0-.111.237c0 .094.04.182.111.239z"]],
      template: function ExampleEditorIconsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n\n[mui-flex-icon][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 24px !important;\n  min-height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 38px !important;\n  min-height: 38px !important;\n  max-width: 38px !important;\n  max-height: 38px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: inherit;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%]:hover {\n  transform: scale(1.4);\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-input-icon][_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtZWRpdG9yLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1kaXJlY3Rpb24ubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtZWRpdG9yLWljb25zL2V4YW1wbGUtZWRpdG9yLWljb25zLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1lZGl0b3ItaWNvbnMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRleHQubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtZWRpdG9yLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1zcGFjZXMubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtZWRpdG9yLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1idXR0b25zLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLWVkaXRvci1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtY29sdW1zLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLWVkaXRvci1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtdGFibGUubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtZWRpdG9yLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtZWRpdG9yLWljb25zL2V4YW1wbGUtZWRpdG9yLWljb25zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxtQkFBQTtBQ0NaO0FERVE7RUFDSSw4QkFBQTtBQ0FaO0FER1E7RUFDSSw2QkFBQTtBQ0RaO0FESVE7RUFDSSx5QkFBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0FDSFo7QURNUTtFQUNJLHVCQUFBO0FDSlo7QURPUTtFQUNJLHFCQUFBO0FDTFo7QURhSTtFQUNJ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QUFBO0FGdU5SO0FFcE5JO0VBQ0ksa0JBQUE7QUZzTlI7QUVuTkk7RUFDSSxrQkFBQTtBRnFOUjtBRWxOSTtFQUNJLGtCQUFBO0FGb05SO0FFak5JO0VBQ0ksa0JBQUE7QUZtTlI7QUVoTkk7RUFDSSxrQkFBQTtBRmtOUjtBRS9NSTtFQUNJLGtCQUFBO0FGaU5SO0FFOU1JO0VBQ0ksa0JBQUE7QUZnTlI7QUUzTUk7RUFDSSxjQUFBO0FGNk1SO0FFMU1JO0VBQ0ksZ0JBQUE7QUY0TVI7QUV6TUk7RUFDSSxnQkFBQTtBRjJNUjtBRXhNSTtFQUNJLGlCQUFBO0FGME1SO0FFdk1JO0VBQ0ksaUJBQUE7QUZ5TVI7QUV0TUk7RUFDSSxpQkFBQTtBRndNUjtBRXJNSTtFQUNJLGlCQUFBO0FGdU1SO0FFcE1JO0VBQ0ksaUJBQUE7QUZzTVI7QUVuTUk7RUFDSSxpQkFBQTtBRnFNUjtBRWxNSTtFQUNJLGlCQUFBO0FGb01SO0FFak1JO0VBQ0ksaUJBQUE7QUZtTVI7QUU5TEk7RUFDSSxnQkFBQTtBRmdNUjtBRTdMSTtFQUNJLGtCQUFBO0FGK0xSO0FFNUxJO0VBQ0ksa0JBQUE7QUY4TFI7QUUzTEk7RUFDSSxtQkFBQTtBRjZMUjtBRTFMSTtFQUNJLG1CQUFBO0FGNExSO0FFekxJO0VBQ0ksbUJBQUE7QUYyTFI7QUV4TEk7RUFDSSxtQkFBQTtBRjBMUjtBRXZMSTtFQUNJLG1CQUFBO0FGeUxSO0FFdExJO0VBQ0ksbUJBQUE7QUZ3TFI7QUVyTEk7RUFDSSxtQkFBQTtBRnVMUjtBRXBMSTtFQUNJLG1CQUFBO0FGc0xSO0FFakxJO0VBQ0ksYUFBQTtBRm1MUjtBRWhMSTtFQUNJLGVBQUE7QUZrTFI7QUUvS0k7RUFDSSxlQUFBO0FGaUxSO0FFOUtJO0VBQ0ksZ0JBQUE7QUZnTFI7QUU3S0k7RUFDSSxnQkFBQTtBRitLUjtBRTVLSTtFQUNJLGdCQUFBO0FGOEtSO0FFM0tJO0VBQ0ksZ0JBQUE7QUY2S1I7QUUxS0k7RUFDSSxnQkFBQTtBRjRLUjtBRXpLSTtFQUNJLGdCQUFBO0FGMktSO0FFeEtJO0VBQ0ksZ0JBQUE7QUYwS1I7QUV2S0k7RUFDSSxnQkFBQTtBRnlLUjtBRy9WQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FIaVdKO0FHN1ZRO0VBQ0ksa0RBQUE7QUgrVlo7QUc1VlE7RUFDSSwwQ0FBQTtBSDhWWjtBRzNWUTtFQUNJLFlBQUE7QUg2Vlo7QUcxVlE7RUFDSSxrREFBQTtFQUNBLDZCQUFBO0FINFZaO0FHelZRO0VBQ0ksMENBQUE7RUFDQSw2QkFBQTtBSDJWWjtBR3hWUTtFQUNJLG9EQUFBO0FIMFZaO0FHdlZRO0VBQ0ksNENBQUE7QUh5Vlo7QUdyVlE7RUFDSSxnREFBQTtBSHVWWjtBR3BWUTtFQUNJLHdDQUFBO0VBQ0EsNkJBQUE7QUhzVlo7QUduVlE7RUFDSSwrQ0FBQTtBSHFWWjtBR2xWUTtFQUNJLHVDQUFBO0VBQ0EsNkJBQUE7QUhvVlo7QUcvVVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSGdWWjtBRzdVUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FIOFVaO0FHM1VRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUg0VVo7QUd2VUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUh5VUo7QUd0VUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUh3VUo7QUlqYUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FKbWFSO0FLemFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUwyYUo7QUt4YUE7RUFDSSxnQ0FBQTtBTDBhSjtBS3ZhQTs7RUFHSSxzQkFBQTtFQUNBLGdCQUFBO0FMeWFKO0FLdGFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBTHdhSjtBS3JhQTtFQUVJLCtCQUFBO0VBRUEseUJBQUE7RUFFQSx1Q0FBQTtFQUNBLFVBQUE7QUx1YUo7QUtwYUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUxzYUo7QUtuYUE7RUFDSSxtQkFBQTtBTHFhSjtBS2xhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBTG9hSjtBS2phQTtFQUNJLG1CQUFBO0FMbWFKO0FLaGFBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUxrYUo7QUsvWkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTGlhSjtBSzlaQTtFQUNJLDZCQUFBO0FMZ2FKO0FLN1pBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwrWko7QUs1WkE7O0VBRUksWUFBQTtBTDhaSjtBSzNaQTtFQUNJLGVBQUE7QUw2Wko7QUsxWkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTDRaSjtBS3paQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMMlpKO0FLeFpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwwWko7QUt2WkE7RUFDSSxzQkFBQTtBTHlaSjtBS3RaQTs7RUFFSSxlQUFBO0FMd1pKO0FLclpBOztFQUVJLGdCQUFBO0FMdVpKO0FLcFpBOztFQUVJLGtCQUFBO0FMc1pKO0FLblpBOztFQUVJLGlCQUFBO0FMcVpKO0FLbFpBOztFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBTG9aSjtBTWpqQkE7RUFDSSxjQUFBO0FObWpCSjtBQUNBLFVBQVU7QU0vaUJWO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QU5pakJKO0FNOWlCQTtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBTmdqQko7QU03aUJBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FOK2lCSjtBTTVpQkE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBTjhpQko7QU0zaUJBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FONmlCSjtBTTFpQkE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBTjRpQko7QU16aUJBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtBTjJpQko7QU14aUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QU4waUJKO0FNdmlCQTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FOeWlCSjtBTXRpQkE7RUFDSSxnQkFBQTtBTndpQkoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1lZGl0b3ItaWNvbnMvZXhhbXBsZS1lZGl0b3ItaWNvbnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICZfaG9yaXpvbnRhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmX3dyYXAge1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jZW50ZXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxuXG4gICAgJl92ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgfVxuXG4gICAgICAgICYtcmlnaHQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICZfd3JhcCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG59XG5cblxuLmZ1bGwtc2l6ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleF9ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4X2hvcml6b250YWwtbWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X2hvcml6b250YWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF9ob3Jpem9udGFsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF9ob3Jpem9udGFsX3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleF9ob3Jpem9udGFsLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3ZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLW1pZGRsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfdmVydGljYWwtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mdWxsLXNpemUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tdWktdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9oMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2gzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDQge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfYm9keS14bCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWwge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1sX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW0ge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1tX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LXMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9keS1zX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXhzIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubXVpLXRleHRfbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm11aS10ZXh0X2xpbmstaG92ZXJlZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucm91dGVyX2xpbmsge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDAgOHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucm91dGVyX2xpbmstYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xufVxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cbi5tdWktbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXNwYWNlIHtcbiAgLyogUklHSFQgU1BBQ0UgKi9cbiAgLyogTEVGVCBTUEFDRSAqL1xuICAvKiBCT1RUT00gU1BBQ0UgKi9cbiAgLyogVE9QIFNQQUNFICovXG59XG4ubXVpLXNwYWNlX3JpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC02IHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC03IHtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC04IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC05IHtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0xMCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubXVpLXNwYWNlX2xlZnQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5tdWktc3BhY2VfbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNiB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTcge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtOSB7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMyB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS00IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS03IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTgge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOSB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC0wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5tdWktc3BhY2VfdG9wLTEge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0yIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm11aS1zcGFjZV90b3AtMyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubXVpLXNwYWNlX3RvcC00IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm11aS1zcGFjZV90b3AtNiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC03IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5tdWktc3BhY2VfdG9wLTgge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLm11aS1zcGFjZV90b3AtOSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm11aS1idXR0b25fY29sb3Itc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fc2l6ZS1sIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubXVpLWJ1dHRvbl9zaXplLW0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtcyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1jb2xfbWQtMyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnRhYmxlLm11aS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzk1OWJhNDtcbn1cbi5tdWktdGFibGVfX3RyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IDA7XG59XG4ubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogNTVweDtcbiAgY29sb3I6ICMzMzM7XG59XG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGNvbG9yOiAjNzk4MThjO1xufVxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBoZWlnaHQ6IDc5cHg7XG59XG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi8qIElDT05TICovXG5bbXVpLWZsZXgtaWNvbl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldyB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuW211aS1mbGV4LWljb25dW3NpemU9XCJzbWFsbFwiXSB7XG4gIG1hcmdpbjogNnB4O1xuICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuW211aS1mbGV4LWljb25dW3NpemU9XCJzbWFsbFwiXSA+IGRpdiB7XG4gIG1pbi13aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXSB7XG4gIG1hcmdpbjogNnB4O1xuICBtaW4td2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuW211aS1mbGV4LWljb25dW3NpemU9XCJub3JtYWxcIl0gPiBkaXYge1xuICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuW211aS1mbGV4LWljb25dID4gZGl2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cblttdWktZmxleC1pY29uXSA+IGRpdiA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5bbXVpLWZsZXgtaW5wdXQtaWNvbl0ge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuIiwiLm11aS10ZXh0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuICAgICZfaDEge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gzIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g0IHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g1IHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g2IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2JvZHkteGwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktcyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHktc19zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuXG4gICAgJl9saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICAgICAmLWhvdmVyZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1ob3ZlcmVkOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgICAgIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbi5yb3V0ZXJfbGluayB7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmLWFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UyYjUxZjtcbiAgICB9XG59XG5cbi5yb3V0ZXJfbGluazpob3Zlcjpub3QoLnJvdXRlcl9saW5rLWFjdGl2ZSkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cblxuLm11aS1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4ubXVpLWxpbms6aG92ZXI6bm90KFtuZy1yZWZsZWN0LXJvdXRlci1saW5rPScnXSkge1xuICAgIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xufVxuIiwiLm11aS1zcGFjZSB7XG4gICAgLyogUklHSFQgU1BBQ0UgKi9cblxuICAgICZfcmlnaHQtMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC00IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC03IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBMRUZUIFNQQUNFICovXG5cbiAgICAmX2xlZnQtMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICZfbGVmdC0xIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC01IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTYge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC04IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBCT1RUT00gU1BBQ0UgKi9cblxuICAgICZfYm90dG9tLTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICZfYm90dG9tLTEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS00IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS01IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS02IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS03IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS04IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS05IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgLyogVE9QIFNQQUNFICovXG5cbiAgICAmX3RvcC0wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAmX3RvcC0xIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgJl90b3AtNCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgJl90b3AtNiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtOCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgJl90b3AtOSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMTAge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbn1cbiIsIi5tdWktYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xuXG5cbiAgICAmX2NvbG9yIHtcbiAgICAgICAgJi1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgJi1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lcnJvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm86aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9zaXplIHtcbiAgICAgICAgJi1sIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtbSB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLXMge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuIiwiLm11aS1jb2wge1xuXG4gICAgJl9tZC0zIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cbiIsInRhYmxlLm11aS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogIzk1OWJhNDtcbn1cblxuLm11aS10YWJsZV9fdHIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuXG4ubXVpLXRhYmxlX19zdWJ0ZXh0IHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICBjb2xvcjogIzc5ODE4Yztcbn1cblxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgaGVpZ2h0OiA3OXB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9hbGlnbl9jZW50ZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfY2VudGVyLFxuLm11aS10YWJsZV9fdGhfdGV4dF9jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtbGlicmFyeS5sZXNzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBJQ09OUyAqL1xuXG5bbXVpLWZsZXgtaWNvbl0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldyB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cblttdWktZmxleC1pY29uXVtzaXplPVwic21hbGxcIl0ge1xuICAgIG1hcmdpbjogNnB4O1xuICAgIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5cblttdWktZmxleC1pY29uXVtzaXplPVwic21hbGxcIl0+ZGl2IHtcbiAgICBtaW4td2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXSB7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgbWluLXdpZHRoOiAzOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cblxuW211aS1mbGV4LWljb25dW3NpemU9XCJub3JtYWxcIl0+ZGl2IHtcbiAgICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuXG5bbXVpLWZsZXgtaWNvbl0+ZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXRcbn1cblxuW211aS1mbGV4LWljb25dPmRpdj5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuW211aS1mbGV4LWljb25dLnByZXZpZXc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuW211aS1mbGV4LWlucHV0LWljb25dIHtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG59XG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleEditorIconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-editor-icons',
          templateUrl: './example-editor-icons.component.html',
          styleUrls: ['./example-editor-icons.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-large-icons/example-large-icons.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-large-icons/example-large-icons.component.ts ***!
    \***********************************************************************************************************************************/

  /*! exports provided: ExampleLargeIconsComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryPagesMuiFlexIconsPageExamplesExampleLargeIconsExampleLargeIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleLargeIconsComponent", function () {
      return ExampleLargeIconsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExampleLargeIconsComponent = /*#__PURE__*/function () {
      function ExampleLargeIconsComponent() {
        _classCallCheck(this, ExampleLargeIconsComponent);
      }

      _createClass(ExampleLargeIconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExampleLargeIconsComponent;
    }();

    ExampleLargeIconsComponent.ɵfac = function ExampleLargeIconsComponent_Factory(t) {
      return new (t || ExampleLargeIconsComponent)();
    };

    ExampleLargeIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleLargeIconsComponent,
      selectors: [["app-example-large-icons"]],
      decls: 363,
      vars: 0,
      consts: [[1, "flex", "flex_horizontal", "wrapper"], ["mui-flex-icon", "", "size", "normal", 1, "preview"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "focusable", "false"], ["d", "M6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z", "fill", "#cbcfd3"], ["d", "M9 20h3v2H9c-.6 0-1-.4-1-1s.4-1 1-1zm3-2h3c.6 0 1 .4 1 1s-.4 1-1 1h-3v-2zm-3-2h3v2H9c-.6 0-1-.4-1-1s.4-1 1-1zm3-2h3c.6 0 1 .4 1 1s-.4 1-1 1h-3v-2zm-3-2h3v2H9c-.6 0-1-.4-1-1s.4-1 1-1zM14 2l6 6h-4c-1.1 0-2-.9-2-2V2z", "fill", "#959ba4"], ["d", "M14 2l6 6h-4c-1.1 0-2-.9-2-2V2z", "fill", "#959ba4"], ["d", "M6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z", "fill", "#8f75d1", "fill-opacity", ".48"], ["d", "M14 2l6 6h-4c-1.1 0-2-.9-2-2V2zM6.9 18.5L10 13l2 4 2-2 2.7 3.4c.3.4.3 1.1-.2 1.4-.2.1-.4.2-.6.2H7.7c-.6 0-1-.4-1-1 0-.2.1-.3.2-.5z", "fill", "#8f75d1"], ["cx", "15", "cy", "13", "r", "1", "fill", "#8f75d1"], ["cx", "9", "cy", "17", "r", "2", "fill", "none", "stroke", "#8f75d1", "stroke-width", "2"], ["d", "M11 17V9l3 3", "fill", "none", "stroke", "#8f75d1", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M14 2l6 6h-4c-1.1 0-2-.9-2-2V2z", "fill", "#8f75d1"], ["d", "M6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z", "fill", "#e01f19", "fill-opacity", ".48"], ["d", "M14 2l6 6h-4c-1.1 0-2-.9-2-2V2z", "fill", "#e01f19"], ["d", "M6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z", "fill", "#ee805d", "fill-opacity", ".48"], ["d", "M14 2l6 6h-4c-1.1 0-2-.9-2-2V2z", "fill", "#ee805d"], ["d", "M6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z", "fill", "#39b54a", "fill-opacity", ".48"], ["d", "M14 2l6 6h-4c-1.1 0-2-.9-2-2V2z", "fill", "#39b54a"], ["d", "M6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z", "fill", "#5485b8", "fill-opacity", ".48"], ["d", "M14 2l6 6h-4c-1.1 0-2-.9-2-2V2z", "fill", "#5485b8"], ["fill", "currentColor", "d", "M18 16h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2zm-8 3a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4a1 1 0 0 1-2 0V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4zM8 7h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm0 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6-6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 8a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V8zm.293 7.707a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414z"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM11 8v4a1 1 0 0 0 2 0V8a1 1 0 0 0-2 0zm.293 7.707a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414z"], ["cx", "12", "cy", "18", "r", "1", "fill", "currentColor"], ["d", "M12 5c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1s-1-.4-1-1V6c0-.6.4-1 1-1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M15.2 2.3c.3-.2.7-.3 1.1-.3h2.2C20.4 2 22 3.6 22 5.5V18c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h6.7l2.5-1.7zM6 6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5.5c0-.8-.7-1.5-1.5-1.5h-2.2l-3 2H6zm2 1h2v2H8V7zm2 2h2v2h-2V9zm-2 2h2v2H8v-2zm2 2h2v2h-2v-2zm-2 2h2v2H8v-2zm2 2h2v2h-2v-2z"], ["fill", "currentColor", "d", "M13 15.6V7.1c0-.6-.4-1.1-1-1.1s-1 .5-1 1.1v8.5l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.3 3.3c.8.8 2 .8 2.8 0l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L13 15.6z"], ["fill", "currentColor", "d", "M15.3 9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.3 3.3c-.8.8-2 .8-2.8 0l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 13l3.3-3.3z"], ["fill", "currentColor", "d", "M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11zm0-2c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"], ["fill", "currentColor", "d", "M15.1 9.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.3 3.3c-.8.8-2 .8-2.8 0l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3 3.3-3.3z"], ["d", "M7.7 10.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.3 4.3c.8.8 2 .8 2.8 0l4.3-4.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 14.6l-4.3-4.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14.3 8.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-3.3 3.3c-.8.8-.8 2 0 2.8l3.3 3.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L11 12l3.3-3.3z"], ["d", "M6.4 11l4.3-4.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4l6 6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L6.4 13H20c.6 0 1-.4 1-1s-.4-1-1-1H6.4z", "fill", "currentColor"], ["d", "M13.3 6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10.4 12l4.3 4.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L9 13.4c-.8-.8-.8-2 0-2.8l4.3-4.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M10.3 8.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.3 3.3c.8.8.8 2 0 2.8l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3.3-3.3-3.3-3.3z"], ["fill", "currentColor", "d", "M17.6 11l-4.3-4.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4l-6 6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l4.3-4.3H4c-.6 0-1-.4-1-1s.4-1 1-1h13.6z"], ["d", "M10.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.3 4.3-4.3 4.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l4.3-4.3c.8-.8.8-2 0-2.8l-4.3-4.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M13 9.4v8.5c0 .6-.4 1.1-1 1.1s-1-.5-1-1.1V9.4l-2.3 2.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L10.6 7c.8-.8 2-.8 2.8 0l3.3 3.3c.4.4.4 1 0 1.4s-1 .4-1.4 0L13 9.4z"], ["fill", "currentColor", "d", "M15.3 14.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L13.4 10c-.8-.8-2-.8-2.8 0l-3.3 3.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l3.3-3.3 3.3 3.3z"], ["fill", "currentColor", "d", "M15.1 14.5c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-3.3-3.3c-.8-.8-2-.8-2.8 0l-3.3 3.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l3.3-3.3 3.3 3.3z"], ["d", "M7.7 15.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l4.3-4.3c.8-.8 2-.8 2.8 0l4.3 4.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 11.4l-4.3 4.3z", "fill", "currentColor"], ["d", "M20.3 10.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8.5 8c-2.6 2.4-6.7 2.4-9.2 0-2.6-2.4-2.6-6.4 0-8.9l8.5-8c1.8-1.7 4.8-1.7 6.6 0 1.8 1.6 1.9 4.4.2 6.2l-.2.2-8.5 8c-1.1 1-2.9 1-4 0s-1.1-2.7-.1-3.8l.1-.1 7.9-7.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L8 15.1c-.3.2-.3.7-.1 1l.1.1c.3.3.9.3 1.3 0l8.5-8c1-1 1-2.5 0-3.5-1.1-1-2.8-1-3.9 0l-8.5 8c-1.8 1.7-1.8 4.3 0 6 1.8 1.7 4.7 1.7 6.5 0l8.4-8z", "fill", "currentColor"], ["d", "M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm0 2C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm1.7-13.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9 10.6c-.8.8-.8 2 0 2.8l3.3 3.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L10.4 12l3.3-3.3z", "fill", "currentColor"], ["d", "M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm1.7-13.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9 10.6c-.8.8-.8 2 0 2.8l3.3 3.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L10.4 12l3.3-3.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M19 4a1 1 0 0 1 2 0v16a1 1 0 0 1-2 0V4zm-4 4a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0V8zm-4 6a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6zm-4-2a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0v-8zm-4 5a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3z"], ["fill", "currentColor", "d", "M10 17v1c0 1.1.9 2 2 2s2-.9 2-2v-1h3.6l-.6-1.8V11c0-2.2-1.4-4-3-4h-1V5c0-.6-.4-1-1-1s-1 .4-1 1v2h-1c-1.3 0-3 1.9-3 4v4.2L6.4 17H10zm-6.4 2L5 14.8V11c0-2.7 1.9-5.2 4-5.8V5c0-1.7 1.3-3 3-3s3 1.3 3 3v.1c2.3.6 4 3 4 5.9v3.8l1.4 4.2h-4.5c-.4 1.8-2 3-3.9 3-1.8 0-3.4-1.2-3.9-3H3.6z"], ["d", "M21 19H3v-1.5l2-1.9v-4.8c0-3 2-5.7 5-6.5v-.4c0-1 .9-1.9 2-1.9s2 .9 2 1.9v.3c3 .9 5 3.5 5 6.5v4.8l2 1.9V19zm-7 1c0 1.1-.9 2-2 2s-2-.9-2-2", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M18 19.1V5c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v14.1l5.4-3.9c.3-.2.8-.2 1.2 0l5.4 3.9zm-6-1.9l-6.4 4.6c-.4.3-1.1.2-1.4-.2-.1-.2-.2-.4-.2-.6V5c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v16c0 .6-.4 1-1 1-.2 0-.4-.1-.6-.2L12 17.2z"], ["d", "M19 10H5v8c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-8zm-3-5V4c0-.6.4-1 1-1s1 .4 1 1v1c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3V4c0-.6.4-1 1-1s1 .4 1 1v1h8zm-9 7h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm0 3h2v2h-2v-2zm-4 0h2v2h-2v-2zm-4 0h2v2H7v-2z", "fill", "currentColor"], ["d", "M13.9 11.9c-.4-1-1.5-1.6-2.5-1.3-.6.2-1.1.7-1.3 1.3-2.4-.1-4.5-.5-6.1-1.1V9.1c0-1 .8-1.9 1.9-1.9h2.4v-.8c0-1.3 1-2.4 2.3-2.4h2.7c1.3 0 2.4 1.1 2.4 2.4v.8h2.4c1.1 0 1.9.8 1.9 1.9v1.7c-1.7.5-3.7.9-6.1 1.1zm0 1.1c2.3-.1 4.3-.5 6.1-1v6.3c0 1-.9 1.7-1.9 1.7H5.9c-1 0-1.9-.6-1.9-1.7V12c1.7.5 3.8.9 6.1 1 .3 1.1 1.4 1.7 2.5 1.4.6-.2 1.1-.7 1.3-1.4zM10 6.4v.8h4v-.8c0-.3-.3-.8-.6-.8h-2.7c-.4 0-.7.4-.7.8z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M17.4 6H19c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V9c0-1.7 1.3-3 3-3h5.6l.4-.4c.4-.4.9-.6 1.4-.6h3.2c.5 0 1 .2 1.4.6l.4.4zM4 9v8c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-2.4l-1-1h-3.2l-1 1H5c-.6 0-1 .4-1 1zm10 8c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"], ["fill", "currentColor", "d", "M19 6.4c3.1 3.9 2.5 9.5-1.4 12.6-3.3 2.6-8 2.6-11.2 0L19 6.4zM17.6 5L5 17.6C1.9 13.7 2.5 8.1 6.4 5c3.3-2.7 7.9-2.7 11.2 0zM12 23c6.1 0 11-4.9 11-11S18.1 1 12 1 1 5.9 1 12s4.9 11 11 11z"], ["d", "M4 14v4h12v-4H4zm0-2h12v-2H4v2zm-2-2c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8zm20 5c0 .6-.4 1-1 1s-1-.4-1-1V6H7c-.6 0-1-.4-1-1s.4-1 1-1h13c1.1 0 2 .9 2 2v9z", "fill", "currentColor"], ["fill", "currentColor", "d", "M7 20c0 .6-.4 1-1 1s-1-.4-1-1v-7c0-.6.4-1 1-1s1 .4 1 1v7zm6 .1c0 .5-.4.9-1 .9s-1-.4-1-.9V8.9c0-.5.4-.9 1-.9s1 .4 1 .9v11.2zm6-.1c0 .5-.4 1-1 1s-1-.4-1-1V4c0-.5.4-1 1-1s1 .4 1 1v16z"], ["fill", "currentColor", "d", "M4 16zm11 0v2.7l3.3-2.7H20V6H4v10h11zM2 6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-1l-4.5 3.7c-.8.7-1.5.4-1.5-.7v-3H4c-1.1 0-2-.9-2-2V6zm5 4h10c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1zm0 4h4c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1z"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.818a8.182 8.182 0 1 0 0-16.364 8.182 8.182 0 0 0 0 16.364zm-1.107-6.615l4.339-5.207a1 1 0 0 1 1.536 1.28l-5 6a1 1 0 0 1-1.432.107l-3-2.666a1 1 0 1 1 1.328-1.495l2.229 1.98z"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.107-8.433l-2.229-1.981a1 1 0 1 0-1.328 1.495l3 2.666a1 1 0 0 0 1.432-.107l5-6a1 1 0 0 0-1.536-1.28l-4.34 5.207z"], ["d", "M16.3 8.3L10 14.6l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L8.6 16c.8.8 2.1.8 2.8 0l6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z", "fill", "currentColor"], ["fill", "currentColor", "d", "M13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 1.414-1.414L12 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414L13.414 12zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"], ["fill", "currentColor", "d", "M13.414 12l2.293-2.293a1 1 0 1 0-1.414-1.414L12 10.586 9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"], ["d", "M13.4 12l4.2 4.2c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 13.4l-4.2 4.2c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l4.2-4.2-4.3-4.2c-.3-.4-.3-1.1 0-1.5s1-.4 1.4 0l4.2 4.2 4.2-4.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L13.4 12z", "fill", "currentColor"], ["d", "M12 10.8l3-3c.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2l-3 3 3 3c.3.3.3.9 0 1.2-.3.3-.9.3-1.2 0l-3-3-3 3c-.3.3-.9.3-1.2 0-.3-.3-.3-.9 0-1.2l3-3-3-3c-.3-.3-.3-.9 0-1.2.3-.3.9-.3 1.2 0l3 3z", "fill", "currentColor"], ["d", "M11 9h9c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-9c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2zm-6 6H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v1", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.4 12l2.3 2.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L15 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l2.3-2.3-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.3 2.3 2.3-2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L16.4 12zM21 3c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H8c-.3 0-.6-.1-.8-.3l-7-8c-.3-.4-.3-.9 0-1.3l7-8c.2-.3.5-.4.8-.4h13zm0 16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H8.5l-6.1 7 6.1 7H21z", "fill", "currentColor"], ["fill", "currentColor", "d", "M15.414 12l2.293-2.293a1 1 0 1 0-1.414-1.414L14 10.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L12.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414L14 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L15.414 12zM20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H9a1 1 0 0 1-.753-.341l-7-8a1 1 0 0 1 0-1.318l7-8A1 1 0 0 1 9 3h11z"], ["fill", "currentColor", "d", "M13 12.998l2.293-2.292a1 1 0 0 1 1.414 1.414l-3.294 3.294a1.996 1.996 0 0 1-2.826 0L7.293 12.12a1 1 0 1 1 1.414-1.414L11 12.998V4a1 1 0 0 1 2 0v8.998zM2 16.003a1 1 0 1 1 2 0v1C4 18.1 4.9 19 5.993 19h12.014c1.1 0 1.993-.894 1.993-1.997v-1a1 1 0 1 1 2 0v1A3.995 3.995 0 0 1 18.007 21H5.993A4.003 4.003 0 0 1 2 17.003v-1z"], ["d", "M12 3l5.7 5.6c2.3 2.2 3 5.6 1.7 8.6-1.2 2.9-4.2 4.8-7.4 4.8s-6.2-1.9-7.4-4.9c-1.2-2.9-.5-6.3 1.7-8.6L12 3z", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round"], ["d", "M18.7 15.3v3c0 1.7-1.3 3-3 3h-10c-1.7 0-3-1.3-3-3v-10c0-1.7 1.3-3 3-3h5l-2 2h-3c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-3l2-2v2zm-11 1v-4.4l8.6-8.6c.8-.8 2-.8 2.8 0l1.6 1.6c.8.8.8 2 0 2.8l-8.6 8.6H7.7zm11.6-10l-1.6-1.6-8 8v1.6h1.6l8-8z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 7.8l-9.9 9.9-.1.3v2h2l.3-.1 9.9-9.9L14 7.8zM7.7 21.3c-.4.4-1.1.7-1.7.7H3c-.6 0-1-.4-1-1v-3c0-.6.3-1.3.7-1.7L13.3 5.7c.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4L7.7 21.3zm7.6-16.6c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4 4c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-4-4z"], ["fill", "currentColor", "d", "M4 6v12c0 .5.4 1 1 1h14c.5 0 1-.4 1-1V6c0-.5-.5-1-1-1H5c-.6 0-1 .4-1 1zM2 6c0-1.7 1.3-3 3-3h14c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V6zm5 3c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm3-9c0 .6.4 1 1 1h6c.5 0 1-.4 1-1s-.4-1-1-1h-6c-.5 0-1 .4-1 1zm0 4c0 .6.4 1 1 1h6c.5 0 1-.4 1-1s-.4-1-1-1h-6c-.5 0-1 .4-1 1zm0 4c0 .6.4 1 1 1h6c.5 0 1-.4 1-1s-.4-1-1-1h-6c-.5 0-1 .4-1 1z"], ["d", "M15.7 5h-1.8c-2.2 0-3.7 1.4-3.7 3.5v1.4H8.3c-.2 0-.3.2-.3.3v2.4c0 .2.1.3.3.3h1.9v5.8c0 .2.1.3.3.3h2.6c.2 0 .3-.1.3-.3v-5.8h2.3c.2 0 .3-.1.3-.3v-2.4c0-.1 0-.2-.1-.2-.1-.1-.1-.1-.2-.1h-2.3V8.8c0-.7.2-1 1.1-1h1.2c.2 0 .3-.1.3-.3V5.3c0-.2-.1-.3-.3-.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M9.8 8.7c-.1.3-.4.5-.7.5l-5 .8 3.5 3.5c.3.2.4.5.4.8l-.8 4.9 4.4-2.3c.3-.2.6-.2.9 0l4.4 2.3-.9-4.9c-.1-.3.1-.7.3-.9l3.5-3.5-4.9-.7c-.3 0-.6-.3-.8-.5L12 4.3 9.8 8.7zM8.2 7.3l2.9-5.8c.2-.5.8-.7 1.3-.5.2.1.4.3.5.5l2.9 5.8 6.4.9c.5.1.9.6.8 1.1 0 .2-.1.4-.3.6l-4.6 4.5 1.1 6.4c.1.5-.3 1.1-.8 1.2-.2 0-.4 0-.6-.1l-5.7-3-5.7 3c-.5.3-1.1.1-1.4-.4-.1-.2-.1-.4-.1-.6L6 14.5 1.3 10c-.4-.4-.4-1 0-1.4.2-.2.4-.3.6-.3l6.3-1z"], ["fill", "currentColor", "d", "M13 3.4V8h4.6L13 3.4zm6 6.6h-7c-.6 0-1-.4-1-1V3H6c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V10zm-6-9c.3 0 .5.1.7.3l7 7c.2.2.3.4.3.7v11c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V4c0-1.7 1.3-3 3-3h7z"], ["fill", "currentColor", "d", "M9 12.8L1.2 3.6c-.3-.4-.3-1 .2-1.4.1-.1.4-.2.6-.2h20c.6 0 1 .4 1 1 0 .2-.1.5-.2.6L15 12.8V21c0 .6-.4 1-1 1-.2 0-.3 0-.4-.1l-4-2c-.4-.2-.6-.5-.6-.9v-6.2zM19.8 4H4.2l6.6 7.8c.2.2.2.4.2.6v5.9l2 1v-6.9c0-.2.1-.5.2-.6L19.8 4z"], ["fill", "currentColor", "d", "M3 15V3c0-.3.1-.5.3-.7.2-.2.6-.5 1.2-.7C5.4 1.2 6.6 1 8 1s2.4.3 4.4 1.1c1.7.7 2.5.9 3.6.9 1.2 0 2.1-.2 2.8-.4.3-.1.5-.2.5-.3.6-.6 1.7-.2 1.7.7v12c0 .3-.1.5-.3.7-.2.2-.6.5-1.2.7-.9.4-2.1.6-3.5.6s-2.4-.3-4.4-1.1C9.9 15.2 9.1 15 8 15c-1.2 0-2.1.2-2.8.4-.1 0-.2.1-.2.1V22c0 .6-.4 1-1 1s-1-.4-1-1v-7zm5-2c1.4 0 2.4.3 4.4 1.1 1.8.7 2.5.9 3.6.9 1.2 0 2.1-.2 2.8-.4.1 0 .2-.1.2-.1V4.6c-.8.3-1.8.4-3 .4-1.4 0-2.4-.3-4.4-1.1C9.9 3.2 9.1 3 8 3c-1.2 0-2.1.2-2.8.4 0 .1-.1.1-.2.1v9.9c.8-.3 1.8-.4 3-.4z"], ["fill", "currentColor", "d", "M15.2 2.3c.3-.2.7-.3 1.1-.3h2.2C20.4 2 22 3.6 22 5.5V18c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h6.7l2.5-1.7zM6 6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5.5c0-.8-.7-1.5-1.5-1.5h-2.2l-3 2H6z"], ["d", "M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zM3 9h18M9 21V9", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M12 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-1 1.9C8.3 12.3 6.6 9.7 7.1 7c.5-2.3 2.5-4 4.9-4 2.8 0 5 2.2 5 5 0 2.4-1.7 4.4-4 4.9V20c0 .6-.4 1-1 1s-1-.4-1-1v-7.1z"], ["fill", "currentColor", "d", "M17.457 13.895a6.619 6.619 0 0 0 1.31-3.963c0-3.697-3.028-6.699-6.767-6.699-3.74 0-6.767 3.002-6.767 6.7 0 1.447.463 2.822 1.31 3.962.06.08.106.162.14.247l4.64 6.015a.854.854 0 0 0 1.352 0l4.625-5.972c.036-.1.088-.197.157-.29zM3 9.932C3 4.997 7.032 1 12 1s9 3.997 9 8.932a8.848 8.848 0 0 1-1.508 4.951 1.14 1.14 0 0 1-.188.362l-4.863 6.28a3.087 3.087 0 0 1-4.886-.004l-4.843-6.278a1.134 1.134 0 0 1-.17-.31 8.848 8.848 0 0 1-1.542-5zm9 4.14a4.073 4.073 0 1 1 0-8.145 4.073 4.073 0 0 1 0 8.146zm0-2.232a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68z"], ["fill", "currentColor", "d", "M3 9.932C3 4.997 7.032 1 12 1s9 3.997 9 8.932a8.848 8.848 0 0 1-1.508 4.951 1.14 1.14 0 0 1-.188.362l-4.863 6.28a3.087 3.087 0 0 1-4.886-.004l-4.843-6.278a1.134 1.134 0 0 1-.17-.31 8.848 8.848 0 0 1-1.542-5zm9 4.14a4.073 4.073 0 1 0 0-8.145 4.073 4.073 0 0 0 0 8.146zm0-2.232a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68z"], ["fill", "currentColor", "d", "M11 17c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zm-1-8c0-.1 0-.2.2-.4.2-.4.8-.6 1.8-.6.5 0 .7 0 1 .1.7.2 1 .6 1 1.9 0 .3-.2.7-.7 1l-.9.6c-.8.5-1.4 1.5-1.4 2.4 0 .6.4 1 1 1s1-.4 1-1c0-.2.2-.5.4-.6.4-.2.8-.5 1.2-.8.8-.7 1.4-1.6 1.4-2.6 0-2.2-1-3.5-2.5-3.9C13 6 12.6 6 12 6c-1.6 0-2.8.5-3.4 1.4C8.1 8 8 8.6 8 9c0 .6.4 1 1 1s1-.4 1-1z"], ["fill", "currentColor", "d", "M19.543 12.577a15.98 15.98 0 0 1-1.647 2.264C16.15 16.832 14.17 18 12.017 18a6.905 6.905 0 0 1-4.245-1.579 1 1 0 0 0-1.264 1.55A8.915 8.915 0 0 0 12 20c2.84 0 5.31-1.457 7.4-3.84a17.956 17.956 0 0 0 1.855-2.55c.317-.524.534-.937.65-1.186a1 1 0 0 0-.011-.872 16.91 16.91 0 0 0-4.401-5.524 1 1 0 1 0-1.266 1.55 14.859 14.859 0 0 1 3.647 4.426c-.09.163-.2.356-.33.573zM4.457 11.423A15.98 15.98 0 0 1 6.104 9.16C7.85 7.168 9.83 6 12.003 6a6 6 0 0 1 1.472.18 1 1 0 0 0 .486-1.94A7.995 7.995 0 0 0 12 4C9.16 4 6.69 5.457 4.6 7.84a17.956 17.956 0 0 0-1.855 2.55 13.64 13.64 0 0 0-.65 1.186 1 1 0 0 0 .01.871 17.294 17.294 0 0 0 1.876 2.963 1 1 0 1 0 1.572-1.237 15.245 15.245 0 0 1-1.427-2.176c.089-.163.2-.356.33-.574zm5.318 3.216a3.338 3.338 0 0 0 3.157.79c1.229-.336 2.175-1.348 2.48-2.627a3.766 3.766 0 0 0-.653-3.147l6.948-6.948a1 1 0 1 0-1.414-1.414l-18 18a1 1 0 0 0 1.414 1.414l6.068-6.068zm3.54-3.54c.194.367.254.812.152 1.239-.139.58-.551 1.022-1.062 1.161a1.332 1.332 0 0 1-1.213-.277l2.123-2.123z"], ["fill", "currentColor", "d", "M20 11.6V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1 .7 1.8 1.6 2l9.3-9.3c1.2-1.2 3.1-1.2 4.2 0l.9.9zm0 2.8l-2.3-2.3c-.4-.4-1-.4-1.4 0L8.4 20H18c1.1 0 2-.9 2-2v-3.6zM6 2h12c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V6c0-2.2 1.8-4 4-4zm3 4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"], ["fill", "currentColor", "d", "M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11zm0-2c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9zm1-5c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4zm-1.7-6.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z"], ["d", "M9 5h6c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4zm3 10c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm3.4-5.6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-.1c-.5 0-.9.4-.9.9.2.6.6.9 1 .9z", "fill", "currentColor"], ["d", "M10 13c1.7 2.2 4.8 2.7 7 1 .2-.1.4-.3.5-.5l2-2c1.9-2 1.8-5.2-.2-7.1-1.9-1.9-5-1.9-6.9 0l-.7.7M14 11c-1.7-2.2-4.8-2.7-7-1-.2.1-.4.3-.5.5l-2 2c-1.9 2-1.8 5.2.2 7.1 1.9 1.9 5 1.9 6.9 0l.7-.7", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M5.8 10h12.4c.9 0 1.8.6 1.8 1.4v9.2c0 .8-.8 1.4-1.8 1.4H5.8c-1 0-1.8-.6-1.8-1.4v-9.2c0-.8.8-1.4 1.8-1.4zm.2 1.8v8.3h12v-8.3H6zm6 6.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-3-8H7V7.1C7 4.3 9.2 2 12 2s5 2.3 5 5.1V10h-2V7.1C15 5.4 13.6 4 12 4S9 5.4 9 7.1V10z", "fill", "currentColor"], ["d", "M5.8 10h12.4c.9 0 1.8.6 1.8 1.4v9.2c0 .8-.8 1.4-1.8 1.4H5.8c-1 0-1.8-.6-1.8-1.4v-9.2c0-.8.8-1.4 1.8-1.4zm.2 1.8v8.3h12v-8.3H6zm6 6.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4.9-12.5c.2.7-.2 1.1-.6 1.2-.3.2-1.1 0-1.3-.7-.4-1.2-1.5-2-2.8-2-1.6 0-3 1.4-3 3.1V10h-2V7.1c0-2.8 2.2-5.1 5-5.1 2.2 0 4.1 1.5 4.7 3.5z", "fill", "currentColor"], ["d", "M7 10V7.1C7 4.3 9.2 2 12 2s5 2.3 5 5.1V10h1.2c.9 0 1.8.6 1.8 1.4v9.2c0 .8-.8 1.4-1.8 1.4H5.8c-1 0-1.8-.6-1.8-1.4v-9.2c0-.8.8-1.4 1.8-1.4H7zm2 0h6V7.1C15 5.4 13.6 4 12 4S9 5.4 9 7.1V10zm3 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z", "fill", "currentColor"], ["d", "M7.2 10V7.1c0-2.8 2.2-5.1 5-5.1 2.2 0 4.1 1.5 4.8 3.5.2.7-.2 1.1-.6 1.2-.4.2-1.2 0-1.4-.7-.4-1.2-1.5-2-2.8-2-1.6 0-3 1.4-3 3.1V10h9c.9 0 1.8.6 1.8 1.4v9.2c0 .8-.8 1.4-1.8 1.4H5.8c-1 0-1.8-.6-1.8-1.4v-9.2c0-.8.8-1.4 1.8-1.4h1.4zm4.8 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 11l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3c.8.8.8 2 0 2.8l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L14 13H4c-.6 0-1-.4-1-1s.4-1 1-1h10zM9 22c-.6 0-1-.4-1-1s.4-1 1-1h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H9c-.6 0-1-.4-1-1s.4-1 1-1h9c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H9z"], ["d", "M3.1 13.3c-.7 0-1.2.6-1.1 1.3 0 0-.1-.4 0 0 1.2 4.2 5.1 7.3 9.8 7.3C17.5 22 22 17.5 22 12S17.5 2 11.8 2C7.2 2 3.2 5.1 2.1 9.3c-.1.7.3 1.3 1.1 1.3h8.5c.2 0 .2-.1.1-.2l-1.5-1.5C9 7.6 10.9 5.8 12.2 7l4.1 4.1c.5.5.5 1.2 0 1.7l-4.1 4.1c-1.3 1.3-3.2-.6-1.9-1.9l1.5-1.5c.1-.1.1-.2-.1-.2H3.1z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M4 17zm0-9v9h16V8l-8 6.2C12 14.3 4 8 4 8zm1.9-1l6.1 4.7L18.1 7H5.9zM4 19c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4z"], ["fill", "currentColor", "d", "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"], ["fill", "currentColor", "d", "M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11zm0-2c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9zm-4-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1H8z"], ["d", "M7 11h10c.6 0 1 .4 1 1s-.4 1-1 1H7c-.6 0-1-.4-1-1s.4-1 1-1z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M12 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0 6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0 6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z", "fill", "currentColor"], ["fill", "currentColor", "d", "M7 15V7.1c0-1.3.9-2.5 2.1-2.9L16.4 2c1.1-.3 2.2.3 2.5 1.3.1.3.1.5.1.7v11.2c0 1.9-1.6 3.5-3.5 3.5S12 17.1 12 15.2s1.6-3.5 3.5-3.5c.5 0 1 .1 1.5.3V4L9.7 6.2c-.4.1-.7.5-.7.9v11c0 1.9-1.6 3.5-3.5 3.5S2 20.1 2 18.2s1.6-3.5 3.5-3.5c.5 0 1 .1 1.5.3zm8.5 1.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm-10 3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.6-1.5 1.5c0 .8.7 1.5 1.5 1.5z"], ["d", "M11.2 15.3c-1.3-.1-2.5-.4-3.5-1.2-.1-.1-.3-.2-.4-.3-.4-.4-.5-.9-.1-1.3.3-.4.8-.5 1.3-.3.1 0 .2.1.3.2 1.9 1.2 4.4 1.2 6.3.1l.6-.3c.4-.1.9 0 1.1.4.3.4.3.8-.1 1.2-.5.5-1.1.9-1.8 1.1-.7.2-1.4.4-2.1.4l.2.2c1 .9 1.9 1.8 2.9 2.7.3.3.4.7.2 1.1-.1.5-.6.7-1 .7-.3 0-.5-.1-.7-.3-.7-.7-1.5-1.4-2.2-2.1-.2-.2-.3-.2-.5 0-.7.7-1.5 1.4-2.2 2.1-.3.3-.7.4-1.1.2-.4-.2-.7-.6-.7-1 0-.3.2-.5.3-.7.9-.9 1.9-1.8 2.8-2.7.2 0 .3-.1.4-.2zm.6-3.1c-2.2 0-4.1-1.9-4-4.1 0-2.3 1.8-4.1 4-4.1 2.3 0 4.1 1.9 4.1 4.1 0 2.3-1.9 4.1-4.1 4.1zm2-4.1c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z", "fill", "currentColor"], ["fill", "currentColor", "d", "M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11zm0-2c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9zm-1-6c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v6zm4 0c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v6z"], ["fill", "currentColor", "d", "M20 16.5c0-.4-.3-.8-.7-.8-.9-.1-1.9-.4-2.8-.7-.3-.1-.6 0-.8.2l-1.1 1.1c-.3.3-.8.4-1.2.2-2.4-1.4-4.4-3.4-5.8-5.8-.2-.4-.2-.9.2-1.2l1.1-1.1c.2-.3.2-.7.1-1-.3-.8-.5-1.8-.7-2.7 0-.4-.4-.7-.8-.7H4.8c-.4 0-.8.4-.8.8v.1c.3 2.6 1.2 5.2 2.6 7.4 1.3 2.1 3.1 3.8 5.1 5.1 2.2 1.4 4.7 2.3 7.3 2.6.4 0 .8-.3.9-.7V16.5zm2 2.7c0 1.5-1.2 2.8-2.8 2.8h-.3c-2.9-.3-5.7-1.3-8.2-2.9-2.3-1.5-4.3-3.4-5.7-5.7C3.3 10.9 2.3 8 2 5.1 1.9 3.5 3 2.2 4.6 2h3c1.4 0 2.6 1 2.8 2.4.1.8.3 1.6.6 2.3.4 1 .1 2.2-.6 3l-.6.6c1 1.6 2.4 3 4 4l.6-.6c.8-.8 1.9-1 3-.6.7.3 1.5.5 2.3.6 1.4.2 2.4 1.4 2.4 2.8-.1 0-.1 2.7-.1 2.7z"], ["fill", "currentColor", "d", "M9.78 2.248a1 1 0 0 1 .442 1.95 8.013 8.013 0 0 0-6.02 6.008 1 1 0 1 1-1.95-.447A10.013 10.013 0 0 1 9.78 2.248zm-7.514 12.05a1 1 0 1 1 1.946-.458 8.013 8.013 0 0 0 5.935 5.945 1 1 0 1 1-.461 1.946 10.014 10.014 0 0 1-7.42-7.433zm12.238 7.386a1 1 0 0 1-.5-1.937A8.003 8.003 0 0 0 19.25 8.614a1 1 0 0 1 1.812-.848 10.003 10.003 0 0 1-6.558 13.918zm4.078-17.212a1 1 0 1 1-1.317 1.505 7.975 7.975 0 0 0-3.368-1.751 1 1 0 1 1 .472-1.943 9.975 9.975 0 0 1 4.213 2.189z"], ["fill", "currentColor", "d", "M13 11h2.2c.442 0 .8.448.8 1s-.358 1-.8 1H13v2.2c0 .442-.448.8-1 .8s-1-.358-1-.8V13H8.8c-.442 0-.8-.448-.8-1s.358-1 .8-1H11V8.8c0-.442.448-.8 1-.8s1 .358 1 .8V11zm-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"], ["fill", "currentColor", "d", "M13 11V8.8c0-.442-.448-.8-1-.8s-1 .358-1 .8V11H8.8c-.442 0-.8.448-.8 1s.358 1 .8 1H11v2.2c0 .442.448.8 1 .8s1-.358 1-.8V13h2.2c.442 0 .8-.448.8-1s-.358-1-.8-1H13zm-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"], ["fill", "currentColor", "fill-rule", "evenodd", "d", "M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z"], ["fill", "currentColor", "d", "M19 19v3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-3H4c-1.7 0-3-1.3-3-3v-5c0-1.7 1.3-3 3-3h1V2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v6h1c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3h-1zm0-2h1c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h1v-3c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v3zM7 8h10V3H7v5zm0 13h10v-6H7v6z"], ["d", "M12 20v1.6c0 .6-.4 1-1 1-.3 0-.5-.1-.7-.3l-2.6-2.6c-.4-.4-.4-1 0-1.4l2.6-2.6c.4-.4 1-.4 1.4 0 .2.2.3.4.3.7V18c3.3 0 6-2.7 6-6 0-.5-.1-1-.2-1.6l1.6-1.6c1.7 4.1-.2 8.8-4.2 10.5-1.1.5-2.1.7-3.2.7zm0-16V2.4c0-.6.4-1 1-1 .3 0 .5.1.7.3l2.6 2.6c.4.4.4 1 0 1.4l-2.6 2.6c-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7V6c-3.3 0-6 2.7-6 6 0 .5.1 1 .2 1.6l-1.6 1.6c-1.7-4.1.2-8.8 4.3-10.6 1-.4 2-.6 3.1-.6z", "fill", "currentColor"], ["d", "M15.9 14.5l2.8 2.8c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-2.8-2.8c-2.7 1.9-6.4 1.3-8.4-1.4S4.8 8 7.5 6.1s6.4-1.3 8.4 1.4c1.5 2.1 1.5 4.9 0 7zM11 15c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z", "fill", "currentColor"], ["fill", "currentColor", "d", "M20.3 8.7c.1.2.3.3.5.3h.2c1.7 0 3 1.3 3 3s-1.3 3-3 3h-.1c-.3 0-.5.2-.6.4-.1.2-.1.5.1.7l.1.1c1.2 1.2 1.2 3.1 0 4.2s-3.1 1.2-4.2 0l-.1-.1c-.2-.2-.5-.2-.7-.1-.2.1-.4.3-.4.6v.2c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-.3-.2-.6-.5-.7-.2-.1-.5-.1-.7.1l-.1.1c-1.2 1.2-3.1 1.2-4.2 0s-1.2-3.1 0-4.2l.1-.1c.2-.2.2-.5.1-.7-.1-.2-.3-.4-.6-.4H3c-1.7 0-3-1.3-3-3s1.3-3 3-3c.3 0 .6-.2.7-.5.1-.2.1-.5-.1-.7l-.1-.1c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.2 0l.1.1c.2.1.5.2.7.1.1 0 .1 0 .2-.1.2-.1.3-.3.3-.5V3c0-1.7 1.3-3 3-3s3 1.3 3 3v.1c0 .3.2.5.4.6.2.1.5.1.7-.1l.1-.1c1.2-1.2 3.1-1.2 4.2 0s1.2 3.1 0 4.2l-.1.1c-.2.2-.2.5-.1.7.1.1.1.1.1.2zm-11.2-3c-1 .3-2 .1-2.7-.6L6.3 5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.1.1c.8.8 1 1.9.6 2.9s-1.4 1.7-2.4 1.7H3c-.6 0-1 .4-1 1s.4 1 1 1h.2c1.1 0 2 .6 2.4 1.6.4 1 .2 2.2-.5 2.9l-.1.1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l.1-.1c.8-.8 1.9-1 2.9-.6s1.7 1.4 1.7 2.4v.2c0 .6.4 1 1 1s1-.4 1-1v-.2c0-1.1.6-2 1.6-2.4 1-.4 2.2-.2 2.9.5l.1.1c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.1-.1c-.8-.8-1-1.9-.5-2.9.4-1 1.4-1.6 2.4-1.6h.1c.6 0 1-.4 1-1s-.4-1-1-1h-.2c-1.1 0-2-.6-2.4-1.6 0-.1-.1-.2-.1-.3-.3-1-.1-2 .6-2.7l.1-.1c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-.1.1c-.8.8-1.9 1-2.9.5-1-.4-1.6-1.4-1.6-2.4V3c0-.6-.4-1-1-1s-1 .4-1 1v.2c0 1.1-.6 2-1.6 2.4-.1 0-.2.1-.3.1zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"], ["fill", "currentColor", "d", "M14.1 17H5c-.6 0-1-.4-1-1s.4-1 1-1h9.1c.6-2.1 2.7-3.4 4.9-2.9 1.8.5 3 2 3 3.9 0 2.2-1.8 4-4 4-1.8 0-3.4-1.2-3.9-3zM9.9 7H19c.6 0 1 .4 1 1s-.4 1-1 1H9.9c-.6 2.1-2.7 3.4-4.9 2.9-1.8-.5-3-2-3-3.9 0-2.2 1.8-4 4-4 1.8 0 3.4 1.2 3.9 3zM6 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"], ["fill", "currentColor", "d", "M4.457 12.577a15.98 15.98 0 0 0 1.647 2.264C7.85 16.832 9.83 18 12 18s4.15-1.168 5.896-3.16a15.98 15.98 0 0 0 1.98-2.84 15.98 15.98 0 0 0-1.98-2.84C16.15 7.167 14.17 6 12 6S7.85 7.168 6.104 9.16A15.98 15.98 0 0 0 4.124 12c.09.164.2.358.333.577zm-2.363-1c.117-.25.334-.663.65-1.188A17.956 17.956 0 0 1 4.6 7.841C6.69 5.457 9.16 4 12 4c2.84 0 5.31 1.457 7.4 3.84a17.985 17.985 0 0 1 1.855 2.55c.317.524.534.937.65 1.186a1 1 0 0 1 0 .848c-.116.249-.333.662-.65 1.187a17.956 17.956 0 0 1-1.855 2.548C17.31 18.543 14.84 20 12 20c-2.84 0-5.31-1.457-7.4-3.84a17.956 17.956 0 0 1-1.855-2.55 13.64 13.64 0 0 1-.65-1.186 1 1 0 0 1 0-.848zm9.951 3.923a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"], ["d", "M5 7v2h4V7H5zM4 5h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm1 10v2h4v-2H5zm-1-2h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zm11 2v2h4v-2h-4zm-1-2h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zm1-6v2h4V7h-4zm-1-2h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M15.6 16l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3c.8.8.8 2 0 2.8l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l2.3-2.3H12c-3.3 0-6-2.7-6-6V3c0-.6.4-1 1-1s1 .4 1 1v9c0 2.2 1.8 4 4 4h3.6z"], ["d", "M12 18.6L5.8 22 7 14.8 2 9.6l6.9-1.1L12 2l3.1 6.6 6.9 1-5 5.1 1.2 7.2-6.2-3.3z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M11 20.9V18c0-.6.4-1 1-1s1 .4 1 1v2.9c4.2-.5 7.5-3.8 7.9-7.9H18c-.6 0-1-.4-1-1s.4-1 1-1h2.9c-.5-4.2-3.8-7.5-7.9-7.9V6c0 .6-.4 1-1 1s-1-.4-1-1V3.1c-4.2.4-7.5 3.7-7.9 7.9H6c.6 0 1 .4 1 1s-.4 1-1 1H3.1c.4 4.2 3.7 7.5 7.9 7.9zm1 2.1C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11z"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.678-5.882a1 1 0 1 1-1.06 1.696l-3.148-1.966A1 1 0 0 1 11 13V8a1 1 0 0 1 2 0v4.446l2.678 1.672z"], ["fill", "currentColor", "d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.678-7.882L13 12.446V8a1 1 0 0 0-2 0v5a1 1 0 0 0 .47.848l3.148 1.966a1 1 0 1 0 1.06-1.696z"], ["d", "M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-1.7c2.4 0 4.3-1.9 4.3-4.3S14.4 7.7 12 7.7 7.7 9.6 7.7 12s1.9 4.3 4.3 4.3z", "fill", "currentColor"], ["d", "M12 19c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-6c0-.1 0 0 .3-.2l.2-.1c1-.5 1.5-1.3 1.5-2.6C15 8.4 13.7 7 12 7c-1.6 0-3 1-3 2.5 0 .6.4 1 1 1s1-.4 1-1c0-.2.4-.5 1-.5.5 0 1 .5 1 1.1 0 .5-.1.6-.5.8l-.2.1c-.9.5-1.3 1-1.3 2 0 .6.4 1 1 1s1-.4 1-1zm-1 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M10 6h4V4h-4v2zM8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h3c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h3zm-3 5.1c-.1-.5.3-1 .9-1.1.5-.1 1 .3 1.1.9l.8 8c.1.6.6 1.1 1.2 1.1h6c.6 0 1.1-.5 1.2-1.1l.8-8c.1-.5.5-1 1.1-.9.5.1 1 .5.9 1.1l-.8 8C18 20.7 16.6 22 15 22H9c-1.6 0-3-1.3-3.2-2.9l-.8-8z"], ["d", "M10 6h4V4h-4v2zM8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h3c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h3zm-3 4.1c-.1-.6.3-1.1.9-1.1h12.2c.6 0 .9.5.9 1.1l-.8 9C18 20.7 16.6 22 15 22H9c-1.6 0-3-1.3-3.2-2.9l-.8-9z", "fill", "currentColor"], ["d", "M20 7.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1.1 1.4-1.8-.6.4-1.4.7-2.1.8-1.2-1.3-3.3-1.4-4.6-.2-.9.8-1.2 2-1 3.1-2.6 0-5-1.2-6.7-3.3-.3.5-.4 1.1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.7 2.3 3.1 2.3-1.2.9-2.6 1.4-4.1 1.4H4c1.5 1 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z", "fill", "currentColor"], ["d", "M13 5.9V15c0 .6-.4 1-1 1s-1-.4-1-1V5.9L8.7 8.2c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3.3-3.3c.8-.8 2-.8 2.8 0l3.3 3.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L13 5.9zM2 16c0-.6.4-1 1-1s1 .4 1 1v1c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-1c0-.6.4-1 1-1s1 .4 1 1v1c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4v-1z", "fill", "currentColor"], ["d", "M12 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm8.4 5.4C18.6 20.2 15.5 22 12 22s-6.6-1.8-8.4-4.6c1-2 3-3.4 5.4-3.4h6c2.4 0 4.4 1.4 5.4 3.4z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M17.8 13.4c.5.6 1.1 1.1 1.6 1.7l.6.9c.2.5 0 1-.4 1h-2.3c-.6.1-1.1-.2-1.5-.7-.3-.4-.6-.8-.9-1.1-.1-.2-.3-.3-.4-.4-.3-.2-.6-.2-.8.2-.2.4-.2.8-.2 1.2 0 .6-.2.8-.7.8-1.2.1-2.3-.1-3.3-.8-.9-.6-1.6-1.4-2.2-2.3-1.2-1.8-2.1-3.8-3-5.8-.4-.5-.3-.7.2-.8h2.3c.3 0 .5.2.6.5.4 1.2.9 2.3 1.5 3.2.2.3.3.5.6.7.3.2.5.1.6-.2.1-.2.1-.4.1-.7.1-.8.1-1.6 0-2.3-.1-.5-.3-.8-.7-.9-.2 0-.2-.1-.1-.3.2-.1.4-.3.7-.3h2.6c.4.1.5.3.6.8V11c0 .2.1.7.4.8.2.1.4-.1.5-.3.6-.7 1.1-1.6 1.5-2.5.2-.4.3-.8.5-1.2.1-.3.3-.5.6-.4h2.7c.4.1.5.3.4.7-.2.7-.6 1.3-1 1.9-.4.6-.9 1.3-1.3 1.9-.3.6-.3.9.2 1.5z", "fill", "currentColor"], ["d", "M4 5h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1zm0 4h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1zm0 4h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1zm0 4h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1z", "fill", "currentColor"], ["d", "M19.4 7c-.6-.7-1.6-1-3.7-1H8.3c-2.1 0-3.2.3-3.7 1.1C4 7.9 4 9 4 10.5v3c0 3 .7 4.5 4.3 4.5h7.4c1.8 0 2.7-.3 3.4-.9.6-.7.9-1.7.9-3.6v-3c0-1.6 0-2.7-.6-3.5zm-5.1 5.4l-3.4 1.9c-.2.1-.4.1-.5 0-.2-.1-.3-.3-.2-.5v-3.7c0-.2.1-.4.2-.5.2-.1.3-.1.5 0l3.4 1.9c.2.1.3.3.3.5 0 .1-.2.3-.3.4z", "fill", "currentColor"], ["fill", "currentColor", "d", "M10 8.7v6.5c0 .2.2.4.4.4.1 0 .2 0 .2-.1l4.9-3.3c.2-.1.2-.4.1-.6l-.1-.1-4.9-3.3c-.2-.1-.4-.1-.6.1v.4z"]],
      template: function ExampleLargeIconsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "circle", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "circle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "path", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "path", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "path", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "path", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "path", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "path", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "path", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "path", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "path", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "path", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "path", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "path", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "path", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "path", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "path", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "path", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "path", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "path", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "path", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "path", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "path", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "path", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "path", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "path", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "path", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "path", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "path", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "path", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "path", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "path", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "path", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "path", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "path", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "path", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "path", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "path", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "path", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "path", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "path", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "path", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "path", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "path", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "path", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "path", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "path", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "path", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "path", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "path", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "path", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n\n[mui-flex-icon][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 24px !important;\n  min-height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 38px !important;\n  min-height: 38px !important;\n  max-width: 38px !important;\n  max-height: 38px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: inherit;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%]:hover {\n  transform: scale(1.4);\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-input-icon][_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbGFyZ2UtaWNvbnMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWRpcmVjdGlvbi5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1sYXJnZS1pY29ucy9leGFtcGxlLWxhcmdlLWljb25zLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1sYXJnZS1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtdGV4dC5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1sYXJnZS1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtc3BhY2VzLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLWxhcmdlLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1idXR0b25zLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLWxhcmdlLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1jb2x1bXMubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbGFyZ2UtaWNvbnMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRhYmxlLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLWxhcmdlLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbGFyZ2UtaWNvbnMvZXhhbXBsZS1sYXJnZS1pY29ucy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBRENRO0VBQ0ksbUJBQUE7QUNDWjtBREVRO0VBQ0ksOEJBQUE7QUNBWjtBREdRO0VBQ0ksNkJBQUE7QUNEWjtBRElRO0VBQ0kseUJBQUE7QUNGWjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FETVE7RUFDSSx1QkFBQTtBQ0paO0FET1E7RUFDSSxxQkFBQTtBQ0xaO0FEYUk7RUFDSSxzQkFBQTtBQ1hS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RXBOSTtFQUNJLGtCQUFBO0FGc05SO0FFbk5JO0VBQ0ksa0JBQUE7QUZxTlI7QUVsTkk7RUFDSSxrQkFBQTtBRm9OUjtBRWpOSTtFQUNJLGtCQUFBO0FGbU5SO0FFaE5JO0VBQ0ksa0JBQUE7QUZrTlI7QUUvTUk7RUFDSSxrQkFBQTtBRmlOUjtBRTlNSTtFQUNJLGtCQUFBO0FGZ05SO0FFM01JO0VBQ0ksY0FBQTtBRjZNUjtBRTFNSTtFQUNJLGdCQUFBO0FGNE1SO0FFek1JO0VBQ0ksZ0JBQUE7QUYyTVI7QUV4TUk7RUFDSSxpQkFBQTtBRjBNUjtBRXZNSTtFQUNJLGlCQUFBO0FGeU1SO0FFdE1JO0VBQ0ksaUJBQUE7QUZ3TVI7QUVyTUk7RUFDSSxpQkFBQTtBRnVNUjtBRXBNSTtFQUNJLGlCQUFBO0FGc01SO0FFbk1JO0VBQ0ksaUJBQUE7QUZxTVI7QUVsTUk7RUFDSSxpQkFBQTtBRm9NUjtBRWpNSTtFQUNJLGlCQUFBO0FGbU1SO0FFOUxJO0VBQ0ksZ0JBQUE7QUZnTVI7QUU3TEk7RUFDSSxrQkFBQTtBRitMUjtBRTVMSTtFQUNJLGtCQUFBO0FGOExSO0FFM0xJO0VBQ0ksbUJBQUE7QUY2TFI7QUUxTEk7RUFDSSxtQkFBQTtBRjRMUjtBRXpMSTtFQUNJLG1CQUFBO0FGMkxSO0FFeExJO0VBQ0ksbUJBQUE7QUYwTFI7QUV2TEk7RUFDSSxtQkFBQTtBRnlMUjtBRXRMSTtFQUNJLG1CQUFBO0FGd0xSO0FFckxJO0VBQ0ksbUJBQUE7QUZ1TFI7QUVwTEk7RUFDSSxtQkFBQTtBRnNMUjtBRWpMSTtFQUNJLGFBQUE7QUZtTFI7QUVoTEk7RUFDSSxlQUFBO0FGa0xSO0FFL0tJO0VBQ0ksZUFBQTtBRmlMUjtBRTlLSTtFQUNJLGdCQUFBO0FGZ0xSO0FFN0tJO0VBQ0ksZ0JBQUE7QUYrS1I7QUU1S0k7RUFDSSxnQkFBQTtBRjhLUjtBRTNLSTtFQUNJLGdCQUFBO0FGNktSO0FFMUtJO0VBQ0ksZ0JBQUE7QUY0S1I7QUV6S0k7RUFDSSxnQkFBQTtBRjJLUjtBRXhLSTtFQUNJLGdCQUFBO0FGMEtSO0FFdktJO0VB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QTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FOaWpCSjtBTTlpQkE7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QU5nakJKO0FNN2lCQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBTitpQko7QU01aUJBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QU44aUJKO0FNM2lCQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBTjZpQko7QU0xaUJBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QU40aUJKO0FNemlCQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7QU4yaUJKO0FNeGlCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FOMGlCSjtBTXZpQkE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBTnlpQko7QU10aUJBO0VBQ0ksZ0JBQUE7QU53aUJKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbGFyZ2UtaWNvbnMvZXhhbXBsZS1sYXJnZS1pY29ucy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJl9ob3Jpem9udGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfd3JhcCB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFzZWxpbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiAgICAmX3ZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWxlZnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgJl93cmFwIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbn1cblxuXG4uZnVsbC1zaXplIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mbGV4X2hvcml6b250YWwge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZsZXhfaG9yaXpvbnRhbC1taWRkbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5mbGV4X2hvcml6b250YWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2hvcml6b250YWxfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mbGV4X2hvcml6b250YWwtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF9ob3Jpem9udGFsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfdmVydGljYWwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXhfdmVydGljYWwtbWlkZGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF92ZXJ0aWNhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfdmVydGljYWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmZsZXhfdmVydGljYWwtbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZsZXhfdmVydGljYWwtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZmxleF93cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZ1bGwtc2l6ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm11aS10ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2gxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g1IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9ib2R5LXhsIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktcyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvZHkteHMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tdWktdGV4dF9saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5tdWktdGV4dF9saW5rLWhvdmVyZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5yb3V0ZXJfbGluayB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3V0ZXJfbGluay1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG59XG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuLm11aS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tdWktc3BhY2Uge1xuICAvKiBSSUdIVCBTUEFDRSAqL1xuICAvKiBMRUZUIFNQQUNFICovXG4gIC8qIEJPVFRPTSBTUEFDRSAqL1xuICAvKiBUT1AgU1BBQ0UgKi9cbn1cbi5tdWktc3BhY2VfcmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTMge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTYge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTcge1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTgge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTkge1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTAge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5tdWktc3BhY2VfbGVmdC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC02IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNyB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi5tdWktc3BhY2VfbGVmdC05IHtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm11aS1zcGFjZV9ib3R0b20tMSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS02IHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTcge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS05IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5tdWktc3BhY2VfdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm11aS1zcGFjZV90b3AtMSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0zIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tdWktc3BhY2VfdG9wLTQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLm11aS1zcGFjZV90b3AtNSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC02IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTcge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLm11aS1zcGFjZV90b3AtOCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4ubXVpLXNwYWNlX3RvcC05IHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5tdWktYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9zaXplLWwge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtbSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25fc2l6ZS1zIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWNvbF9tZC0zIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxudGFibGUubXVpLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjOTU5YmE0O1xufVxuLm11aS10YWJsZV9fdHIge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgb3V0bGluZTogMDtcbn1cbi5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzMzMztcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgY29sb3I6ICM3OTgxOGM7XG59XG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGhlaWdodDogNzlweDtcbn1cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogSUNPTlMgKi9cblttdWktZmxleC1pY29uXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblttdWktZmxleC1pY29uXS5wcmV2aWV3IHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cInNtYWxsXCJdIHtcbiAgbWFyZ2luOiA2cHg7XG4gIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cInNtYWxsXCJdID4gZGl2IHtcbiAgbWluLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblttdWktZmxleC1pY29uXVtzaXplPVwibm9ybWFsXCJdIHtcbiAgbWFyZ2luOiA2cHg7XG4gIG1pbi13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXSA+IGRpdiB7XG4gIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl0gPiBkaXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuW211aS1mbGV4LWljb25dID4gZGl2ID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblttdWktZmxleC1pY29uXS5wcmV2aWV3OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblttdWktZmxleC1pbnB1dC1pY29uXSB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4iLCIubXVpLXRleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gICAgJl9oMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gyIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDMge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDQge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfYm9keS14bCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbF9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW0ge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1zIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS1zX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHkteHMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG5cbiAgICAmX2xpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgICAgICYtaG92ZXJlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWhvdmVyZWQ6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICAgICAgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuLnJvdXRlcl9saW5rIHtcbiAgICBvcGFjaXR5OiAuNztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICYtYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xuICAgIH1cbn1cblxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuXG4ubXVpLWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gICAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG59XG4iLCIubXVpLXNwYWNlIHtcbiAgICAvKiBSSUdIVCBTUEFDRSAqL1xuXG4gICAgJl9yaWdodC0wIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICZfcmlnaHQtMSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC01IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC04IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEwIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIExFRlQgU1BBQ0UgKi9cblxuICAgICZfbGVmdC0wIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0yIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC00IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC03IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTgge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC0xMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIEJPVFRPTSBTUEFDRSAqL1xuXG4gICAgJl9ib3R0b20tMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0yIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTgge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTEwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAvKiBUT1AgU1BBQ0UgKi9cblxuICAgICZfdG9wLTAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgICZfdG9wLTEge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG5cbiAgICAmX3RvcC0zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAmX3RvcC00IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAmX3RvcC01IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAmX3RvcC02IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAmX3RvcC03IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB9XG5cbiAgICAmX3RvcC04IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAmX3RvcC05IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICB9XG5cbiAgICAmX3RvcC0xMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxufVxuIiwiLm11aS1idXR0b24ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG5cblxuICAgICZfY29sb3Ige1xuICAgICAgICAmLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeVtkaXNhYmxlZF0ge1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3M6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3Mge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG5cblxuICAgICAgICAmLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWVycm9yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8taG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8pO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX3NpemUge1xuICAgICAgICAmLWwge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1tIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcyB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwibFwiXSB7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwic1wiXSB7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4iLCIubXVpLWNvbCB7XG5cbiAgICAmX21kLTMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuIiwidGFibGUubXVpLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfYm9yZGVyX25vbmUpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjOTU5YmE0O1xufVxuXG4ubXVpLXRhYmxlX190ciB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG59XG5cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiA0cHggMCAwO1xuICAgIGNvbG9yOiAjNzk4MThjO1xufVxuXG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX3NpemVfbCxcbi5tdWktdGFibGVfc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBoZWlnaHQ6IDc5cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm11aS10YWJsZV9fdGRfZmlyc3QsXG4ubXVpLXRhYmxlX190aF9maXJzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X3JpZ2h0LFxuLm11aS10YWJsZV9fdGhfdGV4dF9yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1saWJyYXJ5Lmxlc3MnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIElDT05TICovXG5cblttdWktZmxleC1pY29uXSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cblttdWktZmxleC1pY29uXS5wcmV2aWV3IHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuW211aS1mbGV4LWljb25dW3NpemU9XCJzbWFsbFwiXSB7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgbWluLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbn1cblxuW211aS1mbGV4LWljb25dW3NpemU9XCJzbWFsbFwiXT5kaXYge1xuICAgIG1pbi13aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cblttdWktZmxleC1pY29uXVtzaXplPVwibm9ybWFsXCJdIHtcbiAgICBtYXJnaW46IDZweDtcbiAgICBtaW4td2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuXG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXT5kaXYge1xuICAgIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5cblttdWktZmxleC1pY29uXT5kaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdFxufVxuXG5bbXVpLWZsZXgtaWNvbl0+ZGl2PmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG5bbXVpLWZsZXgtaW5wdXQtaWNvbl0ge1xuICAgIHRyYW5zaXRpb246IC4zcztcbn1cbiJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleLargeIconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-large-icons',
          templateUrl: './example-large-icons.component.html',
          styleUrls: ['./example-large-icons.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-marker-icons/example-marker-icons.component.ts":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-marker-icons/example-marker-icons.component.ts ***!
    \*************************************************************************************************************************************/

  /*! exports provided: ExampleMarkerIconsComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryPagesMuiFlexIconsPageExamplesExampleMarkerIconsExampleMarkerIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleMarkerIconsComponent", function () {
      return ExampleMarkerIconsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExampleMarkerIconsComponent = /*#__PURE__*/function () {
      function ExampleMarkerIconsComponent() {
        _classCallCheck(this, ExampleMarkerIconsComponent);
      }

      _createClass(ExampleMarkerIconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExampleMarkerIconsComponent;
    }();

    ExampleMarkerIconsComponent.ɵfac = function ExampleMarkerIconsComponent_Factory(t) {
      return new (t || ExampleMarkerIconsComponent)();
    };

    ExampleMarkerIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleMarkerIconsComponent,
      selectors: [["app-example-marker-icons"]],
      decls: 19,
      vars: 0,
      consts: [[1, "flex", "flex_horizontal", "wrapper"], ["mui-flex-icon", "", "size", "normal", 1, "preview"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "viewBox", "0 0 32 32", "focusable", "false"], ["fill", "currentColor", "d", "M21.6 16l9.7 11.4c1.1 1.1.8 2.8-.3 3.9-1.1.8-2.5.8-3.6 0L16 21.6 4.6 31.3c-1.1 1.1-2.8.8-3.9-.3-.8-1.1-.8-2.5 0-3.6L10.4 16 .7 4.6C-.4 3.5-.1 1.8 1 .7c1.1-.8 2.5-.8 3.6 0L16 10.4 27.4.7c1.1-1.1 2.8-.8 3.9.3.8 1.1.8 2.5 0 3.6L21.6 16z"], ["fill", "currentColor", "d", "M24.4 22.5c.9.7 1.5 1.6 1.5 2.9v3.1c0 .7-.4 1.5-1.1 1.8-2.4 1.1-5.8 1.6-8.2 1.6h-.7c-2.5 0-6-.7-8.5-1.8-.7-.4-1.1-1.1-1.1-1.8v-2.9c0-1.3.5-2.2 1.5-2.9l5.5-2.5c.5-.2.7-.4.7-.9v-.5c0-.2 0-.2.2-.4h.4c1.1.5 2 .5 3.3 0h.4c.2 0 .2.2.2.4v.5c0 .5.4.7.7.9l5.2 2.5zm-5.3-7.6c-.9 1.3-2 2-3.1 2-1.3 0-2.4-.7-3.1-2h-.2c-3.1 0-4.7-.7-4.7-.7-.2 0-.2-.2-.4-.2v-.4c.5-2.2 1.6-2.5 1.3-6.7 0-2 .7-3.6 2-4.9C12.4.7 14 0 16 0c1.1 0 2 0 2.9 1.5 0 0 .9-.5 2 .5.4.4.7.9 1.1 1.3.7 1.1 1.1 2.4 1.1 3.6-.4 4.2.4 4.5 1.3 6.5 0 .2 0 .4-.2.4-.4.6-3.1 1.1-5.1 1.1z"], ["fill", "currentColor", "d", "M14.8 0h2.4c1.6 0 2.7 1.1 2.7 2.7V3l-1.1 18.7c0 1.3-1.3 2.4-2.7 2.4h-.3c-1.3 0-2.7-1.1-2.7-2.4l-1-18.8c0-1.6 1.1-2.9 2.7-2.9zm1.1 26.7c1.6 0 2.7 1.1 2.7 2.7s-1.1 2.7-2.7 2.7-2.7-1.1-2.7-2.7c0-1.7 1.3-2.7 2.7-2.7z"], ["fill", "currentColor", "d", "M25.6 20c1.3.7 1.7 1.7 1.7 3v4.2c0 .6-.2 1.1-.7 1.5-2.6 2-6.5 3.1-10.2 3.3h-.6c-3.9 0-7.6-1.3-10.3-3.3-.6-.2-.7-.7-.7-1.3V23c0-1.3.4-2.4 1.7-3h.2l6.1-2.4c.6-.2.9-.2 1.5 0 1.1.6 2.4.6 3.7 0 .4-.2.9-.2 1.3 0l6.3 2.4zM22.1 8.2c.4.7-.2 1.8-1.3 3.3l-.2 1.1c0 1.1-.7 1.8-1.8 2.6 0 0-1.1.6-1.8.7h-1.3c-.2 0-.4 0-.6-.2-.7-.2-1.7-.7-1.7-.7-1.1-.6-1.7-1.5-1.8-2.6l-.2-1.1C10.3 9.7 9.7 8.6 10.1 8c0-.2.2-.4.4-.4.2-.2.4-.6.4-.7l-.6-2.4c-.2-.6-.2-1.1.2-1.5.2-.2.4-.4.7-.6h.4c.5-1 1.1-1.4 1.4-1.6.9-.7 2.2-.9 4.4-.7C20.5.5 22 1.4 22 2.7c0 .4 0 .6-.2.9l-.6 3.3c0 .4.2.6.4.7.1.2.3.4.5.6z"], ["fill", "currentColor", "d", "M25.1 20.5c1.3.5 1.6 1.6 1.6 2.9v4c0 .5-.2 1.1-.7 1.5-2.6 2-6 3.1-9.7 3.1h-.5c-3.7 0-7.1-1.3-9.9-3.1-.4-.4-.7-.9-.7-1.5v-4.2c0-1.3.4-2.2 1.6-2.9H7l5.9-2.4c.4-.2.9-.2 1.3 0 1.1.5 2.2.5 3.5 0 .4-.2.9-.2 1.3 0l5.9 2.4c.1.2.2.2.2.2zM16 15.9c-3.5 0-6.4-5.1-6.4-9.5S12.5 0 16 0s6.4 2 6.4 6.4-2.9 9.5-6.4 9.5z"], ["fill", "currentColor", "d", "M10.7 18.6L28.2 4.4c.9-.7 2.6-.7 3.3.2.7.9.7 2.4-.2 3.1L12.2 27.5c-.9.9-2.4.9-3.3 0l-.2-.2-3.8-4.2-4.2-5c-.9-.9-.7-2.6.2-3.3.7-.7 1.9-.7 2.6-.2l7.2 4z"]],
      template: function ExampleMarkerIconsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n\n[mui-flex-icon][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 24px !important;\n  min-height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 38px !important;\n  min-height: 38px !important;\n  max-width: 38px !important;\n  max-height: 38px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: inherit;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%]:hover {\n  transform: scale(1.4);\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-input-icon][_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbWFya2VyLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1kaXJlY3Rpb24ubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbWFya2VyLWljb25zL2V4YW1wbGUtbWFya2VyLWljb25zLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1tYXJrZXItaWNvbnMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRleHQubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbWFya2VyLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1zcGFjZXMubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbWFya2VyLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1idXR0b25zLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLW1hcmtlci1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtY29sdW1zLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLW1hcmtlci1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtdGFibGUubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbWFya2VyLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbWFya2VyLWljb25zL2V4YW1wbGUtbWFya2VyLWljb25zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxtQkFBQTtBQ0NaO0FERVE7RUFDSSw4QkFBQTtBQ0FaO0FER1E7RUFDSSw2QkFBQTtBQ0RaO0FESVE7RUFDSSx5QkFBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0FDSFo7QURNUTtFQUNJLHVCQUFBO0FDSlo7QURPUTtFQUNJLHFCQUFBO0FDTFo7QURhSTtFQUNJLHNCQUFBO0FDWFI7QURhUTtFQUNJLHVCQUFBO0FDWFo7QURjUTtFQUNJLDhCQUFBO0FDWlo7QURlUTtFQUNJLDZCQUFBO0FDYlo7QURnQlE7RUFDSSxtQkFBQTtBQ2RaO0FEaUJTO0VBQ0kseUJBQUE7QUNmYjtBRGtCUTtFQUNJLHFCQUFBO0FDaEJaO0FEbUJRO0VBQ0ksdUJBQUE7QUNqQlo7QURvQlE7RUFDSSxxQkFBQTtBQ2xCWjtBRHVCSTtFQUNJLGVBQUE7QUNyQlI7QUQwQkE7RUFDSSxXQUFBO0FDeEJKO0FDM0RBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBRDZESjtBQzNESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FENkRSO0FDMURJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUQ0RFI7QUN6REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUQyRFI7QUN4REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUQwRFI7QUN2REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUR5RFI7QUN0REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUR3RFI7QUNyREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUR1RFI7QUNwREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURzRFI7QUNuREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURxRFI7QUNsREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURvRFI7QUNqREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURtRFI7QUNoREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURrRFI7QUMvQ0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURpRFI7QUM5Q0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURnRFI7QUM3Q0k7RUFDSSxpQkFBQTtBRCtDUjtBQzNDSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBRDZDUjtBQzNDUTtFQUNJLFlBQUE7RUFDQSxxQ0FBQTtBRDZDWjtBQzFDUTtFQUNJLFVBQUE7RUFDQSxxQ0FBQTtBRDRDWjtBQ3BDQTtFQUNJLFlBQUE7RUFDQSw0Q0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QURxQ0o7QUNuQ0k7RUFDSSxVQUFBO0VBQ0EsNENBQUE7RUFFQSxnQ0FBQTtBRG9DUjtBQ2hDQTtFQUNJLFVBQUE7RUFDQSw0Q0FBQTtFQUVBLGdDQUFBO0FEaUNKO0FDOUJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURnQ0o7QUM3QkE7RUFDSSx5QkFBQTtFQUNBLGtDQUFBO0FEK0JKO0FFck5BO0VGdU5FLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUV4Tkk7RUFDSSxlQUFBO0FGME5SO0FFdk5JO0VBQ0ksaUJBQUE7QUZ5TlI7QUV0Tkk7RUFDSSxpQkFBQTtBRndOUjtBRXJOSTtFQUNJLGtCQUFBO0FGdU5SO0FFcE5JO0VBQ0ksa0JBQUE7QUZzTlI7QUVuTkk7RUFDSSxrQkFBQTtBRnFOUjtBRWxOSTtFQUNJLGtCQUFBO0FGb05SO0FFak5JO0VBQ0ksa0JBQUE7QUZtTlI7QUVoTkk7RUFDSSxrQkFBQTtBRmtOUjtBRS9NSTtFQUNJLGtCQUFBO0FGaU5SO0FFOU1JO0VBQ0ksa0JBQUE7QUZnTlI7QUUzTUk7RUFDSSxjQUFBO0FGNk1SO0FFMU1JO0VBQ0ksZ0JBQUE7QUY0TVI7QUV6TUk7RUFDSSxnQkFBQTtBRjJNUjtBRXhNSTtFQUNJLGlCQUFBO0FGME1SO0FFdk1JO0VBQ0ksaUJBQUE7QUZ5TVI7QUV0TUk7RUFDSSxpQkFBQTtBRndNUjtBRXJNSTtFQUNJLGlCQUFBO0FGdU1SO0FFcE1JO0VBQ0ksaUJBQUE7QUZzTVI7QUVuTUk7RUFDSSxpQkFBQTtBRnFNUjtBRWxNSTtFQUNJLGlCQUFBO0FGb01SO0FFak1JO0VBQ0ksaUJBQUE7QUZtTVI7QUU5TEk7RUFDSSxnQkFBQTtBRmdNUjtBRTdMSTtFQUNJLGtCQUFBO0FGK0xSO0FFNUxJO0VBQ0ksa0JBQUE7QUY4TFI7QUUzTEk7RUFDSSxtQkFBQTtBRjZMUjtBRTFMSTtFQUNJLG1CQUFBO0FGNExSO0FFekxJO0VBQ0ksbUJBQUE7QUYyTFI7QUV4TEk7RUFDSSxtQkFBQTtBRjBMUjtBRXZMSTtFQUNJLG1CQUFBO0FGeUxSO0FFdExJO0VBQ0ksbUJBQUE7QUZ3TFI7QUVyTEk7RUFDSSxtQkFBQTtBRnVMUjtBRXBMSTtFQUNJLG1CQUFBO0FGc0xSO0FFakxJO0VBQ0ksYUFBQTtBRm1MUjtBRWhMSTtFQUNJLGVBQUE7QUZrTFI7QUUvS0k7RUFDSSxlQUFBO0FGaUxSO0FFOUtJO0VBQ0ksZ0JBQUE7QUZnTFI7QUU3S0k7RUFDSSxnQkFBQTtBRitLUjtBRTVLSTtFQUNJLGdCQUFBO0FGOEtSO0FFM0tJO0VBQ0ksZ0JBQUE7QUY2S1I7QUUxS0k7RUFDSSxnQkFBQTtBRjRLUjtBRXpLSTtFQUNJLGdCQUFBO0FGMktSO0FFeEtJO0VBQ0ksZ0JBQUE7QUYw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QUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QU5pakJKO0FNOWlCQTtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBTmdqQko7QU03aUJBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FOK2lCSjtBTTVpQkE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBTjhpQko7QU0zaUJBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FONmlCSjtBTTFpQkE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBTjRpQko7QU16aUJBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtBTjJpQko7QU14aUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QU4waUJKO0FNdmlCQTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FOeWlCSjtBTXRpQkE7RUFDSSxnQkFBQTtBTndpQkoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1tYXJrZXItaWNvbnMvZXhhbXBsZS1tYXJrZXItaWNvbnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICZfaG9yaXpvbnRhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmX3dyYXAge1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jZW50ZXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxuXG4gICAgJl92ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgfVxuXG4gICAgICAgICYtcmlnaHQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICZfd3JhcCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG59XG5cblxuLmZ1bGwtc2l6ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleF9ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4X2hvcml6b250YWwtbWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X2hvcml6b250YWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF9ob3Jpem9udGFsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF9ob3Jpem9udGFsX3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleF9ob3Jpem9udGFsLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3ZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLW1pZGRsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfdmVydGljYWwtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mdWxsLXNpemUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tdWktdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9oMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2gzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDQge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfYm9keS14bCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWwge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1sX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW0ge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1tX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LXMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9keS1zX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXhzIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubXVpLXRleHRfbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm11aS10ZXh0X2xpbmstaG92ZXJlZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucm91dGVyX2xpbmsge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDAgOHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucm91dGVyX2xpbmstYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xufVxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cbi5tdWktbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXNwYWNlIHtcbiAgLyogUklHSFQgU1BBQ0UgKi9cbiAgLyogTEVGVCBTUEFDRSAqL1xuICAvKiBCT1RUT00gU1BBQ0UgKi9cbiAgLyogVE9QIFNQQUNFICovXG59XG4ubXVpLXNwYWNlX3JpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC02IHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC03IHtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC04IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC05IHtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0xMCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubXVpLXNwYWNlX2xlZnQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5tdWktc3BhY2VfbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNiB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTcge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtOSB7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMyB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS00IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS03IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTgge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOSB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC0wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5tdWktc3BhY2VfdG9wLTEge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0yIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm11aS1zcGFjZV90b3AtMyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubXVpLXNwYWNlX3RvcC00IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm11aS1zcGFjZV90b3AtNiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC03IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5tdWktc3BhY2VfdG9wLTgge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLm11aS1zcGFjZV90b3AtOSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm11aS1idXR0b25fY29sb3Itc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fc2l6ZS1sIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubXVpLWJ1dHRvbl9zaXplLW0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtcyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1jb2xfbWQtMyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnRhYmxlLm11aS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzk1OWJhNDtcbn1cbi5tdWktdGFibGVfX3RyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IDA7XG59XG4ubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogNTVweDtcbiAgY29sb3I6ICMzMzM7XG59XG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGNvbG9yOiAjNzk4MThjO1xufVxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBoZWlnaHQ6IDc5cHg7XG59XG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi8qIElDT05TICovXG5bbXVpLWZsZXgtaWNvbl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldyB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuW211aS1mbGV4LWljb25dW3NpemU9XCJzbWFsbFwiXSB7XG4gIG1hcmdpbjogNnB4O1xuICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuW211aS1mbGV4LWljb25dW3NpemU9XCJzbWFsbFwiXSA+IGRpdiB7XG4gIG1pbi13aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXSB7XG4gIG1hcmdpbjogNnB4O1xuICBtaW4td2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuW211aS1mbGV4LWljb25dW3NpemU9XCJub3JtYWxcIl0gPiBkaXYge1xuICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuW211aS1mbGV4LWljb25dID4gZGl2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cblttdWktZmxleC1pY29uXSA+IGRpdiA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5bbXVpLWZsZXgtaW5wdXQtaWNvbl0ge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuIiwiLm11aS10ZXh0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuICAgICZfaDEge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gzIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g0IHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g1IHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g2IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2JvZHkteGwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktcyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHktc19zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuXG4gICAgJl9saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICAgICAmLWhvdmVyZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1ob3ZlcmVkOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgICAgIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbi5yb3V0ZXJfbGluayB7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmLWFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UyYjUxZjtcbiAgICB9XG59XG5cbi5yb3V0ZXJfbGluazpob3Zlcjpub3QoLnJvdXRlcl9saW5rLWFjdGl2ZSkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cblxuLm11aS1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4ubXVpLWxpbms6aG92ZXI6bm90KFtuZy1yZWZsZWN0LXJvdXRlci1saW5rPScnXSkge1xuICAgIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xufVxuIiwiLm11aS1zcGFjZSB7XG4gICAgLyogUklHSFQgU1BBQ0UgKi9cblxuICAgICZfcmlnaHQtMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC00IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC03IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBMRUZUIFNQQUNFICovXG5cbiAgICAmX2xlZnQtMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICZfbGVmdC0xIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC01IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTYge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC04IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBCT1RUT00gU1BBQ0UgKi9cblxuICAgICZfYm90dG9tLTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICZfYm90dG9tLTEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS00IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS01IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS02IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS03IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS04IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS05IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgLyogVE9QIFNQQUNFICovXG5cbiAgICAmX3RvcC0wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAmX3RvcC0xIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgJl90b3AtNCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgJl90b3AtNiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtOCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgJl90b3AtOSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMTAge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbn1cbiIsIi5tdWktYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xuXG5cbiAgICAmX2NvbG9yIHtcbiAgICAgICAgJi1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgJi1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lcnJvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm86aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9zaXplIHtcbiAgICAgICAgJi1sIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtbSB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLXMge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuIiwiLm11aS1jb2wge1xuXG4gICAgJl9tZC0zIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cbiIsInRhYmxlLm11aS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogIzk1OWJhNDtcbn1cblxuLm11aS10YWJsZV9fdHIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuXG4ubXVpLXRhYmxlX19zdWJ0ZXh0IHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICBjb2xvcjogIzc5ODE4Yztcbn1cblxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgaGVpZ2h0OiA3OXB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9hbGlnbl9jZW50ZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfY2VudGVyLFxuLm11aS10YWJsZV9fdGhfdGV4dF9jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtbGlicmFyeS5sZXNzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBJQ09OUyAqL1xuXG5bbXVpLWZsZXgtaWNvbl0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldyB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cblttdWktZmxleC1pY29uXVtzaXplPVwic21hbGxcIl0ge1xuICAgIG1hcmdpbjogNnB4O1xuICAgIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5cblttdWktZmxleC1pY29uXVtzaXplPVwic21hbGxcIl0+ZGl2IHtcbiAgICBtaW4td2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXSB7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgbWluLXdpZHRoOiAzOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cblxuW211aS1mbGV4LWljb25dW3NpemU9XCJub3JtYWxcIl0+ZGl2IHtcbiAgICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuXG5bbXVpLWZsZXgtaWNvbl0+ZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXRcbn1cblxuW211aS1mbGV4LWljb25dPmRpdj5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuW211aS1mbGV4LWljb25dLnByZXZpZXc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuW211aS1mbGV4LWlucHV0LWljb25dIHtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG59XG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleMarkerIconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-marker-icons',
          templateUrl: './example-marker-icons.component.html',
          styleUrls: ['./example-marker-icons.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-normal-icons/example-normal-icons.component.ts":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-normal-icons/example-normal-icons.component.ts ***!
    \*************************************************************************************************************************************/

  /*! exports provided: ExampleNormalIconsComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryPagesMuiFlexIconsPageExamplesExampleNormalIconsExampleNormalIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleNormalIconsComponent", function () {
      return ExampleNormalIconsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExampleNormalIconsComponent = /*#__PURE__*/function () {
      function ExampleNormalIconsComponent() {
        _classCallCheck(this, ExampleNormalIconsComponent);
      }

      _createClass(ExampleNormalIconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExampleNormalIconsComponent;
    }();

    ExampleNormalIconsComponent.ɵfac = function ExampleNormalIconsComponent_Factory(t) {
      return new (t || ExampleNormalIconsComponent)();
    };

    ExampleNormalIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleNormalIconsComponent,
      selectors: [["app-example-nornal-icons"]],
      decls: 296,
      vars: 0,
      consts: [[1, "flex", "flex_horizontal", "wrapper"], ["mui-flex-icon", "", "size", "small", 1, "preview"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 16 16", "focusable", "false"], ["fill", "currentColor", "d", "M8 5c-.3 0-.5.1-.7.3l-4 4.1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.3 0L8 7.3l3.4 3.4c.4.4 1 .4 1.3 0 .4-.4.4-1 0-1.4l-4-4.1C8.5 5.1 8.3 5 8 5"], ["d", "M9.6 13.6l5.2-5.3c.3-.3.3-1 0-1.3-.4-.3-.9-.3-1.3 0l-5 5.2a3.32 3.32 0 0 1-4.7 0c-1.3-1.3-1.3-3.4 0-4.8l3.8-3.9c.7-.7 1.9-.8 2.6 0 .7.8.7 2 0 2.8l-3.8 3.9c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l3.9-4c.3-.3.3-1 0-1.3-.4-.3-.9-.3-1.3 0l-3.9 4c-.4.3-.6 1-.6 1.6 0 .6.2 1.2.7 1.7.9 1 2.4 1 3.3 0l3.8-3.9c1.5-1.5 1.5-3.9 0-5.4C10.1.7 7.8.7 6.3 2.2L2.5 6.1C1.5 7.1 1 8.5 1 9.8c0 1.3.5 2.7 1.5 3.7 1.9 2 5.1 2 7.1.1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM9 8V5c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .6.4 1 1 1s1-.4 1-1zm0 3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1"], ["fill", "currentColor", "d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7 3a1 1 0 1 0-2 0 1 1 0 1 0 2 0zm0-3V5a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z"], ["d", "M14 13H2v-1l1.3-1V7.1c0-2.1 1.4-4 3.3-4.6v-.1C6.7 1.6 7.3 1 8 1s1.3.6 1.3 1.4v.2c2 .6 3.3 2.5 3.3 4.6V11l1.3 1v1zm-4.5.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M8 12.3l-4.4 3.5c-.4.3-1.1.3-1.4-.2-.1-.2-.2-.4-.2-.6V2c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v13c0 .6-.4 1-1 1-.2 0-.4-.1-.6-.2L8 12.3z"], ["fill", "currentColor", "d", "M8 12.3l-4.4 3.5c-.4.3-1.1.3-1.4-.2-.1-.2-.2-.4-.2-.6V2c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v13c0 .6-.4 1-1 1-.2 0-.4-.1-.6-.2L8 12.3zM12 2H4v11l3.4-2.7c.4-.3.9-.3 1.2 0L12 13V2z"], ["fill", "currentColor", "d", "M6 8c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1m8 6V2H2v12h12zm0 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zM9 8c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1m-6 3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1M5 6h6c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z"], ["d", "M12 3h1c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1V2c0-.6.4-1 1-1s1 .4 1 1v1h4V2c0-.6.4-1 1-1s1 .4 1 1v1zM3 13h10V6H3v7zm2-6h2v2H5V7zm4 0h2v2H9V7zm0 3h2v2H9v-2zm-4 0h2v2H5v-2z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"], ["fill", "currentColor", "d", "M3.3 4.7l8 8c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-8-8c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4z"], ["d", "M8 6.3l-1-1c-.5-.5-1.2-.5-1.7 0s-.4 1.3.1 1.7l1 1-1 1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l1-1 1 1c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-1-1 1-1c.5-.5.5-1.2 0-1.7s-1.4-.4-1.8.1l-1 .9zM16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z", "fill", "currentColor"], ["fill", "currentColor", "d", "M8 6.8l-3-3c-.3-.3-.9-.3-1.2 0-.4.3-.4.8 0 1.2l3 3-3 3c-.3.3-.3.9 0 1.2.3.3.9.3 1.2 0l3-3 3 3c.3.3.9.3 1.2 0 .3-.3.3-.9 0-1.2l-3-3 3-3c.3-.3.3-.9 0-1.2-.3-.3-.9-.3-1.2 0l-3 3z"], ["d", "M14 12V4H2v8h12zm0 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2zM2 7h12V5H2v2zm2 4h3c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1zm7 0h1c.6 0 1-.4 1-1s-.4-1-1-1h-1c-.6 0-1 .4-1 1s.4 1 1 1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M15 14H2V1c0-.6-.4-1-1-1S0 .4 0 1v13c0 1.1.9 2 2 2h13c.6 0 1-.4 1-1s-.4-1-1-1zM5 12V7c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1zm1-9v9c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1s-1 .4-1 1zm5 9v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm3 0V6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1s1-.4 1-1z"], ["fill", "currentColor", "d", "M11.1 13.1c-.9.6-2 .9-3.1.9-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.1-.3 2.3-.9 3.2-.3.5-.2 1.1.3 1.4.5.3 1.1.2 1.4-.3 2.4-3.7 1.3-8.7-2.4-11C11 .4 9.5 0 8 0 3.6 0 0 3.6 0 8s3.6 8 8 8c1.5 0 2.9-.4 4.1-1.1.5-.3.6-.9.3-1.4-.2-.5-.8-.6-1.3-.4zm1.2-.1c-.5-.2-1.1.1-1.3.6-.2.5.1 1.1.6 1.3l3 1c.5.2 1.1-.1 1.3-.6.1-.2.1-.4 0-.6l-1-3c-.2-.5-.7-.8-1.3-.6s-.8.7-.6 1.3l.4 1.1c0-.1-1.1-.5-1.1-.5zM6 8h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1zm0 3h2c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1z"], ["d", "M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM5.7 7.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2 2c.4.4.9.4 1.3.1l4-4c.4-.3.5-1 .2-1.4-.3-.4-1-.5-1.4-.2L7.1 8.7 5.7 7.3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M13 3v11H3V3h2c.6 0 1-.4 1-1s-.4-1-1-1H2c-.6 0-1 .4-1 1v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-.6-.4-1-1-1h-3c-.6 0-1 .4-1 1s.4 1 1 1h2z"], ["fill", "currentColor", "d", "M6 2H5c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1v2c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V1c0-.6.4-1 1-1s1 .4 1 1v1zm0 1h4V2H6v1zm.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1 1c.4.4 1 .4 1.4 0l3-3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L7 9.6l-.3-.3z"], ["d", "M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm-2 0c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm-8.3-.7l1.4 1.4 3.3-3.5c.4-.3 1.1-.2 1.4.2.3.4.2 1.1-.2 1.4l-4 4c-.4.3-1 .3-1.3-.1l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0z", "fill", "currentColor"], ["d", "M6.9 9.6l-2.2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 2.7c.4.4 1 .3 1.4-.1l5-6c.3-.4.3-1.1-.2-1.4-.4-.3-1-.3-1.4.1L6.9 9.6z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M10 2.5c3 0 5.5 2.5 5.5 5.5S13 13.5 10 13.5H4.5c-2.2 0-4-1.8-4-4s1.8-4 4-4h.6c.9-1.8 2.8-3 4.9-3zM5.3 7.7c-1-.4-2.2 0-2.6 1.1s0 2.2 1.1 2.6c.2.1.5.2.8.2H10c1.9 0 3.5-1.6 3.5-3.5S11.9 4.6 10 4.6c-1.6 0-2.9 1-3.4 2.5l-.3 1-1-.4z", "fill", "currentColor"], ["fill", "currentColor", "d", "M5.4 7L9 10.6c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7L7 5.3c-.5-.5-1.2-.5-1.7 0-.4.5-.4 1.3.1 1.7z"], ["fill", "currentColor", "d", "M9 5.4L5.4 9c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0L10.6 7c.5-.5.5-1.2 0-1.7s-1.2-.4-1.6.1z"], ["fill", "currentColor", "d", "M13 13h1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v9c0 1.1.9 2 2 2h5.7l3.7 2.8c.4.3 1.1.2 1.4-.2.1-.2.2-.4.2-.6v-2zm-2 0l-2.4-1.8c-.2-.1-.4-.2-.6-.2H2V2h12v9h-2c-.6 0-1 .4-1 1v1zM5 6h6c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm-.3 3h2.7c.3 0 .6-.4.6-1s-.3-1-.7-1H4.7c-.4 0-.7.4-.7 1s.3 1 .7 1z"], ["fill", "currentColor", "d", "M5 5V2H2v3h3zm0 2H2C.9 7 0 6.1 0 5V2C0 .9.9 0 2 0h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2zm9-2V2h-3v3h3zm0 2h-3c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2zm-9 7v-3H2v3h3zm0 2H2c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2zm9-2v-3h-3v3h3zm0 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2z"], ["d", "M13 6H6v7h7V6zm0 9H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2zM3 3v8c0 .6-.4 1-1 1s-1-.4-1-1V3c0-1.1.9-2 2-2h7c.6 0 1 .4 1 1s-.4 1-1 1H3z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 9v5H2V2h4c.6 0 1-.4 1-1s-.4-1-1-1H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-.6-.4-1-1-1s-1 .4-1 1zM8 7.4V8h.6l5-5-.6-.6-5 5zM13.7.3l2 2c.4.4.4 1 0 1.4l-6 6c-.2.2-.4.3-.7.3H7c-.6 0-1-.4-1-1V7c0-.3.1-.5.3-.7l6-6c.4-.4 1-.4 1.4 0z"], ["fill", "currentColor", "d", "M5 3V2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1h3.1c.5 0 .9.4.9 1s-.4 1-.9 1H1.9C1.4 5 1 4.6 1 4s.4-1 .9-1H5zm4 0V2H7v1h2zM2 7.1c-.1-.5.4-1 .9-1.1s1 .3 1.1.9l.8 6c.1.6.6 1.1 1.2 1.1h4c.6 0 1.1-.5 1.2-1.1l.8-6c.1-.5.5-1 1.1-.9.5.1 1 .5.9 1.1l-.8 6C13 14.7 11.6 16 10 16H6c-1.6 0-3-1.3-3.2-2.9l-.8-6z"], ["fill", "currentColor", "d", "M5 9h6c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 3h6c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm8 2V2H3v12h10zm0 2H3c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zM5 6h4c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM5.7 7.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2 2c.4.4.9.4 1.3.1l4-3c.4-.3.5-1 .2-1.4-.3-.4-1-.5-1.4-.2L7.1 8.7 5.7 7.3z"], ["d", "M7 7.6V2c0-.6.4-1 1-1s1 .4 1 1v5.6l1.3-1.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L9.4 10c-.8.8-2 .8-2.8 0L4.3 7.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L7 7.6zM1 11c0-.6.4-1 1-1s1 .4 1 1v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1c0-.6.4-1 1-1s1 .4 1 1v1c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3v-1z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M13 8c0-.6.4-1 1-1s1 .4 1 1v5c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4c.6 0 1 .4 1 1s-.4 1-1 1H3v10h10V8zm-.3-6.7l2 2c.4.4.4 1 0 1.4l-6 6c-.2.2-.4.3-.7.3H6c-.6 0-1-.4-1-1V8c0-.3.1-.5.3-.7l6-6c.4-.4 1-.4 1.4 0zM7 8.4V9h.6l5-5-.6-.6-5 5z", "fill", "currentColor"], ["fill", "currentColor", "d", "M5 8.3L.2 1.6C-.1 1.1 0 .5.4.2.6.1.8 0 1 0h14c.6 0 1 .4 1 1 0 .2-.1.4-.2.6L11 8.3V15c0 .6-.4 1-1 1-.2 0-.3 0-.4-.1l-4-2c-.4-.2-.6-.5-.6-.9V8.3z"], ["fill", "currentColor", "d", "M5 8.3L.2 1.6C-.1 1.1 0 .5.4.2.6.1.8 0 1 0h14c.6 0 1 .4 1 1 0 .2-.1.4-.2.6L11 8.3V15c0 .6-.4 1-1 1-.2 0-.3 0-.4-.1l-4-2c-.4-.2-.6-.5-.6-.9V8.3zM3 2l3.8 5.2c.1.2.2.4.2.6V12l2 1V7.8c0-.2.1-.4.2-.6L13 2H3z"], ["fill", "currentColor", "d", "M2.6 10.1L4 9.4V15c0 .6-.4 1-1 1s-1-.4-1-1V1c0-.6.4-1 1-1 .2 0 .3 0 .4.1l10 5c.5.2.7.8.4 1.3-.1.2-.3.4-.4.4l-10 5c-.5.2-1.1 0-1.3-.4-.1-.1-.1-.2-.1-.4 0-.4.2-.7.6-.9z"], ["fill", "currentColor", "d", "M10.8 6L4 2.6v6.8L10.8 6zm-8.2 4.1L4 9.4V15c0 .6-.4 1-1 1s-1-.4-1-1V1c0-.6.4-1 1-1 .2 0 .3 0 .4.1l10 5c.5.2.7.8.4 1.3-.1.2-.3.4-.4.4l-10 5c-.5.2-1.1 0-1.3-.4-.1-.1-.1-.2-.1-.4 0-.4.2-.7.6-.9z"], ["fill", "currentColor", "d", "M8.4 3H14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4c.3 0 .5.1.7.3L8.4 3zM5.6 3H2v10h12V5H8c-.3 0-.5-.1-.7-.3L5.6 3zm.4 7h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1zm1-3v4c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1s-1 .4-1 1z"], ["fill", "currentColor", "d", "M8.4 3H14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4c.3 0 .5.1.7.3L8.4 3zM5.6 3H2v10h12V5H8c-.3 0-.5-.1-.7-.3L5.6 3zm.4 7h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1z"], ["fill", "currentColor", "d", "M8.4 3H14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4c.3 0 .5.1.7.3L8.4 3z"], ["fill", "currentColor", "d", "M8.4 3H14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4c.3 0 .5.1.7.3L8.4 3zM5.6 3H2v10h12V5H8c-.3 0-.5-.1-.7-.3L5.6 3z"], ["fill", "currentColor", "d", "M14 14V2H2v12h12zm0 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2z"], ["fill", "currentColor", "d", "M15 4H1c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1z"], ["fill", "currentColor", "d", "M5 5v10c0 .6.4 1 1 1s1-.4 1-1V5c0-.6-.4-1-1-1s-1 .4-1 1z"], ["fill", "currentColor", "d", "M9 9.9c.8-.1 1.5-.3 2.3-.5.4-.2.8-.3 1.2-.5 0 .1.1.1.1.2l1.4 1.4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-1.3-1.3c.7-.6 1.3-1.4 1.7-2.3.2-.5 0-1.1-.5-1.3-.5-.2-1.1 0-1.3.5-.3.7-.8 1.3-1.4 1.8-.6.5-1.3.9-2.1 1.2-.7.1-1.6.3-2.5.3-.9 0-1.8-.2-2.6-.5s-1.5-.7-2.1-1.2c-.6-.5-1-1.1-1.4-1.8-.2-.4-.8-.6-1.3-.4-.5.2-.7.8-.5 1.3.4.9 1 1.7 1.8 2.3L.6 9c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L3.4 9s.1-.1.1-.2c.4.2.8.4 1.2.5.7.4 1.5.5 2.3.6V12c0 .6.4 1 1 1s1-.4 1-1V9.9z"], ["d", "M8 1l-.5.4L1 8.6V14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-4c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v4c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V8.6L8.5 1.4 8 1z", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM7 8v3c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1s-1 .4-1 1zm2-3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "xmlns", "http://www.w3.org/2000/svg", "focusable", "false"], ["fill", "currentColor", "d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 6a1 1 0 1 0 0-2 1 1 0 1 0 0 2zm1 5V8a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0z"], ["fill", "currentColor", "d", "M14 5c0-1.7-1.3-3-3-3S8 3.3 8 5s1.3 3 3 3 3-1.3 3-3zm2 0c0 2.8-2.2 5-5 5S6 7.8 6 5s2.2-5 5-5 5 2.2 5 5zM2.3 13.7l2 2c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4zm2-2l2 2c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-2-2c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4z"], ["fill", "currentColor", "d", "M1.8 15.6l6-7c.4-.4.3-1.1-.1-1.4-.5-.3-1.1-.3-1.5.1l-6 7c-.4.4-.3 1.1.1 1.4.5.4 1.1.4 1.5-.1z"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM9.7 6.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-2 2c-.4.4-.4 1 0 1.4l2 2c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L8.4 8l1.3-1.3z"], ["fill", "currentColor", "d", "M5 5V3H3v2h2zm0 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zm4-2h6c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1zm-4 8v-2H3v2h2zm0 2H3c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zm4-2h6c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1z"], ["d", "M5 7v5h6V7H5zm2-2h2.031V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1zm4.031 0A2 2 0 0 1 13 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2V4a3 3 0 0 1 3-3h.031a3 3 0 0 1 3 3v1z", "fill", "currentColor"], ["d", "M7 5h2V4c0-.6-.4-1-1-1s-1 .4-1 1v1zm4 0c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2V4c0-1.7 1.3-3 3-3s3 1.3 3 3v1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 12V4H2v8h12zm0 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"], ["fill", "currentColor", "d", "M2.6 3.2c-.4-.4-1-.3-1.4.1s-.3 1 .1 1.4l6 5c.4.3.9.3 1.3 0l6-5c.4-.3.5-1 .2-1.4-.3-.4-1-.5-1.4-.2L8 7.7 2.6 3.2z"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM6 9h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1z"], ["d", "M3 7h10c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M11 8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zM7 8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zM3 8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1z"], ["fill", "currentColor", "d", "M8 5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"], ["d", "M5.2 7h7.6c.6 0 1 .4 1 1s-.4 1-1 1H5.2l2.3 2.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L2.8 9.4c-.8-.8-.8-2 0-2.8l3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L5.2 7z", "fill", "currentColor"], ["fill", "currentColor", "d", "M9 13c0 .6-.4 1-1 1s-1-.4-1-1-.4-1-1-1-1 .4-1 1c0 1.7 1.3 3 3 3s3-1.3 3-3c0-.6-.4-1-1-1s-1 .4-1 1z"], ["fill", "currentColor", "d", "M11.1 8.5c-.1-.2-.1-.3-.1-.5V5c0-1.7-1.3-3-3-3S5 3.3 5 5v3c0 .2 0 .3-.1.5L3.4 11h9.1l-1.4-2.5zM3 7.7V5c0-2.8 2.2-5 5-5s5 2.2 5 5v2.7l1.8 3.2c.5 1-.2 2-1.3 2H2.4c-1.1 0-1.8-1.1-1.2-2.1L3 7.7z"], ["fill", "currentColor", "d", "M9 6V1c0-.6-.4-1-1-1S7 .4 7 1v5c0 .6.4 1 1 1s1-.4 1-1zM2.4 2.3C.9 3.8 0 5.8 0 8c0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-.9-4.2-2.4-5.7-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4 2.4 2.3 2.4 6.1.1 8.5s-6.1 2.4-8.5.1C2.6 11.2 2 9.6 2 8c0-1.6.7-3.2 1.8-4.3.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm-9 2V6c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1zm4 0V6c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1z"], ["fill", "currentColor", "d", "M11 5c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1M5.8 5.4c-.3-.4-1-.5-1.4-.2l-.2.2-4 6c-.3.5-.2 1.1.3 1.4.5.3 1.1.2 1.4-.3l3.2-4.9 3.1 3.9c.3.4 1 .5 1.4.2 0 0 .1 0 .1-.1L12 9.4l2.3 2.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0L9.1 9.5 5.8 5.4z"], ["fill", "currentColor", "d", "M8 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm5-1c0-2.8-2.2-5-5-5S3 4.2 3 7c0 1.9.9 3.7 2.3 5.2 1 1 2.4 1.8 2.7 1.8s1.6-.8 2.7-1.8C12.1 10.7 13 8.9 13 7zm2 0c0 4.6-4.4 9-7 9s-7-4.4-7-9c0-3.9 3.1-7 7-7s7 3.1 7 7z"], ["fill", "currentColor", "d", "M11.8 8.3l-.1.1-5.1 3.2c-.2.1-.4.1-.5-.1 0-.1-.1-.1-.1-.2V5c0-.2.1-.3.3-.3.1 0 .1 0 .2.1L11.6 8c.3 0 .3.2.2.3M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm-9 3V5l4 3-4 3z"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM6 9h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1zm1-3v4c0 .6.4 1 1 1s1-.4 1-1V6c0-.6-.4-1-1-1s-1 .4-1 1z"], ["fill", "currentColor", "d", "M7.1 7.1H2.9c-.5 0-.9.4-.9.9s.4.9.9.9h4.3v4.3c-.1.4.3.8.8.8s.9-.4.9-.9V8.9h4.3c.4 0 .8-.4.8-.9s-.4-.9-.9-.9H8.9V2.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v4.2z"], ["fill", "currentColor", "d", "M4 12H2V8h12v4h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H2C.9 6 0 6.9 0 8v4c0 1.1.9 2 2 2h2c.6 0 1-.4 1-1s-.4-1-1-1z"], ["fill", "currentColor", "d", "M5 7V2h6v5c0 .6.4 1 1 1s1-.4 1-1V2c0-1.1-.9-2-2-2H5C3.9 0 3 .9 3 2v5c0 .6.4 1 1 1s1-.4 1-1zm6 7v-2H5v2h6zm0 2H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z"], ["fill", "currentColor", "d", "M13 9c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5c.6 0 1-.4 1-1s-.4-1-1-1C4.1 2 1 5.1 1 9s3.1 7 7 7 7-3.1 7-7c0-.6-.4-1-1-1s-1 .4-1 1z"], ["d", "M8 1l2 2-2 2", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM6.3 9.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l2-2c.4-.4.4-1 0-1.4l-2-2c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L7.6 8 6.3 9.3z"], ["fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-width", "2"], ["r", "5.5", "cx", "6.5", "cy", "6.5"], ["d", "M11 11l4 4"], ["fill", "currentColor", "d", "M3 15V1c0-.6-.4-1-1-1S1 .4 1 1v14c0 .6.4 1 1 1s1-.4 1-1zm12 0V1c0-.6-.4-1-1-1s-1 .4-1 1v14c0 .6.4 1 1 1s1-.4 1-1zm-6 0V1c0-.6-.4-1-1-1S7 .4 7 1v14c0 .6.4 1 1 1s1-.4 1-1z"], ["fill", "currentColor", "d", "M1 9h2c.6 0 1-.4 1-1s-.4-1-1-1H1c-.6 0-1 .4-1 1s.4 1 1 1zm6 4h2c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1zm6-7h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1 .4-1 1s.4 1 1 1z"], ["fill", "currentColor", "d", "M5.4 1.2l.1-.4c.1-.5.5-.8.9-.8h3.1c.5 0 .9.3 1 .8l.1.4.2 1.1c.2.1.5.3.7.4l1.1-.4.4-.1c.4-.1.9 0 1.2.5l.2.4L15.5 5l.2.4c.2.4.2.9-.2 1.3l-.3.3-.8.7v.8l.8.7.3.3c.4.3.4.8.2 1.3l-.2.4-1.1 1.8-.2.4c-.2.4-.7.6-1.2.5l-.5-.1-1.1-.4c-.2.2-.5.3-.7.4l-.2 1.1-.1.4c-.1.5-.5.8-1 .8h-3c-.5 0-.9-.3-1-.8l-.1-.4-.2-1.1c-.3-.1-.5-.3-.7-.4l-1.1.4-.4.1c-.4.1-.9 0-1.2-.5l-.2-.4-1.1-1.9-.2-.4c-.3-.4-.2-1 .1-1.3l.3-.3.8-.7V8v-.4l-.7-.7-.4-.3C0 6.2-.1 5.7.1 5.3l.2-.4 1.1-1.8.2-.4c.2-.4.7-.6 1.2-.5l.5.1 1.1.4c.2-.2.5-.3.7-.4l.3-1.1zM10 8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"], ["fill", "currentColor", "d", "M9 8c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1zm2 0c0 1.7-1.3 3-3 3S5 9.7 5 8s1.3-3 3-3 3 1.3 3 3zM5.4 1.2l.1-.4c.1-.5.5-.8.9-.8h3.1c.5 0 .9.3 1 .8l.1.4.2 1.1c.2.1.5.3.7.4l1.1-.4.4-.1c.4-.1.9 0 1.2.5l.2.4L15.5 5l.2.4c.2.4.2.9-.2 1.3l-.3.3-.8.7v.8l.8.7.3.3c.4.3.4.8.2 1.3l-.2.4-1.1 1.8-.2.4c-.2.4-.7.6-1.2.5l-.5-.1-1.1-.4c-.2.2-.5.3-.7.4l-.2 1.1-.1.4c-.1.5-.5.8-1 .8h-3c-.5 0-.9-.3-1-.8l-.1-.4-.2-1.1c-.3-.1-.5-.3-.7-.4l-1.1.4-.4.1c-.4.1-.9 0-1.2-.5l-.2-.4-1.1-1.9-.2-.4c-.3-.4-.2-.9.1-1.3l.3-.3.8-.7V8v-.4l-.7-.7-.4-.3C0 6.2-.1 5.7.1 5.3l.2-.4 1.1-1.8.2-.4c.2-.4.7-.6 1.2-.5l.5.1 1.1.4c.2-.2.5-.3.7-.4l.3-1.1zm1.8.8L7 3.2c-.1.4-.4.7-.7.8-.4.1-.9.4-1.2.6-.3.2-.6.3-1 .2l-1.3-.4L2 5.6l1 .8c.3.2.4.6.3.9v.1c0 .4-.1.5-.1.6s0 .2.1.5v.2c.1.3 0 .7-.3.9l-1 .8.8 1.2 1.3-.4c.3-.1.7 0 1 .2.4.3.8.5 1.2.7.3.1.6.4.7.7l.2 1.2h1.5l.3-1.2c.1-.3.3-.6.7-.7.4-.2.9-.4 1.2-.7.3-.2.6-.3 1-.2l1.3.4.8-1.2-1-.8c-.3-.2-.4-.6-.4-.9v-.1c.1-.3.1-.4.1-.5 0-.1 0-.2-.1-.5v-.1c0-.5.1-.9.4-1.1l1-.8-.8-1.2-1.3.4c-.3.1-.7 0-1-.2-.3-.2-.8-.5-1.2-.6-.3-.1-.6-.4-.7-.8L8.8 2H7.2z"], ["fill", "currentColor", "d", "M2.3 8.4c.3.5.7 1 1.1 1.5C4.6 11.2 6.1 12 8 12s3.4-.8 4.6-2.1c.5-.5.9-1.1 1.3-1.8-.3-.7-.8-1.3-1.3-1.9C11.4 4.8 9.9 4 8 4c-1.9 0-3.4.8-4.6 2.2-.5.6-1 1.2-1.3 1.9 0 .1.1.2.2.3zM8 14c-2.5 0-4.5-1-6.1-2.8-.9-1-1.5-2-1.8-2.7-.1-.2-.1-.5 0-.7C.4 7 .9 6 1.9 4.9 3.5 3.1 5.5 2 8 2s4.5 1.1 6.1 2.9c1 1.1 1.5 2.1 1.8 2.9.1.2.1.5 0 .7-.3.7-.9 1.7-1.8 2.7C12.5 13 10.5 14 8 14zm0-3c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1c0 .5.4 1 1 1z"], ["d", "M4.1 6H12c.3 0 .5.2.5.5 0 .1 0 .2-.1.3l-3.9 4.7c-.2.2-.5.2-.7.1l-.1-.1-4-4.7c-.2-.2-.2-.5 0-.7.1-.1.3-.1.4-.1z", "fill", "currentColor"], ["d", "M3.8 10h8.3c.5 0 .8.4.8.8s-.4.8-.8.8H3.8c-.5 0-.8-.4-.8-.8s.4-.8.8-.8zm0-6h4.3c.5 0 .9.4.9.8s-.4.9-.8.9H3.8c-.4 0-.8-.4-.8-.9 0-.4.4-.8.8-.8zm0 3h6.3c.5 0 .9.4.9.8s-.4.8-.8.8H3.8c-.4.1-.8-.3-.8-.8s.4-.8.8-.8z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M11.9 10.9H4.1c-.3 0-.5-.2-.5-.5 0-.1 0-.2.1-.3l3.9-4.7c.2-.2.5-.2.7-.1l.1.1 3.9 4.7c.2.2.1.5-.1.7 0 0-.2.1-.3.1z", "fill", "currentColor"], ["fill", "currentColor", "d", "M12.1 4H3.9c-.5 0-.9.4-.9 1s.4 1 .9 1h8.2c.5 0 .9-.4.9-1s-.4-1-.9-1zM4 12h2c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1zm-.1-3h5.2c.5 0 .9-.4.9-1s-.4-1-.9-1H3.9c-.5 0-.9.4-.9 1s.4 1 .9 1z"], ["d", "M3.8 4h8.3c.5 0 .9.4.9.8s-.4.8-.8.8H3.8c-.4.1-.8-.3-.8-.8 0-.4.4-.8.8-.8zm0 6h4.3c.5 0 .9.4.9.8s-.4.8-.8.8H3.8c-.5 0-.8-.4-.8-.8s.4-.8.8-.8zm0-3h6.3c.5 0 .9.4.9.8s-.4.8-.8.8H3.8c-.4.1-.8-.3-.8-.8s.4-.8.8-.8z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M8 11.9L4.3 14 5 9.7 2 6.6 6.1 6 8 2l1.9 3.9 4.1.7-3 3.1.7 4.3L8 11.9z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["fill", "currentColor", "d", "M7.9 3L6.8 5.9c-.2.4-.6.7-1 .7H3L5.2 9c.3.3.4.7.2 1.1l-.9 2.7 2.8-1.7c.3-.2.8-.2 1.1 0l3 1.9-.8-2.9c-.1-.4 0-.7.2-1L13 6.6h-3c-.4 0-.8-.3-1-.7L7.9 3zM5.3 5L7 .6c.3-.8 1.5-.8 1.9 0L10.7 5H15c.9 0 1.3 1 .8 1.7l-3.1 3.5 1.3 4.6c.2.9-.7 1.6-1.5 1.1L8 13.2l-4.5 2.7c-.8.5-1.8-.3-1.5-1.2l1.5-4.5L.3 6.7C-.3 6.1.1 5 1 5h4.3z"], ["d", "M15 3c0 1.1-.9 2-2 2s-2-.9-2-2h0c0-1.1.9-2 2-2s2 .9 2 2zm0 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2h0zM5 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm1 0h3m0 0l2-3m0 6L9 8", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.3 10L8 8.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3c.8.8.8 2 0 2.8l-2.3 2.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L9.3 12H6.7c-1.7 0-3-1.3-3-3V2c0-.6.4-1 1-1s1 .4 1 1v7c0 .6.4 1 1 1h2.6z", "fill", "currentColor"], ["d", "M9 7.6V5c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .3.1.6.4.8l1.9 1.9c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L9 7.6zm7 .4c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z", "fill", "currentColor"], ["fill", "currentColor", "d", "M14 8c0-3.3-2.7-6-6-6S2 4.7 2 8s2.7 6 6 6 6-2.7 6-6zm2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM7 5v3c0 .6.4 1 1 1s1-.4 1-1V5c0-.6-.4-1-1-1s-1 .4-1 1zm3.7 4.3l-2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4z"], ["d", "M5 4V3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1h1.1c.5 0 .9.4.9 1s-.4 1-.9 1H3.9C3.4 6 3 5.6 3 5s.4-1 .9-1H5zm4 0V3H7v1h2zM3 8.1c-.1-.5.4-1 .9-1.1s1 .3 1.1.9l.5 4.1c.1.6.4 1 1 1h3c.6 0 .9-.4 1-1l.5-4.1c.1-.5.5-1 1.1-.9.5.1 1 .5.9 1.1l-.5 4c-.2 1.6-1.4 2.9-3 2.9h-3c-1.6 0-2.8-1.3-3-2.9l-.5-4z", "fill", "currentColor"], ["d", "M8 13.3c-2.9 0-5.3-2.4-5.3-5.3S5.1 2.7 8 2.7s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3zm0-1.5c2.1 0 3.8-1.7 3.8-3.8S10.1 4.2 8 4.2C5.9 4.2 4.2 5.9 4.2 8c0 2.1 1.7 3.8 3.8 3.8z", "fill", "currentColor"], ["fill", "currentColor", "d", "M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm-.7-3.5c0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7zm-.7-5.6s0-.2.1-.3c.2-.2.6-.4 1.3-.4.3 0 .5 0 .7.1.5.1.7.4.7 1.3 0 .2-.2.5-.5.7-.2.2-.4.3-.6.4-.6.3-1 1.1-1 1.7 0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.1.1-.4.3-.4.2-.1.5-.3.8-.5.6-.5 1-1.1 1-1.8 0-1.5-.7-2.4-1.8-2.7-.3-.2-.6-.2-1-.2-1.1 0-1.9.4-2.4 1-.3.4-.4.8-.4 1.1 0 .4.3.7.7.7.4 0 .7-.3.7-.7z"], ["fill", "currentColor", "d", "M8 13.6c3.1 0 5.6-2.5 5.6-5.6S11.1 2.4 8 2.4C4.9 2.4 2.4 4.9 2.4 8s2.5 5.6 5.6 5.6zM8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm-.7-3.5c0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7zm-.7-5.6s0-.2.1-.3c.2-.2.6-.4 1.3-.4.3 0 .5 0 .7.1.5.1.7.4.7 1.3 0 .2-.2.5-.5.7-.2.2-.4.3-.6.4-.6.3-1 1.1-1 1.7 0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.1.1-.4.3-.4.2-.1.5-.3.8-.5.6-.5 1-1.1 1-1.8 0-1.5-.7-2.4-1.8-2.7-.3-.2-.6-.2-1-.2-1.1 0-1.9.4-2.4 1-.3.4-.4.8-.4 1.1 0 .4.3.7.7.7.4 0 .7-.3.7-.7z"], ["d", "M8 1L6 3l2 2", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M8 4c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5c0-.6-.4-1-1-1s-1 .4-1 1c0 3.9 3.1 7 7 7s7-3.1 7-7-3.1-7-7-7c-.6 0-1 .4-1 1s.4 1 1 1z"], ["fill", "currentColor", "d", "M13 14V8H3v6h10zm0 2H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2z"], ["fill", "currentColor", "d", "M6 7V4c0-1.1.9-2 2-2s2 .9 2 2c0 .6.4 1 1 1s1-.4 1-1c0-2.2-1.8-4-4-4S4 1.8 4 4v3c0 .6.4 1 1 1s1-.4 1-1z"], ["d", "M7 4.4L5.7 5.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L6.6 2c.8-.8 2-.8 2.8 0l2.3 2.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L9 4.4V10c0 .6-.4 1-1 1s-1-.4-1-1V4.4zM1 11c0-.6.4-1 1-1s1 .4 1 1v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1c0-.6.4-1 1-1s1 .4 1 1v1c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3v-1z", "fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "currentColor"], ["d", "M8 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-3.1 3.5c-.3.5-.9.7-1.4.4-.5-.3-.7-.8-.4-1.3l.4-.9C4 10.7 5 10 6.2 10h3.5c1.1 0 2.2.6 2.7 1.7l.4.9c.2.5 0 1.1-.5 1.3-.5.2-1 0-1.3-.4l-.4-.9c-.2-.3-.5-.6-.9-.6H6.2c-.4 0-.7.2-.9.6l-.4.9z", "fill", "currentColor"], ["d", "M14 15H2c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1z", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "currentColor", "d", "M13 10c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1"], ["d", "M12 5V1L2 5", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]],
      template: function ExampleNormalIconsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "svg", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "path", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "path", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "path", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "g", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "circle", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "path", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "path", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "path", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "path", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "path", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "path", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "path", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "path", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "path", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "path", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "path", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "path", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "path", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "path", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "path", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "path", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "path", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "path", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "path", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "path", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "path", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "path", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "path", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "path", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "path", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "path", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "path", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "path", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "path", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n\n[mui-flex-icon][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 24px !important;\n  min-height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 38px !important;\n  min-height: 38px !important;\n  max-width: 38px !important;\n  max-height: 38px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: inherit;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%]:hover {\n  transform: scale(1.4);\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-input-icon][_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbm9ybWFsLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1kaXJlY3Rpb24ubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbm9ybWFsLWljb25zL2V4YW1wbGUtbm9ybWFsLWljb25zLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1ub3JtYWwtaWNvbnMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRleHQubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbm9ybWFsLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1zcGFjZXMubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbm9ybWFsLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1idXR0b25zLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLW5vcm1hbC1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtY29sdW1zLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLW5vcm1hbC1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtdGFibGUubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbm9ybWFsLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtbm9ybWFsLWljb25zL2V4YW1wbGUtbm9ybWFsLWljb25zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxtQkFBQTtBQ0NaO0FERVE7RUFDSSw4QkFBQTtBQ0FaO0FER1E7RUFDSSw2QkFBQTtBQ0RaO0FESVE7RUFDSSx5QkFBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0FDSFo7QURNUTtFQUNJLHVCQUFBO0FDSlo7QURPUTtFQUNJLHFCQUFBO0FDTFo7QURhSTtFQUNJ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QUFBO0FGdU5SO0FFcE5JO0VBQ0ksa0JBQUE7QUZzTlI7QUVuTkk7RUFDSSxrQkFBQTtBRnFOUjtBRWxOSTtFQUNJLGtCQUFBO0FGb05SO0FFak5JO0VBQ0ksa0JBQUE7QUZtTlI7QUVoTkk7RUFDSSxrQkFBQTtBRmtOUjtBRS9NSTtFQUNJLGtCQUFBO0FGaU5SO0FFOU1JO0VBQ0ksa0JBQUE7QUZnTlI7QUUzTUk7RUFDSSxjQUFBO0FGNk1SO0FFMU1JO0VBQ0ksZ0JBQUE7QUY0TVI7QUV6TUk7RUFDSSxnQkFBQTtBRjJNUjtBRXhNSTtFQUNJLGlCQUFBO0FGME1SO0FFdk1JO0VBQ0ksaUJBQUE7QUZ5TVI7QUV0TUk7RUFDSSxpQkFBQTtBRndNUjtBRXJNSTtFQUNJLGlCQUFBO0FGdU1SO0FFcE1JO0VBQ0ksaUJBQUE7QUZzTVI7QUVuTUk7RUFDSSxpQkFBQTtBRnFNUjtBRWxNSTtFQUNJLGlCQUFBO0FGb01SO0FFak1JO0VBQ0ksaUJBQUE7QUZtTVI7QUU5TEk7RUFDSSxnQkFBQTtBRmdNUjtBRTdMSTtFQUNJLGtCQUFBO0FGK0xSO0FFNUxJO0VBQ0ksa0JBQUE7QUY4TFI7QUUzTEk7RUFDSSxtQkFBQTtBRjZMUjtBRTFMSTtFQUNJLG1CQUFBO0FGNExSO0FFekxJO0VBQ0ksbUJBQUE7QUYyTFI7QUV4TEk7RUFDSSxtQkFBQTtBRjBMUjtBRXZMSTtFQUNJLG1CQUFBO0FGeUxSO0FFdExJO0VBQ0ksbUJBQUE7QUZ3TFI7QUVyTEk7RUFDSSxtQkFBQTtBRnVMUjtBRXBMSTtFQUNJLG1CQUFBO0FGc0xSO0FFakxJO0VBQ0ksYUFBQTtBRm1MUjtBRWhMSTtFQUNJLGVBQUE7QUZrTFI7QUUvS0k7RUFDSSxlQUFBO0FGaUxSO0FFOUtJO0VBQ0ksZ0JBQUE7QUZnTFI7QUU3S0k7RUFDSSxnQkFBQTtBRitLUjtBRTVLSTtFQUNJLGdCQUFBO0FGOEtSO0FFM0tJO0VBQ0ksZ0JBQUE7QUY2S1I7QUUxS0k7RUFDSSxnQkFBQTtBRjRLUjtBRXpLSTtFQUNJLGdCQUFBO0FGMktSO0FFeEtJO0VBQ0ksZ0JBQUE7QUYw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QUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QU5pakJKO0FNOWlCQTtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBTmdqQko7QU03aUJBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FOK2lCSjtBTTVpQkE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBTjhpQko7QU0zaUJBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FONmlCSjtBTTFpQkE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBTjRpQko7QU16aUJBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtBTjJpQko7QU14aUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QU4waUJKO0FNdmlCQTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FOeWlCSjtBTXRpQkE7RUFDSSxnQkFBQTtBTndpQkoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1ub3JtYWwtaWNvbnMvZXhhbXBsZS1ub3JtYWwtaWNvbnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICZfaG9yaXpvbnRhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmX3dyYXAge1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jZW50ZXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxuXG4gICAgJl92ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgfVxuXG4gICAgICAgICYtcmlnaHQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICZfd3JhcCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG59XG5cblxuLmZ1bGwtc2l6ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleF9ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4X2hvcml6b250YWwtbWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X2hvcml6b250YWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF9ob3Jpem9udGFsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF9ob3Jpem9udGFsX3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleF9ob3Jpem9udGFsLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3ZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLW1pZGRsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfdmVydGljYWwtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mdWxsLXNpemUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tdWktdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9oMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2gzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDQge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfYm9keS14bCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWwge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1sX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW0ge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1tX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LXMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9keS1zX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXhzIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubXVpLXRleHRfbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm11aS10ZXh0X2xpbmstaG92ZXJlZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucm91dGVyX2xpbmsge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDAgOHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucm91dGVyX2xpbmstYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xufVxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cbi5tdWktbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXNwYWNlIHtcbiAgLyogUklHSFQgU1BBQ0UgKi9cbiAgLyogTEVGVCBTUEFDRSAqL1xuICAvKiBCT1RUT00gU1BBQ0UgKi9cbiAgLyogVE9QIFNQQUNFICovXG59XG4ubXVpLXNwYWNlX3JpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC02IHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC03IHtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC04IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC05IHtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0xMCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubXVpLXNwYWNlX2xlZnQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5tdWktc3BhY2VfbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNiB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTcge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtOSB7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMyB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS00IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS03IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTgge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOSB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC0wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5tdWktc3BhY2VfdG9wLTEge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0yIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm11aS1zcGFjZV90b3AtMyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubXVpLXNwYWNlX3RvcC00IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm11aS1zcGFjZV90b3AtNiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC03IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5tdWktc3BhY2VfdG9wLTgge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLm11aS1zcGFjZV90b3AtOSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm11aS1idXR0b25fY29sb3Itc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fc2l6ZS1sIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubXVpLWJ1dHRvbl9zaXplLW0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtcyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1jb2xfbWQtMyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnRhYmxlLm11aS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzk1OWJhNDtcbn1cbi5tdWktdGFibGVfX3RyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IDA7XG59XG4ubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogNTVweDtcbiAgY29sb3I6ICMzMzM7XG59XG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGNvbG9yOiAjNzk4MThjO1xufVxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBoZWlnaHQ6IDc5cHg7XG59XG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi8qIElDT05TICovXG5bbXVpLWZsZXgtaWNvbl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldyB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuW211aS1mbGV4LWljb25dW3NpemU9XCJzbWFsbFwiXSB7XG4gIG1hcmdpbjogNnB4O1xuICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuW211aS1mbGV4LWljb25dW3NpemU9XCJzbWFsbFwiXSA+IGRpdiB7XG4gIG1pbi13aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXSB7XG4gIG1hcmdpbjogNnB4O1xuICBtaW4td2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuW211aS1mbGV4LWljb25dW3NpemU9XCJub3JtYWxcIl0gPiBkaXYge1xuICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuW211aS1mbGV4LWljb25dID4gZGl2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cblttdWktZmxleC1pY29uXSA+IGRpdiA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5bbXVpLWZsZXgtaW5wdXQtaWNvbl0ge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuIiwiLm11aS10ZXh0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuICAgICZfaDEge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gzIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g0IHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g1IHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g2IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2JvZHkteGwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktcyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHktc19zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuXG4gICAgJl9saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICAgICAmLWhvdmVyZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1ob3ZlcmVkOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgICAgIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbi5yb3V0ZXJfbGluayB7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmLWFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UyYjUxZjtcbiAgICB9XG59XG5cbi5yb3V0ZXJfbGluazpob3Zlcjpub3QoLnJvdXRlcl9saW5rLWFjdGl2ZSkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cblxuLm11aS1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4ubXVpLWxpbms6aG92ZXI6bm90KFtuZy1yZWZsZWN0LXJvdXRlci1saW5rPScnXSkge1xuICAgIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xufVxuIiwiLm11aS1zcGFjZSB7XG4gICAgLyogUklHSFQgU1BBQ0UgKi9cblxuICAgICZfcmlnaHQtMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC00IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC03IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBMRUZUIFNQQUNFICovXG5cbiAgICAmX2xlZnQtMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICZfbGVmdC0xIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC01IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTYge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC04IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBCT1RUT00gU1BBQ0UgKi9cblxuICAgICZfYm90dG9tLTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICZfYm90dG9tLTEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS00IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS01IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS02IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS03IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS04IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS05IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgLyogVE9QIFNQQUNFICovXG5cbiAgICAmX3RvcC0wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAmX3RvcC0xIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgJl90b3AtNCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgJl90b3AtNiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtOCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgJl90b3AtOSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMTAge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbn1cbiIsIi5tdWktYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xuXG5cbiAgICAmX2NvbG9yIHtcbiAgICAgICAgJi1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgJi1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lcnJvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm86aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9zaXplIHtcbiAgICAgICAgJi1sIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtbSB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLXMge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuIiwiLm11aS1jb2wge1xuXG4gICAgJl9tZC0zIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cbiIsInRhYmxlLm11aS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogIzk1OWJhNDtcbn1cblxuLm11aS10YWJsZV9fdHIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuXG4ubXVpLXRhYmxlX19zdWJ0ZXh0IHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICBjb2xvcjogIzc5ODE4Yztcbn1cblxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgaGVpZ2h0OiA3OXB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9hbGlnbl9jZW50ZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfY2VudGVyLFxuLm11aS10YWJsZV9fdGhfdGV4dF9jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtbGlicmFyeS5sZXNzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBJQ09OUyAqL1xuXG5bbXVpLWZsZXgtaWNvbl0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldyB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cblttdWktZmxleC1pY29uXVtzaXplPVwic21hbGxcIl0ge1xuICAgIG1hcmdpbjogNnB4O1xuICAgIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5cblttdWktZmxleC1pY29uXVtzaXplPVwic21hbGxcIl0+ZGl2IHtcbiAgICBtaW4td2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXSB7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgbWluLXdpZHRoOiAzOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cblxuW211aS1mbGV4LWljb25dW3NpemU9XCJub3JtYWxcIl0+ZGl2IHtcbiAgICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuXG5bbXVpLWZsZXgtaWNvbl0+ZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXRcbn1cblxuW211aS1mbGV4LWljb25dPmRpdj5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuW211aS1mbGV4LWljb25dLnByZXZpZXc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuW211aS1mbGV4LWlucHV0LWljb25dIHtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG59XG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleNormalIconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-nornal-icons',
          templateUrl: './example-normal-icons.component.html',
          styleUrls: ['./example-normal-icons.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-other-icons/example-other-icons.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-other-icons/example-other-icons.component.ts ***!
    \***********************************************************************************************************************************/

  /*! exports provided: ExampleOtherIconsComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryPagesMuiFlexIconsPageExamplesExampleOtherIconsExampleOtherIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleOtherIconsComponent", function () {
      return ExampleOtherIconsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExampleOtherIconsComponent = /*#__PURE__*/function () {
      function ExampleOtherIconsComponent() {
        _classCallCheck(this, ExampleOtherIconsComponent);
      }

      _createClass(ExampleOtherIconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExampleOtherIconsComponent;
    }();

    ExampleOtherIconsComponent.ɵfac = function ExampleOtherIconsComponent_Factory(t) {
      return new (t || ExampleOtherIconsComponent)();
    };

    ExampleOtherIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleOtherIconsComponent,
      selectors: [["app-example-other-icons"]],
      decls: 193,
      vars: 0,
      consts: [[1, "flex", "flex_horizontal", "wrapper"], ["mui-flex-icon", "", "size", "normal", 1, "preview"], ["width", "50", "height", "50", "viewBox", "0 0 50 50", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M21.875 28.125H23.4375V29.6875H21.875V28.125Z", "fill", "currentColor"], ["d", "M18.75 28.125H20.3125V29.6875H18.75V28.125Z", "fill", "currentColor"], ["d", "M15.625 28.125H17.1875V29.6875H15.625V28.125Z", "fill", "currentColor"], ["d", "M11.7188 11.7188C11.2883 11.7188 10.9375 11.368 10.9375 10.9375H9.375C9.375 12.2297 10.4266 13.2812 11.7188 13.2812V14.8438H13.2812V13.2812H15.625V10.9375C15.625 9.64531 14.5734 8.59375 13.2812 8.59375H11.7188C11.2883 8.59375 10.9375 8.24297 10.9375 7.8125V7.03125H13.2812C13.7117 7.03125 14.0625 7.38203 14.0625 7.8125H15.625C15.625 6.52031 14.5734 5.46875 13.2812 5.46875V3.90625H11.7188V5.46875H9.375V7.8125C9.375 9.10469 10.4266 10.1562 11.7188 10.1562H13.2812C13.7117 10.1562 14.0625 10.507 14.0625 10.9375V11.7188H11.7188Z", "fill", "currentColor"], ["d", "M49.2188 31.25C49.2188 29.5266 47.8172 28.125 46.0938 28.125H45.7703L45.3125 28.5828L38.6047 21.875L39.0625 21.4172V21.0938C39.0625 20.3086 38.7617 19.5984 38.2812 19.0484V8.59375C38.2812 6.43984 36.5289 4.6875 34.375 4.6875H19.6938C18.1578 2.33906 15.5094 0.78125 12.5 0.78125C9.49063 0.78125 6.84219 2.33906 5.30625 4.6875H4.6875C2.53359 4.6875 0.78125 6.43984 0.78125 8.59375V28.9062C0.78125 31.0602 2.53359 32.8125 4.6875 32.8125H13.7594L12.718 35.9375H10.9375C9.21406 35.9375 7.8125 37.3391 7.8125 39.0625V42.1875H20.7711L18.8453 44.1133C18.2797 44.6781 17.9688 45.4281 17.9688 46.2281C17.9688 47.8766 19.3102 49.2188 20.9602 49.2188C21.7586 49.2188 22.5094 48.9078 23.075 48.343L35.9375 35.4797L37.1766 36.7188L36.7188 37.1766V37.5C36.7188 38.0852 36.8906 38.6273 37.1711 39.0961C35.1734 39.2656 33.5938 40.9273 33.5938 42.9688V45.3125H49.2188V42.9688C49.2188 40.8148 47.4664 39.0625 45.3125 39.0625H41.7297L49.2188 31.5734V31.25ZM29.3922 28.8781C28.7672 28.7586 28.2734 28.2648 28.1539 27.6391L36.2336 19.5594C36.8586 19.6789 37.3523 20.1734 37.4719 20.7977L29.3922 28.8781ZM12.5 2.34375C16.3766 2.34375 19.5312 5.49844 19.5312 9.375C19.5312 13.2516 16.3766 16.4062 12.5 16.4062C8.62344 16.4062 5.46875 13.2516 5.46875 9.375C5.46875 5.49844 8.62344 2.34375 12.5 2.34375ZM28.125 20.3125C28.5555 20.3125 28.9062 20.6633 28.9062 21.0938C28.9062 21.5242 28.5555 21.875 28.125 21.875C27.6945 21.875 27.3438 21.5242 27.3438 21.0938C27.3438 20.6633 27.6945 20.3125 28.125 20.3125ZM27.4477 18.75H19.3391L18.4328 15.5773C18.9086 15.1227 19.332 14.6156 19.6938 14.0625H28.1172L27.4477 18.75ZM19.5312 21.0938C19.5312 21.5242 19.1805 21.875 18.75 21.875C18.3195 21.875 17.9688 21.5242 17.9688 21.0938C17.9688 20.6633 18.3195 20.3125 18.75 20.3125C19.1805 20.3125 19.5312 20.6633 19.5312 21.0938ZM4.49609 6.26953C4.12031 7.23437 3.90625 8.27891 3.90625 9.375C3.90625 14.1133 7.76172 17.9688 12.5 17.9688C14.1953 17.9688 15.7727 17.4688 17.1055 16.6187L17.7766 18.9688C16.9703 19.3391 16.4062 20.1492 16.4062 21.0938C16.4062 22.3859 17.4578 23.4375 18.75 23.4375C20.0422 23.4375 21.0938 22.3859 21.0938 21.0938C21.0938 20.8188 21.0375 20.5578 20.95 20.3125H25.9258C25.8375 20.5578 25.7812 20.8188 25.7812 21.0938C25.7812 22.3859 26.8328 23.4375 28.125 23.4375C29.4172 23.4375 30.4688 22.3859 30.4688 21.0938C30.4688 20.1117 29.8602 19.2711 29.0008 18.9234L29.9188 12.5H32.8125C34.1047 12.5 35.1562 11.4484 35.1562 10.1562C35.1562 8.86406 34.1047 7.8125 32.8125 7.8125H31.0422C29.8836 7.8125 28.8859 8.67734 28.7227 9.825L28.3406 12.5H20.4969C20.8773 11.5297 21.0938 10.4781 21.0938 9.375C21.0938 8.27187 20.8773 7.22031 20.4969 6.25H34.375C35.6672 6.25 36.7188 7.30156 36.7188 8.59375V18.0797C36.4672 18.0141 36.2086 17.9688 35.9375 17.9688H35.6141L28.5828 25H2.34375V8.59375C2.34375 7.36719 3.29453 6.36875 4.49609 6.26953ZM30.1422 10.9375L30.2695 10.0453C30.3242 9.66328 30.6562 9.375 31.0422 9.375H32.8125C33.243 9.375 33.5938 9.72578 33.5938 10.1562C33.5938 10.5867 33.243 10.9375 32.8125 10.9375H30.1422ZM2.34375 28.9062V26.5625H27.0203L26.5625 27.0203V27.3438C26.5625 29.0672 27.9641 30.4688 29.6875 30.4688H30.0109L30.4688 30.0109L31.7078 31.25H4.6875C3.39531 31.25 2.34375 30.1984 2.34375 28.9062ZM27.0203 35.9375H26.3445L25.3031 32.8125H30.1461L27.0203 35.9375ZM15.407 32.8125H23.6555L24.6969 35.9375H14.3656L15.407 32.8125ZM9.375 40.625V39.0625C9.375 38.2008 10.0758 37.5 10.9375 37.5H25.4578L22.3328 40.625H9.375ZM21.9703 47.2383C21.7 47.5078 21.3414 47.6562 20.9602 47.6562C20.1719 47.6562 19.5312 47.0156 19.5312 46.2281C19.5312 45.8523 19.6836 45.4844 19.95 45.218L32.8125 32.3547L34.8328 34.375L21.9703 47.2383ZM31.5734 28.9062L37.5 22.9797L44.2078 29.6875L38.2812 35.6141L31.5734 28.9062ZM45.3125 40.625C46.6047 40.625 47.6562 41.6766 47.6562 42.9688V43.75H35.1562V42.9688C35.1562 41.6766 36.2078 40.625 37.5 40.625H39.8438H40.1672H45.3125ZM39.5484 39.0344C38.9234 38.9148 38.4297 38.4211 38.3102 37.7953L46.3898 29.7156C47.0148 29.8352 47.5086 30.3289 47.6281 30.9547L39.5484 39.0344Z", "fill", "currentColor"], ["d", "M36.7507 29.271L37.8554 28.1663L38.9601 29.271L37.8554 30.3757L36.7507 29.271Z", "fill", "currentColor"], ["d", "M34.5974 27.116L35.7021 26.0113L36.751 27.0602L35.6463 28.1649L34.5974 27.116Z", "fill", "currentColor"], ["d", "M38.9604 31.4796L40.0651 30.3749L41.1698 31.4796L40.0651 32.5843L38.9604 31.4796Z", "fill", "currentColor"], ["d", "M3.90625 21.875H5.46875V23.4375H3.90625V21.875Z", "fill", "currentColor"], ["d", "M7.03125 21.875H8.59375V23.4375H7.03125V21.875Z", "fill", "currentColor"], ["d", "M10.1562 21.875H11.7188V23.4375H10.1562V21.875Z", "fill", "currentColor"], ["d", "M3.90625 18.75H11.7188V20.3125H3.90625V18.75Z", "fill", "currentColor"], ["width", "48", "height", "50", "viewBox", "0 0 48 50", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M35.6654 30.8332C35.6654 30.3732 35.292 29.9999 34.8321 29.9999H29.8321C29.3721 29.9999 28.9988 30.3732 28.9988 30.8332C28.9988 31.2931 29.3721 31.6665 29.8321 31.6665H34.8321C35.292 31.6666 35.6654 31.2932 35.6654 30.8332Z", "fill", "currentColor"], ["d", "M32.3317 9.16675V5.00005C32.3317 4.54009 31.9584 4.16675 31.4984 4.16675C31.0385 4.16675 30.6651 4.54009 30.6651 5.00005V9.16675C30.6651 11.4642 32.5343 13.3334 34.8318 13.3334H42.3318V29.1667C42.3318 29.6267 42.7052 30 43.1651 30C43.6251 30 43.9984 29.6267 43.9984 29.1667V12.5C43.9984 12.0401 43.6251 11.6667 43.1651 11.6667H34.8318C33.4534 11.6667 32.3317 10.5451 32.3317 9.16675Z", "fill", "currentColor"], ["d", "M34.8319 20.0001H28.1652C27.7053 20.0001 27.3319 20.3735 27.3319 20.8334C27.3319 21.2934 27.7053 21.6667 28.1652 21.6667H34.8319C35.2919 21.6667 35.6652 21.2934 35.6652 20.8334C35.6653 20.3735 35.292 20.0001 34.8319 20.0001Z", "fill", "currentColor"], ["d", "M25.6654 20.8334C25.6654 20.3735 25.292 20.0001 24.8321 20.0001H19.8321C19.3721 20.0001 18.9988 20.3735 18.9988 20.8334C18.9988 21.2934 19.3721 21.6667 19.8321 21.6667H24.8321C25.292 21.6668 25.6654 21.2935 25.6654 20.8334Z", "fill", "currentColor"], ["d", "M19.8319 25C19.372 25 18.9986 25.3733 18.9986 25.8333C18.9986 26.2933 19.372 26.6666 19.8319 26.6666H21.4986C21.9586 26.6666 22.3319 26.2933 22.3319 25.8333C22.3319 25.3733 21.9586 25 21.4986 25H19.8319Z", "fill", "currentColor"], ["d", "M19.8319 16.6666H28.1652C28.6252 16.6666 28.9985 16.2933 28.9985 15.8333C28.9985 15.3733 28.6252 15 28.1652 15H19.8319C19.372 15 18.9986 15.3733 18.9986 15.8333C18.9986 16.2933 19.372 16.6666 19.8319 16.6666Z", "fill", "currentColor"], ["d", "M24.8318 26.6667H33.1651C33.625 26.6667 33.9984 26.2934 33.9984 25.8334C33.9984 25.3735 33.625 25.0001 33.1651 25.0001H24.8318C24.3718 25.0001 23.9985 25.3735 23.9985 25.8334C23.9985 26.2934 24.3718 26.6667 24.8318 26.6667Z", "fill", "currentColor"], ["d", "M29.832 35.0001C29.3721 35.0001 28.9987 35.3735 28.9987 35.8334C28.9987 36.2934 29.3721 36.6667 29.832 36.6667H31.4987C31.9587 36.6667 32.332 36.2934 32.332 35.8334C32.332 35.3735 31.9587 35.0001 31.4987 35.0001H29.832Z", "fill", "currentColor"], ["d", "M26.4986 29.9999H19.8319C19.372 29.9999 18.9986 30.3732 18.9986 30.8332C18.9986 31.2931 19.372 31.6665 19.8319 31.6665H26.4986C26.9586 31.6665 27.3319 31.2931 27.3319 30.8332C27.3319 30.3732 26.9586 29.9999 26.4986 29.9999Z", "fill", "currentColor"], ["d", "M26.4986 35.0001H19.8319C19.372 35.0001 18.9986 35.3735 18.9986 35.8334C18.9986 36.2934 19.372 36.6667 19.8319 36.6667H26.4986C26.9586 36.6667 27.3319 36.2934 27.3319 35.8334C27.3319 35.3735 26.9586 35.0001 26.4986 35.0001Z", "fill", "currentColor"], ["d", "M46.3396 34.3261L44.6729 32.6594C43.392 31.3785 41.4403 31.3811 40.1612 32.6594L29.2429 43.5778C29.087 43.7336 28.9987 43.9461 28.9987 44.1669V49.1669C28.9987 49.6269 29.3721 50.0002 29.832 50.0002H34.832C35.0528 50.0002 35.2653 49.9119 35.4212 49.7561L46.3396 38.8377C47.6671 37.5102 47.6671 35.6544 46.3396 34.3261ZM39.0837 36.0936L40.4054 37.4153L33.1653 44.6553L31.8437 43.3336L39.0837 36.0936ZM30.6654 48.3335V44.5118L34.4871 48.3335H30.6654ZM35.6654 47.1552L34.3438 45.8335L41.5838 38.5935L42.9055 39.9152L35.6654 47.1552ZM45.1612 37.6594L44.0837 38.7369L40.262 34.9153L41.3396 33.8377C41.9979 33.1802 42.8329 33.1769 43.4945 33.8377L45.1612 35.5044C45.8354 36.1794 45.8354 36.9852 45.1612 37.6594Z", "fill", "currentColor"], ["d", "M26.4986 48.3333H4.83187C3.45355 48.3333 2.33187 47.2116 2.33187 45.8333V4.1667C2.33187 2.78838 3.45355 1.6667 4.83187 1.6667H31.1535L39.2427 9.75586C39.5685 10.0817 40.0952 10.0817 40.421 9.75586C40.7469 9.43008 40.7469 8.90332 40.421 8.57754L32.0877 0.244141C31.9319 0.0875 31.7194 0 31.4986 0H4.83187C2.53441 0 0.665268 1.86914 0.665268 4.1667V45.8334C0.665268 48.1309 2.53441 50.0001 4.83197 50.0001H26.4987C26.9586 50.0001 27.332 49.6268 27.332 49.1668C27.332 48.7068 26.9585 48.3333 26.4986 48.3333Z", "fill", "currentColor"], ["d", "M26.4986 39.9999H19.8319C19.372 39.9999 18.9986 40.3732 18.9986 40.8332C18.9986 41.2931 19.372 41.6665 19.8319 41.6665H26.4986C26.9586 41.6665 27.3319 41.2931 27.3319 40.8332C27.3319 40.3732 26.9586 39.9999 26.4986 39.9999Z", "fill", "currentColor"], ["d", "M15.6653 15.8332C15.6653 15.3732 15.292 14.9999 14.832 14.9999H9.832C9.37204 14.9999 8.9987 15.3732 8.9987 15.8332V20.8332C8.9987 21.2931 9.37204 21.6665 9.832 21.6665H14.832C15.292 21.6665 15.6653 21.2931 15.6653 20.8332V15.8332ZM13.9986 19.9999H10.6653V16.6666H13.9986V19.9999Z", "fill", "currentColor"], ["d", "M9.83186 41.6668H14.8319C15.2918 41.6668 15.6652 41.2935 15.6652 40.8335V35.8335C15.6652 35.3736 15.2918 35.0002 14.8319 35.0002H9.83186C9.3719 35.0002 8.99856 35.3736 8.99856 35.8335V40.8335C8.99856 41.2935 9.3719 41.6668 9.83186 41.6668ZM10.6653 36.6668H13.9986V40.0001H10.6653V36.6668Z", "fill", "currentColor"], ["d", "M10.9095 31.4225C11.0661 31.5792 11.2786 31.6667 11.4987 31.6667C11.5262 31.6667 11.5529 31.6659 11.5812 31.6625C11.8295 31.6383 12.0536 31.5033 12.192 31.2958L15.5253 26.2958C15.7803 25.9125 15.677 25.3949 15.2945 25.1399C14.9103 24.884 14.3945 24.9882 14.1386 25.3708L11.3695 29.525L10.4211 28.5775C10.0953 28.2516 9.56857 28.2516 9.24279 28.5775C8.91701 28.9034 8.91691 29.43 9.24279 29.7558L10.9095 31.4225Z", "fill", "currentColor"], ["clip-path", "url(#clip0)"], ["d", "M25 19.375C29.1422 19.375 32.5 16.0173 32.5 11.875C32.5 7.73275 29.1422 4.375 25 4.375C20.8577 4.375 17.5 7.73275 17.5 11.875C17.5044 16.0152 20.8598 19.3705 25 19.375ZM25 6.04167C28.2218 6.04167 30.8333 8.65316 30.8333 11.875C30.8333 15.0968 28.2218 17.7083 25 17.7083C21.7781 17.7083 19.1666 15.0968 19.1666 11.875C19.1703 8.65479 21.7798 6.04533 25 6.04167Z", "fill", "currentColor"], ["d", "M7.49999 16.875C9.80101 16.875 11.6667 15.0093 11.6667 12.7083C11.6667 10.4073 9.80101 8.54163 7.49999 8.54163C5.19896 8.54163 3.33332 10.4073 3.33332 12.7083C3.33617 15.0085 5.19978 16.8721 7.49999 16.875ZM7.49999 10.2083C8.8806 10.2083 9.99999 11.3277 9.99999 12.7083C9.99999 14.0889 8.8806 15.2083 7.49999 15.2083C6.11937 15.2083 4.99999 14.0889 4.99999 12.7083C4.99999 11.3277 6.11937 10.2083 7.49999 10.2083Z", "fill", "currentColor"], ["d", "M42.4999 16.875C44.801 16.875 46.6666 15.0093 46.6666 12.7083C46.6666 10.4073 44.801 8.54163 42.4999 8.54163C40.1989 8.54163 38.3333 10.4073 38.3333 12.7083C38.3361 15.0085 40.1997 16.8721 42.4999 16.875ZM42.4999 10.2083C43.8806 10.2083 44.9999 11.3277 44.9999 12.7083C44.9999 14.0889 43.8806 15.2083 42.4999 15.2083C41.1193 15.2083 39.9999 14.0889 39.9999 12.7083C39.9999 11.3277 41.1193 10.2083 42.4999 10.2083Z", "fill", "currentColor"], ["d", "M45.8333 16.875C45.653 16.875 45.4777 16.9336 45.3332 17.0418L42.5 19.1667L39.6667 17.0418C39.5223 16.9336 39.3469 16.875 39.1666 16.875C37.795 16.8734 36.5124 17.5537 35.7442 18.6902C34.48 18.0497 33.0839 17.7136 31.6666 17.7083C31.4457 17.7083 31.2337 17.7962 31.0774 17.9525L25 24.03L18.9225 17.9525C18.7663 17.7962 18.5543 17.7083 18.3333 17.7083C16.9161 17.7136 15.52 18.0497 14.2558 18.6902C13.4875 17.5537 12.205 16.8734 10.8333 16.875C10.6531 16.875 10.4777 16.9336 10.3332 17.0418L7.49999 19.1667L4.66674 17.0418C4.52229 16.9336 4.34691 16.875 4.16666 16.875C1.86645 16.8779 0.00284068 18.7415 -7.62939e-06 21.0417V28.4501C0.000399271 29.3127 0.444328 30.1147 1.17512 30.5733L6.274 33.7618C6.67194 34.0031 7.12808 34.1305 7.59317 34.13C7.97932 34.1309 8.36018 34.0422 8.70564 33.8709L9.16665 33.6401V37.4585C9.16625 38.4477 9.74893 39.3441 10.6535 39.7449L23.3101 45.3691C24.3852 45.8484 25.6132 45.8484 26.6882 45.3691L39.3457 39.7441C40.2502 39.3437 40.8333 38.4473 40.8333 37.4585V32.8044L41.3851 33.0782C42.087 33.4281 42.9122 33.4281 43.6141 33.0782L48.6141 30.5782C49.4649 30.1579 50.0024 29.2904 50 28.3415V21.0417C49.9971 18.7415 48.1335 16.8779 45.8333 16.875ZM7.96101 32.3751C7.70222 32.5016 7.39664 32.4882 7.15005 32.3393L2.06664 29.1602C1.8225 29.0055 1.67195 28.739 1.66666 28.4501V21.0417C1.66666 19.7616 2.63345 18.6882 3.90665 18.5551L6.99991 20.8748C7.29613 21.0974 7.70385 21.0974 8.00007 20.8748L11.0933 18.5551C11.7871 18.6259 12.4186 18.9856 12.8332 19.5459C12.7775 19.5874 12.7291 19.6366 12.6741 19.6794C12.5452 19.7807 12.4243 19.8877 12.299 19.9951C12.1391 20.1343 11.9832 20.2759 11.8343 20.4248C11.7191 20.54 11.6101 20.6576 11.5006 20.7784C11.3607 20.9338 11.2264 21.0942 11.0974 21.2594C10.9993 21.3859 10.9033 21.5092 10.8118 21.6443C10.6909 21.8168 10.5798 21.9942 10.4716 22.1741C10.3882 22.3092 10.31 22.4443 10.236 22.5834C10.1359 22.7726 10.0468 22.9667 9.96011 23.1665C9.89826 23.3065 9.83316 23.4448 9.77823 23.5893C9.69481 23.7984 9.63337 24.0125 9.56826 24.2285C9.52676 24.3677 9.47915 24.5032 9.44416 24.6452C9.38435 24.8865 9.34243 25.1343 9.30256 25.3817C9.28262 25.5033 9.25332 25.6226 9.23827 25.745C9.19147 26.1198 9.16747 26.4974 9.16665 26.875V31.7765L7.96101 32.3751ZM39.1666 37.4585C39.1666 37.7897 38.9701 38.0892 38.6666 38.2218L26.0099 43.8477C25.3666 44.1349 24.6317 44.1349 23.9884 43.8477L11.3334 38.2218C11.0299 38.0892 10.8333 37.7897 10.8333 37.4585V26.875C10.8329 26.2341 10.9139 25.5957 11.0742 24.9752C11.9149 21.7989 14.7184 19.5353 18.0001 19.3823L24.4165 25.7992C24.742 26.1247 25.2698 26.1247 25.5949 25.7992L32.0117 19.3823C36.0127 19.5732 39.1605 22.8695 39.1666 26.875V37.4585ZM48.3333 28.3415C48.3341 28.6601 48.1539 28.951 47.8682 29.0918L42.8682 31.5918C42.6363 31.7074 42.3628 31.7074 42.1309 31.5918L40.8333 30.9416V26.875C40.8325 26.4958 40.8085 26.1169 40.7617 25.741C40.7466 25.6177 40.7173 25.4985 40.6974 25.3768C40.6567 25.1265 40.614 24.8824 40.5558 24.6415C40.5208 24.4991 40.4724 24.3624 40.4309 24.2249C40.3666 24.0108 40.3015 23.7976 40.2225 23.5893C40.1668 23.444 40.1009 23.304 40.0382 23.1624C39.9548 22.9683 39.8649 22.7759 39.7648 22.5875C39.6907 22.4467 39.6081 22.31 39.5267 22.1708C39.4201 21.9926 39.3091 21.8176 39.1935 21.6475C39.0999 21.5141 39.0027 21.3843 38.9026 21.2557C38.7756 21.0893 38.6442 20.9367 38.5058 20.7825C38.396 20.66 38.2833 20.5391 38.1665 20.4224C38.02 20.2751 37.8658 20.1359 37.7083 19.9984C37.5842 19.8901 37.4585 19.7815 37.3283 19.6794C37.2741 19.6366 37.2257 19.5874 37.17 19.5459C37.5846 18.9856 38.2157 18.6259 38.9091 18.5551L41.9999 20.8748C42.2961 21.0974 42.7038 21.0974 43 20.8748L46.0933 18.5551C47.3665 18.6882 48.3333 19.7616 48.3333 21.0417V28.3415Z", "fill", "currentColor"], ["id", "clip0"], ["width", "50", "height", "50", "fill", "white"], ["d", "M36.3663 15.4163H35.0025V3.89099C35.0025 1.74522 33.2546 0 31.1069 0H18.7931C16.6466 0 14.9002 1.74522 14.9002 3.89099V15.4163H13.5338C12.2635 15.4163 11.2305 16.4501 11.2305 17.7208V25.6046C11.2305 26.0094 11.5585 26.3371 11.9633 26.3371C12.3676 26.3371 12.6957 26.0094 12.6957 25.6046V17.7208C12.6957 17.2577 13.0718 16.8808 13.5338 16.8808H36.3663C36.8221 16.8808 37.207 17.2653 37.207 17.7208V39.8808C37.207 44.6529 33.3225 48.5355 28.5477 48.5355H21.3551C16.5802 48.5355 12.6957 44.6529 12.6957 39.8808V28.9875C12.6957 28.5831 12.3676 28.2555 11.9633 28.2555C11.5585 28.2555 11.2305 28.5831 11.2305 28.9875V39.8808C11.2305 45.4605 15.7722 50 21.3551 50H28.5477C34.1301 50 38.6723 45.4605 38.6723 39.8808V17.7208C38.6723 16.4501 37.6377 15.4163 36.3663 15.4163ZM16.3654 15.4163V3.89099C16.3654 2.5528 17.4545 1.46446 18.7931 1.46446H31.1069C32.4471 1.46446 33.5373 2.5528 33.5373 3.89099V15.4163H16.3654Z", "fill", "currentColor"], ["d", "M31.9614 28.7994C31.9614 27.6066 30.9902 26.6361 29.797 26.6361C28.6034 26.6361 27.6325 27.6066 27.6325 28.7994C27.6325 29.7367 28.2303 30.5363 29.0642 30.8376V31.7531C29.0642 31.9378 29.0195 31.9805 28.791 32.1159L25.7244 33.9577L25.7347 24.0478H26.2325C26.4717 24.0478 27.1069 24.0478 27.4105 23.5226C27.7248 22.9793 27.3876 22.393 27.1851 22.0409L26.0582 20.0901C25.9388 19.8833 25.6218 19.3333 25.0141 19.3333C25.0137 19.3333 25.0137 19.3333 25.0137 19.3333C24.3847 19.3333 24.0467 19.9177 23.8445 20.2675L22.718 22.2179C22.5979 22.4254 22.2786 22.9767 22.5826 23.5031C22.897 24.0475 23.5737 24.0475 23.978 24.0475H24.2702L24.2695 33.9771L21.4611 32.2826C20.9316 31.9649 20.9106 31.7917 20.9106 31.3961V29.4983H21.1529C21.8319 29.4983 22.3843 28.9474 22.3843 28.2707V26.3161C22.3843 25.6393 21.8319 25.0885 21.1529 25.0885H19.2005C18.5215 25.0885 17.9691 25.6393 17.9691 26.3161V28.2707C17.9691 28.9478 18.5215 29.4983 19.2005 29.4983H19.4454V31.3961C19.4454 32.3795 19.8109 33.0002 20.7062 33.5377L24.2695 35.656V38.6501C22.8165 38.9774 21.7278 40.2771 21.7278 41.8266C21.7278 43.6226 23.1895 45.0836 24.9863 45.0836C26.783 45.0836 28.2448 43.6226 28.2448 41.8266C28.2448 40.2828 27.1641 38.9873 25.7195 38.6539L25.7225 35.667L29.5002 33.3984L29.5391 33.3752C29.81 33.2146 30.5294 32.7873 30.5294 31.7531V30.8376C31.3633 30.5363 31.9614 29.7367 31.9614 28.7994ZM25.0023 21.1918L25.8064 22.5834H24.1989L25.0023 21.1918ZM19.4344 26.5529H20.919V28.0338H19.4344V26.5529ZM26.7792 41.8266C26.7792 42.815 25.9747 43.6191 24.9859 43.6191C23.9971 43.6191 23.1926 42.815 23.1926 41.8266C23.1926 40.8382 23.9971 40.0341 24.9859 40.0341C25.9747 40.0341 26.7792 40.8382 26.7792 41.8266ZM29.7966 28.1002C30.1823 28.1002 30.4962 28.4141 30.4962 28.7994C30.4962 29.1862 30.1823 29.5009 29.7966 29.5009C29.4113 29.5009 29.0977 29.1862 29.0977 28.7994C29.0977 28.4141 29.4113 28.1002 29.7966 28.1002Z", "fill", "currentColor"], ["d", "M22.5044 11.3361H20.7012C20.0439 11.3361 19.5091 10.8013 19.5091 10.1444V8.34236C19.5091 7.68509 20.0439 7.15027 20.7012 7.15027H22.5044C23.1621 7.15027 23.6969 7.68509 23.6969 8.34236V10.1444C23.6969 10.8013 23.1617 11.3361 22.5044 11.3361ZM20.974 9.87167H22.2317V8.61473H20.974V9.87167ZM22.5044 8.61473H22.5052H22.5044Z", "fill", "currentColor"], ["d", "M29.5338 11.3361H27.7279C27.0721 11.3361 26.5385 10.8013 26.5385 10.1444V8.34236C26.5385 7.68509 27.0721 7.15027 27.7279 7.15027H29.5338C30.1895 7.15027 30.7232 7.68509 30.7232 8.34236V10.1444C30.7232 10.8013 30.1895 11.3361 29.5338 11.3361ZM28.0037 9.87167H29.258V8.61473H28.0037V9.87167ZM29.5338 8.61473H29.5345H29.5338Z", "fill", "currentColor"], ["width", "60", "height", "60", "viewBox", "0 0 60 60", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M55 24H49V3C49 2.20435 48.6839 1.44129 48.1213 0.87868C47.5587 0.316071 46.7957 0 46 0H14C13.2044 0 12.4413 0.316071 11.8787 0.87868C11.3161 1.44129 11 2.20435 11 3V24H5C3.67441 24.0016 2.40356 24.5289 1.46622 25.4662C0.528882 26.4036 0.00158786 27.6744 0 29V55C0.00158786 56.3256 0.528882 57.5964 1.46622 58.5338C2.40356 59.4711 3.67441 59.9984 5 60H55C56.3256 59.9984 57.5964 59.4711 58.5338 58.5338C59.4711 57.5964 59.9984 56.3256 60 55V29C59.9984 27.6744 59.4711 26.4036 58.5338 25.4662C57.5964 24.5289 56.3256 24.0016 55 24ZM55 26C55.7957 26 56.5587 26.3161 57.1213 26.8787C57.6839 27.4413 58 28.2044 58 29V29.41L49 34.375V26H55ZM14 2H46C46.2652 2 46.5196 2.10536 46.7071 2.29289C46.8946 2.48043 47 2.73478 47 3V35.479L30 44.858L13 35.479V3C13 2.73478 13.1054 2.48043 13.2929 2.29289C13.4804 2.10536 13.7348 2 14 2ZM29.517 46.875C29.6649 46.9566 29.8311 46.9994 30 46.9994C30.1689 46.9994 30.3351 46.9566 30.483 46.875L34.983 44.395L48.586 58H11.414L25.02 44.394L29.517 46.875ZM5 26H11V34.375L2 29.41V29C2 28.2044 2.31607 27.4413 2.87868 26.8787C3.44129 26.3161 4.20435 26 5 26ZM2 55V31.694L23.2 43.394L8.586 58H5C4.20435 58 3.44129 57.6839 2.87868 57.1213C2.31607 56.5587 2 55.7957 2 55ZM55 58H51.414L36.8 43.389L58 31.694V55C58 55.7957 57.6839 56.5587 57.1213 57.1213C56.5587 57.6839 55.7957 58 55 58Z", "fill", "currentColor"], ["d", "M21 20H39C39.7956 20 40.5587 19.6839 41.1213 19.1213C41.6839 18.5587 42 17.7956 42 17V9C42 8.20435 41.6839 7.44129 41.1213 6.87868C40.5587 6.31607 39.7956 6 39 6H21C20.2044 6 19.4413 6.31607 18.8787 6.87868C18.3161 7.44129 18 8.20435 18 9V17C18 17.7956 18.3161 18.5587 18.8787 19.1213C19.4413 19.6839 20.2044 20 21 20ZM20 9C20 8.73478 20.1054 8.48043 20.2929 8.29289C20.4804 8.10536 20.7348 8 21 8H39C39.2652 8 39.5196 8.10536 39.7071 8.29289C39.8946 8.48043 40 8.73478 40 9V17C40 17.2652 39.8946 17.5196 39.7071 17.7071C39.5196 17.8946 39.2652 18 39 18H21C20.7348 18 20.4804 17.8946 20.2929 17.7071C20.1054 17.5196 20 17.2652 20 17V9Z", "fill", "currentColor"], ["d", "M22 10H38V12H22V10Z", "fill", "currentColor"], ["d", "M22 14H38V16H22V14Z", "fill", "currentColor"], ["d", "M59.8 8.40006L56.8 4.40008C56.4365 3.9582 55.7836 3.89483 55.3417 4.25833C55.29 4.30083 55.2425 4.34833 55.2 4.40008L52.2 8.40006C52.0701 8.57319 52 8.78369 52 9.00006V55.9999C52 58.209 53.7909 59.9999 56 59.9999C58.2091 59.9999 60 58.209 60 55.9999V9.00006C60 8.78369 59.9298 8.57319 59.8 8.40006ZM58 55.9999C58 57.1045 57.1046 57.9999 56 57.9999C54.8954 57.9999 54 57.1045 54 55.9999V53.9999H58V55.9999ZM58 51.9999H54V49.9999H58V51.9999ZM58 47.9999H54V12.0001H58V47.9999ZM58 10.0001H54V9.33306L56 6.66707L58 9.33306V10.0001Z", "fill", "currentColor"], ["d", "M49.0038 0C49.0025 0 49.0012 0 48.9998 0H4.99998C4.44774 0 3.99999 0.447749 3.99999 0.999997V18.0999C1.67362 18.5784 0.00299999 20.6248 0 22.9999V54.9998C0.00324999 57.7598 2.23999 59.9966 4.99998 59.9998H40.9999C41.265 59.9992 41.5191 59.8939 41.7069 59.7068L49.7068 51.7068C49.7905 51.6218 49.8582 51.5226 49.9068 51.4138C49.9208 51.3828 49.9288 51.3528 49.9398 51.3208C49.9686 51.2368 49.9861 51.1495 49.9918 51.0608C49.9918 51.0398 50.0038 51.0208 50.0038 50.9998V0.999997C50.0038 0.447749 49.5561 0 49.0038 0ZM29.9999 54.9998C29.9999 56.6567 28.6568 57.9998 26.9999 57.9998H4.99998C3.34311 57.9998 1.99999 56.6567 1.99999 54.9998V22.9999C1.99999 21.3431 3.34311 19.9999 4.99998 19.9999H26.9999C28.6568 19.9999 29.9999 21.3431 29.9999 22.9999V54.9998ZM16.9999 12V17.9999H9.99997V12H16.9999ZM9.99997 9.99997V5.99998H16.9999V9.99997H9.99997ZM25.9999 12V17.9999H18.9999V12H25.9999ZM18.9999 9.99997V5.99998H25.9999V9.99997H18.9999ZM27.9999 18.0999V12H34.9999V25.9999H31.9999V22.9999C31.9969 20.6248 30.3263 18.5784 27.9999 18.0999ZM27.9999 9.99997V5.99998H34.9999V9.99997H27.9999ZM41.9999 56.5858V51.9998H46.5858L41.9999 56.5858ZM47.9998 49.9998H40.9999C40.4476 49.9998 39.9999 50.4476 39.9999 50.9998V57.9998H30.9739C31.6356 57.1394 31.9963 56.0853 31.9999 54.9998V27.9999H44.9999C45.5521 27.9999 45.9998 27.5522 45.9998 26.9999V4.99998C45.9998 4.44774 45.5521 3.99999 44.9999 3.99999H8.99997C8.44772 3.99999 7.99997 4.44774 7.99997 4.99998V17.9999H5.99998V1.99999H47.9998V49.9998ZM43.9999 12V25.9999H36.9999V12H43.9999ZM36.9999 9.99997V5.99998H43.9999V9.99997H36.9999Z", "fill", "currentColor"], ["d", "M27.0001 22.9999H5.00018C4.44793 22.9999 4.00018 23.4476 4.00018 23.9999V29.9999C4.00018 30.5521 4.44793 30.9999 5.00018 30.9999H27.0001C27.5524 30.9999 28.0001 30.5521 28.0001 29.9999V23.9999C28.0001 23.4476 27.5524 22.9999 27.0001 22.9999ZM26.0001 28.9999H6.00018V24.9999H26.0001V28.9999Z", "fill", "currentColor"], ["d", "M27.9999 40.9998H21.9999C21.4477 40.9998 20.9999 41.4476 20.9999 41.9998V53.9998C20.9999 54.552 21.4477 54.9998 21.9999 54.9998H27.9999C28.5522 54.9998 28.9999 54.552 28.9999 53.9998V41.9998C28.9999 41.4476 28.5522 40.9998 27.9999 40.9998ZM26.9999 52.9998H22.9999V42.9998H26.9999V52.9998Z", "fill", "currentColor"], ["d", "M27.9999 32.9999H21.9999C21.4477 32.9999 20.9999 33.4476 20.9999 33.9999V37.9999C20.9999 38.5521 21.4477 38.9999 21.9999 38.9999H27.9999C28.5522 38.9999 28.9999 38.5521 28.9999 37.9999V33.9999C28.9999 33.4476 28.5522 32.9999 27.9999 32.9999ZM26.9999 36.9999H22.9999V34.9999H26.9999V36.9999Z", "fill", "currentColor"], ["d", "M18.9999 40.9998H12.9999C12.4477 40.9998 11.9999 41.4476 11.9999 41.9998V45.9998C11.9999 46.552 12.4477 46.9998 12.9999 46.9998H18.9999C19.5522 46.9998 19.9999 46.552 19.9999 45.9998V41.9998C19.9999 41.4476 19.5522 40.9998 18.9999 40.9998ZM17.9999 44.9998H13.9999V42.9998H17.9999V44.9998Z", "fill", "currentColor"], ["d", "M18.9999 32.9999H12.9999C12.4477 32.9999 11.9999 33.4476 11.9999 33.9999V37.9999C11.9999 38.5521 12.4477 38.9999 12.9999 38.9999H18.9999C19.5522 38.9999 19.9999 38.5521 19.9999 37.9999V33.9999C19.9999 33.4476 19.5522 32.9999 18.9999 32.9999ZM17.9999 36.9999H13.9999V34.9999H17.9999V36.9999Z", "fill", "currentColor"], ["d", "M9.99998 40.9998H4C3.44775 40.9998 3 41.4476 3 41.9998V45.9998C3 46.552 3.44775 46.9998 4 46.9998H9.99998C10.5522 46.9998 11 46.552 11 45.9998V41.9998C11 41.4476 10.5522 40.9998 9.99998 40.9998ZM8.99998 44.9998H4.99999V42.9998H8.99998V44.9998Z", "fill", "currentColor"], ["d", "M9.99998 32.9999H4C3.44775 32.9999 3 33.4476 3 33.9999V37.9999C3 38.5521 3.44775 38.9999 4 38.9999H9.99998C10.5522 38.9999 11 38.5521 11 37.9999V33.9999C11 33.4476 10.5522 32.9999 9.99998 32.9999ZM8.99998 36.9999H4.99999V34.9999H8.99998V36.9999Z", "fill", "currentColor"], ["d", "M18.9999 48.9999H12.9999C12.4477 48.9999 11.9999 49.4476 11.9999 49.9999V53.9999C11.9999 54.5521 12.4477 54.9999 12.9999 54.9999H18.9999C19.5522 54.9999 19.9999 54.5521 19.9999 53.9999V49.9999C19.9999 49.4476 19.5522 48.9999 18.9999 48.9999ZM17.9999 52.9999H13.9999V50.9999H17.9999V52.9999Z", "fill", "currentColor"], ["d", "M9.99998 48.9999H4C3.44775 48.9999 3 49.4476 3 49.9999V53.9999C3 54.5521 3.44775 54.9999 4 54.9999H9.99998C10.5522 54.9999 11 54.5521 11 53.9999V49.9999C11 49.4476 10.5522 48.9999 9.99998 48.9999ZM8.99998 52.9999H4.99999V50.9999H8.99998V52.9999Z", "fill", "currentColor"], ["d", "M13.8023 20.4312C13.3453 19.9741 12.6023 19.9741 12.1454 20.4312C11.6872 20.8894 11.6872 21.6312 12.1454 22.0882C12.6024 22.5464 13.3454 22.5464 13.8023 22.0882C14.2604 21.6312 14.2604 20.8894 13.8023 20.4312Z", "fill", "currentColor"], ["d", "M29.6718 52.467C30.1885 51.7672 30.4678 50.924 30.4678 50.0375C30.4678 47.776 28.6279 45.936 26.3663 45.936H6.44509C5.34903 45.936 4.31907 46.3626 3.54481 47.1371C2.7702 47.9115 2.34364 48.9414 2.34364 50.0375C2.34364 50.9456 2.64083 51.7853 3.14227 52.4656C1.27629 53.4467 0 55.4038 0 57.6543V58.8262C0 59.4734 0.524767 59.9981 1.17188 59.9981H31.6395C32.2866 59.9981 32.8114 59.4734 32.8114 58.8262V57.6543C32.8114 55.4048 31.5364 53.4486 29.6718 52.467ZM5.20196 48.7941C5.53372 48.4623 5.97529 48.2796 6.44509 48.2796H26.3663C27.3356 48.2796 28.124 49.0681 28.124 50.0373C28.124 50.5072 27.9412 50.9486 27.6093 51.2805C27.2776 51.6124 26.836 51.7951 26.3662 51.7951H6.44509C5.47583 51.7951 4.68739 51.0065 4.68739 50.0374C4.68739 49.5676 4.87009 49.126 5.20196 48.7941ZM2.34364 57.6543C2.34364 55.7159 3.92075 54.1388 5.85915 54.1388H6.44509H26.3663H26.9522C28.8906 54.1388 30.4678 55.7159 30.4678 57.6543H2.34364Z", "fill", "currentColor"], ["d", "M58.9089 49.2333C58.511 48.6165 58.0361 48.0711 57.4974 47.6122L52.0218 42.8364C51.9791 42.7722 51.9297 42.7113 51.8731 42.6547C51.7779 42.5597 51.6701 42.4855 51.5555 42.4299L48.2441 39.5418L32.9172 26.1718C33.5446 25.5159 33.8901 24.6582 33.8901 23.7461C33.8901 22.8065 33.5243 21.9235 32.8595 21.2588C32.5696 20.9692 32.2401 20.7415 31.8879 20.5748L33.3059 19.1568C33.7022 19.2621 34.1094 19.3161 34.517 19.3161C35.7171 19.3159 36.9174 18.8591 37.831 17.9455C38.7167 17.06 39.2044 15.8828 39.2044 14.6309C39.2044 13.379 38.7167 12.2018 37.8311 11.3162L27.8879 1.37332C27.0023 0.487735 25.8251 0 24.5728 0C23.3211 0 22.1442 0.487735 21.2587 1.37332C20.0348 2.59723 19.6319 4.33501 20.0475 5.89853L5.90001 20.0459C5.50907 19.942 5.10231 19.8871 4.68677 19.8871C3.43426 19.8871 2.25758 20.3745 1.3727 21.2593C-0.454962 23.0869 -0.454962 26.0608 1.3727 27.8886L11.3157 37.8317C12.2297 38.7455 13.43 39.2025 14.6304 39.2025C15.8308 39.2025 17.0312 38.7455 17.9451 37.8317C19.1691 36.6077 19.5719 34.87 19.1564 33.3065L20.5714 31.8914C20.7415 32.2464 20.9722 32.5741 21.2589 32.8606C21.9228 33.5246 22.8056 33.8903 23.745 33.8903C24.6561 33.8903 25.5135 33.5455 26.1703 32.9187L42.4953 51.6751C42.5403 51.7454 42.5928 51.8123 42.6542 51.8737C42.6751 51.8947 42.6974 51.9138 42.7196 51.9328L47.5841 57.5219C47.7051 57.6647 47.8343 57.8051 47.9685 57.9393C49.3046 59.2748 51.0693 59.9996 52.922 59.9996C53.2486 59.9996 53.5783 59.9771 53.9084 59.9314C56.1149 59.6261 58.0219 58.306 59.1401 56.3094C60.3651 54.1212 60.2739 51.343 58.9089 49.2333ZM22.9161 3.03059C23.359 2.58774 23.9475 2.34375 24.5729 2.34375C25.1992 2.34375 25.788 2.58774 26.2308 3.03059L36.1739 12.9736C36.6168 13.4165 36.8606 14.0051 36.8606 14.631C36.8606 15.2569 36.6168 15.8455 36.1738 16.2884C35.2603 17.2021 33.7737 17.2021 32.8602 16.2884L22.9167 6.34489C22.9165 6.34466 22.9164 6.34454 22.9161 6.34431C22.0024 5.43071 22.0024 3.94419 22.9161 3.03059ZM16.2879 36.1744C15.3741 37.0883 13.8868 37.0884 12.973 36.1744L3.02997 26.2314C2.11602 25.3175 2.11602 23.8306 3.02997 22.9165C3.472 22.4744 4.06051 22.2309 4.68677 22.2309C5.3129 22.2309 5.90106 22.4743 6.34298 22.9161L16.2878 32.8608C17.2016 33.7743 17.2016 35.261 16.2879 36.1744ZM21.2217 27.9268L17.945 31.2036L8.00095 21.2595L21.2587 8.00146L31.2027 17.9455L27.92 21.2283C27.9094 21.2384 27.899 21.2482 27.8877 21.2594L21.2621 27.8851C21.2484 27.8985 21.2352 27.9126 21.2217 27.9268ZM25.406 30.3714C25.4037 30.3738 25.4014 30.376 25.3991 30.3783L24.5739 31.2036C24.3525 31.4248 24.0582 31.5467 23.7449 31.5467C23.4316 31.5467 23.1373 31.4248 22.916 31.2035C22.6944 30.982 22.5724 30.6874 22.5724 30.3739C22.5724 30.0671 22.6895 29.7785 22.902 29.5607L29.5583 22.9043C30.0145 22.4607 30.7521 22.4662 31.2029 22.9165C31.4244 23.138 31.5464 23.4326 31.5464 23.7461C31.5464 24.0593 31.4248 24.3531 31.2028 24.5745L30.3824 25.3949C30.3768 25.4004 30.3711 25.4061 30.3656 25.4117L25.406 30.3714ZM27.8327 31.2591L31.2577 27.8342L45.7587 40.4828L40.4672 45.7745L27.8327 31.2591ZM42.0095 47.5466L47.5289 42.027L49.2993 43.5712L43.5518 49.3188L42.0095 47.5466ZM57.0953 55.1645C56.339 56.5148 55.0604 57.406 53.5872 57.61C52.1174 57.8134 50.6733 57.3293 49.6254 56.2819C49.5353 56.1919 49.4491 56.098 49.3687 56.0028C49.3649 55.9984 49.3612 55.9939 49.3573 55.9896L45.094 51.0909L51.0695 45.1153L55.9621 49.3829C55.9658 49.3862 55.9695 49.3894 55.9734 49.3926C56.3396 49.704 56.6645 50.0779 56.9403 50.5052C57.8265 51.8745 57.8886 53.7472 57.0953 55.1645Z", "fill", "currentColor"], ["d", "M22.0878 12.1447C21.63 11.6871 20.8882 11.6871 20.4305 12.1447L15.4584 17.1168C15.0008 17.5744 15.0008 18.3164 15.4584 18.7739C15.6873 19.0028 15.9872 19.1172 16.2871 19.1172C16.587 19.1172 16.8868 19.0027 17.1157 18.7739L22.0878 13.8019C22.5454 13.3444 22.5454 12.6025 22.0878 12.1447Z", "fill", "currentColor"], ["width", "42", "height", "60", "viewBox", "0 0 42 60", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M39.3616 0H2.63671C1.25594 0 0.136719 1.11922 0.136719 2.49999V50.8249C0.136719 52.2056 1.25594 53.3249 2.63671 53.3249H6.5242V58.7498C6.5242 59.4402 7.08373 59.9998 7.77404 60C8.13951 60 8.4867 59.8402 8.7242 59.5623L11.4742 56.3624L14.2242 59.5623C14.6729 60.087 15.462 60.1486 15.9865 59.7C16.2642 59.4625 16.4242 59.1153 16.4242 58.7498V53.3249H39.3616C40.7424 53.3249 41.8616 52.2056 41.8616 50.8249V2.49999C41.8616 1.11922 40.7424 0 39.3616 0ZM12.4242 53.5874C11.9754 53.0627 11.1864 53.0011 10.6618 53.4497C10.6125 53.4919 10.5665 53.538 10.5242 53.5874L9.02419 55.3374V50.5874C10.6034 51.1822 12.345 51.1822 13.9242 50.5874V55.3374L12.4242 53.5874ZM16.0117 43.9374C16.0118 46.4516 13.9882 48.4975 11.4742 48.5249H11.4242C8.8906 48.5249 6.8367 46.471 6.8367 43.9374C6.8367 41.4038 8.8906 39.3499 11.4242 39.3499C13.9578 39.3499 16.0117 41.4038 16.0117 43.9374ZM39.2991 50.8124H16.4242V48.9999C19.2256 46.2661 19.2804 41.7788 16.5467 38.9774C13.8129 36.176 9.3256 36.1212 6.5242 38.8549C3.7228 41.5886 3.66796 46.076 6.4017 48.8774C6.44201 48.9188 6.4828 48.9596 6.5242 48.9999V50.8124H2.63671V2.49999H39.3616L39.2991 50.8124Z", "fill", "currentColor"], ["d", "M31.8617 9.88745H10.1367C9.4464 9.88745 8.88672 10.4471 8.88672 11.1374C8.88672 11.8278 9.4464 12.3874 10.1367 12.3874H31.8617C32.552 12.3874 33.1116 11.8278 33.1116 11.1374C33.1116 10.4471 32.5521 9.88745 31.8617 9.88745Z", "fill", "currentColor"], ["d", "M31.8617 17.075H10.1367C9.4464 17.075 8.88672 17.6346 8.88672 18.325C8.88672 19.0153 9.4464 19.575 10.1367 19.575H31.8617C32.552 19.575 33.1116 19.0153 33.1116 18.325C33.1116 17.6346 32.5521 17.075 31.8617 17.075Z", "fill", "currentColor"], ["d", "M31.8617 24.2625H10.1367C9.4464 24.2625 8.88672 24.8221 8.88672 25.5124C8.88672 26.2028 9.4464 26.7624 10.1367 26.7624H31.8617C32.552 26.7624 33.1116 26.2028 33.1116 25.5124C33.1116 24.8221 32.5521 24.2625 31.8617 24.2625Z", "fill", "currentColor"], ["d", "M31.8617 31.45H10.1367C9.4464 31.45 8.88672 32.0096 8.88672 32.7C8.88672 33.3903 9.4464 33.95 10.1367 33.95H31.8617C32.552 33.95 33.1116 33.3903 33.1116 32.7C33.1116 32.0096 32.5521 31.45 31.8617 31.45Z", "fill", "currentColor"], ["d", "M31.8625 38.6375H21.9375C21.2472 38.6375 20.6875 39.1971 20.6875 39.8874C20.6875 40.5778 21.2472 41.1374 21.9375 41.1374H31.8625C32.5528 41.1374 33.1125 40.5778 33.1125 39.8874C33.1125 39.1971 32.5529 38.6375 31.8625 38.6375Z", "fill", "currentColor"], ["width", "40", "height", "40", "viewBox", "0 0 40 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M27.3848 19.3617H0.638298C0.285787 19.3617 0 19.6475 0 20V39.3617C0 39.7142 0.285787 40 0.638298 40H27.3848C27.7373 40 28.0231 39.7142 28.0231 39.3617V20C28.0231 19.6475 27.7373 19.3617 27.3848 19.3617ZM26.7465 38.7234H1.2766V20.6383H26.7465V38.7234Z", "fill", "currentColor"], ["d", "M31.3771 12.9078H4.63067C4.27816 12.9078 3.99237 13.1936 3.99237 13.5461V17.4468C3.99237 17.7993 4.27816 18.085 4.63067 18.085C4.98318 18.085 5.26897 17.7993 5.26897 17.4468V14.1844H30.7388V32.2695H29.938C29.5855 32.2695 29.2997 32.5553 29.2997 32.9078C29.2997 33.2603 29.5855 33.5461 29.938 33.5461H31.3771C31.7296 33.5461 32.0154 33.2603 32.0154 32.9078V13.5461C32.0154 13.1935 31.7296 12.9078 31.3771 12.9078Z", "fill", "currentColor"], ["d", "M35.3693 6.45392H8.62286C8.27035 6.45392 7.98456 6.73971 7.98456 7.09222V10.9929C7.98456 11.3454 8.27035 11.6312 8.62286 11.6312C8.97537 11.6312 9.26115 11.3454 9.26115 10.9929V7.73051H34.731V25.8156H33.9303C33.5777 25.8156 33.292 26.1014 33.292 26.4539C33.292 26.8064 33.5777 27.0922 33.9303 27.0922H35.3693C35.7218 27.0922 36.0076 26.8064 36.0076 26.4539V7.09222C36.0076 6.73971 35.7218 6.45392 35.3693 6.45392Z", "fill", "currentColor"], ["d", "M39.3619 0H12.6154C12.2629 0 11.9771 0.285787 11.9771 0.638298V3.77974C11.9771 4.13225 12.2629 4.41804 12.6154 4.41804C12.9679 4.41804 13.2537 4.13225 13.2537 3.77974V1.2766H38.7236V19.3617H37.9227C37.5702 19.3617 37.2844 19.6475 37.2844 20C37.2844 20.3525 37.5702 20.6383 37.9227 20.6383H39.3619C39.7144 20.6383 40.0002 20.3525 40.0002 20V0.638298C40.0002 0.285787 39.7144 0 39.3619 0Z", "fill", "currentColor"], ["width", "40", "height", "26", "viewBox", "0 0 40 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M20.1145 19.65C19.7537 19.5786 19.4141 19.8542 19.4141 20.2243C19.4141 20.5433 19.6719 20.8106 20.0003 20.8106C20.3253 20.8106 20.5866 20.5454 20.5866 20.2243C20.5866 19.9655 20.4102 19.7113 20.1145 19.65Z", "fill", "currentColor"], ["d", "M21.4086 0.267004C21.0854 0.245031 20.8056 0.488257 20.7833 0.811134C20.7607 1.13401 21.0042 1.41416 21.3274 1.43675C31.0152 2.11088 38.5302 9.93195 38.8265 19.6387H37.7752C37.4679 10.0885 29.6432 2.43956 20.0002 2.43956C10.3661 2.43956 2.5328 10.0793 2.22518 19.6387H1.17385C1.47018 9.93225 8.98515 2.11088 18.6733 1.43675C18.9962 1.41416 19.2397 1.13401 19.2171 0.811134C19.1948 0.488257 18.9138 0.245031 18.5918 0.267004C8.37541 0.978065 0.290669 9.34814 0.000446206 19.6521C-0.017254 20.2878 0.493917 20.8112 1.1296 20.8112H14.4344C14.4524 20.9815 14.4777 21.1502 14.5107 21.3172C15.0222 23.9002 17.2985 25.821 20.0002 25.821C22.8801 25.821 25.2712 23.6393 25.5657 20.8112H38.8708C39.5068 20.8112 40.0176 20.2878 39.9996 19.6521C39.7094 9.33167 31.6079 0.976845 21.4086 0.267004ZM25.526 19.6387C24.9428 19.6387 24.4597 20.0797 24.4024 20.6644C24.1787 22.9358 22.2863 24.6488 20.0002 24.6488C17.7144 24.6488 15.8217 22.9358 15.598 20.6644C15.5406 20.08 15.0576 19.6387 14.4744 19.6387H12.2286C12.5295 15.614 15.9001 12.4313 20.0002 12.4313C20.8425 12.4313 21.6643 12.5635 22.4514 12.8247L19.9608 17.1387C18.2769 17.1601 16.913 18.5358 16.913 20.2249C16.913 21.9272 18.2979 23.3124 20.0002 23.3124C21.0451 23.3124 22.011 22.7893 22.5844 21.9138C22.7617 21.6431 22.6861 21.2796 22.4151 21.1023C22.1441 20.925 21.7806 21.0007 21.6036 21.2717C21.2478 21.8152 20.6484 22.1399 20.0002 22.1399C18.9443 22.1399 18.0855 21.2809 18.0855 20.2249C18.0855 19.169 18.9443 18.31 20.0002 18.31C20.6643 18.31 21.2624 18.6569 21.6036 19.1782C21.7809 19.4492 22.1444 19.5249 22.4151 19.3476C22.6235 19.2111 22.716 18.9646 22.6668 18.7348L25.1726 14.3945C26.701 15.7453 27.6235 17.6047 27.7727 19.6387H25.526ZM25.0509 10.6671C25.1592 10.4794 25.3933 10.4129 25.584 10.5151C25.7821 10.6213 25.8535 10.8701 25.7409 11.0654L24.5006 13.2132C24.229 13.6838 22.1642 17.2602 21.8703 17.7692C21.6585 17.6081 21.4394 17.4802 21.1797 17.3718L25.0509 10.6671ZM28.9471 19.6387C28.7911 17.1848 27.658 14.9448 25.7689 13.3612L26.7562 11.6516C27.2002 10.8826 26.9201 9.90143 26.1379 9.48181C25.3856 9.07867 24.4622 9.34173 24.0355 10.0809L23.048 11.7914C22.073 11.4383 21.0503 11.2589 20.0002 11.2589C15.2535 11.2589 11.357 14.9671 11.0539 19.6387H3.39737C3.4877 17.0423 4.1777 14.596 5.33158 12.4329L6.335 13.0124C6.61576 13.1744 6.97404 13.078 7.13578 12.7979C7.29783 12.5174 7.2017 12.1588 6.92124 11.9971L5.91965 11.4188C7.25693 9.28833 9.06327 7.48077 11.1934 6.14379L11.7723 7.14599C11.9344 7.42675 12.293 7.52227 12.5731 7.36053C12.8533 7.19878 12.9494 6.8402 12.7876 6.56005L12.2078 5.55602C14.3709 4.40215 16.8178 3.71397 19.4139 3.62334V4.78423C19.4139 5.10802 19.6764 5.37047 20.0002 5.37047C20.324 5.37047 20.5864 5.10802 20.5864 4.78423V3.62334C23.1826 3.71397 25.6295 4.40215 27.7926 5.55602L27.213 6.56005C27.051 6.8402 27.1471 7.19878 27.4276 7.36053C27.708 7.52258 28.0666 7.42645 28.2281 7.14599L28.807 6.14379C30.9374 7.48107 32.7438 9.28833 34.0807 11.4188L33.0791 11.9971C32.7987 12.1588 32.7026 12.5174 32.8646 12.7979C33.0267 13.0786 33.3852 13.1741 33.6654 13.0124L34.6688 12.4329C35.8224 14.5963 36.5124 17.0426 36.603 19.639H28.9471V19.6387Z", "fill", "currentColor"], ["d", "M20.6666 21.3334C20.2987 21.3334 20 21.6321 20 22.0001V30.0001C20 30.368 20.2987 30.6667 20.6666 30.6667H27.3333C27.7012 30.6667 27.9999 30.368 27.9999 30.0001C27.9999 29.6321 27.7012 29.3334 27.3333 29.3334H21.3333V22.0001C21.3334 21.6321 21.0347 21.3334 20.6666 21.3334Z", "fill", "currentColor"], ["d", "M13.3334 26V18C13.3334 17.632 13.0347 17.3334 12.6667 17.3334H4.66672C4.29875 17.3334 4.00008 17.632 4.00008 18C4.00008 18.368 4.29875 18.6666 4.66672 18.6666H12V25.3333H8.66664H4.66664C4.29867 25.3333 4 25.632 4 25.9999V33.9999C4 34.3679 4.29867 34.6666 4.66664 34.6666C5.03461 34.6666 5.33328 34.3679 5.33328 33.9999V26.6666H8V38.6666H2.66664C1.93133 38.6666 1.33328 38.0686 1.33328 37.3332V22.6666H8.66664C9.03461 22.6666 9.33328 22.368 9.33328 22C9.33328 21.632 9.03461 21.3334 8.66664 21.3334H1.33336V14.6667H8.66672C9.03469 14.6667 9.33336 14.368 9.33336 14.0001C9.33336 13.6321 9.03469 13.3334 8.66672 13.3334H5.33336V8.6668C5.33336 8.29883 5.03469 8.00016 4.66672 8.00016C4.29875 8.00016 4.00008 8.29883 4.00008 8.6668V13.3334H1.33336V2.66664C1.33336 1.93133 1.93133 1.33328 2.66672 1.33328H4V4.66664C4 5.03461 4.29867 5.33328 4.66664 5.33328H8V10C8 10.368 8.29867 10.6666 8.66664 10.6666C9.03461 10.6666 9.33328 10.368 9.33328 10V4.66664C9.33328 4.29867 9.03461 4 8.66664 4H5.33336V1.33336H24V13.3334H13.3334V5.33336H20V9.33336H17.3334V8.66672C17.3334 8.29875 17.0347 8.00008 16.6667 8.00008C16.2987 8.00008 16.0001 8.29875 16.0001 8.66672V10C16.0001 10.368 16.2987 10.6666 16.6667 10.6666H20.6667C21.0347 10.6666 21.3334 10.368 21.3334 10V4.66664C21.3334 4.29867 21.0347 4 20.6667 4H12.6667C12.2987 4 12.0001 4.29867 12.0001 4.66664V14C12.0001 14.368 12.2987 14.6666 12.6667 14.6666H31.3334C31.7013 14.6666 32 14.368 32 14C32 13.632 31.7013 13.3334 31.3334 13.3334H25.3334V0.666641C25.3334 0.298672 25.0347 0 24.6667 0H2.66672C1.19602 0 0 1.19602 0 2.66664V37.3333C0 38.804 1.19602 40 2.66664 40H8.66664C9.03461 40 9.33328 39.7013 9.33328 39.3334V26.6666H12.6666C13.0347 26.6666 13.3334 26.368 13.3334 26Z", "fill", "currentColor"], ["d", "M28.6663 10.6665C29.0342 10.6665 29.3329 10.3678 29.3329 9.99982V4.66646C29.3329 4.29849 29.0342 3.99982 28.6663 3.99982C28.2983 3.99982 27.9996 4.29849 27.9996 4.66646V9.99982C27.9996 10.3678 28.2983 10.6665 28.6663 10.6665Z", "fill", "currentColor"], ["d", "M35.3334 26.6667C35.7013 26.6667 36 26.368 36 26.0001V18.0001C36 17.6321 35.7013 17.3334 35.3334 17.3334H20.6666C20.2987 17.3334 20 17.6321 20 18.0001C20 18.368 20.2987 18.6667 20.6666 18.6667H34.6666V26.0001C34.6666 26.368 34.9653 26.6667 35.3334 26.6667Z", "fill", "currentColor"], ["d", "M17.3336 18.0001C17.3336 17.6321 17.0349 17.3334 16.6669 17.3334C16.2989 17.3334 16.0003 17.6321 16.0003 18.0001V26.0001C16.0003 26.368 16.2989 26.6667 16.6669 26.6667C17.0349 26.6667 17.3336 26.368 17.3336 26.0001V18.0001Z", "fill", "currentColor"], ["d", "M37.3337 0H28.667C28.299 0 28.0004 0.298672 28.0004 0.666641C28.0004 1.03461 28.299 1.33328 28.667 1.33328H37.3336C38.069 1.33328 38.667 1.93125 38.667 2.66664V9.33328H33.3336V5.33328H35.3336C35.7016 5.33328 36.0003 5.03461 36.0003 4.66664C36.0003 4.29867 35.7016 4 35.3336 4H32.667C32.299 4 32.0004 4.29867 32.0004 4.66664V10C32.0004 10.368 32.299 10.6666 32.667 10.6666H34.667V14C34.667 14.368 34.9657 14.6666 35.3336 14.6666C35.7016 14.6666 36.0003 14.368 36.0003 14V10.6666H38.6669V29.3333H35.3336C34.9656 29.3333 34.6669 29.632 34.6669 29.9999C34.6669 30.3679 34.9656 30.6666 35.3336 30.6666H38.6669V33.3332H32.0004V22C32.0004 21.632 31.7017 21.3334 31.3337 21.3334H24.6671C24.2991 21.3334 24.0004 21.632 24.0004 22V26C24.0004 26.368 24.2991 26.6666 24.6671 26.6666H27.3337C27.7017 26.6666 28.0004 26.368 28.0004 26C28.0004 25.632 27.7017 25.3334 27.3337 25.3334H25.3337V22.6667H30.6671V34C30.6671 34.368 30.9658 34.6666 31.3337 34.6666H38.6671V37.3333C38.6671 38.0686 38.0691 38.6666 37.3337 38.6666H13.3337V34.6666H27.3337C27.7017 34.6666 28.0004 34.368 28.0004 34C28.0004 33.632 27.7017 33.3334 27.3337 33.3334H12.667C12.299 33.3334 12.0004 33.632 12.0004 34V39.3334C12.0004 39.7013 12.299 40 12.667 40H37.3336C38.8043 40 40.0004 38.804 40.0004 37.3334V2.66664C40.0004 1.19602 38.8043 0 37.3337 0Z", "fill", "currentColor"], ["d", "M16.667 29.3333H12.667C12.299 29.3333 12.0004 29.632 12.0004 30C12.0004 30.3679 12.299 30.6666 12.667 30.6666H16.667C17.035 30.6666 17.3336 30.3679 17.3336 30C17.3336 29.632 17.0351 29.3333 16.667 29.3333Z", "fill", "currentColor"], ["d", "M24.6875 20.3125C24.2563 20.3125 23.9062 20.6625 23.9062 21.0938C23.9062 21.525 24.2563 21.875 24.6875 21.875C25.1187 21.875 25.4688 21.525 25.4688 21.0938C25.4688 20.6625 25.1187 20.3125 24.6875 20.3125Z", "fill", "#282828"], ["d", "M7.98248 28.8895L0.169977 38.7332C-0.016485 38.9679 -0.0518853 39.2886 0.0784247 39.5584C0.208735 39.8285 0.482172 40 0.781855 40H39.2193C39.519 40 39.7925 39.8285 39.9228 39.5584C40.0534 39.2886 40.0177 38.9679 39.8312 38.7332L32.0187 28.8895C31.8707 28.7027 31.6452 28.5938 31.4068 28.5938H24.5633L30.4059 19.4299C31.7764 17.3752 32.5006 14.9789 32.5006 12.5C32.5006 5.6076 26.8933 0 20.0006 0C13.1079 0 7.5006 5.6076 7.5006 12.5C7.5006 14.9789 8.22478 17.3749 9.59533 19.4299L15.4379 28.5938H8.59435C8.35601 28.5938 8.13079 28.7027 7.98248 28.8895ZM5.06561 35.0781H9.78942L7.12341 38.4375H2.39929L5.06561 35.0781ZM16.4343 30.1562L18.576 33.5156H13.0243L15.6906 30.1562H16.4343ZM23.5672 30.1562H24.3109L26.9769 33.5156H21.4255L23.5672 30.1562ZM28.2172 35.0781L30.8832 38.4375H9.11803L11.7844 35.0781H28.2172ZM32.8781 38.4375L30.2118 35.0781H34.9359L37.6019 38.4375H32.8781ZM33.6957 33.5156H28.9718L26.3055 30.1562H31.0296L33.6957 33.5156ZM10.8996 18.5693C9.69817 16.7706 9.0631 14.6719 9.0631 12.5C9.0631 6.46912 13.9697 1.5625 20.0006 1.5625C26.0315 1.5625 30.9381 6.46912 30.9381 12.5C30.9381 14.6719 30.303 16.7706 29.1019 18.5693C29.0985 18.5739 29.0958 18.5785 29.0927 18.5831C28.5797 19.3878 20.3958 32.2241 20.0006 32.8436C19.0066 31.2845 11.9208 20.1706 10.9085 18.5831C10.9058 18.5785 10.9027 18.5739 10.8996 18.5693ZM13.6957 30.1562L11.0297 33.5156H6.30553L8.97186 30.1562H13.6957Z", "fill", "#282828"], ["d", "M20 20.3125C24.2889 20.3125 27.8125 16.8393 27.8125 12.5C27.8125 8.19214 24.3079 4.6875 20 4.6875C15.6921 4.6875 12.1875 8.19214 12.1875 12.5C12.1875 16.8405 15.7123 20.3125 20 20.3125ZM20 6.25C23.4464 6.25 26.25 9.05365 26.25 12.5C26.25 15.9784 23.4238 18.75 20 18.75C16.5753 18.75 13.75 15.9784 13.75 12.5C13.75 9.05365 16.5536 6.25 20 6.25Z", "fill", "#282828"], ["d", "M23.2907 22.9785C22.9214 22.7557 22.4411 22.8747 22.2183 23.2443L19.3307 28.0349C19.108 28.4045 19.227 28.8846 19.5966 29.1073C19.9676 29.331 20.4471 29.2096 20.6689 28.8415L23.5565 24.0509C23.7793 23.6813 23.6603 23.2013 23.2907 22.9785Z", "fill", "#282828"], ["width", "40", "height", "40", "fill", "white"], ["d", "M5.00098 40H34.9997C36.7229 40 38.1247 38.5981 38.1247 36.875V33.125V3.125C38.1247 1.40188 36.7229 0 34.9997 0C34.6541 0 34.3747 0.28 34.3747 0.625V32.5H31.2497C31.2491 32.155 30.9697 31.8762 30.6247 31.8762C30.2797 31.8762 30.0003 32.155 29.9997 32.5H28.1247V31.25C28.1247 30.9044 27.8454 30.625 27.4997 30.625C27.1541 30.625 26.8747 30.9044 26.8747 31.25V32.5H24.9997C24.9991 32.155 24.7197 31.8762 24.3747 31.8762C24.0297 31.8762 23.7504 32.155 23.7497 32.5H21.8747V31.25C21.8747 30.9044 21.5954 30.625 21.2497 30.625C20.9041 30.625 20.6247 30.9044 20.6247 31.25V32.5H18.7497C18.7491 32.155 18.4697 31.8762 18.1247 31.8762C17.7797 31.8762 17.5004 32.155 17.4997 32.5H15.6247V31.25C15.6247 30.9044 15.3454 30.625 14.9997 30.625C14.6541 30.625 14.3747 30.9044 14.3747 31.25V32.5H12.4997C12.4991 32.155 12.2197 31.8762 11.8747 31.8762C11.5297 31.8762 11.2504 32.155 11.2497 32.5H9.37473V31.25C9.37473 30.9044 9.09535 30.625 8.74973 30.625C8.4041 30.625 8.12473 30.9044 8.12473 31.25V32.5H6.24973C6.2491 32.155 5.96973 31.8762 5.62473 31.8762C5.27973 31.8762 5.00035 32.155 4.99973 32.5H2.50098C2.15535 32.5 1.87598 32.7794 1.87598 33.125V36.875C1.87598 38.5981 3.27785 40 5.00098 40ZM35.6247 1.365C36.3503 1.62437 36.8747 2.31125 36.8747 3.125V32.5H35.6247V1.365ZM3.12598 33.75H36.8747V36.875C36.8747 37.9087 36.0335 38.75 34.9997 38.75H5.00098C3.96723 38.75 3.12598 37.9087 3.12598 36.875V33.75Z", "fill", "#282828"], ["d", "M7.50211 29.9975H28.1196C30.1852 29.9975 31.8652 28.3175 31.8652 26.2525C31.8652 26.2512 31.8646 26.2506 31.8646 26.2493V7.50246C31.8646 7.42121 31.8484 7.33996 31.8165 7.26371C31.7846 7.18683 31.739 7.11808 31.6809 7.05996L27.9321 3.31058C27.874 3.25246 27.8052 3.20683 27.7284 3.17496C27.6521 3.14308 27.5709 3.12683 27.4896 3.12683H10.619C10.2734 3.12683 9.99398 3.40683 9.99398 3.75183V25.6268H4.38086C4.03523 25.6268 3.75586 25.9062 3.75586 26.2518C3.75586 28.3175 5.43586 29.9975 7.50211 29.9975ZM5.09461 26.8775H10.5884C10.5996 26.8781 10.6077 26.8837 10.619 26.8837C10.6302 26.8837 10.6384 26.8781 10.6496 26.8775H24.4302C24.5502 27.5893 24.8715 28.2318 25.3334 28.7475H7.50211C6.34273 28.7475 5.37461 27.95 5.09461 26.8775ZM28.1146 5.26121L29.7309 6.87746H28.1146V5.26121ZM11.244 4.37746H26.8646V7.50246C26.8646 7.84746 27.144 8.12746 27.4896 8.12746H30.6146V26.2587C30.6115 27.6312 29.494 28.7475 28.1196 28.7475C26.7434 28.7475 25.6234 27.6281 25.6234 26.2525C25.6234 25.9068 25.344 25.6275 24.9984 25.6275H11.244V4.37746Z", "fill", "#282828"], ["d", "M15.001 14.375H26.8735C27.2191 14.375 27.4985 14.095 27.4985 13.75C27.4985 13.405 27.2191 13.125 26.8735 13.125H15.001C14.6554 13.125 14.376 13.405 14.376 13.75C14.376 14.095 14.6554 14.375 15.001 14.375Z", "fill", "#282828"], ["d", "M15.001 16.8813H26.8735C27.2191 16.8813 27.4985 16.6013 27.4985 16.2563C27.4985 15.9113 27.2191 15.6313 26.8735 15.6313H15.001C14.6554 15.6313 14.376 15.9113 14.376 16.2563C14.376 16.6013 14.6554 16.8813 15.001 16.8813Z", "fill", "#282828"], ["d", "M15.001 19.3875H26.8735C27.2191 19.3875 27.4985 19.1075 27.4985 18.7625C27.4985 18.4175 27.2191 18.1375 26.8735 18.1375H15.001C14.6554 18.1375 14.376 18.4175 14.376 18.7625C14.376 19.1075 14.6554 19.3875 15.001 19.3875Z", "fill", "#282828"], ["d", "M27.4985 21.2682C27.4985 20.9226 27.2191 20.6432 26.8735 20.6432H15.001C14.6554 20.6432 14.376 20.9226 14.376 21.2682C14.376 21.6138 14.6554 21.8932 15.001 21.8932H26.8735C27.2191 21.8932 27.4985 21.6138 27.4985 21.2682Z", "fill", "#282828"], ["width", "77", "height", "94", "viewBox", "0 0 77 94", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M44.1358 93.9643C43.7714 93.9643 43.407 93.782 43.0426 93.5996C42.496 93.235 42.3138 92.5056 42.3138 91.7763L44.5002 80.2891L35.5724 72.0839C35.0258 71.5369 34.8436 70.8076 35.0258 70.2605C35.208 69.5312 35.7546 69.1665 36.4834 68.9842L48.873 67.3432L54.339 56.7676C54.7034 56.2206 55.25 55.856 55.9788 55.856C56.7076 55.856 57.2542 56.2206 57.6186 56.7676L63.0846 67.3432L75.4741 68.9842C76.2029 69.1665 76.7495 69.5312 76.9317 70.2605C77.1139 70.9899 76.9317 71.7192 76.3851 72.0839L67.4573 80.2891L69.6437 91.7763C69.8259 92.5056 69.4615 93.235 68.9149 93.5996C68.3683 93.9643 67.6395 94.1466 67.0929 93.782L55.9788 88.3119L44.8646 93.782C44.6824 93.9643 44.5002 93.9643 44.1358 93.9643ZM56.161 84.4828C56.5254 84.4828 56.7076 84.4828 56.8898 84.6651L65.6353 88.8589L63.9956 79.9244C63.8134 79.3774 64.1778 78.648 64.5422 78.2834L71.2835 72.0839L61.8092 70.8076C61.2626 70.8076 60.716 70.4429 60.5338 69.8959L56.161 61.6907L51.7882 69.8959C51.4238 70.4429 51.0594 70.8076 50.3306 70.8076L40.8562 72.0839L47.5976 78.2834C48.1442 78.648 48.3264 79.3774 48.1442 79.9244L46.5044 88.8589L55.25 84.6651C55.6144 84.4828 55.7966 84.4828 56.161 84.4828Z", "fill", "currentColor"], ["d", "M39.2164 85.3945H12.4331C4.23408 85.3945 0.590088 81.7478 0.590088 73.9073V11.5482C0.590088 3.52543 4.23408 0.0610352 12.4331 0.0610352H57.0719C65.2709 0.0610352 68.7327 3.70776 68.7327 11.5482V59.5027C68.7327 60.5968 68.0039 61.3261 66.9107 61.3261C65.8175 61.3261 65.0887 60.5968 65.0887 59.5027V11.5482C65.0887 5.53113 63.0845 3.70777 57.0719 3.70777H12.4331C6.23827 3.70777 4.23408 5.71347 4.23408 11.5482V73.9073C4.23408 79.9244 6.23827 81.7478 12.4331 81.7478H39.3986C40.4918 81.7478 41.2206 82.4772 41.2206 83.5712C41.2206 84.6652 40.3096 85.3945 39.2164 85.3945ZM50.1483 50.3859H19.1744C18.0812 50.3859 17.3524 49.6566 17.3524 48.5626C17.3524 47.4685 18.0812 46.7392 19.1744 46.7392H50.1483C51.2415 46.7392 51.9703 47.4685 51.9703 48.5626C51.9703 49.6566 51.0593 50.3859 50.1483 50.3859ZM50.1483 36.346H19.1744C18.0812 36.346 17.3524 35.6167 17.3524 34.5226C17.3524 33.4286 18.0812 32.6993 19.1744 32.6993H50.1483C51.2415 32.6993 51.9703 33.4286 51.9703 34.5226C51.9703 35.6167 51.0593 36.346 50.1483 36.346ZM50.1483 22.3061H19.1744C18.0812 22.3061 17.3524 21.5767 17.3524 20.4827C17.3524 19.3887 18.0812 18.6594 19.1744 18.6594H50.1483C51.2415 18.6594 51.9703 19.3887 51.9703 20.4827C51.9703 21.5767 51.0593 22.3061 50.1483 22.3061Z", "fill", "currentColor"], ["d", "M27.3099 16.4859C27.303 16.4654 27.2948 16.4454 27.2853 16.4259C27.2742 16.3922 27.2606 16.3594 27.2446 16.3279C27.2304 16.3065 27.2151 16.2861 27.1986 16.2665C27.1812 16.24 27.1618 16.2148 27.1406 16.1912C27.1209 16.1737 27.1001 16.1572 27.0786 16.1419C27.0574 16.1226 27.0352 16.1046 27.0119 16.0879L20.3453 12.0879C20.134 11.9609 19.8699 11.9609 19.6586 12.0879L12.992 16.0879C12.9673 16.1041 12.9439 16.1221 12.922 16.1419C12.9002 16.1572 12.8793 16.1737 12.8593 16.1912C12.8386 16.2148 12.8194 16.2397 12.802 16.2659C12.7851 16.2855 12.7695 16.3062 12.7553 16.3279C12.7396 16.3586 12.7263 16.3904 12.7153 16.4232C12.7058 16.4439 12.6973 16.465 12.69 16.4865C12.6744 16.5428 12.6666 16.6009 12.6666 16.6592V23.3258C12.6667 23.5598 12.7894 23.7767 12.99 23.8972L19.6566 27.8972L19.664 27.9005L19.6713 27.9058C19.7063 27.924 19.7429 27.939 19.7806 27.9505C19.796 27.9558 19.8106 27.9645 19.8266 27.9692C19.9401 28.0002 20.0599 28.0002 20.1733 27.9692C20.1893 27.9645 20.204 27.9558 20.2193 27.9505C20.257 27.939 20.2936 27.924 20.3286 27.9058L20.336 27.9005L20.3433 27.8972L27.0099 23.8972C27.2105 23.7767 27.3332 23.5598 27.3333 23.3258V16.6592C27.3334 16.6007 27.3254 16.5424 27.3099 16.4859ZM20 13.4365L22.0373 14.6592L16.6666 17.8819L14.6293 16.6592L20 13.4365ZM19.3333 26.1478L14 22.9478V17.8365L19.3333 21.0365V26.1478ZM20 19.8818L17.9626 18.6592L23.3333 15.4365L25.3706 16.6592L20 19.8818ZM25.9999 22.9485L20.6666 26.1485V21.0365L25.9999 17.8365V22.9485Z", "fill", "#282828"], ["d", "M20.5333 0.259174C20.291 -0.0354083 19.8557 -0.0776582 19.5611 0.164675C19.5266 0.193008 19.495 0.224675 19.4666 0.259174L17.4666 2.92584L18.5333 3.72583L19.3333 2.65917V7.99249H20.6666V2.65917L21.4666 3.72583L22.5333 2.92584L20.5333 0.259174Z", "fill", "#282828"], ["d", "M21.4666 36.2592L20.6666 37.3259V31.9926H19.3333V37.3259L18.5333 36.2592L17.4666 37.0592L19.4666 39.7259C19.6875 40.0205 20.1054 40.0801 20.4 39.8592C20.4505 39.8213 20.4954 39.7764 20.5333 39.7259L22.5333 37.0592L21.4666 36.2592Z", "fill", "#282828"], ["d", "M20.6666 9.32605H19.3333V10.6594H20.6666V9.32605Z", "fill", "#282828"], ["d", "M20.6666 29.3258H19.3333V30.6591H20.6666V29.3258Z", "fill", "#282828"], ["d", "M7.99998 19.3259H2.66666L3.73332 18.5259L2.93332 17.4592L0.266662 19.4592C-0.0279203 19.6801 -0.0875868 20.098 0.133329 20.3926C0.171246 20.4431 0.216163 20.488 0.266662 20.5259L2.93332 22.5259L3.73332 21.4592L2.66666 20.6592H7.99998V19.3259Z", "fill", "#282828"], ["d", "M39.8666 19.5926C39.8287 19.5421 39.7838 19.4971 39.7333 19.4592L37.0666 17.4592L36.2666 18.5259L37.3333 19.3259H31.9999V20.6592H37.3333L36.2666 21.4592L37.0666 22.5259L39.7333 20.5259C40.0278 20.305 40.0875 19.8871 39.8666 19.5926Z", "fill", "#282828"], ["d", "M10.6666 19.3258H9.33331V20.6591H10.6666V19.3258Z", "fill", "#282828"], ["d", "M30.6666 19.3258H29.3333V20.6591H30.6666V19.3258Z", "fill", "#282828"], ["d", "M11.986 11.0358L8.21532 7.26517L9.53465 7.45317L9.72332 6.13317L6.42399 5.65918C6.05982 5.60509 5.72074 5.85651 5.66666 6.22076C5.65699 6.28567 5.65699 6.35167 5.66666 6.41651L6.13799 9.71583L7.45799 9.52716L7.26999 8.20783L11.0406 11.9785L11.986 11.0358Z", "fill", "#282828"], ["d", "M34.332 33.5686L33.8606 30.2693L32.5393 30.4593L32.7273 31.7786L28.9566 28.0079L28.0139 28.9506L31.7846 32.7213L30.4666 32.5319L30.2779 33.8519L33.5773 34.3233C33.6086 34.3278 33.6403 34.33 33.672 34.3299C34.0401 34.33 34.3386 34.0315 34.3387 33.6633C34.3388 33.6317 34.3365 33.6 34.332 33.5686Z", "fill", "#282828"], ["d", "M12.929 11.979L11.9862 12.9218L12.929 13.8646L13.8718 12.9218L12.929 11.979Z", "fill", "#282828"], ["d", "M27.0714 26.1204L26.1286 27.0632L27.0714 28.006L28.0142 27.0632L27.0714 26.1204Z", "fill", "#282828"], ["d", "M8.21265 32.7199L11.9833 28.9493L11.0433 28.0066L7.27265 31.7772L7.46065 30.4579L6.14065 30.2693L5.66666 33.5686C5.61441 33.933 5.8674 34.2708 6.2319 34.3232C6.26332 34.3277 6.29499 34.3299 6.32665 34.3299C6.35832 34.33 6.38999 34.3277 6.42132 34.3232L9.72065 33.8519L9.53198 32.5319L8.21265 32.7199Z", "fill", "#282828"], ["d", "M34.1419 5.8506C33.9941 5.70118 33.7838 5.6311 33.5759 5.66193L30.2766 6.13326L30.4653 7.45326L31.7846 7.26526L28.0139 11.0359L28.9566 11.9786L32.7273 8.20792L32.5393 9.52592L33.8593 9.71592L34.3306 6.41659C34.3604 6.20876 34.2905 5.9991 34.1419 5.8506Z", "fill", "#282828"], ["d", "M12.9296 26.1209L11.9868 27.0637L12.9296 28.0065L13.8724 27.0637L12.9296 26.1209Z", "fill", "#282828"], ["d", "M27.0716 11.9766L26.1288 12.9194L27.0716 13.8622L28.0144 12.9194L27.0716 11.9766Z", "fill", "#282828"], ["width", "92", "height", "86", "viewBox", "0 0 92 86", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M86.2566 36.7996C85.2295 38.133 74.4966 44.5513 64.5515 44.5513C69.3334 48.4516 74.9914 49.9333 80.9758 48.3031C75.5746 55.973 69.1212 57.3396 63.2865 57.5033L62.7664 57.511C58.9515 57.511 54.9471 56.4156 54.9042 56.4028L52.6547 55.7809L51.8619 58.005C50.0466 63.1207 55.0331 66.5601 59.0373 69.3241C61.9938 71.3612 65.3418 73.6722 65.17 75.7578C65.0362 77.3753 62.5114 78.1686 59.9664 76.5409C58.9591 79.768 56.1995 81.2089 52.6521 77.7386C52.2357 80.4104 48.9786 83.5966 46.214 83.5966C43.4495 83.5966 40.1924 80.4104 39.7758 77.7386C36.231 81.2089 33.469 79.768 32.4615 76.5409C29.9191 78.1686 27.3945 77.3753 27.2581 75.7578C27.0863 73.6722 30.4368 71.3612 33.3932 69.3241C37.395 66.5601 42.3815 63.1207 40.5662 58.005L39.7734 55.7809L37.5238 56.4028C37.4833 56.4156 33.4791 57.511 29.6617 57.511L29.1416 57.5033C23.3069 57.3396 16.8561 55.973 11.4529 48.3031C17.4367 49.9333 23.0947 48.4516 27.8766 44.5513C17.9315 44.5513 7.20131 38.133 6.17113 36.7996C4.37601 32.8688 2.42183 25.4472 3.69941 17.8721C6.60287 23.6609 11.3344 25.9769 11.6019 26.128C14.5332 27.7863 17.8457 27.9449 17.8457 27.9449C17.8457 27.9449 9.61485 13.954 9.05441 9.95657C8.76156 7.8631 9.59468 6.0257 10.5667 4.65651C12.7986 9.73636 16.3536 14.6297 21.1783 19.249L22.2818 20.3058C23.385 21.309 24.5135 22.2968 25.6951 23.2437C26.0992 23.5687 26.18 24.0012 26.2658 25.4268C26.339 26.6065 26.4274 28.0755 27.1949 29.488C29.4773 33.6622 34.2895 34.7599 37.0339 30.4554C39.4249 26.7012 41.6316 18.087 37.9125 9.74148C36.9532 7.58418 34.6 6.75766 32.3984 6.82917L30.0858 5.72885C29.8131 5.60082 29.5404 5.48047 29.2754 5.37567C29.8182 5.11723 30.3028 4.80228 30.7371 4.5208C31.333 4.1294 31.9491 3.72756 32.3783 3.72756C33.2065 3.75573 34.3577 4.11147 35.5822 4.48751C36.5189 4.7743 37.5213 5.08395 38.5791 5.31166L39.0159 5.99497C39.2912 6.42497 39.6144 7.0289 39.68 7.22844C39.8516 7.83238 46.214 29.2834 46.214 29.2834V29.2808L46.2166 29.2834C46.2166 29.2834 52.5765 7.83238 52.7506 7.22844C52.8137 7.0289 53.1369 6.42497 53.4122 5.99497L53.849 5.31166C54.9068 5.08395 55.9092 4.7743 56.8484 4.48751C58.0704 4.11147 59.2216 3.75573 60.0498 3.72756C60.479 3.72756 61.0951 4.1294 61.6934 4.5208C62.1251 4.80228 62.6125 5.11723 63.1553 5.37567C62.8877 5.48047 62.6175 5.60082 62.3423 5.72885L60.0297 6.82917C57.8281 6.75766 55.4749 7.58674 54.518 9.74148C50.7965 18.087 53.0031 26.7012 55.3942 30.4554C58.136 34.7574 62.9508 33.6647 65.2332 29.488C66.0033 28.0755 66.0916 26.6065 66.1623 25.4268C66.2481 24.0012 66.3288 23.5687 66.7353 23.2437C67.9144 22.2968 69.0456 21.309 70.1463 20.3058L71.2523 19.249C76.0745 14.6297 79.6287 9.73636 81.8611 4.65651C82.8354 6.0257 83.6698 7.8631 83.3735 9.95657C82.8154 13.954 74.5824 27.9449 74.5824 27.9449C74.5824 27.9449 77.8949 27.7863 80.8285 26.128C81.0939 25.9769 85.8258 23.6609 88.7289 17.8721C90.0068 25.4472 88.0526 32.8688 86.2566 36.7996ZM88.4235 9.05579C87.8599 19.9218 79.7487 23.8171 79.7487 23.8171C79.7487 23.8171 85.1077 15.7889 85.8749 10.3149C86.7347 4.16506 80.8758 0.0372009 80.8758 0.0372009C78.8871 6.63731 74.7491 12.3774 69.5177 17.3858C69.1641 17.7236 68.4574 18.4043 68.4574 18.4043C67.3943 19.3717 66.3061 20.3262 65.1674 21.2373C62.8775 23.0749 64.2207 26.0486 63.024 28.2469C60.5092 32.8559 57.5781 29.9949 56.3056 26.5245C54.4676 21.5266 54.6543 15.648 56.8181 10.7933C57.8128 8.55922 61.3752 9.4728 63.1451 9.86951C65.6043 10.4171 64.1627 12.3723 64.1627 12.3723C64.9402 12.3774 65.4378 11.8017 65.617 11.0518C65.9704 9.57266 63.4154 8.04747 63.4154 8.04747C64.9478 7.31806 67.6948 6.50672 68.6542 8.53105C71.1461 4.12683 68.2552 3.33342 65.2609 3.32573C63.2992 3.32317 62.0367 1.0993 59.9664 1.17099C56.394 1.29116 53.238 3.60466 49.5643 3.00072C49.5643 3.00072 49.9506 4.2726 51.2964 4.59762C49.837 6.88807 49.3347 9.86695 48.5722 12.4414C47.787 15.0928 46.9992 17.7441 46.214 20.3954C45.4289 17.7441 44.6436 15.0928 43.8559 12.4414C43.0908 9.86439 42.5909 6.88807 41.1317 4.59762C42.4773 4.2726 42.8636 3.00072 42.8636 3.00072C39.1926 3.60209 36.029 1.29116 32.4615 1.17099C30.3963 1.0993 29.1238 3.32317 27.1696 3.32573C24.1727 3.33342 21.2845 4.12683 23.7739 8.53105C24.6879 6.48879 27.5206 7.33599 29.0127 8.04747C29.0127 8.04747 26.4577 9.57266 26.8111 11.0518C26.9803 11.7684 27.4953 12.403 28.2654 12.3723C28.2654 12.3723 26.8238 10.4171 29.2854 9.86951C31.0603 9.4728 34.6153 8.55922 35.61 10.7933C37.7762 15.6532 37.953 21.5189 36.125 26.5245C34.8602 29.9897 31.9212 32.8636 29.4041 28.2469C28.2048 26.0486 29.5506 23.0749 27.2605 21.2373C26.1243 20.3262 25.0338 19.3717 23.9707 18.4043C23.9707 18.4043 23.2638 17.7236 22.9104 17.3858C17.679 12.3774 13.541 6.63731 11.5514 0.0372009C11.5514 0.0372009 5.69395 4.16506 6.55488 10.3149C7.31983 15.7889 12.6799 23.8171 12.6799 23.8171C12.6799 23.8171 4.57034 19.9218 4.00481 9.05579C-1.64814 19.7838 1.2984 32.2162 3.8812 37.8745C4.8861 40.0754 16.1465 45.9179 21.196 45.6774C21.196 45.6774 13.3718 48.8022 5.28748 42.2634C11.5414 56.8917 20.5623 59.8245 29.0734 60.0624C33.4766 60.1853 38.1903 58.8725 38.1903 58.8725C40.4702 65.2985 24.1476 68.7381 24.7433 75.9703C25.0185 79.3177 28.4574 80.7123 31.2952 79.6835C32.6308 82.1174 36.231 83.5941 38.8341 81.6363C41.6089 87.4533 50.8166 87.4558 53.5939 81.6363C56.1995 83.5941 59.7999 82.1174 61.1329 79.6835C63.9707 80.7123 67.4096 79.3177 67.6871 75.9703C68.2805 68.7381 51.9579 65.2985 54.2378 58.8725C54.2378 58.8725 58.954 60.1853 63.3572 60.0624C71.8656 59.8245 80.8867 56.8917 87.1437 42.2634C79.0543 48.8022 71.2296 45.6774 71.2296 45.6774C76.2815 45.9179 87.5418 40.0754 88.5471 37.8745C91.1321 32.2162 94.0788 19.7838 88.4235 9.05579Z", "fill", "currentColor"], ["width", "94", "height", "76", "viewBox", "0 0 94 76", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M65.4096 75.4874H28.6053C27.5121 75.4874 26.7833 74.758 26.7833 73.664C26.7833 72.57 27.5121 71.8406 28.6053 71.8406H45.1855V66.5529C45.1855 65.4588 45.9143 64.7295 47.0075 64.7295C48.1007 64.7295 48.8295 65.4588 48.8295 66.5529V71.8406H65.4096C66.5028 71.8406 67.2316 72.57 67.2316 73.664C67.2316 74.758 66.5028 75.4874 65.4096 75.4874ZM92.1929 51.9659H1.82199C0.728798 51.9659 0 51.2366 0 50.1426C0 49.0486 0.728798 48.3192 1.82199 48.3192H92.0107C93.1039 48.3192 93.8327 49.0486 93.8327 50.1426C93.8327 51.2366 93.1039 51.9659 92.1929 51.9659ZM78.7102 29.1739C78.1636 29.1739 77.7992 28.9915 77.4348 28.6269L71.9688 23.1568L68.3248 26.8035C67.7782 27.3505 67.2316 27.3505 66.5028 27.3505C65.9562 27.1682 65.4096 26.6212 65.2274 26.0741L61.5834 12.7636C61.4012 12.2166 61.5834 11.4872 62.13 10.9402C62.6766 10.3932 63.2232 10.2109 63.952 10.3932L77.2526 14.0399C77.7992 14.2223 78.3458 14.7693 78.528 15.3163C78.7102 15.8633 78.528 16.5926 77.9814 17.1397L74.3374 20.7864L79.8034 26.2565C80.1678 26.6212 80.35 27.1682 80.35 27.5328C80.35 27.8975 80.1678 28.4445 79.8034 28.8092C79.439 29.1739 79.0746 29.1739 78.7102 29.1739ZM65.9562 14.7693L67.9604 22.0627L73.2442 16.775L65.9562 14.7693Z", "fill", "currentColor"], ["d", "M83.6295 63.2708H10.3854C3.27959 63.2708 0 59.9887 0 52.8776V10.3932C0 3.28206 3.27959 0 10.3854 0H83.4474C90.5531 0 93.8327 3.28206 93.8327 10.3932V52.8776C94.0149 59.9887 90.7353 63.2708 83.6295 63.2708ZM10.3854 3.82907C5.28379 3.82907 3.64399 5.4701 3.64399 10.5755V53.0599C3.64399 58.1654 5.28379 59.8064 10.3854 59.8064H83.4474C88.5489 59.8064 90.1887 58.1654 90.1887 53.0599V10.3932C90.1887 5.28776 88.5489 3.64673 83.4474 3.64673H10.3854V3.82907Z", "fill", "currentColor"], ["d", "M16.9852 8.6582C16.6616 8.6582 16.3993 8.92055 16.3993 9.24414C16.3993 9.56773 16.6616 9.83008 16.9852 9.83008H21.8971C21.8973 9.83008 21.8974 9.83016 21.8976 9.83016C21.8978 9.83016 21.8981 9.83008 21.8983 9.83008H23.0148C23.3384 9.83008 23.6007 9.56773 23.6007 9.24414C23.6007 8.92055 23.3384 8.6582 23.0148 8.6582H22.9939C23.6224 7.5475 24.155 5.98273 23.5542 4.72555C23.2143 4.01414 22.5828 3.53375 21.673 3.28562C21.667 3.28383 21.6608 3.28227 21.6547 3.2807C21.3329 3.19438 20.9769 3.13664 20.5859 3.10852V2.18352H20.8424C21.166 2.18352 21.4283 1.92117 21.4283 1.59758C21.4283 1.27398 21.166 1.01164 20.8424 1.01164H20.5859V0.585938C20.5859 0.262344 20.3237 0 20 0C19.6763 0 19.4141 0.262344 19.4141 0.585938V1.01156H19.1577C18.834 1.01156 18.5717 1.27391 18.5717 1.5975C18.5717 1.92109 18.834 2.18344 19.1577 2.18344H19.4141V3.10844C19.0227 3.13656 18.6663 3.19445 18.3442 3.28094C18.3385 3.28242 18.3328 3.28391 18.3272 3.28555C17.4173 3.53367 16.7858 4.01406 16.4458 4.72555C15.845 5.98273 16.3777 7.54758 17.0061 8.6582H16.9852ZM20 4.25891C20.3021 4.25891 20.5772 4.27625 20.8281 4.30898L20.59 5.64906C20.5817 5.69609 20.541 5.73023 20.4931 5.73023H19.5065C19.4588 5.73023 19.418 5.69609 19.4097 5.64906L19.1717 4.30906C19.4225 4.27625 19.6977 4.25891 20 4.25891ZM17.5031 5.23078C17.6142 4.99844 17.7954 4.80797 18.0434 4.65859L18.2557 5.85391C18.3635 6.46125 18.8895 6.90211 19.5064 6.90211H20.4931C21.11 6.90211 21.636 6.46125 21.7438 5.85398L21.9563 4.65836C22.2045 4.80781 22.3858 4.99828 22.4969 5.2307C22.9448 6.16789 22.2862 7.71594 21.6076 8.65812H18.3925C17.7138 7.71594 17.0552 6.16797 17.5031 5.23078ZM25.6014 13.976C25.9251 13.976 26.1874 13.7137 26.1874 13.3901V12.9826C26.1874 12.659 25.9251 12.3966 25.6014 12.3966C25.2777 12.3966 25.0155 12.659 25.0155 12.9826V13.3901C25.0155 13.7137 25.2777 13.976 25.6014 13.976ZM14.3985 12.3966C14.0749 12.3966 13.8126 12.659 13.8126 12.9826V13.3901C13.8126 13.7137 14.0749 13.976 14.3985 13.976C14.7222 13.976 14.9845 13.7137 14.9845 13.3901V12.9826C14.9845 12.659 14.7222 12.3966 14.3985 12.3966ZM22.7896 23.2429C22.4659 23.2429 22.2037 23.5052 22.2037 23.8288V24.2919C22.2037 24.6155 22.4659 24.8778 22.7896 24.8778C23.1133 24.8778 23.3756 24.6155 23.3756 24.2919V23.8288C23.3756 23.5052 23.1132 23.2429 22.7896 23.2429ZM39.3023 18.2448C39.1636 17.4295 38.3014 16.9183 36.6667 16.682C35.4512 16.5063 34.1285 16.522 33.4072 16.5497C33.0266 16.1885 32.4523 15.988 31.6943 15.9523C31.3183 15.935 30.9481 16.0731 30.676 16.3321C30.4026 16.5923 30.2515 16.9425 30.2506 17.318C30.2463 18.9516 29.7485 20.1947 28.771 21.0127C27.8832 21.7557 26.7302 22.0101 25.9211 21.9505V19.8407C25.9211 19.1103 25.3623 18.5083 24.6497 18.4391C24.9159 17.6175 25.2509 16.7876 25.5638 16.1896C25.7184 15.8943 26.0202 15.7109 26.3515 15.7109H27.2748C27.275 15.7109 27.2753 15.7109 27.2756 15.7109C27.2758 15.7109 27.2761 15.7109 27.2763 15.7109H28.9107C29.08 15.7109 29.246 15.7415 29.4041 15.8019L29.9417 16.0075C30.2802 16.137 30.6612 16.0705 30.9359 15.8341C31.2106 15.5977 31.3331 15.2309 31.2556 14.8769L31.1064 14.1959C30.913 13.3125 30.2601 12.5855 29.4024 12.2987L28.7118 12.0677C28.6186 12.0366 28.5367 11.9746 28.4813 11.8934L28.3722 11.7334C28.0692 11.2893 27.5673 11.0241 27.0297 11.0241H24.7424C23.917 11.0241 22.7482 10.9805 22.1322 10.604C21.8788 10.449 21.564 10.4249 21.2902 10.5395C21.0192 10.653 20.8176 10.8913 20.751 11.177C20.3927 12.7123 21.0138 13.5315 21.4912 13.9162C21.0085 14.8059 20.429 16.0246 20.0002 17.3948C19.5715 16.0246 18.992 14.8059 18.5093 13.9162C18.9867 13.5316 19.6078 12.7123 19.2495 11.1772C19.1828 10.8913 18.9812 10.653 18.7102 10.5395C18.4365 10.4249 18.1219 10.449 17.8682 10.6041C17.2523 10.9806 16.0835 11.0242 15.2581 11.0242H12.9708C12.4332 11.0242 11.9313 11.2894 11.6282 11.7336L11.5191 11.8934C11.4638 11.9747 11.3818 12.0366 11.2886 12.0677L10.598 12.2987C9.74024 12.5855 9.08735 13.3125 8.89391 14.1959L8.74477 14.877C8.66719 15.231 8.78969 15.5978 9.06446 15.8342C9.33922 16.0707 9.72032 16.1371 10.0588 16.0076L10.5962 15.802C10.7542 15.7416 10.9202 15.7109 11.0895 15.7109H12.7239C12.7241 15.7109 12.7245 15.711 12.7247 15.711C12.7249 15.711 12.7252 15.7109 12.7255 15.7109H13.6488C13.9801 15.7109 14.2819 15.8944 14.4365 16.1897C14.7495 16.7877 15.0844 17.6176 15.3506 18.4391C14.638 18.5084 14.0791 19.1104 14.0791 19.8408V21.9505C13.2705 22.0101 12.117 21.7559 11.2292 21.0128C10.2517 20.1948 9.75391 18.9517 9.74969 17.3182C9.74868 16.9426 9.59766 16.5924 9.32422 16.3323C9.05212 16.0733 8.6818 15.9353 8.30594 15.9525C7.42524 15.9939 6.9036 16.2626 6.59579 16.5498C6.15579 16.5327 5.56704 16.5228 4.91164 16.5475C4.58821 16.5596 4.33594 16.8316 4.34805 17.155C4.36024 17.4784 4.63211 17.7324 4.95555 17.7185C5.55313 17.6962 6.21493 17.7013 6.81876 17.7332C7.02454 17.7435 7.22063 17.6462 7.33563 17.4755C7.47008 17.2759 7.84376 17.1474 8.36094 17.1231C8.43922 17.1201 8.49188 17.158 8.51626 17.1812C8.54422 17.2078 8.57758 17.2537 8.57774 17.3213C8.58422 19.8069 9.61423 21.1895 10.477 21.9116C11.5138 22.7791 12.8133 23.1309 13.8542 23.1309C13.9308 23.1309 14.0055 23.1283 14.0791 23.1245V27.1338C13.7087 27.6236 13.3937 27.7849 13.2238 27.8064C13.0609 27.5513 12.9124 26.4963 13.166 25.0933C13.2121 24.8387 13.0857 24.5841 12.8552 24.4667C12.6243 24.3495 12.3443 24.3973 12.1656 24.5845C11.4954 25.2867 10.5757 25.9926 9.76571 26.4266C8.97907 26.848 8.44602 26.9327 8.22712 26.8317C8.26766 26.5427 8.72313 25.7435 9.68821 24.7292C9.88149 24.5261 9.90376 24.2145 9.74141 23.9859C9.57907 23.7573 9.27758 23.676 9.02204 23.7915C7.24313 24.5969 5.28266 24.9306 4.79422 24.7562C4.83204 24.4608 5.3904 23.8349 6.66211 23.1769C6.91704 23.045 7.03883 22.748 6.95008 22.4751C6.86126 22.2023 6.58813 22.0337 6.30422 22.0773C4.1118 22.413 2.87664 21.7361 2.7325 21.4443C2.78453 21.3709 3.07891 21.0509 4.39633 20.7281C4.67922 20.6588 4.86821 20.3922 4.84008 20.1023C4.81188 19.8123 4.575 19.5872 4.28414 19.5737C2.63625 19.4971 2.11203 19.0588 1.96313 18.8738C1.85844 18.7437 1.82461 18.6104 1.85328 18.4416C1.85985 18.403 1.95422 18.272 2.30742 18.1299C2.60766 18.0092 2.75321 17.668 2.6325 17.3677C2.51172 17.0675 2.17039 16.9219 1.87024 17.0427C1.1811 17.3197 0.786643 17.7242 0.697971 18.2449C0.612814 18.7452 0.734768 19.2168 1.05039 19.6088C1.31 19.9312 1.68656 20.1866 2.17688 20.3739C1.81024 20.6459 1.54688 20.9999 1.55375 21.4587C1.55766 21.7135 1.65594 22.0965 2.10235 22.4739C2.54696 22.8498 3.32891 23.1934 4.40532 23.3041C3.77711 23.9067 3.51633 24.5212 3.65797 25.1053C3.72922 25.3989 3.9318 25.6403 4.22844 25.785C4.94102 26.1327 6.27469 25.9346 7.52454 25.5777C7.23751 26.0486 7.03805 26.527 7.05415 26.9327C7.06571 27.228 7.18086 27.482 7.38704 27.6669C8.45391 28.624 10.4324 27.562 11.8617 26.4316C11.8473 27.192 11.9334 28.046 12.3134 28.5446C12.5594 28.8673 12.8553 28.9569 13.0602 28.9752C13.1037 28.9791 13.147 28.981 13.1907 28.981C13.4882 28.981 13.7886 28.8904 14.0821 28.7158C14.0874 28.8241 14.1005 28.9304 14.1202 29.0343C13.5579 29.8052 13.2504 30.7382 13.2504 31.6946V32.6741C13.2504 33.6745 13.9272 34.5193 14.8469 34.776V34.8534C14.8469 35.1029 14.6438 35.3059 14.3944 35.3059H12.4007L11.8222 33.7164C11.6456 33.2315 11.1349 32.9638 10.6441 33.0766L9.92774 31.1084C10.4412 30.8433 10.7652 30.291 10.7307 29.7046L10.6514 28.3604C10.6324 28.0373 10.3567 27.7914 10.032 27.81C9.70891 27.8291 9.46251 28.1064 9.48149 28.4294L9.56079 29.7735C9.56477 29.8412 9.54594 29.9067 9.51024 29.9613L9.04946 28.6953C8.93883 28.3912 8.60282 28.2343 8.29844 28.3451C7.99438 28.4558 7.83758 28.792 7.94829 29.0961L8.40907 30.3621C8.34665 30.3434 8.29008 30.3052 8.24969 30.2509L7.44641 29.1702C7.25313 28.9105 6.88626 28.8564 6.62657 29.0496C6.36688 29.2427 6.31282 29.6097 6.50586 29.8695L7.30922 30.9502C7.59321 31.3321 8.04329 31.5464 8.50368 31.5464C8.61141 31.5464 8.71962 31.5333 8.82657 31.5092L9.54305 33.4777C9.09462 33.7066 8.87547 34.24 9.05188 34.7251L10.7295 39.3341C10.879 39.7448 11.2683 40.0003 11.682 40.0003C11.7968 40.0003 11.9134 39.9806 12.0274 39.9392L12.8945 39.6236H12.8945C13.4191 39.4327 13.6906 38.8505 13.4998 38.3257L12.8273 36.478H14.3944C15.2901 36.478 16.0188 35.7493 16.0188 34.8536V34.7762C16.9384 34.5195 17.6152 33.6748 17.6152 32.6744V31.6948C17.6152 31.6448 17.6399 31.5979 17.6812 31.5695L18.6309 30.9166C18.6827 30.9287 18.7311 30.9529 18.7711 30.9892L19.2349 31.4104C19.2781 31.4498 19.3242 31.4841 19.3714 31.5156C19.265 31.8759 18.9643 32.1685 18.5294 32.5664C17.7227 33.3045 16.6181 34.3153 17.7351 36.4017C17.8408 36.599 18.043 36.7112 18.2522 36.7112C18.3455 36.7112 18.4402 36.6888 18.5282 36.6416C18.8134 36.4889 18.9209 36.1338 18.7682 35.8485C18.081 34.565 18.5475 34.1381 19.3204 33.4309C19.3513 33.4027 19.3828 33.3737 19.4145 33.3446V36.3627C19.4145 36.6863 19.6767 36.9487 20.0004 36.9487C20.3241 36.9487 20.5863 36.6863 20.5863 36.3627V33.3446C20.618 33.3737 20.6495 33.4026 20.6804 33.4309C21.4534 34.1381 21.9198 34.565 21.2326 35.8485C21.0799 36.1338 21.1874 36.4889 21.4726 36.6416C21.5606 36.6888 21.6553 36.7112 21.7486 36.7112C21.9577 36.7112 22.1602 36.599 22.2657 36.4017C23.3827 34.3153 22.2781 33.3045 21.4714 32.5664C21.0366 32.1685 20.7359 31.8759 20.6295 31.5156C20.6767 31.4841 20.7227 31.4498 20.766 31.4105L21.2297 30.9892C21.2698 30.9529 21.3181 30.9287 21.3699 30.9166L22.3196 31.5695C22.3609 31.5979 22.3856 31.6448 22.3856 31.6948V32.6744C22.3856 33.6748 23.0624 34.5195 23.982 34.7762V34.8536C23.982 35.7493 24.7106 36.478 25.6063 36.478H26.8578C27.2385 37.6893 28.3717 38.5705 29.707 38.5705C30.179 38.5705 30.6492 38.4573 31.067 38.2433C31.3549 38.0957 31.4688 37.7427 31.3213 37.4546C31.1736 37.1666 30.8206 37.0527 30.5326 37.2003C30.2759 37.3319 29.9981 37.3985 29.707 37.3985C28.7068 37.3985 27.8931 36.5848 27.8931 35.5846C27.8931 34.5844 28.7068 33.7706 29.707 33.7706C30.6559 33.7706 31.4506 34.5109 31.5166 35.456C31.5391 35.7788 31.8189 36.0221 32.1418 35.9998C32.4646 35.9773 32.7081 35.6973 32.6856 35.3745C32.591 34.0175 31.5843 32.9171 30.293 32.6573V31.6951H30.5494C30.8731 31.6951 31.1353 31.4327 31.1353 31.1091C31.1353 30.7855 30.8731 30.5232 30.5494 30.5232H30.293V30.0976C30.293 29.774 30.0306 29.5116 29.707 29.5116C29.3834 29.5116 29.1211 29.774 29.1211 30.0976V30.5232H28.8647C28.541 30.5232 28.2788 30.7855 28.2788 31.1091C28.2788 31.4327 28.541 31.6951 28.8647 31.6951H29.1211V32.6568C27.8431 32.9121 26.8574 33.9856 26.7346 35.3059H25.6063C25.3568 35.3059 25.1538 35.103 25.1538 34.8534V34.7761C26.0734 34.5194 26.7502 33.6747 26.7502 32.6742V31.6947C26.7502 30.7383 26.4427 29.8054 25.8804 29.0344C25.9002 28.9305 25.9133 28.8242 25.9185 28.7159C26.2121 28.8905 26.5125 28.981 26.81 28.981C26.8535 28.981 26.897 28.9791 26.9404 28.9752C27.1453 28.9569 27.4413 28.8673 27.6872 28.5446C28.0672 28.0461 28.1534 27.192 28.1389 26.4316C29.1781 27.2534 30.5072 28.0392 31.5656 28.0391C31.963 28.0391 32.3224 27.9282 32.6136 27.6669C32.8198 27.482 32.9349 27.228 32.9465 26.9327C32.9625 26.527 32.7631 26.0486 32.4761 25.5777C33.726 25.9345 35.0596 26.1327 35.7722 25.785C36.0688 25.6403 36.2714 25.3989 36.3427 25.1053C36.4843 24.5212 36.2235 23.9068 35.5953 23.3041C36.6715 23.1934 37.4538 22.8497 37.8983 22.4739C38.3448 22.0964 38.4431 21.7134 38.4469 21.4587C38.4531 21.0441 38.2453 20.6798 37.828 20.3723C38.3163 20.1852 38.6914 19.9303 38.9503 19.6089C39.2655 19.2166 39.3874 18.745 39.3023 18.2448ZM11.7756 38.7831L10.207 34.4735L10.775 34.2667L12.3435 38.5764L11.7756 38.7831ZM28.4329 13.2099L29.0306 13.4098C29.4992 13.5666 29.856 13.9637 29.9617 14.4464L30.0367 14.789L29.8227 14.7072C29.5305 14.5955 29.2237 14.5388 28.9108 14.5388H27.9707C28.0734 14.1108 28.2331 13.6508 28.4329 13.2099ZM22.5817 14.3635C22.8309 13.9107 22.7006 13.3431 22.2787 13.0431C21.9107 12.7816 21.7616 12.3532 21.8335 11.767C22.6777 12.143 23.8138 12.1958 24.7423 12.1958H27.0295C27.1795 12.1958 27.3195 12.2698 27.4039 12.3936L27.4735 12.4955C27.1463 13.1652 26.8995 13.8845 26.771 14.5388H26.3514C25.5825 14.5388 24.8829 14.963 24.5255 15.646C24.1327 16.3966 23.7247 17.432 23.4236 18.432H20.9209C21.3391 16.8147 22.0365 15.3538 22.5817 14.3635ZM11.0892 14.5388C10.7763 14.5388 10.4695 14.5955 10.1772 14.7073L9.96337 14.7891L10.0384 14.4464C10.1441 13.9637 10.5008 13.5666 10.9694 13.4098L11.5671 13.2099C11.7669 13.6507 11.9266 14.1108 12.0293 14.5388H11.0892ZM13.6485 14.5388H13.229C13.1003 13.8845 12.8536 13.1653 12.5265 12.4955L12.5959 12.3937C12.6805 12.2697 12.8205 12.1958 12.9704 12.1958H15.2577C16.1862 12.1958 17.3224 12.143 18.1664 11.767C18.2384 12.3531 18.0892 12.7816 17.7213 13.0431C17.2993 13.343 17.1691 13.9107 17.4183 14.3635C17.9635 15.3538 18.6609 16.8147 19.0791 18.4319H16.5764C16.2753 17.432 15.8674 16.3965 15.4745 15.6459C15.117 14.963 14.4174 14.5388 13.6485 14.5388ZM16.4428 31.6945V32.674C16.4428 33.2312 15.9895 33.6845 15.4323 33.6845C14.8751 33.6845 14.4217 33.2313 14.4217 32.674V31.6945C14.4217 31.187 14.5391 30.6883 14.7588 30.236C15.1755 30.6504 15.7493 30.9069 16.3819 30.9069H16.7032C16.5366 31.1319 16.4428 31.4068 16.4428 31.6945ZM21.5446 29.7349C21.5436 29.7349 21.5426 29.7349 21.5416 29.7349H21.4415C21.0709 29.7349 20.7157 29.8722 20.4414 30.1213L20 30.5223L19.5586 30.1214C19.2843 29.8723 18.9292 29.735 18.5585 29.735H18.4588C18.4576 29.735 18.4565 29.735 18.4553 29.735H16.382C15.7583 29.735 15.2508 29.2275 15.2508 28.6037V19.8405C15.2508 19.71 15.357 19.6038 15.4875 19.6038H16.1328C16.1334 19.6038 16.1341 19.604 16.1347 19.604C16.1355 19.604 16.1363 19.6038 16.137 19.6038H19.8087H19.8131H20.1859H20.1926H23.8632C23.864 19.6038 23.8648 19.604 23.8655 19.604C23.8661 19.604 23.8667 19.6038 23.8674 19.6038H24.5127C24.6432 19.6038 24.7494 19.71 24.7494 19.8405V28.6037C24.7494 29.2275 24.242 29.735 23.6181 29.735H21.5446V29.7349ZM25.5781 32.674C25.5781 33.2312 25.1248 33.6845 24.5676 33.6845C24.0104 33.6845 23.5571 33.2313 23.5571 32.674V31.6945C23.5571 31.4069 23.4633 31.1319 23.2967 30.9069H23.618C24.2506 30.9069 24.8244 30.6504 25.241 30.236C25.4606 30.6883 25.5781 31.187 25.5781 31.6945V32.674ZM38.0372 18.8737C37.8883 19.0586 37.3641 19.497 35.7162 19.5735C35.4253 19.587 35.1885 19.8122 35.1603 20.1021C35.1321 20.392 35.3211 20.6586 35.604 20.728C36.9214 21.0508 37.2158 21.3708 37.2678 21.4441C37.1237 21.7359 35.8891 22.4128 33.6961 22.0771C33.4129 22.0338 33.1391 22.2021 33.0503 22.4749C32.9614 22.7478 33.0833 23.0448 33.3381 23.1767C34.6099 23.8348 35.1682 24.4606 35.206 24.756C34.7175 24.9305 32.757 24.5966 30.9782 23.7913C30.7227 23.6757 30.4213 23.7573 30.2588 23.9858C30.0965 24.2144 30.1188 24.5259 30.312 24.7291C31.2772 25.7434 31.7327 26.5425 31.7731 26.8316C31.5545 26.9325 31.0212 26.848 30.2345 26.4264C29.4245 25.9924 28.5049 25.2866 27.8346 24.5843C27.656 24.3972 27.376 24.3492 27.1451 24.4666C26.9145 24.5838 26.7881 24.8385 26.8342 25.0931C27.0878 26.4961 26.9393 27.5511 26.7764 27.8063C26.6065 27.7848 26.2916 27.6234 25.9212 27.1336V23.1247C26.9948 23.1791 28.4103 22.8427 29.5231 21.9113C30.386 21.1892 31.416 19.8066 31.4224 17.321C31.4226 17.2535 31.456 17.2076 31.4839 17.181C31.5084 17.1578 31.5628 17.1199 31.6392 17.123C32.1564 17.1473 32.5301 17.2757 32.6645 17.4753C32.7796 17.6461 32.976 17.7436 33.1814 17.733C34.3574 17.6709 35.5976 17.7116 36.499 17.8419C37.7928 18.0288 38.1306 18.3452 38.1471 18.4413C38.1757 18.6102 38.1418 18.7436 38.0372 18.8737ZM17.2104 23.2429C16.8867 23.2429 16.6245 23.5052 16.6245 23.8288V24.2919C16.6245 24.6155 16.8867 24.8778 17.2104 24.8778C17.5341 24.8778 17.7963 24.6155 17.7963 24.2919V23.8288C17.7963 23.5052 17.534 23.2429 17.2104 23.2429ZM21.1204 23.8707C20.8764 23.658 20.5063 23.6835 20.2937 23.9274C20.25 23.9775 20.1538 24.0615 19.9999 24.0615C19.846 24.0615 19.7499 23.9775 19.7062 23.9274C19.4935 23.6834 19.1234 23.658 18.8795 23.8707C18.6355 24.0833 18.6101 24.4534 18.8227 24.6974C19.1196 25.038 19.5486 25.2334 19.9999 25.2334C20.4511 25.2334 20.8802 25.0381 21.177 24.6974C21.3899 24.4534 21.3644 24.0833 21.1204 23.8707Z", "fill", "#282828"], ["width", "40", "height", "40", "fill", "currentColor"], ["width", "42", "height", "41", "viewBox", "0 0 42 41", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 6.38462V34.0769L21 40.2308M1 6.38462L21 12.5385M1 6.38462L21 1L41 6.38462M21 40.2308L41 34.0769V6.38462M21 40.2308V12.5385M41 6.38462L21 12.5385", "stroke", "#282828"], ["d", "M1 34.0765L21 28.6919L41 34.0765", "stroke", "black", "stroke-opacity", "0.2"], ["d", "M21 1.76953V12.5388", "stroke", "black", "stroke-opacity", "0.2"], ["d", "M39.4067 16.0019C39.7345 16.0019 40 15.7361 40 15.4083V8.39996C40 8.2428 39.9374 8.09174 39.8264 7.98035L32.0197 0.17395C31.9083 0.062561 31.7572 0 31.6 0H9.34448C9.01672 0 8.75122 0.265503 8.75122 0.593262V16.7123H3.22205C2.89429 16.7123 2.62878 16.9781 2.62878 17.3056V19.3411H0.593262C0.265503 19.3411 0 19.6066 0 19.9344V24.2535C0 24.5813 0.265503 24.8471 0.593262 24.8471C0.92102 24.8471 1.18652 24.5813 1.18652 24.2535V20.5276H28.5159V35.9088H1.18652V26.6272C1.18652 26.2994 0.92102 26.0339 0.593262 26.0339C0.265503 26.0339 0 26.2994 0 26.6272V36.5021C0 36.8298 0.265503 37.0953 0.593262 37.0953H8.75122V39.3579C8.75122 39.6854 9.01672 39.9512 9.34448 39.9512H39.4067C39.7345 39.9512 40 39.6854 40 39.3579V17.782C40 17.4542 39.7345 17.1887 39.4067 17.1887C39.079 17.1887 38.8135 17.4542 38.8135 17.782V38.7643H9.93774V37.0953H29.1092C29.437 37.0953 29.7025 36.8298 29.7025 36.5021V34.4666H31.7377C32.0654 34.4666 32.3309 34.2007 32.3309 33.873V17.3056C32.3309 16.9781 32.0654 16.7123 31.7377 16.7123H9.93774V1.18683H31.0065V8.39996C31.0065 8.72742 31.272 8.99323 31.5997 8.99323H38.8135V15.4083C38.8135 15.7361 39.079 16.0019 39.4067 16.0019ZM31.1444 33.2797H29.7025V19.9344C29.7025 19.6066 29.437 19.3411 29.1092 19.3411H3.81531V17.8989H31.1444V33.2797ZM32.1933 2.02576L37.9739 7.8064H32.1933V2.02576Z", "fill", "#282828"], ["d", "M24.1483 22.4258C24.1483 22.098 23.8828 21.8325 23.5551 21.8325H6.14691C5.81946 21.8325 5.55365 22.098 5.55365 22.4258C5.55365 23.7872 4.44617 24.895 3.08478 24.895C2.75702 24.895 2.49121 25.1605 2.49121 25.4882V30.9481C2.49121 31.2759 2.75702 31.5417 3.08478 31.5417C4.44617 31.5417 5.55365 32.6492 5.55365 34.0106C5.55365 34.3383 5.81946 34.6038 6.14691 34.6038H19.6662C19.994 34.6038 20.2595 34.3383 20.2595 34.0106C20.2595 33.6828 19.994 33.4173 19.6662 33.4173H6.69226C6.43958 31.8759 5.21918 30.6558 3.67804 30.4031V26.0333C5.21918 25.7806 6.43958 24.5605 6.69226 23.019H23.0097C23.2624 24.5605 24.4828 25.7806 26.0242 26.0333V30.4031C24.4828 30.6558 23.2624 31.8759 23.0097 33.4173H22.0396C21.7118 33.4173 21.4463 33.6828 21.4463 34.0106C21.4463 34.3383 21.7118 34.6038 22.0396 34.6038H23.5551C23.8828 34.6038 24.1483 34.3383 24.1483 34.0106C24.1483 32.6492 25.2558 31.5417 26.6175 31.5417C26.9453 31.5417 27.2108 31.2759 27.2108 30.9481V25.4882C27.2108 25.1605 26.9453 24.895 26.6175 24.895C25.2561 24.895 24.1483 23.7872 24.1483 22.4258Z", "fill", "#282828"], ["d", "M11.1724 28.2181C11.1724 30.2466 12.8224 31.897 14.8513 31.897C16.8798 31.897 18.5302 30.2466 18.5302 28.2181C18.5302 26.1896 16.8798 24.5392 14.8513 24.5392C12.8224 24.5392 11.1724 26.1896 11.1724 28.2181ZM17.3433 28.2181C17.3433 29.5923 16.2255 30.7104 14.8513 30.7104C13.4771 30.7104 12.3589 29.5923 12.3589 28.2181C12.3589 26.8439 13.4771 25.726 14.8513 25.726C16.2255 25.726 17.3433 26.8439 17.3433 28.2181Z", "fill", "#282828"], ["d", "M23.8365 28.2183C23.8365 27.8906 23.571 27.6248 23.2432 27.6248H21.3447C21.017 27.6248 20.7515 27.8906 20.7515 28.2183C20.7515 28.5458 21.017 28.8116 21.3447 28.8116H23.2432C23.571 28.8116 23.8365 28.5458 23.8365 28.2183Z", "fill", "#282828"], ["d", "M6.45947 27.6248C6.13171 27.6248 5.86621 27.8906 5.86621 28.2183C5.86621 28.5458 6.13171 28.8116 6.45947 28.8116H8.35797C8.68573 28.8116 8.95154 28.5458 8.95154 28.2183C8.95154 27.8906 8.68573 27.6248 8.35797 27.6248H6.45947Z", "fill", "#282828"], ["d", "M26.3907 22.9737C26.8702 23.1766 27.36 22.6746 27.165 22.1991C27.0667 21.9599 26.8161 21.811 26.5592 21.8357C26.3025 21.8601 26.0852 22.0575 26.0355 22.3099C25.9809 22.5858 26.1328 22.865 26.3907 22.9737Z", "fill", "#282828"], ["d", "M27.1654 33.7835C26.9728 33.3007 26.2673 33.3114 26.0698 33.7835C25.9685 34.0255 26.0454 34.3136 26.2502 34.4763C26.4409 34.6273 26.7131 34.6438 26.9213 34.5199C27.17 34.3722 27.2786 34.0508 27.1654 33.7835Z", "fill", "#282828"], ["d", "M3.6327 22.199C3.54236 21.9799 3.32203 21.8325 3.0846 21.8325C2.83588 21.8325 2.61066 21.993 2.52644 22.2262C2.44404 22.4536 2.51392 22.7172 2.69733 22.8747C2.90058 23.0496 3.20301 23.0651 3.42335 22.9122C3.65101 22.7548 3.73524 22.4548 3.6327 22.199Z", "fill", "#282828"], ["d", "M2.50362 34.1266C2.59944 34.6366 3.29464 34.7678 3.57875 34.3396C3.72097 34.1248 3.70754 33.8337 3.54335 33.6344C3.38222 33.4385 3.10817 33.3674 2.87166 33.4577C2.60646 33.559 2.44686 33.8477 2.50362 34.1266Z", "fill", "#282828"], ["d", "M28.2321 10.4163C28.5598 10.4163 28.8253 10.1508 28.8253 9.823C28.8253 9.49524 28.5598 9.22974 28.2321 9.22974H20.519C20.1913 9.22974 19.9258 9.49524 19.9258 9.823C19.9258 10.1508 20.1913 10.4163 20.519 10.4163H28.2321Z", "fill", "#282828"], ["d", "M13.3613 13.2642C13.3613 13.5919 13.6268 13.8574 13.9546 13.8574H34.7963C35.124 13.8574 35.3895 13.5919 35.3895 13.2642C35.3895 12.9364 35.124 12.6709 34.7963 12.6709H13.9546C13.6268 12.6709 13.3613 12.9364 13.3613 13.2642Z", "fill", "#282828"], ["width", "40", "height", "30", "viewBox", "0 0 40 30", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.8556 29.9382H35.8268C38.1282 29.9382 40 28.0664 40 25.7657C40 25.7643 39.9993 25.7636 39.9993 25.7622V4.87515C39.9993 4.78463 39.9812 4.6941 39.9457 4.60915C39.9102 4.52349 39.8594 4.4469 39.7946 4.38213L35.6179 0.204727C35.5531 0.139967 35.4765 0.089133 35.3909 0.0536191C35.3059 0.0181052 35.2154 0 35.1249 0H16.3283C15.9432 0 15.6319 0.311965 15.6319 0.696351V25.0686H9.37799C8.99291 25.0686 8.68164 25.3799 8.68164 25.765C8.68164 28.0664 10.5534 29.9382 12.8556 29.9382ZM10.1732 26.462H16.2941C16.3067 26.4627 16.3157 26.469 16.3283 26.469C16.3408 26.469 16.3499 26.4627 16.3624 26.462H31.7162C31.8499 27.2552 32.2078 27.971 32.7225 28.5455H12.8556C11.5638 28.5455 10.4852 27.657 10.1732 26.462ZM35.8212 2.37804L37.622 4.1788H35.8212V2.37804ZM17.0246 1.3934H34.4285V4.87515C34.4285 5.25954 34.7398 5.5715 35.1249 5.5715H38.6066V25.7726C38.6031 27.3018 37.3581 28.5455 35.8268 28.5455C34.2934 28.5455 33.0456 27.2983 33.0456 25.7657C33.0456 25.3806 32.7343 25.0693 32.3492 25.0693H17.0246V1.3934Z", "fill", "#282828"], ["d", "M21.2105 12.5322H34.4384C34.8235 12.5322 35.1347 12.2203 35.1347 11.8359C35.1347 11.4515 34.8235 11.1395 34.4384 11.1395H21.2105C20.8254 11.1395 20.5142 11.4515 20.5142 11.8359C20.5142 12.2203 20.8254 12.5322 21.2105 12.5322Z", "fill", "#282828"], ["d", "M21.2105 15.3247H34.4384C34.8235 15.3247 35.1347 15.0127 35.1347 14.6284C35.1347 14.244 34.8235 13.932 34.4384 13.932H21.2105C20.8254 13.932 20.5142 14.244 20.5142 14.6284C20.5142 15.0127 20.8254 15.3247 21.2105 15.3247Z", "fill", "#282828"], ["d", "M21.2105 18.1169H34.4384C34.8235 18.1169 35.1347 17.805 35.1347 17.4206C35.1347 17.0362 34.8235 16.7242 34.4384 16.7242H21.2105C20.8254 16.7242 20.5142 17.0362 20.5142 17.4206C20.5142 17.805 20.8254 18.1169 21.2105 18.1169Z", "fill", "#282828"], ["d", "M35.1347 20.2125C35.1347 19.8274 34.8235 19.5161 34.4384 19.5161H21.2105C20.8254 19.5161 20.5142 19.8274 20.5142 20.2125C20.5142 20.5975 20.8254 20.9088 21.2105 20.9088H34.4384C34.8235 20.9088 35.1347 20.5975 35.1347 20.2125Z", "fill", "#282828"], ["d", "M9.21018 22.638C9.57361 22.638 9.868 22.3436 9.868 21.9802C9.868 21.6168 9.57361 21.3224 9.21018 21.3224H0.657822C0.294396 21.3224 0 21.6168 0 21.9802C0 22.3436 0.294396 22.638 0.657822 22.638H9.21018Z", "fill", "#282828"], ["d", "M12.6189 17.948C12.9823 17.948 13.2767 17.6536 13.2767 17.2901C13.2767 16.9267 12.9823 16.6323 12.6189 16.6323H4.06651C3.70309 16.6323 3.40869 16.9267 3.40869 17.2901C3.40869 17.6536 3.70309 17.948 4.06651 17.948H12.6189Z", "fill", "#282828"], ["d", "M10.4011 13.5127C10.7645 13.5127 11.0589 13.2183 11.0589 12.8548C11.0589 12.4914 10.7645 12.197 10.4011 12.197H1.84874C1.48531 12.197 1.19092 12.4914 1.19092 12.8548C1.19092 13.2183 1.48531 13.5127 1.84874 13.5127H10.4011Z", "fill", "#282828"], ["d", "M11.51 7.9686C11.8734 7.9686 12.1678 7.6742 12.1678 7.31078C12.1678 6.94735 11.8734 6.65295 11.51 6.65295H2.95763C2.5942 6.65295 2.2998 6.94735 2.2998 7.31078C2.2998 7.6742 2.5942 7.9686 2.95763 7.9686H11.51Z", "fill", "#282828"]],
      template: function ExampleOtherIconsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "clipPath", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "rect", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "svg", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "svg", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "svg", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "svg", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "svg", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "svg", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "g", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "clipPath", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "rect", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "svg", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "svg", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "svg", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "g", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "clipPath", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "rect", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "svg", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "svg", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "svg", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "g", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "clipPath", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "rect", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "svg", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "svg", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "g", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "clipPath", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "rect", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "svg", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n\n[mui-flex-icon][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 24px !important;\n  min-height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 38px !important;\n  min-height: 38px !important;\n  max-width: 38px !important;\n  max-height: 38px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: inherit;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%]:hover {\n  transform: scale(1.4);\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-input-icon][_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtb3RoZXItaWNvbnMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWRpcmVjdGlvbi5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1vdGhlci1pY29ucy9leGFtcGxlLW90aGVyLWljb25zLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1vdGhlci1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtdGV4dC5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvZXhhbXBsZXMvZXhhbXBsZS1vdGhlci1pY29ucy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtc3BhY2VzLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLW90aGVyLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1idXR0b25zLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLW90aGVyLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1jb2x1bXMubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtb3RoZXItaWNvbnMvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRhYmxlLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9leGFtcGxlcy9leGFtcGxlLW90aGVyLWljb25zL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtb3RoZXItaWNvbnMvZXhhbXBsZS1vdGhlci1pY29ucy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBRENRO0VBQ0ksbUJBQUE7QUNDWjtBREVRO0VBQ0ksOEJBQUE7QUNBWjtBREdRO0VBQ0ksNkJBQUE7QUNEWjtBRElRO0VBQ0kseUJBQUE7QUNGWjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FETVE7RUFDSSx1QkFBQTtBQ0paO0FET1E7RUFDSSxxQkFBQTtBQ0xaO0FEYUk7RUFDSSxzQkFBQTtBQ1hS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RXBOSTtFQUNJLGtCQUFBO0FGc05SO0FFbk5JO0VBQ0ksa0JBQUE7QUZxTlI7QUVsTkk7RUFDSSxrQkFBQTtBRm9OUjtBRWpOSTtFQUNJLGtCQUFBO0FGbU5SO0FFaE5JO0VBQ0ksa0JBQUE7QUZrTlI7QUUvTUk7RUFDSSxrQkFBQTtBRmlOUjtBRTlNSTtFQUNJLGtCQUFBO0FGZ05SO0FFM01JO0VBQ0ksY0FBQTtBRjZNUjtBRTFNSTtFQUNJLGdCQUFBO0FGNE1SO0FFek1JO0VBQ0ksZ0JBQUE7QUYyTVI7QUV4TUk7RUFDSSxpQkFBQTtBRjBNUjtBRXZNSTtFQUNJLGlCQUFBO0FGeU1SO0FFdE1JO0VBQ0ksaUJBQUE7QUZ3TVI7QUVyTUk7RUFDSSxpQkFBQTtBRnVNUjtBRXBNSTtFQUNJLGlCQUFBO0FGc01SO0FFbk1JO0VBQ0ksaUJBQUE7QUZxTVI7QUVsTUk7RUFDSSxpQkFBQTtBRm9NUjtBRWpNSTtFQUNJLGlCQUFBO0FGbU1SO0FFOUxJO0VBQ0ksZ0JBQUE7QUZnTVI7QUU3TEk7RUFDSSxrQkFBQTtBRitMUjtBRTVMSTtFQUNJLGtCQUFBO0FGOExSO0FFM0xJO0VBQ0ksbUJBQUE7QUY2TFI7QUUxTEk7RUFDSSxtQkFBQTtBRjRMUjtBRXpMSTtFQUNJLG1CQUFBO0FGMkxSO0FFeExJO0VBQ0ksbUJBQUE7QUYwTFI7QUV2TEk7RUFDSSxtQkFBQTtBRnlMUjtBRXRMSTtFQUNJLG1CQUFBO0FGd0xSO0FFckxJO0VBQ0ksbUJBQUE7QUZ1TFI7QUVwTEk7RUFDSSxtQkFBQTtBRnNMUjtBRWpMSTtFQUNJLGFBQUE7QUZtTFI7QUVoTEk7RUFDSSxlQUFBO0FGa0xSO0FFL0tJO0VBQ0ksZUFBQTtBRmlMUjtBRTlLSTtFQUNJLGdCQUFBO0FGZ0xSO0FFN0tJO0VBQ0ksZ0JBQUE7QUYrS1I7QUU1S0k7RUFDSSxnQkFBQTtBRjhLUjtBRTNLSTtFQUNJLGdCQUFBO0FGNktSO0FFMUtJO0VBQ0ksZ0JBQUE7QUY0S1I7QUV6S0k7RUFDSSxnQkFBQTtBRjJLUjtBRXhLSTtFQUNJLGdCQUFBO0FGMEtSO0FFdktJO0VB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QTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FOaWpCSjtBTTlpQkE7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QU5nakJKO0FNN2lCQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBTitpQko7QU01aUJBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QU44aUJKO0FNM2lCQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBTjZpQko7QU0xaUJBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QU40aUJKO0FNemlCQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7QU4yaUJKO0FNeGlCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FOMGlCSjtBTXZpQkE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBTnlpQko7QU10aUJBO0VBQ0ksZ0JBQUE7QU53aUJKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL2V4YW1wbGVzL2V4YW1wbGUtb3RoZXItaWNvbnMvZXhhbXBsZS1vdGhlci1pY29ucy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJl9ob3Jpem9udGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfd3JhcCB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFzZWxpbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiAgICAmX3ZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWxlZnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgJl93cmFwIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbn1cblxuXG4uZnVsbC1zaXplIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mbGV4X2hvcml6b250YWwge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZsZXhfaG9yaXpvbnRhbC1taWRkbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5mbGV4X2hvcml6b250YWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2hvcml6b250YWxfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mbGV4X2hvcml6b250YWwtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF9ob3Jpem9udGFsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfdmVydGljYWwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXhfdmVydGljYWwtbWlkZGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF92ZXJ0aWNhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfdmVydGljYWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmZsZXhfdmVydGljYWwtbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZsZXhfdmVydGljYWwtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZmxleF93cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZ1bGwtc2l6ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm11aS10ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2gxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g1IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9ib2R5LXhsIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktcyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvZHkteHMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tdWktdGV4dF9saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5tdWktdGV4dF9saW5rLWhvdmVyZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5yb3V0ZXJfbGluayB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3V0ZXJfbGluay1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG59XG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuLm11aS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tdWktc3BhY2Uge1xuICAvKiBSSUdIVCBTUEFDRSAqL1xuICAvKiBMRUZUIFNQQUNFICovXG4gIC8qIEJPVFRPTSBTUEFDRSAqL1xuICAvKiBUT1AgU1BBQ0UgKi9cbn1cbi5tdWktc3BhY2VfcmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTMge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTYge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTcge1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTgge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTkge1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTAge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5tdWktc3BhY2VfbGVmdC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC02IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNyB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi5tdWktc3BhY2VfbGVmdC05IHtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm11aS1zcGFjZV9ib3R0b20tMSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS02IHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTcge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS05IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5tdWktc3BhY2VfdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm11aS1zcGFjZV90b3AtMSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0zIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tdWktc3BhY2VfdG9wLTQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLm11aS1zcGFjZV90b3AtNSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC02IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTcge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLm11aS1zcGFjZV90b3AtOCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4ubXVpLXNwYWNlX3RvcC05IHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5tdWktYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9zaXplLWwge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtbSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25fc2l6ZS1zIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWNvbF9tZC0zIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxudGFibGUubXVpLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjOTU5YmE0O1xufVxuLm11aS10YWJsZV9fdHIge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgb3V0bGluZTogMDtcbn1cbi5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzMzMztcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgY29sb3I6ICM3OTgxOGM7XG59XG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGhlaWdodDogNzlweDtcbn1cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogSUNPTlMgKi9cblttdWktZmxleC1pY29uXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblttdWktZmxleC1pY29uXS5wcmV2aWV3IHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cInNtYWxsXCJdIHtcbiAgbWFyZ2luOiA2cHg7XG4gIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cInNtYWxsXCJdID4gZGl2IHtcbiAgbWluLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblttdWktZmxleC1pY29uXVtzaXplPVwibm9ybWFsXCJdIHtcbiAgbWFyZ2luOiA2cHg7XG4gIG1pbi13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXSA+IGRpdiB7XG4gIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl0gPiBkaXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuW211aS1mbGV4LWljb25dID4gZGl2ID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblttdWktZmxleC1pY29uXS5wcmV2aWV3OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblttdWktZmxleC1pbnB1dC1pY29uXSB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4iLCIubXVpLXRleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gICAgJl9oMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gyIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDMge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDQge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfYm9keS14bCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbF9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW0ge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1zIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS1zX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHkteHMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG5cbiAgICAmX2xpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgICAgICYtaG92ZXJlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWhvdmVyZWQ6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICAgICAgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuLnJvdXRlcl9saW5rIHtcbiAgICBvcGFjaXR5OiAuNztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICYtYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xuICAgIH1cbn1cblxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuXG4ubXVpLWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gICAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG59XG4iLCIubXVpLXNwYWNlIHtcbiAgICAvKiBSSUdIVCBTUEFDRSAqL1xuXG4gICAgJl9yaWdodC0wIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICZfcmlnaHQtMSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC01IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC04IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEwIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIExFRlQgU1BBQ0UgKi9cblxuICAgICZfbGVmdC0wIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0yIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC00IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC03IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTgge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC0xMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIEJPVFRPTSBTUEFDRSAqL1xuXG4gICAgJl9ib3R0b20tMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0yIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTgge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTEwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAvKiBUT1AgU1BBQ0UgKi9cblxuICAgICZfdG9wLTAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgICZfdG9wLTEge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG5cbiAgICAmX3RvcC0zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAmX3RvcC00IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAmX3RvcC01IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAmX3RvcC02IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAmX3RvcC03IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB9XG5cbiAgICAmX3RvcC04IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAmX3RvcC05IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICB9XG5cbiAgICAmX3RvcC0xMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxufVxuIiwiLm11aS1idXR0b24ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG5cblxuICAgICZfY29sb3Ige1xuICAgICAgICAmLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeVtkaXNhYmxlZF0ge1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3M6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3Mge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG5cblxuICAgICAgICAmLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWVycm9yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8taG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8pO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX3NpemUge1xuICAgICAgICAmLWwge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1tIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcyB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwibFwiXSB7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwic1wiXSB7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4iLCIubXVpLWNvbCB7XG5cbiAgICAmX21kLTMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuIiwidGFibGUubXVpLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfYm9yZGVyX25vbmUpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjOTU5YmE0O1xufVxuXG4ubXVpLXRhYmxlX190ciB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG59XG5cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiA0cHggMCAwO1xuICAgIGNvbG9yOiAjNzk4MThjO1xufVxuXG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX3NpemVfbCxcbi5tdWktdGFibGVfc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBoZWlnaHQ6IDc5cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm11aS10YWJsZV9fdGRfZmlyc3QsXG4ubXVpLXRhYmxlX190aF9maXJzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X3JpZ2h0LFxuLm11aS10YWJsZV9fdGhfdGV4dF9yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1saWJyYXJ5Lmxlc3MnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIElDT05TICovXG5cblttdWktZmxleC1pY29uXSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cblttdWktZmxleC1pY29uXS5wcmV2aWV3IHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuW211aS1mbGV4LWljb25dW3NpemU9XCJzbWFsbFwiXSB7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgbWluLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbn1cblxuW211aS1mbGV4LWljb25dW3NpemU9XCJzbWFsbFwiXT5kaXYge1xuICAgIG1pbi13aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cblttdWktZmxleC1pY29uXVtzaXplPVwibm9ybWFsXCJdIHtcbiAgICBtYXJnaW46IDZweDtcbiAgICBtaW4td2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuXG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXT5kaXYge1xuICAgIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5cblttdWktZmxleC1pY29uXT5kaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdFxufVxuXG5bbXVpLWZsZXgtaWNvbl0+ZGl2PmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5bbXVpLWZsZXgtaWNvbl0ucHJldmlldzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG5bbXVpLWZsZXgtaW5wdXQtaWNvbl0ge1xuICAgIHRyYW5zaXRpb246IC4zcztcbn1cbiJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleOtherIconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example-other-icons',
          templateUrl: './example-other-icons.component.html',
          styleUrls: ['./example-other-icons.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/mui-flex-icons-page.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/mui-flex-icons-page.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: MuiFlexIconsPageComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryPagesMuiFlexIconsPageMuiFlexIconsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MuiFlexIconsPageComponent", function () {
      return MuiFlexIconsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_classes_tabsMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/classes/tabsMenu */
    "./src/app/projects/mui-flex-library/shared/classes/tabsMenu.ts");
    /* harmony import */


    var _library_mui_flex_library_components_mui_card_box_mui_card_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../library/mui-flex-library/components/mui-card-box/mui-card-box.component */
    "./src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.component.ts");

    var MuiFlexIconsPageComponent = /*#__PURE__*/function () {
      function MuiFlexIconsPageComponent() {
        _classCallCheck(this, MuiFlexIconsPageComponent);

        this.activeItemIndex = 0;
        this.tabsItems = _shared_classes_tabsMenu__WEBPACK_IMPORTED_MODULE_1__["tabsMenu"];
      }

      _createClass(MuiFlexIconsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setProperties",
        value: function setProperties() {}
      }]);

      return MuiFlexIconsPageComponent;
    }();

    MuiFlexIconsPageComponent.ɵfac = function MuiFlexIconsPageComponent_Factory(t) {
      return new (t || MuiFlexIconsPageComponent)();
    };

    MuiFlexIconsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MuiFlexIconsPageComponent,
      selectors: [["app-mui-flex-icons-page"]],
      decls: 6,
      vars: 0,
      consts: [[1, "content"], [1, "flex", "flex_vertical"], [1, "mui-space_bottom-6"], [1, "mui-text_body-l"], [1, "flex", "flex_horizontal"]],
      template: function MuiFlexIconsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mui-card-box", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_library_mui_flex_library_components_mui_card_box_mui_card_box_component__WEBPACK_IMPORTED_MODULE_2__["MuiCardBoxComponent"]],
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media screen and (max-width: 375px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 0 20px 15px;\n    overflow: hidden;\n  }\n  .header[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-style: normal;\n    font-size: 20px;\n    font-family: 'Roboto Regular';\n    line-height: 24px;\n    letter-spacing: -0.3px;\n    min-height: 66px;\n    color: #333;\n    box-shadow: inset 0 -1px 0 0 #e7e8ea;\n    padding: 24px 20px 0;\n    box-sizing: border-box;\n    margin: 0;\n    margin-bottom: 32px;\n    -ms-flex-negative: 0;\n    font-feature-settings: 'liga' off;\n    flex-shrink: 0;\n    background-color: inherit;\n    max-width: 375px;\n    justify-content: space-between;\n  }\n  .header_dark-mode[_ngcontent-%COMP%] {\n    background-color: #17181c;\n    color: #9ca4af;\n    box-shadow: inset 0 -1px 0 0 #232429;\n  }\n  .header_light-mode[_ngcontent-%COMP%] {\n    color: #333;\n    background-color: #fff;\n    box-shadow: inset 0 -1px 0 0 #e7e8ea;\n  }\n}\n@media screen and (min-width: 376px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 32px 40px 15px;\n    overflow: hidden;\n  }\n  .header[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 40px;\n    font-family: 'Roboto Regular';\n    line-height: 44px;\n    letter-spacing: -0.3px;\n    min-height: 116px;\n    padding: 48px 40px 0;\n    box-sizing: border-box;\n    margin: 0;\n    flex-shrink: 0;\n    background-color: inherit;\n    width: 100%;\n    max-width: 100%;\n    justify-content: space-between;\n  }\n  .header_dark-mode[_ngcontent-%COMP%] {\n    background-color: #17181c;\n    color: #9ca4af;\n    box-shadow: inset 0 -1px 0 0 #232429;\n  }\n  .header_light-mode[_ngcontent-%COMP%] {\n    color: #333;\n    background-color: #fff;\n    box-shadow: inset 0 -1px 0 0 #e7e8ea;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n\n[mui-flex-icon][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][size=\"small\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 24px !important;\n  min-height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%] {\n  margin: 6px;\n  min-width: 38px !important;\n  min-height: 38px !important;\n  max-width: 38px !important;\n  max-height: 38px !important;\n}\n[mui-flex-icon][size=\"normal\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 32px !important;\n  min-height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: inherit;\n}\n[mui-flex-icon][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[mui-flex-icon].preview[_ngcontent-%COMP%]:hover {\n  transform: scale(1.4);\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n[mui-flex-input-icon][_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1kaXJlY3Rpb24ubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL211aS1mbGV4LWljb25zLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvcGFnZXMvbXVpLWZsZXgtaWNvbnMtcGFnZS9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtdGV4dC5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXNwYWNlcy5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWJ1dHRvbnMubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1jb2x1bXMubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC10YWJsZS5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL21pY3JvLXdvcmxkLXN0eWxlL3BhZ2Uuc3R5bGUubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9wYWdlcy9tdWktZmxleC1pY29ucy1wYWdlL211aS1mbGV4LWljb25zLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0FDQVo7QURHUTtFQUNJLDZCQUFBO0FDRFo7QURJUTtFQUNJLHlCQUFBO0FDRlo7QURLUTtFQUNJLGVBQUE7QUNIWjtBRE1RO0VBQ0ksdUJBQUE7QUNKWjtBRE9RO0VBQ0kscUJBQUE7QUNMWjtBRGFJO0VBQ0ksc0JBQUE7QUNYUjtBRGFRO0VBQ0ksdUJBQUE7QUNYWjtBRGNRO0VBQ0ksOEJBQUE7QUNaWjtBRGVRO0VBQ0ksNkJBQUE7QUNiWjtBRGdCUTtFQUNJLG1CQUFBO0FDZFo7QURpQlM7RUFDSSx5QkFB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O0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBUHduQko7QU9ybkJBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtBUHVuQko7QU9wbkJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QVBzbkJKO0FPbm5CQTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FQcW5CSjtBT2xuQkE7RUFDSSxnQkFBQTtBUG9uQkoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L3BhZ2VzL211aS1mbGV4LWljb25zLXBhZ2UvbXVpLWZsZXgtaWNvbnMtcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJl9ob3Jpem9udGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfd3JhcCB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFzZWxpbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiAgICAmX3ZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWxlZnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgJl93cmFwIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbn1cblxuXG4uZnVsbC1zaXplIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mbGV4X2hvcml6b250YWwge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZsZXhfaG9yaXpvbnRhbC1taWRkbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5mbGV4X2hvcml6b250YWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2hvcml6b250YWxfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mbGV4X2hvcml6b250YWwtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF9ob3Jpem9udGFsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfdmVydGljYWwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXhfdmVydGljYWwtbWlkZGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF92ZXJ0aWNhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfdmVydGljYWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmZsZXhfdmVydGljYWwtbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZsZXhfdmVydGljYWwtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZmxleF93cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZ1bGwtc2l6ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm11aS10ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2gxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g1IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9ib2R5LXhsIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktcyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvZHkteHMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tdWktdGV4dF9saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5tdWktdGV4dF9saW5rLWhvdmVyZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5yb3V0ZXJfbGluayB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3V0ZXJfbGluay1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG59XG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuLm11aS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tdWktc3BhY2Uge1xuICAvKiBSSUdIVCBTUEFDRSAqL1xuICAvKiBMRUZUIFNQQUNFICovXG4gIC8qIEJPVFRPTSBTUEFDRSAqL1xuICAvKiBUT1AgU1BBQ0UgKi9cbn1cbi5tdWktc3BhY2VfcmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTMge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTYge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTcge1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTgge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTkge1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTAge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5tdWktc3BhY2VfbGVmdC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC02IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNyB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi5tdWktc3BhY2VfbGVmdC05IHtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm11aS1zcGFjZV9ib3R0b20tMSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS02IHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTcge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS05IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5tdWktc3BhY2VfdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm11aS1zcGFjZV90b3AtMSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0zIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tdWktc3BhY2VfdG9wLTQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLm11aS1zcGFjZV90b3AtNSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC02IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTcge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLm11aS1zcGFjZV90b3AtOCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4ubXVpLXNwYWNlX3RvcC05IHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5tdWktYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9zaXplLWwge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtbSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25fc2l6ZS1zIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWNvbF9tZC0zIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxudGFibGUubXVpLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjOTU5YmE0O1xufVxuLm11aS10YWJsZV9fdHIge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgb3V0bGluZTogMDtcbn1cbi5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzMzMztcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgY29sb3I6ICM3OTgxOGM7XG59XG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGhlaWdodDogNzlweDtcbn1cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMCAyMHB4IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgICBtaW4taGVpZ2h0OiA2NnB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCAjZTdlOGVhO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgI2U3ZThlYTtcbiAgICBwYWRkaW5nOiAyNHB4IDIwcHggMDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJyBvZmY7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBtYXgtd2lkdGg6IDM3NXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuaGVhZGVyX2RhcmstbW9kZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTgxYztcbiAgICBjb2xvcjogIzljYTRhZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgIzIzMjQyOTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwICMyMzI0Mjk7XG4gIH1cbiAgLmhlYWRlcl9saWdodC1tb2RlIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCAjZTdlOGVhO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgI2U3ZThlYTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMycHggNDBweCAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgICBtaW4taGVpZ2h0OiAxMTZweDtcbiAgICBwYWRkaW5nOiA0OHB4IDQwcHggMDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgLW1zLWZsZXgtbmVnYXRpdmU6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5oZWFkZXJfZGFyay1tb2RlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxODFjO1xuICAgIGNvbG9yOiAjOWNhNGFmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCAjMjMyNDI5O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgIzIzMjQyOTtcbiAgfVxuICAuaGVhZGVyX2xpZ2h0LW1vZGUge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwICNlN2U4ZWE7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCAjZTdlOGVhO1xuICB9XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogSUNPTlMgKi9cblttdWktZmxleC1pY29uXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblttdWktZmxleC1pY29uXS5wcmV2aWV3IHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cInNtYWxsXCJdIHtcbiAgbWFyZ2luOiA2cHg7XG4gIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cInNtYWxsXCJdID4gZGl2IHtcbiAgbWluLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblttdWktZmxleC1pY29uXVtzaXplPVwibm9ybWFsXCJdIHtcbiAgbWFyZ2luOiA2cHg7XG4gIG1pbi13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cIm5vcm1hbFwiXSA+IGRpdiB7XG4gIG1pbi13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG59XG5bbXVpLWZsZXgtaWNvbl0gPiBkaXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuW211aS1mbGV4LWljb25dID4gZGl2ID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblttdWktZmxleC1pY29uXS5wcmV2aWV3OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblttdWktZmxleC1pbnB1dC1pY29uXSB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4iLCIubXVpLXRleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gICAgJl9oMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gyIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDMge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDQge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfYm9keS14bCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbF9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW0ge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1zIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS1zX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHkteHMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG5cbiAgICAmX2xpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgICAgICYtaG92ZXJlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWhvdmVyZWQ6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICAgICAgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuLnJvdXRlcl9saW5rIHtcbiAgICBvcGFjaXR5OiAuNztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICYtYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xuICAgIH1cbn1cblxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuXG4ubXVpLWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gICAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG59XG4iLCIubXVpLXNwYWNlIHtcbiAgICAvKiBSSUdIVCBTUEFDRSAqL1xuXG4gICAgJl9yaWdodC0wIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICZfcmlnaHQtMSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC01IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC04IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEwIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIExFRlQgU1BBQ0UgKi9cblxuICAgICZfbGVmdC0wIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0yIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC00IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC03IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTgge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC0xMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIEJPVFRPTSBTUEFDRSAqL1xuXG4gICAgJl9ib3R0b20tMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0yIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTgge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTEwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAvKiBUT1AgU1BBQ0UgKi9cblxuICAgICZfdG9wLTAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgICZfdG9wLTEge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG5cbiAgICAmX3RvcC0zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAmX3RvcC00IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAmX3RvcC01IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAmX3RvcC02IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAmX3RvcC03IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB9XG5cbiAgICAmX3RvcC04IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAmX3RvcC05IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICB9XG5cbiAgICAmX3RvcC0xMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxufVxuIiwiLm11aS1idXR0b24ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG5cblxuICAgICZfY29sb3Ige1xuICAgICAgICAmLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeVtkaXNhYmxlZF0ge1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3M6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3Mge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG5cblxuICAgICAgICAmLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWVycm9yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8taG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8pO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX3NpemUge1xuICAgICAgICAmLWwge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1tIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcyB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwibFwiXSB7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwic1wiXSB7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4iLCIubXVpLWNvbCB7XG5cbiAgICAmX21kLTMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuIiwidGFibGUubXVpLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfYm9yZGVyX25vbmUpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjOTU5YmE0O1xufVxuXG4ubXVpLXRhYmxlX190ciB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG59XG5cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiA0cHggMCAwO1xuICAgIGNvbG9yOiAjNzk4MThjO1xufVxuXG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX3NpemVfbCxcbi5tdWktdGFibGVfc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBoZWlnaHQ6IDc5cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm11aS10YWJsZV9fdGRfZmlyc3QsXG4ubXVpLXRhYmxlX190aF9maXJzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X3JpZ2h0LFxuLm11aS10YWJsZV9fdGhfdGV4dF9yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iLCIvLyBNb2JpbGVcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMTVweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBtaW4taGVpZ2h0OiA2NnB4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwICNlN2U4ZWE7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgI2U3ZThlYTtcbiAgICAgICAgcGFkZGluZzogMjRweCAyMHB4IDA7XG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcbiAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSdvZmY7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBtYXgtd2lkdGg6IDM3NXB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgJl9kYXJrLW1vZGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTgxYztcbiAgICAgICAgICAgIGNvbG9yOiAjOWNhNGFmO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwICMyMzI0Mjk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwICMyMzI0Mjk7XG4gICAgICAgIH1cblxuICAgICAgICAmX2xpZ2h0LW1vZGUge1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwICNlN2U4ZWE7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwICNlN2U4ZWE7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4vLyBEZXNrdG9wXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMzJweCA0MHB4IDE1cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDExNnB4O1xuICAgICAgICBwYWRkaW5nOiA0OHB4IDQwcHggMDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICZfZGFyay1tb2RlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE4MWM7XG4gICAgICAgICAgICBjb2xvcjogIzljYTRhZjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCAjMjMyNDI5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCAjMjMyNDI5O1xuICAgICAgICB9XG5cbiAgICAgICAgJl9saWdodC1tb2RlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCAjZTdlOGVhO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMCAjZTdlOGVhO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtbGlicmFyeS5sZXNzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL21pY3JvLXdvcmxkLXN0eWxlL3BhZ2Uuc3R5bGUubGVzcyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogSUNPTlMgKi9cblxuW211aS1mbGV4LWljb25dIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuW211aS1mbGV4LWljb25dLnByZXZpZXcge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cInNtYWxsXCJdIHtcbiAgICBtYXJnaW46IDZweDtcbiAgICBtaW4td2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xufVxuXG5bbXVpLWZsZXgtaWNvbl1bc2l6ZT1cInNtYWxsXCJdPmRpdiB7XG4gICAgbWluLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuW211aS1mbGV4LWljb25dW3NpemU9XCJub3JtYWxcIl0ge1xuICAgIG1hcmdpbjogNnB4O1xuICAgIG1pbi13aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDM4cHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cblttdWktZmxleC1pY29uXVtzaXplPVwibm9ybWFsXCJdPmRpdiB7XG4gICAgbWluLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbn1cblxuW211aS1mbGV4LWljb25dPmRpdiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0XG59XG5cblttdWktZmxleC1pY29uXT5kaXY+aW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblttdWktZmxleC1pY29uXS5wcmV2aWV3OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cblttdWktZmxleC1pbnB1dC1pY29uXSB7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xufVxuIl19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuiFlexIconsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mui-flex-icons-page',
          templateUrl: './mui-flex-icons-page.component.html',
          styleUrls: ['./mui-flex-icons-page.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/mui-flex-icons-page.module.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/mui-flex-icons-page.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: MuiFlexIconsPageModule */

  /***/
  function srcAppProjectsMuiFlexLibraryPagesMuiFlexIconsPageMuiFlexIconsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MuiFlexIconsPageModule", function () {
      return MuiFlexIconsPageModule;
    });
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mui_flex_icons_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mui-flex-icons-page.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/mui-flex-icons-page.component.ts");
    /* harmony import */


    var _modules_preview_preview_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../modules/preview/preview.module */
    "./src/app/projects/mui-flex-library/modules/preview/preview.module.ts");
    /* harmony import */


    var _configs_icons_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../configs/icons.config */
    "./src/app/projects/mui-flex-library/configs/icons.config.ts");
    /* harmony import */


    var _examples_example_base_icons_example_base_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./examples/example-base-icons/example-base-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-base-icons/example-base-icons.component.ts");
    /* harmony import */


    var _examples_example_normal_icons_example_normal_icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./examples/example-normal-icons/example-normal-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-normal-icons/example-normal-icons.component.ts");
    /* harmony import */


    var _examples_example_large_icons_example_large_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./examples/example-large-icons/example-large-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-large-icons/example-large-icons.component.ts");
    /* harmony import */


    var _examples_example_editor_icons_example_editor_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./examples/example-editor-icons/example-editor-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-editor-icons/example-editor-icons.component.ts");
    /* harmony import */


    var _examples_example_marker_icons_example_marker_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./examples/example-marker-icons/example-marker-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-marker-icons/example-marker-icons.component.ts");
    /* harmony import */


    var _examples_example_other_icons_example_other_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./examples/example-other-icons/example-other-icons.component */
    "./src/app/projects/mui-flex-library/pages/mui-flex-icons-page/examples/example-other-icons/example-other-icons.component.ts");
    /* harmony import */


    var src_app_library_mui_flex_library_components_mui_card_box_mui_card_box_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.module */
    "./src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MuiFlexIconsPageModule = function MuiFlexIconsPageModule() {
      _classCallCheck(this, MuiFlexIconsPageModule);
    };

    MuiFlexIconsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MuiFlexIconsPageModule
    });
    MuiFlexIconsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MuiFlexIconsPageModule_Factory(t) {
        return new (t || MuiFlexIconsPageModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], src_app_library_mui_flex_library_components_mui_card_box_mui_card_box_module__WEBPACK_IMPORTED_MODULE_11__["MuiCardBoxModule"], _modules_preview_preview_module__WEBPACK_IMPORTED_MODULE_3__["PreviewModule"].forRoot(_configs_icons_config__WEBPACK_IMPORTED_MODULE_4__["PREVIEW_ICONS_PAGE_CONFIG"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MuiFlexIconsPageModule, {
        declarations: [_mui_flex_icons_page_component__WEBPACK_IMPORTED_MODULE_2__["MuiFlexIconsPageComponent"], _examples_example_base_icons_example_base_icons_component__WEBPACK_IMPORTED_MODULE_5__["ExampleBaseIconsComponent"], _examples_example_normal_icons_example_normal_icons_component__WEBPACK_IMPORTED_MODULE_6__["ExampleNormalIconsComponent"], _examples_example_large_icons_example_large_icons_component__WEBPACK_IMPORTED_MODULE_7__["ExampleLargeIconsComponent"], _examples_example_editor_icons_example_editor_icons_component__WEBPACK_IMPORTED_MODULE_8__["ExampleEditorIconsComponent"], _examples_example_marker_icons_example_marker_icons_component__WEBPACK_IMPORTED_MODULE_9__["ExampleMarkerIconsComponent"], _examples_example_other_icons_example_other_icons_component__WEBPACK_IMPORTED_MODULE_10__["ExampleOtherIconsComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], src_app_library_mui_flex_library_components_mui_card_box_mui_card_box_module__WEBPACK_IMPORTED_MODULE_11__["MuiCardBoxModule"], _modules_preview_preview_module__WEBPACK_IMPORTED_MODULE_3__["PreviewModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MuiFlexIconsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_mui_flex_icons_page_component__WEBPACK_IMPORTED_MODULE_2__["MuiFlexIconsPageComponent"], _examples_example_base_icons_example_base_icons_component__WEBPACK_IMPORTED_MODULE_5__["ExampleBaseIconsComponent"], _examples_example_normal_icons_example_normal_icons_component__WEBPACK_IMPORTED_MODULE_6__["ExampleNormalIconsComponent"], _examples_example_large_icons_example_large_icons_component__WEBPACK_IMPORTED_MODULE_7__["ExampleLargeIconsComponent"], _examples_example_editor_icons_example_editor_icons_component__WEBPACK_IMPORTED_MODULE_8__["ExampleEditorIconsComponent"], _examples_example_marker_icons_example_marker_icons_component__WEBPACK_IMPORTED_MODULE_9__["ExampleMarkerIconsComponent"], _examples_example_other_icons_example_other_icons_component__WEBPACK_IMPORTED_MODULE_10__["ExampleOtherIconsComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], src_app_library_mui_flex_library_components_mui_card_box_mui_card_box_module__WEBPACK_IMPORTED_MODULE_11__["MuiCardBoxModule"], _modules_preview_preview_module__WEBPACK_IMPORTED_MODULE_3__["PreviewModule"].forRoot(_configs_icons_config__WEBPACK_IMPORTED_MODULE_4__["PREVIEW_ICONS_PAGE_CONFIG"])]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-mui-flex-icons-page-mui-flex-icons-page-module-es5.js.map