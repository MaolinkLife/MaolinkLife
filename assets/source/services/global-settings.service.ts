import { Injectable } from '@angular/core';

interface MaskBackgroundInterface {
    url: string;
    position: string | number;
    size: string;
    color: string;
}

@Injectable({
    providedIn: 'root'
})
export class GlobalSettingsService {

    constructor() { }

    /* создает маску для заднего фона в виде картинки с установленным цветом */
    setMaskBackgroundWithColor({ url, position, size, color }: MaskBackgroundInterface) {
        const customStyle = {
            '-webkit-mask-image': `url('${url}')`,
            '-webkit-mask-position': position,
            '-webkit-mask-size': size,
            'background-color': color
        };

        return customStyle;
    }

    /* заменяет задний фон элемента на картинку */
    setBackgroundImage(url: string, position: any, size: any) {
        const customStyle = {
            'background-image': `url('${url}')`,
            'background-position': position,
            'background-size': size,
            'background-repeat': 'no-repeat'
        };

        return customStyle;
    }
}
