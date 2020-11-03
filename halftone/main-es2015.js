(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _image_manipulator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-manipulator.service */ "./src/app/image-manipulator.service.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _drop_files_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drop-files.directive */ "./src/app/drop-files.directive.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");















function AppComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.downloadImage("cropped"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DOWNLOAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_59_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.downloadImage("halftone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DOWNLOAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    /**
     * @param imgSrv 画像変換のためのサービス ImageManipulatorService
     * @param elementRef
     * @memberof AppComponent
     */
    constructor(imgSrv, elementRef) {
        this.imgSrv = imgSrv;
        this.elementRef = elementRef;
        this.title = 'halftone';
        this.brightness = 0;
        this.contrast = 0;
        this.sampleSize = 17;
        this.width = 1080;
        this.height = 1080;
        this.files = [];
        this.inputImage = null;
        this.imageChangedEvent = '';
        this.originalCropImage = '';
        this.croppedImage = '';
        this.halftoneImage = '';
        this.croppingPosition = {};
        this.isProcessing = false;
        this.element = this.elementRef.nativeElement;
    }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
        this.originalCropImage = event.base64;
        this.croppingPosition = event.imagePosition;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    formatLabel(value) {
        return value.toString();
    }
    upload(file) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](ob => ob.next(file));
    }
    /**
     * 添付ファイルのためのFile API
     *
     * https://mi12cp.hatenablog.com/entry/2018/08/10/002344
     * @desc メールに添付するためのファイルをFile APIで選択するもの
     * @version 0.0.1
     */
    attacheFiles(event) {
        const files = event; // FileList object
        for (const file of files) {
            if (!file.type.match('image/.*')) {
                continue;
            }
            this.inputImage = files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const sendData = {
                    filename: file.name,
                    type: file.type,
                    size: file.size,
                    path: e.target['result'],
                };
                this.upload(sendData).subscribe(data => {
                    this.files.push(data);
                }, error => {
                    console.log(error);
                });
            };
            reader.readAsDataURL(file);
        }
    }
    removeFile(num) {
        this.files.splice(num, 1);
    }
    /**
     * ハーフトーン処理を実行する。
     */
    sampleSizeUpdated() {
        this.isProcessing = true;
        this.imgSrv.halftone(this.files[0].path, this.croppingPosition, this.width, this.height, this.sampleSize, this.brightness / 100, this.contrast / 100)
            .then((res) => {
            this.halftoneImage = res;
            this.isProcessing = false;
        });
    }
    brightnessUpdated(event) {
        this.imgSrv.cropImageUpdate(this.originalCropImage, this.brightness / 100, this.contrast / 100)
            .then((res) => {
            this.croppedImage = res;
        }).catch(err => {
            console.error(err);
        });
    }
    contrastUpdated(event) {
        this.imgSrv.cropImageUpdate(this.originalCropImage, this.brightness / 100, this.contrast / 100)
            .then((res) => {
            this.croppedImage = res;
        }).catch(err => {
            console.error(err);
        });
    }
    /**
     * 画像のダウンロードを実行する
     * @param image ダウンロードの対象とするBase64データ
     */
    downloadImage(type) {
        let image;
        let outputFileName;
        switch (type) {
            case 'halftone':
                image = this.halftoneImage;
                outputFileName = this.inputImage.name.replace(/\.(jpg|jpeg|png)/i, '.halftone.jpg');
                break;
            case 'cropped':
                image = this.croppedImage;
                outputFileName = this.inputImage.name.replace(/\.(jpg|jpeg|png)/i, '.crop.jpg');
                break;
            default:
                throw new Error('type must be halftone or cropped');
        }
        const url = window.URL.createObjectURL(this.toBlob(image));
        const link = this.element.querySelector('#img-donwload');
        link.href = url;
        link.download = outputFileName;
        link.click();
    }
    /**
     * 初期化
     * @memberof AppComponent
     */
    initialize() {
        this.files = [];
        this.inputImage = null;
        this.imageChangedEvent = '';
        this.originalCropImage = '';
        this.croppedImage = '';
        this.halftoneImage = '';
        this.croppingPosition = {};
        this.isProcessing = false;
    }
    /**
     * base64文字列になっているバイナリデータをBlobバイナリデータに変換する
     *
     * @private
     * @param {string} base64 バイナリデータを base64 エンコードして更に文字列化した文字列
     * @returns {Blob} 引数の文字列をバイナリに戻したバイナリデータ
     * @memberof AppComponent
     * @description
     *  ZIP ファイルへの変換のみ対応している
     * @see
     *  https://developer.mozilla.org/ja/docs/Web/API/WindowBase64/atob
     *  https://developer.mozilla.org/ja/docs/Web/API/Blob
     *  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_objects/Uint8Array
     */
    toBlob(base64) {
        const bin = atob(base64.replace(/^.*,/, ''));
        const buffer = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) {
            buffer[i] = bin.charCodeAt(i);
        }
        return new Blob([buffer.buffer]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_manipulator_service__WEBPACK_IMPORTED_MODULE_2__["ImageManipulatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 61, vars: 18, consts: [[1, "container"], ["cols", "2", "rowHeight", "1:1"], [1, "attache-file-zone", "mat-elevation-z8", 3, "appDropFiles", "selectedFiles"], ["format", "jpg", 3, "imageFile", "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "cropped", 3, "src"], [4, "ngIf"], [1, "example-full-width"], ["matInput", "", "type", "number", "placeholder", "1080", 3, "ngModel", "ngModelChange"], ["thumbLabel", "", "min", "7", "max", "33", "step", "2", "tickInterval", "2", 1, "mat-slider", 3, "displayWith", "ngModel", "ngModelChange", "change"], ["thumbLabel", "", "min", "-100", "max", "100", "step", "5", "tickInterval", "5", 1, "mat-slider", 3, "displayWith", "ngModel", "ngModelChange", "change"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["class", "loading-shade", 4, "ngIf"], ["id", "img-donwload", "herf", "", "download", ""], [1, "loading-shade"], ["color", "accent"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Halftoned Image Processing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "original image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedFiles", function AppComponent_Template_mat_card_content_selectedFiles_10_listener($event) { return ctx.attacheFiles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Drag Image File Here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "image-cropper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function AppComponent_Template_image_cropper_imageCropped_13_listener($event) { return ctx.imageCropped($event); })("imageLoaded", function AppComponent_Template_image_cropper_imageLoaded_13_listener() { return ctx.imageLoaded(); })("cropperReady", function AppComponent_Template_image_cropper_cropperReady_13_listener() { return ctx.cropperReady(); })("loadImageFailed", function AppComponent_Template_image_cropper_loadImageFailed_13_listener() { return ctx.loadImageFailed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "cropped image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_div_21_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Input / Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Target Cropping Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_32_listener($event) { return ctx.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_37_listener($event) { return ctx.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sample size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_slider_ngModelChange_40_listener($event) { return ctx.sampleSize = $event; })("change", function AppComponent_Template_mat_slider_change_40_listener() { return ctx.sampleSizeUpdated(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Brightness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_slider_ngModelChange_43_listener($event) { return ctx.brightness = $event; })("change", function AppComponent_Template_mat_slider_change_43_listener($event) { return ctx.brightnessUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contrast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_slider_ngModelChange_46_listener($event) { return ctx.contrast = $event; })("change", function AppComponent_Template_mat_slider_change_46_listener($event) { return ctx.contrastUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_47_listener() { return ctx.sampleSizeUpdated(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "CREATE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_49_listener() { return ctx.initialize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "RESET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Halftoned Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AppComponent_div_57_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AppComponent_div_59_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "a", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageFile", ctx.inputImage)("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", ctx.width / ctx.height)("resizeToWidth", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.croppedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.croppedImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel)("ngModel", ctx.sampleSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel)("ngModel", ctx.brightness);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel)("ngModel", ctx.contrast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isProcessing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.halftoneImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.halftoneImage);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _drop_files_directive__WEBPACK_IMPORTED_MODULE_5__["DropFilesDirective"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSlider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], styles: [".attache-file-zone[_ngcontent-%COMP%] {\n  width: 95%;\n  vertical-align: middle;\n  text-align: center;\n  border-width: 2px;\n  margin-bottom: 10px;\n  color: #444444;\n  border-color: #ccc;\n  border-radius: 8px;\n  \n  text-align: center;\n  padding: 0 2% 2% 2%;\n}\n\n.attache-file-zone.drop[_ngcontent-%COMP%] {\n  color: #222;\n  border-color: #222;\n  transform: translate3d(0, 0, 0);\n  transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mat-slider[_ngcontent-%COMP%] {\n  width: 500px;\n  padding: 12px;\n}\n\nimage-cropper[_ngcontent-%COMP%] {\n  height: 480px;\n  vertical-align: top;\n}\n\nimg.cropped[_ngcontent-%COMP%] {\n  height: 480px;\n  vertical-align: top;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 500px;\n  text-align: center;\n}\n\n.loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.25);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2hhbGZ0b25lL2hhbGZ0b25lL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNKLDJCQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyR0FBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXR0YWNoZS1maWxlLXpvbmUge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbi8qICAgIGxpbmUtaGVpZ2h0OiAxMDBweDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAyJSAyJSAyJTtcbn1cblxuLmF0dGFjaGUtZmlsZS16b25lLmRyb3Age1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIGJvcmRlci1jb2xvcjogIzIyMjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLCBcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xufVxuXG4ubWF0LXNsaWRlciB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG59XG5cbmltYWdlLWNyb3BwZXIge1xuICAgIGhlaWdodDogNDgwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaW1nLmNyb3BwZWQge1xuICAgIGhlaWdodDogNDgwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxubWF0LWNhcmQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLXNoYWRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0gICIsIi5hdHRhY2hlLWZpbGUtem9uZSB7XG4gIHdpZHRoOiA5NSU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogICAgbGluZS1oZWlnaHQ6IDEwMHB4OyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMiUgMiUgMiU7XG59XG5cbi5hdHRhY2hlLWZpbGUtem9uZS5kcm9wIHtcbiAgY29sb3I6ICMyMjI7XG4gIGJvcmRlci1jb2xvcjogIzIyMjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5cbi5tYXQtc2xpZGVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG5pbWFnZS1jcm9wcGVyIHtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaW1nLmNyb3BwZWQge1xuICBoZWlnaHQ6IDQ4MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9hZGluZy1zaGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _image_manipulator_service__WEBPACK_IMPORTED_MODULE_2__["ImageManipulatorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _drop_files_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drop-files.directive */ "./src/app/drop-files.directive.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

















/*
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import { MatDialogModule } from '@angular/material/dialog';
*/
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__["ImageCropperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _drop_files_directive__WEBPACK_IMPORTED_MODULE_13__["DropFilesDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__["ImageCropperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _drop_files_directive__WEBPACK_IMPORTED_MODULE_13__["DropFilesDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__["ImageCropperModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/drop-files.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/drop-files.directive.ts ***!
  \*****************************************/
/*! exports provided: DropFilesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropFilesDirective", function() { return DropFilesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DropFilesDirective {
    constructor(element) {
        this.element = element;
        this.attachments = [];
        this.selectedFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elem = this.element.nativeElement;
    }
    set fileUploadQueue(value) {
        if (value) {
            this.attachments = value;
        }
    }
    onChange() {
        const files = this.element.nativeElement.files;
        this.selectedFiles.emit(files);
        // for (const file of files) {
        //   this.attachments.push(file);
        // }
        this.element.nativeElement.value = '';
    }
    onDrop(event) {
        const files = event.dataTransfer.files;
        this.selectedFiles.emit(files);
        // for (const file of files) {
        //   this.attachments.push(file);
        // }
        event.preventDefault();
        event.stopPropagation();
        this.element.nativeElement.value = '';
    }
    onDropOver(event) {
        event.preventDefault();
    }
}
DropFilesDirective.ɵfac = function DropFilesDirective_Factory(t) { return new (t || DropFilesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DropFilesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropFilesDirective, selectors: [["", "appDropFiles", ""]], hostBindings: function DropFilesDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DropFilesDirective_change_HostBindingHandler() { return ctx.onChange(); })("drop", function DropFilesDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function DropFilesDirective_dragover_HostBindingHandler($event) { return ctx.onDropOver($event); });
    } }, inputs: { fileUploadQueue: ["appDropFiles", "fileUploadQueue"] }, outputs: { selectedFiles: "selectedFiles" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropFilesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDropFiles]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { selectedFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], fileUploadQueue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appDropFiles']
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change']
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }], onDropOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/image-manipulator.service.ts":
/*!**********************************************!*\
  !*** ./src/app/image-manipulator.service.ts ***!
  \**********************************************/
/*! exports provided: ImageManipulatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManipulatorService", function() { return ImageManipulatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jimp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimp */ "./node_modules/jimp/browser/lib/jimp.js");
/* harmony import */ var jimp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jimp__WEBPACK_IMPORTED_MODULE_2__);




class ImageManipulatorService {
    constructor() { }
    halftone(filepath, position, width, height, sample, brightness, contrast) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Object(jimp__WEBPACK_IMPORTED_MODULE_2__["read"])(filepath);
            image
                .crop(position.x1, position.y1, position.x2 - position.x1, position.y2 - position.y1)
                .brightness(brightness)
                .contrast(contrast)
                .scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
                // sampleサイズ毎に濃淡を計算し、円のサイズを決める。
                if (y % sample === 0 && x % sample === 0) {
                    let level = 0;
                    let x1;
                    let y1;
                    let radius;
                    for (let iy = 0; iy < sample; iy++) {
                        for (let ix = 0; ix < sample; ix++) {
                            const idxi = image.getPixelIndex(x + ix, y + iy);
                            // grey scale値を計算
                            level += Math.round(0.2126 * image.bitmap.data[idxi + 0] +
                                0.7152 * image.bitmap.data[idxi + 1] +
                                0.0722 * image.bitmap.data[idxi + 2]);
                        }
                    }
                    radius = sample * (1 - level / (sample * sample * 0xFF));
                    x1 = x + (sample - 1) / 2,
                        y1 = y + (sample - 1) / 2;
                    for (let iy = 0; iy < sample; iy++) {
                        for (let ix = 0; ix < sample; ix++) {
                            const idxi = image.getPixelIndex(x + ix, y + iy);
                            // 半径を計算する。
                            const curR = Math.sqrt(Math.pow(x + ix - x1, 2) + Math.pow(y + iy - y1, 2));
                            // grey scale値を計算
                            if (curR < radius) {
                                image.bitmap.data[idxi + 0] = 0x00;
                                image.bitmap.data[idxi + 1] = 0x00;
                                image.bitmap.data[idxi + 2] = 0x00;
                            }
                            else {
                                image.bitmap.data[idxi + 0] = 0xff;
                                image.bitmap.data[idxi + 1] = 0xff;
                                image.bitmap.data[idxi + 2] = 0xff;
                            }
                        }
                    }
                }
            });
            // ファイルを保存する
            return image
                .resize(width, height)
                .quality(100)
                .getBase64Async(jimp__WEBPACK_IMPORTED_MODULE_2__["MIME_JPEG"]);
        });
    }
    cropImageUpdate(filepath, brightness, contrast) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Object(jimp__WEBPACK_IMPORTED_MODULE_2__["read"])(filepath);
            return image
                .brightness(brightness)
                .contrast(contrast)
                .getBase64Async(jimp__WEBPACK_IMPORTED_MODULE_2__["MIME_JPEG"]);
        });
    }
}
ImageManipulatorService.ɵfac = function ImageManipulatorService_Factory(t) { return new (t || ImageManipulatorService)(); };
ImageManipulatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImageManipulatorService, factory: ImageManipulatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageManipulatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/halftone/halftone/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map