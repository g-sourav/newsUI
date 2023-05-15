(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/HttpConfigInterceptor.ts":
/*!******************************************!*\
  !*** ./src/app/HttpConfigInterceptor.ts ***!
  \******************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HttpConfigInterceptor = /** @class */ (function () {
    function HttpConfigInterceptor() {
    }
    HttpConfigInterceptor.prototype.intercept = function (req, next) {
        var url = req.url;
        var authReq = req;
        if (url.includes('http://localhost')) {
            console.log(url);
            var token = window.sessionStorage.getItem('Token');
            if (token != null)
                authReq = req.clone({
                    headers: req.headers.append('Authorization', 'Bearer ' + token)
                });
        }
        return next.handle(authReq);
    };
    HttpConfigInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HttpConfigInterceptor);
    return HttpConfigInterceptor;
}());



/***/ }),

/***/ "./src/app/Models/Search.ts":
/*!**********************************!*\
  !*** ./src/app/Models/Search.ts ***!
  \**********************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
var Search = /** @class */ (function () {
    function Search() {
    }
    return Search;
}());



/***/ }),

/***/ "./src/app/Models/User.ts":
/*!********************************!*\
  !*** ./src/app/Models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/Modules/get-user/get-user.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Modules/get-user/get-user.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:focus{\r\n    border-color: #1d1c1f;\r\n    box-shadow: 0 0 2px rgba(178, 88, 196, 0.4);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxlcy9nZXQtdXNlci9nZXQtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDJDQUEyQztBQUMvQyIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvZ2V0LXVzZXIvZ2V0LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0OmZvY3Vze1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWQxYzFmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDE3OCwgODgsIDE5NiwgMC40KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Modules/get-user/get-user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Modules/get-user/get-user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-nav></app-admin-nav>\r\n\r\n\r\n<h6 style=\"text-align: center\">User Details:</h6>\r\n<div *ngIf=\"isBlock\"class=\"alert alert-danger\">\r\n  <strong>User Blocked</strong>\r\n</div>\r\n<div *ngIf=\"isSearchBlock\" class=\"alert alert-danger\">\r\n  <strong>User Blocked</strong>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchUser(searchForm.value)\">\r\n    <div class=\"row\">\r\n      <div class=\"col input-group\">\r\n        <input id=\"search\" type=\"search\" placeholder=\"Search..\" name=\"Name\" formControlName=\"Name\" class=\"form-control\">\r\n        <div class=\"input-group-append\">\r\n          <button type=\"search\" class=\"btn btn-success\"><span class=\"fa fa-search\"></span></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <br>\r\n\r\n\r\n  <table class=\"table table-striped table-light table-hover col-md-8 col-sm-11 offset-md-2\" *ngIf=\"!issearched\">\r\n    <thead>\r\n      <tr class=\"table-info\">\r\n        <th>Details</th>\r\n        <th>Block</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody *ngFor=\"let Alist of analystList, let i=index\">\r\n      <tr scope=\"row\">\r\n        <td style=\"width: 1px\"> <strong style=\"width:10px\">{{Alist.userEmail}}</strong> <br><p class=\"text-muted\"> {{Alist.userName}}</p></td>\r\n        <td style=\"width: 1px\"> <button *ngIf=\"Alist.userStatus\" name=\"button_{{i}}\" class=\"btn btn-warning\"\r\n            (click)=\"blockUser(i,Alist.userEmail)\"> <i class=\"fa fa-user-times\"></i>&nbsp;&nbsp; Block &nbsp;</button>\r\n          <button *ngIf=\"!Alist.userStatus\" name=\"ubutton_{{i}}\" class=\"btn btn-outline-danger\"\r\n            (click)=\"unblockUser(i,Alist.userEmail)\">&nbsp;<i class=\"fa fa-ban\"></i>&nbsp;UnBlock</button> </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <table class=\"table table-hover\" *ngIf=\"issearched\">\r\n    <thead>\r\n      <tr class=\"table-info\">\r\n        <th>Details</th>\r\n        <th> Block</th>\r\n      </tr>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <tr scope=\"row\" *ngFor=\"let Slist of searchedList, let i=index\">\r\n        <td style=\"width: 1px\"> <strong style=\"width:10px\">{{Slist.userEmail}}</strong> <br><p class=\"text-muted\"> {{Slist.userName}}</p></td>\r\n        <td style=\"width: 1px\"> <button *ngIf=\"Slist.userStatus\" name=\"buttont_{{i}}\" class=\"btn btn-warning\"\r\n            (click)=\"blockSearchUser(i,Slist.userEmail)\"><i class=\"fa fa-user-times\"></i>Block</button>\r\n          <button *ngIf=\"!Slist.userStatus\" name=\"ubuttont_{{i}}\" class=\"btn btn-outline-danger\"\r\n            (click)=\"unblockSearchUser(i,Slist.userEmail)\">&nbsp;<i class=\"fa fa-ban\"></i>&nbsp;Unblock</button> </td>\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n  <div *ngIf=\"isFound\"class=\"alert alert-danger\">\r\n    <strong>No result found</strong>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Modules/get-user/get-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Modules/get-user/get-user.component.ts ***!
  \********************************************************/
