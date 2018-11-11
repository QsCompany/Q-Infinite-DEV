import { UI } from "../lib/sys/UI";
import { template } from "template|../src/app.html"
import { bind, attributes } from "../lib/sys/corelib";
import { context } from "context";
//import * as css from 'style|../assets/app.css';
//ValidateImport(css);
export enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

export class example extends UI.TControl<any>{
    constructor() {
        super(template.get('app'), UI.TControl.Me);
    }
    trim(_e, _ed, s) {
        s.Value = (s.Value || "").trim();
    }
    clear(_e, _ed, s) {
        s.Value = "";
    }
    upper(_e, _ed, s) {
        s.Value = (s.Value as string || "").toUpperCase();
    }
    Interpolation = {
        Value: "Achour",
        Number: 10,
        swapNumber(d) {
            d = d < 0 ? 0 : d;
            d = d > 100 ? 100 : d;
            return d;
        }
    };
    incr() { this.Interpolation.Number++; }
    decr() { this.Interpolation.Number--; }
    add(v) { this.Interpolation.Number += v; }
}



//this is not important
class app extends UI.Layout<any>{
    Foot: UI.ServiceNavBar<UI.IItem>; SearchBox: UI.ActionText;
    _example = new example();
    protected showPage(page: any) { }
    protected Check(child: any) { return true; }
    initialize() { super.initialize(); this.Add(this._example) }
    constructor() { super(document.createElement('app')); }
    static initialize() {
        var desktop = UI.Desktop.Current;
        var _app = new app();
        desktop.Add(_app);
        desktop.Show(_app);

        function loadCss(callback?, onerror?) {
            var csses = ["../lib/assets/style/bundle.css"];
            UI.Spinner.Default.Pause();
            for (var i of csses)
                require('style|' + i, callback, onerror, context);

        }
        loadCss();
    }
}
app.initialize();
bind.NamedScop.Create('global', window);

