(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-general-page-general-page-module"],{

/***/ "./src/app/pages/general-page/general-page-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/general-page/general-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: GeneralPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPageRoutingModule", function() { return GeneralPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-page.component */ "./src/app/pages/general-page/general-page.component.ts");





const routes = [{ path: '', component: _general_page_component__WEBPACK_IMPORTED_MODULE_2__["GeneralPageComponent"] }];
class GeneralPageRoutingModule {
}
GeneralPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralPageRoutingModule });
GeneralPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralPageRoutingModule_Factory(t) { return new (t || GeneralPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/general-page/general-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/general-page/general-page.component.ts ***!
  \**************************************************************/
/*! exports provided: GeneralPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPageComponent", function() { return GeneralPageComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modules_blocks_components_calculate_block_calculate_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/blocks/components/calculate-block/calculate-block.component */ "./src/app/modules/blocks/components/calculate-block/calculate-block.component.ts");
/* harmony import */ var _modules_general_components_designer_order_block_designer_order_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/general/components/designer-order-block/designer-order-block.component */ "./src/app/modules/general/components/designer-order-block/designer-order-block.component.ts");
/* harmony import */ var _modules_blocks_components_progress_work_progress_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/blocks/components/progress-work/progress-work.component */ "./src/app/modules/blocks/components/progress-work/progress-work.component.ts");
/* harmony import */ var _modules_blocks_components_responsibility_block_responsibility_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/blocks/components/responsibility-block/responsibility-block.component */ "./src/app/modules/blocks/components/responsibility-block/responsibility-block.component.ts");
/* harmony import */ var _modules_blocks_components_production_block_production_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/blocks/components/production-block/production-block.component */ "./src/app/modules/blocks/components/production-block/production-block.component.ts");
/* harmony import */ var _modules_general_components_examples_block_examples_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/general/components/examples-block/examples-block.component */ "./src/app/modules/general/components/examples-block/examples-block.component.ts");
/* harmony import */ var _modules_blocks_components_quality_block_quality_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/blocks/components/quality-block/quality-block.component */ "./src/app/modules/blocks/components/quality-block/quality-block.component.ts");
/* harmony import */ var _modules_general_components_recomended_block_recomended_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/general/components/recomended-block/recomended-block.component */ "./src/app/modules/general/components/recomended-block/recomended-block.component.ts");
/* harmony import */ var _modules_general_components_social_block_social_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/general/components/social-block/social-block.component */ "./src/app/modules/general/components/social-block/social-block.component.ts");
/* harmony import */ var _modules_general_components_benefit_block_benefit_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/general/components/benefit-block/benefit-block.component */ "./src/app/modules/general/components/benefit-block/benefit-block.component.ts");
/* harmony import */ var _modules_blocks_components_bonus_block_bonus_block_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/blocks/components/bonus-block/bonus-block.component */ "./src/app/modules/blocks/components/bonus-block/bonus-block.component.ts");
/* harmony import */ var _modules_blocks_components_map_block_map_block_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/blocks/components/map-block/map-block.component */ "./src/app/modules/blocks/components/map-block/map-block.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















