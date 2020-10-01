(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-page-main-page-module"],{

/***/ "./src/app/modules/general/components/benefit-block/benefit-block.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/general/components/benefit-block/benefit-block.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BenefitBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitBlockComponent", function() { return BenefitBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function BenefitBlockComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const circularItem_r1 = ctx.$implicit;
    const itemIndex_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](circularItem_r1.positionStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", circularItem_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](circularItem_r1.numberPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 0", itemIndex_r2 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](circularItem_r1.caption);
} }
class BenefitBlockComponent {
    constructor() {
        this.circularItems = [
            {
                caption: 'Обращение к нам, звонок либо заявка',
                image: '../../../../../assets/images/circular-block/icon1.png',
                positionStyle: {
                    top: '0',
                    left: '50px',
                },
            },
            {
                caption: 'Согласование условий',
                image: '../../../../../assets/images/circular-block/icon2.png',
                positionStyle: {
                    top: '250px',
                    left: '-25px',
                },
            },
            {
                caption: 'Выезд дизайнера -технолога',
                image: '../../../../../assets/images/circular-block/icon3.png',
                positionStyle: {
                    top: '450px',
                    left: '50px',
                },
            },
            {
                caption: 'Выбор материала',
                image: '../../../../../assets/images/circular-block/icon4.png',
                positionStyle: {
                    top: '640px',
                    left: '150px',
                },
                numberPosition: {
                    top: '150px',
                    right: '-80px',
                },
            },
            {
                caption: 'Финальный расчёт в нескольких вариантах',
                image: '../../../../../assets/images/circular-block/icon5.png',
                positionStyle: {
                    top: '810px',
                    left: '550px',
                },
                numberPosition: {
                    top: '50px',
                },
            },
            {
                caption: 'Заключение договора',
                image: '../../../../../assets/images/circular-block/icon6.png',
                positionStyle: {
                    top: '720px',
                    left: '850px',
                },
                numberPosition: {
                    top: '50px',
                },
            },
            {
                caption: 'Забираем мебель на производство',
                image: '../../../../../assets/images/circular-block/icon7.png',
                positionStyle: {
                    top: '490px',
                    left: '1000px',
                },
                numberPosition: {
                    top: '50px',
                },
            },
            {
                caption: 'Осуществляем ремонт в течении 15 дней',
                image: '../../../../../assets/images/circular-block/icon8.png',
                positionStyle: {
                    top: '250px',
                    left: '1050px',
                },
                numberPosition: {
                    top: '50px',
                    left: '-30px',
                },
            },
            {
                caption: 'Доставка новой мебели',
                image: '../../../../../assets/images/circular-block/icon9.png',
                positionStyle: {
                    top: '0px',
                    left: '850px',
                },
                numberPosition: {
                    top: '30px',
                    left: '8px',
                },
            },
        ];
    }
    ngOnInit() {
    }
}
BenefitBlockComponent.ɵfac = function BenefitBlockComponent_Factory(t) { return new (t || BenefitBlockComponent)(); };
BenefitBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BenefitBlockComponent, selectors: [["app-benefit-block"]], decls: 9, vars: 1, consts: [[1, "container"], [1, "title-page"], [1, "subtitle-page"], [1, "underline-text"], [1, "circular"], ["class", "circular-element", 3, "style", 4, "ngFor", "ngForOf"], [1, "circular-element"], [1, "image-container"], ["alt", "", 1, "image", 3, "src"], [1, "number"], [1, "description"]], template: function BenefitBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u043A\u0438\u0434\u044B\u0432\u0430\u0442\u044C \u043B\u044E\u0431\u0438\u043C\u0443\u044E \u043C\u0435\u0431\u0435\u043B\u044C \u0438 \u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u043D\u0430 \u043D\u043E\u0432\u0443\u044E? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u041E\u0442 \u0432\u0430\u0441 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043D\u0430\u043C \u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B, \u0432\u0441\u044E \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u043C\u044B \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0441\u0430\u043C\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 9 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u0448\u0430\u0433\u043E\u0432 \u043A \u0432\u0430\u0448\u0435\u0439 \u043B\u044E\u0431\u0438\u043C\u043E\u0439 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BenefitBlockComponent_div_8_Template, 7, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.circularItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  height: 1546px;\n  padding-top: 150px;\n  background-image: url('Group192.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n}\n.title-page[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 43px;\n  text-align: center;\n  color: #ffffff;\n  margin-bottom: 50px;\n}\n.subtitle-page[_ngcontent-%COMP%] {\n  font-family: Museo Sans Cyrl;\n  font-style: normal;\n  font-weight: 250;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  color: #ffffff;\n  max-width: 383px;\n  margin-bottom: 80px;\n}\n.underline-text[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  text-transform: uppercase;\n  max-width: 383px;\n  \n  color: #fad875;\n  margin-bottom: 30px;\n}\n.circular[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  height: 956px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.circular-element[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 190px;\n  height: 190px;\n}\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.number[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 800;\n  font-size: 92px;\n  line-height: 110px;\n  text-align: center;\n  color: #313131;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.image[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: relative;\n}\n.description[_ngcontent-%COMP%] {\n  font-family: Museo Sans Cyrl;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvYmVuZWZpdC1ibG9jay9DOi9Vc2Vycy9NYW9saW5rL0Rlc2t0b3AvRGV2L2Z1cm5pdHVyZS9zcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL2JlbmVmaXQtYmxvY2svYmVuZWZpdC1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvYmVuZWZpdC1ibG9jay9iZW5lZml0LWJsb2NrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRko7QURLQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQ0hGLFdBQVc7RURPVCxjQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRFFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDTko7QURTQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNQSjtBRFVBO0VBQ0ksa0JBQUE7QUNSSjtBRFdBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQ1RKO0FEWUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNWSjtBRGFBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvYmVuZWZpdC1ibG9jay9iZW5lZml0LWJsb2NrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGhlaWdodDogMTU0NnB4O1xuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dyb3VwMTkyLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZS1wYWdlIHtcbiAgICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zdWJ0aXRsZS1wYWdlIHtcbiAgICBmb250LWZhbWlseTogTXVzZW8gU2FucyBDeXJsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMjUwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWF4LXdpZHRoOiAzODNweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4udW5kZXJsaW5lLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXgtd2lkdGg6IDM4M3B4O1xuXG4gICAgLyogeWVsbG93ICovXG5cbiAgICBjb2xvcjogI2ZhZDg3NTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2lyY3VsYXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIGhlaWdodDogOTU2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNpcmN1bGFyLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTkwcHg7XG4gICAgaGVpZ2h0OiAxOTBweDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubnVtYmVyIHtcbiAgICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDkycHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzMxMzEzMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uaW1hZ2Uge1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6IE11c2VvIFNhbnMgQ3lybDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTU0NnB4O1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR3JvdXAxOTIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGUtcGFnZSB7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uc3VidGl0bGUtcGFnZSB7XG4gIGZvbnQtZmFtaWx5OiBNdXNlbyBTYW5zIEN5cmw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDI1MDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWF4LXdpZHRoOiAzODNweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cbi51bmRlcmxpbmUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWF4LXdpZHRoOiAzODNweDtcbiAgLyogeWVsbG93ICovXG4gIGNvbG9yOiAjZmFkODc1O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNpcmN1bGFyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogOTU2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2lyY3VsYXItZWxlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE5MHB4O1xuICBoZWlnaHQ6IDE5MHB4O1xufVxuLmltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5udW1iZXIge1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDkycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMxMzEzMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmltYWdlIHtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogTXVzZW8gU2FucyBDeXJsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BenefitBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-benefit-block',
                templateUrl: './benefit-block.component.html',
                styleUrls: ['./benefit-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/bonus-block/bonus-block.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/general/components/bonus-block/bonus-block.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BonusBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusBlockComponent", function() { return BonusBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/icons/icons.component */ "./src/app/shared/components/icons/icons.component.ts");



class BonusBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
BonusBlockComponent.ɵfac = function BonusBlockComponent_Factory(t) { return new (t || BonusBlockComponent)(); };
BonusBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BonusBlockComponent, selectors: [["app-bonus-block"]], decls: 54, vars: 0, consts: [[1, "container"], [1, "title-page"], [1, "bonus-list"], [1, "bonus-item"], [1, "image"], ["src", "../../../../../assets/images/bonus-block/icon1.png", "alt", ""], [1, "description"], ["src", "../../../../../assets/images/bonus-block/icon3.png", "alt", ""], ["src", "../../../../../assets/images/bonus-block/icon2.png", "alt", ""], ["src", "../../../../../assets/images/bonus-block/icon4.png", "alt", ""], [1, "form"], [1, "form__content"], [1, "form__title"], [1, "text-upper"], [1, "messagers", "mui-space_bottom-2"], [1, "messager"], ["name", "iconTelegrammMessager"], ["name", "iconViberMessager"], ["name", "iconWhatsupMessager"], [1, "text", "mui-space_bottom-2"], [1, "form-action"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F", 1, "input", "mui-space_bottom-1"], ["type", "number", 1, "input", "mui-space_bottom-1"], [1, "add-image"], [1, "add-image__icon"], ["name", "iconAddImage"], [1, "add-image__label"], ["type", "file", 1, "mui-space_bottom-2", 2, "display", "none"], [1, "button"], [1, "underline-text"], [1, "primary-text-color"]], template: function BonusBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0435\u0437\u0434 \u043D\u0430\u0448\u0435\u0433\u043E \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 2 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u043D\u044B\u0435 \u043F\u043E\u0434\u0443\u0448\u043A\u0438 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u043A\u0438\u0434\u043A\u0430 10% \u043D\u0430 \u043A\u043E\u043D\u0435\u0447\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0423\u0432\u0435\u0437\u0435\u043C \u0438 \u043F\u0440\u0438\u0432\u0435\u0437\u0435\u043C \u0432\u0430\u0448\u0443 \u043C\u0435\u0431\u0435\u043B\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "3 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0439 \u043C\u0435\u0431\u0435\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041D\u0430\u0437\u043D\u0430\u0447\u044C\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u0432\u0441\u0442\u0440\u0435\u0447\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u041F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0434\u043B\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u0430\u0442\u044B \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0441 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u043E\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443, \u0432\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043D\u043D\u044B\u0445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__["IconsComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 800px;\n  background-image: url('bonus-background.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: #000;\n  padding-top: 130px;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 1200px;\n  margin: 0 auto;\n}\n.title-page[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 36px;\n  line-height: 43px;\n  color: #000000;\n  margin-bottom: 40px;\n  max-width: 530px;\n}\n.bonus-list[_ngcontent-%COMP%] {\n  max-width: 530px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.bonus-item[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 160px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin-bottom: 20px;\n}\n.description[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 16px;\n  line-height: 24px;\n  color: #000000;\n}\n.form[_ngcontent-%COMP%] {\n  background-image: url('Component19.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 310px;\n  height: 560px;\n  border-radius: 6px;\n  padding: 8px;\n}\n.form__content[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  color: #000000;\n  width: 100%;\n  height: 100%;\n  padding: 40px 40px 28px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.form__title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n  margin-bottom: 8px;\n}\n.text-lighter[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 14px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #939391;\n  margin-bottom: 20px;\n}\n.text-upper[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  margin-bottom: 8px;\n}\n.messagers[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n.messager[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 43px;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  color: #939391;\n  text-align: center;\n  justify-content: center;\n}\n.add-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.add-image__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fafafa;\n  border-radius: 6px;\n  margin-right: 20px;\n  -webkit-clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n          clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n}\n.add-image__label[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n}\n.input[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  width: 100%;\n  justify-content: center;\n  font-family: \"MuseoSansCyrl\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n  background-color: #fafafa;\n  outline: none;\n  border: none;\n  -webkit-clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n          clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n}\n.button[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n          clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n  width: 100%;\n  background: linear-gradient(180deg, #fbdb74 3.65%, #e2ac48 97.92%);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  font-family: \"MuseoSansCyrl\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000000;\n  border: none;\n  outline: none;\n  padding: 16px 48px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.underline-text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: inline-block;\n  align-items: center;\n  text-align: center;\n  color: #939391;\n  max-width: 196px;\n}\n.form-action[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvYm9udXMtYmxvY2svQzovVXNlcnMvTWFvbGluay9EZXNrdG9wL0Rldi9mdXJuaXR1cmUvc3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwvY29tcG9uZW50cy9ib251cy1ibG9jay9ib251cy1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvYm9udXMtYmxvY2svYm9udXMtYmxvY2suY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0FKO0FER0E7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNGSjtBREtBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0pKO0FET0E7RUFDSSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUdBLGtCQUFBO0VBQ0EsWUFBQTtBQ1BKO0FEU0k7RUFXSSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDbEJSO0FEcUJJO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VDbkJOLFlBQVk7RURzQk4sYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNwQlI7QUR3QkE7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDdEJKO0FEeUJBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdkJKO0FEMEJBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDJCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUN6Qko7QUQ0QkE7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDM0JKO0FEOEJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDNUJKO0FEOEJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRGQUFBO1VBQUEsb0ZBQUE7QUM1QlI7QUR3Q0k7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ3RDUjtBRDBDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0VBR0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRGQUFBO1VBQUEsb0ZBQUE7QUMzQ0o7QUR1REE7RUFDSSw0RkFBQTtVQUFBLG9GQUFBO0VBVUEsV0FBQTtFQUNBLGtFQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQzlESjtBRGlFQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDL0RKO0FEa0VBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDaEVKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvYm9udXMtYmxvY2svYm9udXMtYmxvY2suY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nZW5lcmFsLXBhZ2UvYm9udXMtYmFja2dyb3VuZC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRpdGxlLXBhZ2Uge1xuICAgIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1heC13aWR0aDogNTMwcHg7XG59XG5cbi5ib251cy1saXN0IHtcbiAgICBtYXgtd2lkdGg6IDUzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJvbnVzLWl0ZW0ge1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Db21wb25lbnQxOS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzMTBweDtcbiAgICBoZWlnaHQ6IDU2MHB4O1xuICAgIC8vIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCwgNTAlIDAsIDEwMCUgNiUsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDYlLCA1MCUgMCUpO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDhweDtcblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAgIC8vICAgICA1MCUgMCxcbiAgICAgICAgLy8gICAgIDUwJSAwLFxuICAgICAgICAvLyAgICAgMTAwJSA2JSxcbiAgICAgICAgLy8gICAgIDEwMCUgMTAwJSxcbiAgICAgICAgLy8gICAgIDAgMTAwJSxcbiAgICAgICAgLy8gICAgIDAgNiUsXG4gICAgICAgIC8vICAgICA1MCUgMCVcbiAgICAgICAgLy8gKTtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNDBweCA0MHB4IDI4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIC8qIG9yIDE1MCUgKi9cblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxufVxuXG4udGV4dC1saWdodGVyIHtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOTM5MzkxO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50ZXh0LXVwcGVyIHtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ubWVzc2FnZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVzc2FnZXIge1xuICAgIHdpZHRoOiA0M3B4O1xuICAgIGhlaWdodDogNDNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzkzOTM5MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZGQtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX2ljb24ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgICAgICAgIDk4JSAwLFxuICAgICAgICAgICAgMTAwJSAyNSUsXG4gICAgICAgICAgICAxMDAlIDc1JSxcbiAgICAgICAgICAgIDk4JSAxMDAlLFxuICAgICAgICAgICAgMiUgMTAwJSxcbiAgICAgICAgICAgIDAgNzUlLFxuICAgICAgICAgICAgMCAyNSUsXG4gICAgICAgICAgICAyJSAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgJl9fbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbn1cblxuLmlucHV0IHtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAgIDk4JSAwLFxuICAgICAgICAxMDAlIDI1JSxcbiAgICAgICAgMTAwJSA3NSUsXG4gICAgICAgIDk4JSAxMDAlLFxuICAgICAgICAyJSAxMDAlLFxuICAgICAgICAwIDc1JSxcbiAgICAgICAgMCAyNSUsXG4gICAgICAgIDIlIDBcbiAgICApO1xufVxuXG4uYnV0dG9uIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAgIDk4JSAwLFxuICAgICAgICAxMDAlIDI1JSxcbiAgICAgICAgMTAwJSA3NSUsXG4gICAgICAgIDk4JSAxMDAlLFxuICAgICAgICAyJSAxMDAlLFxuICAgICAgICAwIDc1JSxcbiAgICAgICAgMCAyNSUsXG4gICAgICAgIDIlIDBcbiAgICApO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYmRiNzQgMy42NSUsICNlMmFjNDggOTcuOTIlKTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxNnB4IDQ4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4udW5kZXJsaW5lLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzkzOTM5MTtcbiAgICBtYXgtd2lkdGg6IDE5NnB4O1xufVxuXG4uZm9ybS1hY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nZW5lcmFsLXBhZ2UvYm9udXMtYmFja2dyb3VuZC5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmctdG9wOiAxMzBweDtcbn1cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRpdGxlLXBhZ2Uge1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgbWF4LXdpZHRoOiA1MzBweDtcbn1cbi5ib251cy1saXN0IHtcbiAgbWF4LXdpZHRoOiA1MzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYm9udXMtaXRlbSB7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZvcm0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0NvbXBvbmVudDE5LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAzMTBweDtcbiAgaGVpZ2h0OiA1NjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG4uZm9ybV9fY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAyOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZm9ybV9fdGl0bGUge1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAvKiBvciAxNTAlICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi50ZXh0LWxpZ2h0ZXIge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTM5MzkxO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRleHQtdXBwZXIge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubWVzc2FnZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1lc3NhZ2VyIHtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogNDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRleHQge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzkzOTM5MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZGQtaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZC1pbWFnZV9faWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDk4JSAwLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDk4JSAxMDAlLCAyJSAxMDAlLCAwIDc1JSwgMCAyNSUsIDIlIDApO1xufVxuLmFkZC1pbWFnZV9fbGFiZWwge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmlucHV0IHtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmxcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNsaXAtcGF0aDogcG9seWdvbig5OCUgMCwgMTAwJSAyNSUsIDEwMCUgNzUlLCA5OCUgMTAwJSwgMiUgMTAwJSwgMCA3NSUsIDAgMjUlLCAyJSAwKTtcbn1cbi5idXR0b24ge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oOTglIDAsIDEwMCUgMjUlLCAxMDAlIDc1JSwgOTglIDEwMCUsIDIlIDEwMCUsIDAgNzUlLCAwIDI1JSwgMiUgMCk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJkYjc0IDMuNjUlLCAjZTJhYzQ4IDk3LjkyJSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxNnB4IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnVuZGVybGluZS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTM5MzkxO1xuICBtYXgtd2lkdGg6IDE5NnB4O1xufVxuLmZvcm0tYWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonusBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bonus-block',
                templateUrl: './bonus-block.component.html',
                styleUrls: ['./bonus-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/calculate-block/calculate-block.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/general/components/calculate-block/calculate-block.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CalculateBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateBlockComponent", function() { return CalculateBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/icons/icons.component */ "./src/app/shared/components/icons/icons.component.ts");



class CalculateBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
CalculateBlockComponent.ɵfac = function CalculateBlockComponent_Factory(t) { return new (t || CalculateBlockComponent)(); };
CalculateBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculateBlockComponent, selectors: [["app-calculate-block"]], decls: 42, vars: 0, consts: [[1, "block"], [1, "block__title"], [1, "block__subtitle"], [1, "block__content"], [1, "calculate"], [1, "calculate__border"], [1, "calculate__title", "mui-space_bottom-5"], [1, "progress-empty", "mui-space_bottom-10"], [1, "progress"], [1, "step", "calculate__content"], [1, "step__description", "mui-space_bottom-10"], ["action", "", 1, "step__content"], [1, "chip"], ["type", "radio", 1, "radio"], [1, "calculate__button"], [1, "button-icon"], ["name", "iconArrowRight"], [1, "right-content", "mui-space_left-5"], [1, "line-primary-color"], [1, "right-content__description"]], template: function CalculateBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u0432\u0430\u0448\u0435\u0439 \u043C\u044F\u0433\u043A\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u041E\u0442\u0432\u0435\u0442\u044C\u0442\u0435 \u043D\u0430 5 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0440\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 1 \u0432\u043E\u043F\u0440\u043E\u0441 \u0438\u0437 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u041A\u0430\u043A\u0443\u044E \u043C\u0435\u0431\u0435\u043B\u044C \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0414\u0438\u0432\u0430\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041A\u0440\u043E\u0432\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041A\u0440\u0435\u0441\u043B\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0421\u0442\u0443\u043B/\u0442\u0430\u0431\u0443\u0440\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u043F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u0442\u0435\u0441\u0442 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0440\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0430 \u044D\u043B. \u043F\u043E\u0447\u0442\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__["IconsComponent"]], styles: [".block[_ngcontent-%COMP%] {\n  background-image: url('calculate-background.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: #000000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 130px 0;\n}\n.block__title[_ngcontent-%COMP%] {\n  font-family: \"BerlingskeSerif-BoldItalic\";\n  font-size: 36px;\n  line-height: 43px;\n  text-align: center;\n  max-width: 900px;\n  color: #000000;\n  margin-bottom: 30px;\n}\n.block__subtitle[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-100\";\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  color: #000000;\n  margin-bottom: 85px;\n}\n.block__content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.calculate[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: -2px 0px 32px rgba(0, 0, 0, 0.07);\n  border-radius: 6px;\n  width: 800px;\n  height: 600px;\n  padding: 10px;\n}\n.calculate__border[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #ececec;\n  box-sizing: border-box;\n  box-shadow: -2px 0px 32px rgba(0, 0, 0, 0.07);\n  border-radius: 6px;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  padding: 60px;\n  display: flex;\n  flex-direction: column;\n}\n.calculate__title[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"MuseoSansCyrl-100\";\n  font-size: 16px;\n  line-height: 19px;\n  text-align: left;\n  text-transform: uppercase;\n  color: #000000;\n}\n.calculate__content[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #000000;\n}\n.calculate__button[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fbdb74 0%, #e2ac48 100%);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  height: 70px;\n  width: 300px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: \"MuseoSansCyrl-700\";\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  padding: 15px 28px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.calculate__button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #e2ac48 0%, #fada73 100%);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.calculate__button[_ngcontent-%COMP%]:hover {\n  transition: 0.2s ease-in-out;\n  background: linear-gradient(180deg, #fad14c 0%, #dc9c25 100%);\n}\n.progress-empty[_ngcontent-%COMP%] {\n  background: #f3f3f3;\n  border-radius: 6px;\n  width: 570px;\n  height: 12px;\n}\n.progress[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 12px;\n  background: linear-gradient(270deg, #fad875 0%, #edbe7d 100%);\n  border-radius: 6px;\n}\n.right-content[_ngcontent-%COMP%] {\n  width: 343px;\n  height: 600px;\n  background: linear-gradient(180deg, #262b32 0%, #15171a 100%);\n  border-radius: 6px;\n  padding: 85px 45px;\n  box-sizing: border-box;\n}\n.right-content__description[_ngcontent-%COMP%] {\n  font-family: \"BerlingskeSerif\";\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #ffffff;\n  padding: 30px 0;\n}\n.line-primary-color[_ngcontent-%COMP%] {\n  background: linear-gradient(270deg, #fad875 10.94%, #edbe7d 66.67%);\n  height: 1px;\n  width: 100%;\n}\n.step__content[_ngcontent-%COMP%] {\n  max-width: 570px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.chip[_ngcontent-%COMP%] {\n  width: 270px;\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 16px 26px;\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 16px;\n  line-height: 19px;\n  color: #000000;\n  border: 1px solid #ececec;\n  box-sizing: border-box;\n  border-radius: 6px;\n  text-transform: none;\n  margin-bottom: 30px;\n}\n.radio[_ngcontent-%COMP%] {\n  display: flex;\n  width: 16px;\n  height: 16px;\n  margin-right: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvY2FsY3VsYXRlLWJsb2NrL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvY2FsY3VsYXRlLWJsb2NrL2NhbGN1bGF0ZS1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvY2FsY3VsYXRlLWJsb2NrL2NhbGN1bGF0ZS1ibG9jay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlEQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0kseUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREtJO0VBQ0ksYUFBQTtBQ0hSO0FET0E7RUFDSSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNMSjtBRE9JO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDTFI7QURRSTtFQUNJLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDTlI7QURTSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDUFI7QURVSTtFQUNJLDZEQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNSUjtBRFhJO0VBc0JRLDZEQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDUlo7QURZSTtFQUNJLDRCQUFBO0VBQ0EsNkRBQUE7QUNWUjtBRGtCQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2hCSjtBRG1CQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtBQ2pCSjtBRG9CQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNsQko7QURvQkk7RUFDSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2xCUjtBRHNCQTtFQUNJLG1FQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNwQko7QUR3Qkk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUN0QlI7QUQwQkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUN4Qko7QUQyQkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3pCSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL2NhbGN1bGF0ZS1ibG9jay9jYWxjdWxhdGUtYmxvY2suY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2VuZXJhbC1wYWdlL2NhbGN1bGF0ZS1iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEzMHB4IDA7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkJlcmxpbmdza2VTZXJpZi1Cb2xkSXRhbGljXCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcblxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICAmX19zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMTAwXCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODVweDtcbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG59XG5cbi5jYWxjdWxhdGUge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogLTJweCAwcHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgJl9fYm9yZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNoYWRvdzogLTJweCAwcHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogNjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMTAwXCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZiZGI3NCAwJSwgI2UyYWM0OCAxMDAlKTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtNzAwXCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjhweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgIC5idXR0b24taWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZTJhYzQ4IDAlLCAjZmFkYTczIDEwMCUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMTgwZGVnLFxuICAgICAgICAgICAgZGFya2VuKCNmYmRiNzQsIDglKSAwJSxcbiAgICAgICAgICAgIGRhcmtlbigjZTJhYzQ4LCA4JSkgMTAwJVxuICAgICAgICApO1xuICAgIH1cbn1cblxuLnByb2dyZXNzLWVtcHR5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB3aWR0aDogNTcwcHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xufVxuXG4ucHJvZ3Jlc3Mge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmYWQ4NzUgMCUsICNlZGJlN2QgMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucmlnaHQtY29udGVudCB7XG4gICAgd2lkdGg6IDM0M3B4O1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI2MmIzMiAwJSwgIzE1MTcxYSAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogODVweCA0NXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkJlcmxpbmdza2VTZXJpZlwiO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgfVxufVxuXG4ubGluZS1wcmltYXJ5LWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmFkODc1IDEwLjk0JSwgI2VkYmU3ZCA2Ni42NyUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RlcCB7XG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIG1heC13aWR0aDogNTcwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbn1cblxuLmNoaXAge1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4IDI2cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucmFkaW8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTRweDtcbn1cbiIsIi5ibG9jayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2VuZXJhbC1wYWdlL2NhbGN1bGF0ZS1iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTMwcHggMDtcbn1cbi5ibG9ja19fdGl0bGUge1xuICBmb250LWZhbWlseTogXCJCZXJsaW5nc2tlU2VyaWYtQm9sZEl0YWxpY1wiO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmJsb2NrX19zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMTAwXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDg1cHg7XG59XG4uYmxvY2tfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNhbGN1bGF0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IC0ycHggMHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2FsY3VsYXRlX19ib3JkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAtMnB4IDBweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNhbGN1bGF0ZV9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTEwMFwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jYWxjdWxhdGVfX2NvbnRlbnQge1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY2FsY3VsYXRlX19idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJkYjc0IDAlLCAjZTJhYzQ4IDEwMCUpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC03MDBcIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMTVweCAyOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uY2FsY3VsYXRlX19idXR0b24gLmJ1dHRvbi1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2UyYWM0OCAwJSwgI2ZhZGE3MyAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYWxjdWxhdGVfX2J1dHRvbjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYWQxNGMgMCUsICNkYzljMjUgMTAwJSk7XG59XG4ucHJvZ3Jlc3MtZW1wdHkge1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA1NzBweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuLnByb2dyZXNzIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmFkODc1IDAlLCAjZWRiZTdkIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ucmlnaHQtY29udGVudCB7XG4gIHdpZHRoOiAzNDNweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI2MmIzMiAwJSwgIzE1MTcxYSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA4NXB4IDQ1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucmlnaHQtY29udGVudF9fZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogXCJCZXJsaW5nc2tlU2VyaWZcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuLmxpbmUtcHJpbWFyeS1jb2xvciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmYWQ4NzUgMTAuOTQlLCAjZWRiZTdkIDY2LjY3JSk7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGVwX19jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA1NzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY2hpcCB7XG4gIHdpZHRoOiAyNzBweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAyNnB4O1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5yYWRpbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculateBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculate-block',
                templateUrl: './calculate-block.component.html',
                styleUrls: ['./calculate-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/designer-order-block/designer-order-block.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/general/components/designer-order-block/designer-order-block.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DesignerOrderBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerOrderBlockComponent", function() { return DesignerOrderBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/icons/icons.component */ "./src/app/shared/components/icons/icons.component.ts");



class DesignerOrderBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
DesignerOrderBlockComponent.ɵfac = function DesignerOrderBlockComponent_Factory(t) { return new (t || DesignerOrderBlockComponent)(); };
DesignerOrderBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesignerOrderBlockComponent, selectors: [["app-designer-order-block"]], decls: 34, vars: 0, consts: [[1, "block"], [1, "block__content"], [1, "title"], [1, "primary-text-color"], [1, "grid-panel"], [1, "element"], [1, "icon", "mui-space_right-5"], ["name", "iconShield"], [1, "text"], [1, "block__footer"], [1, "button"], [1, "description", "mui-space_left-5"]], template: function DesignerOrderBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0411\u043E\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0440\u0435\u043C\u043E\u043D\u0442 \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u043E\u0442\u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C \u0443\u0442\u0440\u0430\u0442\u0438\u0442 \u0441\u0432\u043E\u0439 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434 \u0447\u0435\u0440\u0435\u0437 \u0433\u043E\u0434 ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041D\u0430 \u043D\u0430\u0448\u0435\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435 2018 \u0433\u043E\u0434\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u041F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u043D\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434 \u043C\u0435\u0431\u0435\u043B\u0438 \u0441\u0432\u044B\u0448\u0435 9 \u043B\u0435\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0422\u0440\u0438 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u043F\u043E\u043A\u0440\u0430\u0441\u043A\u0438 \u043A\u043E\u0440\u043F\u0443\u0441\u0430 \u043C\u0435\u0431\u0435\u043B\u0438 \u0434\u043B\u044F \u0437\u0430\u0449\u0438\u0442\u044B \u0438 \u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u0438 \u043A \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u0438\u0437 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0438 \u0432\u044B\u0445\u043E\u0434\u0446\u0435\u0432 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0445 \u0444\u0430\u0431\u0440\u0438\u043A \u0442\u0430\u043A\u0438\u0445 \u043A\u0430\u043A: 8 \u041C\u0430\u0440\u0442\u0430, Albert & Shtein, Britannica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u044B\u0435\u0437\u0434 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0430\u0436\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0441\u0430\u043C\u0443\u044E \u043F\u0440\u0438\u0445\u043E\u0442\u043B\u0438\u0432\u0443\u044E \u043C\u0435\u0431\u0435\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__["IconsComponent"]], styles: ["[_nghost-%COMP%] {\n  background-image: url('background_2.png');\n  background-position: left;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.block[_ngcontent-%COMP%] {\n  min-height: 865px;\n  display: flex;\n  flex-direction: column;\n  padding: 130px 80px;\n  margin-left: 210px;\n}\n.block__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.block__content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"BerlingskeSerif\";\n  font-style: italic;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 54px;\n  \n  max-width: 957px;\n  text-transform: uppercase;\n  margin-bottom: 130px;\n  color: #fff;\n}\n.block__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  max-width: 747px;\n}\n.grid-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 72px 72px;\n  grid-template-columns: 365px 365px;\n  grid-gap: 30px;\n  max-width: 790px;\n  margin-bottom: 50px;\n}\n.element[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.button[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fbdb74 0%, #e2ac48 100%);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  height: 70px;\n  width: 100%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: \"MuseoSansCyrl-700\";\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #000000;\n  padding: 15px 28px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.button[_ngcontent-%COMP%]:hover {\n  transition: 0.2s ease-in-out;\n  background: linear-gradient(180deg, #fad14c 0%, #dc9c25 100%);\n}\n.description[_ngcontent-%COMP%] {\n  font-family: Museo Sans Cyrl;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvZGVzaWduZXItb3JkZXItYmxvY2svQzovVXNlcnMvTWFvbGluay9EZXNrdG9wL0Rldi9mdXJuaXR1cmUvc3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwvY29tcG9uZW50cy9kZXNpZ25lci1vcmRlci1ibG9jay9kZXNpZ25lci1vcmRlci1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvZGVzaWduZXItb3JkZXItYmxvY2svZGVzaWduZXItb3JkZXItYmxvY2suY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0NKO0FERUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQVI7QURGSTtFQUtRLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ0FWLFlBQVk7RURFRixnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDQVo7QURJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDRlI7QURNQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDTEo7QURRQTtFQUNJLDZEQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDUEo7QURVQTtFQUNJLDRCQUFBO0VBQ0EsNkRBQUE7QUNSSjtBRGVBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvZGVzaWduZXItb3JkZXItYmxvY2svZGVzaWduZXItb3JkZXItYmxvY2suY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nZW5lcmFsLXBhZ2UvYmFja2dyb3VuZF8yLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJsb2NrIHtcbiAgICBtaW4taGVpZ2h0OiA4NjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTMwcHggODBweDtcbiAgICBtYXJnaW4tbGVmdDogMjEwcHg7XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmXCI7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgICAgICAgICAvKiBvciAxNTAlICovXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDk1N3B4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19mb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1heC13aWR0aDogNzQ3cHg7XG4gICAgfVxufVxuXG4uZ3JpZC1wYW5lbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcycHggNzJweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM2NXB4IDM2NXB4O1xuICAgIGdyaWQtZ2FwOiAzMHB4O1xuICAgIG1heC13aWR0aDogNzkwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmVsZW1lbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZiZGI3NCAwJSwgI2UyYWM0OCAxMDAlKTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTcwMFwiO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDE1cHggMjhweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTgwZGVnLFxuICAgICAgICBkYXJrZW4oI2ZiZGI3NCwgOCUpIDAlLFxuICAgICAgICBkYXJrZW4oI2UyYWM0OCwgOCUpIDEwMCVcbiAgICApO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiBNdXNlbyBTYW5zIEN5cmw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuXG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2VuZXJhbC1wYWdlL2JhY2tncm91bmRfMi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uYmxvY2sge1xuICBtaW4taGVpZ2h0OiA4NjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTMwcHggODBweDtcbiAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xufVxuLmJsb2NrX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ibG9ja19fY29udGVudCAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJCZXJsaW5nc2tlU2VyaWZcIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICAvKiBvciAxNTAlICovXG4gIG1heC13aWR0aDogOTU3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDEzMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ibG9ja19fZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDc0N3B4O1xufVxuLmdyaWQtcGFuZWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcycHggNzJweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNjVweCAzNjVweDtcbiAgZ3JpZC1nYXA6IDMwcHg7XG4gIG1heC13aWR0aDogNzkwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uZWxlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZiZGI3NCAwJSwgI2UyYWM0OCAxMDAlKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC03MDBcIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDE1cHggMjhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYWQxNGMgMCUsICNkYzljMjUgMTAwJSk7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogTXVzZW8gU2FucyBDeXJsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesignerOrderBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-designer-order-block',
                templateUrl: './designer-order-block.component.html',
                styleUrls: ['./designer-order-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/examples-block/examples-block.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/general/components/examples-block/examples-block.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ExamplesBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesBlockComponent", function() { return ExamplesBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/icons/icons.component */ "./src/app/shared/components/icons/icons.component.ts");



class ExamplesBlockComponent {
    constructor() {
        this.slideIndex = [1, 1];
    }
    ngOnInit() {
    }
    plusSlides(n, no) {
        this.showSlides(this.slideIndex[no] += n, no);
    }
    showSlides(n, no) {
        // var i;
        // var x = document.getElementsByClassName(this.slideId[no]);
        // if (n > x.length) { this.slideIndex[no] = 1 }
        // if (n < 1) { this.slideIndex[no] = x.length }
        // for (i = 0; i < x.length; i++) {
        //     x[i].style.display = "none";
        // }
        // x[this.slideIndex[no] - 1].style.display = "block";
    }
}
ExamplesBlockComponent.ɵfac = function ExamplesBlockComponent_Factory(t) { return new (t || ExamplesBlockComponent)(); };
ExamplesBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamplesBlockComponent, selectors: [["app-examples-block"]], decls: 32, vars: 0, consts: [[1, "block"], [1, "block__title"], [1, "primary-text-color"], [1, "slider"], [1, "slider__container"], [1, "slide"], [1, "slide__left-column"], [1, "caption"], [1, "image"], ["width", "100%", "height", "100%", "src", "../../../../../assets/images/IMG1.png", "alt", ""], [1, "slide__right-column"], ["width", "100%", "height", "100%", "src", "../../../../../assets/images/IMG2.png", "alt", ""], ["onclick", "plusSlides(-1)", 1, "slider__prev"], [1, "icon__prev"], ["name", "iconSliderArrowRight"], ["onclick", "plusSlides(1)", 1, "slider__next"], [1, "icon__next"], [1, "slider__dots"], ["onclick", "currentSlide(1)", 1, "dot", "active"], ["onclick", "currentSlide(2)", 1, "dot"], ["onclick", "currentSlide(3)", 1, "dot"], ["onclick", "currentSlide(1)", 1, "dot"]], template: function ExamplesBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u043C\u0435\u0431\u0435\u043B\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0414\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041F\u043E\u0441\u043B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__["IconsComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  min-height: 1040px;\n  background-image: url('ObbeyBackground1.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.block[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 360px;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.block__title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 43px;\n  text-align: center;\n  margin-bottom: 50px;\n  color: #ffffff;\n  max-width: 442px;\n}\n.slider[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.slider__prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n.slider__next[_ngcontent-%COMP%] {\n  right: 0;\n}\n.slider__next[_ngcontent-%COMP%], .slider__prev[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  width: auto;\n  top: 45%;\n  margin-top: -22px;\n  padding: 16px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.slider__container[_ngcontent-%COMP%] {\n  height: 344px;\n  max-width: 1080px;\n  width: 100%;\n}\n.slider__dots[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.caption[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  \n  text-align: center;\n  text-transform: uppercase;\n  \n  color: #fad875;\n}\n.slide[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  padding: 0 20px;\n}\n.slide__left-column[_ngcontent-%COMP%], .slide__right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n}\n.image[_ngcontent-%COMP%] {\n  width: 490px;\n  height: 300px;\n  background: #262b32;\n  border-radius: 6px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 7px;\n  width: 7px;\n  margin: 0 3px;\n  background: #1c1c1c;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n  transition: 0.2s ease-in-out;\n}\n.active[_ngcontent-%COMP%], .dot[_ngcontent-%COMP%]:hover {\n  transition: 0.2s ease-in-out;\n  background: linear-gradient(180deg, #feda7a 0%, #e7b055 87.5%);\n}\n\n.fade[_ngcontent-%COMP%] {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.icon__next[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.icon__prev[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  transform: rotate(180deg);\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvZXhhbXBsZXMtYmxvY2svQzovVXNlcnMvTWFvbGluay9EZXNrdG9wL0Rldi9mdXJuaXR1cmUvc3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwvY29tcG9uZW50cy9leGFtcGxlcy1ibG9jay9leGFtcGxlcy1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvZXhhbXBsZXMtYmxvY2svZXhhbXBsZXMtYmxvY2suY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUo7QURFSTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBRElBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDSSxPQUFBO0FDRlI7QURLSTtFQUNJLFFBQUE7QUNIUjtBRE1JOztFQUVJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQ0pSO0FET0k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDTFI7QURRSTtFQUNJLGdCQUFBO0FDTlI7QURVQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VDUkYsNEJBQTRCO0VEVzFCLGtCQUFBO0VBQ0EseUJBQUE7RUNURixXQUFXO0VEYVQsY0FBQTtBQ1hKO0FEY0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDWko7QURjSTs7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ1pSO0FEZ0JBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZEo7QUFDQSxnQ0FBZ0M7QURpQmhDO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNEJBQUE7QUNmSjtBRGtCQTs7RUFFSSw0QkFBQTtFQUNBLDhEQUFBO0FDaEJKO0FBQ0EscUJBQXFCO0FEbUJyQjtFQUNJLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FDakJKO0FEb0JBO0VBQ0k7SUFDSSxZQUFBO0VDbEJOO0VEb0JFO0lBQ0ksVUFBQTtFQ2xCTjtBQUNGO0FEcUJBO0VBQ0k7SUFDSSxZQUFBO0VDbkJOO0VEcUJFO0lBQ0ksVUFBQTtFQ25CTjtBQUNGO0FEc0JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ3BCSjtBRHVCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ3JCSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL2V4YW1wbGVzLWJsb2NrL2V4YW1wbGVzLWJsb2NrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDQwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9PYmJleUJhY2tncm91bmQxLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAzNjBweDtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWF4LXdpZHRoOiA0NDJweDtcbiAgICB9XG59XG5cbi5zbGlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICZfX3ByZXYge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICZfX25leHQge1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG5cbiAgICAmX19uZXh0LFxuICAgICZfX3ByZXYge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHRvcDogNDUlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAzNDRweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX2RvdHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLmNhcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgLyogeWVsbG93ICovXG5cbiAgICBjb2xvcjogI2ZhZDg3NTtcbn1cblxuLnNsaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgICAmX19sZWZ0LWNvbHVtbixcbiAgICAmX19yaWdodC1jb2x1bW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uaW1hZ2Uge1xuICAgIHdpZHRoOiA0OTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyNjJiMzI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4vKiBUaGUgZG90cy9idWxsZXRzL2luZGljYXRvcnMgKi9cbi5kb3Qge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICB3aWR0aDogN3B4O1xuICAgIG1hcmdpbjogMCAzcHg7XG4gICAgYmFja2dyb3VuZDogIzFjMWMxYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hY3RpdmUsXG4uZG90OmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZWRhN2EgMCUsICNlN2IwNTUgODcuNSUpO1xufVxuXG4vKiBGYWRpbmcgYW5pbWF0aW9uICovXG4uZmFkZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5pY29uX19uZXh0IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25fX3ByZXYge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTA0MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL09iYmV5QmFja2dyb3VuZDEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDM2MHB4O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJsb2NrX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1heC13aWR0aDogNDQycHg7XG59XG4uc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2xpZGVyX19wcmV2IHtcbiAgbGVmdDogMDtcbn1cbi5zbGlkZXJfX25leHQge1xuICByaWdodDogMDtcbn1cbi5zbGlkZXJfX25leHQsXG4uc2xpZGVyX19wcmV2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBhdXRvO1xuICB0b3A6IDQ1JTtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnNsaWRlcl9fY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzNDRweDtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNsaWRlcl9fZG90cyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uY2FwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8qIHllbGxvdyAqL1xuICBjb2xvcjogI2ZhZDg3NTtcbn1cbi5zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uc2xpZGVfX2xlZnQtY29sdW1uLFxuLnNsaWRlX19yaWdodC1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4uaW1hZ2Uge1xuICB3aWR0aDogNDkwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6ICMyNjJiMzI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi8qIFRoZSBkb3RzL2J1bGxldHMvaW5kaWNhdG9ycyAqL1xuLmRvdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA3cHg7XG4gIHdpZHRoOiA3cHg7XG4gIG1hcmdpbjogMCAzcHg7XG4gIGJhY2tncm91bmQ6ICMxYzFjMWM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5hY3RpdmUsXG4uZG90OmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZlZGE3YSAwJSwgI2U3YjA1NSA4Ny41JSk7XG59XG4vKiBGYWRpbmcgYW5pbWF0aW9uICovXG4uZmFkZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICBhbmltYXRpb24tbmFtZTogZmFkZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmljb25fX25leHQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaWNvbl9fcHJldiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamplesBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-examples-block',
                templateUrl: './examples-block.component.html',
                styleUrls: ['./examples-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/general-preview-component/general-preview-component.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/general/components/general-preview-component/general-preview-component.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: GeneralPreviewComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPreviewComponentComponent", function() { return GeneralPreviewComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GeneralPreviewComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeneralPreviewComponentComponent.ɵfac = function GeneralPreviewComponentComponent_Factory(t) { return new (t || GeneralPreviewComponentComponent)(); };
GeneralPreviewComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPreviewComponentComponent, selectors: [["app-general-preview-component"]], decls: 36, vars: 0, consts: [[1, "frame"], [1, "frame__description"], [1, "subtitle"], [1, "primary-text-color"], ["src", "../../../../assets/images/clock.png", "alt", ""], [1, "title"], [1, "text"], [1, "button"], [1, "shine"], [1, "frame__image"], [1, "image-content"], [1, "f-icon"], ["src", "../../../../assets/images/Frame.png", "alt", ""], ["src", "../../../../assets/images/armchair.png", "alt", ""], [1, "footer"], [1, "block"], [1, "block__title"], [1, "block__description"]], template: function GeneralPreviewComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0412\u0430\u0448\u0430 \u043C\u0435\u0431\u0435\u043B\u044C \u043A\u0430\u043A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u043D\u043E\u0432\u0430\u044F \u0437\u0430 15 \u0434\u043D\u0435\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0438\u0440\u0443\u0435\u043C \u043C\u0435\u0431\u0435\u043B\u044C \u0441 2009 \u0433\u043E\u0434\u0430 \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E \u0440\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442\u0430\u043C \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0445 \u0444\u0430\u0431\u0440\u0438\u043A-\u0438\u0437\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u0435\u043B\u0435\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0435\u0437\u0434 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0420\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0421\u0432\u044B\u0448\u0435 2400 \u0432\u0438\u0434\u043E\u0432 \u0442\u043A\u0430\u043D\u0435\u0439 \u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0421\u0430\u043C\u0438 \u0437\u0430\u0431\u0435\u0440\u0435\u043C \u043C\u0435\u0431\u0435\u043B\u044C \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043C \u043E\u0431\u0440\u0430\u0442\u043D\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0435\u0437\u0434 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".frame[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 70px;\n  padding-top: 100px;\n  height: 100%;\n}\n.frame__description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 571px;\n}\n.frame__description[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-family: \"MuseoSansCyrl-100\";\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n}\n.frame__description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"BerlingskeSerif-BoldItalic\";\n  font-size: 42px;\n  line-height: 50px;\n  margin-bottom: 30px;\n}\n.frame__description[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-100\";\n  font-size: 16px;\n  line-height: 19px;\n  max-width: 274px;\n  color: #ffffff;\n  margin-bottom: 30px;\n  text-align: left;\n}\n.frame__description[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 270px;\n  height: 64px;\n  border: none;\n  outline: none;\n  background: linear-gradient(180deg, #fbdb74 3.65%, #e2ac48 97.92%);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  cursor: pointer;\n  color: #000000;\n  \n  filter: drop-shadow(0px 4px 22px rgba(252, 217, 119, 0.15));\n  transition: 0.2s ease-in-out;\n  font-family: \"MuseoSansCyrl-700\";\n  font-size: 12px;\n  line-height: 16px;\n  \n  text-align: center;\n  text-transform: uppercase;\n}\n.frame__description[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  transition: 0.2s ease-in-out;\n  background: linear-gradient(180deg, #fad14c 0%, #dc9c25 100%);\n}\n.frame__image[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.shine[_ngcontent-%COMP%] {\n  background: radial-gradient(50% 50% at 50% 50%, #202425 0%, rgba(32, 36, 37, 0) 100%);\n  width: 600px;\n  height: 600px;\n  position: absolute;\n  right: -180px;\n  top: 0;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  height: 150px;\n  width: 100%;\n}\n.footer[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 38px 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  box-sizing: border-box;\n}\n.footer[_ngcontent-%COMP%]   .block__title[_ngcontent-%COMP%] {\n  font-family: \"BerlingskeSerif-DemiBold\";\n  font-style: normal;\n  font-size: 14px;\n  line-height: 17px;\n  \n  text-transform: uppercase;\n  \n  color: #fad875;\n  margin-bottom: 20px;\n}\n.footer[_ngcontent-%COMP%]   .block__description[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n}\n.footer[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:nth-child(odd) {\n  background: linear-gradient(180deg, #131418 0%, #0c0d0f 50%);\n}\n.footer[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:nth-child(even) {\n  background: linear-gradient(0, #131418 0%, #0c0d0f 50%);\n}\n.f-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvZ2VuZXJhbC1wcmV2aWV3LWNvbXBvbmVudC9DOi9Vc2Vycy9NYW9saW5rL0Rlc2t0b3AvRGV2L2Z1cm5pdHVyZS9zcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL2dlbmVyYWwtcHJldmlldy1jb21wb25lbnQvZ2VuZXJhbC1wcmV2aWV3LWNvbXBvbmVudC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvZ2VuZXJhbC1wcmV2aWV3LWNvbXBvbmVudC9nZW5lcmFsLXByZXZpZXctY29tcG9uZW50LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBREpJO0VBTVEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NaO0FEWkk7RUFlUSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQVo7QURsQkk7RUFzQlEsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRFo7QUQzQkk7RUFnQ1EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtFQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VDRlYsb0JBQW9CO0VESVYsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VDRlYsWUFBWTtFREtGLGtCQUFBO0VBQ0EseUJBQUE7QUNIWjtBRC9DSTtFQXNEUSw0QkFBQTtFQUNBLDZEQUFBO0FDSlo7QURZSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ1ZSO0FEY0E7RUFDSSxxRkFBQTtFQUtBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtBQ2hCSjtBRG1CQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ2pCSjtBRGNBO0VBTVEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNqQlI7QURtQlE7RUFDSSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VDakJWLDRCQUE0QjtFRG9CbEIseUJBQUE7RUNsQlYsV0FBVztFRHNCRCxjQUFBO0VBQ0EsbUJBQUE7QUNwQlo7QUR1QlE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQ3RCWjtBRGJBO0VBd0NRLDREQUFBO0FDeEJSO0FEaEJBO0VBMkNRLHVEQUFBO0FDeEJSO0FENEJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDMUJKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvZ2VuZXJhbC1wcmV2aWV3LWNvbXBvbmVudC9nZW5lcmFsLXByZXZpZXctY29tcG9uZW50LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1heC13aWR0aDogNTcxcHg7XG5cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMTAwXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJlcmxpbmdza2VTZXJpZi1Cb2xkSXRhbGljXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTEwMFwiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3NHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYmRiNzQgMy42NSUsICNlMmFjNDggOTcuOTIlKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIC8qINCW0ZHQu9GC0L7QtSDRgdCy0LXRh9C10L3QuNC1ICovXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggMjJweCByZ2JhKDI1MiwgMjE3LCAxMTksIDAuMTUpKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTcwMFwiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAvKiBvciAxMzMlICovXG5cbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgMTgwZGVnLFxuICAgICAgICAgICAgICAgIGRhcmtlbigjZmJkYjc0LCA4JSkgMCUsXG4gICAgICAgICAgICAgICAgZGFya2VuKCNlMmFjNDgsIDglKSAxMDAlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLnNoaW5lIHtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIDUwJSA1MCUgYXQgNTAlIDUwJSxcbiAgICAgICAgIzIwMjQyNSAwJSxcbiAgICAgICAgcmdiYSgzMiwgMzYsIDM3LCAwKSAxMDAlXG4gICAgKTtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0xODBweDtcbiAgICB0b3A6IDA7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5ibG9jayB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDM4cHggMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmLURlbWlCb2xkXCI7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgIC8qIHllbGxvdyAqL1xuXG4gICAgICAgICAgICBjb2xvcjogI2ZhZDg3NTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG5cbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJsb2NrOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzEzMTQxOCAwJSwgIzBjMGQwZiA1MCUpO1xuICAgIH1cbiAgICAuYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAsICMxMzE0MTggMCUsICMwYzBkMGYgNTAlKTtcbiAgICB9XG59XG5cbi5mLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA3MHB4O1xufVxuIiwiLmZyYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mcmFtZV9fZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDU3MXB4O1xufVxuLmZyYW1lX19kZXNjcmlwdGlvbiAuc3VidGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0xMDBcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZnJhbWVfX2Rlc2NyaXB0aW9uIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJlcmxpbmdza2VTZXJpZi1Cb2xkSXRhbGljXCI7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZnJhbWVfX2Rlc2NyaXB0aW9uIC50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0xMDBcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWF4LXdpZHRoOiAyNzRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZnJhbWVfX2Rlc2NyaXB0aW9uIC5idXR0b24ge1xuICB3aWR0aDogMjcwcHg7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJkYjc0IDMuNjUlLCAjZTJhYzQ4IDk3LjkyJSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgLyog0JbRkdC70YLQvtC1INGB0LLQtdGH0LXQvdC40LUgKi9cbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDIycHggcmdiYSgyNTIsIDIxNywgMTE5LCAwLjE1KSk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtNzAwXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC8qIG9yIDEzMyUgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZyYW1lX19kZXNjcmlwdGlvbiAuYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZhZDE0YyAwJSwgI2RjOWMyNSAxMDAlKTtcbn1cbi5mcmFtZV9faW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuLnNoaW5lIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDUwJSA1MCUgYXQgNTAlIDUwJSwgIzIwMjQyNSAwJSwgcmdiYSgzMiwgMzYsIDM3LCAwKSAxMDAlKTtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTgwcHg7XG4gIHRvcDogMDtcbn1cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXIgLmJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMzhweCAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5mb290ZXIgLmJsb2NrX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJlcmxpbmdza2VTZXJpZi1EZW1pQm9sZFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8qIHllbGxvdyAqL1xuICBjb2xvcjogI2ZhZDg3NTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5mb290ZXIgLmJsb2NrX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZm9vdGVyIC5ibG9jazpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxMzE0MTggMCUsICMwYzBkMGYgNTAlKTtcbn1cbi5mb290ZXIgLmJsb2NrOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwLCAjMTMxNDE4IDAlLCAjMGMwZDBmIDUwJSk7XG59XG4uZi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3MHB4O1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPreviewComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-preview-component',
                templateUrl: './general-preview-component.component.html',
                styleUrls: ['./general-preview-component.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/hauling-furniture-block/hauling-furniture-block.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/general/components/hauling-furniture-block/hauling-furniture-block.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: HaulingFurnitureBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaulingFurnitureBlockComponent", function() { return HaulingFurnitureBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HaulingFurnitureBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
HaulingFurnitureBlockComponent.ɵfac = function HaulingFurnitureBlockComponent_Factory(t) { return new (t || HaulingFurnitureBlockComponent)(); };
HaulingFurnitureBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HaulingFurnitureBlockComponent, selectors: [["app-hauling-furniture-block"]], decls: 2, vars: 0, template: function HaulingFurnitureBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hauling-furniture-block works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL2hhdWxpbmctZnVybml0dXJlLWJsb2NrL2hhdWxpbmctZnVybml0dXJlLWJsb2NrLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HaulingFurnitureBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hauling-furniture-block',
                templateUrl: './hauling-furniture-block.component.html',
                styleUrls: ['./hauling-furniture-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/map-block/map-block.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/general/components/map-block/map-block.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MapBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBlockComponent", function() { return MapBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/company-logo/company-logo.component */ "./src/app/shared/components/company-logo/company-logo.component.ts");
/* harmony import */ var _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/icons/icons.component */ "./src/app/shared/components/icons/icons.component.ts");




class MapBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
MapBlockComponent.ɵfac = function MapBlockComponent_Factory(t) { return new (t || MapBlockComponent)(); };
MapBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapBlockComponent, selectors: [["app-map-block"]], decls: 58, vars: 0, consts: [[1, "container"], [1, "form-container"], [1, "form-content"], [1, "form-title"], [1, "list"], [1, "list__caption"], [1, "list__description"], [1, "button-container"], [1, "button"], [1, "button-border"], [1, "label"], [1, "footer-page"], [1, "logo"], [1, "mui-space_bottom-3"], [1, "logo-title"], [1, "messagers"], [1, "title"], [1, "icon-list"], [1, "icon"], ["name", "iconTelegramm"], ["name", "iconViber"], ["name", "iconWhatsup"], [1, "icon-list__description"], [1, "socials"], ["name", "iconInstagramm"], ["name", "iconFacebook"]], template: function MapBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0430\u0448\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "8 (495) 749 14 93");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0427\u0430\u0441\u044B \u0440\u0430\u0431\u043E\u0442\u044B:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041F\u043D-\u0412\u0441: \u0441 9:00 \u0434\u043E 21:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "obbeyru@yandex.ru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041D\u0430\u0448\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u041C\u041E \u0433. \u041F\u0443\u0448\u043A\u0438\u043D\u043E, \u041A\u0440\u0430\u0441\u043D\u043E\u0444\u043B\u043E\u0442\u043A\u0430\u044F 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ctrl + d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0430\u0439\u0442 \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043E\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-company-logo", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u043C\u0435\u0431\u0435\u043B\u044C \u0443 \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u043D\u0430\u043C \u043B\u044E\u0431\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0430 \u043F\u0440\u044F\u043C\u0443\u044E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u0412\u0440\u0435\u043C\u044F \u043E\u0442\u0432\u0435\u0442\u0430 \u0432 \u0441\u0440\u0435\u0434\u043D\u0435\u043C 3 \u043C\u0438\u043D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u043D\u0430\u0441 \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u0411\u0443\u0434\u0435\u043C \u0440\u0430\u0434\u044B \u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0441 \u0432 \u043D\u0430\u0448\u0438\u0445 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_1__["CompanyLogoComponent"], _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 900px;\n  background-image: url('map-background.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 160px 0 65px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 531px;\n  background-image: url('Component18.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n}\n.form-content[_ngcontent-%COMP%] {\n  padding: 60px 50px;\n  display: flex;\n  flex-direction: column;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #ffffff;\n  margin-bottom: 50px;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n}\n.list__caption[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fad875;\n}\n.list__description[_ngcontent-%COMP%] {\n  font-family: Museo Sans Cyrl;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 30px;\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  color: #ffffff;\n  white-space: nowrap;\n}\n.footer-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 120px;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  \n  text-transform: uppercase;\n  margin-bottom: 15px;\n  \n  color: #fad875;\n}\n.logo-title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  \n  text-transform: uppercase;\n  color: #fffffe;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.messagers[_ngcontent-%COMP%], .socials[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.icon-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.icon-list__description[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n.button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 6px;\n  padding: 5px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  margin-right: 20px;\n}\n.label[_ngcontent-%COMP%] {\n  max-width: 110px;\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 16px;\n  line-height: 19px;\n  display: flex;\n  align-items: center;\n  color: #ffffff;\n}\n.button-border[_ngcontent-%COMP%] {\n  padding: 10px 32px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid #5a5a5a;\n  box-sizing: border-box;\n  border-radius: 6px;\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  font-feature-settings: \"tnum\" on, \"lnum\" on;\n  \n  color: #fad875;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvbWFwLWJsb2NrL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvbWFwLWJsb2NrL21hcC1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvbWFwLWJsb2NrL21hcC1ibG9jay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRko7QURLQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSEo7QURNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDSko7QURNSTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxjQUFBO0FDTFI7QURRSTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ05OLHFDQUFxQztFRFMvQixhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDUFI7QURXQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDVEo7QURZQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ1ZGLDRCQUE0QjtFRGExQix5QkFBQTtFQUNBLG1CQUFBO0VDWEYsV0FBVztFRGVULGNBQUE7QUNiSjtBRGdCQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ2RGLDRCQUE0QjtFRGlCMUIseUJBQUE7RUFFQSxjQUFBO0FDaEJKO0FEbUJBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNqQko7QURvQkE7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0FDbEJKO0FEcUJBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNuQko7QURxQkk7RUFDSSxnQkFBQTtBQ25CUjtBRHVCQTtFQUNJLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNyQko7QUR3QkE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtBQ3ZCSjtBRDBCQTtFQUNJLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUN4QkYscUNBQXFDO0VEMkJuQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUN6QkYsV0FBVztFRDZCVCxjQUFBO0FDM0JKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvbWFwLWJsb2NrL21hcC1ibG9jay5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBoZWlnaHQ6IDkwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2VuZXJhbC1wYWdlL21hcC1iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmc6IDE2MHB4IDAgNjVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIGhlaWdodDogNTMxcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Db21wb25lbnQxOC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5mb3JtLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAmX19jYXB0aW9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgIGNvbG9yOiAjZmFkODc1O1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IE11c2VvIFNhbnMgQ3lybDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTg3JSAqL1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxufVxuXG4uZm9vdGVyLXBhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAvKiB5ZWxsb3cgKi9cblxuICAgIGNvbG9yOiAjZmFkODc1O1xufVxuXG4ubG9nby10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgY29sb3I6ICNmZmZmZmU7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lc3NhZ2Vycyxcbi5zb2NpYWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pY29uLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICB9XG59XG5cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubGFiZWwge1xuICAgIG1heC13aWR0aDogMTEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idXR0b24tYm9yZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDMycHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWE1YTVhO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTUwJSAqL1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCIgb24sIFwibG51bVwiIG9uO1xuXG4gICAgLyogeWVsbG93ICovXG5cbiAgICBjb2xvcjogI2ZhZDg3NTtcbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiA5MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nZW5lcmFsLXBhZ2UvbWFwLWJhY2tncm91bmQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmc6IDE2MHB4IDAgNjVweDtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzODBweDtcbiAgaGVpZ2h0OiA1MzFweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Db21wb25lbnQxOC5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmZvcm0tY29udGVudCB7XG4gIHBhZGRpbmc6IDYwcHggNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5saXN0X19jYXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZhZDg3NTtcbn1cbi5saXN0X19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBNdXNlbyBTYW5zIEN5cmw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE4NyUgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5mb290ZXItcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbn1cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIC8qIHllbGxvdyAqL1xuICBjb2xvcjogI2ZhZDg3NTtcbn1cbi5sb2dvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmZmZmU7XG59XG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVzc2FnZXJzLFxuLnNvY2lhbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmljb24tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmljb24tbGlzdF9fZGVzY3JpcHRpb24ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmxhYmVsIHtcbiAgbWF4LXdpZHRoOiAxMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYnV0dG9uLWJvcmRlciB7XG4gIHBhZGRpbmc6IDEwcHggMzJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVhNWE1YTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTUwJSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCIgb24sIFwibG51bVwiIG9uO1xuICAvKiB5ZWxsb3cgKi9cbiAgY29sb3I6ICNmYWQ4NzU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-block',
                templateUrl: './map-block.component.html',
                styleUrls: ['./map-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/production-block/production-block.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/general/components/production-block/production-block.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductionBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionBlockComponent", function() { return ProductionBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductionBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductionBlockComponent.ɵfac = function ProductionBlockComponent_Factory(t) { return new (t || ProductionBlockComponent)(); };
ProductionBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductionBlockComponent, selectors: [["app-production-block"]], decls: 48, vars: 0, consts: [[1, "container"], [1, "left-column"], [1, "title"], [1, "subtitle"], [1, "right-column"], [1, "video", "mui-space_right-5"], [1, "play"], ["width", "10", "height", "10", "viewBox", "0 0 10 10", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.333 0.867012C1.48 0.426012 0.789001 0.787012 0.789001 1.66901V8.19501C0.789001 9.07801 1.48 9.43801 2.333 9.00001L8.675 5.72901C9.529 5.28901 9.529 4.57501 8.675 4.13601L2.333 0.867012Z", "fill", "#111416"], [1, "video"], [1, "overflow-block"], [1, "overflow-block__title"], [1, "overflow-block__icon-list"], [1, "icon-element"], [1, "icon-element__border"], ["src", "../../../../../assets/images/logo/logo-company5.png", "alt", ""], [1, "icon-element__description"], ["src", "../../../../../assets/images/logo/logo-company4.png", "alt", ""], ["src", "../../../../../assets/images/logo/logo-company1.png", "alt", ""], ["src", "../../../../../assets/images/logo/logo-company2.png", "alt", ""], ["src", "../../../../../assets/images/logo/logo-company3.png", "alt", ""]], template: function ProductionBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041D\u0430\u0448\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u043E \u0441 \u043D\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u041E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u043C \u043F\u043E\u0441\u0442\u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0435\u043C \u0441 \u0444\u0430\u0431\u0440\u0438\u043A\u0430\u043C\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0424\u0430\u0431\u0440\u0438\u043A\u0430 8 \u041C\u0430\u0440\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Albert & Shtein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Britannica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " UNICO INTERIORS DECORATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "M\u00D6BEL&ZEIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  height: 685px;\n  background: #fcfbff;\n  color: #000000;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1200px;\n  margin: 0 auto;\n  align-items: center;\n  height: 100%;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 43px;\n  margin-bottom: 20px;\n  color: #000000;\n  max-width: 248px;\n}\n.container[_ngcontent-%COMP%]   .video-list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.left-column[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n.right-column[_ngcontent-%COMP%] {\n  display: flex;\n}\n.video[_ngcontent-%COMP%] {\n  width: 285px;\n  height: 206px;\n  background: linear-gradient(90deg, #15171a 24.66%, #262b32 100%);\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: linear-gradient(0deg, #e4a94d 0%, #fcd977 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.overflow-block[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -40%;\n  height: 420px;\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  padding: 100px 100px 60px;\n}\n.overflow-block__title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 36px;\n  line-height: 43px;\n  text-align: center;\n  margin-bottom: 30px;\n  color: #000000;\n}\n.overflow-block__icon-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.icon-element[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 160px;\n}\n.icon-element__border[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border-radius: 6px;\n  border: 1px solid #edbe7d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.icon-element__description[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-700\";\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcHJvZHVjdGlvbi1ibG9jay9DOi9Vc2Vycy9NYW9saW5rL0Rlc2t0b3AvRGV2L2Z1cm5pdHVyZS9zcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL3Byb2R1Y3Rpb24tYmxvY2svcHJvZHVjdGlvbi1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcHJvZHVjdGlvbi1ibG9jay9wcm9kdWN0aW9uLWJsb2NrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRE5BO0VBU1EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRGhCQTtFQXFCUSxhQUFBO0FDRlI7QURNQTtFQUNJLGtCQUFBO0FDSko7QURPQTtFQUNJLGFBQUE7QUNMSjtBRFFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRERBO0VBVVEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJEQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNOUjtBRFVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNSSjtBRFVJO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNSUjtBRFdJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FDVFI7QURhQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1hKO0FEYUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWFI7QURjSTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNaUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL3Byb2R1Y3Rpb24tYmxvY2svcHJvZHVjdGlvbi1ibG9jay5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBoZWlnaHQ6IDY4NXB4O1xuICAgIGJhY2tncm91bmQ6ICNmY2ZiZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWF4LXdpZHRoOiAyNDhweDtcbiAgICB9XG5cbiAgICAudmlkZW8tbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxufVxuXG4ubGVmdC1jb2x1bW4ge1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLnJpZ2h0LWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnZpZGVvIHtcbiAgICB3aWR0aDogMjg1cHg7XG4gICAgaGVpZ2h0OiAyMDZweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxNTE3MWEgMjQuNjYlLCAjMjYyYjMyIDEwMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAucGxheSB7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNlNGE5NGQgMCUsICNmY2Q5NzcgMTAwJSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLm92ZXJmbG93LWJsb2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNDAlO1xuICAgIGhlaWdodDogNDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTAwcHggMTAwcHggNjBweDtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG5cbiAgICAmX19pY29uLWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG59XG5cbi5pY29uLWVsZW1lbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxNjBweDtcblxuICAgICZfX2JvcmRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGJlN2Q7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC03MDBcIjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG59XG4iLCI6aG9zdCB7XG4gIGhlaWdodDogNjg1cHg7XG4gIGJhY2tncm91bmQ6ICNmY2ZiZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXgtd2lkdGg6IDI0OHB4O1xufVxuLmNvbnRhaW5lciAudmlkZW8tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubGVmdC1jb2x1bW4ge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4ucmlnaHQtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi52aWRlbyB7XG4gIHdpZHRoOiAyODVweDtcbiAgaGVpZ2h0OiAyMDZweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTUxNzFhIDI0LjY2JSwgIzI2MmIzMiAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi52aWRlbyAucGxheSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNlNGE5NGQgMCUsICNmY2Q5NzcgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm92ZXJmbG93LWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC00MCU7XG4gIGhlaWdodDogNDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwMHB4IDEwMHB4IDYwcHg7XG59XG4ub3ZlcmZsb3ctYmxvY2tfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsaW5lLWhlaWdodDogNDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5vdmVyZmxvdy1ibG9ja19faWNvbi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uaWNvbi1lbGVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE2MHB4O1xufVxuLmljb24tZWxlbWVudF9fYm9yZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkYmU3ZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaWNvbi1lbGVtZW50X19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtNzAwXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductionBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-production-block',
                templateUrl: './production-block.component.html',
                styleUrls: ['./production-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/progress-work-block/progress-work-block.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/general/components/progress-work-block/progress-work-block.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProgressWorkBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressWorkBlockComponent", function() { return ProgressWorkBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ProgressWorkBlockComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", index_r2 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r1.caption);
} }
class ProgressWorkBlockComponent {
    constructor() {
        this.elements = [
            {
                caption: 'ремонт каркаса мебели',
                image: '',
            },
            {
                caption: 'Полностью меняем наполнение мебели на новое и качественное.Именно благодаря наполнению, изделие не меняет своей формы со временем',
                image: '',
            },
            {
                caption: 'Перетяжка новой тканью или кожей',
                image: '',
            },
            {
                caption: 'Упаковка и доставка мебели обратно',
                image: '',
            },
        ];
    }
    ngOnInit() {
    }
}
ProgressWorkBlockComponent.ɵfac = function ProgressWorkBlockComponent_Factory(t) { return new (t || ProgressWorkBlockComponent)(); };
ProgressWorkBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressWorkBlockComponent, selectors: [["app-progress-work-block"]], decls: 6, vars: 1, consts: [[1, "block"], [1, "block__content"], [1, "title", "mui-space_bottom-10"], [1, "block__elements"], ["class", "element", 4, "ngFor", "ngForOf"], [1, "element"], [1, "element__content"], [1, "number", "mui-space_bottom-5"], [1, "second"], [1, "line"], [1, "text"]], template: function ProgressWorkBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u043C\u0435\u0431\u0435\u043B\u0438 \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProgressWorkBlockComponent_div_5_Template, 9, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.elements);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".block[_ngcontent-%COMP%] {\n  min-height: 876px;\n  background-color: #fff;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #000000;\n  padding-top: 130px;\n}\n.block__content[_ngcontent-%COMP%] {\n  max-width: 1230px;\n}\n.block__content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 43px;\n  text-align: center;\n  color: #000000;\n}\n.block__elements[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.block__elements[_ngcontent-%COMP%]    > .element[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 10px;\n}\n.element[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #262b32 0%, #15171a 100%);\n  border-radius: 6px;\n  width: 300px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  padding: 70px 50px;\n  color: #fff;\n  cursor: pointer;\n}\n.element__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.element__content[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.element__content[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #ffffff;\n  padding: 30px 0;\n}\n.line[_ngcontent-%COMP%] {\n  background: linear-gradient(270deg, #fad875 10.94%, #edbe7d 66.67%);\n  height: 1px;\n  width: 100%;\n}\n.number[_ngcontent-%COMP%] {\n  width: 97px;\n  height: 97px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 29px;\n  \n  text-align: center;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcHJvZ3Jlc3Mtd29yay1ibG9jay9DOi9Vc2Vycy9NYW9saW5rL0Rlc2t0b3AvRGV2L2Z1cm5pdHVyZS9zcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL3Byb2dyZXNzLXdvcmstYmxvY2svcHJvZ3Jlc3Mtd29yay1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcHJvZ3Jlc3Mtd29yay1ibG9jay9wcm9ncmVzcy13b3JrLWJsb2NrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxpQkFBQTtBQ0NSO0FERkk7RUFJUSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNBWjtBRElJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDRlI7QURLSTtFQUNJLGlCQUFBO0FDSFI7QURPQTtFQUNJLDZEQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNMSjtBRE9JO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNMUjtBREVJO0VBTVEsV0FBQTtBQ0xaO0FEREk7RUFTWSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7QUNOaEI7QURZQTtFQUNJLG1FQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNWSjtBRGFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ1hGLDRCQUE0QjtFRGMxQixrQkFBQTtFQUVBLGNBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL3Byb2dyZXNzLXdvcmstYmxvY2svcHJvZ3Jlc3Mtd29yay1ibG9jay5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jayB7XG4gICAgbWluLWhlaWdodDogODc2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjMwcHg7XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2VsZW1lbnRzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICZfX2VsZW1lbnRzID4gLmVsZW1lbnQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG59XG5cbi5lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjYyYjMyIDAlLCAjMTUxNzFhIDEwMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNzBweCA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5zZWNvbmQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5saW5lIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmFkODc1IDEwLjk0JSwgI2VkYmU3ZCA2Ni42NyUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubnVtYmVyIHtcbiAgICB3aWR0aDogOTdweDtcbiAgICBoZWlnaHQ6IDk3cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4iLCIuYmxvY2sge1xuICBtaW4taGVpZ2h0OiA4NzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nLXRvcDogMTMwcHg7XG59XG4uYmxvY2tfX2NvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEyMzBweDtcbn1cbi5ibG9ja19fY29udGVudCAudGl0bGUge1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmJsb2NrX19lbGVtZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ibG9ja19fZWxlbWVudHMgPiAuZWxlbWVudDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmVsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjYyYjMyIDAlLCAjMTUxNzFhIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNzBweCA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVsZW1lbnRfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmVsZW1lbnRfX2NvbnRlbnQgLnNlY29uZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmVsZW1lbnRfX2NvbnRlbnQgLnNlY29uZCAudGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbi5saW5lIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZhZDg3NSAxMC45NCUsICNlZGJlN2QgNjYuNjclKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm51bWJlciB7XG4gIHdpZHRoOiA5N3B4O1xuICBoZWlnaHQ6IDk3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressWorkBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress-work-block',
                templateUrl: './progress-work-block.component.html',
                styleUrls: ['./progress-work-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/quality-block/quality-block.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/general/components/quality-block/quality-block.component.ts ***!
  \*************************************************************************************/
/*! exports provided: QualityBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityBlockComponent", function() { return QualityBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/icons/icons.component */ "./src/app/shared/components/icons/icons.component.ts");



class QualityBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
QualityBlockComponent.ɵfac = function QualityBlockComponent_Factory(t) { return new (t || QualityBlockComponent)(); };
QualityBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QualityBlockComponent, selectors: [["app-quality-block"]], decls: 37, vars: 0, consts: [[1, "container"], [1, "title"], [1, "subtitle"], [1, "form"], [1, "form__content"], [1, "form__title"], [1, "text-lighter"], [1, "text-upper"], [1, "messagers", "mui-space_bottom-2"], [1, "messager"], ["name", "iconTelegrammMessager"], ["name", "iconViberMessager"], ["name", "iconWhatsupMessager"], [1, "text", "mui-space_bottom-2"], [1, "form-action"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F", 1, "input", "mui-space_bottom-1"], ["type", "number", 1, "input", "mui-space_bottom-1"], [1, "add-image"], [1, "add-image__icon"], ["name", "iconAddImage"], [1, "add-image__label"], ["type", "file", 1, "mui-space_bottom-2", 2, "display", "none"], [1, "button"], [1, "underline-text"], [1, "primary-text-color"]], template: function QualityBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 - \u043D\u0430\u0448\u0430 \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Obbey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u043D\u0430\u043C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E \u043C\u0435\u0431\u0435\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0438 \u043C\u044B \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0435\u043C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u0430\u0448\u0435\u0433\u043E \u0440\u0435\u043C\u043E\u043D\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u043D\u0430\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0435 \u0432\u0430\u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443, \u0432\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043D\u043D\u044B\u0445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__["IconsComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 1100px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 130px 0;\n  background-image: url('background.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.title[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 43px;\n  text-align: center;\n  margin-bottom: 30px;\n  color: #000000;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-family: \"BerlingskeSerif\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n}\n.form[_ngcontent-%COMP%] {\n  background-image: url('Component19.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  top: 150%;\n  right: 0;\n  width: 310px;\n  height: 560px;\n  border-radius: 6px;\n  padding: 8px;\n}\n.form__content[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  box-sizing: border-box;\n  color: #000000;\n  width: 100%;\n  height: 100%;\n  padding: 40px 40px 28px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.form__title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n  margin-bottom: 8px;\n}\n.text-lighter[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 14px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #939391;\n  margin-bottom: 20px;\n}\n.text-upper[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  margin-bottom: 8px;\n}\n.messagers[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n.messager[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 43px;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  color: #939391;\n  text-align: center;\n  justify-content: center;\n}\n.add-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.add-image__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fafafa;\n  border-radius: 6px;\n  margin-right: 20px;\n  -webkit-clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n          clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n}\n.add-image__label[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n}\n.input[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  width: 100%;\n  justify-content: center;\n  font-family: \"MuseoSansCyrl\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000000;\n  background-color: #fafafa;\n  outline: none;\n  border: none;\n  -webkit-clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n          clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n}\n.button[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n          clip-path: polygon(98% 0, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0 75%, 0 25%, 2% 0);\n  width: 100%;\n  background: linear-gradient(180deg, #fbdb74 3.65%, #e2ac48 97.92%);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  font-family: \"MuseoSansCyrl\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000000;\n  border: none;\n  outline: none;\n  padding: 16px 48px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.underline-text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-size: 10px;\n  line-height: 16px;\n  display: inline-block;\n  align-items: center;\n  text-align: center;\n  color: #939391;\n  max-width: 196px;\n}\n.form-action[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcXVhbGl0eS1ibG9jay9DOi9Vc2Vycy9NYW9saW5rL0Rlc2t0b3AvRGV2L2Z1cm5pdHVyZS9zcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL3F1YWxpdHktYmxvY2svcXVhbGl0eS1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcXVhbGl0eS1ibG9jay9xdWFsaXR5LWJsb2NrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNESjtBRElBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNGSjtBREtBO0VBQ0ksd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFHQSxrQkFBQTtFQUNBLFlBQUE7QUNMSjtBRE9JO0VBV0ksa0JBQUE7RUFFQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ2hCUjtBRG1CSTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ2pCTixZQUFZO0VEb0JOLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDbEJSO0FEc0JBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ3BCSjtBRHVCQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3JCSjtBRHdCQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUN0Qko7QUR5QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDdkJKO0FEMEJBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ3pCSjtBRDRCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQzFCSjtBRDRCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RkFBQTtVQUFBLG9GQUFBO0FDMUJSO0FEc0NJO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNwQ1I7QUR3Q0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUdBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0RkFBQTtVQUFBLG9GQUFBO0FDekNKO0FEcURBO0VBQ0ksNEZBQUE7VUFBQSxvRkFBQTtFQVVBLFdBQUE7RUFDQSxrRUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUM1REo7QUQrREE7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzdESjtBRGdFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQzlESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9jb21wb25lbnRzL3F1YWxpdHktYmxvY2svcXVhbGl0eS1ibG9jay5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBoZWlnaHQ6IDExMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMzBweCAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2VuZXJhbC1wYWdlL2JhY2tncm91bmQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Db21wb25lbnQxOS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNTAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzMTBweDtcbiAgICBoZWlnaHQ6IDU2MHB4O1xuICAgIC8vIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCwgNTAlIDAsIDEwMCUgNiUsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDYlLCA1MCUgMCUpO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDhweDtcblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAgIC8vICAgICA1MCUgMCxcbiAgICAgICAgLy8gICAgIDUwJSAwLFxuICAgICAgICAvLyAgICAgMTAwJSA2JSxcbiAgICAgICAgLy8gICAgIDEwMCUgMTAwJSxcbiAgICAgICAgLy8gICAgIDAgMTAwJSxcbiAgICAgICAgLy8gICAgIDAgNiUsXG4gICAgICAgIC8vICAgICA1MCUgMCVcbiAgICAgICAgLy8gKTtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNDBweCA0MHB4IDI4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIC8qIG9yIDE1MCUgKi9cblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxufVxuXG4udGV4dC1saWdodGVyIHtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOTM5MzkxO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50ZXh0LXVwcGVyIHtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ubWVzc2FnZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVzc2FnZXIge1xuICAgIHdpZHRoOiA0M3B4O1xuICAgIGhlaWdodDogNDNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzkzOTM5MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZGQtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX2ljb24ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgICAgICAgIDk4JSAwLFxuICAgICAgICAgICAgMTAwJSAyNSUsXG4gICAgICAgICAgICAxMDAlIDc1JSxcbiAgICAgICAgICAgIDk4JSAxMDAlLFxuICAgICAgICAgICAgMiUgMTAwJSxcbiAgICAgICAgICAgIDAgNzUlLFxuICAgICAgICAgICAgMCAyNSUsXG4gICAgICAgICAgICAyJSAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgJl9fbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbn1cblxuLmlucHV0IHtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAgIDk4JSAwLFxuICAgICAgICAxMDAlIDI1JSxcbiAgICAgICAgMTAwJSA3NSUsXG4gICAgICAgIDk4JSAxMDAlLFxuICAgICAgICAyJSAxMDAlLFxuICAgICAgICAwIDc1JSxcbiAgICAgICAgMCAyNSUsXG4gICAgICAgIDIlIDBcbiAgICApO1xufVxuXG4uYnV0dG9uIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAgIDk4JSAwLFxuICAgICAgICAxMDAlIDI1JSxcbiAgICAgICAgMTAwJSA3NSUsXG4gICAgICAgIDk4JSAxMDAlLFxuICAgICAgICAyJSAxMDAlLFxuICAgICAgICAwIDc1JSxcbiAgICAgICAgMCAyNSUsXG4gICAgICAgIDIlIDBcbiAgICApO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYmRiNzQgMy42NSUsICNlMmFjNDggOTcuOTIlKTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxNnB4IDQ4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4udW5kZXJsaW5lLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzkzOTM5MTtcbiAgICBtYXgtd2lkdGg6IDE5NnB4O1xufVxuXG4uZm9ybS1hY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMzBweCAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dlbmVyYWwtcGFnZS9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpdGxlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5mb3JtIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Db21wb25lbnQxOS5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MCU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMzEwcHg7XG4gIGhlaWdodDogNTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmZvcm1fX2NvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4IDQwcHggMjhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZvcm1fX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogb3IgMTUwJSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4udGV4dC1saWdodGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzkzOTM5MTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50ZXh0LXVwcGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm1lc3NhZ2VycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZXNzYWdlciB7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM5MzkzOTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWRkLWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGQtaW1hZ2VfX2ljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNsaXAtcGF0aDogcG9seWdvbig5OCUgMCwgMTAwJSAyNSUsIDEwMCUgNzUlLCA5OCUgMTAwJSwgMiUgMTAwJSwgMCA3NSUsIDAgMjUlLCAyJSAwKTtcbn1cbi5hZGQtaW1hZ2VfX2xhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5pbnB1dCB7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oOTglIDAsIDEwMCUgMjUlLCAxMDAlIDc1JSwgOTglIDEwMCUsIDIlIDEwMCUsIDAgNzUlLCAwIDI1JSwgMiUgMCk7XG59XG4uYnV0dG9uIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDk4JSAwLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDk4JSAxMDAlLCAyJSAxMDAlLCAwIDc1JSwgMCAyNSUsIDIlIDApO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZiZGI3NCAzLjY1JSwgI2UyYWM0OCA5Ny45MiUpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmxcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTZweCA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi51bmRlcmxpbmUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzkzOTM5MTtcbiAgbWF4LXdpZHRoOiAxOTZweDtcbn1cbi5mb3JtLWFjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QualityBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quality-block',
                templateUrl: './quality-block.component.html',
                styleUrls: ['./quality-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/recomended-block/recomended-block.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/general/components/recomended-block/recomended-block.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RecomendedBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecomendedBlockComponent", function() { return RecomendedBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/icons/icons.component */ "./src/app/shared/components/icons/icons.component.ts");




function RecomendedBlockComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 35);
} if (rf & 2) {
    const sub_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](sub_r1.style);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class RecomendedBlockComponent {
    constructor() {
        this.slide = {
            main: {
                image: '../../../../../assets/images/IMG2.png',
            },
            sub: [
                {
                    image: '../../../../../assets/images/IMG3.png',
                    style: {
                        'background-image': 'url(../../../../../assets/images/Rectangle56.png)',
                        'background-position': 'center',
                        'background-size': 'cover',
                    }
                },
                {
                    image: '../../../../../assets/images/IMG3.png',
                    style: {
                        'background-image': 'url(../../../../../assets/images/Rectangle57.png)',
                        'background-position': 'center',
                        'background-size': 'cover',
                    }
                },
                {
                    image: '../../../../../assets/images/IMG3.png',
                    style: {
                        'background-image': 'url(../../../../../assets/images/Rectangle58.png)',
                        'background-position': 'center',
                        'background-size': 'cover',
                    }
                },
            ]
        };
    }
    ngOnInit() {
    }
}
RecomendedBlockComponent.ɵfac = function RecomendedBlockComponent_Factory(t) { return new (t || RecomendedBlockComponent)(); };
RecomendedBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecomendedBlockComponent, selectors: [["app-recomended-block"]], decls: 55, vars: 4, consts: [[1, "container"], [1, "title-page"], [1, "primary-text-color"], [1, "underline-text"], [1, "slider"], [1, "slider__container"], [1, "slide"], [1, "slide__left-column"], [1, "galery"], [1, "main-image", 3, "ngStyle"], [1, "subimages"], ["class", "subimage", 3, "style", 4, "ngFor", "ngForOf"], [1, "slide__right-column"], [1, "right-group"], [1, "icon"], [1, "slider-title"], [1, "group"], [1, "line"], [1, "tab-group"], [1, "tab"], [1, "description"], [1, "button"], [1, "button-icon"], ["width", "11", "height", "11", "viewBox", "0 0 11 11", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1.99701 0.243999C0.897012 -0.325001 0.00601196 0.140999 0.00601196 1.283V9.708C0.00601196 10.85 0.897012 11.316 1.99701 10.748L10.169 6.525C11.269 5.957 11.269 5.036 10.169 4.468L1.99701 0.243999Z", "fill", "#111416"], ["onclick", "plusSlides(-1)", 1, "slider__prev"], [1, "icon__prev"], ["name", "iconSliderArrowRight"], ["onclick", "plusSlides(1)", 1, "slider__next"], [1, "icon__next"], [1, "slider__dots"], ["onclick", "currentSlide(1)", 1, "dot", "active"], ["onclick", "currentSlide(2)", 1, "dot"], ["onclick", "currentSlide(3)", 1, "dot"], ["onclick", "currentSlide(1)", 1, "dot"], [1, "subimage"]], template: function RecomendedBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "85 %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E\u0442 \u043D\u0430\u0441 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0441\u0432\u043E\u0438\u043C \u0437\u043D\u0430\u043A\u043E\u043C\u044B\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041E\u0442\u0437\u044B\u0432\u044B \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 - \u043B\u0443\u0447\u0448\u0438\u0439 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u043D\u0430\u0448\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RecomendedBlockComponent_div_17_Template, 1, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u041F\u0435\u0440\u0435\u0442\u044F\u0436\u043A\u0430 \u0442\u0440\u0451\u0445 \u043C\u0435\u0441\u0442\u043D\u043E\u0433\u043E \u0434\u0438\u0432\u0430\u043D\u0430 \u0441 \u043A\u0430\u0440\u0435\u0442\u043D\u043E\u0439 \u0441\u0442\u044F\u0436\u043A\u043E\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0437\u0430\u0434\u0430\u0447\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0447\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0427\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0437\u0430\u043C\u0435\u043D\u0438\u043B\u0438 \u043A\u043E\u0440\u043F\u0443\u0441, \u043F\u043E\u043A\u0440\u044B\u043B\u0438 \u0437\u0430\u0449\u0438\u0442\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u0434\u043B\u044F \u0434\u043E\u043B\u0433\u043E\u0432\u0435\u0447\u043D\u043E\u0439 \u0441\u043B\u0443\u0436\u0431\u044B, \u0437\u0430\u043C\u0435\u043D\u0438\u043B\u0438 \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0434\u0438\u0432\u0430\u043D\u0430 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u041E\u041F\u0421 \u0438 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u043B\u0438 \u043D\u0443\u0436\u043D\u0443\u044E \u0442\u043A\u0430\u043D\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0438\u0434\u0435\u043E \u043E\u0442\u0437\u044B\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + ctx.slide.main.image + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slide.sub);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]], styles: ["html[_ngcontent-%COMP%] {\n  color: #fff;\n}\n*[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.primary-text-color[_ngcontent-%COMP%] {\n  color: #fcd977;\n}\n[_nghost-%COMP%] {\n  height: 1100px;\n  background: #000000;\n  padding-top: 160px;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.title-page[_ngcontent-%COMP%] {\n  font-family: \"BerlingskeSerif-Italic\";\n  font-size: 36px;\n  line-height: 54px;\n  margin-bottom: 40px;\n}\n.underline-text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-100\";\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  color: #ffffff;\n  margin-bottom: 40px;\n}\n.block[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 360px;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.block__title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 43px;\n  text-align: center;\n  margin-bottom: 50px;\n  color: #ffffff;\n  max-width: 442px;\n}\n.slider[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.slider__prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n.slider__next[_ngcontent-%COMP%] {\n  right: 0;\n}\n.slider__next[_ngcontent-%COMP%], .slider__prev[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  width: auto;\n  top: 45%;\n  margin-top: -22px;\n  padding: 16px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.slider__container[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  width: 100%;\n}\n.slider__dots[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.caption[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  \n  text-align: center;\n  text-transform: uppercase;\n  \n  color: #fad875;\n}\n.slide[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 40px;\n  height: 500px;\n}\n.slide__left-column[_ngcontent-%COMP%], .slide__right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.slide__right-column[_ngcontent-%COMP%] {\n  align-items: center;\n  max-width: 340px;\n  width: 100%;\n  justify-content: space-between;\n}\n.slide__left-column[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.right-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.image[_ngcontent-%COMP%] {\n  width: 490px;\n  height: 300px;\n  background: #262b32;\n  border-radius: 6px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 7px;\n  width: 7px;\n  margin: 0 3px;\n  background: #1c1c1c;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n  transition: 0.2s ease-in-out;\n}\n.active[_ngcontent-%COMP%], .dot[_ngcontent-%COMP%]:hover {\n  transition: 0.2s ease-in-out;\n  background: linear-gradient(180deg, #feda7a 0%, #e7b055 87.5%);\n}\n\n.fade[_ngcontent-%COMP%] {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.icon__next[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.icon__prev[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  transform: rotate(180deg);\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.main-image[_ngcontent-%COMP%] {\n  width: 440px;\n  height: 440px;\n  overflow: hidden;\n  border-radius: 4px;\n  background: #fff;\n  margin-right: 10px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.subimages[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.subimage[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  background: #fff;\n  border-radius: 4px;\n}\n.galery[_ngcontent-%COMP%] {\n  display: flex;\n}\n.group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 100%;\n}\n.line[_ngcontent-%COMP%] {\n  background: #ececec;\n  height: 1px;\n  width: 100%;\n}\n.tab-group[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"MuseoSansCyrl-700\";\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #ffffff;\n  width: 100%;\n  justify-content: space-between;\n  padding: 13px 20px;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 97px;\n  height: 97px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.slider-title[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n.description[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-100\";\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  color: #ffffff;\n}\n.button[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fbdb74 0%, #e2ac48 100%);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  height: 70px;\n  width: 300px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: \"MuseoSansCyrl-700\";\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  padding: 15px 28px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #e2ac48 0%, #fada73 100%);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.button[_ngcontent-%COMP%]:hover {\n  transition: 0.2s ease-in-out;\n  background: linear-gradient(180deg, #fad14c 0%, #dc9c25 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcmVjb21lbmRlZC1ibG9jay9yZWNvbWVuZGVkLWJsb2NrLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwvY29tcG9uZW50cy9yZWNvbWVuZGVkLWJsb2NrL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hc3NldHMvc3R5bGVzL2dsb2JhbC5sZXNzIiwic3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwvY29tcG9uZW50cy9yZWNvbWVuZGVkLWJsb2NrL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcmVjb21lbmRlZC1ibG9jay9yZWNvbWVuZGVkLWJsb2NrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0FDa0JEO0VBQ0ksV0FBQTtBRGhCSjtBQ21CQTtFQUNJLGNBQUE7QURqQko7QUNvQkE7RUFDSSxjQUFBO0FEbEJKO0FFVEE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRldKO0FFUkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRlVKO0FFUEE7RUFDSSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FGU0o7QUVOQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUZRSjtBRUxBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRk9KO0FFTEk7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FGT1I7QUVIQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUZLSjtBRUhJO0VBQ0ksT0FBQTtBRktSO0FFRkk7RUFDSSxRQUFBO0FGSVI7QUVESTs7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUZHUjtBRUFJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FGRVI7QUVDSTtFQUNJLGdCQUFBO0FGQ1I7QUVHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VGREYsNEJBQTRCO0VFSTFCLGtCQUFBO0VBQ0EseUJBQUE7RUZGRixXQUFXO0VFTVQsY0FBQTtBRkpKO0FFT0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FGTEo7QUVPSTs7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FGTFI7QUVRSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUZOUjtBRVNJO0VBQ0kseUJBQUE7QUZQUjtBRVdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUZUSjtBRVlBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FGVko7QUFDQSxnQ0FBZ0M7QUVhaEM7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSw0QkFBQTtBRlhKO0FFY0E7O0VBRUksNEJBQUE7RUFDQSw4REFBQTtBRlpKO0FBQ0EscUJBQXFCO0FFZXJCO0VBQ0ksNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUZiSjtBRWdCQTtFQUNJO0lBQ0ksWUFBQTtFRmROO0VFZ0JFO0lBQ0ksVUFBQTtFRmROO0FBQ0Y7QUVpQkE7RUFDSTtJQUNJLFlBQUE7RUZmTjtFRWlCRTtJQUNJLFVBQUE7RUZmTjtBQUNGO0FFa0JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRmhCSjtBRW1CQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRmpCSjtBRW9CQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUZsQko7QUVxQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBRm5CSjtBRXNCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRnBCSjtBRXVCQTtFQUNJLGFBQUE7QUZyQko7QUV3QkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUZ0Qko7QUV5QkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FGdkJKO0FFMEJBO0VBQ0ksYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBRnhCSjtBRTJCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUZ6Qko7QUU0QkE7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FGMUJKO0FFNkJBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUY1Qko7QUUrQkE7RUFDSSw2REFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FGN0JKO0FFVUE7RUFzQlEsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUY3QlI7QUVpQ0E7RUFDSSw0QkFBQTtFQUNBLDZEQUFBO0FGL0JKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcmVjb21lbmRlZC1ibG9jay9yZWNvbWVuZGVkLWJsb2NrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvbG9yc1xuKi9cbmh0bWwge1xuICBjb2xvcjogI2ZmZjtcbn1cbioge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5wcmltYXJ5LXRleHQtY29sb3Ige1xuICBjb2xvcjogI2ZjZDk3Nztcbn1cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMTAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIHBhZGRpbmctdG9wOiAxNjBweDtcbn1cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDExODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGUtcGFnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJlcmxpbmdza2VTZXJpZi1JdGFsaWNcIjtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi51bmRlcmxpbmUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMTAwXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDM2MHB4O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJsb2NrX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1heC13aWR0aDogNDQycHg7XG59XG4uc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2xpZGVyX19wcmV2IHtcbiAgbGVmdDogMDtcbn1cbi5zbGlkZXJfX25leHQge1xuICByaWdodDogMDtcbn1cbi5zbGlkZXJfX25leHQsXG4uc2xpZGVyX19wcmV2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBhdXRvO1xuICB0b3A6IDQ1JTtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnNsaWRlcl9fY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNsaWRlcl9fZG90cyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uY2FwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8qIHllbGxvdyAqL1xuICBjb2xvcjogI2ZhZDg3NTtcbn1cbi5zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuLnNsaWRlX19sZWZ0LWNvbHVtbixcbi5zbGlkZV9fcmlnaHQtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNsaWRlX19yaWdodC1jb2x1bW4ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDM0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNsaWRlX19sZWZ0LWNvbHVtbiB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucmlnaHQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmltYWdlIHtcbiAgd2lkdGg6IDQ5MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjYyYjMyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4vKiBUaGUgZG90cy9idWxsZXRzL2luZGljYXRvcnMgKi9cbi5kb3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogN3B4O1xuICB3aWR0aDogN3B4O1xuICBtYXJnaW46IDAgM3B4O1xuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uYWN0aXZlLFxuLmRvdDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZWRhN2EgMCUsICNlN2IwNTUgODcuNSUpO1xufVxuLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xuLmZhZGUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5pY29uX19uZXh0IHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmljb25fX3ByZXYge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1pbWFnZSB7XG4gIHdpZHRoOiA0NDBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5zdWJpbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc3ViaW1hZ2Uge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5nYWxlcnkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubGluZSB7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi50YWItZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTcwMFwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxM3B4IDIwcHg7XG59XG4uaWNvbiB7XG4gIHdpZHRoOiA5N3B4O1xuICBoZWlnaHQ6IDk3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNsaWRlci10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTEwMFwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYmRiNzQgMCUsICNlMmFjNDggMTAwJSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTcwMFwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAxNXB4IDI4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5idXR0b24gLmJ1dHRvbi1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2UyYWM0OCAwJSwgI2ZhZGE3MyAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmFkMTRjIDAlLCAjZGM5YzI1IDEwMCUpO1xufVxuIiwiLypcbiAqIENvbG9yc1xuKi9cblxuQHByb2plY3QtZm9udC1tdXNlby0xMDA6IFwiTXVzZW9TYW5zQ3lybC0xMDBcIjtcbkBwcm9qZWN0LWZvbnQtbXVzZW8tMzAwOiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG5AcHJvamVjdC1mb250LW11c2VvLTUwMDogXCJNdXNlb1NhbnNDeXJsLTUwMFwiO1xuQHByb2plY3QtZm9udC1tdXNlby03MDA6IFwiTXVzZW9TYW5zQ3lybC03MDBcIjtcbkBwcm9qZWN0LWZvbnQtbXVzZW8tOTAwOiBcIk11c2VvU2Fuc0N5cmwtOTAwXCI7XG5cbkBwcm9qZWN0LWNvbG9yLWJsYW5rOiAjZmZmO1xuQHByb2plY3QtY29sb3ItcHJpbWFyeS1hY3RpdmU6ICNmOGUxOWQ7XG5AcHJvamVjdC1jb2xvci1wcmltYXJ5OiAjZmNkOTc3O1xuQHByb2plY3QtY29sb3ItZGVmYXVsdC10ZXh0OiAjZTllOWU4O1xuXG5AcHJvamVjdC1mb250LXByaW1hcnktYmxhY2s6IFwiTXVzZW9TYW5zQ3lybC05MDBcIjtcbkBwcm9qZWN0LWZvbnQtcHJpbWFyeS1yZWd1bGFyOiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG5cbkBwcm9qZWN0LWZvbnQtc2Vjb25kYXJ5LXJlZ3VsYXI6IFwiQmVybGluZ3NrZVNlcmlmLVJlZ3VsYXJcIjtcblxuaHRtbCB7XG4gICAgY29sb3I6IEBwcm9qZWN0LWNvbG9yLWJsYW5rO1xufVxuXG4qIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnByaW1hcnktdGV4dC1jb2xvciB7XG4gICAgY29sb3I6IEBwcm9qZWN0LWNvbG9yLXByaW1hcnk7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwubGVzc1wiO1xuXG46aG9zdCB7XG4gICAgaGVpZ2h0OiAxMTAwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBwYWRkaW5nLXRvcDogMTYwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTE4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUtcGFnZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmLUl0YWxpY1wiO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4udW5kZXJsaW5lLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMTAwXCI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAzNjBweDtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWF4LXdpZHRoOiA0NDJweDtcbiAgICB9XG59XG5cbi5zbGlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICZfX3ByZXYge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICZfX25leHQge1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG5cbiAgICAmX19uZXh0LFxuICAgICZfX3ByZXYge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHRvcDogNDUlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX2RvdHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLmNhcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgLyogeWVsbG93ICovXG5cbiAgICBjb2xvcjogI2ZhZDg3NTtcbn1cblxuLnNsaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuXG4gICAgJl9fbGVmdC1jb2x1bW4sXG4gICAgJl9fcmlnaHQtY29sdW1uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICZfX3JpZ2h0LWNvbHVtbiB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1heC13aWR0aDogMzQwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgJl9fbGVmdC1jb2x1bW4ge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbn1cblxuLnJpZ2h0LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltYWdlIHtcbiAgICB3aWR0aDogNDkwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjYyYjMyO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLyogVGhlIGRvdHMvYnVsbGV0cy9pbmRpY2F0b3JzICovXG4uZG90IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgd2lkdGg6IDdweDtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIGJhY2tncm91bmQ6ICMxYzFjMWM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWN0aXZlLFxuLmRvdDpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmVkYTdhIDAlLCAjZTdiMDU1IDg3LjUlKTtcbn1cblxuLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xuLmZhZGUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaWNvbl9fbmV4dCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uX19wcmV2IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbi1pbWFnZSB7XG4gICAgd2lkdGg6IDQ0MHB4O1xuICAgIGhlaWdodDogNDQwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnN1YmltYWdlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnN1YmltYWdlIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmdhbGVyeSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubGluZSB7XG4gICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRhYi1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogQHByb2plY3QtZm9udC1tdXNlby03MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XG59XG5cbi5pY29uIHtcbiAgICB3aWR0aDogOTdweDtcbiAgICBoZWlnaHQ6IDk3cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2xpZGVyLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogQHByb2plY3QtZm9udC1tdXNlby0xMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJkYjc0IDAlLCAjZTJhYzQ4IDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC03MDBcIjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgcGFkZGluZzogMTVweCAyOHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAuYnV0dG9uLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZTJhYzQ4IDAlLCAjZmFkYTczIDEwMCUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDE4MGRlZyxcbiAgICAgICAgZGFya2VuKCNmYmRiNzQsIDglKSAwJSxcbiAgICAgICAgZGFya2VuKCNlMmFjNDgsIDglKSAxMDAlXG4gICAgKTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecomendedBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recomended-block',
                templateUrl: './recomended-block.component.html',
                styleUrls: ['./recomended-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/responsibility-block/responsibility-block.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/general/components/responsibility-block/responsibility-block.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ResponsibilityBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsibilityBlockComponent", function() { return ResponsibilityBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/icons/icons.component */ "./src/app/shared/components/icons/icons.component.ts");



class ResponsibilityBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResponsibilityBlockComponent.ɵfac = function ResponsibilityBlockComponent_Factory(t) { return new (t || ResponsibilityBlockComponent)(); };
ResponsibilityBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResponsibilityBlockComponent, selectors: [["app-responsibility-block"]], decls: 40, vars: 0, consts: [[1, "block"], [1, "block__content"], [1, "title"], [1, "primary-text-color"], [1, "grid-panel"], [1, "element"], [1, "icon", "mui-space_right-5"], ["name", "iconShield"], [1, "text"], [1, "text__title"], [1, "description"]], template: function ResponsibilityBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041C\u044B \u0431\u0435\u0440\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u043F\u043E\u043B\u043D\u0443\u044E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0438 \u043F\u0440\u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0432\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0432 \u0441\u0440\u043E\u043A\u0430\u0445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u041D\u0435\u0441\u0435\u043C \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u043E\u0432. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u0440\u044B\u0432\u0430 - \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0438\u0440\u0443\u0435\u043C \u0443\u0431\u044B\u0442\u043A\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0438\u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u0437\u0430 \u0441\u0432\u043E\u0439 \u0441\u0447\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u041B\u044E\u0431\u043E\u0435 \u043D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C \u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u043E\u0435 \u0433\u043E\u0434\u0430\u043C\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u041D\u0435\u0441\u0435\u043C \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u043E\u0432. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u0440\u044B\u0432\u0430 - \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0438\u0440\u0443\u0435\u043C \u0443\u0431\u044B\u0442\u043A\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0446\u0435\u043D\u0430 \u0431\u0435\u0437 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0438 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__["IconsComponent"]], styles: ["[_nghost-%COMP%] {\n  background-image: url('responsibility-background.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.block[_ngcontent-%COMP%] {\n  min-height: 749px;\n  display: flex;\n  flex-direction: column;\n  padding: 120px 80px;\n  margin-left: 210px;\n}\n.block__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.block__content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"BerlingskeSerif-Italic\";\n  font-size: 36px;\n  line-height: 54px;\n  max-width: 957px;\n  text-transform: uppercase;\n  margin-bottom: 96px;\n  color: #fff;\n}\n.block__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  max-width: 747px;\n}\n.grid-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 94px 94px;\n  grid-template-columns: 283px 283px;\n  grid-gap: 30px;\n  max-width: 790px;\n  margin-bottom: 50px;\n}\n.element[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.button[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fbdb74 0%, #e2ac48 100%);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  height: 70px;\n  width: 100%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: \"MuseoSansCyrl-700\";\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #000000;\n  padding: 15px 28px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.button[_ngcontent-%COMP%]:hover {\n  transition: 0.2s ease-in-out;\n  background: linear-gradient(180deg, #fad14c 0%, #dc9c25 100%);\n}\n.description[_ngcontent-%COMP%] {\n  font-family: Museo Sans Cyrl;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n}\n.text__title[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 24px;\n  \n  text-transform: uppercase;\n  \n  color: #fad875;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcmVzcG9uc2liaWxpdHktYmxvY2svQzovVXNlcnMvTWFvbGluay9EZXNrdG9wL0Rldi9mdXJuaXR1cmUvc3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwvY29tcG9uZW50cy9yZXNwb25zaWJpbGl0eS1ibG9jay9yZXNwb25zaWJpbGl0eS1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvcmVzcG9uc2liaWxpdHktYmxvY2svcmVzcG9uc2liaWxpdHktYmxvY2suY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzREFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0NKO0FERUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQVI7QURGSTtFQUtRLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FaO0FESUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FETUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSko7QURPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0xKO0FEUUE7RUFDSSw2REFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ1BKO0FEVUE7RUFDSSw0QkFBQTtFQUNBLDZEQUFBO0FDUko7QURlQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUNkSjtBRGlCQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQ2ZGLHFDQUFxQztFRGtCbkMseUJBQUE7RUNoQkYsV0FBVztFRG9CVCxjQUFBO0VBQ0Esa0JBQUE7QUNsQkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwvY29tcG9uZW50cy9yZXNwb25zaWJpbGl0eS1ibG9jay9yZXNwb25zaWJpbGl0eS1ibG9jay5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dlbmVyYWwtcGFnZS9yZXNwb25zaWJpbGl0eS1iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmxvY2sge1xuICAgIG1pbi1oZWlnaHQ6IDc0OXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMjBweCA4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMTBweDtcblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJCZXJsaW5nc2tlU2VyaWYtSXRhbGljXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTU3cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZm9vdGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXgtd2lkdGg6IDc0N3B4O1xuICAgIH1cbn1cblxuLmdyaWQtcGFuZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5NHB4IDk0cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODNweCAyODNweDtcbiAgICBncmlkLWdhcDogMzBweDtcbiAgICBtYXgtd2lkdGg6IDc5MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5lbGVtZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYmRiNzQgMCUsICNlMmFjNDggMTAwJSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC03MDBcIjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBwYWRkaW5nOiAxNXB4IDI4cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDE4MGRlZyxcbiAgICAgICAgZGFya2VuKCNmYmRiNzQsIDglKSAwJSxcbiAgICAgICAgZGFya2VuKCNlMmFjNDgsIDglKSAxMDAlXG4gICAgKTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogTXVzZW8gU2FucyBDeXJsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcblxuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGV4dF9fdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTcxJSAqL1xuXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIC8qIHllbGxvdyAqL1xuXG4gICAgY29sb3I6ICNmYWQ4NzU7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dlbmVyYWwtcGFnZS9yZXNwb25zaWJpbGl0eS1iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmJsb2NrIHtcbiAgbWluLWhlaWdodDogNzQ5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEyMHB4IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMTBweDtcbn1cbi5ibG9ja19fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmxvY2tfX2NvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmLUl0YWxpY1wiO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBtYXgtd2lkdGg6IDk1N3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiA5NnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ibG9ja19fZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDc0N3B4O1xufVxuLmdyaWQtcGFuZWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDk0cHggOTRweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODNweCAyODNweDtcbiAgZ3JpZC1nYXA6IDMwcHg7XG4gIG1heC13aWR0aDogNzkwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uZWxlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZiZGI3NCAwJSwgI2UyYWM0OCAxMDAlKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC03MDBcIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDE1cHggMjhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYWQxNGMgMCUsICNkYzljMjUgMTAwJSk7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogTXVzZW8gU2FucyBDeXJsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnRleHRfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE3MSUgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLyogeWVsbG93ICovXG4gIGNvbG9yOiAjZmFkODc1O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponsibilityBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-responsibility-block',
                templateUrl: './responsibility-block.component.html',
                styleUrls: ['./responsibility-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/components/social-block/social-block.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/general/components/social-block/social-block.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SocialBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialBlockComponent", function() { return SocialBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/icons/icons.component */ "./src/app/shared/components/icons/icons.component.ts");



class SocialBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
SocialBlockComponent.ɵfac = function SocialBlockComponent_Factory(t) { return new (t || SocialBlockComponent)(); };
SocialBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialBlockComponent, selectors: [["app-social-block"]], decls: 29, vars: 0, consts: [[1, "container"], [1, "title-page"], [1, "slider"], [1, "slider__container"], [1, "slide"], [1, "social-block"], [1, "avatar", "mui-space_bottom-5"], [1, "avatar-image"], [1, "user-info"], [1, "name"], [1, "link"], [1, "social-block__content"], ["onclick", "plusSlides(-1)", 1, "slider__prev"], [1, "icon__prev"], ["name", "iconSliderArrowRight"], ["onclick", "plusSlides(1)", 1, "slider__next"], [1, "icon__next"], [1, "slider__dots"], ["onclick", "currentSlide(1)", 1, "dot", "active"], ["onclick", "currentSlide(2)", 1, "dot"], ["onclick", "currentSlide(3)", 1, "dot"], ["onclick", "currentSlide(1)", 1, "dot"]], template: function SocialBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0442\u0437\u044B\u0432\u044B \u0438\u0437 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u043E\u043B\u044C\u0433\u0430 \u041E\u043B\u044C\u0433\u0438\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "@instagramm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__["IconsComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 830px;\n  background-color: #fcfcff;\n  padding-top: 150px;\n  background-image: url('social-background.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  color: #000000;\n}\n.title-page[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 43px;\n  padding-left: 110px;\n  margin-bottom: 70px;\n  color: #000000;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n.social-block[_ngcontent-%COMP%] {\n  width: 610px;\n  height: 358px;\n  background-image: url('Group96.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 80px 50px 50px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.avatar-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #000;\n  width: 50px;\n  height: 50px;\n  margin-right: 30px;\n}\n.name[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  text-transform: uppercase;\n  color: #000000;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.link[_ngcontent-%COMP%] {\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: #939391;\n}\n.slider[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.slider__prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n.slider__next[_ngcontent-%COMP%] {\n  right: 0;\n}\n.slider__next[_ngcontent-%COMP%], .slider__prev[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  width: auto;\n  top: 45%;\n  padding: 16px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.slider__container[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  width: 100%;\n}\n.slider__dots[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.caption[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  font-family: Berlingske Serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  \n  text-align: center;\n  text-transform: uppercase;\n  \n  color: #fad875;\n}\n.slide[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  padding: 0 20px;\n}\n.slide__left-column[_ngcontent-%COMP%], .slide__right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n}\n.image[_ngcontent-%COMP%] {\n  width: 490px;\n  height: 300px;\n  background: #262b32;\n  border-radius: 6px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 7px;\n  width: 7px;\n  margin: 0 3px;\n  background: #1c1c1c;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n  transition: 0.2s ease-in-out;\n}\n.active[_ngcontent-%COMP%], .dot[_ngcontent-%COMP%]:hover {\n  transition: 0.2s ease-in-out;\n  background: linear-gradient(180deg, #feda7a 0%, #e7b055 87.5%);\n}\n\n.fade[_ngcontent-%COMP%] {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.icon__next[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.icon__prev[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  transform: rotate(180deg);\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvc29jaWFsLWJsb2NrL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvc29jaWFsLWJsb2NrL3NvY2lhbC1ibG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2NvbXBvbmVudHMvc29jaWFsLWJsb2NrL3NvY2lhbC1ibG9jay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURFQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7QURHQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0RKO0FESUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QUNGSjtBREtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSko7QURPQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtBQ05KO0FEU0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNQSjtBRFVBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1JKO0FEV0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVEo7QURXSTtFQUNJLE9BQUE7QUNUUjtBRFlJO0VBQ0ksUUFBQTtBQ1ZSO0FEYUk7O0VBRUksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQ1hSO0FEY0k7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNaUjtBRGVJO0VBQ0ksZ0JBQUE7QUNiUjtBRGlCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VDZkYsNEJBQTRCO0VEa0IxQixrQkFBQTtFQUNBLHlCQUFBO0VDaEJGLFdBQVc7RURvQlQsY0FBQTtBQ2xCSjtBRHFCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNuQko7QURxQkk7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNuQlI7QUR1QkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNyQko7QUFDQSxnQ0FBZ0M7QUR3QmhDO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNEJBQUE7QUN0Qko7QUR5QkE7O0VBRUksNEJBQUE7RUFDQSw4REFBQTtBQ3ZCSjtBQUNBLHFCQUFxQjtBRDBCckI7RUFDSSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQ3hCSjtBRDJCQTtFQUNJO0lBQ0ksWUFBQTtFQ3pCTjtFRDJCRTtJQUNJLFVBQUE7RUN6Qk47QUFDRjtBRDRCQTtFQUNJO0lBQ0ksWUFBQTtFQzFCTjtFRDRCRTtJQUNJLFVBQUE7RUMxQk47QUFDRjtBRDZCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUMzQko7QUQ4QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUM1QkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwvY29tcG9uZW50cy9zb2NpYWwtYmxvY2svc29jaWFsLWJsb2NrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGhlaWdodDogODMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmZjtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nZW5lcmFsLXBhZ2Uvc29jaWFsLWJhY2tncm91bmQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50aXRsZS1wYWdlIHtcbiAgICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zb2NpYWwtYmxvY2sge1xuICAgIHdpZHRoOiA2MTBweDtcbiAgICBoZWlnaHQ6IDM1OHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR3JvdXA5Ni5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwYWRkaW5nOiA4MHB4IDUwcHggNTBweDtcbn1cblxuLmF2YXRhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXZhdGFyLWltYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4ubmFtZSB7XG4gICAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnVzZXItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubGluayB7XG4gICAgZm9udC1mYW1pbHk6IEJlcmxpbmdza2UgU2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGNvbG9yOiAjOTM5MzkxO1xufVxuXG4uc2xpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmX19wcmV2IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAmX19uZXh0IHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJl9fbmV4dCxcbiAgICAmX19wcmV2IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB0b3A6IDQ1JTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX2RvdHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLmNhcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgLyogeWVsbG93ICovXG5cbiAgICBjb2xvcjogI2ZhZDg3NTtcbn1cblxuLnNsaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgICAmX19sZWZ0LWNvbHVtbixcbiAgICAmX19yaWdodC1jb2x1bW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uaW1hZ2Uge1xuICAgIHdpZHRoOiA0OTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyNjJiMzI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4vKiBUaGUgZG90cy9idWxsZXRzL2luZGljYXRvcnMgKi9cbi5kb3Qge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICB3aWR0aDogN3B4O1xuICAgIG1hcmdpbjogMCAzcHg7XG4gICAgYmFja2dyb3VuZDogIzFjMWMxYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hY3RpdmUsXG4uZG90OmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZWRhN2EgMCUsICNlN2IwNTUgODcuNSUpO1xufVxuXG4vKiBGYWRpbmcgYW5pbWF0aW9uICovXG4uZmFkZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5pY29uX19uZXh0IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25fX3ByZXYge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCI6aG9zdCB7XG4gIGhlaWdodDogODMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmY7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nZW5lcmFsLXBhZ2Uvc29jaWFsLWJhY2tncm91bmQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnRpdGxlLXBhZ2Uge1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc29jaWFsLWJsb2NrIHtcbiAgd2lkdGg6IDYxMHB4O1xuICBoZWlnaHQ6IDM1OHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dyb3VwOTYucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmc6IDgwcHggNTBweCA1MHB4O1xufVxuLmF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXZhdGFyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4ubmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnVzZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubGluayB7XG4gIGZvbnQtZmFtaWx5OiBCZXJsaW5nc2tlIFNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjOTM5MzkxO1xufVxuLnNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsaWRlcl9fcHJldiB7XG4gIGxlZnQ6IDA7XG59XG4uc2xpZGVyX19uZXh0IHtcbiAgcmlnaHQ6IDA7XG59XG4uc2xpZGVyX19uZXh0LFxuLnNsaWRlcl9fcHJldiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogYXV0bztcbiAgdG9wOiA0NSU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnNsaWRlcl9fY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNsaWRlcl9fZG90cyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uY2FwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogQmVybGluZ3NrZSBTZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8qIHllbGxvdyAqL1xuICBjb2xvcjogI2ZhZDg3NTtcbn1cbi5zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uc2xpZGVfX2xlZnQtY29sdW1uLFxuLnNsaWRlX19yaWdodC1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4uaW1hZ2Uge1xuICB3aWR0aDogNDkwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6ICMyNjJiMzI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi8qIFRoZSBkb3RzL2J1bGxldHMvaW5kaWNhdG9ycyAqL1xuLmRvdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA3cHg7XG4gIHdpZHRoOiA3cHg7XG4gIG1hcmdpbjogMCAzcHg7XG4gIGJhY2tncm91bmQ6ICMxYzFjMWM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5hY3RpdmUsXG4uZG90OmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZlZGE3YSAwJSwgI2U3YjA1NSA4Ny41JSk7XG59XG4vKiBGYWRpbmcgYW5pbWF0aW9uICovXG4uZmFkZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICBhbmltYXRpb24tbmFtZTogZmFkZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmljb25fX25leHQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaWNvbl9fcHJldiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-block',
                templateUrl: './social-block.component.html',
                styleUrls: ['./social-block.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/general-content.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/general/general-content.module.ts ***!
  \***********************************************************/
/*! exports provided: GeneralContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralContentModule", function() { return GeneralContentModule; });
/* harmony import */ var _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/components/icons/icons.module */ "./src/app/shared/components/icons/icons.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_general_preview_component_general_preview_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general-preview-component/general-preview-component.component */ "./src/app/modules/general/components/general-preview-component/general-preview-component.component.ts");
/* harmony import */ var _components_calculate_block_calculate_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/calculate-block/calculate-block.component */ "./src/app/modules/general/components/calculate-block/calculate-block.component.ts");
/* harmony import */ var _components_designer_order_block_designer_order_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/designer-order-block/designer-order-block.component */ "./src/app/modules/general/components/designer-order-block/designer-order-block.component.ts");
/* harmony import */ var _components_progress_work_block_progress_work_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/progress-work-block/progress-work-block.component */ "./src/app/modules/general/components/progress-work-block/progress-work-block.component.ts");
/* harmony import */ var _components_responsibility_block_responsibility_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/responsibility-block/responsibility-block.component */ "./src/app/modules/general/components/responsibility-block/responsibility-block.component.ts");
/* harmony import */ var _components_production_block_production_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/production-block/production-block.component */ "./src/app/modules/general/components/production-block/production-block.component.ts");
/* harmony import */ var _components_examples_block_examples_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/examples-block/examples-block.component */ "./src/app/modules/general/components/examples-block/examples-block.component.ts");
/* harmony import */ var _components_social_block_social_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/social-block/social-block.component */ "./src/app/modules/general/components/social-block/social-block.component.ts");
/* harmony import */ var _components_quality_block_quality_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/quality-block/quality-block.component */ "./src/app/modules/general/components/quality-block/quality-block.component.ts");
/* harmony import */ var _components_recomended_block_recomended_block_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/recomended-block/recomended-block.component */ "./src/app/modules/general/components/recomended-block/recomended-block.component.ts");
/* harmony import */ var _components_hauling_furniture_block_hauling_furniture_block_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/hauling-furniture-block/hauling-furniture-block.component */ "./src/app/modules/general/components/hauling-furniture-block/hauling-furniture-block.component.ts");
/* harmony import */ var _components_benefit_block_benefit_block_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/benefit-block/benefit-block.component */ "./src/app/modules/general/components/benefit-block/benefit-block.component.ts");
/* harmony import */ var _components_bonus_block_bonus_block_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/bonus-block/bonus-block.component */ "./src/app/modules/general/components/bonus-block/bonus-block.component.ts");
/* harmony import */ var _components_map_block_map_block_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/map-block/map-block.component */ "./src/app/modules/general/components/map-block/map-block.component.ts");
/* harmony import */ var src_app_shared_components_company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/components/company-logo/company-logo.module */ "./src/app/shared/components/company-logo/company-logo.module.ts");



















class GeneralContentModule {
}
GeneralContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GeneralContentModule });
GeneralContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function GeneralContentModule_Factory(t) { return new (t || GeneralContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_0__["IconsModule"],
            src_app_shared_components_company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_17__["CompanyLogoModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GeneralContentModule, { declarations: [_components_general_preview_component_general_preview_component_component__WEBPACK_IMPORTED_MODULE_3__["GeneralPreviewComponentComponent"],
        _components_calculate_block_calculate_block_component__WEBPACK_IMPORTED_MODULE_4__["CalculateBlockComponent"],
        _components_designer_order_block_designer_order_block_component__WEBPACK_IMPORTED_MODULE_5__["DesignerOrderBlockComponent"],
        _components_progress_work_block_progress_work_block_component__WEBPACK_IMPORTED_MODULE_6__["ProgressWorkBlockComponent"],
        _components_responsibility_block_responsibility_block_component__WEBPACK_IMPORTED_MODULE_7__["ResponsibilityBlockComponent"],
        _components_production_block_production_block_component__WEBPACK_IMPORTED_MODULE_8__["ProductionBlockComponent"],
        _components_examples_block_examples_block_component__WEBPACK_IMPORTED_MODULE_9__["ExamplesBlockComponent"],
        _components_social_block_social_block_component__WEBPACK_IMPORTED_MODULE_10__["SocialBlockComponent"],
        _components_quality_block_quality_block_component__WEBPACK_IMPORTED_MODULE_11__["QualityBlockComponent"],
        _components_recomended_block_recomended_block_component__WEBPACK_IMPORTED_MODULE_12__["RecomendedBlockComponent"],
        _components_hauling_furniture_block_hauling_furniture_block_component__WEBPACK_IMPORTED_MODULE_13__["HaulingFurnitureBlockComponent"],
        _components_benefit_block_benefit_block_component__WEBPACK_IMPORTED_MODULE_14__["BenefitBlockComponent"],
        _components_bonus_block_bonus_block_component__WEBPACK_IMPORTED_MODULE_15__["BonusBlockComponent"],
        _components_map_block_map_block_component__WEBPACK_IMPORTED_MODULE_16__["MapBlockComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_0__["IconsModule"],
        src_app_shared_components_company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_17__["CompanyLogoModule"]], exports: [_components_general_preview_component_general_preview_component_component__WEBPACK_IMPORTED_MODULE_3__["GeneralPreviewComponentComponent"],
        _components_calculate_block_calculate_block_component__WEBPACK_IMPORTED_MODULE_4__["CalculateBlockComponent"],
        _components_designer_order_block_designer_order_block_component__WEBPACK_IMPORTED_MODULE_5__["DesignerOrderBlockComponent"],
        _components_progress_work_block_progress_work_block_component__WEBPACK_IMPORTED_MODULE_6__["ProgressWorkBlockComponent"],
        _components_responsibility_block_responsibility_block_component__WEBPACK_IMPORTED_MODULE_7__["ResponsibilityBlockComponent"],
        _components_production_block_production_block_component__WEBPACK_IMPORTED_MODULE_8__["ProductionBlockComponent"],
        _components_examples_block_examples_block_component__WEBPACK_IMPORTED_MODULE_9__["ExamplesBlockComponent"],
        _components_social_block_social_block_component__WEBPACK_IMPORTED_MODULE_10__["SocialBlockComponent"],
        _components_quality_block_quality_block_component__WEBPACK_IMPORTED_MODULE_11__["QualityBlockComponent"],
        _components_recomended_block_recomended_block_component__WEBPACK_IMPORTED_MODULE_12__["RecomendedBlockComponent"],
        _components_hauling_furniture_block_hauling_furniture_block_component__WEBPACK_IMPORTED_MODULE_13__["HaulingFurnitureBlockComponent"],
        _components_benefit_block_benefit_block_component__WEBPACK_IMPORTED_MODULE_14__["BenefitBlockComponent"],
        _components_bonus_block_bonus_block_component__WEBPACK_IMPORTED_MODULE_15__["BonusBlockComponent"],
        _components_map_block_map_block_component__WEBPACK_IMPORTED_MODULE_16__["MapBlockComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeneralContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_general_preview_component_general_preview_component_component__WEBPACK_IMPORTED_MODULE_3__["GeneralPreviewComponentComponent"],
                    _components_calculate_block_calculate_block_component__WEBPACK_IMPORTED_MODULE_4__["CalculateBlockComponent"],
                    _components_designer_order_block_designer_order_block_component__WEBPACK_IMPORTED_MODULE_5__["DesignerOrderBlockComponent"],
                    _components_progress_work_block_progress_work_block_component__WEBPACK_IMPORTED_MODULE_6__["ProgressWorkBlockComponent"],
                    _components_responsibility_block_responsibility_block_component__WEBPACK_IMPORTED_MODULE_7__["ResponsibilityBlockComponent"],
                    _components_production_block_production_block_component__WEBPACK_IMPORTED_MODULE_8__["ProductionBlockComponent"],
                    _components_examples_block_examples_block_component__WEBPACK_IMPORTED_MODULE_9__["ExamplesBlockComponent"],
                    _components_social_block_social_block_component__WEBPACK_IMPORTED_MODULE_10__["SocialBlockComponent"],
                    _components_quality_block_quality_block_component__WEBPACK_IMPORTED_MODULE_11__["QualityBlockComponent"],
                    _components_recomended_block_recomended_block_component__WEBPACK_IMPORTED_MODULE_12__["RecomendedBlockComponent"],
                    _components_hauling_furniture_block_hauling_furniture_block_component__WEBPACK_IMPORTED_MODULE_13__["HaulingFurnitureBlockComponent"],
                    _components_benefit_block_benefit_block_component__WEBPACK_IMPORTED_MODULE_14__["BenefitBlockComponent"],
                    _components_bonus_block_bonus_block_component__WEBPACK_IMPORTED_MODULE_15__["BonusBlockComponent"],
                    _components_map_block_map_block_component__WEBPACK_IMPORTED_MODULE_16__["MapBlockComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_0__["IconsModule"],
                    src_app_shared_components_company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_17__["CompanyLogoModule"],
                ],
                exports: [
                    _components_general_preview_component_general_preview_component_component__WEBPACK_IMPORTED_MODULE_3__["GeneralPreviewComponentComponent"],
                    _components_calculate_block_calculate_block_component__WEBPACK_IMPORTED_MODULE_4__["CalculateBlockComponent"],
                    _components_designer_order_block_designer_order_block_component__WEBPACK_IMPORTED_MODULE_5__["DesignerOrderBlockComponent"],
                    _components_progress_work_block_progress_work_block_component__WEBPACK_IMPORTED_MODULE_6__["ProgressWorkBlockComponent"],
                    _components_responsibility_block_responsibility_block_component__WEBPACK_IMPORTED_MODULE_7__["ResponsibilityBlockComponent"],
                    _components_production_block_production_block_component__WEBPACK_IMPORTED_MODULE_8__["ProductionBlockComponent"],
                    _components_examples_block_examples_block_component__WEBPACK_IMPORTED_MODULE_9__["ExamplesBlockComponent"],
                    _components_social_block_social_block_component__WEBPACK_IMPORTED_MODULE_10__["SocialBlockComponent"],
                    _components_quality_block_quality_block_component__WEBPACK_IMPORTED_MODULE_11__["QualityBlockComponent"],
                    _components_recomended_block_recomended_block_component__WEBPACK_IMPORTED_MODULE_12__["RecomendedBlockComponent"],
                    _components_hauling_furniture_block_hauling_furniture_block_component__WEBPACK_IMPORTED_MODULE_13__["HaulingFurnitureBlockComponent"],
                    _components_benefit_block_benefit_block_component__WEBPACK_IMPORTED_MODULE_14__["BenefitBlockComponent"],
                    _components_bonus_block_bonus_block_component__WEBPACK_IMPORTED_MODULE_15__["BonusBlockComponent"],
                    _components_map_block_map_block_component__WEBPACK_IMPORTED_MODULE_16__["MapBlockComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/fabric-catalog-page/fabric-catalog-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/fabric-catalog-page/fabric-catalog-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: FabricCatalogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricCatalogPageComponent", function() { return FabricCatalogPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FabricCatalogPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
FabricCatalogPageComponent.ɵfac = function FabricCatalogPageComponent_Factory(t) { return new (t || FabricCatalogPageComponent)(); };
FabricCatalogPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FabricCatalogPageComponent, selectors: [["app-fabric-catalog-page"]], decls: 2, vars: 0, template: function FabricCatalogPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fabric-catalog-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhYnJpYy1jYXRhbG9nLXBhZ2UvZmFicmljLWNhdGFsb2ctcGFnZS5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FabricCatalogPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fabric-catalog-page',
                templateUrl: './fabric-catalog-page.component.html',
                styleUrls: ['./fabric-catalog-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/main-page/main-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/main-page/main-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page.component */ "./src/app/pages/main-page/main-page.component.ts");





const routes = [
    {
        path: '',
        component: _main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | general-page-general-page-module */ "general-page-general-page-module").then(__webpack_require__.bind(null, /*! ../general-page/general-page.module */ "./src/app/pages/general-page/general-page.module.ts")).then(m => m.GeneralPageModule),
            }
        ],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
class MainPageRoutingModule {
}
MainPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainPageRoutingModule });
MainPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainPageRoutingModule_Factory(t) { return new (t || MainPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_mock_sidebar_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/mock/sidebar-menu-items */ "./src/app/shared/mock/sidebar-menu-items.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class MainPageComponent {
    constructor() {
        this.sidebarItems = _shared_mock_sidebar_menu_items__WEBPACK_IMPORTED_MODULE_1__["SIDEBAR_MENU_ITEMS"];
        this.isHomePage = true;
        this.menuItems = [
            {
                caption: 'Главная',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Расчитать стоимость',
                routerPath: '',
                active: true,
            },
            {
                caption: 'Примеры работ',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Гарантии',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Отзывы',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Контакты',
                routerPath: '',
                active: false,
            },
        ];
    }
    ngOnInit() {
    }
    ngOnChanges() {
        console.log('hello');
    }
    toggleActive(index, array) {
        array.forEach(el => el.active = false);
        array[index].active = true;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "header-block", 3, "menuItems"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuItems", ctx.sidebarItems);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.header-block[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.block[_ngcontent-%COMP%] {\n  height: 1080px;\n  background-color: #fff;\n  width: 100%;\n}\n.blocks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.blocks__calculate[_ngcontent-%COMP%] {\n  height: 1080px;\n  background-color: #fff;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEV0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNUSjtBRFlBO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEYUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNYSjtBRGFJO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1hSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbkBwcm9qZWN0LWNvbG9yLXByaW1hcnktYWN0aXZlOiAjZjhlMTlkO1xuQHByb2plY3QtY29sb3ItcHJpbWFyeTogI2ZjZDk3NztcbkBwcm9qZWN0LWNvbG9yLWRlZmF1bHQtdGV4dDogI2U5ZTllODtcblxuQHByb2plY3QtZm9udC1wcmltYXJ5LWJsYWNrOiBcIk11c2VvU2Fuc0N5cmwtOTAwXCI7XG5AcHJvamVjdC1mb250LXByaW1hcnktcmVndWxhcjogXCJNdXNlb1NhbnNDeXJsLTMwMFwiO1xuXG5AcHJvamVjdC1mb250LXNlY29uZGFyeS1yZWd1bGFyOiBcIkJlcmxpbmdza2VTZXJpZi1SZWd1bGFyXCI7XG5cbi5oZWFkZXItYmxvY2sge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYmxvY2sge1xuICAgIGhlaWdodDogMTA4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5ibG9ja3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICZfX2NhbGN1bGF0ZSB7XG4gICAgICAgIGhlaWdodDogMTA4MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi8vIC5mcmFtZSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyB9XG5cbi8vIC5sb2dvIHtcbi8vICAgICBmb250LXNpemU6IDQycHQ7XG4vLyAgICAgY29sb3I6ICNlZGJlN2Q7XG4vLyB9XG5cbi8vIC5jb250ZW50IHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBwYWRkaW5nLXRvcDogMjRweDtcbi8vICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0MDQyNDQ7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gfVxuXG4vLyAuc3VidGl0bGUge1xuLy8gICAgIGZvbnQtc2l6ZTogMThwdDtcbi8vICAgICBjb2xvcjogI2ZmZmZmZTtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICAgIGZvbnQtZmFtaWx5OiBAcHJvamVjdC1mb250LXNlY29uZGFyeS1yZWd1bGFyO1xuLy8gfVxuXG4vLyAuc2lkZWJhciB7XG4vLyAgICAgbWF4LXdpZHRoOiAzNjBweDtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG5cbi8vICAgICAmX190aXRsZSB7XG4vLyAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gLnVuZGVybGluZSB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAycHg7XG4vLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM0MDQyNDQgMCUsIHJnYmEoNjQsIDY2LCA2OCwgMCkgMTAwJSk7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XG4vLyB9XG5cbi8vIC5oZWFkZXIge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgcGFkZGluZzogMCAzMnB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDUzcHg7XG5cbi8vICAgICAmX19kZXNjcmlwdGlvbiB7XG4vLyAgICAgICAgIGNvbG9yOiAjZDlkYmRjO1xuLy8gICAgICAgICBtYXgtd2lkdGg6IDIzNHB4O1xuLy8gICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTIlO1xuLy8gICAgIH1cblxuLy8gICAgICZfX2xvZ28ge1xuLy8gICAgICAgICB3aWR0aDogNjRweDtcbi8vICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICAmX19sb2dvLWNvbnRlbnQge1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIH1cblxuLy8gICAgICZfX3JpZ2h0IHtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC5tZW51IHtcbi8vICAgICBjb2xvcjogI2ZmZmZmZTtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgcGFkZGluZzogMTZweCAwO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuXG4vLyAgICAgJl9faWNvbiB7XG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbi8vICAgICAgICAgY29sb3I6ICNmY2Q5Nzc7XG4vLyAgICAgfVxuXG4vLyAgICAgJl9fdGV4dCB7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICAgICAgZm9udC1mYW1pbHk6IEBwcm9qZWN0LWZvbnQtc2Vjb25kYXJ5LXJlZ3VsYXI7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAubWVudS1saXN0IHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDQ0cHg7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG5cbi8vICAgICAmX19saW5rIHtcbi8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICAgICAgICBjb2xvcjogQHByb2plY3QtY29sb3ItZGVmYXVsdC10ZXh0O1xuLy8gICAgICAgICBmb250LWZhbWlseTogQHByb2plY3QtZm9udC1wcmltYXJ5LWJsYWNrO1xuLy8gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICAgICAgICBmb250LXNpemU6IDEycHQ7XG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4vLyAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuLy8gICAgICAgICAmLS1pdGVtIHtcbi8vICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xuLy8gICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHJvamVjdC1jb2xvci1wcmltYXJ5O1xuLy8gICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4vLyAgICAgICAgICAgICB3aWR0aDogMjZweDtcbi8vICAgICAgICAgICAgIGhlaWdodDogM3B4O1xuLy8gICAgICAgICAgICAgbWF4LWhlaWdodDogM3B4O1xuLy8gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4vLyAgICAgICAgICAgICBtaW4td2lkdGg6IDI2cHg7XG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJl9fbGluazpob3Zlcixcbi8vICAgICAmX19saW5rLmFjdGl2ZSB7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4vLyAgICAgICAgIGNvbG9yOiBAcHJvamVjdC1jb2xvci1wcmltYXJ5O1xuLy8gICAgIH1cbi8vIH1cblxuLy8gLm5hdmJhciB7XG4vLyAgICAgcGFkZGluZzogMjRweCAzMnB4O1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgICAgJl9fbGluayB7XG4vLyAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4vLyAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgICAgICAgY29sb3I6IEBwcm9qZWN0LWNvbG9yLWRlZmF1bHQtdGV4dDtcbi8vICAgICAgICAgZm9udC1mYW1pbHk6IEBwcm9qZWN0LWZvbnQtcHJpbWFyeS1ibGFjaztcbi8vICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjglO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuLy8gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbi8vICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIH1cblxuLy8gICAgICZfX2xpbms6aG92ZXIsXG4vLyAgICAgJl9fbGluay5hY3RpdmUge1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuLy8gICAgICAgICBjb2xvcjogQHByb2plY3QtY29sb3ItcHJpbWFyeTtcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmY2Q5Nzc7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAubG9uZy11bmRlcmxpbmUge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMnB4O1xuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQwNDI0NCAwJSwgcmdiYSg2NCwgNjYsIDY4LCAwKSAxMDAlKTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbi8vIH1cblxuLy8gLnBob25lIHtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIGZvbnQtZmFtaWx5OiBcIkJlcmxpbmdza2VTZXJpZi1TZW1pQm9sZFwiO1xuLy8gICAgIGZvbnQtc2l6ZTogMjBwdDtcbi8vICAgICBjb2xvcjogQHByb2plY3QtY29sb3ItZGVmYXVsdC10ZXh0O1xuLy8gfVxuXG4vLyAuaWNvbi1waW4ge1xuLy8gICAgIGNvbG9yOiAjZWNiODVhO1xuLy8gICAgIHdpZHRoOiAyNHB4O1xuLy8gICAgIGhlaWdodDogMjRweDtcbi8vICAgICBtYXgtaGVpZ2h0OiAyNHB4O1xuLy8gICAgIG1heC13aWR0aDogMjRweDtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAyMTcsIDExOSwgMC4xMyk7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4vLyB9XG5cbi8vIC5hZGRyZXNzLWljb24ge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIH1cblxuLy8gLmFkZHJlc3MtZGVzY3JpcHRpb24ge1xuLy8gICAgIGZvbnQtc2l6ZTogMTZwdDtcbi8vICAgICBmb250LWZhbWlseTogQHByb2plY3QtZm9udC1wcmltYXJ5LXJlZ3VsYXI7XG4vLyAgICAgY29sb3I6IEBwcm9qZWN0LWNvbG9yLXByaW1hcnk7XG4vLyB9XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGVhZGVyLWJsb2NrIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJsb2NrIHtcbiAgaGVpZ2h0OiAxMDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmxvY2tzX19jYWxjdWxhdGUge1xuICBoZWlnaHQ6IDEwODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/main-page/main-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/main-page/main-page.module.ts ***!
  \*****************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page-routing.module */ "./src/app/pages/main-page/main-page-routing.module.ts");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _fabric_catalog_page_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fabric-catalog-page/fabric-catalog-page.component */ "./src/app/pages/fabric-catalog-page/fabric-catalog-page.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");







class MainPageModule {
}
MainPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainPageModule });
MainPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainPageModule_Factory(t) { return new (t || MainPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageModule, { declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
        _fabric_catalog_page_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_4__["FabricCatalogPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
                    _fabric_catalog_page_fabric_catalog_page_component__WEBPACK_IMPORTED_MODULE_4__["FabricCatalogPageComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/company-logo/company-logo.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/company-logo/company-logo.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompanyLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyLogoComponent", function() { return CompanyLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CompanyLogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompanyLogoComponent.ɵfac = function CompanyLogoComponent_Factory(t) { return new (t || CompanyLogoComponent)(); };
CompanyLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyLogoComponent, selectors: [["app-company-logo"]], decls: 7, vars: 0, consts: [["width", "135", "height", "31", "viewBox", "0 0 135 31", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.02344 25.5293C10.1016 28.3184 12.6924 29.7129 15.7959 29.7129C18.8994 29.7129 21.4834 28.3184 23.5479 25.5293C25.6123 22.7539 26.6445 19.4111 26.6445 15.501C26.6445 11.6045 25.6123 8.27539 23.5479 5.51367C21.4834 2.76562 18.8994 1.37793 15.7959 1.35059C12.6924 1.35059 10.1016 2.74512 8.02344 5.53418C5.94531 8.30957 4.90625 11.6387 4.90625 15.5215C4.90625 19.3906 5.94531 22.7266 8.02344 25.5293ZM30.7871 15.6445C30.7871 19.9238 29.2764 23.4922 26.2549 26.3496C23.2334 29.207 19.7471 30.6357 15.7959 30.6357C11.8447 30.6357 8.3584 29.207 5.33691 26.3496C2.31543 23.4922 0.804688 19.9238 0.804688 15.6445C0.804688 13.6621 1.20801 11.7412 2.01465 9.88184C2.82129 8.00879 3.89453 6.38184 5.23438 5.00098C6.58789 3.62012 8.1875 2.5127 10.0332 1.67871C11.8926 0.844727 13.8135 0.427734 15.7959 0.427734C18.4482 0.427734 20.9365 1.13184 23.2607 2.54004C25.585 3.94824 27.4238 5.82812 28.7773 8.17969C30.1309 10.5176 30.8008 13.0059 30.7871 15.6445ZM34.3555 1.18652V1.02246H45.6553C52.1221 1.02246 55.3555 3.29199 55.3555 7.83105C55.3555 9.64941 54.7744 11.1328 53.6123 12.2812C52.4365 13.4434 51.001 14.2568 49.3057 14.7217V14.8857C51.5205 15.1182 53.3936 15.8223 54.9248 16.998C56.4697 18.1875 57.2285 19.8486 57.2012 21.9814C57.2012 24.7021 56.1758 26.7188 54.125 28.0312C52.0742 29.3438 49.4492 30 46.25 30H34.3555V29.8359C35.791 29.4668 36.7412 28.9131 37.2061 28.1748C37.6846 27.4229 37.9238 26.124 37.9238 24.2783V6.72363C37.9238 4.8916 37.6846 3.59961 37.2061 2.84766C36.7412 2.10938 35.791 1.55566 34.3555 1.18652ZM41.4512 2.15039V14.5371H45.0605C47.1113 14.5371 48.7451 13.9629 49.9619 12.8145C51.1787 11.6523 51.7871 10.0596 51.7871 8.03613C51.7871 6.9834 51.6094 6.06738 51.2539 5.28809C50.9121 4.50879 50.4199 3.90039 49.7773 3.46289C49.1348 3.01172 48.4033 2.68359 47.583 2.47852C46.7627 2.25977 45.8398 2.15039 44.8145 2.15039H41.4512ZM41.4512 15.6855V28.8721H46.1064C48.2803 28.8721 50.0371 28.3115 51.377 27.1904C52.7168 26.0557 53.3867 24.415 53.3867 22.2686C53.3867 20.792 53.0107 19.5479 52.2588 18.5361C51.5068 17.5107 50.5498 16.7793 49.3877 16.3418C48.2393 15.9043 46.9404 15.6855 45.4912 15.6855H41.4512ZM60.6465 1.18652V1.02246H71.9463C78.4131 1.02246 81.6465 3.29199 81.6465 7.83105C81.6465 9.64941 81.0654 11.1328 79.9033 12.2812C78.7275 13.4434 77.292 14.2568 75.5967 14.7217V14.8857C77.8115 15.1182 79.6846 15.8223 81.2158 16.998C82.7607 18.1875 83.5195 19.8486 83.4922 21.9814C83.4922 24.7021 82.4668 26.7188 80.416 28.0312C78.3652 29.3438 75.7402 30 72.541 30H60.6465V29.8359C62.082 29.4668 63.0322 28.9131 63.4971 28.1748C63.9756 27.4229 64.2148 26.124 64.2148 24.2783V6.72363C64.2148 4.8916 63.9756 3.59961 63.4971 2.84766C63.0322 2.10938 62.082 1.55566 60.6465 1.18652ZM67.7422 2.15039V14.5371H71.3516C73.4023 14.5371 75.0361 13.9629 76.2529 12.8145C77.4697 11.6523 78.0781 10.0596 78.0781 8.03613C78.0781 6.9834 77.9004 6.06738 77.5449 5.28809C77.2031 4.50879 76.7109 3.90039 76.0684 3.46289C75.4258 3.01172 74.6943 2.68359 73.874 2.47852C73.0537 2.25977 72.1309 2.15039 71.1055 2.15039H67.7422ZM67.7422 15.6855V28.8721H72.3975C74.5713 28.8721 76.3281 28.3115 77.668 27.1904C79.0078 26.0557 79.6777 24.415 79.6777 22.2686C79.6777 20.792 79.3018 19.5479 78.5498 18.5361C77.7979 17.5107 76.8408 16.7793 75.6787 16.3418C74.5303 15.9043 73.2314 15.6855 71.7822 15.6855H67.7422ZM90.3418 24.2783V6.72363C90.3418 4.8916 90.1025 3.59961 89.624 2.84766C89.1592 2.10938 88.209 1.55566 86.7734 1.18652V1.02246H105.661V6.94922H105.497C104.321 4.84375 103.433 3.52441 102.831 2.99121C102.188 2.43066 101.177 2.15039 99.7959 2.15039H93.8691V14.5371H99.5293C100.555 14.5371 101.334 14.3457 101.867 13.9629C102.4 13.5664 102.981 12.8623 103.61 11.8506H103.774V18.3311H103.61C102.968 17.3193 102.387 16.6289 101.867 16.2598C101.361 15.877 100.582 15.6855 99.5293 15.6855H93.8691V28.8721H100.965C102.264 28.8721 103.234 28.5986 103.877 28.0518C104.533 27.4912 105.62 26.1377 107.138 23.9912C107.329 23.7178 107.473 23.5195 107.568 23.3965H107.732L106.892 30H86.7734V29.8359C88.2227 29.4531 89.1797 28.9062 89.6445 28.1953C90.1094 27.4844 90.3418 26.1787 90.3418 24.2783ZM123.708 17.2236V24.2783C123.708 26.0283 123.947 27.3066 124.426 28.1133C124.891 28.9062 125.841 29.4805 127.276 29.8359V30H116.612V29.8359C118.048 29.4668 118.998 28.8926 119.463 28.1133C119.941 27.3203 120.181 26.042 120.181 24.2783V17.3262L115.936 9.63574C114.104 6.32715 112.723 4.15332 111.793 3.11426C110.836 2.04785 109.838 1.40527 108.799 1.18652V1.02246H118.54V1.18652C117.829 1.37793 117.316 1.58984 117.002 1.82227C116.66 2.06836 116.503 2.43066 116.53 2.90918C116.53 3.93457 117.467 6.13574 119.34 9.5127L123.011 16.0137L126.538 9.24609C128.165 6.14258 128.972 4.12598 128.958 3.19629C128.944 2.77246 128.808 2.41699 128.548 2.12988C128.288 1.84277 128.015 1.64453 127.728 1.53516C127.454 1.42578 127.085 1.30957 126.62 1.18652V1.02246H134.803V1.18652C133.832 1.32324 132.861 1.95898 131.891 3.09375C130.947 4.20117 129.648 6.29297 127.994 9.36914L123.708 17.2236Z", "fill", "url(#paint0_linear)"], ["id", "paint0_linear", "x1", "67.5", "y1", "-6", "x2", "67.5", "y2", "44", "gradientUnits", "userSpaceOnUse"], ["offset", "0.296875", "stop-color", "#EDBE7D"], ["offset", "0.473958", "stop-color", "#FAE4A0"], ["offset", "0.708333", "stop-color", "#EDBE7D"]], template: function CompanyLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "linearGradient", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tcGFueS1sb2dvL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tcGFueS1sb2dvL2NvbXBhbnktbG9nby5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tcGFueS1sb2dvL2NvbXBhbnktbG9nby5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb21wYW55LWxvZ28vY29tcGFueS1sb2dvLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-logo',
                templateUrl: './company-logo.component.html',
                styleUrls: ['./company-logo.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/company-logo/company-logo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/company-logo/company-logo.module.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyLogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyLogoModule", function() { return CompanyLogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _company_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-logo.component */ "./src/app/shared/components/company-logo/company-logo.component.ts");




class CompanyLogoModule {
}
CompanyLogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyLogoModule });
CompanyLogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyLogoModule_Factory(t) { return new (t || CompanyLogoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyLogoModule, { declarations: [_company_logo_component__WEBPACK_IMPORTED_MODULE_2__["CompanyLogoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_company_logo_component__WEBPACK_IMPORTED_MODULE_2__["CompanyLogoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyLogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _company_logo_component__WEBPACK_IMPORTED_MODULE_2__["CompanyLogoComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _company_logo_component__WEBPACK_IMPORTED_MODULE_2__["CompanyLogoComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company-logo/company-logo.component */ "./src/app/shared/components/company-logo/company-logo.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/icons.component */ "./src/app/shared/components/icons/icons.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modules_general_components_general_preview_component_general_preview_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/general/components/general-preview-component/general-preview-component.component */ "./src/app/modules/general/components/general-preview-component/general-preview-component.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function HeaderComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 30);
} }
const _c0 = function (a0) { return { active: a0 }; };
const _c1 = function (a0) { return [a0]; };
function HeaderComponent_div_14_ng_container_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_14_ng_container_5_div_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const subItemIndex_r9 = ctx.index; const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleActive(subItemIndex_r9, menuItem_r2.children); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuSubItem_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, menuSubItem_r8.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, menuSubItem_r8.routerPath));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuSubItem_r8.caption, " ");
} }
function HeaderComponent_div_14_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_14_ng_container_5_div_1_div_1_Template, 3, 7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuItem_r2.children);
} }
function HeaderComponent_div_14_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_14_ng_container_5_div_1_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r2.children == null ? null : menuItem_r2.children.length);
} }
function HeaderComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_14_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const itemIndex_r3 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.toggleActive(itemIndex_r3, ctx_r15.menuItems); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_14_div_2_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_14_ng_container_5_Template, 2, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, menuItem_r2.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r2.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, menuItem_r2.routerPath));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r2.caption, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r2.active && menuItem_r2.children);
} }
function HeaderComponent_a_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const homePageMenuItem_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", homePageMenuItem_r17.caption, " ");
} }
class HeaderComponent {
    constructor() {
        this.homePageMenuItems = [
            {
                caption: 'Главная',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Расчитать стоимость',
                routerPath: '',
                active: true,
            },
            {
                caption: 'Примеры работ',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Гарантии',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Отзывы',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Контакты',
                routerPath: '',
                active: false,
            },
        ];
    }
    ngOnInit() {
    }
    toggleActive(index, array) {
        array.forEach(el => el.active = false);
        array[index].active = true;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { showMenu: "showMenu", menuItems: "menuItems" }, decls: 33, vars: 2, consts: [[1, "container"], [1, "left-column"], [1, "first-block"], [1, "logo"], [1, "title-logo"], [1, "second-block"], [1, "underline-gradient"], [1, "flex", "menu-container"], ["name", "iconLeftMenuBurger", 1, "icon"], [1, "menu-list"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "right-column"], [1, "header-panel"], [1, "header-panel__left"], [1, "header-panel__right"], ["href", "tel:+74957491493", 1, "mobile"], [1, "address"], [1, "address__icon"], ["name", "iconPinAddress"], [1, "address__description"], [1, "underline-gradient-left"], [1, "menu-panel"], ["class", "homepage__menuItem", 4, "ngFor", "ngForOf"], [1, "activeUnderline"], [1, "content"], [1, "menu-item"], [1, "menu-list__link", 3, "ngClass", "click"], ["class", "menu-list__link--item", 4, "ngIf"], [1, "link", 3, "routerLink"], [4, "ngIf"], [1, "menu-list__link--item"], ["id", "menu", "class", "menu-subitem-list", 4, "ngIf"], ["id", "menu", 1, "menu-subitem-list"], ["class", "menu-subitem-list__item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "menu-subitem-list__item", 3, "ngClass", "click"], [1, "homepage__menuItem"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-company-logo", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041C\u0435\u0431\u0435\u043B\u044C \u0443 \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041C\u0435\u043D\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 6, 9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u21162 \u043F\u043E \u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u0438 \u0440\u0435\u0441\u0442\u043E\u0432\u0440\u0430\u0446\u0438\u0438 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "8 (495) 749 14 93");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u043F\u043E \u041C\u043E\u0441\u043A\u0432\u0435 \u0438 \u041C\u041E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_a_29_Template, 2, 1, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-general-preview-component", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homePageMenuItems);
    } }, directives: [_company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_1__["CompanyLogoComponent"], _icons_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _modules_general_components_general_preview_component_general_preview_component_component__WEBPACK_IMPORTED_MODULE_4__["GeneralPreviewComponentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["html[_ngcontent-%COMP%] {\n  color: #fff;\n}\n*[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.primary-text-color[_ngcontent-%COMP%] {\n  color: #fcd977;\n}\n\n@font-face {\n  font-family: \"MuseoSansCyrl\";\n  src: url('MuseoSansCyrl-300.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"MuseoSansCyrl-100\";\n  src: url('MuseoSansCyrl-100.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"MuseoSansCyrl-300\";\n  src: url('MuseoSansCyrl-300.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"MuseoSansCyrl-500\";\n  src: url('MuseoSansCyrl-500.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"MuseoSansCyrl-700\";\n  src: url('MuseoSansCyrl-700.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"MuseoSansCyrl-900\";\n  src: url('MuseoSansCyrl-900.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n[_nghost-%COMP%] {\n  display: flex;\n  min-height: 938px;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  height: inherit;\n}\n.container__header[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container__header--left[_ngcontent-%COMP%] {\n  padding: 32px 72px 20px 80px;\n  border-right: 1px solid #404244;\n}\n.container__header--left[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  font-family: \"BerlingskeSerif\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  \n  text-transform: uppercase;\n}\n.container__header--right[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 32px 72px 20px 80px;\n  background: linear-gradient(90deg, #181d21 0%, rgba(24, 29, 33, 0) 100%);\n}\n.container__header--right[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-300\";\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  \n  text-align: justify;\n  color: #ffffff;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.address[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.address__icon[_ngcontent-%COMP%] {\n  color: #ecb85a;\n  width: 24px;\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: rgba(252, 217, 119, 0.13);\n  margin-right: 8px;\n}\n.address__description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"MuseoSansCyrl-300\";\n  color: #fcd977;\n}\n.mobile[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 22px;\n  \n  letter-spacing: 0.055em;\n  margin-bottom: 12px;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: \"BerlingskeSerif-SemiBold\";\n  color: #e9e9e8;\n}\n.left-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 290px;\n  border-right: 1px solid #404244;\n}\n.right-column[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #181d21 0%, rgba(24, 29, 33, 0) 100%);\n  width: 100%;\n}\n.icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ecb85a;\n}\n.underline-gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(270deg, #404244 0%, rgba(64, 66, 68, 0) 100%);\n  height: 1px;\n}\n.underline-gradient-left[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #404244 77.65%, rgba(64, 66, 68, 0) 101.42%);\n  height: 1px;\n}\n.first-block[_ngcontent-%COMP%] {\n  padding: 32px 72px 20px 80px;\n  height: 115px;\n  box-sizing: border-box;\n  min-height: 115px;\n}\n.menu-container[_ngcontent-%COMP%] {\n  padding: 16px 0 16px 42px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  height: 56px;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header-panel[_ngcontent-%COMP%] {\n  padding: 35px;\n  display: flex;\n  justify-content: space-between;\n  height: 115px;\n  box-sizing: border-box;\n}\n.header-panel__left[_ngcontent-%COMP%] {\n  max-width: 210px;\n  font-family: \"MuseoSansCyrl-300\";\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 22px;\n  \n  text-align: justify;\n}\n.link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.menu-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 20px;\n  padding-left: 42px;\n}\n.menu-list__link[_ngcontent-%COMP%] {\n  padding: 20px 20px 20px 0;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #e9e9e8;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n  font-family: \"MuseoSansCyrl-900\";\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n}\n.menu-list__link--item[_ngcontent-%COMP%] {\n  height: 2px;\n  background-color: #fcd977;\n  display: inline-flex;\n  width: 26px;\n  height: 3px;\n  max-height: 3px;\n  margin-right: 8px;\n  min-width: 26px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.menu-list__link[_ngcontent-%COMP%]:hover, .menu-list__link.active[_ngcontent-%COMP%] {\n  transition: 0.2s ease-in-out;\n  color: #fcd977;\n}\n.menu-subitem[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-100\";\n  font-style: normal;\n  font-weight: 250;\n  font-size: 14px;\n  line-height: 17px;\n  \n  color: #ffffff;\n}\n.menu-subitem-list[_ngcontent-%COMP%] {\n  transition: 0.2s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding-left: 20px;\n}\n.menu-subitem-list__item[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-100\";\n  font-style: normal;\n  font-weight: 250;\n  font-size: 14px;\n  line-height: 17px;\n  \n  color: #ffffff;\n  margin-bottom: 10px;\n}\n.menu-subitem-list__item.active[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-500\";\n  color: #fcd977;\n}\n.menu-panel[_ngcontent-%COMP%] {\n  padding: 16px 0 16px 35px;\n  height: 56px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  white-space: nowrap;\n}\n.homepage__menuItem[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl-900\";\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  cursor: pointer;\n  color: #fffffe;\n}\n.homepage__menuItem[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 70px;\n}\n.content[_ngcontent-%COMP%] {\n  height: calc(100% - 173px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hc3NldHMvc3R5bGVzL2dsb2JhbC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvQzovVXNlcnMvTWFvbGluay9EZXNrdG9wL0Rldi9mdXJuaXR1cmUvc3JjL2Fzc2V0cy9mb250cy9NdXNlb1NhbnNDeXJsL011c2VvU2Fuc0N5cmwubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQztBQ2tCRDtFQUNJLFdBQUE7QURoQko7QUNtQkE7RUFDSSxjQUFBO0FEakJKO0FDb0JBO0VBQ0ksY0FBQTtBRGxCSjtBQUNBOztDQUVDO0FFWEQ7RUFDSSw0QkFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRmFKO0FFVkE7RUFDSSxnQ0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRllKO0FFVEE7RUFDSSxnQ0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRldKO0FFUkE7RUFDSSxnQ0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRlVKO0FFUEE7RUFDSSxnQ0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRlNKO0FFTkE7RUFDSSxnQ0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRlFKO0FHL0NBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FIaURKO0FHOUNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUhnREo7QUc5Q0k7RUFDSSxhQUFBO0FIZ0RSO0FHOUNRO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtBSGdEWjtBRzdDUTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFSCtDViw0QkFBNEI7RUc1Q2xCLHlCQUFBO0FIOENaO0FHM0NRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0VBQUE7QUg2Q1o7QUd0Q1E7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUh3Q1YsWUFBWTtFR3JDRixtQkFBQTtFQUVBLGNBQUE7QUhzQ1o7QUdqQ0E7RUFDSSxrQkFBQTtBSG1DSjtBR2hDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FIa0NKO0FHaENJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QUhrQ1I7QUcvQkk7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FIaUNSO0FHN0JBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VIK0JGLDRCQUE0QjtFRzVCMUIsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtBSDhCSjtBRzNCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUg2Qko7QUcxQkE7RUFDSSx3RUFBQTtFQUNBLFdBQUE7QUg0Qko7QUd6QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FIMkJKO0FHeEJBO0VBQ0kseUVBQUE7RUFFQSxXQUFBO0FIeUJKO0FHdEJBO0VBQ0ksK0VBQUE7RUFLQSxXQUFBO0FIb0JKO0FHakJBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBSG1CSjtBR2hCQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FIa0JKO0FHZkE7RUFDSSxhQUFBO0FIaUJKO0FHZEE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FIZ0JKO0FHZEk7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFSGdCTixZQUFZO0VHYk4sbUJBQUE7QUhlUjtBR1hBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FIYUo7QUdWQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUhZSjtBR1ZJO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBSFdSO0FHVFE7RUFFSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUhVWjtBR05JOztFQUVJLDRCQUFBO0VBQ0EsY0FBQTtBSFFSO0FHSkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUhNRiw0QkFBNEI7RUdIMUIsY0FBQTtBSEtKO0FHRkE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUhJSjtBR0ZJO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VISU4sNEJBQTRCO0VHRHRCLGNBQUE7RUFDQSxtQkFBQTtBSEdSO0FHQUk7RUFDSSxnQ0FBQTtFQUNBLGNBQUE7QUhFUjtBR0VBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FIQUo7QUdJSTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7QUhIUjtBR01JO0VBQ0ksaUJBQUE7QUhKUjtBR1FBO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FITkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvbG9yc1xuKi9cbmh0bWwge1xuICBjb2xvcjogI2ZmZjtcbn1cbioge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5wcmltYXJ5LXRleHQtY29sb3Ige1xuICBjb2xvcjogI2ZjZDk3Nztcbn1cbi8qXG4gKiBVc2UgZGVmYXVsdCBmb250LWZhbWlseSB0eXBlXG4qL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmxcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvTXVzZW9TYW5zQ3lybC9NdXNlb1NhbnNDeXJsLTMwMC5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTEwMFwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9NdXNlb1NhbnNDeXJsL011c2VvU2Fuc0N5cmwtMTAwLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL011c2VvU2Fuc0N5cmwvTXVzZW9TYW5zQ3lybC0zMDAub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC01MDBcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvTXVzZW9TYW5zQ3lybC9NdXNlb1NhbnNDeXJsLTUwMC5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTcwMFwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9NdXNlb1NhbnNDeXJsL011c2VvU2Fuc0N5cmwtNzAwLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtOTAwXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL011c2VvU2Fuc0N5cmwvTXVzZW9TYW5zQ3lybC05MDAub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDkzOHB4O1xufVxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbi5jb250YWluZXJfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyX19oZWFkZXItLWxlZnQge1xuICBwYWRkaW5nOiAzMnB4IDcycHggMjBweCA4MHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDA0MjQ0O1xufVxuLmNvbnRhaW5lcl9faGVhZGVyLS1sZWZ0ID4gLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jb250YWluZXJfX2hlYWRlci0tcmlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAzMnB4IDcycHggMjBweCA4MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxODFkMjEgMCUsIHJnYmEoMjQsIDI5LCAzMywgMCkgMTAwJSk7XG59XG4uY29udGFpbmVyX19oZWFkZXItLXJpZ2h0ID4gLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBvciAxMzclICovXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uYWRkcmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkZHJlc3NfX2ljb24ge1xuICBjb2xvcjogI2VjYjg1YTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWF4LWhlaWdodDogMjRweDtcbiAgbWF4LXdpZHRoOiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMjE3LCAxMTksIDAuMTMpO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5hZGRyZXNzX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgY29sb3I6ICNmY2Q5Nzc7XG59XG4ubW9iaWxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDU1ZW07XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJCZXJsaW5nc2tlU2VyaWYtU2VtaUJvbGRcIjtcbiAgY29sb3I6ICNlOWU5ZTg7XG59XG4ubGVmdC1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDI5MHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDA0MjQ0O1xufVxuLnJpZ2h0LWNvbHVtbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE4MWQyMSAwJSwgcmdiYSgyNCwgMjksIDMzLCAwKSAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZWNiODVhO1xufVxuLnVuZGVybGluZS1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDQyNDQgMCUsIHJnYmEoNjQsIDY2LCA2OCwgMCkgMTAwJSk7XG4gIGhlaWdodDogMXB4O1xufVxuLnVuZGVybGluZS1ncmFkaWVudC1sZWZ0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNDA0MjQ0IDc3LjY1JSwgcmdiYSg2NCwgNjYsIDY4LCAwKSAxMDEuNDIlKTtcbiAgaGVpZ2h0OiAxcHg7XG59XG4uZmlyc3QtYmxvY2sge1xuICBwYWRkaW5nOiAzMnB4IDcycHggMjBweCA4MHB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiAxMTVweDtcbn1cbi5tZW51LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHggMCAxNnB4IDQycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTZweDtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5oZWFkZXItcGFuZWwge1xuICBwYWRkaW5nOiAzNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uaGVhZGVyLXBhbmVsX19sZWZ0IHtcbiAgbWF4LXdpZHRoOiAyMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBvciAxMzclICovXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4ubGluayB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWVudS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNDJweDtcbn1cbi5tZW51LWxpc3RfX2xpbmsge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZTllOWU4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtOTAwXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubWVudS1saXN0X19saW5rLS1pdGVtIHtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Q5Nzc7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1heC1oZWlnaHQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1pbi13aWR0aDogMjZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm1lbnUtbGlzdF9fbGluazpob3Zlcixcbi5tZW51LWxpc3RfX2xpbmsuYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICNmY2Q5Nzc7XG59XG4ubWVudS1zdWJpdGVtIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0xMDBcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMjUwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5tZW51LXN1Yml0ZW0tbGlzdCB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tZW51LXN1Yml0ZW0tbGlzdF9faXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMTAwXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDI1MDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWVudS1zdWJpdGVtLWxpc3RfX2l0ZW0uYWN0aXZlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC01MDBcIjtcbiAgY29sb3I6ICNmY2Q5Nzc7XG59XG4ubWVudS1wYW5lbCB7XG4gIHBhZGRpbmc6IDE2cHggMCAxNnB4IDM1cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaG9tZXBhZ2VfX21lbnVJdGVtIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC05MDBcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZTtcbn1cbi5ob21lcGFnZV9fbWVudUl0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNzNweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIiwiLypcbiAqIENvbG9yc1xuKi9cblxuQHByb2plY3QtZm9udC1tdXNlby0xMDA6IFwiTXVzZW9TYW5zQ3lybC0xMDBcIjtcbkBwcm9qZWN0LWZvbnQtbXVzZW8tMzAwOiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG5AcHJvamVjdC1mb250LW11c2VvLTUwMDogXCJNdXNlb1NhbnNDeXJsLTUwMFwiO1xuQHByb2plY3QtZm9udC1tdXNlby03MDA6IFwiTXVzZW9TYW5zQ3lybC03MDBcIjtcbkBwcm9qZWN0LWZvbnQtbXVzZW8tOTAwOiBcIk11c2VvU2Fuc0N5cmwtOTAwXCI7XG5cbkBwcm9qZWN0LWNvbG9yLWJsYW5rOiAjZmZmO1xuQHByb2plY3QtY29sb3ItcHJpbWFyeS1hY3RpdmU6ICNmOGUxOWQ7XG5AcHJvamVjdC1jb2xvci1wcmltYXJ5OiAjZmNkOTc3O1xuQHByb2plY3QtY29sb3ItZGVmYXVsdC10ZXh0OiAjZTllOWU4O1xuXG5AcHJvamVjdC1mb250LXByaW1hcnktYmxhY2s6IFwiTXVzZW9TYW5zQ3lybC05MDBcIjtcbkBwcm9qZWN0LWZvbnQtcHJpbWFyeS1yZWd1bGFyOiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG5cbkBwcm9qZWN0LWZvbnQtc2Vjb25kYXJ5LXJlZ3VsYXI6IFwiQmVybGluZ3NrZVNlcmlmLVJlZ3VsYXJcIjtcblxuaHRtbCB7XG4gICAgY29sb3I6IEBwcm9qZWN0LWNvbG9yLWJsYW5rO1xufVxuXG4qIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnByaW1hcnktdGV4dC1jb2xvciB7XG4gICAgY29sb3I6IEBwcm9qZWN0LWNvbG9yLXByaW1hcnk7XG59XG4iLCIvKlxuICogVXNlIGRlZmF1bHQgZm9udC1mYW1pbHkgdHlwZVxuKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmxcIjtcbiAgICBzcmM6IHVybChcIk11c2VvU2Fuc0N5cmwtMzAwLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0xMDBcIjtcbiAgICBzcmM6IHVybChcIk11c2VvU2Fuc0N5cmwtMTAwLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgICBzcmM6IHVybChcIk11c2VvU2Fuc0N5cmwtMzAwLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC01MDBcIjtcbiAgICBzcmM6IHVybChcIk11c2VvU2Fuc0N5cmwtNTAwLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC03MDBcIjtcbiAgICBzcmM6IHVybChcIk11c2VvU2Fuc0N5cmwtNzAwLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC05MDBcIjtcbiAgICBzcmM6IHVybChcIk11c2VvU2Fuc0N5cmwtOTAwLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC5sZXNzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL011c2VvU2Fuc0N5cmwvTXVzZW9TYW5zQ3lybC5sZXNzXCI7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IDkzOHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogaW5oZXJpdDtcblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgJi0tbGVmdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMnB4IDcycHggMjBweCA4MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQwNDI0NDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLWxlZnQgPiAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmXCI7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tcmlnaHQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMzJweCA3MnB4IDIwcHggODBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICAgICAgICAjMTgxZDIxIDAlLFxuICAgICAgICAgICAgICAgIHJnYmEoMjQsIDI5LCAzMywgMCkgMTAwJVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLXJpZ2h0ID4gLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMzAwXCI7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAvKiBvciAxMzclICovXG5cbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uYWRkcmVzcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZWNiODVhO1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDI0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAyMTcsIDExOSwgMC4xMyk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogQHByb2plY3QtZm9udC1wcmltYXJ5LXJlZ3VsYXI7XG4gICAgICAgIGNvbG9yOiBAcHJvamVjdC1jb2xvci1wcmltYXJ5O1xuICAgIH1cbn1cblxuLm1vYmlsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNTVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiQmVybGluZ3NrZVNlcmlmLVNlbWlCb2xkXCI7XG4gICAgY29sb3I6IEBwcm9qZWN0LWNvbG9yLWRlZmF1bHQtdGV4dDtcbn1cblxuLmxlZnQtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiAyOTBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDA0MjQ0O1xufVxuXG4ucmlnaHQtY29sdW1uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxODFkMjEgMCUsIHJnYmEoMjQsIDI5LCAzMywgMCkgMTAwJSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogI2VjYjg1YTtcbn1cblxuLnVuZGVybGluZS1ncmFkaWVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwNDI0NCAwJSwgcmdiYSg2NCwgNjYsIDY4LCAwKSAxMDAlKTtcblxuICAgIGhlaWdodDogMXB4O1xufVxuXG4udW5kZXJsaW5lLWdyYWRpZW50LWxlZnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgOTBkZWcsXG4gICAgICAgICM0MDQyNDQgNzcuNjUlLFxuICAgICAgICByZ2JhKDY0LCA2NiwgNjgsIDApIDEwMS40MiVcbiAgICApO1xuICAgIGhlaWdodDogMXB4O1xufVxuXG4uZmlyc3QtYmxvY2sge1xuICAgIHBhZGRpbmc6IDMycHggNzJweCAyMHB4IDgwcHg7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1pbi1oZWlnaHQ6IDExNXB4O1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHggMCAxNnB4IDQycHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1NnB4O1xufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1wYW5lbCB7XG4gICAgcGFkZGluZzogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmX19sZWZ0IHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC0zMDBcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAvKiBvciAxMzclICovXG5cbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG59XG5cbi5saW5rIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tZW51LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQycHg7XG5cbiAgICAmX19saW5rIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogQHByb2plY3QtY29sb3ItZGVmYXVsdC10ZXh0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtOTAwXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgJi0taXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHByb2plY3QtY29sb3ItcHJpbWFyeTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2xpbms6aG92ZXIsXG4gICAgJl9fbGluay5hY3RpdmUge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICBjb2xvcjogQHByb2plY3QtY29sb3ItcHJpbWFyeTtcbiAgICB9XG59XG5cbi5tZW51LXN1Yml0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmwtMTAwXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAyNTA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1lbnUtc3ViaXRlbS1saXN0IHtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgICZfX2l0ZW0ge1xuICAgICAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTEwMFwiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyNTA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgJl9faXRlbS5hY3RpdmUge1xuICAgICAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsLTUwMFwiO1xuICAgICAgICBjb2xvcjogQHByb2plY3QtY29sb3ItcHJpbWFyeTtcbiAgICB9XG59XG5cbi5tZW51LXBhbmVsIHtcbiAgICBwYWRkaW5nOiAxNnB4IDAgMTZweCAzNXB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaG9tZXBhZ2Uge1xuICAgICZfX21lbnVJdGVtIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybC05MDBcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIGNvbG9yOiAjZmZmZmZlO1xuICAgIH1cblxuICAgICZfX21lbnVJdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgfVxufVxuXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNzNweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { showMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/header/header.module.ts ***!
  \***********************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../modules/general/general-content.module */ "./src/app/modules/general/general-content.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company-logo/company-logo.module */ "./src/app/shared/components/company-logo/company-logo.module.ts");
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../icons/icons.module */ "./src/app/shared/components/icons/icons.module.ts");

/*
 * angular default modules
*/



/*
 * module default components
*/

/*
 * injectable custom modules
*/



class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_5__["CompanyLogoModule"],
            _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"],
            _modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_0__["GeneralContentModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_5__["CompanyLogoModule"],
        _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"],
        _modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_0__["GeneralContentModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_5__["CompanyLogoModule"],
                    _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"],
                    _modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_0__["GeneralContentModule"],
                ],
                exports: [
                    _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/icons/icons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/icons/icons.component.ts ***!
  \************************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function IconsComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "line", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "linearGradient", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clipPath", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "linearGradient", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "linearGradient", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "stop", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "linearGradient", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "linearGradient", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "stop", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clipPath", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IconsComponent__svg_svg_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class IconsComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconsComponent.ɵfac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(); };
IconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsComponent, selectors: [["app-icon"]], inputs: { name: "name" }, decls: 15, vars: 15, consts: [["width", "25", "height", "16", "viewBox", "0 0 25 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "19", "height", "13", "viewBox", "0 0 19 13", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "22", "height", "26", "viewBox", "0 0 22 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "41", "height", "37", "viewBox", "0 0 41 37", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "43", "height", "39", "viewBox", "0 0 43 39", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "47", "height", "39", "viewBox", "0 0 47 39", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "23", "height", "22", "viewBox", "0 0 23 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "25", "height", "25", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "25", "height", "27", "viewBox", "0 0 25 27", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "25", "height", "16", "viewBox", "0 0 25 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["y1", "1", "x2", "25", "y2", "1", "stroke", "#FAD875", "stroke-width", "2"], ["y1", "8", "x2", "21", "y2", "8", "stroke", "#FAD875", "stroke-width", "2"], ["y1", "15", "x2", "25", "y2", "15", "stroke", "#FAD875", "stroke-width", "2"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.97201 1.23097C8.17824 0.437204 7.12282 0 6.00033 0C4.87762 0 3.82242 0.437204 3.02866 1.23097C1.55969 2.69971 1.37714 5.46319 2.63331 7.1375L6.00033 12L9.36231 7.14429C10.6235 5.46319 10.441 2.69971 8.97201 1.23097ZM6.03912 5.6979C5.19342 5.6979 4.50507 5.00955 4.50507 4.16385C4.50507 3.31815 5.19342 2.6298 6.03912 2.6298C6.88482 2.6298 7.57317 3.31815 7.57317 4.16385C7.57317 5.00955 6.88482 5.6979 6.03912 5.6979Z", "fill", "currentColor"], ["width", "19", "height", "13", "viewBox", "0 0 19 13", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.884 6.21008L12.946 0.116076C12.792 -0.0429238 12.541 -0.0429238 12.387 0.116076C12.232 0.274076 12.232 0.533076 12.387 0.691076L17.648 6.09108H0.396C0.177 6.09108 0 6.27308 0 6.49808C0 6.72108 0.177 6.90408 0.396 6.90408H17.648L12.387 12.3031C12.232 12.4631 12.232 12.7211 12.387 12.8791C12.464 12.9591 12.565 12.9981 12.666 12.9981C12.768 12.9981 12.869 12.9591 12.946 12.8791L18.884 6.78608C19.038 6.62708 19.038 6.36808 18.884 6.21008Z", "fill", "#111416"], ["width", "22", "height", "26", "viewBox", "0 0 22 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M10.787 25.9481C10.694 25.9801 10.597 25.9961 10.501 25.9961C10.404 25.9961 10.307 25.9801 10.214 25.9481C-0.257016 22.3171 -0.0930164 13.7151 0.0269836 7.4341C0.0399836 6.7591 0.0519813 6.12011 0.0519813 5.50411C0.0519813 5.02011 0.443981 4.63011 0.926981 4.63011C4.66798 4.63011 7.51698 3.55311 9.89098 1.24311C10.23 0.913105 10.771 0.913105 11.11 1.24311C13.485 3.55311 16.333 4.63011 20.075 4.63011C20.558 4.63011 20.95 5.02011 20.95 5.50411C20.95 6.12011 20.962 6.7581 20.975 7.4331C21.095 13.7141 21.259 22.3171 10.787 25.9481ZM19.225 7.4661C19.218 7.0871 19.211 6.72011 19.206 6.36011C15.702 6.21211 12.9 5.15011 10.501 3.06111C8.10198 5.15011 5.29998 6.21211 1.79598 6.36011C1.79098 6.72111 1.78398 7.0881 1.77698 7.4671C1.65598 13.7801 1.52098 20.9281 10.501 24.1921C19.481 20.9281 19.346 13.7801 19.225 7.4661ZM9.90898 16.5361C9.73898 16.7061 9.51498 16.7921 9.29098 16.7921C9.06698 16.7921 8.84298 16.7061 8.67198 16.5361L6.25198 14.1141C5.90998 13.7731 5.90998 13.2201 6.25198 12.8771C6.59298 12.5371 7.14698 12.5371 7.48898 12.8771L9.29098 14.6801L13.513 10.4561C13.855 10.1141 14.409 10.1141 14.75 10.4561C15.092 10.7981 15.092 11.3521 14.75 11.6931L9.90898 16.5361Z", "fill", "url(#paint0_linear)"], ["id", "paint0_linear", "x1", "10.501", "y1", "22.6468", "x2", "-2.9743", "y2", "3.03975", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#E4A94D"], ["offset", "1", "stop-color", "#FCD977"], ["id", "clip0"], ["width", "21.002", "height", "26", "fill", "white"], ["width", "41", "height", "37", "viewBox", "0 0 41 37", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M24.815 18.425L19.097 23.819C18.846 24.055 18.44 24.055 18.188 23.819C17.937 23.582 17.937 23.199 18.188 22.964L23.452 17.997L18.189 13.029C17.938 12.794 17.938 12.41 18.189 12.173C18.44 11.937 18.847 11.937 19.098 12.173L24.815 17.568C25.063 17.801 25.063 18.192 24.815 18.425Z", "fill", "url(#paint0_linear)"], ["d", "M37 6.497V6.5915L37.5 6.497C37.0345 6.67948 37.0345 6.67942 37.0345 6.67939L37.0345 6.67948L37.0346 6.67976L37.0354 6.68188L37.0392 6.69162L37.0549 6.73268C37.0688 6.76949 37.0896 6.82498 37.1162 6.89799C37.1694 7.04401 37.246 7.26 37.3381 7.5366C37.5226 8.08997 37.7691 8.88495 38.0157 9.84681C38.5098 11.7742 39 14.3545 39 16.996C39 19.9785 38.5073 23.0656 38.0108 25.4163C37.763 26.5895 37.5152 27.5747 37.3296 28.2658C37.2368 28.6113 37.1597 28.883 37.1059 29.0678C37.079 29.1602 37.0579 29.2308 37.0437 29.278L37.0276 29.331L37.0237 29.344L37.0227 29.347L37.0225 29.3476L37.0225 29.3476L37.0225 29.3477L37 29.4201V29.496C37 32.534 34.5378 34.997 31.5 34.997H8.5C5.46225 34.997 3 32.534 3 29.496V29.416L2.97504 29.34L2.97502 29.3399L2.97483 29.3394L2.97392 29.3366L2.96999 29.3245L2.95399 29.2746C2.93983 29.2301 2.91885 29.1634 2.89201 29.0761C2.83834 28.9014 2.76128 28.6441 2.66863 28.3164C2.48328 27.661 2.23577 26.7248 1.98821 25.6053C1.49217 23.3622 1 20.4013 1 17.495C1 14.7612 1.49092 12.0543 1.98579 10.023C2.23277 9.00921 2.47964 8.16804 2.66441 7.58137C2.75676 7.28812 2.83353 7.05869 2.88692 6.90334C2.91361 6.82567 2.93445 6.76654 2.94848 6.72723L2.96427 6.6833L2.9681 6.67278L2.96896 6.67044L2.96909 6.67007L2.96912 6.67001L2.96913 6.66998L3 6.5863V6.497C3 3.45904 5.46225 0.996002 8.5 0.996002H31.5C34.5378 0.996002 37 3.45904 37 6.497Z", "stroke", "url(#paint1_linear)"], ["id", "paint0_linear", "x1", "17.9998", "y1", "23.996", "x2", "17.9998", "y2", "11.996", "gradientUnits", "userSpaceOnUse"], ["id", "paint1_linear", "x1", "1", "y1", "18", "x2", "40", "y2", "18", "gradientUnits", "userSpaceOnUse"], ["offset", "0.351682", "stop-color", "#E2AC48"], ["offset", "1", "stop-color", "#FAE4A0"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M15.685 18.075L21.403 12.681C21.654 12.445 22.06 12.445 22.312 12.681C22.563 12.918 22.563 13.301 22.312 13.536L17.048 18.503L22.311 23.471C22.562 23.706 22.562 24.09 22.311 24.327C22.06 24.563 21.653 24.563 21.402 24.327L15.685 18.932C15.437 18.699 15.437 18.308 15.685 18.075Z", "fill", "url(#paint0_linear)"], ["d", "M3.5 30.003V29.9085L3 30.003C3.46551 29.8205 3.46553 29.8206 3.46555 29.8206L3.46551 29.8205L3.4654 29.8202L3.46458 29.8181L3.46081 29.8084L3.44514 29.7673C3.4312 29.7305 3.41044 29.675 3.38383 29.602C3.33062 29.456 3.25403 29.24 3.16185 28.9634C2.97744 28.41 2.73095 27.615 2.48433 26.6532C1.99017 24.7258 1.5 22.1455 1.5 19.504C1.5 16.5215 1.99268 13.4344 2.4892 11.0837C2.73702 9.91048 2.9848 8.92529 3.17039 8.23419C3.26316 7.88872 3.34034 7.61696 3.39413 7.43219C3.42103 7.33981 3.44207 7.26919 3.45629 7.22199L3.47237 7.16898L3.47635 7.15604L3.47728 7.15303L3.47747 7.1524L3.47748 7.15235L3.4775 7.1523L3.5 7.07988V7.004C3.5 3.96603 5.96225 1.50299 9 1.50299L32 1.50299C35.0377 1.50299 37.5 3.96603 37.5 7.004V7.08404L37.525 7.16001L37.525 7.16007L37.5252 7.16065L37.5261 7.16343L37.53 7.17554L37.546 7.22544C37.5602 7.26993 37.5812 7.33661 37.608 7.42395C37.6617 7.59864 37.7387 7.85591 37.8314 8.18355C38.0167 8.83901 38.2642 9.77521 38.5118 10.8947C39.0078 13.1378 39.5 16.0987 39.5 19.005C39.5 21.7388 39.0091 24.4457 38.5142 26.477C38.2672 27.4908 38.0204 28.332 37.8356 28.9186C37.7432 29.2119 37.6665 29.4413 37.6131 29.5967C37.5864 29.6743 37.5655 29.7335 37.5515 29.7728L37.5357 29.8167L37.5319 29.8272L37.531 29.8296L37.5309 29.8299L37.5309 29.83L37.5309 29.83L37.5 29.9137V30.003C37.5 33.041 35.0377 35.504 32 35.504L9 35.504C5.96225 35.504 3.5 33.041 3.5 30.003Z", "stroke", "url(#paint1_linear)"], ["id", "paint0_linear", "x1", "22.5002", "y1", "12.504", "x2", "22.5002", "y2", "24.504", "gradientUnits", "userSpaceOnUse"], ["id", "paint1_linear", "x1", "39.5", "y1", "18.5", "x2", "0.5", "y2", "18.5", "gradientUnits", "userSpaceOnUse"], ["width", "40.5", "height", "36.5", "fill", "white", "transform", "translate(40.5 36.5) rotate(-180)"], ["width", "43", "height", "39", "viewBox", "0 0 43 39", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M29.837 19.1505H13.163C12.522 19.1505 12 18.6318 12 17.9927V1.39501C12 0.756905 12.522 0.236267 13.163 0.236267H29.837C30.478 0.236267 31 0.756905 31 1.39501V17.9927C31 18.6318 30.478 19.1505 29.837 19.1505ZM30.224 1.39501C30.224 1.18297 30.05 1.00876 29.837 1.00876H13.163C12.949 1.00876 12.775 1.18297 12.775 1.39501V17.9927C12.775 18.2047 12.949 18.3799 13.163 18.3799H29.837C30.05 18.3799 30.224 18.2047 30.224 17.9927V1.39501ZM26.019 15.5597C25.715 16.166 25.276 16.2546 25.042 16.2546C24.746 16.2546 24.528 16.1222 24.487 16.0943C24.485 16.0923 24.482 16.0903 24.479 16.0883L21.45 13.96L20.324 15.0809C20.02 15.3845 19.71 15.5378 19.403 15.5378C18.942 15.5378 18.643 15.1874 18.539 14.9814C18.533 14.9684 18.527 14.9555 18.522 14.9415L17.246 11.4932C16.622 11.4036 15.04 11.1189 14.351 10.4539C14.025 10.1393 13.875 9.81481 13.905 9.4853C13.943 9.06421 14.268 8.83625 14.305 8.81335C14.329 8.79742 14.354 8.78448 14.38 8.77453L26.695 4.02607C26.703 4.02309 26.711 4.02109 26.72 4.01711C26.945 3.94842 27.164 3.91259 27.371 3.91259C28.126 3.91259 28.673 4.40137 28.673 5.08029C28.673 5.11115 28.67 5.14002 28.663 5.16789C28.434 6.14944 26.416 14.7703 26.019 15.5597ZM27.371 4.68409C27.246 4.68409 27.108 4.70698 26.963 4.75078L14.721 9.47037C14.703 9.49028 14.679 9.52214 14.677 9.55996C14.675 9.58883 14.685 9.70232 14.89 9.89843C15.425 10.4151 17.008 10.6948 17.573 10.7585C17.718 10.7745 17.842 10.872 17.893 11.0074L19.238 14.6439C19.261 14.6777 19.326 14.7644 19.403 14.7644C19.436 14.7644 19.561 14.7474 19.775 14.5354L21.132 13.1835C21.266 13.0521 21.476 13.0332 21.63 13.1427L24.915 15.4502C24.936 15.4622 24.988 15.4851 25.042 15.4851C25.164 15.4851 25.263 15.3387 25.325 15.2143C25.593 14.6817 27.005 8.85815 27.896 5.04246C27.87 4.71097 27.49 4.68409 27.371 4.68409ZM20.096 13.5628C20.028 13.6892 19.897 13.7659 19.755 13.7659C19.746 13.7659 19.738 13.7659 19.729 13.7659C19.577 13.7549 19.445 13.6574 19.392 13.517L18.229 10.427C18.162 10.2508 18.234 10.0517 18.398 9.95816L26.153 5.5183C26.323 5.42074 26.539 5.46554 26.657 5.62183C26.774 5.77713 26.757 5.99613 26.616 6.13052L21.425 11.1069L20.096 13.5628ZM19.07 10.4639L19.818 12.4499L20.771 10.6878C20.79 10.653 20.814 10.6211 20.843 10.5933L23.806 7.75416L19.07 10.4639Z", "fill", "#45B9F5"], ["d", "M3.06207 34.1274H3.75207V27.7174H6.28207V27.0974H0.54207V27.7174H3.06207V34.1274ZM5.91043 31.6174C5.91043 33.1674 7.05043 34.2474 8.55043 34.2474C9.21043 34.2474 9.94043 33.9774 10.4104 33.5474L10.1004 33.0274C9.69043 33.3974 9.12043 33.6274 8.57043 33.6274C7.53043 33.6274 6.65043 32.9174 6.62043 31.6374H10.4804C10.4904 31.5274 10.5004 31.4074 10.5004 31.2974C10.5004 30.0474 9.79043 28.9774 8.40043 28.9774C7.04043 28.9774 5.91043 29.9674 5.91043 31.6174ZM6.65043 31.0974C6.81043 30.0874 7.54043 29.5374 8.38043 29.5374C9.13043 29.5374 9.77043 30.0474 9.81043 31.0974H6.65043ZM11.7778 32.9374C11.7778 34.0374 12.5278 34.1674 12.9378 34.1674C13.0478 34.1674 13.1278 34.1574 13.1878 34.1474V33.5374C13.1278 33.5474 13.0678 33.5474 13.0278 33.5474C12.7678 33.5474 12.4578 33.4474 12.4578 32.7874V27.0974H11.7778V32.9374ZM13.8987 31.6174C13.8987 33.1674 15.0387 34.2474 16.5387 34.2474C17.1987 34.2474 17.9287 33.9774 18.3987 33.5474L18.0887 33.0274C17.6787 33.3974 17.1087 33.6274 16.5587 33.6274C15.5187 33.6274 14.6387 32.9174 14.6087 31.6374H18.4687C18.4787 31.5274 18.4887 31.4074 18.4887 31.2974C18.4887 30.0474 17.7787 28.9774 16.3887 28.9774C15.0287 28.9774 13.8987 29.9674 13.8987 31.6174ZM14.6387 31.0974C14.7987 30.0874 15.5287 29.5374 16.3687 29.5374C17.1187 29.5374 17.7587 30.0474 17.7987 31.0974H14.6387ZM20.1561 35.2674L19.9061 35.8174C20.3961 36.0774 20.9761 36.2274 21.5461 36.2274C22.7861 36.2274 23.9661 35.6074 23.9661 34.0074V29.0974H23.3061V29.6874C23.3061 29.7974 23.3261 29.8574 23.3261 29.8574H23.3061C22.9961 29.2374 22.3061 28.9774 21.6361 28.9774C20.2861 28.9774 19.4561 30.0074 19.4561 31.5174C19.4561 33.0274 20.3461 34.0974 21.6961 34.0974C22.4761 34.0974 22.9961 33.7374 23.2961 33.1674H23.3161C23.3161 33.1674 23.2761 33.3474 23.2761 33.5374V34.0374C23.2761 35.1574 22.5061 35.6074 21.5261 35.6074C21.0561 35.6074 20.5461 35.4674 20.1561 35.2674ZM20.1461 31.5074C20.1461 30.3074 20.7261 29.5874 21.7061 29.5874C22.5961 29.5874 23.2961 30.0474 23.2961 31.5174C23.2961 32.9974 22.5961 33.4874 21.7961 33.4874C20.8061 33.4874 20.1461 32.7174 20.1461 31.5074ZM25.5864 34.1274H26.2664V31.9974C26.2664 30.9974 26.7364 29.7274 27.8664 29.7274C27.9664 29.7274 28.0864 29.7374 28.1164 29.7474V29.0774C28.0364 29.0574 27.9364 29.0474 27.8464 29.0474C27.0664 29.0474 26.4864 29.6674 26.2364 30.4274H26.2164C26.2164 30.4274 26.2564 30.2474 26.2564 30.0274V29.0974H25.5864V34.1274ZM28.6718 32.7774C28.6718 33.7474 29.5218 34.2474 30.3718 34.2474C31.1818 34.2474 31.8118 33.7274 32.0718 33.1174H32.0918C32.0918 33.1174 32.0618 33.2874 32.0618 33.5374V34.1274H32.7118V30.9074C32.7118 29.6474 32.0418 28.9774 30.8318 28.9774C30.1618 28.9774 29.4518 29.2074 29.0518 29.5474L29.3618 30.0674C29.7718 29.7674 30.2818 29.5874 30.7918 29.5874C31.5018 29.5874 32.0318 29.9174 32.0318 30.8874V31.0274H31.7318C30.7718 31.0274 28.6718 31.1274 28.6718 32.7774ZM29.3618 32.7174C29.3618 31.5974 30.9618 31.5674 31.7418 31.5674H32.0318V31.7974C32.0318 32.6774 31.4618 33.6774 30.4918 33.6774C29.7418 33.6774 29.3618 33.1874 29.3618 32.7174ZM34.2778 34.1274H34.9578V31.6974C34.9578 30.6774 35.6578 29.6074 36.6778 29.6074C37.6278 29.6074 37.7378 30.3374 37.7378 31.0974V34.1274H38.4178V31.6974C38.4178 30.6574 39.0978 29.6074 40.1078 29.6074C41.0178 29.6074 41.1878 30.2674 41.1878 31.0974V34.1274H41.8678V30.9274C41.8678 29.6874 41.4178 28.9774 40.1978 28.9774C39.3578 28.9774 38.6278 29.5974 38.3478 30.2374H38.3278C38.1878 29.4174 37.7078 28.9774 36.7778 28.9774C35.9878 28.9774 35.1778 29.6074 34.9278 30.2874H34.9078C34.9078 30.2874 34.9478 30.1074 34.9478 29.8874V29.0974H34.2778V34.1274Z", "fill", "#45B9F5"], ["y", "37.0732", "width", "43", "height", "0.995483", "fill", "#45B9F5"], ["d", "M12.4834 34.1274H13.2234L15.8234 27.0974H15.0834L13.1334 32.4374C13.0034 32.7974 12.8634 33.3374 12.8634 33.3374H12.8434C12.8434 33.3374 12.6934 32.7974 12.5734 32.4374L10.6234 27.0974H9.88336L12.4834 34.1274ZM16.7917 27.9474H17.5317V27.0974H16.7917V27.9474ZM16.8217 34.1274H17.5017V29.0974H16.8217V34.1274ZM19.1264 34.1274H19.7764V33.6274C19.7764 33.3874 19.7464 33.2174 19.7464 33.2174H19.7664C20.0864 33.8474 20.7264 34.2474 21.4364 34.2474C22.7664 34.2474 23.7064 33.2074 23.7064 31.6074C23.7064 30.0574 22.8764 28.9774 21.5164 28.9774C20.7464 28.9774 20.0964 29.3774 19.7964 29.9974H19.7764C19.7764 29.9974 19.8064 29.8174 19.8064 29.5774V27.0974H19.1264V34.1274ZM19.7864 31.6274C19.7864 30.1974 20.5764 29.5974 21.4164 29.5974C22.3564 29.5974 23.0164 30.3874 23.0164 31.6174C23.0164 32.8974 22.2764 33.6374 21.3864 33.6374C20.3164 33.6374 19.7864 32.6374 19.7864 31.6274ZM24.6751 31.6174C24.6751 33.1674 25.8151 34.2474 27.3151 34.2474C27.9751 34.2474 28.7051 33.9774 29.1751 33.5474L28.8651 33.0274C28.4551 33.3974 27.8851 33.6274 27.3351 33.6274C26.2951 33.6274 25.4151 32.9174 25.3851 31.6374H29.2451C29.2551 31.5274 29.2651 31.4074 29.2651 31.2974C29.2651 30.0474 28.5551 28.9774 27.1651 28.9774C25.8051 28.9774 24.6751 29.9674 24.6751 31.6174ZM25.4151 31.0974C25.5751 30.0874 26.3051 29.5374 27.1451 29.5374C27.8951 29.5374 28.5351 30.0474 28.5751 31.0974H25.4151ZM30.5424 34.1274H31.2224V31.9974C31.2224 30.9974 31.6924 29.7274 32.8224 29.7274C32.9224 29.7274 33.0424 29.7374 33.0724 29.7474V29.0774C32.9924 29.0574 32.8924 29.0474 32.8024 29.0474C32.0224 29.0474 31.4424 29.6674 31.1924 30.4274H31.1724C31.1724 30.4274 31.2124 30.2474 31.2124 30.0274V29.0974H30.5424V34.1274Z", "fill", "#7C72B2"], ["y", "37.0732", "width", "43", "height", "0.995483", "fill", "#7C72B2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M24.479 18.9474H20.707L18.411 21.0399C18.337 21.1066 18.242 21.1415 18.146 21.1415C18.091 21.1415 18.037 21.1305 17.985 21.1066C17.842 21.0439 17.75 20.9025 17.75 20.7453V18.4188C14.897 17.281 13 14.4916 13 11.3857V7.799C13 3.62991 16.374 0.237305 20.52 0.237305H24.479C28.626 0.237305 32 3.62991 32 7.799V11.3857C32 15.5558 28.626 18.9474 24.479 18.9474ZM31.208 7.799C31.208 4.06792 28.19 1.03369 24.479 1.03369H20.52C16.81 1.03369 13.792 4.06792 13.792 7.799V11.3857C13.792 14.2477 15.595 16.8141 18.278 17.7668C18.436 17.8245 18.542 17.9738 18.542 18.1421V19.8463L20.288 18.2556C20.361 18.1879 20.456 18.151 20.554 18.151H24.479C28.19 18.151 31.208 15.1168 31.208 11.3857V7.799ZM28.362 9.23946C28.326 9.24942 28.29 9.25439 28.254 9.25439C28.082 9.25439 27.923 9.13892 27.874 8.96371C27.208 6.59147 25.329 4.69607 22.97 4.02213C22.76 3.96141 22.638 3.74141 22.698 3.52937C22.758 3.31733 22.976 3.19389 23.187 3.25561C25.808 4.00521 27.896 6.11066 28.636 8.74769C28.695 8.95973 28.572 9.17973 28.362 9.23946ZM25.175 8.49086C25.234 8.7019 25.111 8.9229 24.901 8.98063C24.865 8.99059 24.829 8.99656 24.793 8.99656C24.62 8.99656 24.462 8.88208 24.413 8.70588C24.246 8.11257 23.776 7.63972 23.187 7.47049C22.976 7.41076 22.855 7.18976 22.914 6.97971C22.974 6.76767 23.193 6.64423 23.404 6.70496C24.255 6.94885 24.934 7.63375 25.175 8.49086ZM22.869 5.38395C22.928 5.17191 23.147 5.04848 23.358 5.1102C25.012 5.58305 26.33 6.91202 26.797 8.57647C26.856 8.78851 26.734 9.00751 26.524 9.06824C26.487 9.07819 26.451 9.08416 26.416 9.08416C26.243 9.08416 26.085 8.9667 26.035 8.79348C25.642 7.39085 24.533 6.27292 23.141 5.87473C22.931 5.81599 22.809 5.59599 22.869 5.38395ZM23.541 11.314L23.656 11.1378C23.829 10.8701 24.095 10.6839 24.406 10.6182C24.716 10.5555 25.032 10.6132 25.298 10.7884L27.731 12.3762C27.914 12.4967 27.967 12.7436 27.848 12.9267L26.986 14.2627C26.607 14.849 25.971 15.1686 25.323 15.1686C24.953 15.1686 24.58 15.064 24.248 14.849C24.159 14.8042 21.254 13.2821 19.645 11.6326C18.042 9.99205 17.05 8.20913 17.008 8.13547C16.998 8.11655 16.989 8.09764 16.982 8.07773C16.821 7.63275 16.332 6.2779 17.38 5.36006L18.575 4.3158C18.74 4.17145 18.99 4.18937 19.133 4.35562L21.036 6.55663C21.466 7.05437 21.414 7.80995 20.92 8.24199L20.632 8.49384C21.327 10.5187 22.488 10.9636 23.541 11.314ZM19.797 8.4819C19.75 8.33158 19.797 8.16832 19.915 8.06579L20.401 7.64171C20.568 7.49537 20.585 7.24849 20.439 7.07926L18.796 5.17789L17.899 5.96133C17.457 6.34659 17.402 6.89111 17.715 7.7751C17.844 8.00108 18.788 9.61874 20.21 11.0751C21.731 12.6341 24.617 14.1462 24.646 14.1611C25.228 14.5394 25.965 14.3821 26.322 13.8296L26.968 12.8282L24.867 11.4554C24.778 11.3957 24.673 11.3758 24.569 11.3977C24.466 11.4196 24.378 11.4803 24.32 11.5719L24.039 12.0059C23.941 12.1572 23.754 12.2239 23.582 12.1662L23.411 12.1084C22.235 11.7212 20.625 11.1886 19.797 8.4819Z", "fill", "#7C72B2"], ["width", "47", "height", "39", "viewBox", "0 0 47 39", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M23.5 19.1505C21.768 19.1505 20.079 18.6846 18.604 17.7996L14.838 18.9524C14.712 18.9912 14.573 18.9593 14.477 18.8657C14.381 18.7752 14.343 18.6378 14.378 18.5104C14.385 18.4835 15.063 16.0087 15.438 14.7006C14.496 13.1995 14 11.4733 14 9.69336C14 4.47802 18.261 0.236267 23.5 0.236267C28.738 0.236267 33 4.47802 33 9.69336C33 14.9077 28.738 19.1505 23.5 19.1505ZM23.5 0.963965C18.665 0.963965 14.731 4.88119 14.731 9.69336C14.731 11.3877 15.218 13.0302 16.141 14.4448C16.199 14.5334 16.215 14.6419 16.186 14.7425C15.934 15.6175 15.5 17.1874 15.259 18.0634L18.547 17.056C18.582 17.046 18.618 17.04 18.654 17.04C18.722 17.04 18.789 17.0589 18.848 17.0958C20.24 17.9638 21.849 18.4247 23.5 18.4247C28.335 18.4247 32.269 14.5075 32.269 9.69336C32.269 4.88119 28.335 0.963965 23.5 0.963965ZM26.224 15.4174C25.87 15.4174 25.493 15.3885 25.09 15.3278C21.543 14.7992 18.762 11.539 17.678 8.73371C16.691 6.17731 18.768 4.06888 18.857 3.98028C18.908 3.92951 18.973 3.89566 19.044 3.88173C19.777 3.73639 20.257 3.76824 20.47 3.98028C20.682 4.19132 21.856 6.28383 21.856 6.78456C21.856 7.26936 21.617 7.69741 20.955 8.37534C21.05 8.9348 21.7 9.75408 22.732 10.6122C23.744 11.4494 24.761 12.0258 24.979 12.0596C25.167 12.0208 25.809 11.318 26.302 10.5833C26.315 10.5644 26.33 10.5455 26.347 10.5296C26.484 10.3912 26.843 10.224 27.317 10.4589C27.487 10.5445 27.718 10.6948 28.038 10.9029C28.457 11.1756 29.031 11.5489 29.706 11.9222C29.841 11.9959 29.915 12.1472 29.889 12.2995C29.542 14.3721 28.311 15.4174 26.224 15.4174ZM27.638 11.5121C27.35 11.324 27.122 11.1766 26.99 11.1109C26.926 11.0781 26.881 11.0691 26.855 11.0671C26.393 11.746 25.583 12.7853 24.961 12.7853C24.247 12.7853 20.211 10.1423 20.211 8.23896C20.211 8.14339 20.25 8.04882 20.318 7.98113C21.062 7.24049 21.125 6.97569 21.125 6.78456C21.087 6.49089 20.225 4.87223 19.976 4.5268C19.857 4.50789 19.572 4.5278 19.301 4.57458C18.968 4.94889 17.64 6.61035 18.36 8.47091C19.086 10.3494 21.448 14.0476 25.198 14.6081C28.093 15.0401 28.851 13.7281 29.122 12.4299C28.525 12.0885 28.019 11.759 27.638 11.5121Z", "fill", "#2AAB1F"], ["d", "M2.64266 34.1274H3.47266L4.83266 29.1774C4.96266 28.7274 5.08266 28.1274 5.08266 28.1274H5.11266C5.11266 28.1274 5.23266 28.7274 5.36266 29.1774L6.72266 34.1274H7.54266L9.42266 27.0974H8.70266L7.27266 32.5574C7.18266 32.9174 7.12266 33.3074 7.12266 33.3074H7.10266C7.10266 33.3074 7.03266 32.9274 6.93266 32.5574L5.43266 27.0974H4.77266L3.27266 32.5574C3.16266 32.9274 3.09266 33.3074 3.09266 33.3074H3.07266C3.07266 33.3074 3.00266 32.9174 2.91266 32.5574L1.55266 27.0974H0.822656L2.64266 34.1274ZM10.5502 34.1274H11.2302V31.6974C11.2302 30.4874 12.0802 29.6174 13.1402 29.6174C14.1102 29.6174 14.2402 30.3174 14.2402 31.1074V34.1274H14.9202V30.9274C14.9202 29.6874 14.4802 28.9774 13.2302 28.9774C12.0902 28.9774 11.4102 29.7974 11.2202 30.2674H11.2002C11.2002 30.2674 11.2302 30.0874 11.2302 29.8574V27.0974H10.5502V34.1274ZM16.0477 32.7774C16.0477 33.7474 16.8977 34.2474 17.7477 34.2474C18.5577 34.2474 19.1877 33.7274 19.4477 33.1174H19.4677C19.4677 33.1174 19.4377 33.2874 19.4377 33.5374V34.1274H20.0877V30.9074C20.0877 29.6474 19.4177 28.9774 18.2077 28.9774C17.5377 28.9774 16.8277 29.2074 16.4277 29.5474L16.7377 30.0674C17.1477 29.7674 17.6577 29.5874 18.1677 29.5874C18.8777 29.5874 19.4077 29.9174 19.4077 30.8874V31.0274H19.1077C18.1477 31.0274 16.0477 31.1274 16.0477 32.7774ZM16.7377 32.7174C16.7377 31.5974 18.3377 31.5674 19.1177 31.5674H19.4077V31.7974C19.4077 32.6774 18.8377 33.6774 17.8677 33.6774C17.1177 33.6774 16.7377 33.1874 16.7377 32.7174ZM21.8338 32.2974C21.8338 33.9774 23.0138 34.1674 23.5938 34.1674C23.7238 34.1674 23.8238 34.1574 23.8838 34.1474V33.5374C23.7938 33.5574 23.7238 33.5574 23.6538 33.5574C23.2638 33.5574 22.5138 33.3974 22.5138 32.2274V29.7074H23.7837V29.1374H22.5138V27.7074H21.8438V29.1374H21.1737V29.7074H21.8338V32.2974ZM24.4657 33.5174C24.9457 34.0174 25.6657 34.2474 26.3357 34.2474C27.3257 34.2474 28.0357 33.6574 28.0357 32.8274C28.0357 31.1674 25.3457 31.5074 25.3457 30.3574C25.3457 29.8074 25.8257 29.5774 26.3557 29.5774C26.8057 29.5774 27.3257 29.7474 27.6157 30.0374L27.9357 29.5274C27.5257 29.1374 26.9357 28.9774 26.3857 28.9774C25.4657 28.9774 24.6757 29.4574 24.6757 30.3774C24.6757 32.0274 27.3557 31.7174 27.3557 32.8374C27.3557 33.3674 26.9057 33.6474 26.3457 33.6474C25.7957 33.6474 25.2057 33.4274 24.8257 33.0374L24.4657 33.5174ZM28.6416 34.1274H29.3716L30.1716 31.8874H33.0016L33.8116 34.1274H34.5416L31.9616 27.0974H31.2216L28.6416 34.1274ZM30.3816 31.2874L31.3116 28.7374C31.4316 28.4074 31.5816 27.8174 31.5816 27.8174H31.6016C31.6016 27.8174 31.7516 28.4074 31.8716 28.7374L32.7916 31.2874H30.3816ZM35.56 36.1274H36.24V33.6874C36.24 33.4274 36.21 33.2474 36.21 33.2474H36.23C36.56 33.8774 37.18 34.2474 37.89 34.2474C39.2 34.2474 40.14 33.2074 40.14 31.6074C40.14 30.0574 39.31 28.9774 37.95 28.9774C37.17 28.9774 36.51 29.3674 36.2 30.0174H36.18C36.18 30.0174 36.21 29.8474 36.21 29.6274V29.0974H35.56V36.1274ZM36.22 31.6274C36.22 30.1974 37.01 29.5974 37.85 29.5974C38.79 29.5974 39.45 30.3874 39.45 31.6174C39.45 32.8974 38.71 33.6374 37.82 33.6374C36.79 33.6374 36.22 32.6374 36.22 31.6274ZM41.4487 36.1274H42.1287V33.6874C42.1287 33.4274 42.0987 33.2474 42.0987 33.2474H42.1187C42.4487 33.8774 43.0687 34.2474 43.7787 34.2474C45.0887 34.2474 46.0287 33.2074 46.0287 31.6074C46.0287 30.0574 45.1987 28.9774 43.8387 28.9774C43.0587 28.9774 42.3987 29.3674 42.0887 30.0174H42.0687C42.0687 30.0174 42.0987 29.8474 42.0987 29.6274V29.0974H41.4487V36.1274ZM42.1087 31.6274C42.1087 30.1974 42.8987 29.5974 43.7387 29.5974C44.6787 29.5974 45.3387 30.3874 45.3387 31.6174C45.3387 32.8974 44.5987 33.6374 43.7087 33.6374C42.6787 33.6374 42.1087 32.6374 42.1087 31.6274Z", "fill", "#2AAB1F"], ["y", "37.0732", "width", "47", "height", "0.995483", "fill", "#2AAB1F"], ["width", "23", "height", "22", "viewBox", "0 0 23 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.016 21.2743C15.948 21.2743 14.17 19.9941 13.418 18.1773H0.383C0.172 18.1773 0 18.0051 0 17.7901V0.756365C0 0.543331 0.172 0.370117 0.383 0.370117H21.85C22.061 0.370117 22.233 0.543331 22.233 0.756365V13.5722C22.716 14.3477 23 15.2606 23 16.2421C23 19.0175 20.764 21.2743 18.016 21.2743ZM13.722 13.7016C14.589 12.2134 16.187 11.2099 18.016 11.2099C18.183 11.2099 18.349 11.2179 18.513 11.2348C18.575 11.2408 18.636 11.2527 18.698 11.2617C18.798 11.2756 18.899 11.2876 18.997 11.3085C19.023 11.3135 19.048 11.3194 19.074 11.3254L15.358 7.88602L11.838 11.7784L13.681 13.6379C13.699 13.6578 13.708 13.6817 13.722 13.7016ZM21.467 1.14361H0.766V17.4028H13.171C13.169 17.3949 13.169 17.3879 13.167 17.3809C13.13 17.2217 13.101 17.0584 13.08 16.8912C13.076 16.8633 13.07 16.8354 13.067 16.8055C13.046 16.6214 13.033 16.4332 13.033 16.2421C13.033 15.5522 13.172 14.8962 13.421 14.2979C13.319 14.2999 13.216 14.2651 13.139 14.1874L9.19 10.1975L2.936 15.7593C2.863 15.823 2.773 15.8559 2.683 15.8559C2.577 15.8559 2.471 15.8121 2.395 15.7245C2.255 15.5632 2.271 15.3183 2.43 15.1769L8.953 9.37526C9.105 9.24186 9.334 9.24883 9.477 9.39417L11.295 11.2298L15.05 7.07569C15.118 7.00103 15.214 6.95623 15.316 6.95126C15.419 6.94628 15.517 6.98311 15.592 7.0528L20.192 11.3115C20.318 11.4279 20.344 11.6091 20.276 11.7565C20.305 11.7734 20.335 11.7893 20.364 11.8052C20.407 11.8281 20.447 11.855 20.489 11.8789C20.587 11.9346 20.684 11.9924 20.778 12.0561C20.814 12.08 20.848 12.1069 20.883 12.1318C20.979 12.2004 21.072 12.2681 21.163 12.3428C21.197 12.3717 21.229 12.4025 21.263 12.4314C21.331 12.4901 21.401 12.5479 21.467 12.6116V1.14361ZM21.522 13.8788C21.434 13.7464 21.338 13.62 21.238 13.5005C21.204 13.4577 21.167 13.4209 21.131 13.3801C21.062 13.3034 20.99 13.2298 20.916 13.1591C20.87 13.1133 20.822 13.0695 20.773 13.0267C20.701 12.963 20.626 12.9042 20.55 12.8455C20.501 12.8077 20.453 12.7709 20.403 12.735C20.28 12.6494 20.154 12.5688 20.023 12.4971C19.991 12.4802 19.958 12.4662 19.926 12.4493C19.818 12.3956 19.707 12.3418 19.594 12.295C19.544 12.2741 19.492 12.2572 19.441 12.2393C19.341 12.2024 19.24 12.1696 19.137 12.1397C19.084 12.1258 19.03 12.1118 18.976 12.0989C18.867 12.074 18.757 12.0541 18.645 12.0362C18.597 12.0292 18.55 12.0193 18.501 12.0143C18.342 11.9964 18.18 11.9834 18.016 11.9834C15.692 11.9834 13.8 13.8948 13.8 16.2421C13.8 16.3735 13.808 16.5029 13.819 16.6323C13.826 16.702 13.837 16.7707 13.847 16.8404C13.854 16.8912 13.861 16.9449 13.87 16.9957C13.887 17.0893 13.907 17.1798 13.93 17.2734C13.936 17.2953 13.941 17.3172 13.947 17.3401C13.975 17.4446 14.006 17.5492 14.043 17.6517C14.621 19.3082 16.182 20.5008 18.016 20.5008C20.341 20.5008 22.233 18.5904 22.233 16.2421C22.233 15.3691 21.971 14.5558 21.522 13.8788ZM20.317 16.6293H18.4V18.5646C18.4 18.7796 18.228 18.9518 18.016 18.9518C17.805 18.9518 17.633 18.7796 17.633 18.5646V16.6293H15.717C15.505 16.6293 15.333 16.4561 15.333 16.2421C15.333 16.0281 15.505 15.8559 15.717 15.8559H17.633V13.9186C17.633 13.7066 17.805 13.5324 18.016 13.5324C18.228 13.5324 18.4 13.7066 18.4 13.9186V15.8559H20.317C20.528 15.8559 20.7 16.0281 20.7 16.2421C20.7 16.4561 20.528 16.6293 20.317 16.6293ZM6.133 8.94023C4.956 8.94023 3.998 7.97262 3.998 6.78501C3.998 5.59441 4.956 4.6278 6.133 4.6278C7.31 4.6278 8.268 5.59441 8.268 6.78501C8.268 7.97262 7.31 8.94023 6.133 8.94023ZM6.133 5.40228C5.379 5.40228 4.765 6.02247 4.765 6.78501C4.765 7.54556 5.379 8.16575 6.133 8.16575C6.888 8.16575 7.501 7.54556 7.501 6.78501C7.501 6.02247 6.888 5.40228 6.133 5.40228Z", "fill", "#111416"], ["width", "25", "height", "25", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M22.688 24.428H1.48C0.664 24.428 0 23.758 0 22.933V1.496C0 0.671 0.664 0 1.48 0H22.688C23.504 0 24.168 0.671 24.168 1.496V22.933C24.168 23.758 23.504 24.428 22.688 24.428ZM23.181 1.496C23.181 1.221 22.96 0.997999 22.688 0.997999H1.48C1.208 0.997999 0.986 1.221 0.986 1.496V22.933C0.986 23.209 1.208 23.431 1.48 23.431H22.688C22.96 23.431 23.181 23.209 23.181 22.933V1.496ZM17.832 19.791C17.445 20.573 16.887 20.689 16.589 20.689C16.212 20.689 15.936 20.516 15.884 20.481C15.88 20.478 15.877 20.476 15.873 20.474L12.02 17.723L10.588 19.173C10.201 19.563 9.807 19.761 9.417 19.761C8.83 19.761 8.45 19.31 8.318 19.042C8.31 19.026 8.303 19.01 8.296 18.993L6.673 14.539C5.879 14.423 3.867 14.054 2.991 13.195C2.576 12.791 2.385 12.371 2.423 11.945C2.472 11.401 2.885 11.108 2.932 11.076C2.962 11.056 2.994 11.04 3.028 11.028L18.692 4.893C18.703 4.889 18.713 4.886 18.723 4.882C19.01 4.793 19.289 4.747 19.553 4.747C20.512 4.747 21.208 5.382 21.208 6.257C21.208 6.295 21.204 6.332 21.196 6.369C20.905 7.635 18.337 18.771 17.832 19.791ZM19.552 5.743C19.393 5.743 19.218 5.773 19.032 5.829L3.461 11.925C3.438 11.951 3.408 11.993 3.405 12.039C3.403 12.077 3.416 12.225 3.677 12.479C4.357 13.146 6.37 13.506 7.089 13.588C7.274 13.609 7.431 13.734 7.496 13.911L9.207 18.607C9.236 18.65 9.319 18.764 9.417 18.764C9.459 18.764 9.618 18.743 9.89 18.467L11.616 16.723C11.786 16.55 12.053 16.528 12.25 16.667L16.428 19.649C16.454 19.663 16.521 19.692 16.589 19.692C16.745 19.692 16.871 19.504 16.95 19.344C17.291 18.654 19.086 11.136 20.22 6.207C20.186 5.778 19.704 5.743 19.552 5.743ZM10.299 17.212C10.212 17.374 10.045 17.474 9.864 17.474C9.853 17.474 9.842 17.473 9.831 17.472C9.638 17.459 9.47 17.333 9.403 17.15L7.923 13.163C7.838 12.932 7.93 12.676 8.139 12.555L18.003 6.821C18.219 6.695 18.494 6.753 18.644 6.954C18.793 7.155 18.771 7.438 18.591 7.612L11.988 14.039L10.299 17.212ZM8.993 13.209L9.945 15.772L11.156 13.498C11.181 13.453 11.212 13.412 11.248 13.377L15.018 9.708L8.993 13.209Z", "fill", "currentColor"], ["width", "25", "height", "27", "viewBox", "0 0 25 27", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M14.77 24.166H9.97097L7.05097 26.868C6.95697 26.953 6.83597 27 6.71297 27C6.64397 27 6.57497 26.986 6.50897 26.955C6.32697 26.874 6.20997 26.69 6.20997 26.485V23.482C2.58097 22.014 0.167969 18.41 0.167969 14.399V9.765C0.167969 4.382 4.45897 0 9.73397 0H14.77C20.045 0 24.336 4.382 24.336 9.765V14.399C24.336 19.784 20.045 24.166 14.77 24.166ZM23.329 9.765C23.329 4.948 19.49 1.029 14.77 1.029H9.73397C5.01497 1.029 1.17497 4.948 1.17497 9.765V14.399C1.17497 18.096 3.46797 21.41 6.88097 22.641C7.08197 22.714 7.21697 22.909 7.21697 23.126V25.327L9.43897 23.271C9.53097 23.184 9.65197 23.138 9.77697 23.138H14.77C19.49 23.138 23.329 19.218 23.329 14.399V9.765ZM19.709 11.626C19.663 11.64 19.617 11.647 19.572 11.647C19.352 11.647 19.15 11.497 19.087 11.272C18.241 8.206 15.85 5.759 12.85 4.887C12.583 4.81 12.428 4.525 12.504 4.253C12.58 3.978 12.858 3.819 13.126 3.899C16.46 4.868 19.116 7.586 20.057 10.993C20.132 11.266 19.976 11.55 19.709 11.626ZM13.401 8.353C14.485 8.668 15.348 9.552 15.654 10.66C15.73 10.934 15.573 11.217 15.306 11.294C15.26 11.308 15.214 11.314 15.169 11.314C14.949 11.314 14.747 11.165 14.685 10.937C14.473 10.172 13.876 9.561 13.125 9.344C12.858 9.264 12.703 8.979 12.779 8.706C12.855 8.434 13.133 8.275 13.401 8.353ZM12.721 6.647C12.797 6.374 13.076 6.215 13.343 6.292C15.448 6.904 17.124 8.62 17.718 10.77C17.793 11.045 17.638 11.33 17.37 11.406C17.324 11.419 17.278 11.426 17.233 11.426C17.013 11.426 16.812 11.276 16.749 11.05C16.249 9.241 14.838 7.796 13.068 7.282C12.8 7.205 12.645 6.921 12.721 6.647ZM13.577 14.308L13.722 14.08C13.942 13.73 14.281 13.493 14.676 13.409C15.07 13.326 15.473 13.401 15.812 13.627L18.906 15.679C19.139 15.833 19.206 16.152 19.055 16.39L17.958 18.115C17.476 18.871 16.667 19.285 15.842 19.285C15.373 19.285 14.898 19.151 14.476 18.871C14.363 18.813 10.667 16.847 8.62097 14.719C6.58197 12.598 5.31997 10.297 5.26697 10.201C5.25397 10.178 5.24297 10.152 5.23397 10.127C5.02897 9.552 4.40597 7.8 5.73897 6.616L7.25897 5.269C7.46897 5.083 7.78697 5.105 7.96997 5.319L10.39 8.163C10.937 8.805 10.871 9.781 10.242 10.339L9.87597 10.665C10.76 13.278 12.237 13.854 13.577 14.308ZM8.81297 10.651C8.75497 10.455 8.81397 10.245 8.96497 10.11L9.58197 9.563C9.79497 9.374 9.81597 9.055 9.63097 8.837L7.53997 6.382L6.39997 7.393C5.83797 7.892 5.76697 8.594 6.16597 9.736C6.32997 10.027 7.53097 12.118 9.33897 13.999C11.274 16.012 14.945 17.964 14.982 17.984C15.722 18.471 16.659 18.269 17.113 17.555L17.936 16.261L15.263 14.489C15.149 14.412 15.016 14.387 14.884 14.414C14.753 14.443 14.64 14.522 14.567 14.638L14.21 15.199C14.085 15.396 13.846 15.483 13.628 15.407L13.41 15.334C11.915 14.832 9.86697 14.146 8.81297 10.651Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M12.4199 24.428C10.2169 24.428 8.06794 23.825 6.19194 22.681L1.40194 24.172C1.24094 24.223 1.06494 24.18 0.941936 24.062C0.819936 23.943 0.771936 23.765 0.816936 23.601C0.825936 23.566 1.68794 20.369 2.16494 18.68C0.966936 16.742 0.335938 14.511 0.335938 12.214C0.335938 5.479 5.75594 0 12.4199 0C19.0829 0 24.5039 5.479 24.5039 12.214C24.5039 18.949 19.0829 24.428 12.4199 24.428ZM12.4199 0.940001C6.26994 0.940001 1.26494 5.996 1.26494 12.214C1.26494 14.401 1.88594 16.524 3.05994 18.349C3.13294 18.463 3.15394 18.605 3.11594 18.735C2.79594 19.863 2.24394 21.892 1.93694 23.025L6.11894 21.723C6.16394 21.709 6.20994 21.703 6.25594 21.703C6.34194 21.703 6.42794 21.726 6.50294 21.772C8.27394 22.896 10.3189 23.489 12.4199 23.489C18.5699 23.489 23.5739 18.43 23.5739 12.214C23.5739 5.996 18.5699 0.940001 12.4199 0.940001ZM15.8849 19.607C15.4349 19.607 14.9549 19.569 14.4419 19.491C9.93094 18.806 6.39293 14.595 5.01394 10.973C3.75794 7.673 6.40094 4.95 6.51394 4.834C6.57894 4.769 6.66194 4.726 6.75094 4.707C7.68394 4.519 8.29394 4.562 8.56494 4.834C8.83494 5.109 10.3279 7.808 10.3279 8.456C10.3279 9.085 10.0249 9.635 9.18194 10.512C9.30394 11.233 10.1299 12.293 11.4429 13.399C12.7299 14.482 14.0239 15.225 14.3009 15.27C14.5399 15.22 15.3579 14.313 15.9839 13.363C15.9999 13.338 16.0199 13.313 16.0419 13.293C16.2159 13.114 16.6719 12.899 17.2749 13.203C17.4909 13.313 17.7849 13.507 18.1919 13.775C18.7249 14.128 19.4559 14.61 20.3139 15.093C20.4859 15.188 20.5789 15.384 20.5459 15.579C20.1049 18.257 18.5389 19.607 15.8849 19.607ZM17.6839 14.562C17.3169 14.32 17.0269 14.129 16.8599 14.044C16.7779 14.003 16.7209 13.991 16.6869 13.989C16.0999 14.864 15.0699 16.207 14.2789 16.207C13.3699 16.207 8.23694 12.794 8.23694 10.335C8.23694 10.21 8.28594 10.091 8.37294 10.005C9.31894 9.046 9.39894 8.703 9.39894 8.456C9.35094 8.08 8.25493 5.986 7.93793 5.541C7.78593 5.517 7.42294 5.541 7.07894 5.602C6.65494 6.087 4.96594 8.231 5.88194 10.636C6.80493 13.061 9.80994 17.838 14.5799 18.561C18.2619 19.12 19.2259 17.426 19.5709 15.746C18.8109 15.307 18.1679 14.882 17.6839 14.562Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M19.898 25H5.102C2.289 25 0 22.711 0 19.899V5.103C0 2.289 2.289 0 5.102 0H19.898C22.711 0 25 2.289 25 5.103V19.899C25 22.711 22.711 25 19.898 25ZM23.98 5.103C23.98 2.851 22.148 1.02 19.898 1.02H5.102C2.851 1.02 1.02 2.851 1.02 5.103V19.899C1.02 22.149 2.851 23.98 5.102 23.98H19.898C22.148 23.98 23.98 22.149 23.98 19.899V5.103ZM17.347 22.449H7.653C4.84 22.449 2.551 20.161 2.551 17.347V7.397C2.551 4.585 4.84 2.296 7.653 2.296H17.347C20.16 2.296 22.449 4.585 22.449 7.397V17.347C22.449 20.161 20.16 22.449 17.347 22.449ZM21.429 7.397C21.429 5.147 19.597 3.317 17.347 3.317H7.653C5.402 3.317 3.571 5.147 3.571 7.397V17.347C3.571 19.597 5.402 21.429 7.653 21.429H17.347C19.597 21.429 21.429 19.597 21.429 17.347V7.397ZM18.112 8.163C17.128 8.163 16.326 7.363 16.326 6.377C16.326 5.393 17.128 4.592 18.112 4.592C19.097 4.592 19.898 5.393 19.898 6.377C19.898 7.363 19.097 8.163 18.112 8.163ZM18.112 5.611C17.69 5.611 17.347 5.955 17.347 6.377C17.347 6.8 17.69 7.143 18.112 7.143C18.534 7.143 18.878 6.8 18.878 6.377C18.878 5.955 18.534 5.611 18.112 5.611ZM18.112 12.501C18.112 15.594 15.595 18.112 12.5 18.112C9.405 18.112 6.888 15.594 6.888 12.501C6.888 9.405 9.405 6.888 12.5 6.888C15.595 6.888 18.112 9.405 18.112 12.501ZM12.5 7.908C9.968 7.908 7.908 9.967 7.908 12.501C7.908 15.031 9.968 17.092 12.5 17.092C15.032 17.092 17.092 15.031 17.092 12.501C17.092 9.967 15.032 7.908 12.5 7.908ZM12.5 16.071C10.531 16.071 8.929 14.47 8.929 12.501C8.929 10.531 10.531 8.928 12.5 8.928C14.469 8.928 16.071 10.531 16.071 12.501C16.071 14.47 14.469 16.071 12.5 16.071ZM12.5 9.948C11.093 9.948 9.949 11.093 9.949 12.501C9.949 13.906 11.093 15.05 12.5 15.05C13.907 15.05 15.051 13.906 15.051 12.501C15.051 11.093 13.907 9.948 12.5 9.948Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M21.338 0H3.662C1.643 0 0 1.643 0 3.661V21.338C0 23.357 1.643 25 3.662 25H21.338C23.357 25 25 23.357 25 21.338V3.661C25 1.643 23.357 0 21.338 0ZM14.697 15.38V23.535H13.232V15.38C13.232 14.976 12.904 14.648 12.5 14.648H10.303V13.183H12.5C12.904 13.183 13.232 12.855 13.232 12.451V9.521C13.232 7.504 14.875 5.86 16.895 5.86H19.092V7.324H16.895C15.683 7.324 14.697 8.309 14.697 9.521V12.451C14.697 12.855 15.025 13.183 15.43 13.183H18.886L18.52 14.648H15.43C15.025 14.648 14.697 14.976 14.697 15.38ZM23.535 21.338C23.535 22.549 22.549 23.535 21.338 23.535H16.162V16.114H19.092C19.428 16.114 19.721 15.884 19.802 15.558L20.535 12.629C20.65 12.167 20.3 11.719 19.824 11.719H16.162V9.521C16.162 9.117 16.491 8.789 16.895 8.789H19.824C20.229 8.789 20.557 8.461 20.557 8.057V5.127C20.557 4.723 20.229 4.395 19.824 4.395H16.895C14.067 4.395 11.768 6.695 11.768 9.521V11.719H9.57C9.166 11.719 8.838 12.047 8.838 12.451V15.38C8.838 15.786 9.166 16.108 9.57 16.108H11.768V23.535H3.662C2.45 23.535 1.465 22.549 1.465 21.338V3.661C1.465 2.451 2.45 1.465 3.662 1.465H21.338C22.549 1.465 23.535 2.451 23.535 3.661V21.338Z", "fill", "white"]], template: function IconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IconsComponent__svg_svg_0_Template, 4, 0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IconsComponent__svg_svg_1_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IconsComponent__svg_svg_2_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IconsComponent__svg_svg_3_Template, 9, 0, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IconsComponent__svg_svg_4_Template, 10, 0, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IconsComponent__svg_svg_5_Template, 13, 0, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IconsComponent__svg_svg_6_Template, 4, 0, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IconsComponent__svg_svg_7_Template, 4, 0, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IconsComponent__svg_svg_8_Template, 4, 0, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IconsComponent__svg_svg_9_Template, 2, 0, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IconsComponent__svg_svg_10_Template, 2, 0, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, IconsComponent__svg_svg_11_Template, 2, 0, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, IconsComponent__svg_svg_12_Template, 2, 0, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IconsComponent__svg_svg_13_Template, 2, 0, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, IconsComponent__svg_svg_14_Template, 2, 0, "svg", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconLeftMenuBurger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconPinAddress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconArrowRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconShield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconSliderArrowRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconSliderArrowLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconTelegrammMessager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconViberMessager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconWhatsupMessager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconAddImage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconTelegramm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconViber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconWhatsup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconInstagramm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name === "iconFacebook");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  width: inherit;\n  height: inherit;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMvQzovVXNlcnMvTWFvbGluay9EZXNrdG9wL0Rldi9mdXJuaXR1cmUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pY29ucy9pY29ucy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMvaWNvbnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pY29ucy9pY29ucy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG4iLCI6aG9zdCB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon',
                templateUrl: './icons.component.html',
                styleUrls: ['./icons.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/icons/icons.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/icons/icons.module.ts ***!
  \*********************************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.component */ "./src/app/shared/components/icons/icons.component.ts");




class IconsModule {
}
IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsModule_Factory(t) { return new (t || IconsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, { declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/mock/sidebar-menu-items.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/mock/sidebar-menu-items.ts ***!
  \***************************************************/
/*! exports provided: SIDEBAR_MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_MENU_ITEMS", function() { return SIDEBAR_MENU_ITEMS; });
const SIDEBAR_MENU_ITEMS = [
    {
        caption: 'Перетяжка мягкой мебели',
        routerPath: '',
        active: true,
        children: [
            {
                caption: 'Перетяжка прямых диванов',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Перетяжка угловых диванов',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Перетяжка кресел',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Перетяжка стульев',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Перетяжка изголовья кроватей',
                routerPath: '',
                active: true,
            },
            {
                caption: 'Пуфы и банкетки',
                routerPath: '',
                active: false,
            },
        ]
    },
    {
        caption: 'Работа с натуральной кожей',
        routerPath: '',
        active: false,
        children: [
            {
                caption: 'Перетяжка прямых диванов',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Перетяжка угловых диванов',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Перетяжка кресел',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Перетяжка стульев',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Перетяжка изголовья кроватей',
                routerPath: '',
                active: false,
            },
            {
                caption: 'Пуфы и банкетки',
                routerPath: '',
                active: false,
            },
        ]
    },
    {
        caption: 'Портфолио работ',
        routerPath: '',
        active: false,
    },
    {
        caption: 'Каталог тканей',
        routerPath: '',
        active: false,
    },
    {
        caption: 'Бары, кафе, рестораны, офисы',
        routerPath: '',
        active: false,
    },
    {
        caption: 'Доставка и оплата',
        routerPath: '',
        active: false,
    },
    {
        caption: 'Как мы работаем',
        routerPath: '',
        active: false,
    },
    {
        caption: 'О компании',
        routerPath: '',
        active: false,
    },
    {
        caption: 'Отзывы',
        routerPath: '',
        active: false,
    },
    {
        caption: 'Как заказать',
        routerPath: '',
        active: false,
    },
    {
        caption: 'Уход за мебелью',
        routerPath: '',
        active: false,
    },
    {
        caption: 'Вопрос - ответ',
        routerPath: '',
        active: false,
    },
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.module */ "./src/app/shared/components/header/header.module.ts");
/* harmony import */ var _components_company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/company-logo/company-logo.module */ "./src/app/shared/components/company-logo/company-logo.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const MODULES = [
    _components_company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_1__["CompanyLogoModule"],
    _components_header_header_module__WEBPACK_IMPORTED_MODULE_0__["HeaderModule"],
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            MODULES,
        ],
        _components_company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_1__["CompanyLogoModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_0__["HeaderModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _components_company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_1__["CompanyLogoModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_0__["HeaderModule"]], exports: [_components_company_logo_company_logo_module__WEBPACK_IMPORTED_MODULE_1__["CompanyLogoModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_0__["HeaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    MODULES,
                ],
                exports: [
                    MODULES,
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-main-page-main-page-module-es2015.js.map