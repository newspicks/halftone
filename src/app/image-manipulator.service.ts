import { Injectable } from '@angular/core';
import { CropperPosition } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { read, MIME_JPEG } from 'jimp';

@Injectable({
  providedIn: 'root'
})
export class ImageManipulatorService {

  constructor() { }

  async halftone(
    filepath: any,
    position: CropperPosition,
    width: number, height: number, sample: number, brightness: number, contrast: number): Promise<string> {
    const image = await read(filepath);

    image
      .crop(position.x1, position.y1, position.x2 - position.x1, position.y2 - position.y1)
      .brightness(brightness)
      .contrast(contrast)
      .scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
      // sampleサイズ毎に濃淡を計算し、円のサイズを決める。
      if (y % sample === 0 && x % sample === 0) {
        let level = 0;
        let x1: number;
        let y1: number;
        let radius: number;

        for (let iy = 0; iy < sample; iy++) {
          for (let ix = 0; ix < sample; ix++) {
            const idxi: number = image.getPixelIndex(x + ix, y + iy);
            // grey scale値を計算
            level += Math.round(
                0.2126 * image.bitmap.data[idxi + 0] +
                0.7152 * image.bitmap.data[idxi + 1] +
                0.0722 * image.bitmap.data[idxi + 2]
            );
          }
        }
        radius =　sample * (1 - level / (sample * sample * 0xFF));
        x1 = x + (sample - 1) / 2,
        y1 = y + (sample - 1) / 2;

        for (let iy = 0; iy < sample; iy++) {
          for (let ix = 0; ix < sample; ix++) {
            const idxi = image.getPixelIndex(x + ix, y + iy,);
            // 半径を計算する。
            const curR = Math.sqrt(Math.pow(x + ix - x1, 2) + Math.pow(y + iy - y1, 2));
            // grey scale値を計算
            if (curR < radius) {
              image.bitmap.data[idxi + 0] = 0x00;
              image.bitmap.data[idxi + 1] = 0x00;
              image.bitmap.data[idxi + 2] = 0x00;
            } else {
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
      .getBase64Async(MIME_JPEG);
  }

  async cropImageUpdate(filepath: any, brightness: number, contrast: number): Promise<string> {
    const image = await read(filepath);
    return image
            .brightness(brightness)
            .contrast(contrast)
            .getBase64Async(MIME_JPEG);
  }

}