class GeneralPageComponent {
    constructor() {
        this.scrollToElement = true;
        this.scroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.items = [
            {
                firstBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-b1.jpg',
                },
                secondBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-a1.jpg',
                },
            },
            {
                firstBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-b2.jpg',
                },
                secondBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-a2.jpg',
                },
            },
            {
                firstBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-b3.jpg',
                },
                secondBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-a3.jpg',
                },
            },
            {
                firstBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-b4.jpg',
                },
                secondBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-a4.jpg',
                },
            },
            {
                firstBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-b5.jpg',
                },
                secondBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-a5.jpg',
                },
            },
            {
                firstBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-b6.jpg',
                },
                secondBlock: {
                    image: '../../../../../assets/images/examples/main-page/expl-a6.jpg',
                },
            },
            {
                firstBlock: {
                    image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/74959896_599889863925927_3958631416663603649_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=orrPQCdEv4cAX_7FvNY&_nc_tp=18&oh=d84367bfdbffc7c4a59ed1e178966a66&oe=5FBD653A',
                },
                secondBlock: {
                    image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/73212863_563269614511792_2277505714588699698_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=nZD4kow0rPwAX_7rYHo&_nc_tp=18&oh=e48234820c128dd2e8441ba2d5cbce2f&oe=5FBA77F1',
                },
            },
            {
                firstBlock: {
                    image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/64443743_347947166136292_104492508297886915_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=FjSW-DeMUPEAX-M1ug7&_nc_tp=18&oh=195aa4b015213d60d9a22a1019c3441f&oe=5FBA7546',
                },
                secondBlock: {
                    image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/66429490_156199282190357_8535752205649926259_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=zOudDbe9bo4AX-BJC_H&_nc_tp=18&oh=802049a4d5fef6e16fde1dcc214c0602&oe=5FBB1958',
                },
            },
        ];
    }
    scroll() {
        const block = document.getElementById('benefit');
        if (window.pageYOffset > block.offsetTop && this.scrollToElement && window.pageYOffset < (block.offsetTop + block.offsetHeight)) {
            this.scrollToElement = false;
            this.startTimer();
        }
    }
    ngOnInit() { }
    startTimer() {
        this.scroll$.next(true);
    }
}
GeneralPageComponent.ɵfac = function GeneralPageComponent_Factory(t) { return new (t || GeneralPageComponent)(); };
GeneralPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GeneralPageComponent, selectors: [["app-general-page"]], hostBindings: function GeneralPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function GeneralPageComponent_scroll_HostBindingHandler($event) { return ctx.scroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 13, vars: 3, consts: [["id", "payment"], ["id", "garant"], ["id", "examples"], ["id", "social"], ["id", "benefit", 3, "blockIsVisible"], ["id", "contact"]], template: function GeneralPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "block-calculate", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-designer-order-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "block-progress-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-responsibility-block", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-production-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-examples-block", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-quality-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-recomended-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-social-block", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-benefit-block", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-bonus-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-map-block", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockIsVisible", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 1, ctx.scroll$));
    } }, directives: [_modules_blocks_components_calculate_block_calculate_block_component__WEBPACK_IMPORTED_MODULE_2__["CalculateBlockComponent"], _modules_general_components_designer_order_block_designer_order_block_component__WEBPACK_IMPORTED_MODULE_3__["DesignerOrderBlockComponent"], _modules_blocks_components_progress_work_progress_work_component__WEBPACK_IMPORTED_MODULE_4__["ProgressWorkComponent"], _modules_blocks_components_responsibility_block_responsibility_block_component__WEBPACK_IMPORTED_MODULE_5__["ResponsibilityBlockComponent"], _modules_blocks_components_production_block_production_block_component__WEBPACK_IMPORTED_MODULE_6__["ProductionBlockComponent"], _modules_general_components_examples_block_examples_block_component__WEBPACK_IMPORTED_MODULE_7__["ExamplesBlockComponent"], _modules_blocks_components_quality_block_quality_block_component__WEBPACK_IMPORTED_MODULE_8__["QualityBlockComponent"], _modules_general_components_recomended_block_recomended_block_component__WEBPACK_IMPORTED_MODULE_9__["RecomendedBlockComponent"], _modules_general_components_social_block_social_block_component__WEBPACK_IMPORTED_MODULE_10__["SocialBlockComponent"], _modules_general_components_benefit_block_benefit_block_component__WEBPACK_IMPORTED_MODULE_11__["BenefitBlockComponent"], _modules_blocks_components_bonus_block_bonus_block_component__WEBPACK_IMPORTED_MODULE_12__["BonusBlockComponent"], _modules_blocks_components_map_block_map_block_component__WEBPACK_IMPORTED_MODULE_13__["MapBlockComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 768px) {\n  app-benefit-block[_ngcontent-%COMP%], app-social-block[_ngcontent-%COMP%], app-bonus-block[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (min-width: 769px) {\n  app-benefit-block[_ngcontent-%COMP%], app-social-block[_ngcontent-%COMP%], app-bonus-block[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC1wYWdlL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvcGFnZXMvZ2VuZXJhbC1wYWdlL2dlbmVyYWwtcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC1wYWdlL2dlbmVyYWwtcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FERUE7RUFDSTs7O0lBR0ksYUFBQTtFQ0FOO0FBQ0Y7QURHQTtFQUNJOzs7SUFHSSxjQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbmVyYWwtcGFnZS9nZW5lcmFsLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGFwcC1iZW5lZml0LWJsb2NrLFxuICAgIGFwcC1zb2NpYWwtYmxvY2ssXG4gICAgYXBwLWJvbnVzLWJsb2NrIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgYXBwLWJlbmVmaXQtYmxvY2ssXG4gICAgYXBwLXNvY2lhbC1ibG9jayxcbiAgICBhcHAtYm9udXMtYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBhcHAtYmVuZWZpdC1ibG9jayxcbiAgYXBwLXNvY2lhbC1ibG9jayxcbiAgYXBwLWJvbnVzLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICBhcHAtYmVuZWZpdC1ibG9jayxcbiAgYXBwLXNvY2lhbC1ibG9jayxcbiAgYXBwLWJvbnVzLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeneralPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-general-page',
                templateUrl: './general-page.component.html',
                styleUrls: ['./general-page.component.less']
            }]
    }], function () { return []; }, { scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/general-page/general-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/general-page/general-page.module.ts ***!
  \***********************************************************/
/*! exports provided: GeneralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPageModule", function() { return GeneralPageModule; });
/* harmony import */ var src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/blocks/blocks.module */ "./src/app/modules/blocks/blocks.module.ts");
/* harmony import */ var _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/components/icons/icons.module */ "./src/app/shared/components/icons/icons.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _general_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-page.component */ "./src/app/pages/general-page/general-page.component.ts");
/* harmony import */ var src_app_modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/general/general-content.module */ "./src/app/modules/general/general-content.module.ts");
/* harmony import */ var _general_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-page-routing.module */ "./src/app/pages/general-page/general-page-routing.module.ts");








class GeneralPageModule {
}
GeneralPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GeneralPageModule });
GeneralPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function GeneralPageModule_Factory(t) { return new (t || GeneralPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            src_app_modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_5__["GeneralContentModule"],
            _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_1__["IconsModule"],
            src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__["BlocksModule"],
            _general_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["GeneralPageRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GeneralPageModule, { declarations: [_general_page_component__WEBPACK_IMPORTED_MODULE_4__["GeneralPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        src_app_modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_5__["GeneralContentModule"],
        _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_1__["IconsModule"],
        src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__["BlocksModule"],
        _general_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["GeneralPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GeneralPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_general_page_component__WEBPACK_IMPORTED_MODULE_4__["GeneralPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    src_app_modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_5__["GeneralContentModule"],
                    _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_1__["IconsModule"],
                    src_app_modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_0__["BlocksModule"],
                    _general_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["GeneralPageRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-general-page-general-page-module-es2015.js.map