/*! exports provided: GetUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserComponent", function() { return GetUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Services_get_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/get-user.service */ "./src/app/Services/get-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var GetUserComponent = /** @class */ (function () {
    function GetUserComponent(formBuilder, getUserService, router) {
        this.formBuilder = formBuilder;
        this.getUserService = getUserService;
        this.router = router;
        this.issearched = false;
        this.buttonList = new Array();
    }
    GetUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchedList = new Array();
        this.issearched = false;
        this.searchForm = this.formBuilder.group({
            Name: ['']
        });
        this.getUserService.getAllUser().subscribe(function (data) {
            _this.analystList = data;
        });
    };
    GetUserComponent.prototype.searchUser = function (data) {
        var _this = this;
        this.issearched = true;
        this.searchedList = [];
        this.analystList.forEach(function (user) {
            if (user.userName.includes(data.Name)) {
                _this.searchedList.push(user);
            }
        });
        if (this.searchedList.length == 0) {
            this.isFound = true;
            new Promise(function (res) {
                setTimeout(function () {
                    _this.isFound = false;
                    res();
                }, 4000);
            });
        }
    };
    GetUserComponent.prototype.blockUser = function (i, user) {
        var _this = this;
        this.buttonList[i] = 1;
        this.getUserService.blockUser(user).subscribe(function (data) {
        });
        this.isBlock = true;
        new Promise(function (res) {
            setTimeout(function () {
                _this.isBlock = false;
                res();
            }, 4000);
        });
        this.analystList[i].userStatus = false;
        alert("user blocked");
    };
    GetUserComponent.prototype.blockSearchUser = function (i, user) {
        var _this = this;
        this.buttonList[i] = 1;
        this.getUserService.blockUser(user).subscribe(function (data) {
        });
        this.isSearchBlock = true;
        new Promise(function (res) {
            setTimeout(function () {
                _this.isSearchBlock = false;
                res();
            }, 4000);
        });
        this.searchedList[i].userStatus = false;
        alert("user blocked");
    };
    GetUserComponent.prototype.unblockSearchUser = function (i, user) {
        this.getUserService.unblockUser(user).subscribe(function (data) {
        });
        this.searchedList[i].userStatus = true;
        alert("user unblocked");
    };
    GetUserComponent.prototype.unblockUser = function (i, user) {
        this.getUserService.unblockUser(user).subscribe(function (data) {
        });
        this.analystList[i].userStatus = true;
        alert("user unblocked");
    };
    GetUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-user',
            template: __webpack_require__(/*! ./get-user.component.html */ "./src/app/Modules/get-user/get-user.component.html"),
            styles: [__webpack_require__(/*! ./get-user.component.css */ "./src/app/Modules/get-user/get-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_Services_get_user_service__WEBPACK_IMPORTED_MODULE_3__["GetUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GetUserComponent);
    return GetUserComponent;
}());



/***/ }),

