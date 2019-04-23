export default class {
    constructor() {
        this.onStartFn = 
        this.onEndFn = 
        this.onIntervalFn = () => {};        
        this.isStarted = false;
    }

    setTime(time) {
        this.time = time;
        this.remainingTime = time;
        return this;
    }

    onStart(fn) {
        this.onStartFn = fn;
        return this;
    }

    onInterval(fn) {
        this.onIntervalFn = fn;
        return this;
    }

    onEnd(fn) {
        this.onEndFn = fn;
        return this;
    }

    start() {
        if (!this.isStarted) {
            this.isStarted = true;
            this.onStartFn();

            if (this.remainingTime === 0) {
                this.reset();
            }

            this.interval = setInterval(() => {        
                this.onIntervalFn(this.remainingTime);
                console.log(this.remainingTime)
                this.remainingTime--;
            }, 1000)

            this.timeout = setTimeout(() => {
                this.isStarted = false; 
                this.onEndFn();
                this.stop();
            }, this.remainingTime * 1000);
        }

        return this;
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }

        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        
        return this;
    }

    continue() {
        this.isStarted = false;
        this.start();
    }

    reset() {
        this.remainingTime = this.time;
        
        this.isStarted = false;

        this.stop();

        return this;
    }
}