import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Settings } from '../../../services/settings/settings';

@Component({
    selector: 'n52-color-selector',
    templateUrl: './color-selector.component.html',
    styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent {

    @Input()
    public color: string;

    @Input()
    public colorList: string[];

    @Output()
    public onColorChange: EventEmitter<string> = new EventEmitter<string>();

}