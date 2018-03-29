webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<td-layout>\n    <td-layout-nav>\n    <div td-toolbar-content layout=\"row\" layout-align=\"start center\"  flex>\n      <span hide-gt-xs class=\"tc-grey-100 mat-subhead\">Keith Cross</span>\n      <span hide-xs class=\"tc-cyan-100 mat-subhead\">Keith Cross - Full Stack Developer</span>\n      <span flex ></span>\n    </div>\n    <mat-toolbar class=\"pad-none\">\n      <nav  mat-stretch-tabs mat-tab-nav-bar class=\"pull-bottom-xl pull-top-md text-upper\" flex>\n        <a mat-tab-link href=\"#about\">\n          <span hide-xs>About</span>\n          <span hide-gt-xs><mat-icon>home</mat-icon></span>\n        </a>\n        <a mat-tab-link href=\"#skills\">\n          <span hide-xs>Skills</span>\n          <span hide-gt-xs><mat-icon>create</mat-icon></span>\n        </a>\n        <a mat-tab-link href=\"#projects\">\n          <span hide-xs>Portfolio</span>\n          <span hide-gt-xs><mat-icon>panorama</mat-icon></span>\n        </a>\n        <a mat-tab-link href=\"#contact\">\n          <span hide-xs>Contact</span>\n          <span hide-gt-xs><mat-icon>contacts</mat-icon></span>\n        </a>\n      </nav>\n    </mat-toolbar>\n    <!-- router outlet goes here -->\n    <section class=\"bgc-blue-grey-50\">\n       <a name=\"about\"></a>\n      <div layout-gt-xs=\"row\">\n        <div flex class=\"pad\" tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['pad-xl']\">\n          <div tdMediaToggle=\"gt-sm\" [mediaClasses]=\"['push-lg']\">\n            <h1 class=\"mat-display-1 tc-blue-A400 push-top-xs push-bottom-sm\">Keith Cross</h1>\n            <h2 class=\"mat-headline tc-grey-800 push-top-xs push-bottom-sm\">A Developer for fun and for profit.</h2>\n            <p class=\"mat-subhead tc-grey-600\">I'm a full stack developer for Sunrider International in Torrance, CA.\n              I relish the challenge of building applications from start to finish utilizing modern web frameworks.\n              Let's build something great together!</p>\n          </div>\n          <div class=\"push-bottom-xl\" hide-xs></div>\n        </div>\n        <div flex=\"50\" layout=\"row\">\n          <div class=\"pad\" tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['pad-xl']\">\n            <img height=\"500\" src=\"/assets/batting.jpg\" />\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"bgc-grey-900 tc-white\"  tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['pad-top-md', 'pad-bottom-xl']\">\n      <h2 class=\"mat-display-1 text-upper text-center push-bottom\">Prepared for the Next Challenge</h2>\n      <div layout=\"row\" layout-align-gt-xs=\"center center\">\n          <div class=\"pad\" tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['pad-xl']\">\n            <img src=\"/assets/one_punch.png\" />\n          </div>\n      </div>\n\n    </section>\n    <section class=\"bgc-blue-grey-100\" tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['pad-top-xl', 'pad-bottom-xl']\">\n      <a name=\"skills\"></a>\n      <h2 class=\"mat-display-1 text-upper text-center push-bottom\">Skills</h2>\n      <div  layout-gt-xs=\"row\" layout-align-gt-xs=\"center center\">\n        <div layout-gt-xs=\"row\" flex-gt-xs=\"90\" layout-margin>\n          <div flex-gt-xs=\"25\">\n            <mat-card>\n              <mat-toolbar color=\"accent\" class=\"bgc-blue-A400 push-bottom\">\n                <span class=\"text-upper\">Frontend</span>\n              </mat-toolbar>\n              <mat-card-subtitle>Frameworks & Libraries</mat-card-subtitle>\n              <mat-divider></mat-divider>\n              <mat-list>\n                  <mat-list-item *ngFor=\"let item of front_libs\">\n                      <mat-icon mat-list-icon class=\"fill-grey-700\">grade</mat-icon>\n                      <h4 matLine>{{item}}</h4>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n              </mat-list>\n            </mat-card>\n          </div>\n          <div flex-gt-xs=\"25\">\n            <mat-card>\n              <mat-toolbar color=\"accent\" class=\"bgc-light-blue-A400 push-bottom\">\n                <span class=\"text-upper\">Frontend</span>\n              </mat-toolbar>\n              <mat-card-subtitle>CSS Frameworks & Canvas</mat-card-subtitle>\n              <mat-divider></mat-divider>\n              <mat-list>\n                  <mat-list-item *ngFor=\"let item of css_libs\">\n                      <mat-icon mat-list-icon class=\"fill-grey-700\">check_circle</mat-icon>\n                      <h4 matLine>{{item}}</h4>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n              </mat-list>\n            </mat-card>\n          </div>\n\n          <div flex-gt-xs=\"25\">\n            <mat-card>\n              <mat-toolbar color=\"accent\" class=\"bgc-cyan-A700 push-bottom\">\n                <span class=\"text-upper\">Backend</span>\n              </mat-toolbar>\n              <mat-card-subtitle>Server Side Technologies</mat-card-subtitle>\n              <mat-divider></mat-divider>\n              <mat-list>\n                  <mat-list-item *ngFor=\"let item of back_end\">\n                      <mat-icon mat-list-icon class=\"fill-grey-700\">stars</mat-icon>\n                      <h4 matLine>{{item}}</h4>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n              </mat-list>\n            </mat-card>\n          </div>\n          <div flex-gt-xs=\"25\">\n            <mat-card>\n              <mat-toolbar color=\"accent\" class=\"bgc-teal-A700 push-bottom\">\n                <span class=\"text-upper\">Languages</span>\n              </mat-toolbar>\n              <mat-card-subtitle>Full Stack</mat-card-subtitle>\n              <mat-divider></mat-divider>\n               <mat-list>\n                  <mat-list-item *ngFor=\"let item of languages\">\n                      <mat-icon mat-list-icon class=\"fill-grey-700\">toys</mat-icon>\n                      <h4 matLine>{{item}}</h4>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n              </mat-list>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"bgc-light-blue-500\" tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['pad-top-xl', 'pad-bottom-xl']\">\n      <a name=\"projects\"></a>\n      <h2 class=\"mat-display-1 text-upper tc-blue-grey-100 text-center push-bottom\">Portfolio</h2>\n      <div flex=\"60\" layout-align-gt-xs=\"center center\">\n          <mat-card flex=\"70\">\n           <td-expansion-panel label=\"SR Office\" sublabel=\"An internationalized Angular App\"\n                               [disabled]=\"disabled\">\n            <div class=\"md-padding\">\n              <h3 class=\"mat-subheading-2\">Sunrider Office Taiwan</h3>\n              <p>An eccomerce application built with Angular & Material, internationalized for the Taiwan market.<br/>\n                <a href=\"https://office.sunrider.com\" mat-raised-button color=\"primary\">Visit Site</a>\n              </p>\n              <p><img height=\"600\" src=\"/assets/sr_office.png\" /></p>\n            </div>\n          </td-expansion-panel>\n          <td-expansion-panel label=\"IBO Pages\" sublabel=\"A site replicator built with AngularJS\" [disabled]=\"disabled\">\n            <div class=\"md-padding\">\n              <h3 class=\"mat-subheading-2\">Sunrider IBO Pages</h3>\n              <p> A website replicator built using AngularJS, Bootstrap, and Python.<br/>\n                <a href=\"https://ibo.sunrider.com/site/sunriderusa\" mat-raised-button color=\"primary\">Visit Site</a>\n              </p>\n               <p><img height=\"600\" src=\"/assets/ibopage.png\" /></p>\n            </div>\n          </td-expansion-panel>\n            <td-expansion-panel label=\"SR University\" sublabel=\"A resource library built with AngularJS\" [disabled]=\"disabled\">\n            <div class=\"md-padding\">\n              <h3 class=\"mat-subheading-2\">Sunrider University</h3>\n              <p> A multimedia resource library built for Sunrider with AngularJS, Bootstrap, and Python. </p>\n              <p><img height=\"600\" src=\"/assets/sru.png\" /></p>\n            </div>\n          </td-expansion-panel>\n            <td-expansion-panel label=\"Curtis Center Mapper\" sublabel=\"A mapping tool built with KineticJS\" [disabled]=\"disabled\">\n            <div class=\"md-padding\">\n              <h3 class=\"mat-subheading-2\">Math Common Core State Standards Mapper</h3>\n              <p>A mapping tool for the Curtis Center at UCLA, built with KineticJS, AngularJS, Bootstrap, and Python.<br/>\n                <a href=\"http://curtismapper.pic.ucla.edu/MapApp/app/#/map\" mat-raised-button color=\"primary\">Visit Site</a>\n              </p>\n               <p><img height=\"600\" src=\"/assets/mapper.png\" /></p>\n            </div>\n          </td-expansion-panel>\n          </mat-card>\n      </div>\n    </section>\n    <!-- end content -->\n    <section class=\"bgc-blue-grey-800 tc-blue-grey-100\" tdMediaToggle=\"gt-xs\"\n             [mediaClasses]=\"['pad-top-xl', 'pad-bottom-xl']\">\n      <a name=\"contact\"></a>\n      <h2 class=\"mat-display-1 text-upper tc-blue-grey-100 text-center push-bottom\">Contact Me</h2>\n      <div layout-gt-xs=\"row\" layout-align-gt-xs=\"center center\">\n        <div layout-gt-xs=\"row\" layout-padding>\n          <div flex-gt-xs=\"33\"></div>\n          <div flex-gt-xs>\n              <div class=\"LI-profile-badge\"  data-version=\"v1\" data-size=\"large\" data-locale=\"en_US\"\n                   data-type=\"vertical\" data-theme=\"dark\" data-vanity=\"keith-cross-808aa562\">\n                <a class=\"LI-simple-link\"\n                   href='https://www.linkedin.com/in/keith-cross-808aa562?trk=profile-badge'>Keith Cross\n                </a>\n              </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <td-layout-footer>\n      <div layout=\"row\" layout-align=\"start center\">\n        <span class=\"mat-caption\">Copyright 2017 Keith J Cross.</span>\n      </div>\n    </td-layout-footer>\n  </td-layout-nav>\n\n</td-layout>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.name = 'Keith Cross';
        this.front_libs = ['Angular', 'AngularJS', 'NativeScript', 'Sencha ExtJS4', 'Redux', 'JQuery'];
        this.css_libs = ['Material', 'Bootstrap', 'KineticJS'];
        this.back_end = ['SqlAlchemy', 'Postgresql', 'Redis', 'RabbitMQ', 'NodeJS', 'Rails'];
        this.languages = ['Python', 'Javascript', 'Typescript', 'HTML', 'CSS', 'PHP', 'Ruby', 'Visual Basic'];
        this.routes = [];
        this.usermenu = [];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__covalent_core__ = __webpack_require__("./node_modules/@covalent/core/esm5/covalent-core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                /** Material Modules */
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatAutocompleteModule */],
                /** Covalent Modules */
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["a" /* CovalentCommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["e" /* CovalentLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["g" /* CovalentMediaModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["d" /* CovalentExpansionPanelModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["m" /* CovalentStepsModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["c" /* CovalentDialogsModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["f" /* CovalentLoadingModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["l" /* CovalentSearchModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["k" /* CovalentPagingModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["j" /* CovalentNotificationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["h" /* CovalentMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["b" /* CovalentDataTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__covalent_core__["i" /* CovalentMessageModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map