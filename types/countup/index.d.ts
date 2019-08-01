declare function CountUp(target: string, startVal: number, endVal: number, decimals: number, duration: number, options: any): void;

declare module CountUp {
    var options: CountUpOptions;
    function version(): string;
    function printValue(value: any): void;
    function count(timestamp: any): void;
    function start(callback: Function): boolean;
    function pauseResume(): void;
    function reset(): void;
    function update(newEndVal: number): void;
}

interface CountUp {
    new(target: string, startVal: number, endVal: number, decimals: number, duration: number, options: any): CountUp;
    options: CountUpOptions;
    version(): string;
    printValue(value: any): void;
    count(timestamp: any): void;
    start(callback?: Function): boolean;
    pauseResume(): void;
    reset(): void;
    update(newEndVal: number): void;
}

interface CountUpOptions {
	useEasing: boolean; // toggle easing
	useGrouping: boolean; // 1,000,000 vs 1000000
	separator: string; // character to use as a separator
	decimal: string; // character to use as a decimal
	easingFn: Function; // optional custom easing closure function, default is Robert Penner's easeOutExpo
	formattingFn: Function; // optional custom formatting function, default is self.formatNumber below
}

export = CountUp;
