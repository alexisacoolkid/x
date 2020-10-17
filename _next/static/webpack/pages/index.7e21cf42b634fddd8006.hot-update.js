webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Winamp.tsx":
/*!****************************************!*\
  !*** ./components/Programs/Winamp.tsx ***!
  \****************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Programs/Winamp.module.scss */ \"./styles/Programs/Winamp.module.scss\");\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_winamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/winamp */ \"./utils/winamp.ts\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Programs/Winamp.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      updatePosition = _ref.updatePosition,\n      zIndex = _ref.zIndex,\n      minimized = _ref.minimized,\n      _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var _ref$file$url = _ref$file.url,\n      url = _ref$file$url === void 0 ? '' : _ref$file$url,\n      _ref$file$name = _ref$file.name,\n      name = _ref$file$name === void 0 ? '' : _ref$file$name;\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var getWebamp = function getWebamp() {\n    return document.getElementById('webamp');\n  };\n\n  var loadWebamp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var _yield$import, WebampConstructor, webamp, _ref3, containerElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              WebampConstructor = _yield$import[\"default\"];\n              webamp = new WebampConstructor(_utils_winamp__WEBPACK_IMPORTED_MODULE_5__[\"webampOptions\"]);\n              _ref3 = elementRef, containerElement = _ref3.current;\n              if (onClose) webamp.onClose(onClose);\n              if (onMinimize) webamp.onMinimize(onMinimize);\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_5__[\"closeEqualizer\"])(webamp);\n              _context.next = 11;\n              return webamp.renderWhenReady(containerElement);\n\n            case 11:\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_4__[\"appendElement\"])(containerElement, getWebamp()).focus();\n              onFocus();\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_5__[\"loadTrackOrSkin\"])(webamp, url, name);\n              return _context.abrupt(\"return\", webamp);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebamp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var webamp;\n    loadWebamp().then(function (loadedWebamp) {\n      webamp = loadedWebamp;\n    });\n    return function () {\n      try {\n        webamp.dispose();\n      } catch (exception) {\n        console.error('Webamp failed to dispose properly.');\n      }\n    };\n  }, []);\n  return __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_7__[\"Rnd\"], {\n    className: _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.winamp,\n    enableResizing: false,\n    enableUserSelectHack: false,\n    dragHandleClassName: \"draggable\",\n    cancel: _utils_winamp__WEBPACK_IMPORTED_MODULE_5__[\"touchControls\"],\n    onDrag: _utils_events__WEBPACK_IMPORTED_MODULE_6__[\"onTouchEventsOnly\"],\n    onFocus: onFocus,\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_4__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    style: {\n      zIndex: zIndex,\n      visibility: minimized ? 'hidden' : 'visible'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(\"article\", {\n    ref: elementRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Winamp);\nvar loaderOptions = {\n  windowed: false\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4Pzk4NmUiXSwibmFtZXMiOlsiV2luYW1wIiwib25DbG9zZSIsIm9uTWluaW1pemUiLCJvbkZvY3VzIiwidXBkYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJtaW5pbWl6ZWQiLCJmaWxlIiwidXJsIiwibmFtZSIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJnZXRXZWJhbXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZFdlYmFtcCIsIldlYmFtcENvbnN0cnVjdG9yIiwid2ViYW1wIiwid2ViYW1wT3B0aW9ucyIsImNvbnRhaW5lckVsZW1lbnQiLCJjdXJyZW50IiwiY2xvc2VFcXVhbGl6ZXIiLCJyZW5kZXJXaGVuUmVhZHkiLCJhcHBlbmRFbGVtZW50IiwiZm9jdXMiLCJsb2FkVHJhY2tPclNraW4iLCJ1c2VFZmZlY3QiLCJ0aGVuIiwibG9hZGVkV2ViYW1wIiwiZGlzcG9zZSIsImV4Y2VwdGlvbiIsImNvbnNvbGUiLCJlcnJvciIsInN0eWxlcyIsIndpbmFtcCIsInRvdWNoQ29udHJvbHMiLCJvblRvdWNoRXZlbnRzT25seSIsImZvY3VzT25EcmFnIiwidmlzaWJpbGl0eSIsImxvYWRlck9wdGlvbnMiLCJ3aW5kb3dlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUE4QixHQUFHLFNBQWpDQSxNQUFpQyxPQVFqQztBQUFBOztBQUFBLE1BUEpDLE9BT0ksUUFQSkEsT0FPSTtBQUFBLE1BTkpDLFVBTUksUUFOSkEsVUFNSTtBQUFBLE1BTEpDLE9BS0ksUUFMSkEsT0FLSTtBQUFBLE1BSkpDLGNBSUksUUFKSkEsY0FJSTtBQUFBLE1BSEpDLE1BR0ksUUFISkEsTUFHSTtBQUFBLE1BRkpDLFNBRUksUUFGSkEsU0FFSTtBQUFBLHVCQURKQyxJQUNJO0FBQUEscUNBRDRCLEVBQzVCO0FBQUEsZ0NBRElDLEdBQ0o7QUFBQSxNQURJQSxHQUNKLDhCQURVLEVBQ1Y7QUFBQSxpQ0FEY0MsSUFDZDtBQUFBLE1BRGNBLElBQ2QsK0JBRHFCLEVBQ3JCO0FBQ0osTUFBTUMsVUFBVSxHQUFHQyxvREFBTSxDQUFjLElBQWQsQ0FBekI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFNQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBTjtBQUFBLEdBQWxCOztBQUNBLE1BQU1DLFVBQVU7QUFBQSxpTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDNEIsZ0pBRDVCOztBQUFBO0FBQUE7QUFDQUMsK0JBREE7QUFFWEMsb0JBRlcsR0FFRixJQUFJRCxpQkFBSixDQUFzQkUsMkRBQXRCLENBRkU7QUFBQSxzQkFHcUJSLFVBSHJCLEVBR0FTLGdCQUhBLFNBR1RDLE9BSFM7QUFPakIsa0JBQUluQixPQUFKLEVBQWFnQixNQUFNLENBQUNoQixPQUFQLENBQWVBLE9BQWY7QUFDYixrQkFBSUMsVUFBSixFQUFnQmUsTUFBTSxDQUFDZixVQUFQLENBQWtCQSxVQUFsQjtBQUNoQm1CLGtGQUFjLENBQUNKLE1BQUQsQ0FBZDtBQVRpQjtBQUFBLHFCQVVYQSxNQUFNLENBQUNLLGVBQVAsQ0FBdUJILGdCQUF2QixDQVZXOztBQUFBO0FBV2pCSSxtRkFBYSxDQUFDSixnQkFBRCxFQUFtQlAsU0FBUyxFQUE1QixDQUFiLENBQTZDWSxLQUE3QztBQUNBckIscUJBQU87QUFDUHNCLG1GQUFlLENBQUNSLE1BQUQsRUFBU1QsR0FBVCxFQUFjQyxJQUFkLENBQWY7QUFiaUIsK0NBZVZRLE1BZlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkYsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFrQkFXLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlULE1BQUo7QUFFQUYsY0FBVSxHQUFHWSxJQUFiLENBQWtCLFVBQUNDLFlBQUQsRUFBa0I7QUFDbENYLFlBQU0sR0FBR1csWUFBVDtBQUNELEtBRkQ7QUFJQSxXQUFPLFlBQU07QUFDWCxVQUFJO0FBQ0ZYLGNBQU0sQ0FBQ1ksT0FBUDtBQUNELE9BRkQsQ0FFRSxPQUFPQyxTQUFQLEVBQWtCO0FBQ2xCQyxlQUFPLENBQUNDLEtBQVIsQ0FBYyxvQ0FBZDtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBZFEsRUFjTixFQWRNLENBQVQ7QUFnQkEsU0FDRSxNQUFDLDZDQUFEO0FBQ0UsYUFBUyxFQUFFQywwRUFBTSxDQUFDQyxNQURwQjtBQUVFLGtCQUFjLEVBQUUsS0FGbEI7QUFHRSx3QkFBb0IsRUFBRSxLQUh4QjtBQUlFLHVCQUFtQixFQUFDLFdBSnRCO0FBS0UsVUFBTSxFQUFFQywyREFMVjtBQU1FLFVBQU0sRUFBRUMsK0RBTlY7QUFPRSxXQUFPLEVBQUVqQyxPQVBYO0FBUUUsZUFBVyxFQUFFa0MsMkRBUmY7QUFTRSxjQUFVLEVBQUVqQyxjQVRkO0FBVUUsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBTkEsTUFBRjtBQUFVaUMsZ0JBQVUsRUFBRWhDLFNBQVMsR0FBRyxRQUFILEdBQWM7QUFBN0MsS0FWVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUU7QUFBUyxPQUFHLEVBQUVJLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREY7QUFnQkQsQ0E3REQ7O0dBQU1WLE07O0tBQUFBLE07QUErRFNBLHFFQUFmO0FBRU8sSUFBTXVDLGFBQWEsR0FBRztBQUMzQkMsVUFBUSxFQUFFO0FBRGlCLENBQXRCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Qcm9ncmFtcy9XaW5hbXAubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSBXZWJhbXAgZnJvbSAnd2ViYW1wJztcbmltcG9ydCB0eXBlIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9ncmFtcyc7XG5pbXBvcnQgdHlwZSB7IFdlYmFtcFN0b3JlIH0gZnJvbSAnQC90eXBlcy9jb21wb25lbnRzL1Byb2dyYW1zL3dpbmFtcCc7XG5cbmltcG9ydCB7IGFwcGVuZEVsZW1lbnQsIGZvY3VzT25EcmFnIH0gZnJvbSAnQC91dGlscy9lbGVtZW50cyc7XG5pbXBvcnQge1xuICBjbG9zZUVxdWFsaXplcixcbiAgbG9hZFRyYWNrT3JTa2luLFxuICB0b3VjaENvbnRyb2xzLFxuICB3ZWJhbXBPcHRpb25zXG59IGZyb20gJ0AvdXRpbHMvd2luYW1wJztcbmltcG9ydCB7IG9uVG91Y2hFdmVudHNPbmx5IH0gZnJvbSAnQC91dGlscy9ldmVudHMnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBXaW5hbXA6IFJlYWN0LkZDPEFwcENvbXBvbmVudD4gPSAoe1xuICBvbkNsb3NlLFxuICBvbk1pbmltaXplLFxuICBvbkZvY3VzLFxuICB1cGRhdGVQb3NpdGlvbixcbiAgekluZGV4LFxuICBtaW5pbWl6ZWQsXG4gIGZpbGU6IHsgdXJsID0gJycsIG5hbWUgPSAnJyB9ID0ge31cbn0pID0+IHtcbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGdldFdlYmFtcCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJhbXAnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgY29uc3QgbG9hZFdlYmFtcCA9IGFzeW5jICgpOiBQcm9taXNlPFdlYmFtcCAmIFdlYmFtcFN0b3JlPiA9PiB7XG4gICAgY29uc3QgeyBkZWZhdWx0OiBXZWJhbXBDb25zdHJ1Y3RvciB9ID0gYXdhaXQgaW1wb3J0KCd3ZWJhbXAnKTtcbiAgICBjb25zdCB3ZWJhbXAgPSBuZXcgV2ViYW1wQ29uc3RydWN0b3Iod2ViYW1wT3B0aW9ucykgYXMgV2ViYW1wICYgV2ViYW1wU3RvcmU7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJFbGVtZW50IH0gPSBlbGVtZW50UmVmIGFzIHtcbiAgICAgIGN1cnJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIH07XG5cbiAgICBpZiAob25DbG9zZSkgd2ViYW1wLm9uQ2xvc2Uob25DbG9zZSk7XG4gICAgaWYgKG9uTWluaW1pemUpIHdlYmFtcC5vbk1pbmltaXplKG9uTWluaW1pemUpO1xuICAgIGNsb3NlRXF1YWxpemVyKHdlYmFtcCk7XG4gICAgYXdhaXQgd2ViYW1wLnJlbmRlcldoZW5SZWFkeShjb250YWluZXJFbGVtZW50KTtcbiAgICBhcHBlbmRFbGVtZW50KGNvbnRhaW5lckVsZW1lbnQsIGdldFdlYmFtcCgpKS5mb2N1cygpO1xuICAgIG9uRm9jdXMoKTtcbiAgICBsb2FkVHJhY2tPclNraW4od2ViYW1wLCB1cmwsIG5hbWUpO1xuXG4gICAgcmV0dXJuIHdlYmFtcDtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB3ZWJhbXA6IFdlYmFtcCAmIFdlYmFtcFN0b3JlO1xuXG4gICAgbG9hZFdlYmFtcCgpLnRoZW4oKGxvYWRlZFdlYmFtcCkgPT4ge1xuICAgICAgd2ViYW1wID0gbG9hZGVkV2ViYW1wO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlYmFtcC5kaXNwb3NlKCk7XG4gICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViYW1wIGZhaWxlZCB0byBkaXNwb3NlIHByb3Blcmx5LicpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxSbmRcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndpbmFtcH1cbiAgICAgIGVuYWJsZVJlc2l6aW5nPXtmYWxzZX1cbiAgICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrPXtmYWxzZX1cbiAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJkcmFnZ2FibGVcIlxuICAgICAgY2FuY2VsPXt0b3VjaENvbnRyb2xzfVxuICAgICAgb25EcmFnPXtvblRvdWNoRXZlbnRzT25seX1cbiAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICBvbkRyYWdTdGFydD17Zm9jdXNPbkRyYWd9XG4gICAgICBvbkRyYWdTdG9wPXt1cGRhdGVQb3NpdGlvbn1cbiAgICAgIHN0eWxlPXt7IHpJbmRleCwgdmlzaWJpbGl0eTogbWluaW1pemVkID8gJ2hpZGRlbicgOiAndmlzaWJsZScgfX1cbiAgICA+XG4gICAgICA8YXJ0aWNsZSByZWY9e2VsZW1lbnRSZWZ9IC8+XG4gICAgPC9SbmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaW5hbXA7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXJPcHRpb25zID0ge1xuICB3aW5kb3dlZDogZmFsc2Vcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Programs/Winamp.tsx\n");

/***/ })

})