function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-extra/admin-extra.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-extra/admin-extra.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminExtraAdminExtraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"mode=='UPDATE'&&extra!==null\">\n  <div class=\"card bg-light\">\n    <div class=\"card-body\">\n      <form [formGroup]=\"extraForm\">\n        <label for = \"name\"> Name: </label>\n        <h4 class = \"card-title\"><input type = \"text\" formControlName = \"name\" class = \"form-control\"></h4>\n        <table class = \"table\">\n          <tbody>\n            <tr>\n              <th scope=\"row\">Price</th>\n              <td><input type = \"text\" formControlName = \"price\" class = \"form-control\"></td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Max Quantity available</th>\n              <td><input type = \"text\" formControlName = \"max_amount\" class = \"form-control\"></td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Limit per Student</th>\n              <td><input type = \"text\" formControlName = \"limit\" class = \"form-control\"></td>\n            </tr>\n          </tbody>\n          <label for = \"button\"></label>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-primary\" (click)=\"Update()\">\n                  Update\n                </button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-danger\" (click)=\"Delete()\">\n                  Delete\n                </button>\n              </div>\n            </div>\n          </div>\n\n\n        </table>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"mode=='ADD'\">\n  <div class=\"card bg-light\">\n    <div class=\"card-body\">\n      <form [formGroup]=\"extraForm\">\n        <label for = \"name\"> Name: </label>\n        <h4 class = \"card-title\"><input type = \"text\" formControlName = \"name\" class = \"form-control\"></h4>\n        <table class = \"table\">\n          <tbody>\n            <tr>\n              <th scope=\"row\">Price</th>\n              <td><input type = \"text\" formControlName = \"price\" class = \"form-control\"></td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Max Quantity available</th>\n              <td><input type = \"text\" formControlName = \"max_amount\" class = \"form-control\"></td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Limit per Student</th>\n              <td><input type = \"text\" formControlName = \"limit\" class = \"form-control\"></td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Weeks to Repeat</th>\n              <td>\n                <select formControlName=\"weeks\" id=\"weeks\">\n                  <option *ngFor=\"let i of rnum(9)\" [ngValue]=\"i+1\">\n                    {{ i+1 }}\n                  </option>\n                </select>\n              </td>\n            </tr>\n          </tbody>\n          <label for = \"button\"></label>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button class=\"btn btn-success\" (click)=\"Add()\">\n                Add\n              </button>\n            </div>\n          </div>\n        </table>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"mode=='BOOK'&&extra!==null\">\n  <div class=\"card bg-info text-white\">\n    <div class=\"card-body\">\n      <form [formGroup]=\"bookForm\">\n        <!-- <label for = \"name\"> Name: </label> -->\n        <h4 class = \"card-title\">{{extra[1]['name']}}</h4>\n        <table class = \"table text-white\">\n          <tbody>\n            <tr>\n              <th scope=\"row\">Price</th>\n              <td>{{extra[1]['price']  | currency:'INR':'symbol'}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Quantity</th>\n              <td>\n                <select formControlName=\"quantity\" id=\"quantity\">\n                  <option *ngFor=\"let i of rnum(extra[1]['limit'])\" [ngValue]=\"i+1\">\n                    {{ i+1 }}\n                  </option>\n                </select>\n              </td>\n            </tr>\n          </tbody>\n          <label for = \"button\"></label>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button class=\"btn btn-success border border-dark\" (click)=\"Book()\">\n                Book\n              </button>\n            </div>\n          </div>\n        </table>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-hallmgmt/admin-hallmgmt.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-hallmgmt/admin-hallmgmt.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminHallmgmtAdminHallmgmtComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h3>Hall {{hall_no}}</h3>\n  <hr>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\" *ngFor = \"let day of days; let i = index;\">\n        <label>{{getDate(day)}}&nbsp;</label>\n        <button class=\"btn btn-primary\" (click)=\"Show(i)\" id=\"{{hall_no}}_{{i}}\">{{day}}</button>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div class=\"container\" *ngIf=\"currentDay!==null\">\n    <h4>Date: {{getDate(currentDay)}}</h4>\n    <hr>\n    <div class=\"row\">\n      <label for=\"Breakfast\"><h3>Breakfast</h3></label>\n      <div class=\"container\">\n        <div class=\"row py-2\" *ngFor=\"let ext of mealsB;  let i = index\">\n          <app-admin-extra [extra]=\"ext\"></app-admin-extra>\n        </div>\n      </div>\n      <hr>\n      <div class=\"container\">\n        <div class=\"row py-2\">\n          <app-admin-extra [mode]=\"'ADD'\" [extra]=\"['B', currentDay, hall_no]\"></app-admin-extra>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <label for=\"Lunch\"><h3>Lunch</h3></label>\n      <div class=\"container\">\n        <div class=\"row py-2\" *ngFor=\"let ext of mealsL;  let i = index\">\n          <app-admin-extra [extra]=\"ext\"></app-admin-extra>\n        </div>\n      </div>\n      <hr>\n      <div class=\"container\">\n        <div class=\"row py-2\">\n          <app-admin-extra [mode]=\"'ADD'\" [extra]=\"['L', currentDay, hall_no]\"></app-admin-extra>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <label for=\"Dinner\"><h3>Dinner</h3></label>\n      <div class=\"container\">\n        <div class=\"row py-2\" *ngFor=\"let ext of mealsD;  let i = index\">\n          <app-admin-extra [extra]=\"ext\"></app-admin-extra>\n        </div>\n      </div>\n      <hr>\n      <div class=\"container\">\n        <div class=\"row py-2\">\n          <app-admin-extra [mode]=\"'ADD'\" [extra]=\"['D', currentDay, hall_no]\"></app-admin-extra>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-home/admin-home.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-home/admin-home.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminHomeAdminHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h2>Hi Admin!</h2>\n  <hr>\n  <div class=\"container\">\n    <label for=\"Title\"> <h3>Hall Manager</h3></label>\n    <div id=\"accordion\">\n      <div class=\"card my-2\" *ngFor=\"let hall of halls; let i = index\">\n        <div class=\"card-header\" [id]=\"'heading'+i\">\n          <h5 class=\"mb-0\">\n            <button class = \"btn btn-link collapsed\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse'+i\" aria-expanded=\"false\" [attr.aria-controls]=\"'collapse'+i\" [attr.data-parent]=\"'#collapse' + i\">\n              Manage Hall {{hall}}\n            </button>\n          </h5>\n        </div>\n\n        <div [id]=\"'collapse'+i\" class=\"collapse\" [attr.aria-labelledby]=\"'heading'+i\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            <app-admin-hallmgmt [hall_no]=\"hall\" ></app-admin-hallmgmt>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-search/admin-search.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-search/admin-search.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminSearchAdminSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <form [formGroup]=\"searchForm\">\n    <div class=\"container\">\n      <label for=\"hall\">Hall:</label>\n      <div class=\"row\">\n        <div class=\"col\">\n          <select formControlName=\"hall\" id=\"hall\">\n            <option *ngFor=\"let hall of halls\" [ngValue]=\"hall\">\n              {{ hall }}\n            </option>\n          </select>\n        </div>\n      </div>\n      <hr>\n      <label>Meal Date: </label>\n      <div class=\"row\">\n        <div class=\"col\">\n          <select formControlName=\"date\" id=\"date\">\n            <option *ngFor=\"let i of dates\" [ngValue]=\"i\">\n              {{ i }}\n            </option>\n          </select>\n        </div>\n      </div>\n      <hr>\n      <label>Name of Extra:</label>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"text\" formControlName=\"extra_name\" class=\"form-control\">\n        </div>\n      </div>\n      <hr>\n      <button class=\"btn btn-success\" (click)=\"Submit()\">\n        Submit\n      </button>\n    </div>\n  </form>\n  <hr>\n  <div class=\"container\" *ngIf=\"result!==null\">\n    <table class =\"table\">\n      <thead>\n        <th scope=\"col\">Roll</th>\n        <th scope=\"col\">Quantity</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let res of result;\">\n          <th scope=\"row\">{{res['roll']}}</th>\n          <td>{{res['quantity']}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-stat/admin-stat.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-stat/admin-stat.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminStatAdminStatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h2>Hall Resident Accounts</h2>\n  <hr>\n  <div class=\"container\" *ngIf=\"studacc!==null\">\n    <div id=\"accordion\">\n      <div class=\"card my-2\" *ngFor=\"let hall of halls; let i = index\">\n        <div class=\"card-header\" [id]=\"'heading'+i\">\n          <h5 class=\"mb-0\">\n            <button class = \"btn btn-link collapsed\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse'+i\" aria-expanded=\"false\" [attr.aria-controls]=\"'collapse'+i\" [attr.data-parent]=\"'#collapse' + i\">\n            Hall {{hall}} Accounts\n            </button>\n          </h5>\n        </div>\n        <div [id]=\"'collapse'+i\" class=\"collapse\" [attr.aria-labelledby]=\"'heading'+i\" data-parent=\"#accordion\">\n          <table class =\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Roll</th>\n                <th scope=\"col\">Total</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let acc of studacc[hall];\">\n                <th scope=\"row\">{{acc['roll']}}</th>\n                <td>{{acc['total'] | currency:'INR':'symbol'}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"home\">Menu</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"home\">Manage <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"stat\">Statistics</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"search\">Search</a>\n      </li>\n      <button class=\"btn btn-light\" (click)=\"Logout()\">\n        Logout\n      </button>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-genpwd/auth-genpwd.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-genpwd/auth-genpwd.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthGenpwdAuthGenpwdComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h2>New user or forgot your password?</h2>\n  <hr>\n  <h5><i>Password can be generated for IITK students only which is emailed to their institute email addresses. If you are an admin and forgot the password, contact eMess IITK Office.</i></h5>\n  <hr>\n  <h4>Generate New Password</h4>\n  <hr>\n  <div class=\"container\">\n    <form [formGroup]=\"genpwdForm\">\n      <label for = \"username\"> Roll Number: </label>\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <input type = \"text\" formControlName = \"username\" class = \"form-control\">\n        </div>\n      </div>\n      <label for = \"button\"></label>\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <button class=\"btn btn-info\" (click)=\"genpwd()\">\n            Generate\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-login/auth-login.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-login/auth-login.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthLoginAuthLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h2>Login</h2>\n  <hr>\n  <div class=\"container\">\n    <form [formGroup]=\"loginForm\">\n      <label for = \"username\"> Username: </label>\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <input type = \"text\" formControlName = \"username\" class = \"form-control\">\n        </div>\n      </div>\n      <label for = \"password\"> Password: </label>\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <input type = \"password\" formControlName = \"password\" class = \"form-control\">\n        </div>\n      </div>\n      <label for = \"button\"></label>\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <button class=\"btn btn-success\" (click)=\"login()\">\n            Login\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-logout/auth-logout.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-logout/auth-logout.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthLogoutAuthLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n  <h1>Welcome to eMess Extra Token Booking Application</h1>\n  <hr>\n  <app-auth-login></app-auth-login>\n  <hr>\n  <app-auth-genpwd></app-auth-genpwd>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-home/student-home.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-home/student-home.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentHomeStudentHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"user!==null\">\n  <h4>Hi {{user['n']}} ({{user['i']}}),</h4>\n  <hr>\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <h4>\n        Book extras for Hall {{user['h']}}\n      </h4>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col\" *ngFor = \"let day of days; let i = index;\">\n        <label>{{getDate(day)}}</label>\n        <button class=\"btn btn-primary\"(click)=\"Show(i)\">{{day}}</button>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div class=\"container\" *ngIf=\"currentDay!==null\">\n    <h4>Booking Date: {{getDate(currentDay)}}</h4>\n    <hr>\n    <div class=\"row\">\n      <label for=\"Breakfast\"><h3>Breakfast</h3></label>\n      <div class=\"container\">\n        <div class=\"row row-cols-2 justify-content-center\" >\n          <div class=\"col py-2\" *ngFor=\"let ext of mealsB; let i = index\">\n            <app-admin-extra [extra]=\"ext\" [mode]=\"'BOOK'\"></app-admin-extra>\n          </div>\n        </div>\n        <div class=\"row\"  *ngIf=\"mealsB.length==0\">\n          <h5>Whoops, no extra is planned for this meal!</h5>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <label for=\"Lunch\"><h3>Lunch</h3></label>\n      <div class=\"container\">\n        <div class=\"row row-cols-2 justify-content-center\" >\n          <div class=\"col py-2\" *ngFor=\"let ext of mealsL; let i = index\">\n            <app-admin-extra [extra]=\"ext\" [mode]=\"'BOOK'\"></app-admin-extra>\n          </div>\n        </div>\n        <div class=\"row\"  *ngIf=\"mealsL.length==0\">\n          <h5>Whoops, no extra is planned for this meal!</h5>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <label for=\"Dinner\"><h3>Dinner</h3></label>\n      <div class=\"container\">\n        <div class=\"row row-cols-2 justify-content-center\" >\n          <div class=\"col py-2\" *ngFor=\"let ext of mealsD; let i = index\">\n            <app-admin-extra [extra]=\"ext\" [mode]=\"'BOOK'\"></app-admin-extra>\n          </div>\n        </div>\n        <div class=\"row\"  *ngIf=\"mealsD.length==0\">\n          <h5>Whoops, no extra is planned for this meal!</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-orders/student-orders.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-orders/student-orders.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentOrdersStudentOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Orders by student:</h1>\n<div class=\"container\" *ngIf=\"orders.length>0\">\n  <form formArrayname=\"fca\">\n    <div class=\"row py-2\" *ngFor=\"let order of orders; let i = index;\">\n      <div class=\"card\" style=\"width: 50rem;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{order['extra_name']}}</h5>\n          <div class=\"container\">\n            <table class=\"table\">\n              <tbody>\n                <tr>\n                  <th scope=\"row\">Quantity</th>\n                  <td><input type=\"text\" class ='form-control' [formControl]=\"fca.controls[i]\" ></td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Price</th>\n                  <td>{{order['booking_price'] |  currency:'INR':'symbol'}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Total</th>\n                  <td>{{(order['booking_price'] * order['quantity']) |  currency:'INR':'symbol'}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Meal Date</th>\n                  <td>{{order['meal_date']}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Booked At</th>\n                  <td>{{order['booked_at']}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Last Modified At</th>\n                  <td>{{order['last_mod_at']}}</td>\n                </tr>\n              </tbody>\n            </table>\n            <label for = \"button\"></label>\n            <div class=\"row\" *ngIf=\"canModify(order)==true\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-info\" (click)=\"Update(order, i)\">\n                  Update\n                </button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-danger\" (click)=\"Delete(order)\">\n                  Delete\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div class = \"container\" *ngIf=\"orders.length==0\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"card-text\">\n        <h3>Whoops, looks like there are no orders!</h3>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-profile/student-profile.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-profile/student-profile.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentProfileStudentProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h1>{{user['n']}}</h1>\n  <hr>\n  <div class=\"row justify-content-center\">\n    <div class=\"card bg-light\" style=\"width: 25rem;\">\n      <img class=\"card-img-top\" [src]=\"link\" width=\"35%\" (error)=\"handle($event)\" alt=\"Profile Picture\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Student Profile</h5>\n        <div class=\"card-text\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                Roll: {{user['i']}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                Gender: {{user['g']}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                Hall: {{user['h']}}\n              </div>\n            </div>\n            <div class=\"row\" *ngIf=\"total>=0\">\n              <div class=\"col-6\">\n                Total Amount: {{total}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-stat/student-stat.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-stat/student-stat.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentStatStudentStatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Hello From Student Stat Component</h1>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"home\">Menu</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"home\">Book <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"profile\">Profile</a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"stat\">History</a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"orders\">Orders</a>\n      </li>\n      <button class=\"btn btn-light\" (click)=\"Logout()\">\n        Logout\n      </button>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n";
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

    function __extends(d, b) {
      _extendStatics(d, b);

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
  "./src/app/admin/admin-extra/admin-extra.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/admin/admin-extra/admin-extra.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminExtraAdminExtraComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWV4dHJhL2FkbWluLWV4dHJhLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-extra/admin-extra.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/admin-extra/admin-extra.component.ts ***!
    \************************************************************/

  /*! exports provided: AdminExtraComponent */

  /***/
  function srcAppAdminAdminExtraAdminExtraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminExtraComponent", function () {
      return AdminExtraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var AdminExtraComponent = /*#__PURE__*/function () {
      function AdminExtraComponent(backendService, router) {
        _classCallCheck(this, AdminExtraComponent);

        this.backendService = backendService;
        this.router = router;
        this.extra = null;
        this.mode = 'UPDATE';
        this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      }

      _createClass(AdminExtraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.backendService.currentUser == null) {
            this.router.navigate(['/', 'auth']);
          }

          console.log('Initialised admin extra component');
          this.extraForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            max_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            limit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            weeks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1)
          });
          this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1)
          });

          if (this.extra !== null && this.mode !== 'ADD') {
            this.extraForm = this.groupDict(this.extra);
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // console.log("Value changed");
          if ('extra' in changes && this.mode !== 'ADD') {
            this.extraForm = this.groupDict(changes['extra']['currentValue']);
          }
        }
      }, {
        key: "groupDict",
        value: function groupDict(extra) {
          // this.extra = extra;
          if (extra === null) {
            return null;
          } else {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](extra[1]['name']),
              price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](extra[1]['price']),
              max_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](extra[1]['max_amount']),
              limit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](extra[1]['limit']),
              weeks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1)
            });
          }
        }
      }, {
        key: "Update",
        value: function Update() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("Update");
                    _context.next = 3;
                    return this.backendService.updateExtra(this.extra[0], {
                      id: this.extra[1]['id'],
                      name: this.extraForm.get('name').value,
                      price: this.extraForm.get('price').value,
                      max_amount: this.extraForm.get('max_amount').value,
                      limit: this.extraForm.get('limit').value
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "Delete",
        value: function Delete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("Delete");
                    _context2.next = 3;
                    return this.backendService.deleteExtra(this.extra[0]['hall'], this.extra[1]);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "Add",
        value: function Add() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log("Add");
                    _context3.next = 3;
                    return this.backendService.addExtra({
                      hall: this.extra[2],
                      meal_type: this.extra[0],
                      meal_day: this.extra[1],
                      start_date: this.getDate(this.extra[1])
                    }, {
                      name: this.extraForm.get('name').value,
                      price: this.extraForm.get('price').value,
                      max_amount: this.extraForm.get('max_amount').value,
                      limit: this.extraForm.get('limit').value,
                      weeks: this.extraForm.get('weeks').value
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "Book",
        value: function Book() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log("Book"); // console.log(this.bookForm.get('quantity').value, this.extra);

                    _context4.next = 3;
                    return this.backendService.bookExtra(this.extra[1], this.bookForm.get('quantity').value);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "rnum",
        value: function rnum(val) {
          var num = Number(val);
          return Array(num + 1).fill(1).map(function (x, y) {
            return x + y - 1;
          });
        }
      }, {
        key: "getDate",
        value: function getDate(currentDay) {
          var today = new Date();

          for (var i = 0; i < 7; i++) {
            today.setDate(today.getDate() + 1);

            if (this.days[(today.getDay() - 1 + 7) % 7] === currentDay) {
              today.setHours(today.getHours() + 5);
              today.setMinutes(today.getMinutes() + 30); // console.log(today.toISOString());

              return today.toISOString();
            }
          }
        }
      }]);

      return AdminExtraComponent;
    }();

    AdminExtraComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AdminExtraComponent.prototype, "extra", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AdminExtraComponent.prototype, "mode", void 0);
    AdminExtraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-extra',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-extra.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-extra/admin-extra.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-extra.component.css */
      "./src/app/admin/admin-extra/admin-extra.component.css"))["default"]]
    })], AdminExtraComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-hallmgmt/admin-hallmgmt.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/admin-hallmgmt/admin-hallmgmt.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminHallmgmtAdminHallmgmtComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (min-width: 768px){\n  .seven-cols .col-md-1,\n  .seven-cols .col-sm-1,\n  .seven-cols .col-lg-1  {\n    width: 100%;\n    *width: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .seven-cols .col-md-1,\n  .seven-cols .col-sm-1,\n  .seven-cols .col-lg-1 {\n    width: 14.285714285714285714285714285714%;\n    *width: 14.285714285714285714285714285714%;\n  }\n}\n\n/**\n *  The following is not really needed in this case\n *  Only to demonstrate the usage of @media for large screens\n */\n\n@media (min-width: 1200px) {\n  .seven-cols .col-md-1,\n  .seven-cols .col-sm-1,\n  .seven-cols .col-lg-1 {\n    width: 14.285714285714285714285714285714%;\n    *width: 14.285714285714285714285714285714%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4taGFsbG1nbXQvYWRtaW4taGFsbG1nbXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzs7SUFHRSxXQUFXO0tBQ1gsV0FBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTs7O0lBR0UseUNBQXlDO0tBQ3pDLHlDQUEwQztFQUM1QztBQUNGOztBQUVBOzs7RUFHRTs7QUFDRjtFQUNFOzs7SUFHRSx5Q0FBeUM7S0FDekMseUNBQTBDO0VBQzVDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1oYWxsbWdtdC9hZG1pbi1oYWxsbWdtdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgLnNldmVuLWNvbHMgLmNvbC1tZC0xLFxuICAuc2V2ZW4tY29scyAuY29sLXNtLTEsXG4gIC5zZXZlbi1jb2xzIC5jb2wtbGctMSAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICp3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnNldmVuLWNvbHMgLmNvbC1tZC0xLFxuICAuc2V2ZW4tY29scyAuY29sLXNtLTEsXG4gIC5zZXZlbi1jb2xzIC5jb2wtbGctMSB7XG4gICAgd2lkdGg6IDE0LjI4NTcxNDI4NTcxNDI4NTcxNDI4NTcxNDI4NTcxNCU7XG4gICAgKndpZHRoOiAxNC4yODU3MTQyODU3MTQyODU3MTQyODU3MTQyODU3MTQlO1xuICB9XG59XG5cbi8qKlxuICogIFRoZSBmb2xsb3dpbmcgaXMgbm90IHJlYWxseSBuZWVkZWQgaW4gdGhpcyBjYXNlXG4gKiAgT25seSB0byBkZW1vbnN0cmF0ZSB0aGUgdXNhZ2Ugb2YgQG1lZGlhIGZvciBsYXJnZSBzY3JlZW5zXG4gKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNldmVuLWNvbHMgLmNvbC1tZC0xLFxuICAuc2V2ZW4tY29scyAuY29sLXNtLTEsXG4gIC5zZXZlbi1jb2xzIC5jb2wtbGctMSB7XG4gICAgd2lkdGg6IDE0LjI4NTcxNDI4NTcxNDI4NTcxNDI4NTcxNDI4NTcxNCU7XG4gICAgKndpZHRoOiAxNC4yODU3MTQyODU3MTQyODU3MTQyODU3MTQyODU3MTQlO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-hallmgmt/admin-hallmgmt.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-hallmgmt/admin-hallmgmt.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdminHallMgmtComponent */

  /***/
  function srcAppAdminAdminHallmgmtAdminHallmgmtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHallMgmtComponent", function () {
      return AdminHallMgmtComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var AdminHallMgmtComponent = /*#__PURE__*/function () {
      function AdminHallMgmtComponent(backendService) {
        _classCallCheck(this, AdminHallMgmtComponent);

        this.backendService = backendService;
        this.hall_no = 0;
        this.idx = null;
        this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.currentDay = null;
        this.mealsB = [];
        this.mealsL = [];
        this.mealsD = [];
      }

      _createClass(AdminHallMgmtComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    console.log('Initialized admin hallmgmt component!');
                    _context6.next = 3;
                    return this.backendService.getextras(String(this.hall_no));

                  case 3:
                    this.backendService.dataSubject.subscribe(function (val) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (Object.keys(val).length > 0 && this.hall_no != 0 && this.idx !== null) {
                                  setTimeout(function () {
                                    // console.log(this.backendService.hallmeals);
                                    document.getElementById(JSON.stringify(_this2.hall_no) + "_" + JSON.stringify(_this2.idx % 7)).click();
                                  }, 200);
                                }

                              case 1:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "Show",
        value: function Show(index) {
          this.idx = index;
          this.currentDay = this.days[index];
          var allmeals = this.backendService.hallmeals[this.hall_no];
          this.mealsB = [];
          this.mealsL = [];
          this.mealsD = [];

          for (var i = 0; i < allmeals.length; i++) {
            if (new Date(allmeals[i][0]['meal_date']).getDay() == (this.idx + 1) % 7) {
              if (allmeals[i][0]['meal_type'] === 'B') {
                this.mealsB = [].concat(_toConsumableArray(this.mealsB), [allmeals[i]]);
              }

              if (allmeals[i][0]['meal_type'] === 'L') {
                this.mealsL = [].concat(_toConsumableArray(this.mealsL), [allmeals[i]]);
              }

              if (allmeals[i][0]['meal_type'] === 'D') {
                this.mealsD = [].concat(_toConsumableArray(this.mealsD), [allmeals[i]]);
              }
            }
          }
        }
      }, {
        key: "getDate",
        value: function getDate(currentDay) {
          var today = new Date();

          for (var i = 0; i < 7; i++) {
            today.setDate(today.getDate() + 1);

            if (this.days[(today.getDay() - 1 + 7) % 7] === currentDay) {
              return today.toDateString();
            }
          }
        }
      }, {
        key: "trackElem",
        value: function trackElem(index, element) {
          return element ? element[1]['id'] : null;
        }
      }]);

      return AdminHallMgmtComponent;
    }();

    AdminHallMgmtComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AdminHallMgmtComponent.prototype, "hall_no", void 0);
    AdminHallMgmtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-hallmgmt',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-hallmgmt.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-hallmgmt/admin-hallmgmt.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-hallmgmt.component.css */
      "./src/app/admin/admin-hallmgmt/admin-hallmgmt.component.css"))["default"]]
    })], AdminHallMgmtComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-home/admin-home.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/admin/admin-home/admin-home.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminHomeAdminHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-home/admin-home.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/admin-home/admin-home.component.ts ***!
    \**********************************************************/

  /*! exports provided: AdminHomeComponent */

  /***/
  function srcAppAdminAdminHomeAdminHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function () {
      return AdminHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var AdminHomeComponent = /*#__PURE__*/function () {
      function AdminHomeComponent(backendService) {
        _classCallCheck(this, AdminHomeComponent);

        this.backendService = backendService;
        this.halls = [];
      }

      _createClass(AdminHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Initialized admin home component!');

          if (this.backendService.currentUser !== null) {
            this.halls = this.backendService.currentUser['halls'];
          }
        }
      }, {
        key: "ch",
        value: function ch(index) {
          if (index === 0) {
            return "";
          }

          return " collapsed";
        }
      }, {
        key: "cb",
        value: function cb(index) {
          if (index === 0) {
            return " show";
          }

          return "";
        }
      }, {
        key: "ae",
        value: function ae(index) {
          if (index === 0) {
            return "true";
          }

          return "false";
        }
      }]);

      return AdminHomeComponent;
    }();

    AdminHomeComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]
      }];
    };

    AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-home/admin-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-home.component.css */
      "./src/app/admin/admin-home/admin-home.component.css"))["default"]]
    })], AdminHomeComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-home/admin-home.component */
    "./src/app/admin/admin-home/admin-home.component.ts");
    /* harmony import */


    var _admin_search_admin_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-search/admin-search.component */
    "./src/app/admin/admin-search/admin-search.component.ts");
    /* harmony import */


    var _admin_stat_admin_stat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-stat/admin-stat.component */
    "./src/app/admin/admin-stat/admin-stat.component.ts");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");

    var route = [{
      path: 'messadmin',
      component: _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
      children: [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"]
      }, {
        path: 'stat',
        component: _admin_stat_admin_stat_component__WEBPACK_IMPORTED_MODULE_5__["AdminStatComponent"]
      }, {
        path: 'search',
        component: _admin_search_admin_search_component__WEBPACK_IMPORTED_MODULE_4__["AdminSearchComponent"]
      }, {
        path: '**',
        redirectTo: 'home'
      }]
    }];

    var AdminRoutingModule = /*#__PURE__*/_createClass(function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    });

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin-search/admin-search.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/admin/admin-search/admin-search.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminSearchAdminSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXNlYXJjaC9hZG1pbi1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-search/admin-search.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin/admin-search/admin-search.component.ts ***!
    \**************************************************************/

  /*! exports provided: AdminSearchComponent */

  /***/
  function srcAppAdminAdminSearchAdminSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSearchComponent", function () {
      return AdminSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var AdminSearchComponent = /*#__PURE__*/function () {
      function AdminSearchComponent(backendService) {
        _classCallCheck(this, AdminSearchComponent);

        this.backendService = backendService;
        this.result = null;
        this.dates = [];
        this.halls = [];
      }

      _createClass(AdminSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.halls = this.backendService.currentUser['halls'];
          var today = new Date(),
              dt = new Date();
          today.setHours(today.getHours() + 5);
          today.setMinutes(today.getMinutes() + 30);

          for (var i = -3; i <= 7; i++) {
            dt.setDate(today.getDate() + i);
            this.dates.push(dt.toDateString());
          }

          this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            hall: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            extra_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
        }
      }, {
        key: "Submit",
        value: function Submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this3 = this;

            var hall, date, extra_name;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    console.log("Submitted!");
                    hall = this.searchForm.get('hall').value;
                    date = new Date(this.searchForm.get('date').value).toISOString();
                    extra_name = this.searchForm.get('extra_name').value;
                    console.log(hall, extra_name, date);
                    _context7.next = 7;
                    return this.backendService.search(hall, extra_name, date);

                  case 7:
                    _context7.next = 9;
                    return _context7.sent.subscribe(function (res) {
                      if (res.code == 'success') {
                        _this3.result = res.data;
                        console.log(_this3.result);
                      } else {
                        console.log("Err", res);
                      }
                    }, function (err) {
                      console.log("Err", err);
                    });

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return AdminSearchComponent;
    }();

    AdminSearchComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]
      }];
    };

    AdminSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-search/admin-search.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-search.component.css */
      "./src/app/admin/admin-search/admin-search.component.css"))["default"]]
    })], AdminSearchComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-stat/admin-stat.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/admin/admin-stat/admin-stat.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminStatAdminStatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXN0YXQvYWRtaW4tc3RhdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-stat/admin-stat.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/admin-stat/admin-stat.component.ts ***!
    \**********************************************************/

  /*! exports provided: AdminStatComponent */

  /***/
  function srcAppAdminAdminStatAdminStatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminStatComponent", function () {
      return AdminStatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var AdminStatComponent = /*#__PURE__*/function () {
      function AdminStatComponent(backendService) {
        _classCallCheck(this, AdminStatComponent);

        this.backendService = backendService;
        this.studacc = null;
        this.halls = [];
      }

      _createClass(AdminStatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this4 = this;

            var _iterator, _step, _loop;

            return regeneratorRuntime.wrap(function _callee8$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    console.log('Initialized admin stat component!');

                    if (!(this.backendService.currentUser !== null)) {
                      _context9.next = 20;
                      break;
                    }

                    this.halls = this.backendService.currentUser['halls'];
                    this.studacc = {};
                    _iterator = _createForOfIteratorHelper(this.halls);
                    _context9.prev = 5;
                    _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                      var hall;
                      return regeneratorRuntime.wrap(function _loop$(_context8) {
                        while (1) {
                          switch (_context8.prev = _context8.next) {
                            case 0:
                              hall = _step.value;
                              _context8.next = 3;
                              return _this4.backendService.getTot(hall);

                            case 3:
                              _context8.next = 5;
                              return _context8.sent.subscribe(function (res) {
                                if (res.code == 'success') {
                                  _this4.studacc[hall] = res.data;
                                } else {
                                  console.log("Err", res);
                                }
                              }, function (err) {
                                console.log("Err", err);
                              });

                            case 5:
                            case "end":
                              return _context8.stop();
                          }
                        }
                      }, _loop);
                    });

                    _iterator.s();

                  case 8:
                    if ((_step = _iterator.n()).done) {
                      _context9.next = 12;
                      break;
                    }

                    return _context9.delegateYield(_loop(), "t0", 10);

                  case 10:
                    _context9.next = 8;
                    break;

                  case 12:
                    _context9.next = 17;
                    break;

                  case 14:
                    _context9.prev = 14;
                    _context9.t1 = _context9["catch"](5);

                    _iterator.e(_context9.t1);

                  case 17:
                    _context9.prev = 17;

                    _iterator.f();

                    return _context9.finish(17);

                  case 20:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee8, this, [[5, 14, 17, 20]]);
          }));
        }
      }]);

      return AdminStatComponent;
    }();

    AdminStatComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]
      }];
    };

    AdminStatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-stat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-stat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-stat/admin-stat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-stat.component.css */
      "./src/app/admin/admin-stat/admin-stat.component.css"))["default"]]
    })], AdminStatComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.component.css":
  /*!*******************************************!*\
    !*** ./src/app/admin/admin.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(backendService, router) {
        _classCallCheck(this, AdminComponent);

        this.backendService = backendService;
        this.router = router;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Initialized admin component!');

          if (this.backendService.currentUser === null || this.backendService.userType !== 'messAdmin') {
            this.router.navigate(['/', 'auth']);
          }
        }
      }, {
        key: "Logout",
        value: function Logout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.backendService.logout();

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _shared_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/admin/admin.component.css"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_extra_admin_extra_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-extra/admin-extra.component */
    "./src/app/admin/admin-extra/admin-extra.component.ts");
    /* harmony import */


    var _admin_hallmgmt_admin_hallmgmt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin-hallmgmt/admin-hallmgmt.component */
    "./src/app/admin/admin-hallmgmt/admin-hallmgmt.component.ts");
    /* harmony import */


    var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-home/admin-home.component */
    "./src/app/admin/admin-home/admin-home.component.ts");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _admin_search_admin_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin-search/admin-search.component */
    "./src/app/admin/admin-search/admin-search.component.ts");
    /* harmony import */


    var _admin_stat_admin_stat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin-stat/admin-stat.component */
    "./src/app/admin/admin-stat/admin-stat.component.ts");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");

    var AdminModule = /*#__PURE__*/_createClass(function AdminModule() {
      _classCallCheck(this, AdminModule);
    });

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"], _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_7__["AdminHomeComponent"], _admin_hallmgmt_admin_hallmgmt_component__WEBPACK_IMPORTED_MODULE_6__["AdminHallMgmtComponent"], _admin_stat_admin_stat_component__WEBPACK_IMPORTED_MODULE_10__["AdminStatComponent"], _admin_extra_admin_extra_component__WEBPACK_IMPORTED_MODULE_5__["AdminExtraComponent"], _admin_search_admin_search_component__WEBPACK_IMPORTED_MODULE_9__["AdminSearchComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_8__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      exports: [_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"], _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_7__["AdminHomeComponent"], _admin_hallmgmt_admin_hallmgmt_component__WEBPACK_IMPORTED_MODULE_6__["AdminHallMgmtComponent"], _admin_stat_admin_stat_component__WEBPACK_IMPORTED_MODULE_10__["AdminStatComponent"], _admin_extra_admin_extra_component__WEBPACK_IMPORTED_MODULE_5__["AdminExtraComponent"], _admin_search_admin_search_component__WEBPACK_IMPORTED_MODULE_9__["AdminSearchComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _auth_auth_logout_auth_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth-logout/auth-logout.component */
    "./src/app/auth/auth-logout/auth-logout.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _student_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student/student.component */
    "./src/app/student/student.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
    }, {
      path: 'auth',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]
    }, {
      path: 'student',
      component: _student_student_component__WEBPACK_IMPORTED_MODULE_6__["StudentComponent"]
    }, {
      path: 'messadmin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    }, {
      path: 'logout',
      component: _auth_auth_logout_auth_logout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLogoutComponent"]
    }, {
      path: '**',
      redirectTo: 'auth'
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent(http) {
      _classCallCheck(this, AppComponent);

      this.http = http;
      this.title = 'emess-frontend';
    });

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _student_student_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student/student.module */
    "./src/app/student/student.module.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _shared_backend_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/backend.service */
    "./src/app/shared/backend.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _student_student_module__WEBPACK_IMPORTED_MODULE_5__["StudentModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]],
      providers: [_shared_backend_service__WEBPACK_IMPORTED_MODULE_8__["BackendService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-genpwd/auth-genpwd.component.css":
  /*!************************************************************!*\
    !*** ./src/app/auth/auth-genpwd/auth-genpwd.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthGenpwdAuthGenpwdComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC1nZW5wd2QvYXV0aC1nZW5wd2QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/auth/auth-genpwd/auth-genpwd.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/auth/auth-genpwd/auth-genpwd.component.ts ***!
    \***********************************************************/

  /*! exports provided: AuthGenpwdComponent */

  /***/
  function srcAppAuthAuthGenpwdAuthGenpwdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGenpwdComponent", function () {
      return AuthGenpwdComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var AuthGenpwdComponent = /*#__PURE__*/function () {
      function AuthGenpwdComponent(backendService) {
        _classCallCheck(this, AuthGenpwdComponent);

        this.backendService = backendService;
      }

      _createClass(AuthGenpwdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.genpwdForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          console.log('Initialized auth genpwd component!');
        }
      }, {
        key: "genpwd",
        value: function genpwd() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var username;
            return regeneratorRuntime.wrap(function _callee10$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    username = this.genpwdForm.get('username').value;
                    _context11.next = 3;
                    return this.backendService.genpwd(username);

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return AuthGenpwdComponent;
    }();

    AuthGenpwdComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]
      }];
    };

    AuthGenpwdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-genpwd',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth-genpwd.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-genpwd/auth-genpwd.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth-genpwd.component.css */
      "./src/app/auth/auth-genpwd/auth-genpwd.component.css"))["default"]]
    })], AuthGenpwdComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth-login/auth-login.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/auth/auth-login/auth-login.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthLoginAuthLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC1sb2dpbi9hdXRoLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/auth/auth-login/auth-login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/auth/auth-login/auth-login.component.ts ***!
    \*********************************************************/

  /*! exports provided: AuthLoginComponent */

  /***/
  function srcAppAuthAuthLoginAuthLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLoginComponent", function () {
      return AuthLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");
    /* harmony import */


    var sha_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sha.js */
    "./node_modules/sha.js/index.js");
    /* harmony import */


    var sha_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sha_js__WEBPACK_IMPORTED_MODULE_4__);

    var AuthLoginComponent = /*#__PURE__*/function () {
      function AuthLoginComponent(backendService) {
        _classCallCheck(this, AuthLoginComponent);

        this.backendService = backendService;
      }

      _createClass(AuthLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          console.log('Initialized auth login component!');
        }
      }, {
        key: "login",
        value: function login() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var username, password, hashed;
            return regeneratorRuntime.wrap(function _callee11$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    username = this.loginForm.get('username').value;
                    password = this.loginForm.get('password').value;
                    _context12.next = 4;
                    return sha_js__WEBPACK_IMPORTED_MODULE_4__('sha384').update(password).digest('hex');

                  case 4:
                    hashed = _context12.sent;
                    _context12.next = 7;
                    return this.backendService.login(username, hashed);

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return AuthLoginComponent;
    }();

    AuthLoginComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]
      }];
    };

    AuthLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth-login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-login/auth-login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth-login.component.css */
      "./src/app/auth/auth-login/auth-login.component.css"))["default"]]
    })], AuthLoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth-logout/auth-logout.component.css":
  /*!************************************************************!*\
    !*** ./src/app/auth/auth-logout/auth-logout.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthLogoutAuthLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC1sb2dvdXQvYXV0aC1sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/auth/auth-logout/auth-logout.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/auth/auth-logout/auth-logout.component.ts ***!
    \***********************************************************/

  /*! exports provided: AuthLogoutComponent */

  /***/
  function srcAppAuthAuthLogoutAuthLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLogoutComponent", function () {
      return AuthLogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var AuthLogoutComponent = /*#__PURE__*/function () {
      function AuthLogoutComponent(backendService) {
        _classCallCheck(this, AuthLogoutComponent);

        this.backendService = backendService;
      }

      _createClass(AuthLogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    console.log("Initialised Logout component");
                    _context13.next = 3;
                    return this.backendService.logout();

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return AuthLogoutComponent;
    }();

    AuthLogoutComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]
      }];
    };

    AuthLogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      'selector': 'app-auth-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth-logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth-logout/auth-logout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth-logout.component.css */
      "./src/app/auth/auth-logout/auth-logout.component.css"))["default"]]
    })], AuthLogoutComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.css":
  /*!*****************************************!*\
    !*** ./src/app/auth/auth.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(backendService, router) {
        _classCallCheck(this, AuthComponent);

        this.backendService = backendService;
        this.router = router;
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var user;
            return regeneratorRuntime.wrap(function _callee13$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    user = this.backendService.currentUser;

                    if (!(user !== null)) {
                      _context14.next = 5;
                      break;
                    }

                    if (this.backendService.userType === 'student') {
                      this.router.navigate(['/', 'student']);
                    } else {
                      this.router.navigate(['/', 'messadmin']);
                    }

                    _context14.next = 7;
                    break;

                  case 5:
                    _context14.next = 7;
                    return this.backendService.autologin();

                  case 7:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: _shared_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.css */
      "./src/app/auth/auth.component.css"))["default"]]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_genpwd_auth_genpwd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth-genpwd/auth-genpwd.component */
    "./src/app/auth/auth-genpwd/auth-genpwd.component.ts");
    /* harmony import */


    var _auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth-login/auth-login.component */
    "./src/app/auth/auth-login/auth-login.component.ts");
    /* harmony import */


    var _auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/auth/auth.component.ts");

    var AuthModule = /*#__PURE__*/_createClass(function AuthModule() {
      _classCallCheck(this, AuthModule);
    });

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"], _auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_5__["AuthLoginComponent"], _auth_genpwd_auth_genpwd_component__WEBPACK_IMPORTED_MODULE_4__["AuthGenpwdComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      exports: [_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"], _auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_5__["AuthLoginComponent"], _auth_genpwd_auth_genpwd_component__WEBPACK_IMPORTED_MODULE_4__["AuthGenpwdComponent"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/shared/backend.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/backend.service.ts ***!
    \*******************************************/

  /*! exports provided: BackendService */

  /***/
  function srcAppSharedBackendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return BackendService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    ;

    var BackendService = /*#__PURE__*/function () {
      function BackendService(http, router) {
        _classCallCheck(this, BackendService);

        this.http = http;
        this.router = router;
        this.baseUrl = 'http://127.0.0.1:8000';
        this.username = '';
        this.isLoggedIn = false;
        this.currentUser = null;
        this.authToken = '';
        this.userType = '';
        this.hallmeals = {};
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
      }

      _createClass(BackendService, [{
        key: "getCookie",
        value: function getCookie(name) {
          var cookieValue = null;

          if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';'); // tslint:disable-next-line: prefer-for-of

            for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?

              if (cookie.substring(0, name.length + 1) === name + '=') {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
              }
            }
          }

          return cookieValue;
        }
      }, {
        key: "login",
        value: function login(username, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this5 = this;

            var httpOptions;
            return regeneratorRuntime.wrap(function _callee14$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context15.next = 3;
                    return this.http.post(this.baseUrl + '/api/login', {
                      username: username,
                      password: password
                    }, httpOptions).subscribe(function (res) {
                      if (res.code === 'success') {
                        console.log('Login Successful', res);
                        _this5.username = username;
                        _this5.isLoggedIn = true;
                        _this5.currentUser = res.userInfo;
                        _this5.authToken = res.authToken;
                        _this5.userType = res.userType;
                        _this5.hallmeals = {};

                        _this5.dataSubject.next(_this5.hallmeals);

                        if (_this5.userType === 'student') {
                          _this5.router.navigate(['/', 'student']);
                        } else if (_this5.userType === 'messAdmin') {
                          _this5.router.navigate(['/', 'messadmin']);
                        } else {
                          _this5.router.navigate(['/', 'auth']);
                        } // Redirect to student/admin home page

                      } else {
                        if (res.code === 'invalid_username') {
                          console.log('Invalid Username', res);
                        } else {
                          console.log('Invalid Password', res);
                        } // Show a popup under the login button that login failed
                        // Don't redirect

                      }
                    }, function (err) {
                      console.log('Error', err);
                    });

                  case 3:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "genpwd",
        value: function genpwd(username) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var httpOptions;
            return regeneratorRuntime.wrap(function _callee15$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context16.next = 3;
                    return this.http.post(this.baseUrl + '/api/getpwd', {
                      username: username
                    }, httpOptions).subscribe(function (res) {
                      if (res.code === 'success') {
                        console.log('Password successfully generated!', res); // Show popup that password has been generated successfully.
                        // redirect to login page
                      } else {
                        if (res.code === 'invalid_roll') {
                          console.log('Invalid roll', res); // Let the user try again
                          // Say that roll number is invalid
                        } else {
                          // Unknown error
                          console.log(res);
                        }
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 3:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this6 = this;

            var httpOptions;
            return regeneratorRuntime.wrap(function _callee16$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context17.next = 3;
                    return this.http.post(this.baseUrl + '/api/logout', {
                      username: this.username,
                      authToken: this.authToken
                    }, httpOptions).subscribe(function (res) {
                      if (res.code == 'success') {
                        console.log('Logged out');
                        _this6.username = null;
                        _this6.currentUser = null;
                        _this6.authToken = null;
                        _this6.userType = null;
                        _this6.hallmeals = {};

                        _this6.dataSubject.next(_this6.hallmeals);

                        _this6.router.navigate(['/', 'auth']);
                      } else {
                        console.log(res);
                        _this6.username = null;
                        _this6.currentUser = null;
                        _this6.authToken = null;
                        _this6.userType = null;
                        _this6.hallmeals = {};

                        _this6.dataSubject.next(_this6.hallmeals);

                        _this6.router.navigate(['/', 'auth']);
                      }
                    }, function (err) {
                      console.log(err);
                      _this6.username = null;
                      _this6.currentUser = null;
                      _this6.authToken = null;
                      _this6.userType = null;
                      _this6.hallmeals = {};

                      _this6.dataSubject.next(_this6.hallmeals);

                      _this6.router.navigate(['/', 'auth']);
                    });

                  case 3:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "autologin",
        value: function autologin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _this7 = this;

            var username, authToken, httpOptions;
            return regeneratorRuntime.wrap(function _callee17$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    username = this.getCookie('username');
                    authToken = this.getCookie('authToken');

                    if (!(username == null || authToken == null)) {
                      _context18.next = 4;
                      break;
                    }

                    return _context18.abrupt("return");

                  case 4:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context18.next = 7;
                    return this.http.post(this.baseUrl + '/api/autologin', {
                      username: username,
                      authToken: authToken
                    }, httpOptions).subscribe(function (res) {
                      if (res.code == 'success') {
                        _this7.username = username;
                        _this7.currentUser = res.userInfo;
                        _this7.authToken = authToken;
                        _this7.userType = res.userType;
                        _this7.hallmeals = {};

                        _this7.dataSubject.next(_this7.hallmeals);

                        if (_this7.userType == 'student') {
                          _this7.router.navigate(['/', 'student']);
                        } else {
                          _this7.router.navigate(['/', 'messadmin']);
                        }
                      } else {
                        console.log(res);
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "getextras",
        value: function getextras(hall) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this8 = this;

            var username, authToken, httpOptions;
            return regeneratorRuntime.wrap(function _callee18$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    username = this.username;
                    authToken = this.authToken;

                    if (!(username == null || authToken == null || !hall)) {
                      _context19.next = 4;
                      break;
                    }

                    return _context19.abrupt("return");

                  case 4:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context19.next = 7;
                    return this.http.post(this.baseUrl + '/api/extras', {
                      username: username,
                      authToken: authToken,
                      hall: hall
                    }, httpOptions).subscribe(function (res) {
                      if (res.code == 'success') {
                        _this8.hallmeals[hall] = res.data;
                      } else {
                        console.log("Error", res);
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "updateExtra",
        value: function updateExtra(meal, extra) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this9 = this;

            var username, authToken, httpOptions;
            return regeneratorRuntime.wrap(function _callee20$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    username = this.username;
                    authToken = this.authToken;

                    if (!(username == null || authToken == null)) {
                      _context21.next = 4;
                      break;
                    }

                    return _context21.abrupt("return");

                  case 4:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context21.next = 7;
                    return this.http.post(this.baseUrl + '/api/updextras', {
                      username: username,
                      authToken: authToken,
                      extra: extra
                    }, httpOptions).subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                        return regeneratorRuntime.wrap(function _callee19$(_context20) {
                          while (1) {
                            switch (_context20.prev = _context20.next) {
                              case 0:
                                if (!(res.code == 'success')) {
                                  _context20.next = 6;
                                  break;
                                }

                                _context20.next = 3;
                                return this.getextras(meal['hall']);

                              case 3:
                                this.dataSubject.next(this.hallmeals);
                                _context20.next = 7;
                                break;

                              case 6:
                                console.log("Err", res);

                              case 7:
                              case "end":
                                return _context20.stop();
                            }
                          }
                        }, _callee19, this);
                      }));
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "addExtra",
        value: function addExtra(meal, extra) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _this10 = this;

            var username, authToken, httpOptions;
            return regeneratorRuntime.wrap(function _callee22$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    username = this.username;
                    authToken = this.authToken;

                    if (!(username == null || authToken == null)) {
                      _context23.next = 4;
                      break;
                    }

                    return _context23.abrupt("return");

                  case 4:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context23.next = 7;
                    return this.http.post(this.baseUrl + '/api/addextras', {
                      username: username,
                      authToken: authToken,
                      meal: meal,
                      extra: extra
                    }, httpOptions).subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                        return regeneratorRuntime.wrap(function _callee21$(_context22) {
                          while (1) {
                            switch (_context22.prev = _context22.next) {
                              case 0:
                                if (!(res.code == 'success')) {
                                  _context22.next = 6;
                                  break;
                                }

                                _context22.next = 3;
                                return this.getextras(meal['hall']);

                              case 3:
                                this.dataSubject.next(this.hallmeals);
                                _context22.next = 7;
                                break;

                              case 6:
                                console.log("Err", res);

                              case 7:
                              case "end":
                                return _context22.stop();
                            }
                          }
                        }, _callee21, this);
                      }));
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "deleteExtra",
        value: function deleteExtra(hall, extra) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var _this11 = this;

            var username, authToken, httpOptions;
            return regeneratorRuntime.wrap(function _callee24$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    username = this.username;
                    authToken = this.authToken;

                    if (!(username == null || authToken == null)) {
                      _context25.next = 4;
                      break;
                    }

                    return _context25.abrupt("return");

                  case 4:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context25.next = 7;
                    return this.http.post(this.baseUrl + '/api/deleteextras', {
                      username: username,
                      authToken: authToken,
                      extra: extra
                    }, httpOptions).subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                        return regeneratorRuntime.wrap(function _callee23$(_context24) {
                          while (1) {
                            switch (_context24.prev = _context24.next) {
                              case 0:
                                if (!(res.code == 'success')) {
                                  _context24.next = 6;
                                  break;
                                }

                                _context24.next = 3;
                                return this.getextras(hall);

                              case 3:
                                this.dataSubject.next(this.hallmeals);
                                _context24.next = 7;
                                break;

                              case 6:
                                console.log("Err", res);

                              case 7:
                              case "end":
                                return _context24.stop();
                            }
                          }
                        }, _callee23, this);
                      }));
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "bookExtra",
        value: function bookExtra(extra, quantity) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var _this12 = this;

            var username, authToken, httpOptions;
            return regeneratorRuntime.wrap(function _callee26$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    username = this.username;
                    authToken = this.authToken;

                    if (!(username == null || authToken == null)) {
                      _context27.next = 4;
                      break;
                    }

                    return _context27.abrupt("return");

                  case 4:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context27.next = 7;
                    return this.http.post(this.baseUrl + '/api/book', {
                      username: username,
                      authToken: authToken,
                      extra: extra,
                      quantity: quantity
                    }, httpOptions).subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
                        return regeneratorRuntime.wrap(function _callee25$(_context26) {
                          while (1) {
                            switch (_context26.prev = _context26.next) {
                              case 0:
                                if (res.code == 'success') {
                                  console.log("Booked successfully");
                                } else {
                                  console.log("Err", res);
                                }

                              case 1:
                              case "end":
                                return _context26.stop();
                            }
                          }
                        }, _callee25);
                      }));
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          var username = this.username;
          var authToken = this.authToken;

          if (username == null || authToken == null) {
            return;
          }

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'X-CSRFToken': this.getCookie('csrftoken')
            }),
            withCredentials: true
          };
          return this.http.post(this.baseUrl + '/api/orders', {
            username: username,
            authToken: authToken
          }, httpOptions);
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder(order) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var _this13 = this;

            var username, authToken, httpOptions;
            return regeneratorRuntime.wrap(function _callee28$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    username = this.username;
                    authToken = this.authToken;

                    if (!(username == null || authToken == null)) {
                      _context29.next = 4;
                      break;
                    }

                    return _context29.abrupt("return");

                  case 4:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context29.next = 7;
                    return this.http.post(this.baseUrl + '/api/deleteorder', {
                      username: username,
                      authToken: authToken,
                      order: order
                    }, httpOptions).subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
                        return regeneratorRuntime.wrap(function _callee27$(_context28) {
                          while (1) {
                            switch (_context28.prev = _context28.next) {
                              case 0:
                                if (res.code == 'success') {
                                  this.dataSubject.next(true);
                                  console.log("Deleted successfully");
                                } else {
                                  console.log("Err", res);
                                }

                              case 1:
                              case "end":
                                return _context28.stop();
                            }
                          }
                        }, _callee27, this);
                      }));
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "updateOrder",
        value: function updateOrder(order) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
            var _this14 = this;

            var username, authToken, httpOptions;
            return regeneratorRuntime.wrap(function _callee30$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    username = this.username;
                    authToken = this.authToken;

                    if (!(username == null || authToken == null)) {
                      _context31.next = 4;
                      break;
                    }

                    return _context31.abrupt("return");

                  case 4:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    _context31.next = 7;
                    return this.http.post(this.baseUrl + '/api/updateorder', {
                      username: username,
                      authToken: authToken,
                      order: order
                    }, httpOptions).subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
                        return regeneratorRuntime.wrap(function _callee29$(_context30) {
                          while (1) {
                            switch (_context30.prev = _context30.next) {
                              case 0:
                                if (res.code == 'success') {
                                  this.dataSubject.next(true);
                                  console.log("Updated successfully");
                                } else {
                                  console.log("Err", res);
                                }

                              case 1:
                              case "end":
                                return _context30.stop();
                            }
                          }
                        }, _callee29, this);
                      }));
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }, {
        key: "getTot",
        value: function getTot(hall) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
            var username, authToken, httpOptions;
            return regeneratorRuntime.wrap(function _callee31$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    username = this.username;
                    authToken = this.authToken;

                    if (!(username == null || authToken == null)) {
                      _context32.next = 4;
                      break;
                    }

                    return _context32.abrupt("return");

                  case 4:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    return _context32.abrupt("return", this.http.post(this.baseUrl + '/api/total', {
                      username: username,
                      authToken: authToken,
                      hall: hall
                    }, httpOptions));

                  case 6:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "search",
        value: function search(hall, extra_name, date) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
            var username, authToken, httpOptions;
            return regeneratorRuntime.wrap(function _callee32$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    username = this.username;
                    authToken = this.authToken;

                    if (!(username == null || authToken == null)) {
                      _context33.next = 4;
                      break;
                    }

                    return _context33.abrupt("return");

                  case 4:
                    httpOptions = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'X-CSRFToken': this.getCookie('csrftoken')
                      }),
                      withCredentials: true
                    };
                    return _context33.abrupt("return", this.http.post(this.baseUrl + '/api/search', {
                      username: username,
                      authToken: authToken,
                      hall: hall,
                      extra_name: extra_name,
                      date: date
                    }, httpOptions));

                  case 6:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee32, this);
          }));
        }
      }]);

      return BackendService;
    }();

    BackendService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], BackendService);
    /***/
  },

  /***/
  "./src/app/student/student-home/student-home.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/student/student-home/student-home.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudentHomeStudentHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC1ob21lL3N0dWRlbnQtaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/student-home/student-home.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/student/student-home/student-home.component.ts ***!
    \****************************************************************/

  /*! exports provided: StudentHomeComponent */

  /***/
  function srcAppStudentStudentHomeStudentHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentHomeComponent", function () {
      return StudentHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var StudentHomeComponent = /*#__PURE__*/function () {
      function StudentHomeComponent(backendService) {
        _classCallCheck(this, StudentHomeComponent);

        this.backendService = backendService;
        this.user = null;
        this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.currentDay = null;
        this.idx = null;
        this.mealsB = [];
        this.mealsL = [];
        this.mealsD = [];
      }

      _createClass(StudentHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
            var _this15 = this;

            return regeneratorRuntime.wrap(function _callee34$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    console.log('Initialized student book component!');
                    this.user = this.backendService.currentUser;

                    if (!(this.user !== null)) {
                      _context35.next = 6;
                      break;
                    }

                    _context35.next = 5;
                    return this.backendService.getextras(String(this.user['h']));

                  case 5:
                    setTimeout(function () {
                      // console.log(this.backendService.hallmeals);
                      _this15.Show((new Date().getDay() + 7) % 7);
                    }, 200);

                  case 6:
                    this.backendService.dataSubject.subscribe(function (val) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
                        var _this16 = this;

                        return regeneratorRuntime.wrap(function _callee33$(_context34) {
                          while (1) {
                            switch (_context34.prev = _context34.next) {
                              case 0:
                                if (Object.keys(val).length > 0 && this.user !== null && this.idx !== null) {
                                  setTimeout(function () {
                                    // console.log(this.backendService.hallmeals);
                                    document.getElementById(_this16.user['h'] + "_" + JSON.stringify(_this16.idx % 7)).click();
                                  }, 200);
                                }

                              case 1:
                              case "end":
                                return _context34.stop();
                            }
                          }
                        }, _callee33, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }, {
        key: "Show",
        value: function Show(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
            var allmeals, i;
            return regeneratorRuntime.wrap(function _callee35$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    this.idx = index;
                    this.currentDay = this.days[index];
                    allmeals = this.backendService.hallmeals[parseInt(this.user['h'])];

                    if (!(allmeals == null)) {
                      _context36.next = 5;
                      break;
                    }

                    return _context36.abrupt("return");

                  case 5:
                    this.mealsB = [];
                    this.mealsL = [];
                    this.mealsD = [];

                    for (i = 0; i < allmeals.length; i++) {
                      if (new Date(allmeals[i][0]['meal_date']).getDay() == (this.idx + 1) % 7) {
                        if (allmeals[i][0]['meal_type'] === 'B') {
                          this.mealsB = [].concat(_toConsumableArray(this.mealsB), [allmeals[i]]);
                        }

                        if (allmeals[i][0]['meal_type'] === 'L') {
                          this.mealsL = [].concat(_toConsumableArray(this.mealsL), [allmeals[i]]);
                        }

                        if (allmeals[i][0]['meal_type'] === 'D') {
                          this.mealsD = [].concat(_toConsumableArray(this.mealsD), [allmeals[i]]);
                        }
                      }
                    }

                  case 9:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee35, this);
          }));
        }
      }, {
        key: "getDate",
        value: function getDate(currentDay) {
          var today = new Date();

          for (var i = 0; i < 7; i++) {
            today.setDate(today.getDate() + 1);

            if (this.days[(today.getDay() - 1 + 7) % 7] === currentDay) {
              return today.toDateString();
            }
          }
        }
      }]);

      return StudentHomeComponent;
    }();

    StudentHomeComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]
      }];
    };

    StudentHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-home/student-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-home.component.css */
      "./src/app/student/student-home/student-home.component.css"))["default"]]
    })], StudentHomeComponent);
    /***/
  },

  /***/
  "./src/app/student/student-orders/student-orders.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/student/student-orders/student-orders.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudentOrdersStudentOrdersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC1vcmRlcnMvc3R1ZGVudC1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/student/student-orders/student.orders.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/student/student-orders/student.orders.component.ts ***!
    \********************************************************************/

  /*! exports provided: StudentOrdersComponent */

  /***/
  function srcAppStudentStudentOrdersStudentOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentOrdersComponent", function () {
      return StudentOrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var StudentOrdersComponent = /*#__PURE__*/function () {
      function StudentOrdersComponent(backendService) {
        _classCallCheck(this, StudentOrdersComponent);

        this.backendService = backendService;
        this.orders = [];
      }

      _createClass(StudentOrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
            var _this17 = this;

            return regeneratorRuntime.wrap(function _callee37$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    this.fca = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
                    this.getOrder(); // console.log(this.fca);

                    this.backendService.dataSubject.subscribe(function (val) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
                        var _this18 = this;

                        return regeneratorRuntime.wrap(function _callee36$(_context37) {
                          while (1) {
                            switch (_context37.prev = _context37.next) {
                              case 0:
                                setTimeout(function () {
                                  _this18.getOrder(); // console.log(this.fca);

                                }, 200);

                              case 1:
                              case "end":
                                return _context37.stop();
                            }
                          }
                        }, _callee36);
                      }));
                    });

                  case 3:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee37, this);
          }));
        }
      }, {
        key: "getOrder",
        value: function getOrder() {
          var _this19 = this;

          this.backendService.getOrders().subscribe(function (res) {
            if (res.code == 'success') {
              console.log("Fetched orders successfully", res.data);
              _this19.orders = res.data;

              _this19.fca.clear();

              for (var index = 0; index < _this19.orders.length; index++) {
                _this19.fca.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](parseInt(_this19.orders[index]['quantity'])));
              } // console.log("Orders: ", this.orders);

            } else {
              console.log("Err", res);
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "Update",
        value: function Update(order, i) {
          // console.log(order, this.fca.controls[parseInt(i)]);
          order['delta'] = parseInt(this.fca.controls[parseInt(i)].value) - parseInt(order['quantity']);
          order['quantity'] = this.fca.controls[parseInt(i)].value;
          this.backendService.updateOrder(order);
        }
      }, {
        key: "Delete",
        value: function Delete(order) {
          this.backendService.deleteOrder(order);
        }
      }, {
        key: "canModify",
        value: function canModify(order) {
          var md = new Date(order['meal_date']);
          var today = new Date();
          today.setHours(today.getHours() + 5);
          today.setMinutes(today.getMinutes() + 30);
          return md >= new Date(today.getDate() + 1);
        }
      }]);

      return StudentOrdersComponent;
    }();

    StudentOrdersComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]
      }];
    };

    StudentOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-orders/student-orders.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-orders.component.css */
      "./src/app/student/student-orders/student-orders.component.css"))["default"]]
    })], StudentOrdersComponent);
    /***/
  },

  /***/
  "./src/app/student/student-profile/student-profile.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/student/student-profile/student-profile.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudentProfileStudentProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  background-size: cover;\n  flex-grow: 1;\n  min-width: 140px;\n  width: 20%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LXByb2ZpbGUvc3R1ZGVudC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3N0dWRlbnQtcHJvZmlsZS9zdHVkZW50LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIHdpZHRoOiAyMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/student/student-profile/student-profile.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/student/student-profile/student-profile.component.ts ***!
    \**********************************************************************/

  /*! exports provided: StudentProfileComponent */

  /***/
  function srcAppStudentStudentProfileStudentProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentProfileComponent", function () {
      return StudentProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var StudentProfileComponent = /*#__PURE__*/function () {
      function StudentProfileComponent(backendService, router) {
        _classCallCheck(this, StudentProfileComponent);

        this.backendService = backendService;
        this.router = router;
        this.total = -1;
        this.user = {
          u: '',
          i: '',
          n: '',
          g: '',
          h: ''
        };
        this.link = "";
        this.links = [];
      }

      _createClass(StudentProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
            var _this20 = this;

            return regeneratorRuntime.wrap(function _callee39$(_context40) {
              while (1) {
                switch (_context40.prev = _context40.next) {
                  case 0:
                    console.log('Initialised Student Profile Component');

                    if (!(this.backendService.currentUser !== null)) {
                      _context40.next = 9;
                      break;
                    }

                    this.user = this.backendService.currentUser;
                    this.links.push(this.gen(this.user['g']), this.oa(this.user['i']));
                    this.link = this.dp(this.user['u']);
                    _context40.next = 7;
                    return this.backendService.getTot();

                  case 7:
                    _context40.next = 9;
                    return _context40.sent.subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
                        return regeneratorRuntime.wrap(function _callee38$(_context39) {
                          while (1) {
                            switch (_context39.prev = _context39.next) {
                              case 0:
                                if (res.code == 'success') {
                                  this.total = res.total;
                                } else {
                                  console.log("Err", res);
                                }

                              case 1:
                              case "end":
                                return _context39.stop();
                            }
                          }
                        }, _callee38, this);
                      }));
                    }, function (err) {
                      console.log("Err", err);
                    });

                  case 9:
                  case "end":
                    return _context40.stop();
                }
              }
            }, _callee39, this);
          }));
        }
      }, {
        key: "dp",
        value: function dp(ccid) {
          return 'https://home.iitk.ac.in/~' + ccid + '/dp';
        }
      }, {
        key: "oa",
        value: function oa(roll) {
          return 'https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/' + roll + '_0.jpg';
        }
      }, {
        key: "gen",
        value: function gen(g) {
          if (g == 'M') {
            return 'https://search.pclub.in/assets/images/GenericMale.png';
          } else {
            return 'https://search.pclub.in/assets/images/GenericFemale.png';
          }
        }
      }, {
        key: "handle",
        value: function handle(e) {
          // console.log("Changing src", e)
          if (this.links.length > 0) {
            e.target.src = this.links[this.links.length - 1]; // console.log(e.target.src)

            this.links.pop();
          } else {
            e.target.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// console.log(stringify(this.backendService.username), stringify(this.backendService.authToken));
        }
      }]);

      return StudentProfileComponent;
    }();

    StudentProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    StudentProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-profile/student-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-profile.component.css */
      "./src/app/student/student-profile/student-profile.component.css"))["default"]]
    })], StudentProfileComponent);
    /***/
  },

  /***/
  "./src/app/student/student-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/student/student-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: StudentRoutingModule */

  /***/
  function srcAppStudentStudentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function () {
      return StudentRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-home/student-home.component */
    "./src/app/student/student-home/student-home.component.ts");
    /* harmony import */


    var _student_orders_student_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./student-orders/student.orders.component */
    "./src/app/student/student-orders/student.orders.component.ts");
    /* harmony import */


    var _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-profile/student-profile.component */
    "./src/app/student/student-profile/student-profile.component.ts");
    /* harmony import */


    var _student_stat_student_stat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-stat/student-stat.component */
    "./src/app/student/student-stat/student-stat.component.ts");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/student/student.component.ts");

    var route = [{
      path: 'student',
      component: _student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"],
      children: [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_3__["StudentHomeComponent"]
      }, {
        path: 'stat',
        component: _student_stat_student_stat_component__WEBPACK_IMPORTED_MODULE_6__["StudentStatComponent"]
      }, {
        path: 'profile',
        component: _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_5__["StudentProfileComponent"]
      }, {
        path: 'orders',
        component: _student_orders_student_orders_component__WEBPACK_IMPORTED_MODULE_4__["StudentOrdersComponent"]
      }, {
        path: '**',
        redirectTo: 'home'
      }]
    }];

    var StudentRoutingModule = /*#__PURE__*/_createClass(function StudentRoutingModule() {
      _classCallCheck(this, StudentRoutingModule);
    });

    StudentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudentRoutingModule);
    /***/
  },

  /***/
  "./src/app/student/student-stat/student-stat.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/student/student-stat/student-stat.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudentStatStudentStatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC1zdGF0L3N0dWRlbnQtc3RhdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/student-stat/student-stat.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/student/student-stat/student-stat.component.ts ***!
    \****************************************************************/

  /*! exports provided: StudentStatComponent */

  /***/
  function srcAppStudentStudentStatStudentStatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentStatComponent", function () {
      return StudentStatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentStatComponent = /*#__PURE__*/function () {
      function StudentStatComponent() {
        _classCallCheck(this, StudentStatComponent);
      }

      _createClass(StudentStatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Initialized student stat component!');
        }
      }]);

      return StudentStatComponent;
    }();

    StudentStatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-stat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-stat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-stat/student-stat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-stat.component.css */
      "./src/app/student/student-stat/student-stat.component.css"))["default"]]
    })], StudentStatComponent);
    /***/
  },

  /***/
  "./src/app/student/student.component.css":
  /*!***********************************************!*\
    !*** ./src/app/student/student.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/student.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/student/student.component.ts ***!
    \**********************************************/

  /*! exports provided: StudentComponent */

  /***/
  function srcAppStudentStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComponent", function () {
      return StudentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/backend.service */
    "./src/app/shared/backend.service.ts");

    var StudentComponent = /*#__PURE__*/function () {
      function StudentComponent(backendService, router) {
        _classCallCheck(this, StudentComponent);

        this.backendService = backendService;
        this.router = router;
      }

      _createClass(StudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Initialized student component!');

          if (this.backendService.currentUser === null || this.backendService.userType !== 'student') {
            this.router.navigate(['/', 'auth']);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "Logout",
        value: function Logout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
            return regeneratorRuntime.wrap(function _callee40$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    _context41.next = 2;
                    return this.backendService.logout();

                  case 2:
                  case "end":
                    return _context41.stop();
                }
              }
            }, _callee40, this);
          }));
        }
      }]);

      return StudentComponent;
    }();

    StudentComponent.ctorParameters = function () {
      return [{
        type: _shared_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student.component.css */
      "./src/app/student/student.component.css"))["default"]]
    })], StudentComponent);
    /***/
  },

  /***/
  "./src/app/student/student.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/student/student.module.ts ***!
    \*******************************************/

  /*! exports provided: StudentModule */

  /***/
  function srcAppStudentStudentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentModule", function () {
      return StudentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-home/student-home.component */
    "./src/app/student/student-home/student-home.component.ts");
    /* harmony import */


    var _student_orders_student_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student-orders/student.orders.component */
    "./src/app/student/student-orders/student.orders.component.ts");
    /* harmony import */


    var _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./student-profile/student-profile.component */
    "./src/app/student/student-profile/student-profile.component.ts");
    /* harmony import */


    var _student_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./student-routing.module */
    "./src/app/student/student-routing.module.ts");
    /* harmony import */


    var _student_stat_student_stat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./student-stat/student-stat.component */
    "./src/app/student/student-stat/student-stat.component.ts");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/student/student.component.ts");

    var StudentModule = /*#__PURE__*/_createClass(function StudentModule() {
      _classCallCheck(this, StudentModule);
    });

    StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_student_component__WEBPACK_IMPORTED_MODULE_11__["StudentComponent"], _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_6__["StudentHomeComponent"], _student_stat_student_stat_component__WEBPACK_IMPORTED_MODULE_10__["StudentStatComponent"], _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_8__["StudentProfileComponent"], _student_orders_student_orders_component__WEBPACK_IMPORTED_MODULE_7__["StudentOrdersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_routing_module__WEBPACK_IMPORTED_MODULE_9__["StudentRoutingModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      exports: [_student_component__WEBPACK_IMPORTED_MODULE_11__["StudentComponent"], _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_6__["StudentHomeComponent"], _student_stat_student_stat_component__WEBPACK_IMPORTED_MODULE_10__["StudentStatComponent"], _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_8__["StudentProfileComponent"], _student_orders_student_orders_component__WEBPACK_IMPORTED_MODULE_7__["StudentOrdersComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], StudentModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /mnt/sda5/eMess/frontend/emess-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map