function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-page-main-page-module"], {
  /***/
  "./src/app/pages/main-page/main-page-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/main-page/main-page-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: MainPageRoutingModule */

  /***/
  function srcAppPagesMainPageMainPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function () {
      return MainPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-page.component */
    "./src/app/pages/main-page/main-page.component.ts");

    var routes = [{
      path: '',
      component: _main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    }];

    var MainPageRoutingModule = function MainPageRoutingModule() {
      _classCallCheck(this, MainPageRoutingModule);
    };

    MainPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainPageRoutingModule
    });
    MainPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainPageRoutingModule_Factory(t) {
        return new (t || MainPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/main-page/main-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/main-page/main-page.component.ts ***!
    \********************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppPagesMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainPageComponent_a_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 32);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    function MainPageComponent_a_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_a_17_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var itemIndex_r3 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.toggleActive(itemIndex_r3, ctx_r5.sidebarItems);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_a_17_div_1_Template, 1, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sidebarItem_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, sidebarItem_r2.active));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarItem_r2.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sidebarItem_r2.name, " ");
      }
    }

    function MainPageComponent_a_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_a_36_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var itemIndex_r8 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.toggleActive(itemIndex_r8, ctx_r9.menuItems);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, menuItem_r7.active));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r7.name, " ");
      }
    }

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent() {
        _classCallCheck(this, MainPageComponent);

        this.sidebarItems = [{
          name: 'Петеряжка мягкой мебели',
          active: false
        }, {
          name: 'Работа с натуральной кожей',
          active: false
        }, {
          name: 'Портфолио работ',
          active: false
        }, {
          name: 'Каталог тканей',
          active: true
        }, {
          name: 'Бары, кафе, рестораны, офисы',
          active: false
        }, {
          name: 'Доставка и оплата',
          active: false
        }, {
          name: 'Как мы работаем',
          active: false
        }, {
          name: 'О компании',
          active: false
        }, {
          name: 'Отзывы',
          active: false
        }, {
          name: 'Как заказать',
          active: false
        }, {
          name: 'Уход за мебелью',
          active: false
        }, {
          name: 'Вопрос - ответ',
          active: false
        }];
        this.menuItems = [{
          name: 'Главная',
          active: false
        }, {
          name: 'Расчитать стоимость',
          active: true
        }, {
          name: 'Примеры работ',
          active: false
        }, {
          name: 'Гарантии',
          active: false
        }, {
          name: 'Отзывы',
          active: false
        }, {
          name: 'Контакты',
          active: false
        }];
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleActive",
        value: function toggleActive(index, array) {
          array.forEach(function (el) {
            return el.active = false;
          });
          array[index].active = true;
        }
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)();
    };

    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-main-page"]],
      decls: 38,
      vars: 2,
      consts: [[1, "frame"], [1, "sidebar"], [1, "sidebar__title"], [1, "logo"], [1, "subtitle"], [1, "underline"], [1, "sidebar__navigate"], [1, "menu"], [1, "menu__icon"], ["height", "32px", "version", "1.1", "viewBox", "0 0 32 32", "width", "32px", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "enable-background", "new 0 0 32 32"], ["d", "M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z", "fill", "currentColor"], [1, "menu__text"], [1, "menu-list"], ["class", "menu-list__link", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content"], [1, "header"], [1, "header__logo-content"], [1, "header__description"], [1, "header__logo"], ["src", "../../../assets/images/cup.png", "alt", ""], [1, "header__right"], ["href", "tel:+74957491493", 1, "phone"], [1, "address-icon"], [1, "icon-pin"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.97201 1.23097C8.17824 0.437204 7.12282 0 6.00033 0C4.87762 0 3.82242 0.437204 3.02866 1.23097C1.55969 2.69971 1.37714 5.46319 2.63331 7.1375L6.00033 12L9.36231 7.14429C10.6235 5.46319 10.441 2.69971 8.97201 1.23097ZM6.03912 5.6979C5.19342 5.6979 4.50507 5.00955 4.50507 4.16385C4.50507 3.31815 5.19342 2.6298 6.03912 2.6298C6.88482 2.6298 7.57317 3.31815 7.57317 4.16385C7.57317 5.00955 6.88482 5.6979 6.03912 5.6979Z", "fill", "currentColor"], [1, "address-description"], [1, "long-underline"], [1, "navbar"], ["class", "navbar__link", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "menu-list__link", 3, "ngClass", "click"], ["class", "menu-list__link--item", 4, "ngIf"], [1, "menu-list__link--item"], [1, "navbar__link", 3, "ngClass", "click"]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u21162 \u043F\u043E \u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u0438 \u0440\u0435\u0441\u0442\u043E\u0432\u0440\u0430\u0446\u0438\u0438 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "8 (495) 749 14 93");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u043F\u043E \u041C\u043E\u0441\u043A\u0432\u0435 \u0438 \u041C\u041E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MainPageComponent_a_36_Template, 2, 4, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: inherit;\n}\n.frame[_ngcontent-%COMP%] {\n  display: flex;\n  height: inherit;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 42pt;\n  color: #edbe7d;\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 24px;\n  border-left: 2px solid #404244;\n  display: flex;\n  flex-direction: column;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 18pt;\n  color: #fffffe;\n  text-transform: uppercase;\n  font-family: \"BerlingskeSerif-Regular\";\n}\n.sidebar[_ngcontent-%COMP%] {\n  max-width: 360px;\n  height: 100%;\n}\n.sidebar__title[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.underline[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(to left, #404244 0%, rgba(64, 66, 68, 0) 100%);\n  border-radius: 2px 0 0 2px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  margin-bottom: 53px;\n}\n.header__description[_ngcontent-%COMP%] {\n  color: #d9dbdc;\n  max-width: 234px;\n  font-size: 16pt;\n  line-height: 112%;\n}\n.header__logo[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__logo-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.menu[_ngcontent-%COMP%] {\n  color: #fffffe;\n  display: flex;\n  align-items: center;\n  padding: 16px 0;\n  margin-left: 24px;\n}\n.menu__icon[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  color: #fcd977;\n}\n.menu__text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"BerlingskeSerif-Regular\";\n}\n.menu-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 56px;\n  margin-top: 44px;\n  margin-left: 24px;\n}\n.menu-list__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #e9e9e8;\n  font-family: \"MuseoSansCyrl-Black\";\n  text-transform: uppercase;\n  font-size: 12pt;\n  margin-bottom: 30px;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n  display: flex;\n  align-items: center;\n}\n.menu-list__link--item[_ngcontent-%COMP%] {\n  height: 2px;\n  background-color: #fcd977;\n  display: inline-flex;\n  width: 26px;\n  height: 3px;\n  max-height: 3px;\n  margin-right: 8px;\n  min-width: 26px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.menu-list__link[_ngcontent-%COMP%]:hover, .menu-list__link.active[_ngcontent-%COMP%] {\n  transition: 0.2s ease-in-out;\n  color: #fcd977;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  white-space: nowrap;\n  position: relative;\n}\n.navbar__link[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #e9e9e8;\n  font-family: \"MuseoSansCyrl-Black\";\n  font-size: 12pt;\n  margin-right: 40px;\n  line-height: 128%;\n  transition: 0.2s ease-in-out;\n  padding-bottom: 24px;\n  cursor: pointer;\n}\n.navbar__link[_ngcontent-%COMP%]:hover, .navbar__link.active[_ngcontent-%COMP%] {\n  transition: 0.2s ease-in-out;\n  color: #fcd977;\n  border-bottom: 2px solid #fcd977;\n}\n.long-underline[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(to right, #404244 0%, rgba(64, 66, 68, 0) 100%);\n  border-radius: 0 2px 2px 0;\n}\n.phone[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n  font-family: \"BerlingskeSerif-SemiBold\";\n  font-size: 20pt;\n  color: #e9e9e8;\n}\n.icon-pin[_ngcontent-%COMP%] {\n  color: #ecb85a;\n  width: 24px;\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: rgba(252, 217, 119, 0.13);\n  margin-right: 8px;\n}\n.address-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.address-description[_ngcontent-%COMP%] {\n  font-size: 16pt;\n  font-family: \"MuseoSansCyrl-Regular\";\n  color: #fcd977;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7QURXQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1RKO0FEWUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1ZKO0FEYUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ1hKO0FEY0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7QUNaSjtBRGVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDYko7QURlSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDYlI7QURpQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBFQUFBO0VBQ0EsMEJBQUE7QUNmSjtBRGtCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDaEJKO0FEa0JJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDaEJSO0FEbUJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2pCUjtBRG9CSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2xCUjtBRHFCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ25CUjtBRHVCQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNyQko7QUR1Qkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNyQlI7QUR3Qkk7RUFDSSxlQUFBO0VBQ0Esc0NBQUE7QUN0QlI7QUQwQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUN4Qko7QUQwQkk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUN4QlI7QUQwQlE7RUFFSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN6Qlo7QUQ2Qkk7O0VBRUksNEJBQUE7RUFDQSxjQUFBO0FDM0JSO0FEK0JBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDN0JKO0FEK0JJO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUM3QlI7QURnQ0k7O0VBRUksNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUM5QlI7QURrQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJFQUFBO0VBQ0EsMEJBQUE7QUNoQ0o7QURtQ0E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDakNKO0FEb0NBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QUNsQ0o7QURxQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNuQ0o7QURzQ0E7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FDcENKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbkBwcm9qZWN0LWNvbG9yLXByaW1hcnktYWN0aXZlOiAjZjhlMTlkO1xuQHByb2plY3QtY29sb3ItcHJpbWFyeTogI2ZjZDk3NztcbkBwcm9qZWN0LWNvbG9yLWRlZmF1bHQtdGV4dDogI2U5ZTllODtcblxuQHByb2plY3QtZm9udC1wcmltYXJ5LWJsYWNrOiBcIk11c2VvU2Fuc0N5cmwtQmxhY2tcIjtcbkBwcm9qZWN0LWZvbnQtcHJpbWFyeS1yZWd1bGFyOiBcIk11c2VvU2Fuc0N5cmwtUmVndWxhclwiO1xuXG5AcHJvamVjdC1mb250LXNlY29uZGFyeS1yZWd1bGFyOiBcIkJlcmxpbmdza2VTZXJpZi1SZWd1bGFyXCI7XG5cbi5mcmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dvIHtcbiAgICBmb250LXNpemU6IDQycHQ7XG4gICAgY29sb3I6ICNlZGJlN2Q7XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0MDQyNDQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThwdDtcbiAgICBjb2xvcjogI2ZmZmZmZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiBAcHJvamVjdC1mb250LXNlY29uZGFyeS1yZWd1bGFyO1xufVxuXG4uc2lkZWJhciB7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLnVuZGVybGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM0MDQyNDQgMCUsIHJnYmEoNjQsIDY2LCA2OCwgMCkgMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMCAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUzcHg7XG5cbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGNvbG9yOiAjZDlkYmRjO1xuICAgICAgICBtYXgtd2lkdGg6IDIzNHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMTIlO1xuICAgIH1cblxuICAgICZfX2xvZ28ge1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19sb2dvLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX3JpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi5tZW51IHtcbiAgICBjb2xvcjogI2ZmZmZmZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICNmY2Q5Nzc7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBwcm9qZWN0LWZvbnQtc2Vjb25kYXJ5LXJlZ3VsYXI7XG4gICAgfVxufVxuXG4ubWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbi10b3A6IDQ0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG5cbiAgICAmX19saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogQHByb2plY3QtY29sb3ItZGVmYXVsdC10ZXh0O1xuICAgICAgICBmb250LWZhbWlseTogQHByb2plY3QtZm9udC1wcmltYXJ5LWJsYWNrO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAmLS1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHJvamVjdC1jb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGluazpob3ZlcixcbiAgICAmX19saW5rLmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGNvbG9yOiBAcHJvamVjdC1jb2xvci1wcmltYXJ5O1xuICAgIH1cbn1cblxuLm5hdmJhciB7XG4gICAgcGFkZGluZzogMjRweCAzMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJl9fbGluayB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IEBwcm9qZWN0LWNvbG9yLWRlZmF1bHQtdGV4dDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBwcm9qZWN0LWZvbnQtcHJpbWFyeS1ibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMjglO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICZfX2xpbms6aG92ZXIsXG4gICAgJl9fbGluay5hY3RpdmUge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICBjb2xvcjogQHByb2plY3QtY29sb3ItcHJpbWFyeTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmY2Q5Nzc7XG4gICAgfVxufVxuXG4ubG9uZy11bmRlcmxpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQwNDI0NCAwJSwgcmdiYSg2NCwgNjYsIDY4LCAwKSAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbn1cblxuLnBob25lIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJlcmxpbmdza2VTZXJpZi1TZW1pQm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICBjb2xvcjogQHByb2plY3QtY29sb3ItZGVmYXVsdC10ZXh0O1xufVxuXG4uaWNvbi1waW4ge1xuICAgIGNvbG9yOiAjZWNiODVhO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBtYXgtaGVpZ2h0OiAyNHB4O1xuICAgIG1heC13aWR0aDogMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAyMTcsIDExOSwgMC4xMyk7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5hZGRyZXNzLWljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZHJlc3MtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICBmb250LWZhbWlseTogQHByb2plY3QtZm9udC1wcmltYXJ5LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBwcm9qZWN0LWNvbG9yLXByaW1hcnk7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG4uZnJhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubG9nbyB7XG4gIGZvbnQtc2l6ZTogNDJwdDtcbiAgY29sb3I6ICNlZGJlN2Q7XG59XG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNDA0MjQ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB0O1xuICBjb2xvcjogI2ZmZmZmZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmLVJlZ3VsYXJcIjtcbn1cbi5zaWRlYmFyIHtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNpZGViYXJfX3RpdGxlIHtcbiAgcGFkZGluZzogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udW5kZXJsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzQwNDI0NCAwJSwgcmdiYSg2NCwgNjYsIDY4LCAwKSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XG59XG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDUzcHg7XG59XG4uaGVhZGVyX19kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjZDlkYmRjO1xuICBtYXgtd2lkdGg6IDIzNHB4O1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxMTIlO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fbG9nby1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX3JpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tZW51IHtcbiAgY29sb3I6ICNmZmZmZmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ubWVudV9faWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICNmY2Q5Nzc7XG59XG4ubWVudV9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmLVJlZ3VsYXJcIjtcbn1cbi5tZW51LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDU2cHg7XG4gIG1hcmdpbi10b3A6IDQ0cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm1lbnUtbGlzdF9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNlOWU5ZTg7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtQmxhY2tcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudS1saXN0X19saW5rLS1pdGVtIHtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Q5Nzc7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1heC1oZWlnaHQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1pbi13aWR0aDogMjZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm1lbnUtbGlzdF9fbGluazpob3Zlcixcbi5tZW51LWxpc3RfX2xpbmsuYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICNmY2Q5Nzc7XG59XG4ubmF2YmFyIHtcbiAgcGFkZGluZzogMjRweCAzMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmF2YmFyX19saW5rIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2U5ZTllODtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC1CbGFja1wiO1xuICBmb250LXNpemU6IDEycHQ7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEyOCU7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyX19saW5rOmhvdmVyLFxuLm5hdmJhcl9fbGluay5hY3RpdmUge1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogI2ZjZDk3NztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmY2Q5Nzc7XG59XG4ubG9uZy11bmRlcmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQwNDI0NCAwJSwgcmdiYSg2NCwgNjYsIDY4LCAwKSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG59XG4ucGhvbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmLVNlbWlCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbiAgY29sb3I6ICNlOWU5ZTg7XG59XG4uaWNvbi1waW4ge1xuICBjb2xvcjogI2VjYjg1YTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWF4LWhlaWdodDogMjRweDtcbiAgbWF4LXdpZHRoOiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMjE3LCAxMTksIDAuMTMpO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5hZGRyZXNzLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZHJlc3MtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtUmVndWxhclwiO1xuICBjb2xvcjogI2ZjZDk3Nztcbn1cbiJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-page',
          templateUrl: './main-page.component.html',
          styleUrls: ['./main-page.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/main-page/main-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/main-page/main-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: MainPageModule */

  /***/
  function srcAppPagesMainPageMainPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageModule", function () {
      return MainPageModule;
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


    var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-page-routing.module */
    "./src/app/pages/main-page/main-page-routing.module.ts");
    /* harmony import */


    var _main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-page.component */
    "./src/app/pages/main-page/main-page.component.ts");

    var MainPageModule = function MainPageModule() {
      _classCallCheck(this, MainPageModule);
    };

    MainPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainPageModule
    });
    MainPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainPageModule_Factory(t) {
        return new (t || MainPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageModule, {
        declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-main-page-main-page-module-es5.js.map