/***/ "./src/app/Modules/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/Modules/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    background-color: white;\r\n}\r\n.col-md-5{\r\n    background-color: rgb(250, 241, 227);\r\n    border: 1px solid rgb(20, 42, 85);\r\n    padding-top:30px; \r\n\r\n}\r\ninput:focus{\r\n    border-color: #1d1c1f;\r\n    box-shadow: 0 0 2px rgba(178, 88, 196, 0.4);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiwyQ0FBMkM7QUFDL0MiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb2wtbWQtNXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI0MSwgMjI3KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMCwgNDIsIDg1KTtcclxuICAgIHBhZGRpbmctdG9wOjMwcHg7IFxyXG5cclxufVxyXG5pbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlci1jb2xvcjogIzFkMWMxZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgxNzgsIDg4LCAxOTYsIDAuNCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Modules/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/Modules/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">Cognizant News</a>\r\n\r\n</nav>\r\n<div class=\"jumbotron\">\r\n    <div>\r\n        <div *ngIf=\"isBlocked\" class=\"alert alert-danger\">\r\n            <strong>You are blocked by admin!</strong>\r\n        </div>\r\n        <div *ngIf=\"isWrongCredential\"class=\"alert alert-danger\">\r\n            <strong>Wrong Credential</strong>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5 offset-md-3 shadow-lg p-3 mb-5 bg-white rounded\">\r\n                <h1 id=\"logInHead\" class=\"card-title text-center\">Log In</h1>\r\n                <hr>\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\r\n                    <div class=\"form-group\">\r\n                        <label> <i class=\"fa fa-envelope\"></i> Email:</label>\r\n                        <input id=\"Email\" type=\"email\" name=\"userEmail\" formControlName=\"userEmail\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': checkInSubmission && check.userEmail.errors }\" />\r\n                        <div id=\"emailError\" *ngIf=\"checkInSubmission && check.userEmail.errors \"\r\n                            class=\"invalid-feedback\">\r\n                            <div *ngIf=\"check.userEmail.errors.required\">Email is required</div>\r\n                            <div *ngIf=\"check.userEmail.errors.pattern\">Email must be vaild</div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"strong\"><i class=\"fa fa-lock\"></i> Password:</label>\r\n                        <input id=\"userPassword\" type=\"password\" name=\"userPassword\" formControlName=\"userPassword\"\r\n                            class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': checkInSubmission && check.userPassword.errors }\" />\r\n                        <div id=\"passwordError\" *ngIf=\"checkInSubmission && check.userPassword.errors\"\r\n                            class=\"invalid-feedback\">\r\n                            <div *ngIf=\"check.userPassword.errors.required\">Password is required</div>\r\n                            <div *ngIf=\"check.userPassword.errors.pattern\">Password must contain atleast one\r\n                                uppercase,one Lowercase,one digit , one special character and minimum and maximum length\r\n                                should be 8 and 16</div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <button [ngClass]=\"{ 'disabled': checkInSubmission && loginForm.invalid }\" id=\"signInbut\"\r\n                            class=\"btn btn-outline-success\" style=\"width: 100%\">Sign In</button>\r\n\r\n                        <br>\r\n                        <a id=\"signupButton\" class=\"btn btn-link\" routerLink=\"../Signup\" style=\"width: 100%\">Dont have\r\n                            an account?Sign Up here</a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Modules/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/login.service */ "./src/app/Services/login.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, loginService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkInSubmission = false;
        this.loginForm = this.formBuilder.group({
            userEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\\.([a-zA-Z]{2,5})$')]],
            userPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "check", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function (user) {
        var _this = this;
        window.sessionStorage.setItem('email', user.userEmail.toString());
        this.checkInSubmission = true;
        if (this.loginForm.invalid) {
            return;
        }
        ;
        this.loginService.login(user).subscribe(function (data) {
            if (data == "blocked") {
                _this.isBlocked = true;
                new Promise(function (res) {
                    setTimeout(function () {
                        _this.isBlocked = false;
                        res();
                    }, 6000);
                });
            }
            else {
                if (user.userEmail == "admin@admin.com") {
                    //  window.sessionStorage.setItem('Token',data);
                    window.sessionStorage.setItem('Token', data);
                    _this.router.navigate(['GetUser']);
                }
                else {
                    //   window.sessionStorage.setItem('Token',data);
                    window.sessionStorage.setItem('Token', data);
                    _this.router.navigate(['Usernav']);
                }
            }
        }, function (error) {
            _this.isWrongCredential = true;
            new Promise(function (res) {
                setTimeout(function () {
                    _this.isWrongCredential = false;
                    _this.router.navigate(['Login']);
                    res();
                }, 6000);
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Modules/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Modules/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_Services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Modules/news-api/news-api.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Modules/news-api/news-api.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.jumbotron {\r\n    background-color: white;\r\n}\r\n\r\n.fix-image{\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    overflow: hidden;\r\n}\r\n\r\n.art-title{\r\n    padding: 4px;\r\n    color: rgb(57, 63, 65);\r\n\r\n}\r\n\r\ninput:focus{\r\n    border-color: #1d1c1f;\r\n    box-shadow: 0 0 2px rgba(178, 88, 196, 0.4);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxlcy9uZXdzLWFwaS9uZXdzLWFwaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjs7QUFFMUI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsMkNBQTJDO0FBQy9DIiwiZmlsZSI6InNyYy9hcHAvTW9kdWxlcy9uZXdzLWFwaS9uZXdzLWFwaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5maXgtaW1hZ2V7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmFydC10aXRsZXtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGNvbG9yOiByZ2IoNTcsIDYzLCA2NSk7XHJcblxyXG59XHJcbmlucHV0OmZvY3Vze1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWQxYzFmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDE3OCwgODgsIDE5NiwgMC40KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Modules/news-api/news-api.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Modules/news-api/news-api.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n\r\n\r\n<div class=\" col-md-8 mx-auto\">\r\n\r\n  <div class=\"container \">\r\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchArticles(searchForm.value)\">\r\n      <div class=\"row\">\r\n        <div class=\"col input-group\">\r\n          <input type=\"text\" placeholder=\"Search..\" name=\"search\" formControlName=\"search\" class=\"form-control\">\r\n\r\n          <div class=\"input-group-append\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-search\"></i></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<br>\r\n<div *ngIf=\"isload\" class=\"row col-md-4 col-sm-6 offset-md-4 offset-sm-3\">\r\n    <img src=\"https://cdn.dribbble.com/users/97161/screenshots/1696432/__.gif\">\r\n  </div>\r\n<div *ngIf=\"!isSearch && !isload\" class=\"row col-md-4 offset-md-5\">\r\n    \r\n  <p class=\"alert alert-danger\">NO NEWS FOUND</p>\r\n</div>\r\n<div *ngIf=\"isSearch\" class=\"row col-md-8 col-sm-8 offset-md-2 offset-sm-1\">\r\n  <div class=\"mx-2 my-4 shadow-lg p-3  bg-white\" *ngFor=\"let article of mArticles;let i=index\">\r\n\r\n    <h4 class=\" art-title\">{{mArticles[i].title}}</h4>\r\n    <h6 class=\" text-muted\">{{mArticles[i].source.name}}</h6>\r\n    <div class=\"row\">\r\n      <div>\r\n        <img mat-card-image class=\"img-article fix-image\" src={{mArticles[i].urlToImage}} alt=\"no-image\"\r\n          style=\"width:340px;height:170px\">\r\n      </div>\r\n      <div class=\" mx-4 col-md-6 col-sm-10\">\r\n        <br>\r\n        <span>\r\n          {{article.description}}\r\n        </span>\r\n        <a href={{article.url}} target=\"_blank\" class=\"card-link ml-auto mb-2\">\r\n          Read\r\n          More\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Modules/news-api/news-api.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Modules/news-api/news-api.component.ts ***!
  \********************************************************/
/*! exports provided: NewsApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiComponent", function() { return NewsApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/news-api.service */ "./src/app/Services/news-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Models_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/Search */ "./src/app/Models/Search.ts");
/* harmony import */ var src_app_Models_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/User */ "./src/app/Models/User.ts");
/* harmony import */ var src_app_Services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/login.service */ "./src/app/Services/login.service.ts");









var NewsApiComponent = /** @class */ (function () {
    function NewsApiComponent(formBuilder, newsapi, loginService, location, router) {
        this.formBuilder = formBuilder;
        this.newsapi = newsapi;
        this.loginService = loginService;
        this.location = location;
        this.router = router;
        this.user = new src_app_Models_User__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.searchResult = new src_app_Models_Search__WEBPACK_IMPORTED_MODULE_6__["Search"]();
    }
    NewsApiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isload = true;
        this.isSearch = true;
        //load articles
        // console.log("call article");
        this.newsapi.initArticles().subscribe(function (data) {
            _this.mArticles = data['articles'];
            if (_this.mArticles.length > 0) {
                _this.isload = false;
            }
            else {
                new Promise(function (res) {
                    setTimeout(function () {
                        _this.isload = false;
                        res();
                    });
                });
            }
        });
        // //  //load news sources
        // this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
        this.searchForm = this.formBuilder.group({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
    };
    NewsApiComponent.prototype.searchArticles = function (source) {
        var _this = this;
        this.isload = true;
        this.mArticles = [];
        this.newsapi.getArticlesByID(source.search).subscribe(function (data) {
            _this.mArticles = data['articles'];
            if (_this.mArticles.length > 0) {
                _this.isload = false;
                _this.isSearch = true;
            }
            else {
                new Promise(function (res) {
                    setTimeout(function () {
                        _this.isload = false;
                        res();
                        _this.isSearch = false;
                        res();
                    }, 5000);
                });
                _this.isSearch = false;
            }
        }, function (error) {
            _this.newsapi.initArticles().subscribe(function (data) { return _this.mArticles = data['articles']; });
        });
        this.searchResult.searchString = source.search;
        this.searchResult.user = this.user;
        this.newsapi.saveSearch(this.searchResult).subscribe(function (data) {
        });
    };
    NewsApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-api',
            template: __webpack_require__(/*! ./news-api.component.html */ "./src/app/Modules/news-api/news-api.component.html"),
            styles: [__webpack_require__(/*! ./news-api.component.css */ "./src/app/Modules/news-api/news-api.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_Services_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"], src_app_Services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewsApiComponent);
    return NewsApiComponent;
}());



/***/ }),

/***/ "./src/app/Modules/search-history/search-history.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Modules/search-history/search-history.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvc2VhcmNoLWhpc3Rvcnkvc2VhcmNoLWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Modules/search-history/search-history.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Modules/search-history/search-history.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDelete\"class=\"alert alert-danger\">\r\n  <strong>One history deleted</strong>\r\n</div>\r\n\r\n<br>\r\n<div class=\" col-md-8 col-sm-12 mx-auto\">\r\n  <div class=\"container\">\r\n\r\n    <p *ngIf=\"!isHistory\" class=\"alert alert-danger\">No history is there </p>\r\n\r\n    <table *ngIf=\"isHistory\" class=\"table table-striped table-light table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Details</th>\r\n          <th>Time </th>\r\n          <th> Delete </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr scope=\"row\" *ngFor=\"let searchList of SearchList, let i=index\">\r\n          <td> {{i+1}}</td>\r\n          <td> {{SearchList[i].searchString}}</td>\r\n          <td> {{SearchList[i].searchTime | date : \"dd/MM/yy\"}} &nbsp;\r\n            {{SearchList[i].searchTime | date : \"hh:mm:ss a\"}}</td>\r\n          <td> <button id={{i}} class=\"btn btn-outline-danger\" (click)=\"deleteSearch(i,SearchList[i].searchId)\"><i\r\n                class=\"fa fa-remove\"></i></button> </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Modules/search-history/search-history.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Modules/search-history/search-history.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHistoryComponent", function() { return SearchHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/news-api.service */ "./src/app/Services/news-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SearchHistoryComponent = /** @class */ (function () {
    function SearchHistoryComponent(newsapi, router) {
        this.newsapi = newsapi;
        this.router = router;
    }
    SearchHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emailId = window.sessionStorage.getItem('email');
        this.newsapi.getSearch(this.emailId).subscribe(function (data) {
            _this.SearchList = data;
            if (_this.SearchList.length > 0) {
                _this.isHistory = true;
            }
            else
                _this.isHistory = false;
        });
    };
    SearchHistoryComponent.prototype.deleteSearch = function (i, searchId) {
        var _this = this;
        this.SearchList.splice(i, 1);
        this.newsapi.deleteSearch(searchId).subscribe(function (data) {
            if (_this.SearchList.length > 0) {
                _this.isHistory = true;
            }
            else
                _this.isHistory = false;
        });
        alert("one history deleted");
        this.isDelete = true;
        new Promise(function (res) {
            setTimeout(function () {
                _this.isDelete = false;
                res();
            }, 3000);
        });
    };
    SearchHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-history',
            template: __webpack_require__(/*! ./search-history.component.html */ "./src/app/Modules/search-history/search-history.component.html"),
            styles: [__webpack_require__(/*! ./search-history.component.css */ "./src/app/Modules/search-history/search-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchHistoryComponent);
    return SearchHistoryComponent;
}());



/***/ }),

/***/ "./src/app/Modules/signup/signup.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Modules/signup/signup.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .col-md-5{\r\n  /* background-image: url(\"https://png.pngtree.com/element_origin_min_pic/16/12/18/b20d4be1c1d4712656ebc6f1d693f2f8.jpg\") */\r\n  background-color: rgb(252, 252, 252);\r\n  border: 1px solid rgb(131, 144, 170);\r\n  padding: 20px;\r\n\r\n} \r\n\r\n.a{\r\n  padding: 20px;\r\n  float: center;\r\n} \r\n\r\n.jumbotron{\r\n  background-color: rgb(255, 255, 255);\r\n} \r\n\r\ninput:focus{\r\n  border-color: #1d1c1f;\r\n  box-shadow: 0 0 2px rgba(178, 88, 196, 0.4);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7RUFDQywwSEFBMEg7RUFDMUgsb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxhQUFhOztBQUVmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiwyQ0FBMkM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuY29sLW1kLTV7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vZWxlbWVudF9vcmlnaW5fbWluX3BpYy8xNi8xMi8xOC9iMjBkNGJlMWMxZDQ3MTI2NTZlYmM2ZjFkNjkzZjJmOC5qcGdcIikgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTIsIDI1Mik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMSwgMTQ0LCAxNzApO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG59IFxyXG5cclxuLmF7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmbG9hdDogY2VudGVyO1xyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbmlucHV0OmZvY3Vze1xyXG4gIGJvcmRlci1jb2xvcjogIzFkMWMxZjtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMTc4LCA4OCwgMTk2LCAwLjQpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Modules/signup/signup.component.html":
/*!******************************************************!*\
  !*** ./src/app/Modules/signup/signup.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">Cognizant News</a>\r\n\r\n</nav>\r\n<div class=\"jumbotron\">\r\n    <div>\r\n        <div *ngIf=\"correct\" class=\"alert alert-success\">\r\n            <strong>Sign up successful!</strong> Now,you will redirected into login page,Click here\r\n            to <a routerLink=\"../Login\">log in </a> </div> <div *ngIf=\"incorrect\" class=\"alert alert-danger\">\r\n                <strong>Email Already Exist</strong> Register with a new email, and try again..!\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5 offset-md-3 shadow-lg p-3 mb-5 bg-white rounded\">\r\n                <h1 id=\"signUpHead\" class=\"card-title text-center\">Sign Up</h1>\r\n                <hr>\r\n                <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSignup(signUpForm.value)\">\r\n                    <div class=\"form-group\">\r\n                        <label><i class=\"fa fa-user \"></i> Username:</label>\r\n                        <input id=\"userName\" type=\"text\" name=\"userName\" formControlName=\"userName\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': checkInSubmission && check.userName.errors }\" />\r\n                        <div id=\"nameError\" *ngIf=\"checkInSubmission && check.userName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"check.userName.errors.required\">Username is required</div>\r\n                            <div id=\"userNameMinLengthError\" *ngIf=\"check.userName.errors.minlength\">Username min length\r\n                                must be 4</div>\r\n                            <div *ngIf=\"check.userName.errors.maxlength\">Username min length must be 20</div>\r\n                            <div *ngIf=\"check.userName.errors.pattern\">Username can contains only alphabets</div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label> <i class=\"fa fa-envelope \"></i> Email:</label>\r\n                        <input id=\"userEmail\" type=\"email\" name=\"userEmail\" formControlName=\"userEmail\"\r\n                            class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': checkInSubmission && check.userEmail.errors }\" />\r\n                        <div id=\"emailError\" *ngIf=\"checkInSubmission && check.userEmail.errors \"\r\n                            class=\"invalid-feedback\">\r\n                            <div *ngIf=\"check.userEmail.errors.required\">Email is required</div>\r\n                            <div id=\"userEmailPatternError\" *ngIf=\"check.userEmail.errors.pattern\">Email must be vaild\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label><i class=\"fa fa-lock \"></i> Password:</label>\r\n                        <input id=\"userPassword\" type=\"password\" name=\"userPassword\" formControlName=\"userPassword\"\r\n                            class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': checkInSubmission && check.userPassword.errors }\" />\r\n                        <div id=\"passwordError\" *ngIf=\"checkInSubmission && check.userPassword.errors\"\r\n                            class=\"invalid-feedback\">\r\n                            <div *ngIf=\"check.userPassword.errors.required\">Password is required</div>\r\n                            <div id=\"userPasswordPatternError\" *ngIf=\"check.userPassword.errors.pattern\">Password min\r\n                                size must be 6 an it contains one Uppercase,one lowercase,one digit one special\r\n                                characters </div>\r\n                            <div *ngIf=\"check.userPassword.errors.maxLength\">Password must be less than 12</div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n\r\n                    <button type=\"submit\" id=\"signUpBut\" class=\"btn btn-outline-success\"\r\n                        [ngClass]=\"{ 'disabled': checkInSubmission && signUpForm.invalid }\"\r\n                        style=\"width: 100%\">SignUp</button>\r\n                    <br>\r\n                </form>\r\n                <a routerLink=\"../Login\" class=\"btn btn-link\" style=\"width: 100%;\">Already have an account? Log in\r\n                    here</a>\r\n                <br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Modules/signup/signup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Modules/signup/signup.component.ts ***!
  \****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/signup.service */ "./src/app/Services/signup.service.ts");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, router, signupService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.signupService = signupService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.checkInSubmission = false;
        this.signUpForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            userEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\\.([a-zA-Z]{2,5})$')]],
            userPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%?&*_]).{6,}$')]]
        });
    };
    Object.defineProperty(SignupComponent.prototype, "check", {
        get: function () { return this.signUpForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSignup = function (user) {
        var _this = this;
        this.checkInSubmission = true;
        if (this.signUpForm.invalid) {
            return;
        }
        ;
        this.signupService.signup(user).subscribe(function (data) {
            if (data == "Registered") {
                _this.correct = true;
                new Promise(function (res) {
                    setTimeout(function () {
                        _this.correct = false;
                        _this.router.navigate(['Login']);
                        res();
                    }, 6000);
                });
            }
            else {
                _this.incorrect = true;
                new Promise(function (res) {
                    setTimeout(function () {
                        _this.incorrect = false;
                        res();
                    }, 6000);
                });
                _this.router.navigate(['Signup']);
            }
        }, function (error) {
            alert("Something went wrong, try again after sometime");
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/Modules/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/Modules/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_Services_signup_service__WEBPACK_IMPORTED_MODULE_4__["SignupService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/Services/get-user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/get-user.service.ts ***!
  \**********************************************/
/*! exports provided: GetUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserService", function() { return GetUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GetUserService = /** @class */ (function () {
    function GetUserService(http) {
        this.http = http;
    }
    GetUserService.prototype.getAllUser = function () {
        return this.http.get("http://localhost:8085/admin/getAllUser");
    };
    GetUserService.prototype.blockUser = function (userEmail) {
        return this.http.get("http://localhost:8085/admin/blockUser/" + userEmail, { responseType: 'text' });
    };
    GetUserService.prototype.unblockUser = function (userEmail) {
        return this.http.get("http://localhost:8085/admin/unblockUser/" + userEmail, { responseType: 'text' });
    };
    GetUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetUserService);
    return GetUserService;
}());



/***/ }),

/***/ "./src/app/Services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (user) {
        this.useUserEmail = user.userEmail;
        return this.http.post("http://localhost:8085/auth/login", user, { responseType: 'text' });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/Services/news-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/news-api.service.ts ***!
  \**********************************************/
/*! exports provided: NewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiService", function() { return NewsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/Services/login.service.ts");




var NewsApiService = /** @class */ (function () {
    function NewsApiService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.api_key = '89830f2b03064fb59a9a5d60eb1e3842';
    }
    NewsApiService.prototype.initSources = function () {
        console.log("in source");
        return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.initArticles = function () {
        console.log("in article");
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.getArticlesByID = function (source) {
        return this.http.get('https://newsapi.org/v2/everything?' +
            'q=' + source +
            '&from=2019-02-13&' +
            'sortBy=popularity&' +
            'apiKey=' + this.api_key);
    };
    NewsApiService.prototype.saveSearch = function (searchResult) {
        console.log("call service");
        searchResult.user.userEmail = this.loginService.useUserEmail;
        console.log(searchResult.user.userEmail);
        return this.http.post("http://localhost:8085/user/searchSave", searchResult, { responseType: 'text' });
    };
    NewsApiService.prototype.getSearch = function (emailId) {
        return this.http.get("http://localhost:8085/user/searchHistory/" + emailId);
    };
    NewsApiService.prototype.deleteSearch = function (searchId) {
        return this.http.get("http://localhost:8085/user/searchDelete/" + searchId, { responseType: 'text' });
    };
    NewsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], NewsApiService);
    return NewsApiService;
}());



/***/ }),

/***/ "./src/app/Services/signup.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/signup.service.ts ***!
  \********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
    }
    SignupService.prototype.signup = function (user) {
        return this.http.post("http://localhost:8085/auth/signup", user, { responseType: 'text' });
    };
    SignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/admin-nav/admin-nav.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin-nav/admin-nav.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW5hdi9hZG1pbi1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-nav/admin-nav.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin-nav/admin-nav.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<nav class=\"navbar navbar-expand-lg bg-dark navbar-dark shadow-sm p-3 mb-5\">\r\n    <h3 class=\"logo\">Cognizant News</h3>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        \r\n      \r\n      </ul>\r\n      <span class=\"navbar-item\">\r\n        <button type=\"submit\" class=\"btn btn-danger navbtn\" (click)=\"logout()\" id=\"Logout\">Logout</button>\r\n      </span>\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/admin-nav/admin-nav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin-nav/admin-nav.component.ts ***!
  \**************************************************/
