import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';
declare var Stimulsoft: any;

@Component({
    selector: 'stimul-designer',
    templateUrl: 'designer.component.html',
    styleUrls: ['designer.component.scss']
})
export class DesignerComponent implements OnInit {
    public title: string = 'Designer';
    private simul: any;
    private dbData: any;

    constructor(private _configService: ConfigService) {
    }

    async ngOnInit() {
        this.simul = await this._configService.loadDesigner();
    }
}