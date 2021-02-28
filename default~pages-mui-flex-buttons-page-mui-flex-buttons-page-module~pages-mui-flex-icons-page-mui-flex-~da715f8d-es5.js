function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-mui-flex-buttons-page-mui-flex-buttons-page-module~pages-mui-flex-icons-page-mui-flex-~da715f8d"], {
  /***/
  "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js ***!
    \*******************************************************************************/

  /*! exports provided: HIGHLIGHT_OPTIONS, Highlight, HighlightJS, HighlightLoader, HighlightModule, ɵ0 */

  /***/
  function node_modulesNgxHighlightjs__ivy_ngcc__Fesm2015NgxHighlightjsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_OPTIONS", function () {
      return HIGHLIGHT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Highlight", function () {
      return Highlight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightJS", function () {
      return HighlightJS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightLoader", function () {
      return HighlightLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightModule", function () {
      return HighlightModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HIGHLIGHT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HIGHLIGHT_OPTIONS'); // @dynamic

    var HighlightLoader = /*#__PURE__*/function () {
      function HighlightLoader(doc, platformId, _options) {
        var _this2 = this;

        _classCallCheck(this, HighlightLoader);

        this._options = _options; // Stream that emits when hljs library is loaded and ready to use

        this._ready = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.ready = this._ready.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (hljs) {
          return !!hljs;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)); // Check if hljs is already available

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId) && doc.defaultView.hljs) {
          this._ready.next(doc.defaultView.hljs);
        } else {
          // Load hljs library
          this._loadLibrary().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (hljs) {
            if (_this2._options && _this2._options.lineNumbers) {
              // Make hljs available on window object (required for the line numbers library)
              doc.defaultView.hljs = hljs; // Load line numbers library

              return loadLineNumbers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                return _this2._ready.next(hljs);
              }));
            } else {
              _this2._ready.next(hljs);

              return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            console.error('Unable to load hljs library', e);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
          })).subscribe();
        }
      }
      /**
       * Lazy-Load highlight.js library
       */


      _createClass(HighlightLoader, [{
        key: "_loadLibrary",
        value: function _loadLibrary() {
          var _this3 = this;

          return this._options && this._options.languages && Object.keys(this._options.languages).length ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(loadCoreLibrary()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (hljs) {
            return _this3._loadLanguages(hljs);
          })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(loadAllLibrary());
        }
        /**
         * Lazy-load highlight.js languages
         */

      }, {
        key: "_loadLanguages",
        value: function _loadLanguages(hljs) {
          var languages = Object.entries(this._options.languages).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                langName = _ref2[0],
                langLoader = _ref2[1];

            return importModule(langLoader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (langFunc) {
              return hljs.registerLanguage(langName, langFunc);
            }));
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"]).apply(void 0, _toConsumableArray(languages)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return hljs;
          }));
        }
      }]);

      return HighlightLoader;
    }();

    HighlightLoader.ɵfac = function HighlightLoader_Factory(t) {
      return new (t || HighlightLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HIGHLIGHT_OPTIONS, 8));
    };

    HighlightLoader.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [HIGHLIGHT_OPTIONS]
        }]
      }];
    };

    HighlightLoader.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function HighlightLoader_Factory() {
        return new HighlightLoader(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(HIGHLIGHT_OPTIONS, 8));
      },
      token: HighlightLoader,
      providedIn: "root"
    });
    HighlightLoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(HIGHLIGHT_OPTIONS)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object])], HighlightLoader);
    /**
     * Import highlight.js core library
     */

    function loadCoreLibrary() {
      return importModule(Promise.all(
      /*! import() | highlight-js-lib-highlight */
      [__webpack_require__.e("default~highlight-js~highlight-js-lib-highlight"), __webpack_require__.e("highlight-js-lib-highlight")]).then(__webpack_require__.t.bind(null,
      /*! highlight.js/lib/highlight */
      "./node_modules/highlight.js/lib/highlight.js", 7)));
    }
    /**
     * Import highlight.js library with all languages
     */


    function loadAllLibrary() {
      return importModule(Promise.all(
      /*! import() | highlight-js */
      [__webpack_require__.e("default~highlight-js~highlight-js-lib-highlight"), __webpack_require__.e("highlight-js")]).then(__webpack_require__.t.bind(null,
      /*! highlight.js */
      "./node_modules/highlight.js/lib/index.js", 7)));
    }
    /**
     * Import line numbers library
     */


    function loadLineNumbers() {
      return importModule(__webpack_require__.e(
      /*! import() | highlightjs-line-numbers-js */
      "highlightjs-line-numbers-js").then(__webpack_require__.t.bind(null,
      /*! highlightjs-line-numbers.js */
      "./node_modules/highlightjs-line-numbers.js/src/highlightjs-line-numbers.js", 7)));
    }
    /**
     * Map loader response to module object
     */


    var importModule = function importModule(moduleLoader) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(moduleLoader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (module) {
        return !!module && !!module["default"];
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (module) {
        return module["default"];
      }));
    };

    var ɵ0 = importModule;

    var HighlightJS = /*#__PURE__*/function () {
      function HighlightJS(_loader, options) {
        var _this4 = this;

        _classCallCheck(this, HighlightJS);

        this._loader = _loader; // Load highlight.js library on init

        _loader.ready.pipe().subscribe(function (hljs) {
          _this4._hljs = hljs;

          if (options && options.config) {
            // Set global config if present
            hljs.configure(options.config);

            if (hljs.listLanguages().length < 1) {
              console.error('[HighlightJS]: No languages were registered!');
            }
          }
        });
      } // A reference for hljs library


      _createClass(HighlightJS, [{
        key: "highlight",

        /**
         * Core highlighting function.
         * @param name Accepts a language name, or an alias
         * @param value A string with the code to highlight.
         * @param ignore_illegals When present and evaluates to a true value, forces highlighting to finish
         * even in case of detecting illegal syntax for the language instead of throwing an exception.
         * @param continuation An optional mode stack representing unfinished parsing.
         * When present, the function will restart parsing from this state instead of initializing a new one
         */
        value: function highlight(name, value, ignore_illegals, continuation) {
          return this._loader.ready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hljs) {
            return hljs.highlight(name, value, ignore_illegals, continuation);
          }));
        }
        /**
         * Highlighting with language detection.
         * @param value Accepts a string with the code to highlight
         * @param languageSubset An optional array of language names and aliases restricting detection to only those languages.
         * The subset can also be set with configure, but the local parameter overrides the option if set.
         */

      }, {
        key: "highlightAuto",
        value: function highlightAuto(value, languageSubset) {
          return this._loader.ready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hljs) {
            return hljs.highlightAuto(value, languageSubset);
          }));
        }
        /**
         * Post-processing of the highlighted markup.
         * Currently consists of replacing indentation TAB characters and using <br> tags instead of new-line characters.
         * Options are set globally with configure.
         * @param value Accepts a string with the highlighted markup
         */

      }, {
        key: "fixMarkup",
        value: function fixMarkup(value) {
          return this._loader.ready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hljs) {
            return hljs.fixMarkup(value);
          }));
        }
        /**
         * Applies highlighting to a DOM node containing code.
         * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
         * See the class reference for all available language names and aliases.
         * @param block The element to apply highlight on.
         */

      }, {
        key: "highlightBlock",
        value: function highlightBlock(block) {
          return this._loader.ready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hljs) {
            return hljs.highlightBlock(block);
          }));
        }
        /**
         * Configures global options:
         * @param config HighlightJs configuration argument
         */

      }, {
        key: "configure",
        value: function configure(config) {
          return this._loader.ready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hljs) {
            return hljs.configure(config);
          }));
        }
        /**
         * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
         */

      }, {
        key: "initHighlighting",
        value: function initHighlighting() {
          return this._loader.ready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hljs) {
            return hljs.initHighlighting();
          }));
        }
        /**
         * Adds new language to the library under the specified name. Used mostly internally.
         * @param name A string with the name of the language being registered
         * @param language A function that returns an object which represents the language definition.
         * The function is passed the hljs object to be able to use common regular expressions defined within it.
         */

      }, {
        key: "registerLanguage",
        value: function registerLanguage(name, language) {
          return this._loader.ready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (hljs) {
            return hljs.registerLanguage(name, language);
          }));
        }
        /**
         * @return The languages names list.
         */

      }, {
        key: "listLanguages",
        value: function listLanguages() {
          return this._loader.ready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hljs) {
            return hljs.listLanguages();
          }));
        }
        /**
         * Looks up a language by name or alias.
         * @param name Language name
         * @return The language object if found, undefined otherwise.
         */

      }, {
        key: "getLanguage",
        value: function getLanguage(name) {
          return this._loader.ready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hljs) {
            return hljs.getLanguage(name);
          }));
        }
        /**
         * Display line numbers
         * @param el Code element
         */

      }, {
        key: "lineNumbersBlock",
        value: function lineNumbersBlock(el) {
          return this._loader.ready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (hljs) {
            return !!hljs.lineNumbersBlock;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (hljs) {
            return hljs.lineNumbersBlock(el);
          }));
        }
      }, {
        key: "hljs",
        get: function get() {
          return this._hljs;
        }
      }]);

      return HighlightJS;
    }();

    HighlightJS.ɵfac = function HighlightJS_Factory(t) {
      return new (t || HighlightJS)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HighlightLoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HIGHLIGHT_OPTIONS, 8));
    };

    HighlightJS.ctorParameters = function () {
      return [{
        type: HighlightLoader
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [HIGHLIGHT_OPTIONS]
        }]
      }];
    };

    HighlightJS.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function HighlightJS_Factory() {
        return new HighlightJS(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(HighlightLoader), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(HIGHLIGHT_OPTIONS, 8));
      },
      token: HighlightJS,
      providedIn: "root"
    });
    HighlightJS = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(HIGHLIGHT_OPTIONS)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HighlightLoader, Object])], HighlightJS);

    var Highlight = /*#__PURE__*/function () {
      function Highlight(el, _hljs, _sanitizer, _options) {
        _classCallCheck(this, Highlight);

        this._hljs = _hljs;
        this._sanitizer = _sanitizer;
        this._options = _options; // Stream that emits when code string is highlighted

        this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._nativeElement = el.nativeElement;
      }

      _createClass(Highlight, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.code && changes.code.currentValue && changes.code.currentValue !== changes.code.previousValue) {
            this.highlightElement(this.code, this.languages);
          }
        }
        /**
         * Highlighting with language detection and fix markup.
         * @param code Accepts a string with the code to highlight
         * @param languages An optional array of language names and aliases restricting detection to only those languages.
         * The subset can also be set with configure, but the local parameter overrides the option if set.
         */

      }, {
        key: "highlightElement",
        value: function highlightElement(code, languages) {
          var _this5 = this;

          // Set code text before highlighting
          this.setTextContent(code);

          this._hljs.highlightAuto(code, languages).subscribe(function (res) {
            // Set highlighted code
            _this5.setInnerHTML(res.value); // Check if user want to show line numbers


            if (_this5.lineNumbers && _this5._options && _this5._options.lineNumbers) {
              _this5.addLineNumbers();
            } // Forward highlight response to the highlighted output


            _this5.highlighted.emit(res);
          });
        }
      }, {
        key: "addLineNumbers",
        value: function addLineNumbers() {
          var _this6 = this;

          // Clean up line numbers observer
          this.destroyLineNumbersObserver();
          rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"].schedule(function () {
            // Add line numbers
            _this6._hljs.lineNumbersBlock(_this6._nativeElement).subscribe(); // If lines count is 1, the line numbers library will not add numbers
            // Observe changes to add 'hljs-line-numbers' class only when line numbers is added to the code element


            _this6._lineNumbersObs = new MutationObserver(function () {
              if (_this6._nativeElement.firstElementChild && _this6._nativeElement.firstElementChild.tagName.toUpperCase() === 'TABLE') {
                _this6._nativeElement.classList.add('hljs-line-numbers');
              }

              _this6.destroyLineNumbersObserver();
            });

            _this6._lineNumbersObs.observe(_this6._nativeElement, {
              childList: true
            });
          });
        }
      }, {
        key: "destroyLineNumbersObserver",
        value: function destroyLineNumbersObserver() {
          if (this._lineNumbersObs) {
            this._lineNumbersObs.disconnect();

            this._lineNumbersObs = null;
          }
        }
      }, {
        key: "setTextContent",
        value: function setTextContent(content) {
          var _this7 = this;

          rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"].schedule(function () {
            return _this7._nativeElement.textContent = content;
          });
        }
      }, {
        key: "setInnerHTML",
        value: function setInnerHTML(content) {
          var _this8 = this;

          rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"].schedule(function () {
            return _this8._nativeElement.innerHTML = _this8._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, content);
          });
        }
      }]);

      return Highlight;
    }();

    Highlight.ɵfac = function Highlight_Factory(t) {
      return new (t || Highlight)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](HighlightJS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](HIGHLIGHT_OPTIONS, 8));
    };

    Highlight.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: Highlight,
      selectors: [["", "highlight", ""]],
      hostVars: 2,
      hostBindings: function Highlight_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hljs", true);
        }
      },
      inputs: {
        code: ["highlight", "code"],
        languages: "languages",
        lineNumbers: "lineNumbers"
      },
      outputs: {
        highlighted: "highlighted"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    Highlight.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: HighlightJS
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [HIGHLIGHT_OPTIONS]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('highlight'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Highlight.prototype, "code", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Highlight.prototype, "languages", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Highlight.prototype, "lineNumbers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Highlight.prototype, "highlighted", void 0);
    Highlight = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(HIGHLIGHT_OPTIONS)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], HighlightJS, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], Object])], Highlight);

    var HighlightModule = function HighlightModule() {
      _classCallCheck(this, HighlightModule);
    };

    HighlightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HighlightModule
    });
    HighlightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function HighlightModule_Factory(t) {
        return new (t || HighlightModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighlightLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [HIGHLIGHT_OPTIONS]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighlightJS, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: HighlightLoader
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [HIGHLIGHT_OPTIONS]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Highlight, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          host: {
            '[class.hljs]': 'true'
          },
          selector: '[highlight]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: HighlightJS
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [HIGHLIGHT_OPTIONS]
          }]
        }];
      }, {
        highlighted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        code: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['highlight']
        }],
        languages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lineNumbers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HighlightModule, {
        declarations: [Highlight],
        exports: [Highlight]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighlightModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [Highlight],
          exports: [Highlight]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-highlightjs.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/Observable.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Observable.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var canReportError_1 = __webpack_require__(
    /*! ./util/canReportError */
    "./node_modules/rxjs/internal/util/canReportError.js");

    var toSubscriber_1 = __webpack_require__(
    /*! ./util/toSubscriber */
    "./node_modules/rxjs/internal/util/toSubscriber.js");

    var observable_1 = __webpack_require__(
    /*! ./symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    var pipe_1 = __webpack_require__(
    /*! ./util/pipe */
    "./node_modules/rxjs/internal/util/pipe.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var Observable = function () {
      function Observable(subscribe) {
        this._isScalar = false;

        if (subscribe) {
          this._subscribe = subscribe;
        }
      }

      Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };

      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }

        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;

            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }

        return sink;
      };

      Observable.prototype._trySubscribe = function (sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }

          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };

      Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function (value) {
            try {
              next(value);
            } catch (err) {
              reject(err);

              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };

      Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };

      Observable.prototype[observable_1.observable] = function () {
        return this;
      };

      Observable.prototype.pipe = function () {
        var operations = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }

        if (operations.length === 0) {
          return this;
        }

        return pipe_1.pipeFromArray(operations)(this);
      };

      Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var value;

          _this.subscribe(function (x) {
            return value = x;
          }, function (err) {
            return reject(err);
          }, function () {
            return resolve(value);
          });
        });
      };

      Observable.create = function (subscribe) {
        return new Observable(subscribe);
      };

      return Observable;
    }();

    exports.Observable = Observable;

    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }

      if (!promiseCtor) {
        throw new Error('no Promise impl found');
      }

      return promiseCtor;
    } //# sourceMappingURL=Observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/Observer.js":
  /*!************************************************!*\
    !*** ./node_modules/rxjs/internal/Observer.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObserverJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    exports.empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function complete() {}
    }; //# sourceMappingURL=Observer.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscriber.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscriber.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var Observer_1 = __webpack_require__(
    /*! ./Observer */
    "./node_modules/rxjs/internal/Observer.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    var Subscriber = function (_super) {
      __extends(Subscriber, _super);

      function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;

          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }

              break;
            }

          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }

        return _this;
      }

      Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
      };

      Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };

      Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };

      Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          this.isStopped = true;

          this._error(err);
        }
      };

      Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
          this.isStopped = true;

          this._complete();
        }
      };

      Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.isStopped = true;

        _super.prototype.unsubscribe.call(this);
      };

      Subscriber.prototype._next = function (value) {
        this.destination.next(value);
      };

      Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
      };

      Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
      };

      Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };

      return Subscriber;
    }(Subscription_1.Subscription);

    exports.Subscriber = Subscriber;

    var SafeSubscriber = function (_super) {
      __extends(SafeSubscriber, _super);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;

        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);

            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }

        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }

      SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;

          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);

              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();

            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }

            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }

            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.complete = function () {
        var _this = this;

        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;

          if (this._complete) {
            var wrappedComplete = function wrappedComplete() {
              return _this._complete.call(_this._context);
            };

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);

              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();

          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };

      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error('bad call');
        }

        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }

        return false;
      };

      SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;

        _parentSubscriber.unsubscribe();
      };

      return SafeSubscriber;
    }(Subscriber);

    exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscription.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscription.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isArray_1 = __webpack_require__(
    /*! ./util/isArray */
    "./node_modules/rxjs/internal/util/isArray.js");

    var isObject_1 = __webpack_require__(
    /*! ./util/isObject */
    "./node_modules/rxjs/internal/util/isObject.js");

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var UnsubscriptionError_1 = __webpack_require__(
    /*! ./util/UnsubscriptionError */
    "./node_modules/rxjs/internal/util/UnsubscriptionError.js");

    var Subscription = function () {
      function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }

      Subscription.prototype.unsubscribe = function () {
        var errors;

        if (this.closed) {
          return;
        }

        var _a = this,
            _parentOrParents = _a._parentOrParents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;

        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (_parentOrParents instanceof Subscription) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }

        if (isFunction_1.isFunction(_unsubscribe)) {
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }

        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;

          while (++index < len) {
            var sub = _subscriptions[index];

            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];

                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }

        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };

      Subscription.prototype.add = function (teardown) {
        var subscription = teardown;

        if (!teardown) {
          return Subscription.EMPTY;
        }

        switch (typeof teardown) {
          case 'function':
            subscription = new Subscription(teardown);

          case 'object':
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription)) {
              var tmp = subscription;
              subscription = new Subscription();
              subscription._subscriptions = [tmp];
            }

            break;

          default:
            {
              throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }

        var _parentOrParents = subscription._parentOrParents;

        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription) {
          if (_parentOrParents === this) {
            return subscription;
          }

          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }

        var subscriptions = this._subscriptions;

        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }

        return subscription;
      };

      Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;

        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);

          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };

      Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
      }(new Subscription());

      return Subscription;
    }();

    exports.Subscription = Subscription;

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    } //# sourceMappingURL=Subscription.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/config.js":
  /*!**********************************************!*\
    !*** ./node_modules/rxjs/internal/config.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalConfigJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    }; //# sourceMappingURL=config.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/observable/fromEvent.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/observable/fromEvent.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableFromEventJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ../Observable */
    "./node_modules/rxjs/internal/Observable.js");

    var isArray_1 = __webpack_require__(
    /*! ../util/isArray */
    "./node_modules/rxjs/internal/util/isArray.js");

    var isFunction_1 = __webpack_require__(
    /*! ../util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var map_1 = __webpack_require__(
    /*! ../operators/map */
    "./node_modules/rxjs/internal/operators/map.js");

    var toString = function () {
      return Object.prototype.toString;
    }();

    function fromEvent(target, eventName, options, resultSelector) {
      if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
      }

      if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map_1.map(function (args) {
          return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      }

      return new Observable_1.Observable(function (subscriber) {
        function handler(e) {
          if (arguments.length > 1) {
            subscriber.next(Array.prototype.slice.call(arguments));
          } else {
            subscriber.next(e);
          }
        }

        setupSubscription(target, eventName, handler, subscriber, options);
      });
    }

    exports.fromEvent = fromEvent;

    function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
      var unsubscribe;

      if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);

        unsubscribe = function unsubscribe() {
          return source_1.removeEventListener(eventName, handler, options);
        };
      } else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);

        unsubscribe = function unsubscribe() {
          return source_2.off(eventName, handler);
        };
      } else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);

        unsubscribe = function unsubscribe() {
          return source_3.removeListener(eventName, handler);
        };
      } else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
          setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
      } else {
        throw new TypeError('Invalid event target');
      }

      subscriber.add(unsubscribe);
    }

    function isNodeStyleEventEmitter(sourceObj) {
      return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
    }

    function isJQueryStyleEventEmitter(sourceObj) {
      return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
    }

    function isEventTarget(sourceObj) {
      return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
    } //# sourceMappingURL=fromEvent.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/operators/map.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/operators/map.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalOperatorsMapJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics2 = function extendStatics(d, b) {
        _extendStatics2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics2(d, b);
      };

      return function (d, b) {
        _extendStatics2(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    function map(project, thisArg) {
      return function mapOperation(source) {
        if (typeof project !== 'function') {
          throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }

        return source.lift(new MapOperator(project, thisArg));
      };
    }

    exports.map = map;

    var MapOperator = function () {
      function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
      }

      MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };

      return MapOperator;
    }();

    exports.MapOperator = MapOperator;

    var MapSubscriber = function (_super) {
      __extends(MapSubscriber, _super);

      function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;

        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
      }

      MapSubscriber.prototype._next = function (value) {
        var result;

        try {
          result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }

        this.destination.next(result);
      };

      return MapSubscriber;
    }(Subscriber_1.Subscriber); //# sourceMappingURL=map.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/symbol/observable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.observable = function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    }(); //# sourceMappingURL=observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolRxSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.rxSubscriber = function () {
      return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    }();

    exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilUnsubscriptionErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var UnsubscriptionErrorImpl = function () {
      function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
          return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
      }

      UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
    }();

    exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/canReportError.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilCanReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    function canReportError(observer) {
      while (observer) {
        var _a = observer,
            closed_1 = _a.closed,
            destination = _a.destination,
            isStopped = _a.isStopped;

        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }

      return true;
    }

    exports.canReportError = canReportError; //# sourceMappingURL=canReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/hostReportError.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilHostReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      }, 0);
    }

    exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/identity.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/identity.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIdentityJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function identity(x) {
      return x;
    }

    exports.identity = identity; //# sourceMappingURL=identity.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isArray.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isArray.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.isArray = function () {
      return Array.isArray || function (x) {
        return x && typeof x.length === 'number';
      };
    }(); //# sourceMappingURL=isArray.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/isFunction.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsFunctionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isFunction(x) {
      return typeof x === 'function';
    }

    exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isObject.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isObject.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsObjectJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isObject(x) {
      return x !== null && typeof x === 'object';
    }

    exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/pipe.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/pipe.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilPipeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var identity_1 = __webpack_require__(
    /*! ./identity */
    "./node_modules/rxjs/internal/util/identity.js");

    function pipe() {
      var fns = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }

      return pipeFromArray(fns);
    }

    exports.pipe = pipe;

    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }

      if (fns.length === 1) {
        return fns[0];
      }

      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    }

    exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/toSubscriber.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilToSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var Observer_1 = __webpack_require__(
    /*! ../Observer */
    "./node_modules/rxjs/internal/Observer.js");

    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }

        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }

      if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }

      return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }

    exports.toSubscriber = toSubscriber; //# sourceMappingURL=toSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics3 = function extendStatics(d, b) {
      _extendStatics3 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics3(d, b);
    };

    function __extends(d, b) {
      _extendStatics3(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/abstract/interactive.ts":
  /*!**********************************************************!*\
    !*** ./projects/angular-cdk/src/abstract/interactive.ts ***!
    \**********************************************************/

  /*! exports provided: AbstractInteractive */

  /***/
  function projectsAngularCdkSrcAbstractInteractiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractInteractive", function () {
      return AbstractInteractive;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_miscellaneous_fallbackValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/miscellaneous/fallbackValue */
    "./projects/angular-cdk/src/utils/miscellaneous/fallbackValue.ts");

    var ID = 'interactive_';

    var AbstractInteractive = /*#__PURE__*/function () {
      function AbstractInteractive() {
        _classCallCheck(this, AbstractInteractive);

        this.hovered = false;
        this.pressed = false;
        this.focusVisible = false; // @tuiDefaultProp()

        this.pseudoHovered = null; // @tuiDefaultProp()

        this.pseudoPressed = null; // @tuiDefaultProp()

        this.pseudoFocused = null;
        /**
         * Determines if component is focusable with keyboard.
         */
        // @tuiDefaultProp()

        this.focusable = true; // @tuiDefaultProp()

        this.nativeId = '';
        /**
         * Emits 'true' on focus and 'false' on blur.
         */

        this.focusedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pressedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoveredChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.autoIdString = "".concat(ID).concat(AbstractInteractive.autoId++).concat(Date.now());
      }

      _createClass(AbstractInteractive, [{
        key: "updateHovered",
        value: function updateHovered(hovered) {
          if (this.hovered === hovered) {
            return;
          }

          this.hovered = hovered;
          this.hoveredChange.emit(hovered);
        }
      }, {
        key: "updatePressed",
        value: function updatePressed(pressed) {
          if (this.pressed === pressed) {
            return;
          }

          this.pressed = pressed;
          this.pressedChange.emit(pressed);
        }
      }, {
        key: "updateFocused",
        value: function updateFocused(focused) {
          this.focusedChange.emit(focused);
        }
      }, {
        key: "updateFocusVisible",
        value: function updateFocusVisible(focusVisible) {
          if (this.focusVisible === focusVisible) {
            return;
          }

          this.focusVisible = focusVisible;
          this.focusVisibleChange.emit(focusVisible);
        }
      }, {
        key: "computedDisabled",
        get: function get() {
          return this.disabled;
        }
      }, {
        key: "computedHovered",
        get: function get() {
          return !this.computedDisabled && Object(_utils_miscellaneous_fallbackValue__WEBPACK_IMPORTED_MODULE_1__["fallbackValue"])(this.pseudoHovered, this.hovered);
        }
      }, {
        key: "computedPressed",
        get: function get() {
          return !this.computedDisabled && Object(_utils_miscellaneous_fallbackValue__WEBPACK_IMPORTED_MODULE_1__["fallbackValue"])(this.pseudoPressed, this.pressed);
        }
      }, {
        key: "computedFocusable",
        get: function get() {
          return !this.computedDisabled && (this.focusable || this.focused);
        }
      }, {
        key: "computedFocused",
        get: function get() {
          return !this.computedDisabled && Object(_utils_miscellaneous_fallbackValue__WEBPACK_IMPORTED_MODULE_1__["fallbackValue"])(this.pseudoFocused, this.focused);
        }
      }, {
        key: "computedFocusVisible",
        get: function get() {
          return !this.computedDisabled && Object(_utils_miscellaneous_fallbackValue__WEBPACK_IMPORTED_MODULE_1__["fallbackValue"])(this.pseudoFocused, this.focusVisible);
        }
      }, {
        key: "id",
        get: function get() {
          return !!this.nativeId ? this.nativeId : this.autoIdString;
        }
      }]);

      return AbstractInteractive;
    }();

    AbstractInteractive.autoId = 0;

    AbstractInteractive.ɵfac = function AbstractInteractive_Factory(t) {
      return new (t || AbstractInteractive)();
    };

    AbstractInteractive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AbstractInteractive,
      hostVars: 10,
      hostBindings: function AbstractInteractive_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_disabled", ctx.computedDisabled)("_hovered", ctx.computedHovered)("_pressed", ctx.computedPressed)("_focused", ctx.computedFocused)("_focus-visible", ctx.computedFocusVisible);
        }
      },
      inputs: {
        pseudoHovered: "pseudoHovered",
        pseudoPressed: "pseudoPressed",
        pseudoFocused: "pseudoFocused",
        focusable: "focusable",
        nativeId: "nativeId"
      },
      outputs: {
        focusedChange: "focusedChange",
        pressedChange: "pressedChange",
        hoveredChange: "hoveredChange",
        focusVisibleChange: "focusVisibleChange"
      }
    });
    /***/
  },

  /***/
  "./projects/angular-cdk/src/abstract/interactiveGroup.ts":
  /*!***************************************************************!*\
    !*** ./projects/angular-cdk/src/abstract/interactiveGroup.ts ***!
    \***************************************************************/

  /*! exports provided: AbstractInteractiveGroup */

  /***/
  function projectsAngularCdkSrcAbstractInteractiveGroupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractInteractiveGroup", function () {
      return AbstractInteractiveGroup;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./interactive */
    "./projects/angular-cdk/src/abstract/interactive.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../utils/miscellaneous/getOriginalArrayFromQueryList */
    "./projects/angular-cdk/src/utils/miscellaneous/getOriginalArrayFromQueryList.ts");
    /* harmony import */


    var _utils_focus_isNativeFocusedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils/focus/isNativeFocusedIn */
    "./projects/angular-cdk/src/utils/focus/isNativeFocusedIn.ts");
    /* harmony import */


    var _utils_focus_setNativeFocused__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../utils/focus/setNativeFocused */
    "./projects/angular-cdk/src/utils/focus/setNativeFocused.ts");

    var AbstractInteractiveGroup = /*#__PURE__*/function (_interactive__WEBPACK) {
      _inherits(AbstractInteractiveGroup, _interactive__WEBPACK);

      var _super2 = _createSuper(AbstractInteractiveGroup);

      function AbstractInteractiveGroup(changeDetectorRef, elementRef) {
        var _this9;

        _classCallCheck(this, AbstractInteractiveGroup);

        _this9 = _super2.call(this);
        _this9.changeDetectorRef = changeDetectorRef;
        _this9.elementRef = elementRef;
        _this9.activeItemIndex = null;
        _this9.focusableItemIndex = 0;
        _this9.disabled = false;
        _this9.itemsLimit = Infinity;
        _this9.bordered = false;
        _this9.activeItemIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this9.focusableItemIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this9.hoveredItemIndex = null;
        _this9.pressedItemIndex = null;
        _this9.focusedChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        _this9.focusedChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1)).subscribe(function (focused) {
          _this9.updateFocused(focused);
        });

        return _this9;
      }

      _createClass(AbstractInteractiveGroup, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this10 = this;

          if (!this.itemsConnectors) {
            return;
          }

          this.itemsConnectors.changes.subscribe(function () {
            _this10.changeDetectorRef.markForCheck();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.focusedChange$.complete();
        }
      }, {
        key: "onFocusOut",
        value: function onFocusOut(_ref3) {
          var relatedTarget = _ref3.relatedTarget,
              currentTarget = _ref3.currentTarget;

          if (relatedTarget instanceof Element && !currentTarget.contains(relatedTarget)) {
            this.updateFocusedIndex(null);
          }
        }
      }, {
        key: "itemIsActive",
        value: function itemIsActive(itemIndex) {
          return this.activeItemIndex === itemIndex;
        }
      }, {
        key: "itemIsFocusable",
        value: function itemIsFocusable(_ref4, itemIndex) {
          var _this11 = this;

          var disabled = _ref4.disabled;

          if (!this.itemsConnectors || !this.focusable || disabled) {
            return false;
          }

          if (itemIndex === this.focusableItemIndex) {
            return true;
          }

          return !this.itemsConnectors.some( // tslint:disable-next-line: no-shadowed-variable
          function (_ref5, index) {
            var disabled = _ref5.disabled;
            return !disabled && (index < itemIndex || index === _this11.focusableItemIndex);
          });
        }
      }, {
        key: "itemIsHovered",
        value: function itemIsHovered(_ref6, itemIndex) {
          var disabled = _ref6.disabled;
          return !disabled && this.hoveredItemIndex === itemIndex;
        }
      }, {
        key: "itemIsPressed",
        value: function itemIsPressed(_ref7, itemIndex) {
          var disabled = _ref7.disabled;
          return !disabled && this.pressedItemIndex === itemIndex;
        }
      }, {
        key: "useLinkForItem",
        value: function useLinkForItem(_ref8) {
          var routerLink = _ref8.routerLink,
              disabled = _ref8.disabled;
          return routerLink !== null && !disabled;
        }
      }, {
        key: "markForCheck",
        value: function markForCheck() {
          this.changeDetectorRef.markForCheck();
        }
      }, {
        key: "scrollToElement",
        value: function scrollToElement(itemIndex, scrollabeElement) {
          if (!this.focusableElements) {
            return;
          }

          var scrollbar = scrollabeElement.nativeElement;
          var element = this.focusableElements.toArray()[itemIndex].nativeElement;
          var scrolledWidth = scrollbar.offsetWidth + scrollbar.scrollLeft;
          var elementWidth = element.offsetWidth;
          var elementX = scrollbar.scrollLeft + element.getBoundingClientRect().left - scrollbar.getBoundingClientRect().left;
          var elementDidNotFitRight = elementX + elementWidth > scrolledWidth;
          var elementDidNotFitLeft = scrollbar.scrollLeft > elementX;
          var deltaXRight = elementX + elementWidth - scrolledWidth;
          var deltaXLeft = elementX - scrollbar.scrollLeft;

          if (elementDidNotFitRight) {
            scrollbar.scrollLeft += deltaXRight;
          }

          if (elementDidNotFitLeft) {
            scrollbar.scrollLeft += deltaXLeft;
          }
        }
      }, {
        key: "userActivateItem",
        value: function userActivateItem(itemIndex) {
          this.updateFocusableItemIndex(itemIndex);
          this.updateActiveItemIndex(itemIndex);
        }
      }, {
        key: "updateActiveItemIndex",
        value: function updateActiveItemIndex(activeItemIndex) {
          if (this.activeItemIndex === activeItemIndex) {
            return;
          }

          this.activeItemIndex = activeItemIndex;
          this.activeItemIndexChange.emit(activeItemIndex);
        }
      }, {
        key: "updateHoveredItemIndex",
        value: function updateHoveredItemIndex(hovered, itemIndex) {
          this.hoveredItemIndex = hovered ? itemIndex : null;
        }
      }, {
        key: "updatePressedItemIndex",
        value: function updatePressedItemIndex(pressed, itemIndex) {
          this.pressedItemIndex = pressed ? itemIndex : null;
        }
      }, {
        key: "updateFocusableItemIndex",
        value: function updateFocusableItemIndex(focusableItemIndex) {
          if (!this.focusableElements || this.focusableItemIndex === focusableItemIndex) {
            return;
          }

          var element = this.focusableElements.find(function (_item, index) {
            return index === focusableItemIndex;
          });

          if (element) {
            Object(_utils_focus_setNativeFocused__WEBPACK_IMPORTED_MODULE_6__["setNativeFocused"])(element.nativeElement);
          }

          this.focusableItemIndex = focusableItemIndex;
          this.focusableItemIndexChange.emit(focusableItemIndex);
        }
      }, {
        key: "tryChangeActiveItemIndex",
        value: function tryChangeActiveItemIndex(_ref9, itemIndex) {
          var disabled = _ref9.disabled;

          if (disabled) {
            return;
          }

          this.userActivateItem(itemIndex);
        }
      }, {
        key: "updateFocusedIndex",
        value: function updateFocusedIndex(itemIndex) {
          if (itemIndex === null) {
            this.focusedChange$.next(false);
            return;
          }

          this.updateFocusableItemIndex(itemIndex);
          this.focusedChange$.next(true);
        }
      }, {
        key: "moveFocusToPrevItem",
        value: function moveFocusToPrevItem(itemIndex, event) {
          this.processKeyDown(event);

          if (!this.itemsConnectors) {
            return;
          }

          var array = Object(_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__["getOriginalArrayFromQueryList"])(this.itemsConnectors);
          var newIndex = itemIndex - 1;

          do {
            if (newIndex < 0) {
              newIndex = array.length - 1;
            } else if (array[newIndex].disabled) {
              newIndex--;
            } else {
              this.updateFocusableItemIndex(newIndex);
              break;
            }
          } while (itemIndex !== newIndex);
        }
      }, {
        key: "moveFocusToNextItem",
        value: function moveFocusToNextItem(itemIndex, event) {
          this.processKeyDown(event);

          if (!this.itemsConnectors) {
            return;
          }

          var array = Object(_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__["getOriginalArrayFromQueryList"])(this.itemsConnectors);
          var newIndex = itemIndex + 1;

          do {
            if (newIndex >= array.length) {
              newIndex = 0;
            } else if (array[newIndex].disabled) {
              newIndex++;
            } else {
              this.updateFocusableItemIndex(newIndex);
              break;
            }
          } while (itemIndex !== newIndex);
        }
      }, {
        key: "processKeyDown",
        value: function processKeyDown(event) {
          event.preventDefault();
          this.updateFocusVisible(true);
        }
      }, {
        key: "nativeFocusableElement",
        get: function get() {
          if (!this.itemsConnectors || !this.focusableElements) {
            return null;
          }

          var itemsConnectors = Object(_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__["getOriginalArrayFromQueryList"])(this.itemsConnectors);
          var focusableIndex = itemsConnectors.findIndex( // tslint:disable-next-line: no-shadowed-variable
          function (itemsConnectors) {
            return !itemsConnectors.disabled;
          });
          return focusableIndex === -1 ? null : this.focusableElements.find(function (_item, index) {
            return index === focusableIndex;
          }).nativeElement;
        }
      }, {
        key: "focused",
        get: function get() {
          return Object(_utils_focus_isNativeFocusedIn__WEBPACK_IMPORTED_MODULE_5__["isNativeFocusedIn"])(this.elementRef.nativeElement);
        }
      }, {
        key: "focusedZone",
        get: function get() {
          return this.focused ? this.focusableItemIndex : null;
        }
      }]);

      return AbstractInteractiveGroup;
    }(_interactive__WEBPACK_IMPORTED_MODULE_2__["AbstractInteractive"]);

    AbstractInteractiveGroup.ɵfac = function AbstractInteractiveGroup_Factory(t) {
      return new (t || AbstractInteractiveGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    AbstractInteractiveGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AbstractInteractiveGroup,
      hostVars: 2,
      hostBindings: function AbstractInteractiveGroup_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function AbstractInteractiveGroup_focusout_HostBindingHandler($event) {
            return ctx.onFocusOut($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_bordered", ctx.bordered);
        }
      },
      inputs: {
        activeItemIndex: "activeItemIndex",
        focusableItemIndex: "focusableItemIndex",
        disabled: "disabled",
        itemsLimit: "itemsLimit",
        bordered: "bordered"
      },
      outputs: {
        activeItemIndexChange: "activeItemIndexChange",
        focusableItemIndexChange: "focusableItemIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    /***/
  },

  /***/
  "./projects/angular-cdk/src/abstract/interactiveGroupItemConnector.ts":
  /*!****************************************************************************!*\
    !*** ./projects/angular-cdk/src/abstract/interactiveGroupItemConnector.ts ***!
    \****************************************************************************/

  /*! exports provided: AbstractInteractiveGroupItemConnector */

  /***/
  function projectsAngularCdkSrcAbstractInteractiveGroupItemConnectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractInteractiveGroupItemConnector", function () {
      return AbstractInteractiveGroupItemConnector;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AbstractInteractiveGroupItemConnector = /*#__PURE__*/function () {
      function AbstractInteractiveGroupItemConnector(template) {
        _classCallCheck(this, AbstractInteractiveGroupItemConnector);

        this.template = template;
      }

      _createClass(AbstractInteractiveGroupItemConnector, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {// this.parent.markForCheck();
        }
      }]);

      return AbstractInteractiveGroupItemConnector;
    }();

    AbstractInteractiveGroupItemConnector.ɵfac = function AbstractInteractiveGroupItemConnector_Factory(t) {
      return new (t || AbstractInteractiveGroupItemConnector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    AbstractInteractiveGroupItemConnector.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AbstractInteractiveGroupItemConnector,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /***/
  },

  /***/
  "./projects/angular-cdk/src/classes/assert.ts":
  /*!****************************************************!*\
    !*** ./projects/angular-cdk/src/classes/assert.ts ***!
    \****************************************************/

  /*! exports provided: AssertHelper, ASSERT */

  /***/
  function projectsAngularCdkSrcClassesAssertTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssertHelper", function () {
      return AssertHelper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ASSERT", function () {
      return ASSERT;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums_assertLevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../enums/assertLevel */
    "./projects/angular-cdk/src/enums/assertLevel.ts");

    var NOOP = function NOOP() {};

    var AssertHelper = /*#__PURE__*/function () {
      function AssertHelper() {
        _classCallCheck(this, AssertHelper);

        this.bootstrapped = false;
        this.level = _enums_assertLevel__WEBPACK_IMPORTED_MODULE_1__["AssertLevel"].WARN;
      }

      _createClass(AssertHelper, [{
        key: "assert",
        get: function get() {
          if (!this.bootstrapped || !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            return NOOP;
          }

          return Function.prototype.bind.call(console.assert, console);
        }
      }, {
        key: "assertWarn",
        get: function get() {
          if (!this.bootstrapped || this.level < _enums_assertLevel__WEBPACK_IMPORTED_MODULE_1__["AssertLevel"].WARN || !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            return NOOP;
          }

          return Function.prototype.bind.call(console.assert, console);
        }
      }]);

      return AssertHelper;
    }();

    var ASSERT = new AssertHelper();
    /***/
  },

  /***/
  "./projects/angular-cdk/src/constants/pollingTime.ts":
  /*!***********************************************************!*\
    !*** ./projects/angular-cdk/src/constants/pollingTime.ts ***!
    \***********************************************************/

  /*! exports provided: POLLING_TIME */

  /***/
  function projectsAngularCdkSrcConstantsPollingTimeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "POLLING_TIME", function () {
      return POLLING_TIME;
    });

    var POLLING_TIME = 1000 / 15;
    /***/
  },

  /***/
  "./projects/angular-cdk/src/directives/focusVIsible/focusVisible.directive.ts":
  /*!************************************************************************************!*\
    !*** ./projects/angular-cdk/src/directives/focusVIsible/focusVisible.directive.ts ***!
    \************************************************************************************/

  /*! exports provided: FocusVisibleDirective */

  /***/
  function projectsAngularCdkSrcDirectivesFocusVIsibleFocusVisibleDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusVisibleDirective", function () {
      return FocusVisibleDirective;
    });
    /* harmony import */


    var _services_focusVisible_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../services/focusVisible.service */
    "./projects/angular-cdk/src/services/focusVisible.service.ts");
    /* harmony import */


    var _services_destroy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/destroy.service */
    "./projects/angular-cdk/src/services/destroy.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FocusVisibleDirective = function FocusVisibleDirective(focusVisible$) {
      _classCallCheck(this, FocusVisibleDirective);

      this.focusVisibleChange = focusVisible$;
    };

    FocusVisibleDirective.ɵfac = function FocusVisibleDirective_Factory(t) {
      return new (t || FocusVisibleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_focusVisible_service__WEBPACK_IMPORTED_MODULE_0__["FocusVisibleService"]));
    };

    FocusVisibleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: FocusVisibleDirective,
      selectors: [["", "focusVisibleChange", ""]],
      outputs: {
        focusVisibleChange: "focusVisibleChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_destroy_service__WEBPACK_IMPORTED_MODULE_1__["DestroyService"], _services_focusVisible_service__WEBPACK_IMPORTED_MODULE_0__["FocusVisibleService"]])]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FocusVisibleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: '[focusVisibleChange]',
          providers: [_services_destroy_service__WEBPACK_IMPORTED_MODULE_1__["DestroyService"], _services_focusVisible_service__WEBPACK_IMPORTED_MODULE_0__["FocusVisibleService"]]
        }]
      }], function () {
        return [{
          type: _services_focusVisible_service__WEBPACK_IMPORTED_MODULE_0__["FocusVisibleService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_services_focusVisible_service__WEBPACK_IMPORTED_MODULE_0__["FocusVisibleService"]]
          }]
        }];
      }, {
        focusVisibleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-cdk/src/directives/focusVIsible/focusVisible.module.ts":
  /*!*********************************************************************************!*\
    !*** ./projects/angular-cdk/src/directives/focusVIsible/focusVisible.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: FocusVisibleModule */

  /***/
  function projectsAngularCdkSrcDirectivesFocusVIsibleFocusVisibleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusVisibleModule", function () {
      return FocusVisibleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _focusVisible_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./focusVisible.directive */
    "./projects/angular-cdk/src/directives/focusVIsible/focusVisible.directive.ts");

    var FocusVisibleModule = function FocusVisibleModule() {
      _classCallCheck(this, FocusVisibleModule);
    };

    FocusVisibleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FocusVisibleModule
    });
    FocusVisibleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FocusVisibleModule_Factory(t) {
        return new (t || FocusVisibleModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FocusVisibleModule, {
        declarations: [_focusVisible_directive__WEBPACK_IMPORTED_MODULE_1__["FocusVisibleDirective"]],
        exports: [_focusVisible_directive__WEBPACK_IMPORTED_MODULE_1__["FocusVisibleDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusVisibleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_focusVisible_directive__WEBPACK_IMPORTED_MODULE_1__["FocusVisibleDirective"]],
          exports: [_focusVisible_directive__WEBPACK_IMPORTED_MODULE_1__["FocusVisibleDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-cdk/src/directives/focusable/focusable.directive.ts":
  /*!******************************************************************************!*\
    !*** ./projects/angular-cdk/src/directives/focusable/focusable.directive.ts ***!
    \******************************************************************************/

  /*! exports provided: FocusableDirective */

  /***/
  function projectsAngularCdkSrcDirectivesFocusableFocusableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusableDirective", function () {
      return FocusableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FocusableDirective = /*#__PURE__*/function () {
      function FocusableDirective() {
        _classCallCheck(this, FocusableDirective);

        this.focusable = true;
      }

      _createClass(FocusableDirective, [{
        key: "tabIndex",
        get: function get() {
          return this.focusable ? 0 : -1;
        }
      }]);

      return FocusableDirective;
    }();

    FocusableDirective.ɵfac = function FocusableDirective_Factory(t) {
      return new (t || FocusableDirective)();
    };

    FocusableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FocusableDirective,
      selectors: [["", "focusable", ""]],
      hostVars: 1,
      hostBindings: function FocusableDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);
        }
      },
      inputs: {
        focusable: "focusable"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: '[focusable]'
        }]
      }], null, {
        focusable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['focusable']
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['tabIndex']
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-cdk/src/directives/focusable/focusable.module.ts":
  /*!***************************************************************************!*\
    !*** ./projects/angular-cdk/src/directives/focusable/focusable.module.ts ***!
    \***************************************************************************/

  /*! exports provided: FocusableModule */

  /***/
  function projectsAngularCdkSrcDirectivesFocusableFocusableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusableModule", function () {
      return FocusableModule;
    });
    /* harmony import */


    var _focusable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./focusable.directive */
    "./projects/angular-cdk/src/directives/focusable/focusable.directive.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FocusableModule = function FocusableModule() {
      _classCallCheck(this, FocusableModule);
    };

    FocusableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FocusableModule
    });
    FocusableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function FocusableModule_Factory(t) {
        return new (t || FocusableModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FocusableModule, {
        declarations: [_focusable_directive__WEBPACK_IMPORTED_MODULE_0__["FocusableDirective"]],
        exports: [_focusable_directive__WEBPACK_IMPORTED_MODULE_0__["FocusableDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_focusable_directive__WEBPACK_IMPORTED_MODULE_0__["FocusableDirective"]],
          exports: [_focusable_directive__WEBPACK_IMPORTED_MODULE_0__["FocusableDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-cdk/src/directives/hovered/hovered.directive.ts":
  /*!**************************************************************************!*\
    !*** ./projects/angular-cdk/src/directives/hovered/hovered.directive.ts ***!
    \**************************************************************************/

  /*! exports provided: HoveredDirective */

  /***/
  function projectsAngularCdkSrcDirectivesHoveredHoveredDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoveredDirective", function () {
      return HoveredDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_hovered_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/hovered.service */
    "./projects/angular-cdk/src/services/hovered.service.ts");

    var HoveredDirective = function HoveredDirective(_ref10, hoveredService) {
      var nativeElement = _ref10.nativeElement;

      _classCallCheck(this, HoveredDirective);

      this.hoveredChange = hoveredService.createHovered$(nativeElement);
    };

    HoveredDirective.ɵfac = function HoveredDirective_Factory(t) {
      return new (t || HoveredDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hovered_service__WEBPACK_IMPORTED_MODULE_1__["HoveredService"]));
    };

    HoveredDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HoveredDirective,
      selectors: [["", "hoveredChange", ""]],
      outputs: {
        hoveredChange: "hoveredChange"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoveredDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: '[hoveredChange]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]]
          }]
        }, {
          type: _services_hovered_service__WEBPACK_IMPORTED_MODULE_1__["HoveredService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_services_hovered_service__WEBPACK_IMPORTED_MODULE_1__["HoveredService"]]
          }]
        }];
      }, {
        hoveredChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-cdk/src/directives/hovered/hovered.module.ts":
  /*!***********************************************************************!*\
    !*** ./projects/angular-cdk/src/directives/hovered/hovered.module.ts ***!
    \***********************************************************************/

  /*! exports provided: HoveredModule */

  /***/
  function projectsAngularCdkSrcDirectivesHoveredHoveredModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoveredModule", function () {
      return HoveredModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _hovered_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./hovered.directive */
    "./projects/angular-cdk/src/directives/hovered/hovered.directive.ts");

    var HoveredModule = function HoveredModule() {
      _classCallCheck(this, HoveredModule);
    };

    HoveredModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HoveredModule
    });
    HoveredModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HoveredModule_Factory(t) {
        return new (t || HoveredModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HoveredModule, {
        declarations: [_hovered_directive__WEBPACK_IMPORTED_MODULE_1__["HoveredDirective"]],
        exports: [_hovered_directive__WEBPACK_IMPORTED_MODULE_1__["HoveredDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoveredModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_hovered_directive__WEBPACK_IMPORTED_MODULE_1__["HoveredDirective"]],
          exports: [_hovered_directive__WEBPACK_IMPORTED_MODULE_1__["HoveredDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-cdk/src/enums/assertLevel.ts":
  /*!*******************************************************!*\
    !*** ./projects/angular-cdk/src/enums/assertLevel.ts ***!
    \*******************************************************/

  /*! exports provided: AssertLevel */

  /***/
  function projectsAngularCdkSrcEnumsAssertLevelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssertLevel", function () {
      return AssertLevel;
    });

    var AssertLevel;

    (function (AssertLevel) {
      AssertLevel[AssertLevel["ERROR"] = 0] = "ERROR";
      AssertLevel[AssertLevel["WARN"] = 1] = "WARN";
    })(AssertLevel || (AssertLevel = {}));
    /***/

  },

  /***/
  "./projects/angular-cdk/src/observables/focusVisibleObservable.ts":
  /*!************************************************************************!*\
    !*** ./projects/angular-cdk/src/observables/focusVisibleObservable.ts ***!
    \************************************************************************/

  /*! exports provided: focusVisibleObservable */

  /***/
  function projectsAngularCdkSrcObservablesFocusVisibleObservableTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "focusVisibleObservable", function () {
      return focusVisibleObservable;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _fromAliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fromAliases */
    "./projects/angular-cdk/src/observables/fromAliases.ts");
    /* harmony import */


    var _isAlive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./isAlive */
    "./projects/angular-cdk/src/observables/isAlive.ts");
    /* harmony import */


    var _utils_focus_isNativeFocused__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../utils/focus/isNativeFocused */
    "./projects/angular-cdk/src/utils/focus/isNativeFocused.ts");

    var documentMouseUpIsAlive$;
    var documentMouseDownIsAlive$;

    function focusVisibleObservable(element) {
      var elementBlur$ = Object(_fromAliases__WEBPACK_IMPORTED_MODULE_2__["blurFrom"])(element);
      var ownerDocument = element.ownerDocument;

      if (!ownerDocument) {
        throw new Error('element does not have ownerDocument');
      }

      if (!documentMouseDownIsAlive$ || !documentMouseUpIsAlive$) {
        documentMouseUpIsAlive$ = Object(_fromAliases__WEBPACK_IMPORTED_MODULE_2__["mouseUpFrom"])(ownerDocument, {
          capture: true
        }).pipe(Object(_isAlive__WEBPACK_IMPORTED_MODULE_3__["isAlive"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(1));
        documentMouseDownIsAlive$ = Object(_fromAliases__WEBPACK_IMPORTED_MODULE_2__["mouseDownFrom"])(ownerDocument, {
          capture: true
        }).pipe(Object(_isAlive__WEBPACK_IMPORTED_MODULE_3__["isAlive"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(1));
      }

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(_fromAliases__WEBPACK_IMPORTED_MODULE_2__["focusFrom"])(element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)), elementBlur$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function () {
        return !Object(_utils_focus_isNativeFocused__WEBPACK_IMPORTED_MODULE_4__["isNativeFocused"])(element);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["ignoreElements"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["repeat"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["withLatestFrom"])(documentMouseDownIsAlive$, documentMouseUpIsAlive$, function (_event, elementActual, documentActual) {
        return elementActual || documentActual;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (isUserFocus) {
        return !isUserFocus;
      }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMapTo"])(elementBlur$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mapTo"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/observables/fromAliases.ts":
  /*!*************************************************************!*\
    !*** ./projects/angular-cdk/src/observables/fromAliases.ts ***!
    \*************************************************************/

  /*! exports provided: clickFrom, mouseEnterFrom, mouseLeaveFrom, mouseDownFrom, mouseUpFrom, mouseMoveFrom, wheelFrom, blurFrom, focusFrom, focusInFrom, focusOutFrom, scrollFrom, keyDownFrom, keyUpFrom, inputFrom, pasteFrom, dropFrom, selectStartFrom, selectionChangeFrom, dragStartFrom, dragEndFrom, dragOverFrom, dragEnterFrom, dragLeaveFrom, loadFrom, touchStartFrom, touchEndFrom, touchMoveFrom, animationEndFrom */

  /***/
  function projectsAngularCdkSrcObservablesFromAliasesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clickFrom", function () {
      return clickFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseEnterFrom", function () {
      return mouseEnterFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseLeaveFrom", function () {
      return mouseLeaveFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseDownFrom", function () {
      return mouseDownFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseUpFrom", function () {
      return mouseUpFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseMoveFrom", function () {
      return mouseMoveFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "wheelFrom", function () {
      return wheelFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "blurFrom", function () {
      return blurFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "focusFrom", function () {
      return focusFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "focusInFrom", function () {
      return focusInFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "focusOutFrom", function () {
      return focusOutFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scrollFrom", function () {
      return scrollFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "keyDownFrom", function () {
      return keyDownFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "keyUpFrom", function () {
      return keyUpFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "inputFrom", function () {
      return inputFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pasteFrom", function () {
      return pasteFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dropFrom", function () {
      return dropFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectStartFrom", function () {
      return selectStartFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectionChangeFrom", function () {
      return selectionChangeFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dragStartFrom", function () {
      return dragStartFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dragEndFrom", function () {
      return dragEndFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dragOverFrom", function () {
      return dragOverFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dragEnterFrom", function () {
      return dragEnterFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dragLeaveFrom", function () {
      return dragLeaveFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadFrom", function () {
      return loadFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "touchStartFrom", function () {
      return touchStartFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "touchEndFrom", function () {
      return touchEndFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "touchMoveFrom", function () {
      return touchMoveFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animationEndFrom", function () {
      return animationEndFrom;
    });
    /* harmony import */


    var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/internal/observable/fromEvent */
    "./node_modules/rxjs/internal/observable/fromEvent.js");
    /* harmony import */


    var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__);

    function clickFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'click', options);
    }

    function mouseEnterFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'mouseenter', options);
    }

    function mouseLeaveFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'mouseleave', options);
    }

    function mouseDownFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'mousedown', options);
    }

    function mouseUpFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'mouseup', options);
    }

    function mouseMoveFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'mousemove', options);
    }

    function wheelFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'wheel', options);
    }

    function blurFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'blur', options);
    }

    function focusFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'focus', options);
    }

    function focusInFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'focusin', options);
    }

    function focusOutFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'focusout', options);
    }

    function scrollFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'scroll', options);
    }

    function keyDownFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'keydown', options);
    }

    function keyUpFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'keyup', options);
    }

    function inputFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'input', options);
    }

    function pasteFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'paste', options);
    }

    function dropFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'drop', options);
    }

    function selectStartFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'selectstart', options);
    }

    function selectionChangeFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'selectionchange', options);
    }

    function dragStartFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'dragstart', options);
    }

    function dragEndFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'dragend', options);
    }

    function dragOverFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'dragover', options);
    }

    function dragEnterFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'dragenter', options);
    }

    function dragLeaveFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'dragleave', options);
    }

    function loadFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'load', options);
    }

    function touchStartFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'touchstart', options);
    }

    function touchEndFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'touchend', options);
    }

    function touchMoveFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'touchmove', options);
    }

    function animationEndFrom(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'animationend', options);
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/observables/isAlive.ts":
  /*!*********************************************************!*\
    !*** ./projects/angular-cdk/src/observables/isAlive.ts ***!
    \*********************************************************/

  /*! exports provided: IsAliveOperator, isAlive */

  /***/
  function projectsAngularCdkSrcObservablesIsAliveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsAliveOperator", function () {
      return IsAliveOperator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isAlive", function () {
      return isAlive;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var IsAliveSubscriber = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT) {
      _inherits(IsAliveSubscriber, _rxjs__WEBPACK_IMPORT);

      var _super3 = _createSuper(IsAliveSubscriber);

      function IsAliveSubscriber(destination, lifespan) {
        var _this12;

        _classCallCheck(this, IsAliveSubscriber);

        _this12 = _super3.call(this, destination);
        _this12.lifespan = lifespan;
        return _this12;
      }

      _createClass(IsAliveSubscriber, [{
        key: "_next",
        value: function _next(_value) {
          var _this13 = this;

          if (!this.timeoutId) {
            this.destination.next(true);
          } else {
            clearTimeout(this.timeoutId);
          }

          this.timeoutId = setTimeout(function () {
            _this13.timeoutId = null;

            _this13.destination.next(false);
          }, this.lifespan);
        }
      }]);

      return IsAliveSubscriber;
    }(rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

    var IsAliveOperator = /*#__PURE__*/function () {
      function IsAliveOperator(lifespan) {
        _classCallCheck(this, IsAliveOperator);

        this.lifespan = lifespan;
      }

      _createClass(IsAliveOperator, [{
        key: "call",
        value: function call(subscriber, source$) {
          return source$.subscribe(new IsAliveSubscriber(subscriber, this.lifespan));
        }
      }]);

      return IsAliveOperator;
    }();

    function isAlive() {
      var lifespan = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return function (source$) {
        return source$.lift(new IsAliveOperator(lifespan));
      };
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/observables/watch.ts":
  /*!*******************************************************!*\
    !*** ./projects/angular-cdk/src/observables/watch.ts ***!
    \*******************************************************/

  /*! exports provided: watch */

  /***/
  function projectsAngularCdkSrcObservablesWatchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "watch", function () {
      return watch;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function watch(changeDetectorRef) {
      return function (source) {
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () {
          changeDetectorRef.markForCheck();
        }));
      };
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/observables/zoneFree.ts":
  /*!**********************************************************!*\
    !*** ./projects/angular-cdk/src/observables/zoneFree.ts ***!
    \**********************************************************/

  /*! exports provided: ZoneFreeOperator, zoneFree */

  /***/
  function projectsAngularCdkSrcObservablesZoneFreeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZoneFreeOperator", function () {
      return ZoneFreeOperator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "zoneFree", function () {
      return zoneFree;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ZoneFreeSubscriber = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT2) {
      _inherits(ZoneFreeSubscriber, _rxjs__WEBPACK_IMPORT2);

      var _super4 = _createSuper(ZoneFreeSubscriber);

      function ZoneFreeSubscriber(destination, ngZone) {
        var _this14;

        _classCallCheck(this, ZoneFreeSubscriber);

        _this14 = _super4.call(this, destination);
        _this14.ngZone = ngZone;
        return _this14;
      }

      _createClass(ZoneFreeSubscriber, [{
        key: "_next",
        value: function _next(value) {
          var _this15 = this;

          this.runInOptionslZone(function () {
            _get(_getPrototypeOf(ZoneFreeSubscriber.prototype), "_next", _this15).call(_this15, value);
          });
        }
      }, {
        key: "_error",
        value: function _error(err) {
          var _this16 = this;

          this.runInOptionslZone(function () {
            _get(_getPrototypeOf(ZoneFreeSubscriber.prototype), "_error", _this16).call(_this16, err);
          });
        }
      }, {
        key: "_complete",
        value: function _complete() {
          var _this17 = this;

          this.runInOptionslZone(function () {
            _get(_getPrototypeOf(ZoneFreeSubscriber.prototype), "_complete", _this17).call(_this17);
          });
        }
      }, {
        key: "runInOptionslZone",
        value: function runInOptionslZone(handler) {
          if (this.ngZone === null) {
            handler();
            return;
          }

          this.ngZone.run(function () {
            handler();
          });
        }
      }]);

      return ZoneFreeSubscriber;
    }(rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

    var ZoneFreeOperator = /*#__PURE__*/function () {
      function ZoneFreeOperator(ngZone) {
        _classCallCheck(this, ZoneFreeOperator);

        this.ngZone = ngZone;
      }

      _createClass(ZoneFreeOperator, [{
        key: "call",
        value: function call(subscriber, source$) {
          var ngZone = _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"].isInAngularZone() ? this.ngZone : null;
          return this.ngZone.runOutsideAngular(function () {
            return source$.subscribe(new ZoneFreeSubscriber(subscriber, ngZone));
          });
        }
      }]);

      return ZoneFreeOperator;
    }();

    function zoneFree(ngZone) {
      return function (source$) {
        return source$.lift(new ZoneFreeOperator(ngZone));
      };
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/services/destroy.service.ts":
  /*!**************************************************************!*\
    !*** ./projects/angular-cdk/src/services/destroy.service.ts ***!
    \**************************************************************/

  /*! exports provided: DestroyService */

  /***/
  function projectsAngularCdkSrcServicesDestroyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestroyService", function () {
      return DestroyService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DestroyService = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT3) {
      _inherits(DestroyService, _rxjs__WEBPACK_IMPORT3);

      var _super5 = _createSuper(DestroyService);

      function DestroyService() {
        var _this18;

        _classCallCheck(this, DestroyService);

        _this18 = _super5.call(this, function (subscriber) {
          return _this18.life$.subscribe(subscriber);
        });
        _this18.life$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        return _this18;
      }

      _createClass(DestroyService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.life$.next();
          this.life$.complete();
        }
      }]);

      return DestroyService;
    }(rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]);

    DestroyService.ɵfac = function DestroyService_Factory(t) {
      return new (t || DestroyService)();
    };

    DestroyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DestroyService,
      factory: DestroyService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DestroyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-cdk/src/services/focusVisible.service.ts":
  /*!*******************************************************************!*\
    !*** ./projects/angular-cdk/src/services/focusVisible.service.ts ***!
    \*******************************************************************/

  /*! exports provided: FocusVisibleService */

  /***/
  function projectsAngularCdkSrcServicesFocusVisibleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusVisibleService", function () {
      return FocusVisibleService;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _destroy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./destroy.service */
    "./projects/angular-cdk/src/services/destroy.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _observables_focusVisibleObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../observables/focusVisibleObservable */
    "./projects/angular-cdk/src/observables/focusVisibleObservable.ts");
    /* harmony import */


    var _observables_watch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../observables/watch */
    "./projects/angular-cdk/src/observables/watch.ts");

    var FocusVisibleService = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT4) {
      _inherits(FocusVisibleService, _rxjs__WEBPACK_IMPORT4);

      var _super6 = _createSuper(FocusVisibleService);

      function FocusVisibleService(_ref11, changeDetectorRef, destroy$) {
        var _this19;

        var nativeElement = _ref11.nativeElement;

        _classCallCheck(this, FocusVisibleService);

        _this19 = _super6.call(this, function (subscriber) {
          return _this19.focusVisible$.subscribe(subscriber);
        });
        _this19.focusVisible$ = Object(_observables_focusVisibleObservable__WEBPACK_IMPORTED_MODULE_4__["focusVisibleObservable"])(nativeElement).pipe(Object(_observables_watch__WEBPACK_IMPORTED_MODULE_5__["watch"])(changeDetectorRef), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(destroy$));
        return _this19;
      }

      return FocusVisibleService;
    }(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]);

    FocusVisibleService.ɵfac = function FocusVisibleService_Factory(t) {
      return new (t || FocusVisibleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_destroy_service__WEBPACK_IMPORTED_MODULE_1__["DestroyService"]));
    };

    FocusVisibleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: FocusVisibleService,
      factory: FocusVisibleService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FocusVisibleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]]
          }]
        }, {
          type: _destroy_service__WEBPACK_IMPORTED_MODULE_1__["DestroyService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_destroy_service__WEBPACK_IMPORTED_MODULE_1__["DestroyService"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-cdk/src/services/hovered.service.ts":
  /*!**************************************************************!*\
    !*** ./projects/angular-cdk/src/services/hovered.service.ts ***!
    \**************************************************************/

  /*! exports provided: HoveredService */

  /***/
  function projectsAngularCdkSrcServicesHoveredServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoveredService", function () {
      return HoveredService;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _observables_fromAliases__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../observables/fromAliases */
    "./projects/angular-cdk/src/observables/fromAliases.ts");
    /* harmony import */


    var _utils_dom_getActualTarget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils/dom/getActualTarget */
    "./projects/angular-cdk/src/utils/dom/getActualTarget.ts");
    /* harmony import */


    var _observables_zoneFree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../observables/zoneFree */
    "./projects/angular-cdk/src/observables/zoneFree.ts");

    var HoveredService = /*#__PURE__*/function () {
      function HoveredService(documentRef, ngZone) {
        _classCallCheck(this, HoveredService);

        this.ngZone = ngZone;
        this.documentEvents$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(_observables_fromAliases__WEBPACK_IMPORTED_MODULE_4__["mouseMoveFrom"])(documentRef), Object(_observables_fromAliases__WEBPACK_IMPORTED_MODULE_4__["touchEndFrom"])(documentRef));
      }

      _createClass(HoveredService, [{
        key: "createHovered$",
        value: function createHovered$(target) {
          var _this20 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return Object(_observables_fromAliases__WEBPACK_IMPORTED_MODULE_4__["mouseEnterFrom"])(target, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(_observables_fromAliases__WEBPACK_IMPORTED_MODULE_4__["mouseLeaveFrom"])(target, options), _this20.documentEvents$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (event) {
              return !target.contains(Object(_utils_dom_getActualTarget__WEBPACK_IMPORTED_MODULE_5__["getActualTarget"])(event));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mapTo"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(true));
          }), Object(_observables_zoneFree__WEBPACK_IMPORTED_MODULE_6__["zoneFree"])(this.ngZone), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
        }
      }]);

      return HoveredService;
    }();

    HoveredService.ɵfac = function HoveredService_Factory(t) {
      return new (t || HoveredService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
    };

    HoveredService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: HoveredService,
      factory: HoveredService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HoveredService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./projects/angular-cdk/src/tokens/focusableItemAccessor.ts":
  /*!******************************************************************!*\
    !*** ./projects/angular-cdk/src/tokens/focusableItemAccessor.ts ***!
    \******************************************************************/

  /*! exports provided: FOCUSABLE_ITEM_ACCESSOR */

  /***/
  function projectsAngularCdkSrcTokensFocusableItemAccessorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUSABLE_ITEM_ACCESSOR", function () {
      return FOCUSABLE_ITEM_ACCESSOR;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FOCUSABLE_ITEM_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('component that can be focused');
    /***/
  },

  /***/
  "./projects/angular-cdk/src/utils/browser/getUserAgent.ts":
  /*!****************************************************************!*\
    !*** ./projects/angular-cdk/src/utils/browser/getUserAgent.ts ***!
    \****************************************************************/

  /*! exports provided: getUserAgent */

  /***/
  function projectsAngularCdkSrcUtilsBrowserGetUserAgentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUserAgent", function () {
      return getUserAgent;
    });

    function getUserAgent() {
      return typeof navigator === 'undefined' || !navigator.userAgent ? '' : navigator.userAgent.toLowerCase();
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/browser/isEdge.ts":
  /*!**********************************************************!*\
    !*** ./projects/angular-cdk/src/utils/browser/isEdge.ts ***!
    \**********************************************************/

  /*! exports provided: isEdge */

  /***/
  function projectsAngularCdkSrcUtilsBrowserIsEdgeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isEdge", function () {
      return isEdge;
    });
    /* harmony import */


    var _getUserAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./getUserAgent */
    "./projects/angular-cdk/src/utils/browser/getUserAgent.ts");

    function isEdge() {
      return Object(_getUserAgent__WEBPACK_IMPORTED_MODULE_0__["getUserAgent"])().includes('edge');
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/browser/isIE.ts":
  /*!********************************************************!*\
    !*** ./projects/angular-cdk/src/utils/browser/isIE.ts ***!
    \********************************************************/

  /*! exports provided: isIE */

  /***/
  function projectsAngularCdkSrcUtilsBrowserIsIETs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isIE", function () {
      return isIE;
    });
    /* harmony import */


    var _getUserAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./getUserAgent */
    "./projects/angular-cdk/src/utils/browser/getUserAgent.ts");

    function isIE() {
      return Object(_getUserAgent__WEBPACK_IMPORTED_MODULE_0__["getUserAgent"])().includes('trident');
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/dom/getActualTarget.ts":
  /*!***************************************************************!*\
    !*** ./projects/angular-cdk/src/utils/dom/getActualTarget.ts ***!
    \***************************************************************/

  /*! exports provided: getActualTarget */

  /***/
  function projectsAngularCdkSrcUtilsDomGetActualTargetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getActualTarget", function () {
      return getActualTarget;
    });

    function getActualTarget(event) {
      if ('composedPath' in event) {
        return event.composedPath()[0];
      }

      return event.target;
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/focus/blurNativeFocused.ts":
  /*!*******************************************************************!*\
    !*** ./projects/angular-cdk/src/utils/focus/blurNativeFocused.ts ***!
    \*******************************************************************/

  /*! exports provided: blurNativeFocused */

  /***/
  function projectsAngularCdkSrcUtilsFocusBlurNativeFocusedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "blurNativeFocused", function () {
      return blurNativeFocused;
    });
    /* harmony import */


    var _getNativeFocused__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./getNativeFocused */
    "./projects/angular-cdk/src/utils/focus/getNativeFocused.ts");
    /* harmony import */


    var _setNativeFocused__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./setNativeFocused */
    "./projects/angular-cdk/src/utils/focus/setNativeFocused.ts");

    function blurNativeFocused(documentRef) {
      var activeElement = Object(_getNativeFocused__WEBPACK_IMPORTED_MODULE_0__["getNativeFocused"])(documentRef);

      if (activeElement && activeElement instanceof HTMLElement) {
        Object(_setNativeFocused__WEBPACK_IMPORTED_MODULE_1__["setNativeFocused"])(activeElement, false);
      }
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/focus/getNativeFocused.ts":
  /*!******************************************************************!*\
    !*** ./projects/angular-cdk/src/utils/focus/getNativeFocused.ts ***!
    \******************************************************************/

  /*! exports provided: getNativeFocused */

  /***/
  function projectsAngularCdkSrcUtilsFocusGetNativeFocusedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNativeFocused", function () {
      return getNativeFocused;
    });

    function getNativeFocused(documentRef) {
      if (!documentRef.activeElement || !documentRef.activeElement.shadowRoot) {
        return documentRef.activeElement;
      }

      var element = documentRef.activeElement.shadowRoot.activeElement;

      while (element && element.shadowRoot) {
        element = element.shadowRoot.activeElement;
      }

      return element;
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/focus/isNativeFocused.ts":
  /*!*****************************************************************!*\
    !*** ./projects/angular-cdk/src/utils/focus/isNativeFocused.ts ***!
    \*****************************************************************/

  /*! exports provided: isNativeFocused */

  /***/
  function projectsAngularCdkSrcUtilsFocusIsNativeFocusedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNativeFocused", function () {
      return isNativeFocused;
    });
    /* harmony import */


    var _getNativeFocused__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./getNativeFocused */
    "./projects/angular-cdk/src/utils/focus/getNativeFocused.ts");

    function isNativeFocused(node) {
      return !!node && !!node.ownerDocument && Object(_getNativeFocused__WEBPACK_IMPORTED_MODULE_0__["getNativeFocused"])(node.ownerDocument) === node;
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/focus/isNativeFocusedIn.ts":
  /*!*******************************************************************!*\
    !*** ./projects/angular-cdk/src/utils/focus/isNativeFocusedIn.ts ***!
    \*******************************************************************/

  /*! exports provided: isNativeFocusedIn */

  /***/
  function projectsAngularCdkSrcUtilsFocusIsNativeFocusedInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNativeFocusedIn", function () {
      return isNativeFocusedIn;
    });
    /* harmony import */


    var _getNativeFocused__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./getNativeFocused */
    "./projects/angular-cdk/src/utils/focus/getNativeFocused.ts");

    function isNativeFocusedIn(node) {
      if (!node.ownerDocument || !node.contains) {
        return false;
      }

      var nativeFocused = Object(_getNativeFocused__WEBPACK_IMPORTED_MODULE_0__["getNativeFocused"])(node.ownerDocument);
      return nativeFocused !== null && node.contains(nativeFocused);
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/focus/setNativeFocused.ts":
  /*!******************************************************************!*\
    !*** ./projects/angular-cdk/src/utils/focus/setNativeFocused.ts ***!
    \******************************************************************/

  /*! exports provided: setNativeFocused */

  /***/
  function projectsAngularCdkSrcUtilsFocusSetNativeFocusedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setNativeFocused", function () {
      return setNativeFocused;
    });
    /* harmony import */


    var _browser_isEdge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../browser/isEdge */
    "./projects/angular-cdk/src/utils/browser/isEdge.ts");
    /* harmony import */


    var _browser_isIE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../browser/isIE */
    "./projects/angular-cdk/src/utils/browser/isIE.ts");

    var preventScrollPolyfilled = false;

    function setNativeFocused(element) {
      var focused = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var preventScroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!preventScrollPolyfilled && focused && preventScroll && typeof document !== 'undefined') {
        polyfillPreventScroll(document);
      }

      if (focused) {
        element.focus({
          preventScroll: preventScroll
        });
      } else {
        element.blur();
      }
    }

    function polyfillPreventScroll(documentRef) {
      preventScrollPolyfilled = true;
      var supported = false;
      documentRef.createElement('div').focus({
        get preventScroll() {
          supported = true;
          return false;
        }

      });

      if (supported) {
        return;
      }

      function createFocusPolyfill(nativeMethod) {
        return function () {
          var _this21 = this;

          var focusOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var style = this.style,
              position = this.style.position;

          if (!focusOptions.preventScroll || position === 'fixed') {
            nativeMethod.call(this, focusOptions);
            return;
          }

          var scrollHierarchy = [];
          var parent = this.parentElement;

          while (parent) {
            scrollHierarchy.push({
              element: parent,
              scrollLeft: parent.scrollLeft,
              scrollTop: parent.scrollTop
            });
            parent = parent.parentElement;
          }

          var restoreScroll = function restoreScroll(event) {
            style.position = position;
            scrollHierarchy.forEach(function (_ref12) {
              var element = _ref12.element,
                  scrollLeft = _ref12.scrollLeft,
                  scrollTop = _ref12.scrollTop;

              if (element.scrollLeft !== scrollLeft) {
                element.scrollLeft = scrollLeft;
              }

              if (element.scrollTop !== scrollTop) {
                element.scrollTop = scrollTop;
              }
            });

            if (event) {
              _this21.removeEventListener('focus', restoreScroll);
            }
          };

          if (Object(_browser_isIE__WEBPACK_IMPORTED_MODULE_1__["isIE"])() || Object(_browser_isEdge__WEBPACK_IMPORTED_MODULE_0__["isEdge"])()) {
            this.removeEventListener('focus', restoreScroll);
          }

          nativeMethod.call(this, focusOptions);
          restoreScroll();

          if (documentRef.activeElement !== this) {
            this.removeEventListener('focus', restoreScroll);
          }
        };
      }

      HTMLElement.prototype.focus = createFocusPolyfill(HTMLElement.prototype.focus);
      SVGElement.prototype.focus = createFocusPolyfill(SVGElement.prototype.focus);
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/miscellaneous/fallbackValue.ts":
  /*!***********************************************************************!*\
    !*** ./projects/angular-cdk/src/utils/miscellaneous/fallbackValue.ts ***!
    \***********************************************************************/

  /*! exports provided: fallbackValue */

  /***/
  function projectsAngularCdkSrcUtilsMiscellaneousFallbackValueTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fallbackValue", function () {
      return fallbackValue;
    });
    /* harmony import */


    var _isPercent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./isPercent */
    "./projects/angular-cdk/src/utils/miscellaneous/isPercent.ts");

    function fallbackValue(value, fallback) {
      return Object(_isPercent__WEBPACK_IMPORTED_MODULE_0__["isPercent"])(value) ? value : fallback;
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/miscellaneous/getOriginalArrayFromQueryList.ts":
  /*!***************************************************************************************!*\
    !*** ./projects/angular-cdk/src/utils/miscellaneous/getOriginalArrayFromQueryList.ts ***!
    \***************************************************************************************/

  /*! exports provided: getOriginalArrayFromQueryList */

  /***/
  function projectsAngularCdkSrcUtilsMiscellaneousGetOriginalArrayFromQueryListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getOriginalArrayFromQueryList", function () {
      return getOriginalArrayFromQueryList;
    });

    function getOriginalArrayFromQueryList(queryList) {
      var array = null;
      queryList.find(function (_item, _index, originalArray) {
        array = originalArray;
        return true;
      });
      return array === null ? [] : array;
    }
    /***/

  },

  /***/
  "./projects/angular-cdk/src/utils/miscellaneous/isPercent.ts":
  /*!*******************************************************************!*\
    !*** ./projects/angular-cdk/src/utils/miscellaneous/isPercent.ts ***!
    \*******************************************************************/

  /*! exports provided: isPercent */

  /***/
  function projectsAngularCdkSrcUtilsMiscellaneousIsPercentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isPercent", function () {
      return isPercent;
    });

    function isPercent(value) {
      return value !== null && value !== undefined;
    }
    /***/

  },

  /***/
  "./projects/angular-core/src/constants/animationDuration.ts":
  /*!******************************************************************!*\
    !*** ./projects/angular-core/src/constants/animationDuration.ts ***!
    \******************************************************************/

  /*! exports provided: ANIMATION_DURATION */

  /***/
  function projectsAngularCoreSrcConstantsAnimationDurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ANIMATION_DURATION", function () {
      return ANIMATION_DURATION;
    });

    var ANIMATION_DURATION = '300ms';
    /***/
  },

  /***/
  "./projects/angular-core/src/directives/mode/mode.directive.ts":
  /*!*********************************************************************!*\
    !*** ./projects/angular-core/src/directives/mode/mode.directive.ts ***!
    \*********************************************************************/

  /*! exports provided: ModeDirective */

  /***/
  function projectsAngularCoreSrcDirectivesModeModeDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeDirective", function () {
      return ModeDirective;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _enums_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../enums/mode */
    "./projects/angular-core/src/enums/mode.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tokens_changeEmitters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../tokens/changeEmitters */
    "./projects/angular-core/src/tokens/changeEmitters.ts");
    /* harmony import */


    var _angular_cdk_src_classes_assert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../angular-cdk/src/classes/assert */
    "./projects/angular-cdk/src/classes/assert.ts");

    var ModeDirective = /*#__PURE__*/function () {
      function ModeDirective() {
        _classCallCheck(this, ModeDirective);

        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.currentMode = null;
      }

      _createClass(ModeDirective, [{
        key: "mode",
        set: function set(mode) {
          _angular_cdk_src_classes_assert__WEBPACK_IMPORTED_MODULE_4__["ASSERT"].assert(mode !== _enums_mode__WEBPACK_IMPORTED_MODULE_1__["Mode"].TABLE, 'mode="table" is deprecated, use table instead');

          this.currentMode = mode;
          this.change$.next();
        },
        get: function get() {
          return this.currentMode;
        }
      }]);

      return ModeDirective;
    }();

    ModeDirective.ɵfac = function ModeDirective_Factory(t) {
      return new (t || ModeDirective)();
    };

    ModeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: ModeDirective,
      selectors: [["", "mode", ""]],
      inputs: {
        mode: "mode"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _tokens_changeEmitters__WEBPACK_IMPORTED_MODULE_3__["CHANGE_EMITTERS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return ModeDirective;
        }),
        multi: true
      }])]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ModeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: "[mode]",
          providers: [{
            provide: _tokens_changeEmitters__WEBPACK_IMPORTED_MODULE_3__["CHANGE_EMITTERS"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
              return ModeDirective;
            }),
            multi: true
          }]
        }]
      }], null, {
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mode']
        }]
      });
    })();
    /***/

  },

  /***/
  "./projects/angular-core/src/enums/mode.ts":
  /*!*************************************************!*\
    !*** ./projects/angular-core/src/enums/mode.ts ***!
    \*************************************************/

  /*! exports provided: Mode */

  /***/
  function projectsAngularCoreSrcEnumsModeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mode", function () {
      return Mode;
    });

    var Mode;

    (function (Mode) {
      Mode["TABLE"] = "table";
    })(Mode || (Mode = {}));
    /***/

  },

  /***/
  "./projects/angular-core/src/tokens/changeEmitters.ts":
  /*!************************************************************!*\
    !*** ./projects/angular-core/src/tokens/changeEmitters.ts ***!
    \************************************************************/

  /*! exports provided: CHANGE_EMITTERS */

  /***/
  function projectsAngularCoreSrcTokensChangeEmittersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CHANGE_EMITTERS", function () {
      return CHANGE_EMITTERS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CHANGE_EMITTERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Entities that host streams to notifying about changes');
    /***/
  },

  /***/
  "./src/app/library/mui-flex-library/components/codePreview/codePreview.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/library/mui-flex-library/components/codePreview/codePreview.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: MuiCodePreviewComponent */

  /***/
  function srcAppLibraryMuiFlexLibraryComponentsCodePreviewCodePreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MuiCodePreviewComponent", function () {
      return MuiCodePreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _projects_angular_kit_src_lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../projects/angular-kit/src/lib/components/icon/icon.component */
    "./projects/angular-kit/src/lib/components/icon/icon.component.ts");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");

    var _c0 = ["codeContainer"];

    var MuiCodePreviewComponent = /*#__PURE__*/function () {
      function MuiCodePreviewComponent() {
        _classCallCheck(this, MuiCodePreviewComponent);
      }

      _createClass(MuiCodePreviewComponent, [{
        key: "onClick",
        value: function onClick() {
          var text = this.codeContainer.nativeElement.innerText;
          document.addEventListener('copy', function (event) {
            event.clipboardData.setData('text/plain', text);
            event.preventDefault();
          }, {
            once: true
          });
          document.execCommand('copy');
        }
      }, {
        key: "languages",
        get: function get() {
          if (Array.isArray(this.language)) {
            return this.language;
          }

          return [this.language];
        }
      }]);

      return MuiCodePreviewComponent;
    }();

    MuiCodePreviewComponent.ɵfac = function MuiCodePreviewComponent_Factory(t) {
      return new (t || MuiCodePreviewComponent)();
    };

    MuiCodePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MuiCodePreviewComponent,
      selectors: [["mui-code-preview"]],
      viewQuery: function MuiCodePreviewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeContainer = _t.first);
        }
      },
      inputs: {
        code: "code",
        language: "language"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "copy-icon"], ["type", "iconCopyLarge", "muiTooltip", "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u0434", 3, "click"], [3, "languages", "highlight"], ["codeContainer", ""]],
      template: function MuiCodePreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mui-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MuiCodePreviewComponent_Template_mui_icon_click_1_listener() {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("languages", ctx.languages)("highlight", ctx.code);
        }
      },
      directives: [_projects_angular_kit_src_lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["MuiIconComponent"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__["Highlight"]],
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  margin: 0;\n  box-shadow: inset 0 -1px 0 0 #ecf1f7;\n  max-height: 600px;\n  max-width: 100%;\n  overflow: scroll;\n  background-color: #23241f;\n  min-height: 80px;\n  padding: 40px 16px 8px;\n  color: #333;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   code[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n[_nghost-%COMP%]   mui-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[_nghost-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n.copy-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9tdWktZmxleC1saWJyYXJ5L2NvbXBvbmVudHMvY29kZVByZXZpZXcvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWRpcmVjdGlvbi5sZXNzIiwic3JjL2FwcC9saWJyYXJ5L211aS1mbGV4LWxpYnJhcnkvY29tcG9uZW50cy9jb2RlUHJldmlldy9jb2RlUHJldmlldy5zdHlsZS5sZXNzIiwic3JjL2FwcC9saWJyYXJ5L211aS1mbGV4LWxpYnJhcnkvY29tcG9uZW50cy9jb2RlUHJldmlldy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtdGV4dC5sZXNzIiwic3JjL2FwcC9saWJyYXJ5L211aS1mbGV4LWxpYnJhcnkvY29tcG9uZW50cy9jb2RlUHJldmlldy9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtc3BhY2VzLmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL2NvZGVQcmV2aWV3L0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1idXR0b25zLmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL2NvZGVQcmV2aWV3L0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1jb2x1bXMubGVzcyIsInNyYy9hcHAvbGlicmFyeS9tdWktZmxleC1saWJyYXJ5L2NvbXBvbmVudHMvY29kZVByZXZpZXcvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRhYmxlLmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL2NvZGVQcmV2aWV3L0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvbGlicmFyeS9tdWktZmxleC1saWJyYXJ5L2NvbXBvbmVudHMvY29kZVByZXZpZXcvY29kZVByZXZpZXcuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBRENRO0VBQ0ksbUJBQUE7QUNDWjtBREVRO0VBQ0ksOEJBQUE7QUNBWjtBREdRO0VBQ0ksNkJBQUE7QUNEWjtBRElRO0VBQ0kseUJBQUE7QUNGWjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FETVE7RUFDSSx1QkFBQTtBQ0paO0FET1E7RUFDSSxxQkFBQTtBQ0xaO0FEYUk7RUFDSSxzQkFBQTtBQ1hSO0FEYVE7RUFDSSx1QkFBQTtBQ1haO0FEY1E7RUFDSSw4QkFBQTtBQ1paO0FEZVE7RUFDSSw2QkFBQTtBQ2JaO0FEZ0JRO0VBQ0ksbUJBQUE7QUNkWjtBRGlCUztFQUNJLHlCQUFBO0FDZmI7QURrQlE7RUFDSSxxQkFBQTtBQ2hCWjtBRG1CUTtFQUNJLHVCQUFBO0FDakJaO0FEb0JRO0VBQ0kscUJBQUE7QUNsQlo7QUR1Qkk7RUFDSSxlQUFBO0FDckJSO0FEMEJBO0VBQ0ksV0FBQTtBQ3hCSjtBQzNEQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUQ2REo7QUMzREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBRDZEUjtBQzFESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FENERSO0FDekRJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FEMkRSO0FDeERJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FEMERSO0FDdkRJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FEeURSO0FDdERJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FEd0RSO0FDckRJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEdURSO0FDcERJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEc0RSO0FDbkRJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEcURSO0FDbERJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEb0RSO0FDakRJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEbURSO0FDaERJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEa0RSO0FDL0NJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEaURSO0FDOUNJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FEZ0RSO0FDN0NJO0VBQ0ksaUJBQUE7QUQrQ1I7QUMzQ0k7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUQ2Q1I7QUMzQ1E7RUFDSSxZQUFBO0VBQ0EscUNBQUE7QUQ2Q1o7QUMxQ1E7RUFDSSxVQUFBO0VBQ0EscUNBQUE7QUQ0Q1o7QUNwQ0E7RUFDSSxZQUFBO0VBQ0EsNENBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FEcUNKO0FDbkNJO0VBQ0ksVUFBQTtFQUNBLDRDQUFBO0VBRUEsZ0NBQUE7QURvQ1I7QUNoQ0E7RUFDSSxVQUFBO0VBQ0EsNENBQUE7RUFFQSxnQ0FBQTtBRGlDSjtBQzlCQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEZ0NKO0FDN0JBO0VBQ0kseUJBQUE7RUFDQSxrQ0FBQTtBRCtCSjtBRXJOQTtFRnVORSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FFeE5JO0VBQ0ksZUFBQTtBRjBOUjtBRXZOSTtFQUNJLGlCQUFBO0FGeU5SO0FFdE5JO0VBQ0ksaUJBQUE7QUZ3TlI7QUVyTkk7RUFDSSxrQkFBQTtBRnVOUjtBRXBOSTtFQUNJLGtCQUFBO0FGc05SO0FFbk5JO0VBQ0ksa0JBQUE7QUZxTlI7QUVsTkk7RUFDSSxrQkFBQTtBRm9OUjtBRWpOSTtFQUNJLGtCQUFBO0FGbU5SO0FFaE5JO0VBQ0ksa0JBQUE7QUZrTlI7QUUvTUk7RUFDSSxrQkFBQTtBRmlOUjtBRTlNSTtFQUNJLGtCQUFBO0FGZ05SO0FFM01JO0VBQ0ksY0FBQTtBRjZNUjtBRTFNSTtFQUNJLGdCQUFBO0FGNE1SO0FFek1JO0VBQ0ksZ0JBQUE7QUYyTVI7QUV4TUk7RUFDSSxpQkFBQTtBRjBNUjtBRXZNSTtFQUNJLGlCQUFBO0FGeU1SO0FFdE1JO0VBQ0ksaUJBQUE7QUZ3TVI7QUVyTUk7RUFDSSxpQkFBQTtBRnVNUjtBRXBNSTtFQUNJLGlCQUFBO0FGc01SO0FFbk1JO0VBQ0ksaUJBQUE7QUZxTVI7QUVsTUk7RUFDSSxpQkFBQTtBRm9NUjtBRWpNSTtFQUNJLGlCQUFBO0FGbU1SO0FFOUxJO0VBQ0ksZ0JBQUE7QUZnTVI7QUU3TEk7RUFDSSxrQkFBQTtBRitMUjtBRTVMSTtFQUNJLGtCQUFBO0FGOExSO0FFM0xJO0VBQ0ksbUJBQUE7QUY2TFI7QUUxTEk7RUFDSSxtQkFBQTtBRjRMUjtBRXpMSTtFQUNJLG1CQUFBO0FGMkxSO0FFeExJO0VBQ0ksbUJBQUE7QUYwTFI7QUV2TEk7RUFDSSxtQkFBQTtBRnlMUjtBRXRMSTtFQUNJLG1CQUFBO0FGd0xSO0FFckxJO0VBQ0ksbUJBQUE7QUZ1TFI7QUVwTEk7RUFDSSxtQkFBQTtBRnNMUjtBRWpMSTtFQUNJLGFBQUE7QUZtTFI7QUVoTEk7RUFDSSxlQUFBO0FGa0xSO0FFL0tJO0VBQ0ksZUFBQTtBRmlMUjtBRTlLSTtFQUNJLGdCQUFBO0FGZ0xSO0FFN0tJO0VBQ0ksZ0JBQUE7QUYrS1I7QUU1S0k7RUFDSSxnQkFBQTtBRjhLUjtBRTNLSTtFQUNJLGdCQUFBO0FGNktSO0FFMUtJO0VBQ0ksZ0JBQUE7QUY0S1I7QUV6S0k7RUFDSSxnQkFBQTtBRjJLUjtBRXhLSTtFQUNJLGdCQUFBO0FGMEtSO0FFdktJO0VBQ0ksZ0JBQUE7QUZ5S1I7QUcvVkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBSGlXSjtBRzdWUTtFQUNJLGtEQUFBO0FIK1ZaO0FHNVZRO0VBQ0ksMENBQUE7QUg4Vlo7QUczVlE7RUFDSSxZQUFBO0FINlZaO0FHMVZRO0VBQ0ksa0RBQUE7RUFDQSw2QkFBQTtBSDRWWjtBR3pWUTtFQUNJLDBDQUFBO0VBQ0EsNkJBQUE7QUgyVlo7QUd4VlE7RUFDSSxvREFBQTtBSDBWWjtBR3ZWUTtFQUNJLDRDQUFBO0FIeVZaO0FHclZRO0VBQ0ksZ0RBQUE7QUh1Vlo7QUdwVlE7RUFDSSx3Q0FBQTtFQUNBLDZCQUFBO0FIc1ZaO0FHblZRO0VBQ0ksK0NBQUE7QUhxVlo7QUdsVlE7RUFDSSx1Q0FBQTtFQUNBLDZCQUFBO0FIb1ZaO0FHL1VRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUhnVlo7QUc3VVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSDhVWjtBRzNVUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FINFVaO0FHdlVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FIeVVKO0FHdFVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FId1VKO0FJamFJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBSm1hUjtBS3phQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FMMmFKO0FLeGFBO0VBQ0ksZ0NBQUE7QUwwYUo7QUt2YUE7O0VBR0ksc0JBQUE7RUFDQSxnQkFBQTtBTHlhSjtBS3RhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUx3YUo7QUtyYUE7RUFFSSwrQkFBQTtFQUVBLHlCQUFBO0VBRUEsdUNBQUE7RUFDQSxVQUFBO0FMdWFKO0FLcGFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FMc2FKO0FLbmFBO0VBQ0ksbUJBQUE7QUxxYUo7QUtsYUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUxvYUo7QUtqYUE7RUFDSSxtQkFBQTtBTG1hSjtBS2hhQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMa2FKO0FLL1pBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUxpYUo7QUs5WkE7RUFDSSw2QkFBQTtBTGdhSjtBSzdaQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMK1pKO0FLNVpBOztFQUVJLFlBQUE7QUw4Wko7QUszWkE7RUFDSSxlQUFBO0FMNlpKO0FLMVpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUw0Wko7QUt6WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTDJaSjtBS3haQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMMFpKO0FLdlpBO0VBQ0ksc0JBQUE7QUx5Wko7QUt0WkE7O0VBRUksZUFBQTtBTHdaSjtBS3JaQTs7RUFFSSxnQkFBQTtBTHVaSjtBS3BaQTs7RUFFSSxrQkFBQTtBTHNaSjtBS25aQTs7RUFFSSxpQkFBQTtBTHFaSjtBS2xaQTs7RUFFSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUxvWko7QU1qakJBO0VBQ0ksY0FBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QU5pakJKO0FNL2pCQTtFQWlCUSxTQUFBO0FOaWpCUjtBTWxrQkE7RUFxQlEsUUFBQTtBTmdqQlI7QU1ya0JBO0VBeUJRLFdBQUE7QU4raUJSO0FNM2lCQTtFQUNJLFFBQUE7QU42aUJKO0FNMWlCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FONGlCSiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL2NvZGVQcmV2aWV3L2NvZGVQcmV2aWV3LnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICZfaG9yaXpvbnRhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmX3dyYXAge1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jZW50ZXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxuXG4gICAgJl92ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgfVxuXG4gICAgICAgICYtcmlnaHQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICZfd3JhcCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG59XG5cblxuLmZ1bGwtc2l6ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleF9ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4X2hvcml6b250YWwtbWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X2hvcml6b250YWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF9ob3Jpem9udGFsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF9ob3Jpem9udGFsX3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleF9ob3Jpem9udGFsLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3ZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLW1pZGRsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfdmVydGljYWwtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mdWxsLXNpemUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tdWktdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9oMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2gzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDQge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfYm9keS14bCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWwge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1sX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW0ge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1tX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LXMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9keS1zX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXhzIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubXVpLXRleHRfbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm11aS10ZXh0X2xpbmstaG92ZXJlZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucm91dGVyX2xpbmsge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDAgOHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucm91dGVyX2xpbmstYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xufVxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cbi5tdWktbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXNwYWNlIHtcbiAgLyogUklHSFQgU1BBQ0UgKi9cbiAgLyogTEVGVCBTUEFDRSAqL1xuICAvKiBCT1RUT00gU1BBQ0UgKi9cbiAgLyogVE9QIFNQQUNFICovXG59XG4ubXVpLXNwYWNlX3JpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC02IHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC03IHtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC04IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC05IHtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0xMCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubXVpLXNwYWNlX2xlZnQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5tdWktc3BhY2VfbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNiB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTcge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtOSB7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMyB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS00IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS03IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTgge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOSB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC0wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5tdWktc3BhY2VfdG9wLTEge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0yIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm11aS1zcGFjZV90b3AtMyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubXVpLXNwYWNlX3RvcC00IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm11aS1zcGFjZV90b3AtNiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC03IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5tdWktc3BhY2VfdG9wLTgge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLm11aS1zcGFjZV90b3AtOSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm11aS1idXR0b25fY29sb3Itc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fc2l6ZS1sIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubXVpLWJ1dHRvbl9zaXplLW0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtcyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1jb2xfbWQtMyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnRhYmxlLm11aS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzk1OWJhNDtcbn1cbi5tdWktdGFibGVfX3RyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IDA7XG59XG4ubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogNTVweDtcbiAgY29sb3I6ICMzMzM7XG59XG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGNvbG9yOiAjNzk4MThjO1xufVxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBoZWlnaHQ6IDc5cHg7XG59XG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgI2VjZjFmNztcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjQxZjtcbiAgbWluLWhlaWdodDogODBweDtcbiAgcGFkZGluZzogNDBweCAxNnB4IDhweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46aG9zdCBwcmUge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCBjb2RlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuOmhvc3QgbXVpLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmNvcHktaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLm11aS10ZXh0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuICAgICZfaDEge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gzIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g0IHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g1IHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g2IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2JvZHkteGwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktcyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHktc19zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuXG4gICAgJl9saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICAgICAmLWhvdmVyZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1ob3ZlcmVkOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgICAgIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbi5yb3V0ZXJfbGluayB7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmLWFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UyYjUxZjtcbiAgICB9XG59XG5cbi5yb3V0ZXJfbGluazpob3Zlcjpub3QoLnJvdXRlcl9saW5rLWFjdGl2ZSkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cblxuLm11aS1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4ubXVpLWxpbms6aG92ZXI6bm90KFtuZy1yZWZsZWN0LXJvdXRlci1saW5rPScnXSkge1xuICAgIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xufVxuIiwiLm11aS1zcGFjZSB7XG4gICAgLyogUklHSFQgU1BBQ0UgKi9cblxuICAgICZfcmlnaHQtMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC00IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC03IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBMRUZUIFNQQUNFICovXG5cbiAgICAmX2xlZnQtMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICZfbGVmdC0xIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC01IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTYge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC04IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBCT1RUT00gU1BBQ0UgKi9cblxuICAgICZfYm90dG9tLTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICZfYm90dG9tLTEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS00IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS01IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS02IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS03IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS04IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS05IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgLyogVE9QIFNQQUNFICovXG5cbiAgICAmX3RvcC0wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAmX3RvcC0xIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgJl90b3AtNCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgJl90b3AtNiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtOCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgJl90b3AtOSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMTAge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbn1cbiIsIi5tdWktYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xuXG5cbiAgICAmX2NvbG9yIHtcbiAgICAgICAgJi1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgJi1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lcnJvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm86aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9zaXplIHtcbiAgICAgICAgJi1sIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtbSB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLXMge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuIiwiLm11aS1jb2wge1xuXG4gICAgJl9tZC0zIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cbiIsInRhYmxlLm11aS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogIzk1OWJhNDtcbn1cblxuLm11aS10YWJsZV9fdHIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuXG4ubXVpLXRhYmxlX19zdWJ0ZXh0IHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICBjb2xvcjogIzc5ODE4Yztcbn1cblxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgaGVpZ2h0OiA3OXB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9hbGlnbl9jZW50ZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfY2VudGVyLFxuLm11aS10YWJsZV9fdGhfdGV4dF9jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtbGlicmFyeS5sZXNzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwIEBtdWktY29sb3Itc2Vjb25kYXJ5O1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlY2YxZjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjQxZjtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIHBhZGRpbmc6IDQwcHggMTZweCA4cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHByZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBjb2RlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgIG11aS1pY29uIHtcbiAgICAgICAgY29sb3I6IEBtdWktY29sb3ItYmxhbms7XG4gICAgfVxufVxuXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwO1xufVxuXG4uY29weS1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuiCodePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mui-code-preview',
          templateUrl: './codePreview.tenplate.html',
          styleUrls: ['codePreview.style.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, {
        code: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        language: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        codeContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['codeContainer', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/library/mui-flex-library/components/codePreview/codePreview.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/library/mui-flex-library/components/codePreview/codePreview.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: MuiCodePreviewModule */

  /***/
  function srcAppLibraryMuiFlexLibraryComponentsCodePreviewCodePreviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MuiCodePreviewModule", function () {
      return MuiCodePreviewModule;
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


    var _codePreview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./codePreview.component */
    "./src/app/library/mui-flex-library/components/codePreview/codePreview.component.ts");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var projects_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! projects/angular-kit/src/public-api */
    "./projects/angular-kit/src/public-api.ts");

    var MuiCodePreviewModule = function MuiCodePreviewModule() {
      _classCallCheck(this, MuiCodePreviewModule);
    };

    MuiCodePreviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MuiCodePreviewModule
    });
    MuiCodePreviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MuiCodePreviewModule_Factory(t) {
        return new (t || MuiCodePreviewModule)();
      },
      providers: [{
        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__["HIGHLIGHT_OPTIONS"],
        useValue: {
          config: {
            tabReplace: '2'
          }
        }
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__["HighlightModule"], projects_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MuiIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MuiCodePreviewModule, {
        declarations: [_codePreview_component__WEBPACK_IMPORTED_MODULE_2__["MuiCodePreviewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__["HighlightModule"], projects_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MuiIconModule"]],
        exports: [_codePreview_component__WEBPACK_IMPORTED_MODULE_2__["MuiCodePreviewComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuiCodePreviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_codePreview_component__WEBPACK_IMPORTED_MODULE_2__["MuiCodePreviewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__["HighlightModule"], projects_angular_kit_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MuiIconModule"]],
          providers: [{
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__["HIGHLIGHT_OPTIONS"],
            useValue: {
              config: {
                tabReplace: '2'
              }
            }
          }],
          exports: [_codePreview_component__WEBPACK_IMPORTED_MODULE_2__["MuiCodePreviewComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: MuiCardBoxComponent */

  /***/
  function srcAppLibraryMuiFlexLibraryComponentsMuiCardBoxMuiCardBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MuiCardBoxComponent", function () {
      return MuiCardBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var MuiCardBoxComponent = /*#__PURE__*/function () {
      function MuiCardBoxComponent() {
        _classCallCheck(this, MuiCardBoxComponent);

        this.orientation = 'vertical';
        this.shadow = 's';
      }

      _createClass(MuiCardBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MuiCardBoxComponent;
    }();

    MuiCardBoxComponent.ɵfac = function MuiCardBoxComponent_Factory(t) {
      return new (t || MuiCardBoxComponent)();
    };

    MuiCardBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MuiCardBoxComponent,
      selectors: [["mui-card-box"]],
      inputs: {
        orientation: "orientation",
        shadow: "shadow"
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 4,
      consts: [[1, "mui-card-box_content"]],
      template: function MuiCardBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("mui-card-box mui-card-box-example ", ctx.shadow ? "mui-card-box_shadow-" + ctx.shadow : "", " flex ", ctx.orientation ? "flex_" + ctx.orientation : "", "");
        }
      },
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@font-face {\n  font-family: \"Roboto Black\";\n  src: url('Roboto-Black.eot');\n  src: url('Roboto-Black.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Black.woff') format(\"woff\"), url('Roboto-Black.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto BlackItalic\";\n  src: url('Roboto-BlackItalic.eot');\n  src: url('Roboto-BlackItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-BlackItalic.woff') format(\"woff\"), url('Roboto-BlackItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto Bold\";\n  src: url('Roboto-Bold.eot');\n  src: url('Roboto-Bold.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Bold.woff') format(\"woff\"), url('Roboto-Bold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto BoldItalic\";\n  src: url('Roboto-BoldItalic.eot');\n  src: url('Roboto-BoldItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-BoldItalic.woff') format(\"woff\"), url('Roboto-BoldItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto MediumItalic\";\n  src: url('Roboto-MediumItalic.eot');\n  src: url('Roboto-MediumItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-MediumItalic.woff') format(\"woff\"), url('Roboto-MediumItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto Light\";\n  src: url('Roboto-Light.eot');\n  src: url('Roboto-Light.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Light.woff') format(\"woff\"), url('Roboto-Light.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto LightItalic\";\n  src: url('Roboto-LightItalic.eot');\n  src: url('Roboto-LightItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-LightItalic.woff') format(\"woff\"), url('Roboto-LightItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto Medium\";\n  src: url('Roboto-Medium.eot');\n  src: url('Roboto-Medium.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Medium.woff') format(\"woff\"), url('Roboto-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto MediumItalic\";\n  src: url('Roboto-MediumItalic.eot');\n  src: url('Roboto-MediumItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-MediumItalic.woff') format(\"woff\"), url('Roboto-MediumItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto Regular\";\n  src: url('Roboto-Regular.eot');\n  src: url('Roboto-Regular.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Regular.woff') format(\"woff\"), url('Roboto-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto Thin\";\n  src: url('Roboto-Thin.eot');\n  src: url('Roboto-Thin.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-Thin.woff') format(\"woff\"), url('Roboto-Thin.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto ThinItalic\";\n  src: url('Roboto-ThinItalic.eot');\n  src: url('Roboto-ThinItalic.eot?#iefix') format(\"embedded-opentype\"), url('Roboto-ThinItalic.woff') format(\"woff\"), url('Roboto-ThinItalic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.mui-card-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 6px;\n  min-height: 48px;\n  max-width: 100%;\n}\n.mui-card-box_dark[_ngcontent-%COMP%] {\n  background-color: #333;\n  border: 1px solid #333;\n  color: #fff;\n}\n.mui-card-box_light[_ngcontent-%COMP%] {\n  border: 1px solid #e7e8ea;\n  background: #fff;\n  color: #333;\n}\n.mui-card-box_content[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 20px;\n  font-family: \"Roboto Light\", sans-serif;\n}\n.mui-card-box-example[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e7e8ea;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.mui-card-box_shadow-l[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.25);\n}\n.mui-card-box_shadow-s[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9tdWktZmxleC1saWJyYXJ5L2NvbXBvbmVudHMvbXVpLWNhcmQtYm94L0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC1kaXJlY3Rpb24ubGVzcyIsInNyYy9hcHAvbGlicmFyeS9tdWktZmxleC1saWJyYXJ5L2NvbXBvbmVudHMvbXVpLWNhcmQtYm94L211aS1jYXJkLWJveC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGlicmFyeS9tdWktZmxleC1saWJyYXJ5L2NvbXBvbmVudHMvbXVpLWNhcmQtYm94L0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC10ZXh0Lmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL211aS1jYXJkLWJveC9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtc3BhY2VzLmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL211aS1jYXJkLWJveC9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtYnV0dG9ucy5sZXNzIiwic3JjL2FwcC9saWJyYXJ5L211aS1mbGV4LWxpYnJhcnkvY29tcG9uZW50cy9tdWktY2FyZC1ib3gvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWNvbHVtcy5sZXNzIiwic3JjL2FwcC9saWJyYXJ5L211aS1mbGV4LWxpYnJhcnkvY29tcG9uZW50cy9tdWktY2FyZC1ib3gvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRhYmxlLmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL211aS1jYXJkLWJveC9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL211aS1jYXJkLWJveC9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL211aS1jYXJkLWJveC9tdWktY2FyZC1ib3guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0FDQVo7QURHUTtFQUNJLDZCQUFBO0FDRFo7QURJUTtFQUNJLHlCQUFBO0FDRlo7QURLUTtFQUNJLGVBQUE7QUNIWjtBRE1RO0VBQ0ksdUJBQUE7QUNKWjtBRE9RO0VBQ0kscUJBQUE7QUNMWjtBRGFJO0VBQ0ksc0JBQUE7QUNYUjtBRGFRO0VBQ0ksdUJBQUE7QUNYWjtBRGNRO0VBQ0ksOEJBQUE7QUNaWjtBRGVRO0VBQ0ksNkJBQUE7QUNiWjtBRGdCUTtFQUNJLG1CQUFBO0FDZFo7QURpQlM7RUFDSSx5QkFBQTtBQ2ZiO0FEa0JRO0VBQ0kscUJBQUE7QUNoQlo7QURtQlE7RUFDSSx1QkFBQTtBQ2pCWjtBRG9CUTtFQUNJLHFCQUFBO0FDbEJaO0FEdUJJO0VBQ0ksZUFBQTtBQ3JCUjtBRDBCQTtFQUNJLFdBQUE7QUN4Qko7QUMzREE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FENkRKO0FDM0RJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUQ2RFI7QUMxREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBRDREUjtBQ3pESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRDJEUjtBQ3hESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRDBEUjtBQ3ZESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHlEUjtBQ3RESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHdEUjtBQ3JESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHVEUjtBQ3BESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHNEUjtBQ25ESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHFEUjtBQ2xESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRG9EUjtBQ2pESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRG1EUjtBQ2hESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGtEUjtBQy9DSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGlEUjtBQzlDSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRGdEUjtBQzdDSTtFQUNJLGlCQUFBO0FEK0NSO0FDM0NJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FENkNSO0FDM0NRO0VBQ0ksWUFBQTtFQUNBLHFDQUFBO0FENkNaO0FDMUNRO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO0FENENaO0FDcENBO0VBQ0ksWUFBQTtFQUNBLDRDQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBRHFDSjtBQ25DSTtFQUNJLFVBQUE7RUFDQSw0Q0FBQTtFQUVBLGdDQUFBO0FEb0NSO0FDaENBO0VBQ0ksVUFBQTtFQUNBLDRDQUFBO0VBRUEsZ0NBQUE7QURpQ0o7QUM5QkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGdDSjtBQzdCQTtFQUNJLHlCQUFBO0VBQ0Esa0NBQUE7QUQrQko7QUVyTkE7RUZ1TkUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBRXhOSTtFQUNJLGVBQUE7QUYwTlI7QUV2Tkk7RUFDSSxpQkFBQTtBRnlOUjtBRXROSTtFQUNJLGlCQUFBO0FGd05SO0FFck5JO0VBQ0ksa0JBQUE7QUZ1TlI7QUVwTkk7RUFDSSxrQkFBQTtBRnNOUjtBRW5OSTtFQUNJLGtCQUFBO0FGcU5SO0FFbE5JO0VBQ0ksa0JBQUE7QUZvTlI7QUVqTkk7RUFDSSxrQkFBQTtBRm1OUjtBRWhOSTtFQUNJLGtCQUFBO0FGa05SO0FFL01JO0VBQ0ksa0JBQUE7QUZpTlI7QUU5TUk7RUFDSSxrQkFBQTtBRmdOUjtBRTNNSTtFQUNJLGNBQUE7QUY2TVI7QUUxTUk7RUFDSSxnQkFBQTtBRjRNUjtBRXpNSTtFQUNJLGdCQUFBO0FGMk1SO0FFeE1JO0VBQ0ksaUJBQUE7QUYwTVI7QUV2TUk7RUFDSSxpQkFBQTtBRnlNUjtBRXRNSTtFQUNJLGlCQUFBO0FGd01SO0FFck1JO0VBQ0ksaUJBQUE7QUZ1TVI7QUVwTUk7RUFDSSxpQkFBQTtBRnNNUjtBRW5NSTtFQUNJLGlCQUFBO0FGcU1SO0FFbE1JO0VBQ0ksaUJBQUE7QUZvTVI7QUVqTUk7RUFDSSxpQkFBQTtBRm1NUjtBRTlMSTtFQUNJLGdCQUFBO0FGZ01SO0FFN0xJO0VBQ0ksa0JBQUE7QUYrTFI7QUU1TEk7RUFDSSxrQkFBQTtBRjhMUjtBRTNMSTtFQUNJLG1CQUFBO0FGNkxSO0FFMUxJO0VBQ0ksbUJBQUE7QUY0TFI7QUV6TEk7RUFDSSxtQkFBQTtBRjJMUjtBRXhMSTtFQUNJLG1CQUFBO0FGMExSO0FFdkxJO0VBQ0ksbUJBQUE7QUZ5TFI7QUV0TEk7RUFDSSxtQkFBQTtBRndMUjtBRXJMSTtFQUNJLG1CQUFBO0FGdUxSO0FFcExJO0VBQ0ksbUJBQUE7QUZzTFI7QUVqTEk7RUFDSSxhQUFBO0FGbUxSO0FFaExJO0VBQ0ksZUFBQTtBRmtMUjtBRS9LSTtFQUNJLGVBQUE7QUZpTFI7QUU5S0k7RUFDSSxnQkFBQTtBRmdMUjtBRTdLSTtFQUNJLGdCQUFBO0FGK0tSO0FFNUtJO0VBQ0ksZ0JBQUE7QUY4S1I7QUUzS0k7RUFDSSxnQkFBQTtBRjZLUjtBRTFLSTtFQUNJLGdCQUFBO0FGNEtSO0FFektJO0VBQ0ksZ0JBQUE7QUYyS1I7QUV4S0k7RUFDSSxnQkFBQTtBRjBLUjtBRXZLSTtFQUNJLGdCQUFBO0FGeUtSO0FHL1ZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUhpV0o7QUc3VlE7RUFDSSxrREFBQTtBSCtWWjtBRzVWUTtFQUNJLDBDQUFBO0FIOFZaO0FHM1ZRO0VBQ0ksWUFBQTtBSDZWWjtBRzFWUTtFQUNJLGtEQUFBO0VBQ0EsNkJBQUE7QUg0Vlo7QUd6VlE7RUFDSSwwQ0FBQTtFQUNBLDZCQUFBO0FIMlZaO0FHeFZRO0VBQ0ksb0RBQUE7QUgwVlo7QUd2VlE7RUFDSSw0Q0FBQTtBSHlWWjtBR3JWUTtFQUNJLGdEQUFBO0FIdVZaO0FHcFZRO0VBQ0ksd0NBQUE7RUFDQSw2QkFBQTtBSHNWWjtBR25WUTtFQUNJLCtDQUFBO0FIcVZaO0FHbFZRO0VBQ0ksdUNBQUE7RUFDQSw2QkFBQTtBSG9WWjtBRy9VUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FIZ1ZaO0FHN1VRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUg4VVo7QUczVVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSDRVWjtBR3ZVQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBSHlVSjtBR3RVQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBSHdVSjtBSWphSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUptYVI7QUt6YUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBTDJhSjtBS3hhQTtFQUNJLGdDQUFBO0FMMGFKO0FLdmFBOztFQUdJLHNCQUFBO0VBQ0EsZ0JBQUE7QUx5YUo7QUt0YUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FMd2FKO0FLcmFBO0VBRUksK0JBQUE7RUFFQSx5QkFBQTtFQUVBLHVDQUFBO0VBQ0EsVUFBQTtBTHVhSjtBS3BhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBTHNhSjtBS25hQTtFQUNJLG1CQUFBO0FMcWFKO0FLbGFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FMb2FKO0FLamFBO0VBQ0ksbUJBQUE7QUxtYUo7QUtoYUE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTGthSjtBSy9aQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMaWFKO0FLOVpBO0VBQ0ksNkJBQUE7QUxnYUo7QUs3WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTCtaSjtBSzVaQTs7RUFFSSxZQUFBO0FMOFpKO0FLM1pBO0VBQ0ksZUFBQTtBTDZaSjtBSzFaQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMNFpKO0FLelpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwyWko7QUt4WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTDBaSjtBS3ZaQTtFQUNJLHNCQUFBO0FMeVpKO0FLdFpBOztFQUVJLGVBQUE7QUx3Wko7QUtyWkE7O0VBRUksZ0JBQUE7QUx1Wko7QUtwWkE7O0VBRUksa0JBQUE7QUxzWko7QUtuWkE7O0VBRUksaUJBQUE7QUxxWko7QUtsWkE7O0VBRUksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FMb1pKO0FNbmpCQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvSkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU5takJKO0FNaGpCQTtFQUNJLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzS0FBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU5nakJKO0FNN2lCQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpSkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU42aUJKO0FNMWlCQTtFQUNJLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtS0FBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU4waUJKO0FNdmlCQTtFQUNJLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx5S0FBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU51aUJKO0FNcGlCQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvSkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU5vaUJKO0FNamlCQTtFQUNJLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzS0FBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU5paUJKO0FNOWhCQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1SkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU44aEJKO0FNM2hCQTtFQUNJLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx5S0FBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU4yaEJKO0FNeGhCQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwSkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU53aEJKO0FNcmhCQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpSkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU5xaEJKO0FNbGhCQTtFQUNJLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtS0FBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7QU5raEJKO0FPcG9CQTtFQUNJLGNBQUE7QVBzb0JKO0FPbm9CQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FQcW9CSjtBT25vQkk7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBUHFvQlI7QU9sb0JJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QVBvb0JSO0FPam9CSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FQbW9CUjtBT2hvQkk7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBUGtvQlI7QU85bkJRO0VBQ0ksNENBQUE7QVBnb0JaO0FPN25CUTtFQUNJLDJDQUFBO0FQK25CWiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL211aS1jYXJkLWJveC9tdWktY2FyZC1ib3guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICZfaG9yaXpvbnRhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmX3dyYXAge1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jZW50ZXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxuXG4gICAgJl92ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJi1taWRkbGUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgICYtZW5kIHtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgfVxuXG4gICAgICAgICYtcmlnaHQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iYXNlbGluZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICZfd3JhcCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG59XG5cblxuLmZ1bGwtc2l6ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleF9ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4X2hvcml6b250YWwtbWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X2hvcml6b250YWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X2hvcml6b250YWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF9ob3Jpem9udGFsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF9ob3Jpem9udGFsX3dyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleF9ob3Jpem9udGFsLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5mbGV4X3ZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLW1pZGRsZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZsZXhfdmVydGljYWwtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4X3ZlcnRpY2FsLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mbGV4X3ZlcnRpY2FsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mdWxsLXNpemUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tdWktdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9oMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2gzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDQge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfYm9keS14bCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWwge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1sX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW0ge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubXVpLXRleHRfYm9keS1tX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LXMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubXVpLXRleHRfYm9keS1zX3NlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXhzIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubXVpLXRleHRfbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm11aS10ZXh0X2xpbmstaG92ZXJlZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucm91dGVyX2xpbmsge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDAgOHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucm91dGVyX2xpbmstYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xufVxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cbi5tdWktbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXNwYWNlIHtcbiAgLyogUklHSFQgU1BBQ0UgKi9cbiAgLyogTEVGVCBTUEFDRSAqL1xuICAvKiBCT1RUT00gU1BBQ0UgKi9cbiAgLyogVE9QIFNQQUNFICovXG59XG4ubXVpLXNwYWNlX3JpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC02IHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC03IHtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC04IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC05IHtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0xMCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubXVpLXNwYWNlX2xlZnQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5tdWktc3BhY2VfbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNiB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTcge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtOSB7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tMyB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS00IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS03IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTgge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOSB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC0wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5tdWktc3BhY2VfdG9wLTEge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0yIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm11aS1zcGFjZV90b3AtMyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubXVpLXNwYWNlX3RvcC00IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm11aS1zcGFjZV90b3AtNiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3RvcC03IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5tdWktc3BhY2VfdG9wLTgge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLm11aS1zcGFjZV90b3AtOSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm11aS1idXR0b25fY29sb3Itc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fc2l6ZS1sIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubXVpLWJ1dHRvbl9zaXplLW0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtcyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm11aS1jb2xfbWQtMyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnRhYmxlLm11aS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzk1OWJhNDtcbn1cbi5tdWktdGFibGVfX3RyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IDA7XG59XG4ubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogNTVweDtcbiAgY29sb3I6ICMzMzM7XG59XG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGNvbG9yOiAjNzk4MThjO1xufVxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBoZWlnaHQ6IDc5cHg7XG59XG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBCbGFja1wiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1CbGFjay5lb3RcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLUJsYWNrLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1CbGFjay53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1CbGFjay50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQmxhY2tJdGFsaWNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQmxhY2tJdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1CbGFja0l0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQmxhY2tJdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQmxhY2tJdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQm9sZEl0YWxpY1wiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1Cb2xkSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZEl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZEl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1Cb2xkSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNZWRpdW1JdGFsaWNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBMaWdodFwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1MaWdodC5lb3RcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLUxpZ2h0LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1MaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTGlnaHRJdGFsaWNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTGlnaHRJdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1MaWdodEl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTGlnaHRJdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tTGlnaHRJdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1lZGl1bVwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW0uZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1lZGl1bUl0YWxpY1wiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tUmVndWxhci5lb3RcIik7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gVGhpblwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1UaGluLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tVGhpbi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc291cmNlL2ZvbnRzL1JvYm90by9Sb2JvdG8tVGhpbi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1UaGluLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBUaGluSXRhbGljXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLVRoaW5JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1UaGluSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by1UaGluSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9mb250cy9Sb2JvdG8vUm9ib3RvLVRoaW5JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm11aS1jYXJkLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLm11aS1jYXJkLWJveF9kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgY29sb3I6ICNmZmY7XG59XG4ubXVpLWNhcmQtYm94X2xpZ2h0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZThlYTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMzMzM7XG59XG4ubXVpLWNhcmQtYm94X2NvbnRlbnQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTGlnaHRcIiwgc2Fucy1zZXJpZjtcbn1cbi5tdWktY2FyZC1ib3gtZXhhbXBsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U4ZWE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tdWktY2FyZC1ib3hfc2hhZG93LWwge1xuICBib3gtc2hhZG93OiAwcHggNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5tdWktY2FyZC1ib3hfc2hhZG93LXMge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuIiwiLm11aS10ZXh0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuICAgICZfaDEge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gzIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g0IHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g1IHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2g2IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2JvZHkteGwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWwge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1tX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktcyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHktc19zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuXG4gICAgJl9saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICAgICAmLWhvdmVyZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1ob3ZlcmVkOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgICAgIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbi5yb3V0ZXJfbGluayB7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmLWFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UyYjUxZjtcbiAgICB9XG59XG5cbi5yb3V0ZXJfbGluazpob3Zlcjpub3QoLnJvdXRlcl9saW5rLWFjdGl2ZSkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwNTE1NDtcbn1cblxuLm11aS1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4ubXVpLWxpbms6aG92ZXI6bm90KFtuZy1yZWZsZWN0LXJvdXRlci1saW5rPScnXSkge1xuICAgIGNvbG9yOiAjMjNiYTk5ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xufVxuIiwiLm11aS1zcGFjZSB7XG4gICAgLyogUklHSFQgU1BBQ0UgKi9cblxuICAgICZfcmlnaHQtMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC00IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC03IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xMCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBMRUZUIFNQQUNFICovXG5cbiAgICAmX2xlZnQtMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICZfbGVmdC0xIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC01IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTYge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC04IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG5cbiAgICAvKiBCT1RUT00gU1BBQ0UgKi9cblxuICAgICZfYm90dG9tLTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICZfYm90dG9tLTEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS00IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS01IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS02IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS03IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS04IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS05IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgLyogVE9QIFNQQUNFICovXG5cbiAgICAmX3RvcC0wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAmX3RvcC0xIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgJl90b3AtNCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgJl90b3AtNiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtNyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgfVxuXG4gICAgJl90b3AtOCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgJl90b3AtOSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMTAge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbn1cbiIsIi5tdWktYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xuXG5cbiAgICAmX2NvbG9yIHtcbiAgICAgICAgJi1wcmltYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnlbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcy1ob3ZlcmVkKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWNjZXNzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgJi1lcnJvcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lcnJvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm86aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9zaXplIHtcbiAgICAgICAgJi1sIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAzNjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtbSB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLXMge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuIiwiLm11aS1jb2wge1xuXG4gICAgJl9tZC0zIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cbiIsInRhYmxlLm11aS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkLFxuLm11aS10YWJsZV9fdGgge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogIzk1OWJhNDtcbn1cblxuLm11aS10YWJsZV9fdHIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfaG92ZXJfZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuXG4ubXVpLXRhYmxlX19zdWJ0ZXh0IHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICBjb2xvcjogIzc5ODE4Yztcbn1cblxuLm11aS10YWJsZV9sYXlvdXRfZml4ZWQge1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9ib3JkZXJfdG9wIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgaGVpZ2h0OiA3OXB4O1xufVxuXG4ubXVpLXRhYmxlX190cl9jdXJzb3JfcG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX3MsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9zIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9hbGlnbl9jZW50ZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfbGFzdCxcbi5tdWktdGFibGVfX3RoX2xhc3Qge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfY2VudGVyLFxuLm11aS10YWJsZV9fdGhfdGV4dF9jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X292ZXJmbG93LFxuLm11aS10YWJsZV9fdGhfdGV4dF9vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEJsYWNrXCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tQmxhY2suZW90XCIpO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUJsYWNrLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXG4gICAgICAgIHVybChcIlJvYm90by1CbGFjay53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1CbGFjay50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBCbGFja0l0YWxpY1wiO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUJsYWNrSXRhbGljLmVvdFwiKTtcbiAgICBzcmM6IHVybChcIlJvYm90by1CbGFja0l0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tQmxhY2tJdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tQmxhY2tJdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQm9sZFwiO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUJvbGQuZW90XCIpO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcbiAgICAgICAgdXJsKFwiUm9ib3RvLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBCb2xkSXRhbGljXCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tQm9sZEl0YWxpYy5lb3RcIik7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tQm9sZEl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tQm9sZEl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1Cb2xkSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1lZGl1bUl0YWxpY1wiO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLU1lZGl1bUl0YWxpYy5lb3RcIik7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tTWVkaXVtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXG4gICAgICAgIHVybChcIlJvYm90by1NZWRpdW1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tTWVkaXVtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tTGlnaHQuZW90XCIpO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUxpZ2h0LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXG4gICAgICAgIHVybChcIlJvYm90by1MaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBMaWdodEl0YWxpY1wiO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLUxpZ2h0SXRhbGljLmVvdFwiKTtcbiAgICBzcmM6IHVybChcIlJvYm90by1MaWdodEl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tTGlnaHRJdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tTGlnaHRJdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTWVkaXVtXCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tTWVkaXVtLmVvdFwiKTtcbiAgICBzcmM6IHVybChcIlJvYm90by1NZWRpdW0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcbiAgICAgICAgdXJsKFwiUm9ib3RvLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1NZWRpdW0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTWVkaXVtSXRhbGljXCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tTWVkaXVtSXRhbGljLmVvdFwiKTtcbiAgICBzcmM6IHVybChcIlJvYm90by1NZWRpdW1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcbiAgICAgICAgdXJsKFwiUm9ib3RvLU1lZGl1bUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1NZWRpdW1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gUmVndWxhclwiO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLVJlZ3VsYXIuZW90XCIpO1xuICAgIHNyYzogdXJsKFwiUm9ib3RvLVJlZ3VsYXIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcbiAgICAgICAgdXJsKFwiUm9ib3RvLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBUaGluXCI7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tVGhpbi5lb3RcIik7XG4gICAgc3JjOiB1cmwoXCJSb2JvdG8tVGhpbi5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxuICAgICAgICB1cmwoXCJSb2JvdG8tVGhpbi53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgIHVybChcIlJvYm90by1UaGluLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFRoaW5JdGFsaWNcIjtcbiAgICBzcmM6IHVybChcIlJvYm90by1UaGluSXRhbGljLmVvdFwiKTtcbiAgICBzcmM6IHVybChcIlJvYm90by1UaGluSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXG4gICAgICAgIHVybChcIlJvYm90by1UaGluSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcbiAgICAgICAgdXJsKFwiUm9ib3RvLVRoaW5JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtbGlicmFyeS5sZXNzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2UvZm9udHMvUm9ib3RvL1JvYm90by5sZXNzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubXVpLWNhcmQtYm94IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgJl9kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJl9saWdodCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U4ZWE7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgICZfY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBMaWdodFwiLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgICYtZXhhbXBsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U4ZWE7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAmX3NoYWRvdyB7XG4gICAgICAgICYtbCB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuiCardBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mui-card-box',
          templateUrl: './mui-card-box.component.html',
          styleUrls: ['./mui-card-box.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        shadow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: MuiCardBoxModule */

  /***/
  function srcAppLibraryMuiFlexLibraryComponentsMuiCardBoxMuiCardBoxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MuiCardBoxModule", function () {
      return MuiCardBoxModule;
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


    var _mui_card_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mui-card-box.component */
    "./src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.component.ts");

    var MuiCardBoxModule = function MuiCardBoxModule() {
      _classCallCheck(this, MuiCardBoxModule);
    };

    MuiCardBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MuiCardBoxModule
    });
    MuiCardBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MuiCardBoxModule_Factory(t) {
        return new (t || MuiCardBoxModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MuiCardBoxModule, {
        declarations: [_mui_card_box_component__WEBPACK_IMPORTED_MODULE_2__["MuiCardBoxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_mui_card_box_component__WEBPACK_IMPORTED_MODULE_2__["MuiCardBoxComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuiCardBoxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_mui_card_box_component__WEBPACK_IMPORTED_MODULE_2__["MuiCardBoxComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_mui_card_box_component__WEBPACK_IMPORTED_MODULE_2__["MuiCardBoxComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/library/mui-flex-library/components/mui-tabs-group/mui-tabs-group.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/library/mui-flex-library/components/mui-tabs-group/mui-tabs-group.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: MuiTabsGroupModule */

  /***/
  function srcAppLibraryMuiFlexLibraryComponentsMuiTabsGroupMuiTabsGroupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MuiTabsGroupModule", function () {
      return MuiTabsGroupModule;
    });
    /* harmony import */


    var _tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tab-group-item-connector.directive */
    "./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group-item-connector.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _tab_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tab-group.component */
    "./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group.component.ts");
    /* harmony import */


    var projects_angular_cdk_src_directives_hovered_hovered_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! projects/angular-cdk/src/directives/hovered/hovered.module */
    "./projects/angular-cdk/src/directives/hovered/hovered.module.ts");
    /* harmony import */


    var projects_angular_cdk_src_directives_focusable_focusable_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! projects/angular-cdk/src/directives/focusable/focusable.module */
    "./projects/angular-cdk/src/directives/focusable/focusable.module.ts");
    /* harmony import */


    var projects_angular_cdk_src_directives_focusVIsible_focusVisible_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! projects/angular-cdk/src/directives/focusVIsible/focusVisible.module */
    "./projects/angular-cdk/src/directives/focusVIsible/focusVisible.module.ts");

    var MuiTabsGroupModule = function MuiTabsGroupModule() {
      _classCallCheck(this, MuiTabsGroupModule);
    };

    MuiTabsGroupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MuiTabsGroupModule
    });
    MuiTabsGroupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function MuiTabsGroupModule_Factory(t) {
        return new (t || MuiTabsGroupModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], projects_angular_cdk_src_directives_hovered_hovered_module__WEBPACK_IMPORTED_MODULE_5__["HoveredModule"], projects_angular_cdk_src_directives_focusable_focusable_module__WEBPACK_IMPORTED_MODULE_6__["FocusableModule"], projects_angular_cdk_src_directives_focusVIsible_focusVisible_module__WEBPACK_IMPORTED_MODULE_7__["FocusVisibleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MuiTabsGroupModule, {
        declarations: [_tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_0__["TabGroupItemConnectorDirective"], _tab_group_component__WEBPACK_IMPORTED_MODULE_4__["TabGroupComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], projects_angular_cdk_src_directives_hovered_hovered_module__WEBPACK_IMPORTED_MODULE_5__["HoveredModule"], projects_angular_cdk_src_directives_focusable_focusable_module__WEBPACK_IMPORTED_MODULE_6__["FocusableModule"], projects_angular_cdk_src_directives_focusVIsible_focusVisible_module__WEBPACK_IMPORTED_MODULE_7__["FocusVisibleModule"]],
        exports: [_tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_0__["TabGroupItemConnectorDirective"], _tab_group_component__WEBPACK_IMPORTED_MODULE_4__["TabGroupComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MuiTabsGroupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_0__["TabGroupItemConnectorDirective"], _tab_group_component__WEBPACK_IMPORTED_MODULE_4__["TabGroupComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], projects_angular_cdk_src_directives_hovered_hovered_module__WEBPACK_IMPORTED_MODULE_5__["HoveredModule"], projects_angular_cdk_src_directives_focusable_focusable_module__WEBPACK_IMPORTED_MODULE_6__["FocusableModule"], projects_angular_cdk_src_directives_focusVIsible_focusVisible_module__WEBPACK_IMPORTED_MODULE_7__["FocusVisibleModule"]],
          exports: [_tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_0__["TabGroupItemConnectorDirective"], _tab_group_component__WEBPACK_IMPORTED_MODULE_4__["TabGroupComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group-item-connector.directive.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group-item-connector.directive.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: TabGroupItemConnectorDirective */

  /***/
  function srcAppLibraryMuiFlexLibraryComponentsMuiTabsGroupTabGroupItemConnectorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabGroupItemConnectorDirective", function () {
      return TabGroupItemConnectorDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var projects_angular_cdk_src_abstract_interactiveGroupItemConnector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! projects/angular-cdk/src/abstract/interactiveGroupItemConnector */
    "./projects/angular-cdk/src/abstract/interactiveGroupItemConnector.ts");

    var TabGroupItemConnectorDirective = /*#__PURE__*/function (_projects_angular_cdk) {
      _inherits(TabGroupItemConnectorDirective, _projects_angular_cdk);

      var _super7 = _createSuper(TabGroupItemConnectorDirective);

      function TabGroupItemConnectorDirective(template) {
        var _this22;

        _classCallCheck(this, TabGroupItemConnectorDirective);

        _this22 = _super7.call(this, template);
        _this22.template = template;
        _this22.tabGroupItem = null;
        _this22.disabled = false;
        _this22.routerLinkOptions = {};
        _this22.routerLinkActiveOptions = {
          exact: false
        };
        return _this22;
      }

      _createClass(TabGroupItemConnectorDirective, [{
        key: "routerLink",
        get: function get() {
          return this.tabGroupItem === '' ? null : this.tabGroupItem;
        }
      }]);

      return TabGroupItemConnectorDirective;
    }(projects_angular_cdk_src_abstract_interactiveGroupItemConnector__WEBPACK_IMPORTED_MODULE_1__["AbstractInteractiveGroupItemConnector"]);

    TabGroupItemConnectorDirective.ɵfac = function TabGroupItemConnectorDirective_Factory(t) {
      return new (t || TabGroupItemConnectorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    TabGroupItemConnectorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TabGroupItemConnectorDirective,
      selectors: [["", "tabGroupItem", ""]],
      inputs: {
        tabGroupItem: "tabGroupItem",
        disabled: ["tabGroupItemDisabled", "disabled"],
        routerLinkOptions: ["tabGroupItemOptions", "routerLinkOptions"],
        routerLinkActiveOptions: ["tabGroupItemActiveOptions", "routerLinkActiveOptions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabGroupItemConnectorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[tabGroupItem]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
          }]
        }];
      }, {
        tabGroupItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tabGroupItemDisabled']
        }],
        routerLinkOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tabGroupItemOptions']
        }],
        routerLinkActiveOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tabGroupItemActiveOptions']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: TabGroupComponent */

  /***/
  function srcAppLibraryMuiFlexLibraryComponentsMuiTabsGroupTabGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabGroupComponent", function () {
      return TabGroupComponent;
    });
    /* harmony import */


    var _tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tab-group-item-connector.directive */
    "./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group-item-connector.directive.ts");
    /* harmony import */


    var projects_angular_cdk_src_abstract_interactiveGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! projects/angular-cdk/src/abstract/interactiveGroup */
    "./projects/angular-cdk/src/abstract/interactiveGroup.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var projects_angular_core_src_constants_animationDuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! projects/angular-core/src/constants/animationDuration */
    "./projects/angular-core/src/constants/animationDuration.ts");
    /* harmony import */


    var projects_angular_cdk_src_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! projects/angular-cdk/src/utils/miscellaneous/getOriginalArrayFromQueryList */
    "./projects/angular-cdk/src/utils/miscellaneous/getOriginalArrayFromQueryList.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var projects_angular_cdk_src_utils_focus_isNativeFocusedIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! projects/angular-cdk/src/utils/focus/isNativeFocusedIn */
    "./projects/angular-cdk/src/utils/focus/isNativeFocusedIn.ts");
    /* harmony import */


    var projects_angular_cdk_src_utils_focus_blurNativeFocused__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! projects/angular-cdk/src/utils/focus/blurNativeFocused */
    "./projects/angular-cdk/src/utils/focus/blurNativeFocused.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var projects_angular_cdk_src_constants_pollingTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! projects/angular-cdk/src/constants/pollingTime */
    "./projects/angular-cdk/src/constants/pollingTime.ts");
    /* harmony import */


    var projects_angular_core_src_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! projects/angular-core/src/directives/mode/mode.directive */
    "./projects/angular-core/src/directives/mode/mode.directive.ts");
    /* harmony import */


    var projects_angular_cdk_src_services_destroy_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! projects/angular-cdk/src/services/destroy.service */
    "./projects/angular-cdk/src/services/destroy.service.ts");
    /* harmony import */


    var projects_angular_cdk_src_tokens_focusableItemAccessor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! projects/angular-cdk/src/tokens/focusableItemAccessor */
    "./projects/angular-cdk/src/tokens/focusableItemAccessor.ts");
    /* harmony import */


    var _projects_angular_cdk_src_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../../projects/angular-cdk/src/directives/focusable/focusable.directive */
    "./projects/angular-cdk/src/directives/focusable/focusable.directive.ts");
    /* harmony import */


    var _projects_angular_cdk_src_directives_focusVIsible_focusVisible_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../../../projects/angular-cdk/src/directives/focusVIsible/focusVisible.directive */
    "./projects/angular-cdk/src/directives/focusVIsible/focusVisible.directive.ts");
    /* harmony import */


    var _projects_angular_cdk_src_directives_hovered_hovered_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../../projects/angular-cdk/src/directives/hovered/hovered.directive */
    "./projects/angular-cdk/src/directives/hovered/hovered.directive.ts");

    var _c0 = ["scrollbar"];
    var _c1 = ["underlineEl"];
    var _c2 = ["focusableElement"];
    var _c3 = ["item"];
    var _c4 = ["links"];

    function TabGroupComponent_ng_container_4_div_1_a_3_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
      }
    }

    function TabGroupComponent_ng_container_4_div_1_a_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusVisibleChange", function TabGroupComponent_ng_container_4_div_1_a_3_Template_a_focusVisibleChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r17.onFocusVisible($event, itemIndex_r4);
        })("hoveredChange", function TabGroupComponent_ng_container_4_div_1_a_3_Template_a_hoveredChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r20.onItemHovered($event, itemIndex_r4);
        })("pressedChange", function TabGroupComponent_ng_container_4_div_1_a_3_Template_a_pressedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r22.onItemPressed($event, itemIndex_r4);
        })("keydown.enter", function TabGroupComponent_ng_container_4_div_1_a_3_Template_a_keydown_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r24.onLinkEnter($event, _r14);
        })("keydown.space", function TabGroupComponent_ng_container_4_div_1_a_3_Template_a_keydown_space_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r25.onLinkEnter($event, _r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TabGroupComponent_ng_container_4_div_1_a_3_ng_container_3_Template, 1, 0, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        var itemConnector_r3 = ctx_r26.$implicit;
        var itemIndex_r4 = ctx_r26.index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("focusable", ctx_r11.itemIsFocusable(itemConnector_r3, itemIndex_r4))("href", itemConnector_r3.routerLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", itemConnector_r3.routerLinkOptions.target);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", itemConnector_r3.template);
      }
    }

    function TabGroupComponent_ng_container_4_div_1_ng_template_4_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
      }
    }

    function TabGroupComponent_ng_container_4_div_1_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusVisibleChange", function TabGroupComponent_ng_container_4_div_1_ng_template_4_Template_a_focusVisibleChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r30.onFocusVisible($event, itemIndex_r4);
        })("hoveredChange", function TabGroupComponent_ng_container_4_div_1_ng_template_4_Template_a_hoveredChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r33.onItemHovered($event, itemIndex_r4);
        })("pressedChange", function TabGroupComponent_ng_container_4_div_1_ng_template_4_Template_a_pressedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r35.onItemPressed($event, itemIndex_r4);
        })("keydown.enter", function TabGroupComponent_ng_container_4_div_1_ng_template_4_Template_a_keydown_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r37.onLinkEnter($event, _r27);
        })("keydown.space", function TabGroupComponent_ng_container_4_div_1_ng_template_4_Template_a_keydown_space_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r38.onLinkEnter($event, _r27);
        })("keydown.arrowLeft", function TabGroupComponent_ng_container_4_div_1_ng_template_4_Template_a_keydown_arrowLeft_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r39.onItemKeyDownArrowLeft($event, itemIndex_r4);
        })("keydown.arrowRight", function TabGroupComponent_ng_container_4_div_1_ng_template_4_Template_a_keydown_arrowRight_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r41.onItemKeyDownArrowRight($event, itemIndex_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TabGroupComponent_ng_container_4_div_1_ng_template_4_ng_container_3_Template, 1, 0, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        var itemConnector_r3 = ctx_r43.$implicit;
        var itemIndex_r4 = ctx_r43.index;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fragment", itemConnector_r3.routerLinkOptions.fragment)("preserveFragment", itemConnector_r3.routerLinkOptions.preserveFragment)("focusable", ctx_r13.itemIsFocusable(itemConnector_r3, itemIndex_r4))("routerLink", itemConnector_r3.routerLink)("replaceUrl", itemConnector_r3.routerLinkOptions.replaceUrl)("target", itemConnector_r3.routerLinkOptions.target)("skipLocationChange", itemConnector_r3.routerLinkOptions.skipLocationChange)("queryParams", itemConnector_r3.routerLinkOptions.queryParams)("target", itemConnector_r3.routerLinkOptions.target);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", itemConnector_r3.template);
      }
    }

    function TabGroupComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TabGroupComponent_ng_container_4_div_1_a_3_Template, 4, 4, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TabGroupComponent_ng_container_4_div_1_ng_template_4_Template, 4, 10, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        var itemIndex_r4 = ctx_r44.index;
        var itemConnector_r3 = ctx_r44.$implicit;
        var itemIndexLast_r5 = ctx_r44.last;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("item_last", ctx_r6.itemsConnectors.length - 1 === itemIndex_r4)("item_hidden", ctx_r6.itemIsHidden(itemIndex_r4))("item_focusable", ctx_r6.itemIsFocusable(itemConnector_r3, itemIndex_r4))("item_hovered", ctx_r6.itemIsHovered(itemConnector_r3, itemIndex_r4))("item_pressed", ctx_r6.itemIsPressed(itemConnector_r3, itemIndex_r4));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("focusable", itemIndexLast_r5)("routerLinkActiveOptions", itemConnector_r3.routerLinkActiveOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", itemConnector_r3.routerLinkOptions.useHref)("ngIfElse", _r12);
      }
    }

    function TabGroupComponent_ng_container_4_ng_template_2_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
      }
    }

    function TabGroupComponent_ng_container_4_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusVisibleChange", function TabGroupComponent_ng_container_4_ng_template_2_Template_span_focusVisibleChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r48.onFocusVisible($event, itemIndex_r4);
        })("hoveredChange", function TabGroupComponent_ng_container_4_ng_template_2_Template_span_hoveredChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r51.onItemHovered($event, itemIndex_r4);
        })("pressedChange", function TabGroupComponent_ng_container_4_ng_template_2_Template_span_pressedChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r53.onItemPressed($event, itemIndex_r4);
        })("click", function TabGroupComponent_ng_container_4_ng_template_2_Template_span_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var itemConnector_r3 = ctx_r56.$implicit;
          var itemIndex_r4 = ctx_r56.index;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r55.onItemClick($event, itemConnector_r3, itemIndex_r4);
        })("keydown.enter", function TabGroupComponent_ng_container_4_ng_template_2_Template_span_keydown_enter_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);

          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r57.onLinkEnter($event, _r45);
        })("keydown.space", function TabGroupComponent_ng_container_4_ng_template_2_Template_span_keydown_space_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);

          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r58.onLinkEnter($event, _r45);
        })("keydown.arrowLeft", function TabGroupComponent_ng_container_4_ng_template_2_Template_span_keydown_arrowLeft_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r59.onItemKeyDownArrowLeft($event, itemIndex_r4);
        })("keydown.arrowRight", function TabGroupComponent_ng_container_4_ng_template_2_Template_span_keydown_arrowRight_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);

          var itemIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r61.onItemKeyDownArrowRight($event, itemIndex_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TabGroupComponent_ng_container_4_ng_template_2_ng_container_4_Template, 1, 0, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        var itemIndex_r4 = ctx_r63.index;
        var itemConnector_r3 = ctx_r63.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("item_last", ctx_r8.itemsConnectors.length - 1 === itemIndex_r4)("item_active", ctx_r8.itemIsActive(itemIndex_r4))("item_hidden", ctx_r8.itemIsHidden(itemIndex_r4))("item_focusable", ctx_r8.itemIsFocusable(itemConnector_r3, itemIndex_r4))("item_hovered", ctx_r8.itemIsHovered(itemConnector_r3, itemIndex_r4))("item_pressed", ctx_r8.itemIsPressed(itemConnector_r3, itemIndex_r4));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("focusable", ctx_r8.itemIsFocusable(itemConnector_r3, itemIndex_r4));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", itemConnector_r3.template);
      }
    }

    function TabGroupComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TabGroupComponent_ng_container_4_div_1_Template, 6, 14, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TabGroupComponent_ng_container_4_ng_template_2_Template, 5, 14, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var itemConnector_r3 = ctx.$implicit;

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.useLinkForItem(itemConnector_r3))("ngIfElse", _r7);
      }
    }

    var MORE_WIDTH = 50;
    var MARGIN = 24;
    var MARGIN_SMALL = 16;

    var TabGroupComponent = /*#__PURE__*/function (_projects_angular_cdk2) {
      _inherits(TabGroupComponent, _projects_angular_cdk2);

      var _super8 = _createSuper(TabGroupComponent);

      function TabGroupComponent(changeDetectorRef, elementRef, renderer, documentRef, ngZone, destroy$, router, modeDirective) {
        var _this23;

        _classCallCheck(this, TabGroupComponent);

        _this23 = _super8.call(this, changeDetectorRef, elementRef);
        _this23.renderer = renderer;
        _this23.documentRef = documentRef;
        _this23.ngZone = ngZone;
        _this23.modeDirective = modeDirective;
        _this23.underline = true;
        _this23.allowResize = false;
        _this23.size = 'm';
        _this23.lastVisibleIndex = Infinity;
        _this23.opened = false;

        if (!router) {
          return _possibleConstructorReturn(_this23);
        }

        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(projects_angular_cdk_src_constants_pollingTime__WEBPACK_IMPORTED_MODULE_10__["POLLING_TIME"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(destroy$)).subscribe(function () {
          _this23.checkRouterLinks();
        });
        return _this23;
      }

      _createClass(TabGroupComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this24 = this;

          if (!this.itemsConnectors) {
            return;
          }

          this.itemsConnectors.changes.subscribe(function () {
            var itemConnectors = Object(projects_angular_cdk_src_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__["getOriginalArrayFromQueryList"])(_this24.itemsConnectors);

            if (Object(projects_angular_cdk_src_utils_focus_isNativeFocusedIn__WEBPACK_IMPORTED_MODULE_6__["isNativeFocusedIn"])(_this24.elementRef.nativeElement)) {
              Object(projects_angular_cdk_src_utils_focus_blurNativeFocused__WEBPACK_IMPORTED_MODULE_7__["blurNativeFocused"])(_this24.documentRef);
            }

            if (_this24.activeItemIndex !== null && !itemConnectors[_this24.activeItemIndex]) {
              _this24.updateActiveItemIndex(_this24.activeItemIndex - 1);

              _this24.setUnderlinePosition();
            }
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var _this25 = this;

          this.checkRouterLinks();
          this.ngZone.runOutsideAngular(function () {
            setTimeout(function () {
              _this25.setUnderlinePosition();
            });
          });
        }
      }, {
        key: "moreItemIsActive",
        value: function moreItemIsActive(connector) {
          return !!this.itemsConnectors && Object(projects_angular_cdk_src_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__["getOriginalArrayFromQueryList"])(this.itemsConnectors).indexOf(connector) === this.activeItemIndex;
        }
      }, {
        key: "itemIsHidden",
        value: function itemIsHidden(index) {
          return index > this.lastVisibleIndex;
        }
      }, {
        key: "onFocusVisible",
        value: function onFocusVisible(focusVisible, itemIndex) {
          if (!focusVisible && itemIndex !== this.focusableItemIndex) {
            return;
          }

          this.updateFocusVisible(focusVisible);
        }
      }, {
        key: "onItemClick",
        value: function onItemClick(event, itemConnector, itemIndex) {
          event.preventDefault();
          this.tryChangeActiveItemIndex(itemConnector, itemIndex); // if (this.scrollbar && this.scrollbar.browserScrollRef && this.focusableElements) {
          //     this.scrollToElement(
          //         this.focusableElements.toArray()[itemIndex].nativeElement,
          //         this.scrollbar.browserScrollRef!.nativeElement,
          //     );
          // }
        }
      }, {
        key: "onHiddenItemClick",
        value: function onHiddenItemClick(item, index) {
          this.tryChangeActiveItemIndex(item, this.lastVisibleIndex + index);
          this.close();
        }
      }, {
        key: "onItemHovered",
        value: function onItemHovered(hovered, itemIndex) {
          this.updateHoveredItemIndex(hovered, itemIndex);
        }
      }, {
        key: "onItemPressed",
        value: function onItemPressed(pressed, itemIndex) {
          this.updatePressedItemIndex(pressed, itemIndex);
        }
      }, {
        key: "onItemKeyDownArrowLeft",
        value: function onItemKeyDownArrowLeft(event, itemIndex) {
          this.moveFocusToPrevItem(itemIndex, event);
        }
      }, {
        key: "onItemKeyDownArrowRight",
        value: function onItemKeyDownArrowRight(event, itemIndex) {
          this.moveFocusToNextItem(itemIndex, event);
        }
      }, {
        key: "onItemKeyDownEnter",
        value: function onItemKeyDownEnter(event, itemConnector, itemIndex) {
          event.preventDefault();
          this.tryChangeActiveItemIndex(itemConnector, itemIndex);
        }
      }, {
        key: "onMoreItemKeyDownEnter",
        value: function onMoreItemKeyDownEnter() {
          this.opened = !this.opened;
        }
      }, {
        key: "onLinkEnter",
        value: function onLinkEnter(event, element) {
          event.preventDefault();
          element.click();
        }
      }, {
        key: "setUnderlinePosition",
        value: function setUnderlinePosition() {
          if (!this.underline || !this.underlineEl || !this.items) {
            return;
          }

          if (this.activeItemIndex === null) {
            this.renderer.setStyle(this.underlineEl.nativeElement, 'transform', 'scale(0.01)');
            this.renderer.setStyle(this.underlineEl.nativeElement, 'width', '0');
            return;
          }

          if (this.underlineEl.nativeElement.offsetWidth) {
            this.renderer.setStyle(this.underlineEl.nativeElement, 'transitionDuration', projects_angular_core_src_constants_animationDuration__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DURATION"]);
          }

          var activeElRef = Object(projects_angular_cdk_src_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__["getOriginalArrayFromQueryList"])(this.items)[this.activeItemIndex];

          if (!activeElRef) {
            return;
          }

          var activeEl = activeElRef.nativeElement;
          var offsetWidth = activeEl.offsetWidth,
              offsetLeft = activeEl.offsetLeft;
          this.renderer.setStyle(this.underlineEl.nativeElement, 'transform', "translate3d(".concat(offsetLeft, "px, 0px, 0px)"));
          this.renderer.setStyle(this.underlineEl.nativeElement, 'width', "".concat(offsetWidth, "px"));
        }
      }, {
        key: "moveFocusToNextItem",
        value: function moveFocusToNextItem(itemIndex, event) {
          event.preventDefault();
          this.updateFocusVisible(true);

          if (!this.itemsConnectors) {
            return;
          }

          var array = Object(projects_angular_cdk_src_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__["getOriginalArrayFromQueryList"])(this.itemsConnectors);
          var newIndex = itemIndex + 1;
          var visibleArrayLength = this.isMoreItemsExist ? this.lastVisibleIndex + 2 : array.length;

          do {
            if (newIndex >= visibleArrayLength) {
              newIndex = 0;
            } else if (array[newIndex].disabled) {
              newIndex++;
            } else {
              this.updateFocusableItemIndex(newIndex);
              break;
            }
          } while (itemIndex !== newIndex);
        }
      }, {
        key: "moveFocusToPrevItem",
        value: function moveFocusToPrevItem(itemIndex, event) {
          event.preventDefault();
          this.updateFocusVisible(true);

          if (!this.itemsConnectors) {
            return;
          }

          var array = Object(projects_angular_cdk_src_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__["getOriginalArrayFromQueryList"])(this.itemsConnectors);
          var newIndex = itemIndex - 1;
          var visibleArrayLength = this.isMoreItemsExist ? this.lastVisibleIndex + 1 : array.length - 1;

          do {
            if (newIndex < 0) {
              newIndex = visibleArrayLength;
            } else if (array[newIndex].disabled) {
              newIndex--;
            } else {
              this.updateFocusableItemIndex(newIndex);
              break;
            }
          } while (itemIndex !== newIndex);
        }
      }, {
        key: "updateLastVisibleIndex",
        value: function updateLastVisibleIndex() {
          var _this26 = this;

          if (!this.focusableElements) {
            return;
          }

          if (!this.allowResize) {
            this.setLastVisibleIndex(this.itemsLimit - 1);
            return;
          }

          var margin = this.size === 'm' ? MARGIN : MARGIN_SMALL;
          var width = this.elementRef.nativeElement.clientWidth - MORE_WIDTH;
          var accumulatedWidth = 0;
          var lastVisibleIndex = 0;
          this.focusableElements.some(function (_ref13, index, array) {
            var nativeElement = _ref13.nativeElement;
            accumulatedWidth += array.length - 1 === index ? nativeElement.clientWidth - MORE_WIDTH - margin : nativeElement.clientWidth;
            var isExceeding = accumulatedWidth > width || index > _this26.itemsLimit;

            if (!isExceeding) {
              lastVisibleIndex = index;
            }

            return isExceeding;
          });
          this.setLastVisibleIndex(this.itemsConnectors && lastVisibleIndex === this.itemsConnectors.length - 1 ? Infinity : lastVisibleIndex - 1);
        }
      }, {
        key: "setLastVisibleIndex",
        value: function setLastVisibleIndex(lastVisibleIndex) {
          this.lastVisibleIndex = lastVisibleIndex;

          if (!this.isMoreItemsExist) {
            this.opened = false;
          }

          this.changeDetectorRef.detectChanges();
        }
      }, {
        key: "close",
        value: function close() {
          this.opened = false;
          this.focusableItemIndex = this.lastVisibleIndex + 1;
        }
      }, {
        key: "checkRouterLinks",
        value: function checkRouterLinks() {
          var _this27 = this;

          if (!this.links || this.links.length === 0 || !this.itemsConnectors || !this.focusableElements) {
            return;
          }

          var activeLink = this.links.find(function (link) {
            return link.isActive;
          });
          var focusableElements = Object(projects_angular_cdk_src_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__["getOriginalArrayFromQueryList"])(this.focusableElements);
          var activeElement = this.activeItemIndex && focusableElements[this.activeItemIndex];
          var isLink = !!activeElement && activeElement.nativeElement.tagName.toUpperCase() === 'A';

          if (!activeLink) {
            if (!isLink) {
              return;
            }

            setTimeout(function () {
              _this27.updateActiveItemIndex(null);

              _this27.setUnderlinePosition();
            });
            return;
          }

          var itemsConnectors = Object(projects_angular_cdk_src_utils_miscellaneous_getOriginalArrayFromQueryList__WEBPACK_IMPORTED_MODULE_4__["getOriginalArrayFromQueryList"])(this.itemsConnectors);
          var activeIndex = itemsConnectors.findIndex(function (connector) {
            return connector.routerLinkActiveOptions === activeLink.routerLinkActiveOptions;
          });

          if (activeIndex !== -1 && activeIndex !== this.activeItemIndex) {
            setTimeout(function () {
              _this27.updateActiveItemIndex(activeIndex);

              _this27.setUnderlinePosition();
            });
          }
        }
      }, {
        key: "isMoreItemsFocusable",
        get: function get() {
          return this.focusableItemIndex === this.lastVisibleIndex + 1;
        }
      }, {
        key: "isMoreItemsExist",
        get: function get() {
          return !!this.itemsConnectors && this.lastVisibleIndex < this.itemsConnectors.length - 1;
        }
      }, {
        key: "isMoreItemsActive",
        get: function get() {
          return !!this.activeItemIndex && this.activeItemIndex > this.lastVisibleIndex || this.isActiveRouteHidden;
        }
      }, {
        key: "isActiveRouteHidden",
        get: function get() {
          var _this28 = this;

          return !!this.links && this.links.some(function (item) {
            return item.isActive && !!_this28.itemsConnectors && _this28.itemsConnectors.some(function (connector, index) {
              return connector.routerLinkActiveOptions === item.routerLinkActiveOptions && index > _this28.lastVisibleIndex;
            });
          });
        }
      }, {
        key: "isMoreItemsHovered",
        get: function get() {
          return this.hoveredItemIndex === this.lastVisibleIndex + 1;
        }
      }, {
        key: "isMoreItemsPressed",
        get: function get() {
          return this.pressedItemIndex === this.lastVisibleIndex + 1;
        }
      }, {
        key: "hostMode",
        get: function get() {
          return this.modeDirective ? this.modeDirective.mode : null;
        }
      }]);

      return TabGroupComponent;
    }(projects_angular_cdk_src_abstract_interactiveGroup__WEBPACK_IMPORTED_MODULE_1__["AbstractInteractiveGroup"]);

    TabGroupComponent.ɵfac = function TabGroupComponent_Factory(t) {
      return new (t || TabGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_angular_cdk_src_services_destroy_service__WEBPACK_IMPORTED_MODULE_12__["DestroyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_angular_core_src_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_11__["ModeDirective"], 8));
    };

    TabGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TabGroupComponent,
      selectors: [["tab-group"]],
      contentQueries: function TabGroupComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_0__["TabGroupItemConnectorDirective"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.itemsConnectors = _t);
        }
      },
      viewQuery: function TabGroupComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.scrollbar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.underlineEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusableElements = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.items = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.links = _t);
        }
      },
      hostVars: 4,
      hostBindings: function TabGroupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-host-size", ctx.size)("data-host-mode", ctx.hostMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("_underline", ctx.underline);
        }
      },
      inputs: {
        underline: "underline",
        allowResize: "allowResize",
        size: "size"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([projects_angular_cdk_src_services_destroy_service__WEBPACK_IMPORTED_MODULE_12__["DestroyService"], {
        provide: projects_angular_cdk_src_tokens_focusableItemAccessor__WEBPACK_IMPORTED_MODULE_13__["FOCUSABLE_ITEM_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return TabGroupComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 1,
      consts: [[1, "content"], ["mode", "hidden"], ["scrollbar", ""], ["changeReceiver", "", 1, "wrapper"], [4, "ngFor", "ngForOf"], [1, "underline"], ["underlineEl", ""], ["automation-id", "tab-group__item", "class", "item", "routerLinkActive", "item_active", 3, "focusable", "item_last", "routerLinkActiveOptions", "item_hidden", "item_focusable", "item_hovered", "item_pressed", 4, "ngIf", "ngIfElse"], ["elseNotLinkOrDisabledTemplate", ""], ["automation-id", "tab-group__item", "routerLinkActive", "item_active", 1, "item", 3, "focusable", "routerLinkActiveOptions"], ["links", "routerLinkActive", "item", ""], ["automation-id", "tab-group__link", "class", "outline", 3, "focusable", "href", "target", "focusVisibleChange", "hoveredChange", "pressedChange", "keydown.enter", "keydown.space", 4, "ngIf", "ngIfElse"], ["routerLinkTemplate", ""], ["automation-id", "tab-group__link", 1, "outline", 3, "focusable", "href", "target", "focusVisibleChange", "hoveredChange", "pressedChange", "keydown.enter", "keydown.space"], ["linkNode", "", "focusableElement", ""], [4, "ngTemplateOutlet"], ["automation-id", "tab-group__link", 1, "outline", 3, "fragment", "preserveFragment", "focusable", "routerLink", "replaceUrl", "target", "skipLocationChange", "queryParams", "focusVisibleChange", "hoveredChange", "pressedChange", "keydown.enter", "keydown.space", "keydown.arrowLeft", "keydown.arrowRight"], ["automation-id", "tab-group__item", 1, "item"], ["item", ""], ["automation-id", "tab-group__fucusable-element", 1, "outline", 3, "focusable", "focusVisibleChange", "hoveredChange", "pressedChange", "click", "keydown.enter", "keydown.space", "keydown.arrowLeft", "keydown.arrowRight"], ["focusableElement", ""]],
      template: function TabGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TabGroupComponent_ng_container_4_Template, 4, 2, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.itemsConnectors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _projects_angular_cdk_src_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_14__["FocusableDirective"], _projects_angular_cdk_src_directives_focusVIsible_focusVisible_directive__WEBPACK_IMPORTED_MODULE_15__["FocusVisibleDirective"], _projects_angular_cdk_src_directives_hovered_hovered_directive__WEBPACK_IMPORTED_MODULE_16__["HoveredDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%] {\n  display: block;\n  white-space: nowrap;\n  font-size: 15px;\n  line-height: 24px;\n  font-family: 'Roboto', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n}\n[data-host-mode='nav'][_nghost-%COMP%] {\n  line-height: 24px;\n}\n[data-host-mode='nav'][_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  display: none;\n}\n[data-host-mode='nav'][_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  color: #959ba4;\n}\n[data-host-mode='nav'][_nghost-%COMP%]   .item_hovered[_ngcontent-%COMP%], [data-host-mode='nav'][_nghost-%COMP%]   .item_active[_ngcontent-%COMP%] {\n  color: #333;\n}\n[data-mui-host-size='s'][_nghost-%COMP%]   [data-host-mode='nav'][_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n[data-host-mode='nav']._underline[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 9px 0 5px;\n}\n[data-mui-host-size='s'][_nghost-%COMP%]   [data-host-mode='nav']._underline[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 6px 0 4px;\n}\n.content[_ngcontent-%COMP%] {\n  margin: 0 -14px;\n}\n[data-host-size=\"s\"][_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 0 -10px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  margin: 0 14px;\n}\n._bordered[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  box-shadow: inset 0 -1px #e7e8ea;\n}\n[data-mui-host-mode=\"light\"]._bordered[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  box-shadow: inset 0 -1px rgba(255, 255, 255, 0.24);\n}\n[data-mui-host-mode=\"dark\"]._bordered[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  box-shadow: inset 0 -1px rgba(51, 51, 51, 0.24);\n}\n[data-host-size='s'][_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  height: 44px;\n  line-height: 22px;\n  margin: 0 10px;\n}\n.item[_ngcontent-%COMP%] {\n  transition: border-color 0.2s ease-in-out;\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  margin-right: 24px;\n  padding: 8px 0 6px;\n  color: #79818c;\n  border-bottom: 2px solid transparent;\n  outline: none;\n}\n.item_last[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.item_more[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.item_hovered[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]:hover {\n  border-color: #e7e8ea;\n  color: #333;\n}\n.item_pressed[_ngcontent-%COMP%] {\n  color: #333;\n}\n.item_hidden[_ngcontent-%COMP%] {\n  width: 0;\n  max-width: 0;\n  margin: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.item_active[_ngcontent-%COMP%] {\n  color: #333;\n}\n.item_disabled[_ngcontent-%COMP%] {\n  opacity: 0.56;\n}\n[data-mui-host-mode='light'][_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  color: #e7e8ea;\n}\n[data-mui-host-mode='light'][_nghost-%COMP%]   .item_hovered[_ngcontent-%COMP%], [data-mui-host-mode='light'][_nghost-%COMP%]   .item_pressed[_ngcontent-%COMP%], [data-mui-host-mode='light'][_nghost-%COMP%]   .item_active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[data-mui-host-mode='dark'][_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  color: #333;\n}\n[data-mui-host-mode='dark'][_nghost-%COMP%]   .item_hovered[_ngcontent-%COMP%], [data-mui-host-mode='dark'][_nghost-%COMP%]   .item_pressed[_ngcontent-%COMP%], [data-mui-host-mode='dark'][_nghost-%COMP%]   .item_active[_ngcontent-%COMP%] {\n  color: #333;\n}\n._underline[_nghost-%COMP%]   .item_hovered[_ngcontent-%COMP%] {\n  border-color: #e7e8ea;\n}\n[data-mui-host-size='s'][_nghost-%COMP%]   ._underline[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 6px 0 4px;\n}\n._underline._server[_nghost-%COMP%]   .item_active[_ngcontent-%COMP%] {\n  border-color: #ffdd2d;\n}\n[data-host-mode='light']._underline[_nghost-%COMP%]   .item_hovred[_ngcontent-%COMP%] {\n  border-color: #e7e8ea;\n}\n[data-host-size='s'][_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  padding: 6px 0;\n}\n[data-host-size='s'][_nghost-%COMP%]   .item_hidden[_ngcontent-%COMP%], [data-host-size='s'][_nghost-%COMP%]   .item_last[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.outline[_ngcontent-%COMP%] {\n  display: block;\n  flex-shrink: 0;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  padding: 6px 12px;\n  margin: 0 -14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  color: inherit;\n  text-decoration: none;\n  outline: none;\n}\n.outline_more[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n._focus-visible[_nghost-%COMP%]   .item_focusable[_ngcontent-%COMP%]   .outline[_ngcontent-%COMP%] {\n  border-color: #e7e8ea;\n}\n[data-host-mode='light']._focus-visible[_nghost-%COMP%]   .item_focusable[_ngcontent-%COMP%]   .outline[_ngcontent-%COMP%] {\n  border-color: #fff;\n}\n.item_active[_ngcontent-%COMP%]   .outline[_ngcontent-%COMP%], .item_disabled[_ngcontent-%COMP%]   .outline[_ngcontent-%COMP%] {\n  cursor: default;\n}\n[data-host-size='s'][_nghost-%COMP%]   .outline[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  margin: 0 -10px;\n}\n.more-item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 100%;\n  box-sizing: border-box;\n  padding: 10px 48px 10px 16px;\n  text-decoration: none;\n  outline: none;\n  color: #79818c;\n}\n.more-item[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.more-item_active[_ngcontent-%COMP%] {\n  color: #333;\n  cursor: default;\n}\n.more-item_active[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.arrow[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out;\n  margin: -4px;\n}\n.arrow_opened[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.underline[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  height: 2px;\n  background: #ffdd2d;\n  transition-duration: 0s;\n  transition-property: transform, width;\n  pointer-events: none;\n}\n[data-host-mode='dark'][_nghost-%COMP%]   .underline[_ngcontent-%COMP%] {\n  background: #333;\n}\n[data-host-mode='light'][_nghost-%COMP%]   .underline[_ngcontent-%COMP%] {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9tdWktZmxleC1saWJyYXJ5L2NvbXBvbmVudHMvbXVpLXRhYnMtZ3JvdXAvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWRpcmVjdGlvbi5sZXNzIiwic3JjL2FwcC9saWJyYXJ5L211aS1mbGV4LWxpYnJhcnkvY29tcG9uZW50cy9tdWktdGFicy1ncm91cC90YWItZ3JvdXAuc3R5bGUubGVzcyIsInNyYy9hcHAvbGlicmFyeS9tdWktZmxleC1saWJyYXJ5L2NvbXBvbmVudHMvbXVpLXRhYnMtZ3JvdXAvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRleHQubGVzcyIsInNyYy9hcHAvbGlicmFyeS9tdWktZmxleC1saWJyYXJ5L2NvbXBvbmVudHMvbXVpLXRhYnMtZ3JvdXAvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXNwYWNlcy5sZXNzIiwic3JjL2FwcC9saWJyYXJ5L211aS1mbGV4LWxpYnJhcnkvY29tcG9uZW50cy9tdWktdGFicy1ncm91cC9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtYnV0dG9ucy5sZXNzIiwic3JjL2FwcC9saWJyYXJ5L211aS1mbGV4LWxpYnJhcnkvY29tcG9uZW50cy9tdWktdGFicy1ncm91cC9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtY29sdW1zLmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL211aS10YWJzLWdyb3VwL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hc3NldHMvc291cmNlL3N0eWxlcy9tdWktZmxleC1saWJyYXJ5L2xlc3MvZmxleC10YWJsZS5sZXNzIiwic3JjL2FwcC9saWJyYXJ5L211aS1mbGV4LWxpYnJhcnkvY29tcG9uZW50cy9tdWktdGFicy1ncm91cC9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXBwL2xpYnJhcnkvbXVpLWZsZXgtbGlicmFyeS9jb21wb25lbnRzL211aS10YWJzLWdyb3VwL3RhYi1ncm91cC5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxtQkFBQTtBQ0NaO0FERVE7RUFDSSw4QkFBQTtBQ0FaO0FER1E7RUFDSSw2QkFBQTtBQ0RaO0FESVE7RUFDSSx5QkFBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0FDSFo7QURNUTtFQUNJLHVCQUFBO0FDSlo7QURPUTtFQUNJLHFCQUFBO0FDTFo7QURhSTtFQUNJLHNCQUFBO0FDWFI7QURhUTtFQUNJLHVCQUFBO0FDWFo7QURjUTtFQUNJLDhCQUFBO0FDWlo7QURlUTtFQUNJLDZCQUFBO0FDYlo7QURnQlE7RUFDSSxtQkFBQTtBQ2RaO0FEaUJTO0VBQ0kseUJBQUE7QUNmYjtBRGtCUTtFQUNJLHFCQUFBO0FDaEJaO0FEbUJRO0VBQ0ksdUJBQUE7QUNqQlo7QURvQlE7RUFDSSxxQkFBQTtBQ2xCWjtBRHVCSTtFQUNJLGVBQUE7QUNyQlI7QUQwQkE7RUFDSSxXQUFBO0FDeEJKO0FDM0RBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBRDZESjtBQzNESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FENkRSO0FDMURJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUQ0RFI7QUN6REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUQyRFI7QUN4REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUQwRFI7QUN2REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUR5RFI7QUN0REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUR3RFI7QUNyREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUR1RFI7QUNwREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURzRFI7QUNuREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURxRFI7QUNsREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURvRFI7QUNqREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURtRFI7QUNoREk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURrRFI7QUMvQ0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURpRFI7QUM5Q0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURnRFI7QUM3Q0k7RUFDSSxpQkFBQTtBRCtDUjtBQzNDSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBRDZDUjtBQzNDUTtFQUNJLFlBQUE7RUFDQSxxQ0FBQTtBRDZDWjtBQzFDUTtFQUNJLFVBQUE7RUFDQSxxQ0FBQTtBRDRDWjtBQ3BDQTtFQUNJLFlBQUE7RUFDQSw0Q0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QURxQ0o7QUNuQ0k7RUFDSSxVQUFBO0VBQ0EsNENBQUE7RUFFQSxnQ0FBQTtBRG9DUjtBQ2hDQTtFQUNJLFVBQUE7RUFDQSw0Q0FBQTtFQUVBLGdDQUFBO0FEaUNKO0FDOUJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURnQ0o7QUM3QkE7RUFDSSx5QkFBQTtFQUNBLGtDQUFBO0FEK0JKO0FFck5BO0VGdU5FLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUV4Tkk7RUFDSSxlQUFBO0FGME5SO0FFdk5JO0VBQ0ksaUJBQUE7QUZ5TlI7QUV0Tkk7RUFDSSxpQkFBQTtBRndOUjtBRXJOSTtFQUNJLGtCQUFBO0FGdU5SO0FFcE5JO0VBQ0ksa0JBQUE7QUZzTlI7QUVuTkk7RUFDSSxrQkFBQTtBRnFOUjtBRWxOSTtFQUNJLGtCQUFBO0FGb05SO0FFak5JO0VBQ0ksa0JBQUE7QUZtTlI7QUVoTkk7RUFDSSxrQkFBQTtBRmtOUjtBRS9NSTtFQUNJLGtCQUFBO0FGaU5SO0FFOU1JO0VBQ0ksa0JBQUE7QUZnTlI7QUUzTUk7RUFDSSxjQUFBO0FGNk1SO0FFMU1JO0VBQ0ksZ0JBQUE7QUY0TVI7QUV6TUk7RUFDSSxnQkFBQTtBRjJNUjtBRXhNSTtFQUNJLGlCQUFBO0FGME1SO0FFdk1JO0VBQ0ksaUJBQUE7QUZ5TVI7QUV0TUk7RUFDSSxpQkFBQTtBRndNUjtBRXJNSTtFQUNJLGlCQUFBO0FGdU1SO0FFcE1JO0VBQ0ksaUJBQUE7QUZzTVI7QUVuTUk7RUFDSSxpQkFBQTtBRnFNUjtBRWxNSTtFQUNJLGlCQUFBO0FGb01SO0FFak1JO0VBQ0ksaUJBQUE7QUZtTVI7QUU5TEk7RUFDSSxnQkFBQTtBRmdNUjtBRTdMSTtFQUNJLGtCQUFBO0FGK0xSO0FFNUxJO0VBQ0ksa0JBQUE7QUY4TFI7QUUzTEk7RUFDSSxtQkFBQTtBRjZMUjtBRTFMSTtFQUNJLG1CQUFBO0FGNExSO0FFekxJO0VBQ0ksbUJBQUE7QUYyTFI7QUV4TEk7RUFDSSxtQkFBQTtBRjBMUjtBRXZMSTtFQUNJLG1CQUFBO0FGeUxSO0FFdExJO0VBQ0ksbUJBQUE7QUZ3TFI7QUVyTEk7RUFDSSxtQkFBQTtBRnVMUjtBRXBMSTtFQUNJLG1CQUFBO0FGc0xSO0FFakxJO0VBQ0ksYUFBQTtBRm1MUjtBRWhMSTtFQUNJLGVBQUE7QUZrTFI7QUUvS0k7RUFDSSxlQUFBO0FGaUxSO0FFOUtJO0VBQ0ksZ0JBQUE7QUZnTFI7QUU3S0k7RUFDSSxnQkFBQTtBRitLUjtBRTVLSTtFQUNJLGdCQUFBO0FGOEtSO0FFM0tJO0VBQ0ksZ0JBQUE7QUY2S1I7QUUxS0k7RUFDSSxnQkFBQTtBRjRLUjtBRXpLSTtFQUNJLGdCQUFBO0FGMktSO0FFeEtJO0VBQ0ksZ0JBQUE7QUYwS1I7QUV2S0k7RUFDSSxnQkFBQTtBRnlLUjtBRy9WQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FIaVdKO0FHN1ZRO0VBQ0ksa0RBQUE7QUgrVlo7QUc1VlE7RUFDSSwwQ0FBQTtBSDhWWjtBRzNWUTtFQUNJLFlBQUE7QUg2Vlo7QUcxVlE7RUFDSSxrREFBQTtFQUNBLDZCQUFBO0FINFZaO0FHelZRO0VBQ0ksMENBQUE7RUFDQSw2QkFBQTtBSDJWWjtBR3hWUTtFQUNJLG9EQUFBO0FIMFZaO0FHdlZRO0VBQ0ksNENBQUE7QUh5Vlo7QUdyVlE7RUFDSSxnREFBQTtBSHVWWjtBR3BWUTtFQUNJLHdDQUFBO0VBQ0EsNkJBQUE7QUhzVlo7QUduVlE7RUFDSSwrQ0FBQTtBSHFWWjtBR2xWUTtFQUNJLHVDQUFBO0VBQ0EsNkJBQUE7QUhvVlo7QUcvVVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSGdWWjtBRzdVUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FIOFVaO0FHM1VRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUg0VVo7QUd2VUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUh5VUo7QUd0VUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUh3VUo7QUlqYUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FKbWFSO0FLemFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUwyYUo7QUt4YUE7RUFDSSxnQ0FBQTtBTDBhSjtBS3ZhQTs7RUFHSSxzQkFBQTtFQUNBLGdCQUFBO0FMeWFKO0FLdGFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBTHdhSjtBS3JhQTtFQUVJLCtCQUFBO0VBRUEseUJBQUE7RUFFQSx1Q0FBQTtFQUNBLFVBQUE7QUx1YUo7QUtwYUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUxzYUo7QUtuYUE7RUFDSSxtQkFBQTtBTHFhSjtBS2xhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBTG9hSjtBS2phQTtFQUNJLG1CQUFBO0FMbWFKO0FLaGFBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUxrYUo7QUsvWkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTGlhSjtBSzlaQTtFQUNJLDZCQUFBO0FMZ2FKO0FLN1pBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwrWko7QUs1WkE7O0VBRUksWUFBQTtBTDhaSjtBSzNaQTtFQUNJLGVBQUE7QUw2Wko7QUsxWkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTDRaSjtBS3paQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMMlpKO0FLeFpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwwWko7QUt2WkE7RUFDSSxzQkFBQTtBTHlaSjtBS3RaQTs7RUFFSSxlQUFBO0FMd1pKO0FLclpBOztFQUVJLGdCQUFBO0FMdVpKO0FLcFpBOztFQUVJLGtCQUFBO0FMc1pKO0FLblpBOztFQUVJLGlCQUFBO0FMcVpKO0FLbFpBOztFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBTG9aSjtBTWhpQkE7RUFFSSxjQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QU5naUJKO0FNMWhCSTtFQUVJLGlCQUFBO0FOMmhCUjtBTTdoQkk7RUFLUSxhQUFBO0FOMmhCWjtBTWhpQkk7RUFTUSxjQUFBO0FOMGhCWjtBTXZoQlk7O0VBRUksV0FBQTtBTnloQmhCO0FNdGhCWTtFQUNJLGNBQUE7QU53aEJoQjtBTXBoQlE7RUFDSSxrQkFBQTtBTnNoQlo7QU1waEJZO0VBQ0ksa0JBQUE7QU5zaEJoQjtBTS9nQkE7RUFDSSxlQUFBO0FOaWhCSjtBTS9nQkk7RUFDSSxlQUFBO0FOaWhCUjtBTTdnQkE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBTitnQko7QU03Z0JJO0VBQ0ksZ0NBQUE7QU4rZ0JSO0FNNWdCSTtFQUNJLGtEQUFBO0FOOGdCUjtBTTNnQkk7RUFDSSwrQ0FBQTtBTjZnQlI7QU0xZ0JJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBTjRnQlI7QU14Z0JBO0VBQ0kseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QU4wZ0JKO0FNeGdCSTtFQUNJLGVBQUE7QU4wZ0JSO0FNdmdCSTtFQUNJLFdBQUE7QU55Z0JSO0FNdGdCSTs7RUFFSSxxQkFBQTtFQUNBLFdBQUE7QU53Z0JSO0FNcmdCSTtFQUNJLFdBQUE7QU51Z0JSO0FNcGdCSTtFQUNJLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QU5zZ0JSO0FNbmdCSTtFQUNJLFdBQUE7QU5xZ0JSO0FNbGdCSTtFQUNJLGFBQUE7QU5vZ0JSO0FNamdCSTtFQUNJLGNBQUE7QU5tZ0JSO0FNamdCUTs7O0VBR0ksV0FBQTtBTm1nQlo7QU0vZkk7RUFDSSxXQUFBO0FOaWdCUjtBTS9mUTs7O0VBR0ksV0FBQTtBTmlnQlo7QU01ZlE7RUFDSSxxQkFBQTtBTjhmWjtBTTNmUTtFQUNJLGtCQUFBO0FONmZaO0FNemZJO0VBQ0kscUJBQUE7QU4yZlI7QU12ZlE7RUFDSSxxQkFBQTtBTnlmWjtBTS9lSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBTmlmUjtBTS9lUTs7RUFFSSxTQUFBO0FOaWZaO0FNNWVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FOOGVKO0FNNWVJO0VBQ0ksaUJBQUE7QU44ZVI7QU0zZUk7RUFDSSxxQkFBQTtBTjZlUjtBTTFlSTtFQUNJLGtCQUFBO0FONGVSO0FNemVJOztFQUVJLGVBQUE7QU4yZVI7QU14ZUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QU4wZVI7QU1yZUE7RUFFSSxPQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FOc2VKO0FNcGVJO0VBQ0ksV0FBQTtBTnNlUjtBTW5lSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FOcWVSO0FNbmVRO0VBQ0ksV0FBQTtBTnFlWjtBTWhlQTtFQUVJLHNDQUFBO0VBQ0EsWUFBQTtBTmllSjtBTS9kSTtFQUNJLHlCQUFBO0FOaWVSO0FNNWRBO0VBRUksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQkFBQTtBTjZkSjtBTTNkSTtFQUNJLGdCQUFBO0FONmRSO0FNMWRJO0VBQ0ksZ0JBQUE7QU40ZFIiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L211aS1mbGV4LWxpYnJhcnkvY29tcG9uZW50cy9tdWktdGFicy1ncm91cC90YWItZ3JvdXAuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJl9ob3Jpem9udGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfd3JhcCB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFzZWxpbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiAgICAmX3ZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWxlZnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgJl93cmFwIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbn1cblxuXG4uZnVsbC1zaXplIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mbGV4X2hvcml6b250YWwge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZsZXhfaG9yaXpvbnRhbC1taWRkbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5mbGV4X2hvcml6b250YWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2hvcml6b250YWxfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mbGV4X2hvcml6b250YWwtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF9ob3Jpem9udGFsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfdmVydGljYWwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXhfdmVydGljYWwtbWlkZGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF92ZXJ0aWNhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfdmVydGljYWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmZsZXhfdmVydGljYWwtbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZsZXhfdmVydGljYWwtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZmxleF93cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZ1bGwtc2l6ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm11aS10ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2gxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g1IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9ib2R5LXhsIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktcyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvZHkteHMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tdWktdGV4dF9saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5tdWktdGV4dF9saW5rLWhvdmVyZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5yb3V0ZXJfbGluayB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3V0ZXJfbGluay1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG59XG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuLm11aS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tdWktc3BhY2Uge1xuICAvKiBSSUdIVCBTUEFDRSAqL1xuICAvKiBMRUZUIFNQQUNFICovXG4gIC8qIEJPVFRPTSBTUEFDRSAqL1xuICAvKiBUT1AgU1BBQ0UgKi9cbn1cbi5tdWktc3BhY2VfcmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTMge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTYge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTcge1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTgge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTkge1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTAge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5tdWktc3BhY2VfbGVmdC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC02IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNyB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi5tdWktc3BhY2VfbGVmdC05IHtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm11aS1zcGFjZV9ib3R0b20tMSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS02IHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTcge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS05IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5tdWktc3BhY2VfdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm11aS1zcGFjZV90b3AtMSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0zIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tdWktc3BhY2VfdG9wLTQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLm11aS1zcGFjZV90b3AtNSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC02IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTcge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLm11aS1zcGFjZV90b3AtOCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4ubXVpLXNwYWNlX3RvcC05IHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5tdWktYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9zaXplLWwge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtbSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25fc2l6ZS1zIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWNvbF9tZC0zIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxudGFibGUubXVpLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjOTU5YmE0O1xufVxuLm11aS10YWJsZV9fdHIge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgb3V0bGluZTogMDtcbn1cbi5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzMzMztcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgY29sb3I6ICM3OTgxOGM7XG59XG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGhlaWdodDogNzlweDtcbn1cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbjpob3N0W2RhdGEtaG9zdC1tb2RlPSduYXYnXSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuOmhvc3RbZGF0YS1ob3N0LW1vZGU9J25hdiddIC5hcnJvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdFtkYXRhLWhvc3QtbW9kZT0nbmF2J10gLml0ZW0ge1xuICBjb2xvcjogIzk1OWJhNDtcbn1cbjpob3N0W2RhdGEtaG9zdC1tb2RlPSduYXYnXSAuaXRlbV9ob3ZlcmVkLFxuOmhvc3RbZGF0YS1ob3N0LW1vZGU9J25hdiddIC5pdGVtX2FjdGl2ZSB7XG4gIGNvbG9yOiAjMzMzO1xufVxuOmhvc3RbZGF0YS1tdWktaG9zdC1zaXplPSdzJ10gOmhvc3RbZGF0YS1ob3N0LW1vZGU9J25hdiddIC5pdGVtIHtcbiAgcGFkZGluZzogNnB4IDA7XG59XG46aG9zdFtkYXRhLWhvc3QtbW9kZT0nbmF2J10uX3VuZGVybGluZSAuaXRlbSB7XG4gIHBhZGRpbmc6IDlweCAwIDVweDtcbn1cbjpob3N0W2RhdGEtbXVpLWhvc3Qtc2l6ZT0ncyddIDpob3N0W2RhdGEtaG9zdC1tb2RlPSduYXYnXS5fdW5kZXJsaW5lIC5pdGVtIHtcbiAgcGFkZGluZzogNnB4IDAgNHB4O1xufVxuLmNvbnRlbnQge1xuICBtYXJnaW46IDAgLTE0cHg7XG59XG46aG9zdFtkYXRhLWhvc3Qtc2l6ZT1cInNcIl0gLmNvbnRlbnQge1xuICBtYXJnaW46IDAgLTEwcHg7XG59XG4ud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbjogMCAxNHB4O1xufVxuOmhvc3QuX2JvcmRlcmVkIC53cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4ICNlN2U4ZWE7XG59XG46aG9zdFtkYXRhLW11aS1ob3N0LW1vZGU9XCJsaWdodFwiXS5fYm9yZGVyZWQgLndyYXBwZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbn1cbjpob3N0W2RhdGEtbXVpLWhvc3QtbW9kZT1cImRhcmtcIl0uX2JvcmRlcmVkIC53cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG59XG46aG9zdFtkYXRhLWhvc3Qtc2l6ZT0ncyddIC53cmFwcGVyIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaXRlbSB7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDhweCAwIDZweDtcbiAgY29sb3I6ICM3OTgxOGM7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5pdGVtX2xhc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uaXRlbV9tb3JlIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4uaXRlbV9ob3ZlcmVkLFxuLml0ZW06aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNlN2U4ZWE7XG4gIGNvbG9yOiAjMzMzO1xufVxuLml0ZW1fcHJlc3NlZCB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLml0ZW1faGlkZGVuIHtcbiAgd2lkdGg6IDA7XG4gIG1heC13aWR0aDogMDtcbiAgbWFyZ2luOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaXRlbV9hY3RpdmUge1xuICBjb2xvcjogIzMzMztcbn1cbi5pdGVtX2Rpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41Njtcbn1cbjpob3N0W2RhdGEtbXVpLWhvc3QtbW9kZT0nbGlnaHQnXSAuaXRlbSB7XG4gIGNvbG9yOiAjZTdlOGVhO1xufVxuOmhvc3RbZGF0YS1tdWktaG9zdC1tb2RlPSdsaWdodCddIC5pdGVtX2hvdmVyZWQsXG46aG9zdFtkYXRhLW11aS1ob3N0LW1vZGU9J2xpZ2h0J10gLml0ZW1fcHJlc3NlZCxcbjpob3N0W2RhdGEtbXVpLWhvc3QtbW9kZT0nbGlnaHQnXSAuaXRlbV9hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0W2RhdGEtbXVpLWhvc3QtbW9kZT0nZGFyayddIC5pdGVtIHtcbiAgY29sb3I6ICMzMzM7XG59XG46aG9zdFtkYXRhLW11aS1ob3N0LW1vZGU9J2RhcmsnXSAuaXRlbV9ob3ZlcmVkLFxuOmhvc3RbZGF0YS1tdWktaG9zdC1tb2RlPSdkYXJrJ10gLml0ZW1fcHJlc3NlZCxcbjpob3N0W2RhdGEtbXVpLWhvc3QtbW9kZT0nZGFyayddIC5pdGVtX2FjdGl2ZSB7XG4gIGNvbG9yOiAjMzMzO1xufVxuOmhvc3QuX3VuZGVybGluZSAuaXRlbV9ob3ZlcmVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTdlOGVhO1xufVxuOmhvc3RbZGF0YS1tdWktaG9zdC1zaXplPSdzJ10gOmhvc3QuX3VuZGVybGluZSAuaXRlbSB7XG4gIHBhZGRpbmc6IDZweCAwIDRweDtcbn1cbjpob3N0Ll91bmRlcmxpbmUuX3NlcnZlciAuaXRlbV9hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICNmZmRkMmQ7XG59XG46aG9zdFtkYXRhLWhvc3QtbW9kZT0nbGlnaHQnXS5fdW5kZXJsaW5lIC5pdGVtX2hvdnJlZCB7XG4gIGJvcmRlci1jb2xvcjogI2U3ZThlYTtcbn1cbjpob3N0W2RhdGEtaG9zdC1zaXplPSdzJ10gLml0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDZweCAwO1xufVxuOmhvc3RbZGF0YS1ob3N0LXNpemU9J3MnXSAuaXRlbV9oaWRkZW4sXG46aG9zdFtkYXRhLWhvc3Qtc2l6ZT0ncyddIC5pdGVtX2xhc3Qge1xuICBtYXJnaW46IDA7XG59XG4ub3V0bGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1hcmdpbjogMCAtMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5vdXRsaW5lX21vcmUge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbjpob3N0Ll9mb2N1cy12aXNpYmxlIC5pdGVtX2ZvY3VzYWJsZSAub3V0bGluZSB7XG4gIGJvcmRlci1jb2xvcjogI2U3ZThlYTtcbn1cbjpob3N0W2RhdGEtaG9zdC1tb2RlPSdsaWdodCddLl9mb2N1cy12aXNpYmxlIC5pdGVtX2ZvY3VzYWJsZSAub3V0bGluZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbi5pdGVtX2FjdGl2ZSAub3V0bGluZSxcbi5pdGVtX2Rpc2FibGVkIC5vdXRsaW5lIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuOmhvc3RbZGF0YS1ob3N0LXNpemU9J3MnXSAub3V0bGluZSB7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIG1hcmdpbjogMCAtMTBweDtcbn1cbi5tb3JlLWl0ZW0ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHggNDhweCAxMHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM3OTgxOGM7XG59XG4ubW9yZS1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICMzMzM7XG59XG4ubW9yZS1pdGVtX2FjdGl2ZSB7XG4gIGNvbG9yOiAjMzMzO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ubW9yZS1pdGVtX2FjdGl2ZTpob3ZlciB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmFycm93IHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogLTRweDtcbn1cbi5hcnJvd19vcGVuZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLnVuZGVybGluZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmRkMmQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIHdpZHRoO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0W2RhdGEtaG9zdC1tb2RlPSdkYXJrJ10gLnVuZGVybGluZSB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG46aG9zdFtkYXRhLWhvc3QtbW9kZT0nbGlnaHQnXSAudW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiIsIi5tdWktdGV4dCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgICAmX2gxIHtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDIge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9oNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG4gICAgfVxuXG4gICAgJl9ib2R5LXhsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1sX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbV9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LXMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS14cyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cblxuICAgICZfbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICAgJi1ob3ZlcmVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaG92ZXJlZDpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgICAgICAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG4ucm91dGVyX2xpbmsge1xuICAgIG9wYWNpdHk6IC43O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgJi1hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICAgICAgYm9yZGVyIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG4gICAgfVxufVxuXG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MDUxNTQ7XG59XG5cbi5tdWktbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgICBjb2xvcjogIzIzYmE5OSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcbn1cbiIsIi5tdWktc3BhY2Uge1xuICAgIC8qIFJJR0hUIFNQQUNFICovXG5cbiAgICAmX3JpZ2h0LTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJl9yaWdodC0xIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0yIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC0zIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC02IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTgge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC05IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMTAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogTEVGVCBTUEFDRSAqL1xuXG4gICAgJl9sZWZ0LTAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTIge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0zIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgICZfbGVmdC02IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC05IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLyogQk9UVE9NIFNQQUNFICovXG5cbiAgICAmX2JvdHRvbS0wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0xIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tNyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tOSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgIC8qIFRPUCBTUEFDRSAqL1xuXG4gICAgJl90b3AtMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJl90b3AtMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG5cbiAgICAmX3RvcC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgICZfdG9wLTYge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cblxuICAgICZfdG9wLTcge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIH1cblxuICAgICZfdG9wLTgge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgICZfdG9wLTkge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICAgIH1cblxuICAgICZfdG9wLTEwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG59XG4iLCIubXVpLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcblxuXG4gICAgJl9jb2xvciB7XG4gICAgICAgICYtcHJpbWFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXByaW1hcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5W2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2Vzczpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MtaG92ZXJlZCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc3VjY2VzcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgICYtZXJyb3I6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZXJyb3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mby1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItaW5mbyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfc2l6ZSB7XG4gICAgICAgICYtbCB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMzYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLW0ge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJsXCJdIHtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLm11aS1idXR0b25bYnV0dG9uLXNpemU9XCJzXCJdIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbiIsIi5tdWktY29sIHtcblxuICAgICZfbWQtMyB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG4iLCJ0YWJsZS5tdWktdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ib3JkZXJfbm9uZSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZCxcbi5tdWktdGFibGVfX3RoIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICM5NTliYTQ7XG59XG5cbi5tdWktdGFibGVfX3RyIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGhlaWdodDogNTVweDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2hvdmVyX2Rpc2FibGVkKTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cblxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDRweCAwIDA7XG4gICAgY29sb3I6ICM3OTgxOGM7XG59XG5cbi5tdWktdGFibGVfbGF5b3V0X2ZpeGVkIHtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdHJfYm9yZGVyX3RvcCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfc2l6ZV9sLFxuLm11aS10YWJsZV9zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGhlaWdodDogNzlweDtcbn1cblxuLm11aS10YWJsZV9fdHJfY3Vyc29yX3BvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubXVpLXRhYmxlX190ZF9maXJzdCxcbi5tdWktdGFibGVfX3RoX2ZpcnN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5tdWktdGFibGVfX3RkX2xhc3QsXG4ubXVpLXRhYmxlX190aF9sYXN0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfcmlnaHQsXG4ubXVpLXRhYmxlX190aF90ZXh0X3JpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9vdmVyZmxvdyxcbi5tdWktdGFibGVfX3RoX3RleHRfb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWxpYnJhcnkubGVzcyc7XG5cbkBtdWktY29sb3ItdGFicy1wcmVzc2VkOiAjMzMzO1xuQG11aS1jb2xvci10YWJzLWhvdmVyZWQ6ICMzMzM7XG5cblxuQG11aS1kaXNhYmxlZC1vcGFjaXR5OiAuNTY7XG5cbkBtdWktY29sb3ItYmxhbms6ICNmZmY7XG5cbkBtdWktY29sb3ItdGV4dDogIzMzMztcbkBtdWktY29sb3ItdGV4dC1zZWNvbmRhcnk6ICM5NTliYTQ7XG5cbkBtdWktY29sb3ItdGFiczogIzc5ODE4YztcbkBtdWktY29sb3ItdGFicy1hY3RpdmU6ICMzMzM7XG5AbXVpLWNvbG9yLXRhYnMtYm9yZGVyOiAjZTdlOGVhO1xuQGNvbG9yLWJvcmRlci1mb2N1czogI2U3ZThlYTtcbkBtdWktY29sb3ItYmxhbmstZGlzYWJsZWQ6ICNlN2U4ZWE7XG5cbjpob3N0IHtcbiAgICAvLyAudGV4dC1ib2R5LW0oKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuXG5cblxuXG4gICAgJltkYXRhLWhvc3QtbW9kZT0nbmF2J10ge1xuICAgICAgICAvLyAudGV4dC1ib2R5LXMtYm9sZCg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuXG4gICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgY29sb3I6IEBtdWktY29sb3ItdGV4dC1zZWNvbmRhcnk7XG5cblxuICAgICAgICAgICAgJl9ob3ZlcmVkLFxuICAgICAgICAgICAgJl9hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBAbXVpLWNvbG9yLXRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpob3N0W2RhdGEtbXVpLWhvc3Qtc2l6ZT0ncyddICYge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5fdW5kZXJsaW5lIC5pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweCAwIDVweDtcblxuICAgICAgICAgICAgOmhvc3RbZGF0YS1tdWktaG9zdC1zaXplPSdzJ10gJiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDAgNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5jb250ZW50IHtcbiAgICBtYXJnaW46IDAgLTE0cHg7XG5cbiAgICA6aG9zdFtkYXRhLWhvc3Qtc2l6ZT1cInNcIl0gJiB7XG4gICAgICAgIG1hcmdpbjogMCAtMTBweDtcbiAgICB9XG59XG5cbi53cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luOiAwIDE0cHg7XG5cbiAgICA6aG9zdC5fYm9yZGVyZWQgJiB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCBAbXVpLWNvbG9yLXRhYnMtYm9yZGVyO1xuICAgIH1cblxuICAgIDpob3N0W2RhdGEtbXVpLWhvc3QtbW9kZT1cImxpZ2h0XCJdLl9ib3JkZXJlZCAmIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IGZhZGUoQG11aS1jb2xvci1ibGFuaywgMjQlKTtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLW11aS1ob3N0LW1vZGU9XCJkYXJrXCJdLl9ib3JkZXJlZCAmIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IGZhZGUoQG11aS1jb2xvci10ZXh0LCAyNCUpO1xuICAgIH1cblxuICAgIDpob3N0W2RhdGEtaG9zdC1zaXplPSdzJ10gJiB7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIH1cbn1cblxuLml0ZW0ge1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDhweCAwIDZweDtcbiAgICBjb2xvcjogQG11aS1jb2xvci10YWJzO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgJl9sYXN0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICZfbW9yZSB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cblxuICAgICZfaG92ZXJlZCxcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBAbXVpLWNvbG9yLXRhYnMtYm9yZGVyO1xuICAgICAgICBjb2xvcjogQG11aS1jb2xvci10YWJzLWhvdmVyZWQ7XG4gICAgfVxuXG4gICAgJl9wcmVzc2VkIHtcbiAgICAgICAgY29sb3I6IEBtdWktY29sb3ItdGFicy1wcmVzc2VkO1xuICAgIH1cblxuICAgICZfaGlkZGVuIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIG1heC13aWR0aDogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJl9hY3RpdmUge1xuICAgICAgICBjb2xvcjogQG11aS1jb2xvci10YWJzLWFjdGl2ZTtcbiAgICB9XG5cbiAgICAmX2Rpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogQG11aS1kaXNhYmxlZC1vcGFjaXR5O1xuICAgIH1cblxuICAgIDpob3N0W2RhdGEtbXVpLWhvc3QtbW9kZT0nbGlnaHQnXSAmIHtcbiAgICAgICAgY29sb3I6IEBtdWktY29sb3ItYmxhbmstZGlzYWJsZWQ7XG5cbiAgICAgICAgJl9ob3ZlcmVkLFxuICAgICAgICAmX3ByZXNzZWQsXG4gICAgICAgICZfYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiBAbXVpLWNvbG9yLWJsYW5rO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgOmhvc3RbZGF0YS1tdWktaG9zdC1tb2RlPSdkYXJrJ10gJiB7XG4gICAgICAgIGNvbG9yOiBAbXVpLWNvbG9yLXRleHQ7XG5cbiAgICAgICAgJl9ob3ZlcmVkLFxuICAgICAgICAmX3ByZXNzZWQsXG4gICAgICAgICZfYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiBAbXVpLWNvbG9yLXRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA6aG9zdC5fdW5kZXJsaW5lICYge1xuICAgICAgICAmX2hvdmVyZWQge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBAbXVpLWNvbG9yLXRhYnMtYm9yZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3RbZGF0YS1tdWktaG9zdC1zaXplPSdzJ10gJiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMCA0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA6aG9zdC5fdW5kZXJsaW5lLl9zZXJ2ZXIgJl9hY3RpdmUge1xuICAgICAgICBib3JkZXItY29sb3I6IEBtdWktY29sb3ItcHJpbWFyeTtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLWhvc3QtbW9kZT0nbGlnaHQnXS5fdW5kZXJsaW5lICYge1xuICAgICAgICAmX2hvdnJlZCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IEBtdWktY29sb3ItYmxhbmstZGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA6aG9zdFtkYXRhLWhvc3QtbW9kZT0nZGFyayddLl91bmRlcmxpbmUgJiB7XG4gICAgLy8gICAgICZfaG92ZXJlZCB7XG4gICAgLy8gICAgICAgICBib3JkZXItY29sb3I6IGZhZGUoQGNvbG9yLXRleHQsIEBkaXNhYmxlZC1vcGFjaXR5LXRyYW5zcGVyZW50LXBlcmNlbnRhZ2U7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICA6aG9zdFtkYXRhLWhvc3Qtc2l6ZT0ncyddICYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCAwO1xuXG4gICAgICAgICZfaGlkZGVuLFxuICAgICAgICAmX2xhc3Qge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ub3V0bGluZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogQG11aS1yYWRpdXM7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWFyZ2luOiAwIC0xNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgJl9tb3JlIHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgfVxuXG4gICAgOmhvc3QuX2ZvY3VzLXZpc2libGUgLml0ZW1fZm9jdXNhYmxlICYge1xuICAgICAgICBib3JkZXItY29sb3I6IEBjb2xvci1ib3JkZXItZm9jdXM7XG4gICAgfVxuXG4gICAgOmhvc3RbZGF0YS1ob3N0LW1vZGU9J2xpZ2h0J10uX2ZvY3VzLXZpc2libGUgLml0ZW1fZm9jdXNhYmxlICYge1xuICAgICAgICBib3JkZXItY29sb3I6IEBtdWktY29sb3ItYmxhbms7XG4gICAgfVxuXG4gICAgLml0ZW1fYWN0aXZlICYsXG4gICAgLml0ZW1fZGlzYWJsZWQgJiB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLWhvc3Qtc2l6ZT0ncyddICYge1xuICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICBtYXJnaW46IDAgLTEwcHg7XG4gICAgfVxufVxuXG5cbi5tb3JlLWl0ZW0ge1xuICAgIC8vIC50cmFuc2l0aW9uOiAoY29sb3I7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxMHB4IDQ4cHggMTBweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiBAbXVpLWNvbG9yLXRhYnM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IEBtdWktY29sb3ItdGV4dDtcbiAgICB9XG5cbiAgICAmX2FjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiBAbXVpLWNvbG9yLXRleHQ7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBAbXVpLWNvbG9yLXRleHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hcnJvdyB7XG4gICAgLy8gLnRyYW5zaXRpb24odHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgbWFyZ2luOiAtNHB4O1xuXG4gICAgJl9vcGVuZWQge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIH1cbn1cblxuXG4udW5kZXJsaW5lIHtcbiAgICAvLyAudHJhbnNpdGlvbihhbGw7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiBAbXVpLWNvbG9yLXByaW1hcnk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCB3aWR0aDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIDpob3N0W2RhdGEtaG9zdC1tb2RlPSdkYXJrJ10gJiB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBtdWktY29sb3ItdGV4dDtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLWhvc3QtbW9kZT0nbGlnaHQnXSAmIHtcbiAgICAgICAgYmFja2dyb3VuZDogQG11aS1jb2xvci1ibGFuaztcbiAgICB9XG59XG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TabGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'tab-group',
          templateUrl: './tab-group.template.html',
          styleUrls: ['./tab-group.style.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          providers: [projects_angular_cdk_src_services_destroy_service__WEBPACK_IMPORTED_MODULE_12__["DestroyService"], {
            provide: projects_angular_cdk_src_tokens_focusableItemAccessor__WEBPACK_IMPORTED_MODULE_13__["FOCUSABLE_ITEM_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
              return TabGroupComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]]
          }]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]]
          }]
        }, {
          type: projects_angular_cdk_src_services_destroy_service__WEBPACK_IMPORTED_MODULE_12__["DestroyService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [projects_angular_cdk_src_services_destroy_service__WEBPACK_IMPORTED_MODULE_12__["DestroyService"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]
          }]
        }, {
          type: projects_angular_core_src_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_11__["ModeDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [projects_angular_core_src_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_11__["ModeDirective"]]
          }]
        }];
      }, {
        underline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
          args: ['class._underline']
        }],
        allowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
          args: ['attr.data-host-size']
        }],
        itemsConnectors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_0__["TabGroupItemConnectorDirective"]]
        }],
        focusableElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
          args: ['focusableElement']
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
          args: ['item']
        }],
        links: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
          args: ['links']
        }],
        scrollbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['scrollbar', {
            "static": true
          }]
        }],
        underlineEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['underlineEl', {
            "static": true
          }]
        }],
        hostMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
          args: ['attr.data-host-mode']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/modules/preview/components/connection-page/connection-page.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/modules/preview/components/connection-page/connection-page.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: ConnectionPageComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryModulesPreviewComponentsConnectionPageConnectionPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionPageComponent", function () {
      return ConnectionPageComponent;
    });
    /* harmony import */


    var _tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../tokens/preview-config.token */
    "./src/app/projects/mui-flex-library/modules/preview/tokens/preview-config.token.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _library_mui_flex_library_components_codePreview_codePreview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../library/mui-flex-library/components/codePreview/codePreview.component */
    "./src/app/library/mui-flex-library/components/codePreview/codePreview.component.ts");

    function ConnectionPageComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0414\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0432 \u043C\u043E\u0434\u0443\u043B\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C ", ctx_r0.moduleName, " ");
      }
    }

    function ConnectionPageComponent_ng_template_2_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var custom_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", custom_r5, " ");
      }
    }

    function ConnectionPageComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConnectionPageComponent_ng_template_2_div_0_Template, 2, 1, "div", 4);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.customText);
      }
    }

    function ConnectionPageComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mui-code-preview", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var codeElement_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", codeElement_r6.codePreview.code)("language", codeElement_r6.codePreview.language);
      }
    }

    var ConnectionPageComponent = function ConnectionPageComponent(config) {
      _classCallCheck(this, ConnectionPageComponent);

      this.moduleName = config.connection.moduleName;
      this.codeElements = config.connection.codeElements;
      this.customText = config.connection.customText;
    };

    ConnectionPageComponent.ɵfac = function ConnectionPageComponent_Factory(t) {
      return new (t || ConnectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_0__["PREVIEW_CONFIG_INJECTION_TOKEN"]));
    };

    ConnectionPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ConnectionPageComponent,
      selectors: [["app-connection-page"]],
      decls: 5,
      vars: 3,
      consts: [[1, "mui-text_body-l", "mui-space_bottom-5"], [4, "ngIf", "ngIfElse"], ["customTextTemplate", ""], [4, "ngFor", "ngForOf"], ["class", "mui-space_bottom-3", 4, "ngFor", "ngForOf"], [1, "mui-space_bottom-3"], [3, "code", "language"]],
      template: function ConnectionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConnectionPageComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConnectionPageComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConnectionPageComponent_div_4_Template, 2, 2, "div", 3);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.customText)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.codeElements);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _library_mui_flex_library_components_codePreview_codePreview_component__WEBPACK_IMPORTED_MODULE_3__["MuiCodePreviewComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9tb2R1bGVzL3ByZXZpZXcvY29tcG9uZW50cy9jb25uZWN0aW9uLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L21vZHVsZXMvcHJldmlldy9jb21wb25lbnRzL2Nvbm5lY3Rpb24tcGFnZS9jb25uZWN0aW9uLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvY29ubmVjdGlvbi1wYWdlL2Nvbm5lY3Rpb24tcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvY29ubmVjdGlvbi1wYWdlL2Nvbm5lY3Rpb24tcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConnectionPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-connection-page',
          templateUrl: './connection-page.component.html',
          styleUrls: ['./connection-page.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_0__["PREVIEW_CONFIG_INJECTION_TOKEN"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/modules/preview/components/description-page/description-page.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/modules/preview/components/description-page/description-page.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: DescriptionPageComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryModulesPreviewComponentsDescriptionPageDescriptionPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescriptionPageComponent", function () {
      return DescriptionPageComponent;
    });
    /* harmony import */


    var _tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../tokens/preview-config.token */
    "./src/app/projects/mui-flex-library/modules/preview/tokens/preview-config.token.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _preview_example_page_preview_example_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../preview-example-page/preview-example-page.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/preview-example-page/preview-example-page.component.ts");

    function DescriptionPageComponent_app_preview_example_page_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-preview-example-page", 1);
      }

      if (rf & 2) {
        var example_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("example", example_r1)("defaultComponent", ctx_r0.defaultComponent);
      }
    }

    var DescriptionPageComponent = function DescriptionPageComponent(config) {
      _classCallCheck(this, DescriptionPageComponent);

      this.examples = config.description.examples;
      this.defaultComponent = config.componentPreview;
    };

    DescriptionPageComponent.ɵfac = function DescriptionPageComponent_Factory(t) {
      return new (t || DescriptionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_0__["PREVIEW_CONFIG_INJECTION_TOKEN"]));
    };

    DescriptionPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DescriptionPageComponent,
      selectors: [["app-description-page"]],
      decls: 1,
      vars: 1,
      consts: [[3, "example", "defaultComponent", 4, "ngFor", "ngForOf"], [3, "example", "defaultComponent"]],
      template: function DescriptionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DescriptionPageComponent_app_preview_example_page_0_Template, 1, 2, "app-preview-example-page", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.examples);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _preview_example_page_preview_example_page_component__WEBPACK_IMPORTED_MODULE_3__["PreviewExamplePageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvZGVzY3JpcHRpb24tcGFnZS9kZXNjcmlwdGlvbi1wYWdlLmNvbXBvbmVudC5sZXNzIn0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DescriptionPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-description-page',
          templateUrl: './description-page.component.html',
          styleUrls: ['./description-page.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_0__["PREVIEW_CONFIG_INJECTION_TOKEN"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/modules/preview/components/preview-component-builder/preview-component-builder.component.ts":
  /*!***************************************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/modules/preview/components/preview-component-builder/preview-component-builder.component.ts ***!
    \***************************************************************************************************************************************/

  /*! exports provided: PreviewComponentBuilderComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryModulesPreviewComponentsPreviewComponentBuilderPreviewComponentBuilderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewComponentBuilderComponent", function () {
      return PreviewComponentBuilderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreviewComponentBuilderComponent = /*#__PURE__*/function () {
      function PreviewComponentBuilderComponent(viewContainerRef, componentFactoryResolver) {
        _classCallCheck(this, PreviewComponentBuilderComponent);

        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.previousComponentExists = false;
      }

      _createClass(PreviewComponentBuilderComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChanges) {
          if ('component' in simpleChanges) {
            this.createComponent();
          }

          if ('componentProperties' in simpleChanges) {
            this.componentRef.instance.setProperties(this.componentProperties);
          }
        }
      }, {
        key: "createComponent",
        value: function createComponent() {
          this.destroyPreviousComponent();
          this.previousComponentExists = true;
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
          this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        }
      }, {
        key: "destroyPreviousComponent",
        value: function destroyPreviousComponent() {
          if (this.previousComponentExists) {
            this.viewContainerRef.remove(0);
          }
        }
      }]);

      return PreviewComponentBuilderComponent;
    }();

    PreviewComponentBuilderComponent.ɵfac = function PreviewComponentBuilderComponent_Factory(t) {
      return new (t || PreviewComponentBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    PreviewComponentBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreviewComponentBuilderComponent,
      selectors: [["app-preview-component-builder"]],
      inputs: {
        component: "component",
        componentProperties: "componentProperties"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function PreviewComponentBuilderComponent_Template(rf, ctx) {},
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9tb2R1bGVzL3ByZXZpZXcvY29tcG9uZW50cy9wcmV2aWV3LWNvbXBvbmVudC1idWlsZGVyL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9tb2R1bGVzL3ByZXZpZXcvY29tcG9uZW50cy9wcmV2aWV3LWNvbXBvbmVudC1idWlsZGVyL3ByZXZpZXctY29tcG9uZW50LWJ1aWxkZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvcHJldmlldy1jb21wb25lbnQtYnVpbGRlci9wcmV2aWV3LWNvbXBvbmVudC1idWlsZGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9tb2R1bGVzL3ByZXZpZXcvY29tcG9uZW50cy9wcmV2aWV3LWNvbXBvbmVudC1idWlsZGVyL3ByZXZpZXctY29tcG9uZW50LWJ1aWxkZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewComponentBuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preview-component-builder',
          template: '',
          styleUrls: ['./preview-component-builder.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        component: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        componentProperties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/modules/preview/components/preview-example-component-builder/preview-example-component-builder.component.ts":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/modules/preview/components/preview-example-component-builder/preview-example-component-builder.component.ts ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: PreviewExampleComponentBuilderComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryModulesPreviewComponentsPreviewExampleComponentBuilderPreviewExampleComponentBuilderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewExampleComponentBuilderComponent", function () {
      return PreviewExampleComponentBuilderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreviewExampleComponentBuilderComponent = /*#__PURE__*/function () {
      function PreviewExampleComponentBuilderComponent(viewContainerRef, componentFactoryResolver) {
        _classCallCheck(this, PreviewExampleComponentBuilderComponent);

        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.previousComponentExists = false;
      }

      _createClass(PreviewExampleComponentBuilderComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChanges) {
          if ('component' in simpleChanges) {
            this.createComponent();
          }
        }
      }, {
        key: "createComponent",
        value: function createComponent() {
          this.destroyPreviousComponent();
          this.previousComponentExists = true;
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
          this.viewContainerRef.createComponent(componentFactory);
        }
      }, {
        key: "destroyPreviousComponent",
        value: function destroyPreviousComponent() {
          if (this.previousComponentExists) {
            this.viewContainerRef.remove(0);
          }
        }
      }]);

      return PreviewExampleComponentBuilderComponent;
    }();

    PreviewExampleComponentBuilderComponent.ɵfac = function PreviewExampleComponentBuilderComponent_Factory(t) {
      return new (t || PreviewExampleComponentBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    PreviewExampleComponentBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreviewExampleComponentBuilderComponent,
      selectors: [["app-preview-example-component-builder"]],
      inputs: {
        component: "component"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function PreviewExampleComponentBuilderComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvcHJldmlldy1leGFtcGxlLWNvbXBvbmVudC1idWlsZGVyL3ByZXZpZXctZXhhbXBsZS1jb21wb25lbnQtYnVpbGRlci5jb21wb25lbnQubGVzcyJ9 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewExampleComponentBuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preview-example-component-builder',
          template: '',
          styleUrls: ['./preview-example-component-builder.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        component: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/modules/preview/components/preview-example-page/preview-example-page.component.ts":
  /*!*****************************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/modules/preview/components/preview-example-page/preview-example-page.component.ts ***!
    \*****************************************************************************************************************************/

  /*! exports provided: PreviewExamplePageComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryModulesPreviewComponentsPreviewExamplePagePreviewExamplePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewExamplePageComponent", function () {
      return PreviewExamplePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _library_mui_flex_library_components_mui_card_box_mui_card_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../library/mui-flex-library/components/mui-card-box/mui-card-box.component */
    "./src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _preview_component_builder_preview_component_builder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../preview-component-builder/preview-component-builder.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/preview-component-builder/preview-component-builder.component.ts");
    /* harmony import */


    var _preview_example_component_builder_preview_example_component_builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../preview-example-component-builder/preview-example-component-builder.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/preview-example-component-builder/preview-example-component-builder.component.ts");
    /* harmony import */


    var _library_mui_flex_library_components_mui_tabs_group_tab_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../library/mui-flex-library/components/mui-tabs-group/tab-group.component */
    "./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group.component.ts");
    /* harmony import */


    var _library_mui_flex_library_components_codePreview_codePreview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../library/mui-flex-library/components/codePreview/codePreview.component */
    "./src/app/library/mui-flex-library/components/codePreview/codePreview.component.ts");
    /* harmony import */


    var _library_mui_flex_library_components_mui_tabs_group_tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../library/mui-flex-library/components/mui-tabs-group/tab-group-item-connector.directive */
    "./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group-item-connector.directive.ts");

    function PreviewExamplePageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var description_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", description_r3, " ");
      }
    }

    function PreviewExamplePageComponent_ng_container_2_app_preview_component_builder_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-preview-component-builder", 6);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", ctx_r4.defaultComponent)("componentProperties", ctx_r4.config);
      }
    }

    function PreviewExamplePageComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-preview-example-component-builder", 7);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", ctx_r6.component);
      }
    }

    function PreviewExamplePageComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewExamplePageComponent_ng_container_2_app_preview_component_builder_1_Template, 1, 2, "app-preview-component-builder", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreviewExamplePageComponent_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.typeDefault)("ngIfElse", _r5);
      }
    }

    function PreviewExamplePageComponent_ng_container_3_2_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var code_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", code_r8.fileName || code_r8.language, " ");
      }
    }

    function PreviewExamplePageComponent_ng_container_3_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PreviewExamplePageComponent_ng_container_3_2_ng_template_0_Template, 1, 1, "ng-template", 11);
      }
    }

    function PreviewExamplePageComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tab-group", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeItemIndexChange", function PreviewExamplePageComponent_ng_container_3_Template_tab_group_activeItemIndexChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.activeItemIndex = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreviewExamplePageComponent_ng_container_3_2_Template, 1, 0, undefined, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mui-code-preview", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeItemIndex", ctx_r2.activeItemIndex);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.example.codePreview);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.example.codePreview[ctx_r2.activeItemIndex].code)("language", ctx_r2.example.codePreview[ctx_r2.activeItemIndex].language);
      }
    }

    var PreviewExamplePageComponent = /*#__PURE__*/function () {
      function PreviewExamplePageComponent() {
        _classCallCheck(this, PreviewExamplePageComponent);

        this.activeItemIndex = 0;
      }

      _createClass(PreviewExamplePageComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.typeDefault = !('previewComponent' in this.example);
          this.component = 'previewComponent' in this.example ? this.example.previewComponent : null;
          this.config = 'config' in this.example ? this.example.config : {};
        }
      }]);

      return PreviewExamplePageComponent;
    }();

    PreviewExamplePageComponent.ɵfac = function PreviewExamplePageComponent_Factory(t) {
      return new (t || PreviewExamplePageComponent)();
    };

    PreviewExamplePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreviewExamplePageComponent,
      selectors: [["app-preview-example-page"]],
      inputs: {
        example: "example",
        defaultComponent: "defaultComponent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 3,
      consts: [[1, "mui-space_bottom-5"], ["class", "mui-text_body-l mui-space_bottom-3", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mui-text_body-l", "mui-space_bottom-3"], [3, "component", "componentProperties", 4, "ngIf", "ngIfElse"], ["cutomTypeTemplate", ""], [3, "component", "componentProperties"], [3, "component"], [3, "activeItemIndex", "activeItemIndexChange"], [4, "ngFor", "ngForOf"], [3, "code", "language"], ["tabGroupItem", ""]],
      template: function PreviewExamplePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mui-card-box", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewExamplePageComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreviewExamplePageComponent_ng_container_2_Template, 4, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviewExamplePageComponent_ng_container_3_Template, 4, 4, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.example.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.component);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.example.codePreview);
        }
      },
      directives: [_library_mui_flex_library_components_mui_card_box_mui_card_box_component__WEBPACK_IMPORTED_MODULE_1__["MuiCardBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _preview_component_builder_preview_component_builder_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponentBuilderComponent"], _preview_example_component_builder_preview_example_component_builder_component__WEBPACK_IMPORTED_MODULE_4__["PreviewExampleComponentBuilderComponent"], _library_mui_flex_library_components_mui_tabs_group_tab_group_component__WEBPACK_IMPORTED_MODULE_5__["TabGroupComponent"], _library_mui_flex_library_components_codePreview_codePreview_component__WEBPACK_IMPORTED_MODULE_6__["MuiCodePreviewComponent"], _library_mui_flex_library_components_mui_tabs_group_tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_7__["TabGroupItemConnectorDirective"]],
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex_horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex_horizontal-middle[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_horizontal-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_horizontal-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_horizontal-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_horizontal_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex_horizontal-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_horizontal-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex_vertical-middle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.flex_vertical-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.flex_vertical-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.flex_vertical-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.flex_vertical-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.flex_vertical-right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.flex_vertical-left[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex_vertical-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.flex_wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mui-text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n.mui-text_h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 56px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.3px;\n  font-style: normal;\n  font-weight: bold;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 36px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  letter-spacing: -0.3px;\n  font-family: 'Roboto Medium';\n}\n.mui-text_body-xl[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 19px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 28px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-l_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 17px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 24px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-m_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: normal;\n  letter-spacing: 0;\n}\n.mui-text_body-s[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-s_secondary[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n  font-weight: normal;\n}\n.mui-text_body-xs[_ngcontent-%COMP%] {\n  font-family: 'Roboto Regular';\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  font-weight: normal;\n}\n.mui-text_bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.mui-text_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, 0.3s ease-in-out;\n}\n.mui-text_link-hovered[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transition: opacity, 0.3s ease-in-out;\n}\n.router_link[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: opacity, border 0.3s ease-in-out;\n  margin: 0 8px;\n  padding: 8px 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  box-sizing: border-box;\n  border-bottom: 2px solid transparent;\n}\n.router_link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #e2b51f;\n}\n.router_link[_ngcontent-%COMP%]:hover:not(.router_link-active) {\n  opacity: 1;\n  transition: opacity, border 0.3s ease-in-out;\n  border-bottom: 2px solid #505154;\n}\n.mui-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease-in-out;\n  font-family: 'Roboto Medium';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n.mui-link[_ngcontent-%COMP%]:hover:not([ng-reflect-router-link='']) {\n  color: #23ba99 !important;\n  transition: color 0.3s ease-in-out;\n}\n.mui-space[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n.mui-space_right-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mui-space_right-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mui-space_right-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mui-space_right-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mui-space_right-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mui-space_right-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mui-space_right-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.mui-space_right-7[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.mui-space_right-8[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.mui-space_right-9[_ngcontent-%COMP%] {\n  margin-right: 36px;\n}\n.mui-space_right-10[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.mui-space_left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.mui-space_left-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.mui-space_left-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mui-space_left-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.mui-space_left-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.mui-space_left-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.mui-space_left-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mui-space_left-7[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.mui-space_left-8[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.mui-space_left-9[_ngcontent-%COMP%] {\n  margin-left: 36px;\n}\n.mui-space_left-10[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.mui-space_bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mui-space_bottom-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mui-space_bottom-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mui-space_bottom-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mui-space_bottom-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mui-space_bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mui-space_bottom-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mui-space_bottom-7[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.mui-space_bottom-8[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mui-space_bottom-9[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.mui-space_bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.mui-space_top-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mui-space_top-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mui-space_top-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mui-space_top-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mui-space_top-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mui-space_top-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mui-space_top-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mui-space_top-7[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.mui-space_top-8[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.mui-space_top-9[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.mui-space_top-10[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mui-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 17px;\n  line-height: 24px;\n  border: 0;\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.mui-button_color-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-primary-hovered);\n}\n.mui-button_color-primary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-primary);\n}\n.mui-button_color-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mui-button_color-success[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-success-hovered);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-success[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-success);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-secondary-hovered);\n}\n.mui-button_color-secondary[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-secondary);\n}\n.mui-button_color-error[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-error-hovered);\n}\n.mui-button_color-error[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-error);\n  color: var(--mui-color-blank);\n}\n.mui-button_color-info[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: var(--mui-color-info-hovered);\n}\n.mui-button_color-info[_ngcontent-%COMP%] {\n  background-color: var(--mui-color-info);\n  color: var(--mui-color-blank);\n}\n.mui-button_size-l[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  height: 80px;\n}\n.mui-button_size-m[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 60px;\n}\n.mui-button_size-s[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 40px;\n}\n.mui-button[button-size=\"l\"][_ngcontent-%COMP%] {\n  max-width: 280px;\n  height: 60px;\n}\n.mui-button[button-size=\"s\"][_ngcontent-%COMP%] {\n  max-width: 180px;\n  height: 40px;\n}\n.mui-col_md-3[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-sizing: border-box;\n}\ntable.mui-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_border_none) {\n  border-bottom: 1px solid #e7e8ea;\n}\n.mui-table__td[_ngcontent-%COMP%], .mui-table__th[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n}\n.mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 16px;\n  vertical-align: middle;\n  height: 40px;\n  color: #959ba4;\n}\n.mui-table__tr[_ngcontent-%COMP%] {\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  outline: 0;\n}\n.mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n  padding: 16px 16px 14px;\n  vertical-align: top;\n  word-wrap: break-word;\n  height: 55px;\n  color: #333;\n}\n.mui-table__tr[_ngcontent-%COMP%]:not(.mui-table__tr_hover_disabled):hover {\n  background: #f5f5f6;\n}\n.mui-table__subtext[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n  margin: 4px 0 0;\n  color: #79818c;\n}\n.mui-table_layout_fixed[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__tr_border_top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e8ea;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_size_l[_ngcontent-%COMP%], .mui-table_size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  height: 79px;\n}\n.mui-table__tr_cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mui-table__th_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_l[_ngcontent-%COMP%], .mui-table_font-size_l[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 24px;\n}\n.mui-table__td_font-size_s[_ngcontent-%COMP%], .mui-table_font-size_s[_ngcontent-%COMP%]   .mui-table__td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  font-family: muiText, Roboto, sans-serif;\n  line-height: 20px;\n}\n.mui-table__td_align_center[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mui-table__td_first[_ngcontent-%COMP%], .mui-table__th_first[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.mui-table__td_last[_ngcontent-%COMP%], .mui-table__th_last[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.mui-table__td_text_center[_ngcontent-%COMP%], .mui-table__th_text_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mui-table__td_text_right[_ngcontent-%COMP%], .mui-table__th_text_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mui-table__td_text_overflow[_ngcontent-%COMP%], .mui-table__th_text_overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9tb2R1bGVzL3ByZXZpZXcvY29tcG9uZW50cy9wcmV2aWV3LWV4YW1wbGUtcGFnZS9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtZGlyZWN0aW9uLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvcHJldmlldy1leGFtcGxlLXBhZ2UvcHJldmlldy1leGFtcGxlLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvcHJldmlldy1leGFtcGxlLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRleHQubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9tb2R1bGVzL3ByZXZpZXcvY29tcG9uZW50cy9wcmV2aWV3LWV4YW1wbGUtcGFnZS9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtc3BhY2VzLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvcHJldmlldy1leGFtcGxlLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LWJ1dHRvbnMubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9tb2R1bGVzL3ByZXZpZXcvY29tcG9uZW50cy9wcmV2aWV3LWV4YW1wbGUtcGFnZS9EOi9NYW9saW5rL0RldmVsb3BtZW50L0Rldi9taWNyby13b3JsZC9zcmMvYXNzZXRzL3NvdXJjZS9zdHlsZXMvbXVpLWZsZXgtbGlicmFyeS9sZXNzL2ZsZXgtY29sdW1zLmxlc3MiLCJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvcHJldmlldy1leGFtcGxlLXBhZ2UvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2Fzc2V0cy9zb3VyY2Uvc3R5bGVzL211aS1mbGV4LWxpYnJhcnkvbGVzcy9mbGV4LXRhYmxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0FDQVo7QURHUTtFQUNJLDZCQUFBO0FDRFo7QURJUTtFQUNJLHlCQUFBO0FDRlo7QURLUTtFQUNJLGVBQUE7QUNIWjtBRE1RO0VBQ0ksdUJBQUE7QUNKWjtBRE9RO0VBQ0kscUJBQUE7QUNMWjtBRGFJO0VBQ0ksc0JBQUE7QUNYUjtBRGFRO0VBQ0ksdUJBQUE7QUNYWjtBRGNRO0VBQ0ksOEJBQUE7QUNaWjtBRGVRO0VBQ0ksNkJBQUE7QUNiWjtBRGdCUTtFQUNJLG1CQUFBO0FDZFo7QURpQlM7RUFDSSx5QkFBQTtBQ2ZiO0FEa0JRO0VBQ0kscUJBQUE7QUNoQlo7QURtQlE7RUFDSSx1QkFBQTtBQ2pCWjtBRG9CUTtFQUNJLHFCQUFBO0FDbEJaO0FEdUJJO0VBQ0ksZUFBQTtBQ3JCUjtBRDBCQTtFQUNJLFdBQUE7QUN4Qko7QUMzREE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FENkRKO0FDM0RJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUQ2RFI7QUMxREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBRDREUjtBQ3pESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRDJEUjtBQ3hESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRDBEUjtBQ3ZESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHlEUjtBQ3RESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHdEUjtBQ3JESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHVEUjtBQ3BESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHNEUjtBQ25ESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHFEUjtBQ2xESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRG9EUjtBQ2pESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRG1EUjtBQ2hESTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGtEUjtBQy9DSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGlEUjtBQzlDSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRGdEUjtBQzdDSTtFQUNJLGlCQUFBO0FEK0NSO0FDM0NJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FENkNSO0FDM0NRO0VBQ0ksWUFBQTtFQUNBLHFDQUFBO0FENkNaO0FDMUNRO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO0FENENaO0FDcENBO0VBQ0ksWUFBQTtFQUNBLDRDQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBRHFDSjtBQ25DSTtFQUNJLFVBQUE7RUFDQSw0Q0FBQTtFQUVBLGdDQUFBO0FEb0NSO0FDaENBO0VBQ0ksVUFBQTtFQUNBLDRDQUFBO0VBRUEsZ0NBQUE7QURpQ0o7QUM5QkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGdDSjtBQzdCQTtFQUNJLHlCQUFBO0VBQ0Esa0NBQUE7QUQrQko7QUVyTkE7RUZ1TkUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBRXhOSTtFQUNJLGVBQUE7QUYwTlI7QUV2Tkk7RUFDSSxpQkFBQTtBRnlOUjtBRXROSTtFQUNJLGlCQUFBO0FGd05SO0FFck5JO0VBQ0ksa0JBQUE7QUZ1TlI7QUVwTkk7RUFDSSxrQkFBQTtBRnNOUjtBRW5OSTtFQUNJLGtCQUFBO0FGcU5SO0FFbE5JO0VBQ0ksa0JBQUE7QUZvTlI7QUVqTkk7RUFDSSxrQkFBQTtBRm1OUjtBRWhOSTtFQUNJLGtCQUFBO0FGa05SO0FFL01JO0VBQ0ksa0JBQUE7QUZpTlI7QUU5TUk7RUFDSSxrQkFBQTtBRmdOUjtBRTNNSTtFQUNJLGNBQUE7QUY2TVI7QUUxTUk7RUFDSSxnQkFBQTtBRjRNUjtBRXpNSTtFQUNJLGdCQUFBO0FGMk1SO0FFeE1JO0VBQ0ksaUJBQUE7QUYwTVI7QUV2TUk7RUFDSSxpQkFBQTtBRnlNUjtBRXRNSTtFQUNJLGlCQUFBO0FGd01SO0FFck1JO0VBQ0ksaUJBQUE7QUZ1TVI7QUVwTUk7RUFDSSxpQkFBQTtBRnNNUjtBRW5NSTtFQUNJLGlCQUFBO0FGcU1SO0FFbE1JO0VBQ0ksaUJBQUE7QUZvTVI7QUVqTUk7RUFDSSxpQkFBQTtBRm1NUjtBRTlMSTtFQUNJLGdCQUFBO0FGZ01SO0FFN0xJO0VBQ0ksa0JBQUE7QUYrTFI7QUU1TEk7RUFDSSxrQkFBQTtBRjhMUjtBRTNMSTtFQUNJLG1CQUFBO0FGNkxSO0FFMUxJO0VBQ0ksbUJBQUE7QUY0TFI7QUV6TEk7RUFDSSxtQkFBQTtBRjJMUjtBRXhMSTtFQUNJLG1CQUFBO0FGMExSO0FFdkxJO0VBQ0ksbUJBQUE7QUZ5TFI7QUV0TEk7RUFDSSxtQkFBQTtBRndMUjtBRXJMSTtFQUNJLG1CQUFBO0FGdUxSO0FFcExJO0VBQ0ksbUJBQUE7QUZzTFI7QUVqTEk7RUFDSSxhQUFBO0FGbUxSO0FFaExJO0VBQ0ksZUFBQTtBRmtMUjtBRS9LSTtFQUNJLGVBQUE7QUZpTFI7QUU5S0k7RUFDSSxnQkFBQTtBRmdMUjtBRTdLSTtFQUNJLGdCQUFBO0FGK0tSO0FFNUtJO0VBQ0ksZ0JBQUE7QUY4S1I7QUUzS0k7RUFDSSxnQkFBQTtBRjZLUjtBRTFLSTtFQUNJLGdCQUFBO0FGNEtSO0FFektJO0VBQ0ksZ0JBQUE7QUYyS1I7QUV4S0k7RUFDSSxnQkFBQTtBRjBLUjtBRXZLSTtFQUNJLGdCQUFBO0FGeUtSO0FHL1ZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUhpV0o7QUc3VlE7RUFDSSxrREFBQTtBSCtWWjtBRzVWUTtFQUNJLDBDQUFBO0FIOFZaO0FHM1ZRO0VBQ0ksWUFBQTtBSDZWWjtBRzFWUTtFQUNJLGtEQUFBO0VBQ0EsNkJBQUE7QUg0Vlo7QUd6VlE7RUFDSSwwQ0FBQTtFQUNBLDZCQUFBO0FIMlZaO0FHeFZRO0VBQ0ksb0RBQUE7QUgwVlo7QUd2VlE7RUFDSSw0Q0FBQTtBSHlWWjtBR3JWUTtFQUNJLGdEQUFBO0FIdVZaO0FHcFZRO0VBQ0ksd0NBQUE7RUFDQSw2QkFBQTtBSHNWWjtBR25WUTtFQUNJLCtDQUFBO0FIcVZaO0FHbFZRO0VBQ0ksdUNBQUE7RUFDQSw2QkFBQTtBSG9WWjtBRy9VUTtFQUVJLGVBQUE7RUFDQSxZQUFBO0FIZ1ZaO0FHN1VRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUg4VVo7QUczVVE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtBSDRVWjtBR3ZVQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBSHlVSjtBR3RVQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBSHdVSjtBSWphSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUptYVI7QUt6YUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBTDJhSjtBS3hhQTtFQUNJLGdDQUFBO0FMMGFKO0FLdmFBOztFQUdJLHNCQUFBO0VBQ0EsZ0JBQUE7QUx5YUo7QUt0YUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FMd2FKO0FLcmFBO0VBRUksK0JBQUE7RUFFQSx5QkFBQTtFQUVBLHVDQUFBO0VBQ0EsVUFBQTtBTHVhSjtBS3BhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBTHNhSjtBS25hQTtFQUNJLG1CQUFBO0FMcWFKO0FLbGFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FMb2FKO0FLamFBO0VBQ0ksbUJBQUE7QUxtYUo7QUtoYUE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTGthSjtBSy9aQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMaWFKO0FLOVpBO0VBQ0ksNkJBQUE7QUxnYUo7QUs3WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTCtaSjtBSzVaQTs7RUFFSSxZQUFBO0FMOFpKO0FLM1pBO0VBQ0ksZUFBQTtBTDZaSjtBSzFaQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FMNFpKO0FLelpBOztFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUwyWko7QUt4WkE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBTDBaSjtBS3ZaQTtFQUNJLHNCQUFBO0FMeVpKO0FLdFpBOztFQUVJLGVBQUE7QUx3Wko7QUtyWkE7O0VBRUksZ0JBQUE7QUx1Wko7QUtwWkE7O0VBRUksa0JBQUE7QUxzWko7QUtuWkE7O0VBRUksaUJBQUE7QUxxWko7QUtsWkE7O0VBRUksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FMb1pKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9tb2R1bGVzL3ByZXZpZXcvY29tcG9uZW50cy9wcmV2aWV3LWV4YW1wbGUtcGFnZS9wcmV2aWV3LWV4YW1wbGUtcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJl9ob3Jpem9udGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYXJvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfd3JhcCB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAmLWNlbnRlciB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFzZWxpbmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiAgICAmX3ZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAmLW1pZGRsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAmLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtY2VudGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAgJi1lbmQge1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWxlZnQge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWJhc2VsaW5lIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgJl93cmFwIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbn1cblxuXG4uZnVsbC1zaXplIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mbGV4X2hvcml6b250YWwge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZsZXhfaG9yaXpvbnRhbC1taWRkbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfaG9yaXpvbnRhbC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5mbGV4X2hvcml6b250YWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X2hvcml6b250YWxfd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mbGV4X2hvcml6b250YWwtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF9ob3Jpem9udGFsLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmZsZXhfdmVydGljYWwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXhfdmVydGljYWwtbWlkZGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxleF92ZXJ0aWNhbC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXhfdmVydGljYWwtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZmxleF92ZXJ0aWNhbC1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXhfdmVydGljYWwtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGV4X3ZlcnRpY2FsLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmZsZXhfdmVydGljYWwtbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZsZXhfdmVydGljYWwtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uZmxleF93cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZ1bGwtc2l6ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm11aS10ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2gxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9oNCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xufVxuLm11aS10ZXh0X2g1IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XG59XG4ubXVpLXRleHRfaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbn1cbi5tdWktdGV4dF9ib2R5LXhsIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LWxfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktbSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5tdWktdGV4dF9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10ZXh0X2JvZHktcyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tdWktdGV4dF9ib2R5LXNfc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvZHkteHMge1xuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm11aS10ZXh0X2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tdWktdGV4dF9saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5tdWktdGV4dF9saW5rLWhvdmVyZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubXVpLXRleHRfbGluay1ob3ZlcmVkOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5yb3V0ZXJfbGluayB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMCA4cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3V0ZXJfbGluay1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmI1MWY7XG59XG4ucm91dGVyX2xpbms6aG92ZXI6bm90KC5yb3V0ZXJfbGluay1hY3RpdmUpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuLm11aS1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLm11aS1saW5rOmhvdmVyOm5vdChbbmctcmVmbGVjdC1yb3V0ZXItbGluaz0nJ10pIHtcbiAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tdWktc3BhY2Uge1xuICAvKiBSSUdIVCBTUEFDRSAqL1xuICAvKiBMRUZUIFNQQUNFICovXG4gIC8qIEJPVFRPTSBTUEFDRSAqL1xuICAvKiBUT1AgU1BBQ0UgKi9cbn1cbi5tdWktc3BhY2VfcmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tdWktc3BhY2VfcmlnaHQtMSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLm11aS1zcGFjZV9yaWdodC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTMge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTYge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTcge1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTgge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTkge1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX3JpZ2h0LTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTAge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5tdWktc3BhY2VfbGVmdC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5tdWktc3BhY2VfbGVmdC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tdWktc3BhY2VfbGVmdC02IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtNyB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xufVxuLm11aS1zcGFjZV9sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi5tdWktc3BhY2VfbGVmdC05IHtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG4ubXVpLXNwYWNlX2xlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm11aS1zcGFjZV9ib3R0b20tMSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tNSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS02IHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTcge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLm11aS1zcGFjZV9ib3R0b20tOCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ubXVpLXNwYWNlX2JvdHRvbS05IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi5tdWktc3BhY2VfYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5tdWktc3BhY2VfdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm11aS1zcGFjZV90b3AtMSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubXVpLXNwYWNlX3RvcC0zIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tdWktc3BhY2VfdG9wLTQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLm11aS1zcGFjZV90b3AtNSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXVpLXNwYWNlX3RvcC02IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5tdWktc3BhY2VfdG9wLTcge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLm11aS1zcGFjZV90b3AtOCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4ubXVpLXNwYWNlX3RvcC05IHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbi5tdWktc3BhY2VfdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5tdWktYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXByaW1hcnkpO1xufVxuLm11aS1idXR0b25fY29sb3ItcHJpbWFyeVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zdWNjZXNzOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1tdWktY29sb3ItYmxhbmspO1xufVxuLm11aS1idXR0b25fY29sb3Itc2Vjb25kYXJ5OmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnktaG92ZXJlZCk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvci1ob3ZlcmVkKTtcbn1cbi5tdWktYnV0dG9uX2NvbG9yLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWVycm9yKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9jb2xvci1pbmZvOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvLWhvdmVyZWQpO1xufVxuLm11aS1idXR0b25fY29sb3ItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1pbmZvKTtcbiAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG59XG4ubXVpLWJ1dHRvbl9zaXplLWwge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5tdWktYnV0dG9uX3NpemUtbSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm11aS1idXR0b25fc2l6ZS1zIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cImxcIl0ge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubXVpLWJ1dHRvbltidXR0b24tc2l6ZT1cInNcIl0ge1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubXVpLWNvbF9tZC0zIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxudGFibGUubXVpLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuLm11aS10YWJsZV9fdHI6bm90KC5tdWktdGFibGVfX3RyX2JvcmRlcl9ub25lKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjOTU5YmE0O1xufVxuLm11aS10YWJsZV9fdHIge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgb3V0bGluZTogMDtcbn1cbi5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzMzMztcbn1cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xufVxuLm11aS10YWJsZV9fc3VidGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgY29sb3I6ICM3OTgxOGM7XG59XG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4ubXVpLXRhYmxlX190aF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9zLFxuLm11aS10YWJsZV9mb250LXNpemVfcyAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubXVpLXRhYmxlX190ZF9zaXplX2wsXG4ubXVpLXRhYmxlX3NpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGhlaWdodDogNzlweDtcbn1cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tdWktdGFibGVfX3RkX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm11aS10YWJsZV9fdGRfYWxpZ25fY2VudGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tdWktdGFibGVfX3RkX2ZpcnN0LFxuLm11aS10YWJsZV9fdGhfZmlyc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ubXVpLXRhYmxlX190ZF90ZXh0X2NlbnRlcixcbi5tdWktdGFibGVfX3RoX3RleHRfY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm11aS10YWJsZV9fdGRfdGV4dF9yaWdodCxcbi5tdWktdGFibGVfX3RoX3RleHRfcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iLCIubXVpLXRleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gICAgJl9oMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjNweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICB9XG5cbiAgICAmX2gyIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDMge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDQge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfaDYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xuICAgIH1cblxuICAgICZfYm9keS14bCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG5cbiAgICAmX2JvZHktbF9zZWNvbmRhcnkge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW0ge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgJl9ib2R5LW1fc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICZfYm9keS1zIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfYm9keS1zX3NlY29uZGFyeSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAmX2JvZHkteHMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgJl9ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG5cbiAgICAmX2xpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgICAgICYtaG92ZXJlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLWhvdmVyZWQ6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHksXG4gICAgICAgICAgICAgICAgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuLnJvdXRlcl9saW5rIHtcbiAgICBvcGFjaXR5OiAuNztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICYtYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSxcbiAgICAgICAgICAgIGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTJiNTFmO1xuICAgIH1cbn1cblxuLnJvdXRlcl9saW5rOmhvdmVyOm5vdCgucm91dGVyX2xpbmstYWN0aXZlKSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LFxuICAgICAgICBib3JkZXIgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA1MTU0O1xufVxuXG4ubXVpLWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5tdWktbGluazpob3Zlcjpub3QoW25nLXJlZmxlY3Qtcm91dGVyLWxpbms9JyddKSB7XG4gICAgY29sb3I6ICMyM2JhOTkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XG59XG4iLCIubXVpLXNwYWNlIHtcbiAgICAvKiBSSUdIVCBTUEFDRSAqL1xuXG4gICAgJl9yaWdodC0wIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICZfcmlnaHQtMSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtMyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC01IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtNiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9yaWdodC04IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgIH1cblxuICAgICZfcmlnaHQtOSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LTEwIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIExFRlQgU1BBQ0UgKi9cblxuICAgICZfbGVmdC0wIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTEge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC0yIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtMyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cblxuICAgICZfbGVmdC00IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtNiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIH1cblxuICAgICZfbGVmdC03IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgfVxuXG4gICAgJl9sZWZ0LTgge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICB9XG5cbiAgICAmX2xlZnQtOSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIH1cblxuICAgICZfbGVmdC0xMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC8qIEJPVFRPTSBTUEFDRSAqL1xuXG4gICAgJl9ib3R0b20tMCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgJl9ib3R0b20tMSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAmX2JvdHRvbS0yIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTgge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIH1cblxuICAgICZfYm90dG9tLTEwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAvKiBUT1AgU1BBQ0UgKi9cblxuICAgICZfdG9wLTAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgICZfdG9wLTEge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuXG4gICAgJl90b3AtMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG5cbiAgICAmX3RvcC0zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAmX3RvcC00IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAmX3RvcC01IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAmX3RvcC02IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG5cbiAgICAmX3RvcC03IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB9XG5cbiAgICAmX3RvcC04IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICAmX3RvcC05IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICB9XG5cbiAgICAmX3RvcC0xMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxufVxuIiwiLm11aS1idXR0b24ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG5cblxuICAgICZfY29sb3Ige1xuICAgICAgICAmLXByaW1hcnk6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5LWhvdmVyZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmltYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJpbWFyeVtkaXNhYmxlZF0ge1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3M6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zdWNjZXNzLWhvdmVyZWQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXN1Y2Nlc3Mge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlY29uZGFyeTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLXNlY29uZGFyeS1ob3ZlcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG5cblxuICAgICAgICAmLWVycm9yOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWktY29sb3ItZXJyb3ItaG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWVycm9yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11aS1jb2xvci1lcnJvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbXVpLWNvbG9yLWJsYW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5mbzpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8taG92ZXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVpLWNvbG9yLWluZm8pO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW11aS1jb2xvci1ibGFuayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX3NpemUge1xuICAgICAgICAmLWwge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1tIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcyB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwibFwiXSB7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tdWktYnV0dG9uW2J1dHRvbi1zaXplPVwic1wiXSB7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4iLCIubXVpLWNvbCB7XG5cbiAgICAmX21kLTMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuIiwidGFibGUubXVpLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4ubXVpLXRhYmxlX190cjpub3QoLm11aS10YWJsZV9fdHJfYm9yZGVyX25vbmUpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZThlYTtcbn1cblxuLm11aS10YWJsZV9fdGQsXG4ubXVpLXRhYmxlX190aCB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm11aS10YWJsZV9fdGgge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjOTU5YmE0O1xufVxuXG4ubXVpLXRhYmxlX190ciB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5tdWktdGFibGVfX3RyOm5vdCgubXVpLXRhYmxlX190cl9ob3Zlcl9kaXNhYmxlZCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG59XG5cbi5tdWktdGFibGVfX3N1YnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiA0cHggMCAwO1xuICAgIGNvbG9yOiAjNzk4MThjO1xufVxuXG4ubXVpLXRhYmxlX2xheW91dF9maXhlZCB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLm11aS10YWJsZV9fdGhfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RoIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfbCxcbi5tdWktdGFibGVfZm9udC1zaXplX2wgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2JvcmRlcl90b3Age1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX3NpemVfbCxcbi5tdWktdGFibGVfc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBoZWlnaHQ6IDc5cHg7XG59XG5cbi5tdWktdGFibGVfX3RyX2N1cnNvcl9wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tdWktdGFibGVfX3RoX2ZvbnQtc2l6ZV9sLFxuLm11aS10YWJsZV9mb250LXNpemVfbCAubXVpLXRhYmxlX190aCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG11aVRleHQsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm11aS10YWJsZV9fdGRfZm9udC1zaXplX2wsXG4ubXVpLXRhYmxlX2ZvbnQtc2l6ZV9sIC5tdWktdGFibGVfX3RkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogbXVpVGV4dCwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubXVpLXRhYmxlX190ZF9mb250LXNpemVfcyxcbi5tdWktdGFibGVfZm9udC1zaXplX3MgLm11aS10YWJsZV9fdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBtdWlUZXh0LCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tdWktdGFibGVfX3RkX2FsaWduX2NlbnRlciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm11aS10YWJsZV9fdGRfZmlyc3QsXG4ubXVpLXRhYmxlX190aF9maXJzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubXVpLXRhYmxlX190ZF9sYXN0LFxuLm11aS10YWJsZV9fdGhfbGFzdCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm11aS10YWJsZV9fdGRfdGV4dF9jZW50ZXIsXG4ubXVpLXRhYmxlX190aF90ZXh0X2NlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXVpLXRhYmxlX190ZF90ZXh0X3JpZ2h0LFxuLm11aS10YWJsZV9fdGhfdGV4dF9yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tdWktdGFibGVfX3RkX3RleHRfb3ZlcmZsb3csXG4ubXVpLXRhYmxlX190aF90ZXh0X292ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewExamplePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preview-example-page',
          templateUrl: './preview-example-page.component.html',
          styleUrls: ['./preview-example-page.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, {
        example: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/modules/preview/components/preview-property-input/preview-property-input.component.ts":
  /*!*********************************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/modules/preview/components/preview-property-input/preview-property-input.component.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: PreviewPropertyInputComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryModulesPreviewComponentsPreviewPropertyInputPreviewPropertyInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewPropertyInputComponent", function () {
      return PreviewPropertyInputComponent;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreviewPropertyInputComponent = /*#__PURE__*/function () {
      function PreviewPropertyInputComponent() {
        _classCallCheck(this, PreviewPropertyInputComponent);

        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.disabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.componentDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

        this.onChange = function (value) {};

        this.onTouched = function () {};
      }

      _createClass(PreviewPropertyInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.formControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.componentDestroyed$)).subscribe(function (value) {
            return _this29.onChange(value);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.componentDestroyed$.next();
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.formControl.setValue(value, {
            emitEvent: false
          });
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {
          if (disabled) {
            this.formControl.disable({
              emitEvent: false
            });
          } else {
            this.formControl.enable({
              emitEvent: false
            });
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(callback) {
          this.onChange = callback;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(callback) {
          this.onTouched = callback;
        }
      }]);

      return PreviewPropertyInputComponent;
    }();

    PreviewPropertyInputComponent.ɵfac = function PreviewPropertyInputComponent_Factory(t) {
      return new (t || PreviewPropertyInputComponent)();
    };

    PreviewPropertyInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PreviewPropertyInputComponent,
      selectors: [["app-preview-property-input"]],
      inputs: {
        inputData: "inputData"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
          return PreviewPropertyInputComponent;
        }),
        multi: true
      }])],
      decls: 2,
      vars: 0,
      template: function PreviewPropertyInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "preview-property-input works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvcHJldmlldy1wcm9wZXJ0eS1pbnB1dC9wcmV2aWV3LXByb3BlcnR5LWlucHV0LmNvbXBvbmVudC5sZXNzIn0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PreviewPropertyInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'app-preview-property-input',
          templateUrl: './preview-property-input.component.html',
          styleUrls: ['./preview-property-input.component.less'],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
              return PreviewPropertyInputComponent;
            }),
            multi: true
          }],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, {
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/modules/preview/components/properties-page/properties-page.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/modules/preview/components/properties-page/properties-page.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: PropertiesPageComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryModulesPreviewComponentsPropertiesPagePropertiesPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertiesPageComponent", function () {
      return PropertiesPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../tokens/preview-config.token */
    "./src/app/projects/mui-flex-library/modules/preview/tokens/preview-config.token.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _preview_component_builder_preview_component_builder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../preview-component-builder/preview-component-builder.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/preview-component-builder/preview-component-builder.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _preview_property_input_preview_property_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../preview-property-input/preview-property-input.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/preview-property-input/preview-property-input.component.ts");

    function PropertiesPageComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-preview-property-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", input_r2.selector, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", input_r2.type, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", input_r2.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", input_r2.selector)("inputData", input_r2.input);
      }
    }

    function PropertiesPageComponent_div_20_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var output_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", output_r4.selector, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", output_r4.type, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", output_r4.description, " ");
      }
    }

    function PropertiesPageComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Output ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " selector ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PropertiesPageComponent_div_20_tr_12_Template, 7, 3, "tr", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.formGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.outputs);
      }
    }

    var PropertiesPageComponent = /*#__PURE__*/function () {
      function PropertiesPageComponent(config) {
        _classCallCheck(this, PropertiesPageComponent);

        this.inputValues$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.componentDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.component = config.properties.customComponent || config.componentPreview;
        this.inputs = [].concat(_toConsumableArray(config.properties.inputs), _toConsumableArray(config.properties.customInputs || []));
        this.outputs = config.properties.outputs;
        this.formGroup = this.getFormGroup();
      }

      _createClass(PropertiesPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.formGroup.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.componentDestroyed$)).subscribe(function (values) {
            return _this30.inputValues$.next(values);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.componentDestroyed$.next();
        }
      }, {
        key: "getFormGroup",
        value: function getFormGroup() {
          var formGroupData = {};

          var _iterator = _createForOfIteratorHelper(this.inputs),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var input = _step.value;
              formGroupData[input.selector] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](formGroupData);
        }
      }]);

      return PropertiesPageComponent;
    }();

    PropertiesPageComponent.ɵfac = function PropertiesPageComponent_Factory(t) {
      return new (t || PropertiesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_3__["PREVIEW_CONFIG_INJECTION_TOKEN"]));
    };

    PropertiesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PropertiesPageComponent,
      selectors: [["app-properties-page"]],
      decls: 21,
      vars: 7,
      consts: [[1, "mui-space_bottom-5"], [1, "mui-text_h3", "mui-space_bottom-3"], [3, "component", "componentProperties"], [1, "mui-table", 3, "formGroup"], [1, "mui-table__tr"], [1, "mui-table__th"], ["class", "mui-table__tr", 4, "ngFor", "ngForOf"], ["class", "mui-space_bottom-5", 4, "ngIf"], [1, "mui-table__td"], [3, "formControlName", "inputData"]],
      template: function PropertiesPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Example Preview ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-preview-component-builder", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Input ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " selector ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " preview ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PropertiesPageComponent_tr_19_Template, 9, 5, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PropertiesPageComponent_div_20_Template, 13, 2, "div", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", ctx.component)("componentProperties", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.inputValues$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.outputs && ctx.outputs.length);
        }
      },
      directives: [_preview_component_builder_preview_component_builder_component__WEBPACK_IMPORTED_MODULE_5__["PreviewComponentBuilderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _preview_property_input_preview_property_input_component__WEBPACK_IMPORTED_MODULE_7__["PreviewPropertyInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L2NvbXBvbmVudHMvcHJvcGVydGllcy1wYWdlL3Byb3BlcnRpZXMtcGFnZS5jb21wb25lbnQubGVzcyJ9 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertiesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-properties-page',
          templateUrl: './properties-page.component.html',
          styleUrls: ['./properties-page.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_3__["PREVIEW_CONFIG_INJECTION_TOKEN"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/modules/preview/preview.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/modules/preview/preview.component.ts ***!
    \********************************************************************************/

  /*! exports provided: PreviewComponent */

  /***/
  function srcAppProjectsMuiFlexLibraryModulesPreviewPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewComponent", function () {
      return PreviewComponent;
    });
    /* harmony import */


    var _tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tokens/preview-config.token */
    "./src/app/projects/mui-flex-library/modules/preview/tokens/preview-config.token.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _library_mui_flex_library_components_mui_tabs_group_tab_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../library/mui-flex-library/components/mui-tabs-group/tab-group.component */
    "./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group.component.ts");
    /* harmony import */


    var _library_mui_flex_library_components_mui_tabs_group_tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../library/mui-flex-library/components/mui-tabs-group/tab-group-item-connector.directive */
    "./src/app/library/mui-flex-library/components/mui-tabs-group/tab-group-item-connector.directive.ts");

    function PreviewComponent_tab_group_0_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.caption, " ");
      }
    }

    function PreviewComponent_tab_group_0_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PreviewComponent_tab_group_0_1_ng_template_0_Template, 1, 1, "ng-template", 4);
      }

      if (rf & 2) {
        var menuItem_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabGroupItem", menuItem_r2.routerLink);
      }
    }

    function PreviewComponent_tab_group_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tab-group", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeItemIndexChange", function PreviewComponent_tab_group_0_Template_tab_group_activeItemIndexChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.activatedItemIndex = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PreviewComponent_tab_group_0_1_Template, 1, 1, undefined, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeItemIndex", ctx_r0.activatedItemIndex);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.menuItems);
      }
    }

    var PREVIEW_PAGES = {
      DESCRIPTION: 'description',
      PROPERTIES: 'properties',
      CONNECTION: 'connection'
    };

    var PreviewComponent = /*#__PURE__*/function () {
      function PreviewComponent(config, activatedRoute) {
        _classCallCheck(this, PreviewComponent);

        this.config = config;
        this.activatedRoute = activatedRoute;
        this.activatedItemIndex = 0;
        this.menuItems = this.getMenuItems();
      }

      _createClass(PreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = this.activatedRoute.snapshot.data.title || 'Title Error';
        }
      }, {
        key: "getMenuItems",
        value: function getMenuItems() {
          var result = [{
            caption: 'Описание',
            routerLink: PREVIEW_PAGES.DESCRIPTION
          }];

          if (this.config.properties) {
            result.push({
              caption: 'Свойства',
              routerLink: PREVIEW_PAGES.PROPERTIES
            });
          }

          if (this.config.connection) {
            result.push({
              caption: 'Как подключить',
              routerLink: PREVIEW_PAGES.CONNECTION
            });
          }

          return result;
        }
      }]);

      return PreviewComponent;
    }();

    PreviewComponent.ɵfac = function PreviewComponent_Factory(t) {
      return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_0__["PREVIEW_CONFIG_INJECTION_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PreviewComponent,
      selectors: [["app-preview"]],
      decls: 3,
      vars: 1,
      consts: [[3, "activeItemIndex", "activeItemIndexChange", 4, "ngIf"], [1, "content"], [3, "activeItemIndex", "activeItemIndexChange"], [4, "ngFor", "ngForOf"], [3, "tabGroupItem"]],
      template: function PreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PreviewComponent_tab_group_0_Template, 2, 2, "tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menuItems.length > 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _library_mui_flex_library_components_mui_tabs_group_tab_group_component__WEBPACK_IMPORTED_MODULE_4__["TabGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _library_mui_flex_library_components_mui_tabs_group_tab_group_item_connector_directive__WEBPACK_IMPORTED_MODULE_5__["TabGroupItemConnectorDirective"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 40px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvbXVpLWZsZXgtbGlicmFyeS9tb2R1bGVzL3ByZXZpZXcvRDovTWFvbGluay9EZXZlbG9wbWVudC9EZXYvbWljcm8td29ybGQvc3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L21vZHVsZXMvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wcm9qZWN0cy9tdWktZmxleC1saWJyYXJ5L21vZHVsZXMvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL211aS1mbGV4LWxpYnJhcnkvbW9kdWxlcy9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-preview',
          templateUrl: './preview.component.html',
          styleUrls: ['./preview.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_0__["PREVIEW_CONFIG_INJECTION_TOKEN"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/modules/preview/preview.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/modules/preview/preview.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: PreviewModule */

  /***/
  function srcAppProjectsMuiFlexLibraryModulesPreviewPreviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewModule", function () {
      return PreviewModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tokens/preview-config.token */
    "./src/app/projects/mui-flex-library/modules/preview/tokens/preview-config.token.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_description_page_description_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/description-page/description-page.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/description-page/description-page.component.ts");
    /* harmony import */


    var _components_connection_page_connection_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/connection-page/connection-page.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/connection-page/connection-page.component.ts");
    /* harmony import */


    var _components_properties_page_properties_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/properties-page/properties-page.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/properties-page/properties-page.component.ts");
    /* harmony import */


    var _preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./preview.component */
    "./src/app/projects/mui-flex-library/modules/preview/preview.component.ts");
    /* harmony import */


    var _components_preview_example_page_preview_example_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/preview-example-page/preview-example-page.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/preview-example-page/preview-example-page.component.ts");
    /* harmony import */


    var _components_preview_component_builder_preview_component_builder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/preview-component-builder/preview-component-builder.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/preview-component-builder/preview-component-builder.component.ts");
    /* harmony import */


    var _components_preview_example_component_builder_preview_example_component_builder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/preview-example-component-builder/preview-example-component-builder.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/preview-example-component-builder/preview-example-component-builder.component.ts");
    /* harmony import */


    var _components_preview_property_input_preview_property_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/preview-property-input/preview-property-input.component */
    "./src/app/projects/mui-flex-library/modules/preview/components/preview-property-input/preview-property-input.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_library_mui_flex_library_components_codePreview_codePreview_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/library/mui-flex-library/components/codePreview/codePreview.module */
    "./src/app/library/mui-flex-library/components/codePreview/codePreview.module.ts");
    /* harmony import */


    var src_app_library_mui_flex_library_components_mui_card_box_mui_card_box_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.module */
    "./src/app/library/mui-flex-library/components/mui-card-box/mui-card-box.module.ts");
    /* harmony import */


    var src_app_library_mui_flex_library_components_mui_tabs_group_mui_tabs_group_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/library/mui-flex-library/components/mui-tabs-group/mui-tabs-group.module */
    "./src/app/library/mui-flex-library/components/mui-tabs-group/mui-tabs-group.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var PreviewModule = /*#__PURE__*/function () {
      function PreviewModule() {
        _classCallCheck(this, PreviewModule);
      }

      _createClass(PreviewModule, null, [{
        key: "forRoot",
        value: function forRoot(config) {
          return [{
            ngModule: PreviewModule,
            providers: [{
              provide: _tokens_preview_config_token__WEBPACK_IMPORTED_MODULE_1__["PREVIEW_CONFIG_INJECTION_TOKEN"],
              useValue: config
            }]
          }, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
            path: '',
            component: _preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"],
            children: [{
              path: 'description',
              component: _components_description_page_description_page_component__WEBPACK_IMPORTED_MODULE_4__["DescriptionPageComponent"]
            }].concat(_toConsumableArray(config.properties ? [{
              path: 'properties',
              component: _components_properties_page_properties_page_component__WEBPACK_IMPORTED_MODULE_6__["PropertiesPageComponent"]
            }] : []), _toConsumableArray(config.connection ? [{
              path: 'connection',
              component: _components_connection_page_connection_page_component__WEBPACK_IMPORTED_MODULE_5__["ConnectionPageComponent"]
            }] : []), [{
              path: '',
              redirectTo: 'description',
              pathMatch: 'full'
            }])
          }])];
        }
      }]);

      return PreviewModule;
    }();

    PreviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PreviewModule
    });
    PreviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function PreviewModule_Factory(t) {
        return new (t || PreviewModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], src_app_library_mui_flex_library_components_mui_tabs_group_mui_tabs_group_module__WEBPACK_IMPORTED_MODULE_15__["MuiTabsGroupModule"], src_app_library_mui_flex_library_components_mui_card_box_mui_card_box_module__WEBPACK_IMPORTED_MODULE_14__["MuiCardBoxModule"], src_app_library_mui_flex_library_components_codePreview_codePreview_module__WEBPACK_IMPORTED_MODULE_13__["MuiCodePreviewModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PreviewModule, {
        declarations: [_components_description_page_description_page_component__WEBPACK_IMPORTED_MODULE_4__["DescriptionPageComponent"], _components_connection_page_connection_page_component__WEBPACK_IMPORTED_MODULE_5__["ConnectionPageComponent"], _components_properties_page_properties_page_component__WEBPACK_IMPORTED_MODULE_6__["PropertiesPageComponent"], _preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"], _components_preview_example_page_preview_example_page_component__WEBPACK_IMPORTED_MODULE_8__["PreviewExamplePageComponent"], _components_preview_component_builder_preview_component_builder_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponentBuilderComponent"], _components_preview_example_component_builder_preview_example_component_builder_component__WEBPACK_IMPORTED_MODULE_10__["PreviewExampleComponentBuilderComponent"], _components_preview_property_input_preview_property_input_component__WEBPACK_IMPORTED_MODULE_11__["PreviewPropertyInputComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], src_app_library_mui_flex_library_components_mui_tabs_group_mui_tabs_group_module__WEBPACK_IMPORTED_MODULE_15__["MuiTabsGroupModule"], src_app_library_mui_flex_library_components_mui_card_box_mui_card_box_module__WEBPACK_IMPORTED_MODULE_14__["MuiCardBoxModule"], src_app_library_mui_flex_library_components_codePreview_codePreview_module__WEBPACK_IMPORTED_MODULE_13__["MuiCodePreviewModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PreviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_components_description_page_description_page_component__WEBPACK_IMPORTED_MODULE_4__["DescriptionPageComponent"], _components_connection_page_connection_page_component__WEBPACK_IMPORTED_MODULE_5__["ConnectionPageComponent"], _components_properties_page_properties_page_component__WEBPACK_IMPORTED_MODULE_6__["PropertiesPageComponent"], _preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"], _components_preview_example_page_preview_example_page_component__WEBPACK_IMPORTED_MODULE_8__["PreviewExamplePageComponent"], _components_preview_component_builder_preview_component_builder_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponentBuilderComponent"], _components_preview_example_component_builder_preview_example_component_builder_component__WEBPACK_IMPORTED_MODULE_10__["PreviewExampleComponentBuilderComponent"], _components_preview_property_input_preview_property_input_component__WEBPACK_IMPORTED_MODULE_11__["PreviewPropertyInputComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], src_app_library_mui_flex_library_components_mui_tabs_group_mui_tabs_group_module__WEBPACK_IMPORTED_MODULE_15__["MuiTabsGroupModule"], src_app_library_mui_flex_library_components_mui_card_box_mui_card_box_module__WEBPACK_IMPORTED_MODULE_14__["MuiCardBoxModule"], src_app_library_mui_flex_library_components_codePreview_codePreview_module__WEBPACK_IMPORTED_MODULE_13__["MuiCodePreviewModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/mui-flex-library/modules/preview/tokens/preview-config.token.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/projects/mui-flex-library/modules/preview/tokens/preview-config.token.ts ***!
    \******************************************************************************************/

  /*! exports provided: PREVIEW_CONFIG_INJECTION_TOKEN */

  /***/
  function srcAppProjectsMuiFlexLibraryModulesPreviewTokensPreviewConfigTokenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PREVIEW_CONFIG_INJECTION_TOKEN", function () {
      return PREVIEW_CONFIG_INJECTION_TOKEN;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PREVIEW_CONFIG_INJECTION_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PREVIEW_CONFIG');
    /***/
  }
}]);
//# sourceMappingURL=default~pages-mui-flex-buttons-page-mui-flex-buttons-page-module~pages-mui-flex-icons-page-mui-flex-~da715f8d-es5.js.map