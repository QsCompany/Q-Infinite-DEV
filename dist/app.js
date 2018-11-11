var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../lib/sys/UI", "template|../src/app.html", "../lib/sys/corelib", "context"], function (require, exports, UI_1, app_html_1, corelib_1, context_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import * as css from 'style|../assets/app.css';
    //ValidateImport(css);
    var DayOfWeek;
    (function (DayOfWeek) {
        DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
        DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
        DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
        DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
        DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
        DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
        DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
    })(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
    var example = /** @class */ (function (_super) {
        __extends(example, _super);
        function example() {
            var _this = _super.call(this, app_html_1.template.get('app'), UI_1.UI.TControl.Me) || this;
            _this.Interpolation = {
                Value: "Achour",
                Number: 10,
                swapNumber: function (d) {
                    d = d < 0 ? 0 : d;
                    d = d > 100 ? 100 : d;
                    return d;
                }
            };
            return _this;
        }
        example.prototype.trim = function (_e, _ed, s) {
            s.Value = (s.Value || "").trim();
        };
        example.prototype.clear = function (_e, _ed, s) {
            s.Value = "";
        };
        example.prototype.upper = function (_e, _ed, s) {
            s.Value = (s.Value || "").toUpperCase();
        };
        example.prototype.incr = function () { this.Interpolation.Number++; };
        example.prototype.decr = function () { this.Interpolation.Number--; };
        example.prototype.add = function (v) { this.Interpolation.Number += v; };
        return example;
    }(UI_1.UI.TControl));
    exports.example = example;
    //this is not important
    var app = /** @class */ (function (_super) {
        __extends(app, _super);
        function app() {
            var _this = _super.call(this, document.createElement('app')) || this;
            _this._example = new example();
            return _this;
        }
        app.prototype.showPage = function (page) { };
        app.prototype.Check = function (child) { return true; };
        app.prototype.initialize = function () { _super.prototype.initialize.call(this); this.Add(this._example); };
        app.initialize = function () {
            var desktop = UI_1.UI.Desktop.Current;
            var _app = new app();
            desktop.Add(_app);
            desktop.Show(_app);
            function loadCss(callback, onerror) {
                var csses = ["../lib/assets/style/bundle.css"];
                UI_1.UI.Spinner.Default.Pause();
                for (var _i = 0, csses_1 = csses; _i < csses_1.length; _i++) {
                    var i = csses_1[_i];
                    require('style|' + i, callback, onerror, context_1.context);
                }
            }
            loadCss();
        };
        return app;
    }(UI_1.UI.Layout));
    app.initialize();
    corelib_1.bind.NamedScop.Create('global', window);
});
//# sourceMappingURL=../src/dist/app.js.map