/*! exports provided: AdminNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavComponent", function() { return AdminNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminNavComponent = /** @class */ (function () {
    function AdminNavComponent() {
    }
    AdminNavComponent.prototype.ngOnInit = function () {
    };
    AdminNavComponent.prototype.logout = function () {
        window.sessionStorage.clear();
        window.sessionStorage.clear();
        window.location.reload();
    };
    AdminNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-nav',
            template: __webpack_require__(/*! ./admin-nav.component.html */ "./src/app/admin-nav/admin-nav.component.html"),
            styles: [__webpack_require__(/*! ./admin-nav.component.css */ "./src/app/admin-nav/admin-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminNavComponent);
    return AdminNavComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Modules_news_api_news_api_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/news-api/news-api.component */ "./src/app/Modules/news-api/news-api.component.ts");
/* harmony import */ var _Modules_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/signup/signup.component */ "./src/app/Modules/signup/signup.component.ts");
/* harmony import */ var _Modules_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/login/login.component */ "./src/app/Modules/login/login.component.ts");
/* harmony import */ var _auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guard.guard */ "./src/app/auth-guard.guard.ts");
/* harmony import */ var _Modules_get_user_get_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/get-user/get-user.component */ "./src/app/Modules/get-user/get-user.component.ts");
/* harmony import */ var _Modules_search_history_search_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/search-history/search-history.component */ "./src/app/Modules/search-history/search-history.component.ts");
/* harmony import */ var _user_nav_user_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-nav/user-nav.component */ "./src/app/user-nav/user-nav.component.ts");










