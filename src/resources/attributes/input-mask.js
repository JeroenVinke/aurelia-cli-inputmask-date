import {
    customAttribute,
    inject,
    observable
} from "aurelia-framework";


import 'inputmask';
import 'inputmask/inputmask.extensions';
import 'inputmask/inputmask.phone.extensions';
import 'inputmask/phone-codes/phone';
import 'inputmask/phone-codes/phone-be';
import 'inputmask/phone-codes/phone-ru';

@customAttribute("inputmask")
@inject(Element)
export class InputmaskCustomAttribute {

    @observable isValid = false;

    constructor(element) {
        this.element = element;

        this.options = {
            'onincomplete': () => {
                this.isValid = false;
            },
            'oncomplete': () => {
                this.isValid = true;
            }
        };
    }

    isValidChanged(newValue, oldValue) {
        if (newValue !== oldValue)
            this.element.dispatchEvent(new Event("blur"));
    }

    attached() {
        const options = $.extend(true, this.value, this.options);
        $(this.element).inputmask(options)
            .on("change",
            (e) => {
                if (e.originalEvent) {
                    return;
                }
                this.element.dispatchEvent(new Event("change"));
            });
    }

    reload() {
        this.detached();
        this.attached();
    }

    detached() {
        $(this.element).inputmask("remove");
    }
}