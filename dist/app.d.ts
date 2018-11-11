import { UI } from "../lib/sys/UI";
export declare enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}
export declare class example extends UI.TControl<any> {
    constructor();
    trim(_e: any, _ed: any, s: any): void;
    clear(_e: any, _ed: any, s: any): void;
    upper(_e: any, _ed: any, s: any): void;
    Interpolation: {
        Value: string;
        Number: number;
        swapNumber(d: any): any;
    };
    incr(): void;
    decr(): void;
    add(v: any): void;
}
//# sourceMappingURL=../src/dist/app.d.ts.map