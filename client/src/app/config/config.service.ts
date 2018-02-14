import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

declare var Stimulsoft: any;

@Injectable()
export class ConfigService {
    options: any;
    designer: any;

    constructor(private http: HttpClient) { }

    loadDesigner() {
        console.log('Loading Designer view');
        this.options = new Stimulsoft.Designer.StiDesignerOptions();
        this.options.appearance.fullScreenMode = false;
        var report = new Stimulsoft.Report.StiReport();
        var dataSet = new Stimulsoft.System.Data.DataSet();

        console.log('Create the report designer with specified options');
        this.designer = new Stimulsoft.Designer.StiDesigner(this.options, 'StiDesigner', false);

        console.log('Adding json file as data source');
        dataSet.readJsonFile("reports/Demo.json");
        report.regData("Demo", "Demo", dataSet);

        console.log('Synchronising dictonary');
        report.dictionary.synchronize();        

        console.log('Creating designer');
        this.designer.report = report;

        console.log('Rendering the designer to selected element');
        this.designer.renderHtml('designer');

        console.log('Loading completed successfully!');
    }
}