var routes = [
    {
        path: 'Signup',
        component: _Modules_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    },
    {
        path: 'Login',
        component: _Modules_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'GetUser',
        component: _Modules_get_user_get_user_component__WEBPACK_IMPORTED_MODULE_7__["GetUserComponent"],
        canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuardGuard"]]
    },
    {
        path: 'Usernav',
        component: _user_nav_user_nav_component__WEBPACK_IMPORTED_MODULE_9__["UserNavComponent"],
        canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuardGuard"]],
        children: [
            {
                path: 'SearchHistory',
                component: _Modules_search_history_search_history_component__WEBPACK_IMPORTED_MODULE_8__["SearchHistoryComponent"]
            },
            {
                path: 'News',
                component: _Modules_news_api_news_api_component__WEBPACK_IMPORTED_MODULE_3__["NewsApiComponent"],
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'FSD Certificate Practice';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['Login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Modules_news_api_news_api_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/news-api/news-api.component */ "./src/app/Modules/news-api/news-api.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Services_news_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/news-api.service */ "./src/app/Services/news-api.service.ts");
/* harmony import */ var _Modules_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/signup/signup.component */ "./src/app/Modules/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Modules_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modules/login/login.component */ "./src/app/Modules/login/login.component.ts");
/* harmony import */ var _Services_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Services/login.service */ "./src/app/Services/login.service.ts");
/* harmony import */ var _Services_signup_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Services/signup.service */ "./src/app/Services/signup.service.ts");
/* harmony import */ var _user_nav_user_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-nav/user-nav.component */ "./src/app/user-nav/user-nav.component.ts");
/* harmony import */ var _admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-nav/admin-nav.component */ "./src/app/admin-nav/admin-nav.component.ts");
/* harmony import */ var _Modules_get_user_get_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Modules/get-user/get-user.component */ "./src/app/Modules/get-user/get-user.component.ts");
/* harmony import */ var _Services_get_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Services/get-user.service */ "./src/app/Services/get-user.service.ts");
/* harmony import */ var _HttpConfigInterceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./HttpConfigInterceptor */ "./src/app/HttpConfigInterceptor.ts");
/* harmony import */ var _Modules_search_history_search_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Modules/search-history/search-history.component */ "./src/app/Modules/search-history/search-history.component.ts");



















