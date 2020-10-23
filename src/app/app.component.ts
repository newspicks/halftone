import { Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageManipulatorService } from './image-manipulator.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'halftone';

  brightness = 0;
  contrast = 0;
  sampleSize = 17;
  width = 1080;
  height = 1080;
  files: any = [];

  inputImage: File = null;
  imageChangedEvent: any = '';
  originalCropImage: any = '';
  croppedImage: any = '';
  halftoneImage: any = '';
  croppingPosition: any = {};

  isProcessing = false;
  private element: HTMLElement;

  /**
   * @param imgSrv 画像変換のためのサービス ImageManipulatorService
   * @param elementRef
   * @memberof AppComponent
   */
  constructor(
    private imgSrv: ImageManipulatorService,
    private elementRef: ElementRef
  ) {
    this.element = this.elementRef.nativeElement;
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
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

  formatLabel(value: number): string {
    return value.toString();
  }

  upload(file: any): Observable<any> {
    return new Observable( ob => ob.next(file) );
  }

  /**
   * 添付ファイルのためのFile API
   *
   * https://mi12cp.hatenablog.com/entry/2018/08/10/002344
   * @desc メールに添付するためのファイルをFile APIで選択するもの
   * @version 0.0.1
   */
  attacheFiles(event: File[]): void {
    const files = event;  // FileList object

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

        this.upload(sendData).subscribe(
          data => {
            this.files.push(data);
          },
          error => {
            console.log(error);
          }
        );
      };

      reader.readAsDataURL(file);
    }
  }

  removeFile(num: number): void {
    this.files.splice(num, 1);
  }

  /**
   * ハーフトーン処理を実行する。
   */
  sampleSizeUpdated(): void {
    this.isProcessing = true;
    this.imgSrv.halftone(
      this.files[0].path,
      this.croppingPosition,
      this.width,
      this.height,
      this.sampleSize, this.brightness / 100, this.contrast / 100)
      .then((res) => {
        this.halftoneImage = res;
        this.isProcessing = false;
      });
  }

  brightnessUpdated(event: any): void {
    this.imgSrv.cropImageUpdate(this.originalCropImage, this.brightness / 100, this.contrast / 100)
      .then((res) => {
        this.croppedImage = res;
      }).catch( err => {
        console.error(err);
      });
  }

  contrastUpdated(event: any): void {
    this.imgSrv.cropImageUpdate(this.originalCropImage, this.brightness / 100, this.contrast / 100)
      .then((res) => {
        this.croppedImage = res;
      }).catch( err => {
        console.error(err);
      });
  }

  /**
   * 画像のダウンロードを実行する
   * @param image ダウンロードの対象とするBase64データ
   */
  downloadImage(type: string): void {
    let image: string;
    let outputFileName: string;

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
    const link: HTMLAnchorElement = this.element.querySelector('#img-donwload') as HTMLAnchorElement;
    link.href = url;
    link.download = outputFileName;
    link.click();
  }

  /**
   * 初期化
   * @memberof AppComponent
   */
  initialize(): void {
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
  private toBlob(base64: string): Blob {
    const bin = atob(base64.replace(/^.*,/, ''));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }
    return new Blob([buffer.buffer]);
  }
}
