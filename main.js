"use strict";
(self["webpackChunkmy_ng_app"] = self["webpackChunkmy_ng_app"] || []).push([["main"],{

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 21);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map.component */ 6186);



class AppComponent {
    constructor() {
        this.title = 'my-ng-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "App"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _map_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent], styles: [".App[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFwcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map.component */ 6186);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ 21);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _map_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule] }); })();


/***/ }),

/***/ 6186:
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 8260);
/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! maplibre-gl */ 9150);
/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(maplibre_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);



const _c0 = ["map"];
class MapComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };
        this.map = new maplibre_gl__WEBPACK_IMPORTED_MODULE_1__.Map({
            container: this.mapContainer.nativeElement,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiKey}`,
            center: [initialState.lng, initialState.lat],
            zoom: initialState.zoom
        });
        this.map.addControl(new maplibre_gl__WEBPACK_IMPORTED_MODULE_1__.NavigationControl());
        new maplibre_gl__WEBPACK_IMPORTED_MODULE_1__.Marker({ color: "#FF0000" })
            .setLngLat([139.7525, 35.6846])
            .addTo(this.map);
    }
    ngOnDestroy() {
        var _a;
        (_a = this.map) === null || _a === void 0 ? void 0 : _a.remove();
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mapContainer = _t.first);
    } }, decls: 5, vars: 0, consts: [[1, "map-wrap"], ["href", "https://www.maptiler.com", 1, "watermark"], ["src", "https://api.maptiler.com/resources/logo.svg", "alt", "MapTiler logo"], [1, "map"], ["map", ""]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [".map-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 77px); \n}\n\n.map[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  bottom: 10px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwwQkFBMEIsRUFBRSxxREFBcUQ7QUFDbkY7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDc3cHgpOyAvKiBjYWxjdWxhdGUgaGVpZ2h0IG9mIHRoZSBzY3JlZW4gbWludXMgdGhlIGhlYWRpbmcgKi9cbn1cblxuLm1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndhdGVybWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 21:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 0, consts: [[1, "heading"], ["href", "https://documentation.maptiler.com/hc/en-us/articles/4411342514193-how-to-display-a-map-in-angular-using-maplibre-gl-js?utm_medium=referral&utm_source=github&utm_campaign=2022-05%20%7C%20js%20frameworks%20%7C%20angular", 1, "btn", "btn-primary", "tutorial-button"], ["width", "25", "height", "25", "viewBox", "0 0 111 111", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.1618 75.4536C2.1417 64.4335 2.14171 46.5664 13.1618 35.5463L35.9431 12.7651C46.9632 1.74497 64.8303 1.74498 75.8504 12.7651L98.6317 35.5464C109.652 46.5665 109.652 64.4335 98.6316 75.4536L75.8503 98.2349C64.8303 109.255 46.9632 109.255 35.9431 98.2349L13.1618 75.4536Z", "fill", "#3174ff", "stroke", "#fff", "stroke-width", "8"], ["d", "M59.3986 52.5H29.3987V58.4999H59.3986V52.5ZM65.3986 40.5H29.3987V46.5H65.3986V40.5ZM29.3987 70.4999H53.3986V64.4999H29.3987V70.4999Z", "fill", "#fff"], ["d", "M59.3911 64.875V70.5H65.0161L81.606 53.9101L75.9811 48.2851L59.3911 64.875ZM85.956 49.5601C86.541 48.9751 86.541 48.0301 85.956 47.4451L82.446 43.9351C81.861 43.3501 80.916 43.3501 80.3311 43.9351L77.5861 46.6801L83.211 52.3051L85.956 49.5601Z", "fill", "#fff"], ["href", "https://github.com/maptiler/angular-template-maplibre-gl-js", "aria-label", "View source on GitHub", 1, "github-corner"], ["width", "80", "height", "80", "viewBox", "0 0 250 250", "aria-hidden", "true", 2, "fill", "#F02C6B", "color", "#fff", "position", "absolute", "top", "0", "border", "0", "right", "0"], ["d", "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"], ["d", "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2", "fill", "currentColor", 1, "octo-arm", 2, "transform-origin", "130px 106px"], ["d", "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z", "fill", "currentColor", 1, "octo-body"], ["width", "50", "height", "50", "viewBox", "0 0 50 50", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 2, "position", "absolute", "top", "14px", "border", "0", "right", "17px"], ["d", "M25 0C11.1937 0 0 11.1938 0 25C0 36.7146 8.06667 46.5167 18.9417 49.2292C18.825 48.8917 18.75 48.5 18.75 48.0146V43.7417C17.7354 43.7417 16.0354 43.7417 15.6083 43.7417C13.8979 43.7417 12.3771 43.0063 11.6396 41.6396C10.8208 40.1208 10.6792 37.7979 8.65 36.3771C8.04792 35.9042 8.50625 35.3646 9.2 35.4375C10.4812 35.8 11.5437 36.6792 12.5437 37.9833C13.5396 39.2896 14.0083 39.5854 15.8687 39.5854C16.7708 39.5854 18.1208 39.5333 19.3917 39.3333C20.075 37.5979 21.2562 36 22.7 35.2458C14.375 34.3896 10.4021 30.2479 10.4021 24.625C10.4021 22.2042 11.4333 19.8625 13.1854 17.8896C12.6104 15.9313 11.8875 11.9375 13.4062 10.4167C17.1521 10.4167 19.4167 12.8458 19.9604 13.5021C21.8271 12.8625 23.8771 12.5 26.0312 12.5C28.1896 12.5 30.2479 12.8625 32.1187 13.5063C32.6562 12.8542 34.9229 10.4167 38.6771 10.4167C40.2021 11.9396 39.4708 15.95 38.8896 17.9042C40.6312 19.8729 41.6562 22.2083 41.6562 24.625C41.6562 30.2438 37.6896 34.3833 29.3771 35.2438C31.6646 36.4375 33.3333 39.7917 33.3333 42.3188V48.0146C33.3333 48.2313 33.2854 48.3875 33.2604 48.5729C43.0021 45.1583 50 35.9083 50 25C50 11.1938 38.8062 0 25 0Z", "fill", "white"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Step-by-step tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This is my map App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".heading[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px;\n  background-color: black;\n  color: white;\n}\n\n.heading[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: ubuntu,open sans,sans-serif;\n  font-weight: 500;\n  line-height: 15px;\n  color: #6b7c92;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  border: 0 solid transparent;\n  padding: 10px 17px;\n  font-size: .8125rem;\n  border-radius: 4px;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  text-transform: uppercase;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #3174ff;\n  border-color: #3174ff;\n}\n\n.tutorial-button[_ngcontent-%COMP%] {\n  left: 20px;\n  position: absolute;\n  top: 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  vertical-align: middle;\n}\n\n.tutorial-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4SEFBOEg7RUFDOUgseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGluZyA+IGgxIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogdWJ1bnR1LG9wZW4gc2FucyxzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICM2YjdjOTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweCAxN3B4O1xuICBmb250LXNpemU6IC44MTI1cmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTc0ZmY7XG4gIGJvcmRlci1jb2xvcjogIzMxNzRmZjtcbn1cblxuLnR1dG9yaWFsLWJ1dHRvbiB7XG4gIGxlZnQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnR1dG9yaWFsLWJ1dHRvbiBzdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiKey: '0FwjVpfoctS74Le98wMD'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map