// export function tokenGetter(){
//   return localStorage.getItem('Token')
// }
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Modules_news_api_news_api_component__WEBPACK_IMPORTED_MODULE_5__["NewsApiComponent"],
                _Modules_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _Modules_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _user_nav_user_nav_component__WEBPACK_IMPORTED_MODULE_13__["UserNavComponent"],
                _admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_14__["AdminNavComponent"],
                _Modules_get_user_get_user_component__WEBPACK_IMPORTED_MODULE_15__["GetUserComponent"],
                _Modules_search_history_search_history_component__WEBPACK_IMPORTED_MODULE_18__["SearchHistoryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ],
            providers: [_Services_news_api_service__WEBPACK_IMPORTED_MODULE_7__["NewsApiService"], _Services_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"], _Services_signup_service__WEBPACK_IMPORTED_MODULE_12__["SignupService"], _Services_get_user_service__WEBPACK_IMPORTED_MODULE_16__["GetUserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _HttpConfigInterceptor__WEBPACK_IMPORTED_MODULE_17__["HttpConfigInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth-guard.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(router) {
        this.router = router;
    }
    AuthGuardGuard.prototype.canActivate = function (next, state) {
        var token = window.sessionStorage.getItem('Token');
        if (token != null)
            return true;
        this.router.navigate(['Login']);
        return false;
    };
    AuthGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());



/***/ }),

