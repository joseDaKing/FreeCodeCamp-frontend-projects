export 
class CssClasses {
    constructor(...cssClass) {
        this.cssClasses = cssClass;
        
        if (!this.cssClasses) {
            this.cssClasses = [];
        }
    }
    
    addClass(cssClass) {
        this.cssClasses.push(cssClass);
    }

    removeClass(cssClass) {
        const index = this.cssClasses.indexOf(cssClass);
        this.cssClasses.splice(index, 1);
    }

    concatStringToClass(cssClass, concatString) {
        const index = this.cssClasses.indexOf(cssClass);
        this.cssClasses[index] += `-${concatString}`;
    }

    toString() {
        return this.cssClasses.join(" ");
    }
}