/***/ "./src/app/user-nav/user-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/user-nav/user-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbmF2L3VzZXItbmF2LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-nav/user-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/user-nav/user-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark shadow-sm p-3 mb-5 bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">Cognizant News</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\"\r\n    aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"News\">News</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"history\" routerLink=\"SearchHistory\">Search History</a>\r\n      </li>\r\n    </ul>\r\n    <span class=\"navbar-text\">\r\n      <button type=\"submit\" class=\"btn btn-danger\" (click)=\"logout()\" id=\"Logout\">Logout</button>\r\n    </span>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/user-nav/user-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-nav/user-nav.component.ts ***!
  \************************************************/
/*! exports provided: UserNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNavComponent", function() { return UserNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserNavComponent = /** @class */ (function () {
    function UserNavComponent(router) {
        this.router = router;
    }
    UserNavComponent.prototype.ngOnInit = function () {
        this.router.navigate(['Usernav/News']);
    };
    UserNavComponent.prototype.logout = function () {
        window.sessionStorage.clear();
        window.sessionStorage.clear();
        window.location.reload();
    };
    UserNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-nav',
            template: __webpack_require__(/*! ./user-nav.component.html */ "./src/app/user-nav/user-nav.component.html"),
            styles: [__webpack_require__(/*! ./user-nav.component.css */ "./src/app/user-nav/user-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserNavComponent);
    return UserNavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\newsUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map