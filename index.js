var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
var firstname = 'danny';
var hasDog = true;
var unit; // Declare variable without assigning a value
unit = 5;
hasDog = 'false';
var yaytuple = ['1', true, 3];
var yay = {
    tuple: yaytuple,
    age: 17,
    list: ['sd', 'df']
};
console.log(yay.tuple);
var perimeter = function (sideLen, c) {
    console.log(c);
    console.log(4 * sideLen);
};
var yayPerson = /** @class */ (function () {
    function yayPerson(n, c, p) {
        this.name = n;
        this.isYay = c;
        this.yays = p;
    }
    yayPerson.prototype.sayHello = function () {
        return "Hi, my name is ".concat(this.name, " and I have ").concat(this.yays, " yays");
    };
    return yayPerson;
}());
var yay1 = new yayPerson("Luke", true, 7);
console.log(yay1.sayHello());
var yayerPerson = /** @class */ (function (_super) {
    __extends(yayerPerson, _super);
    function yayerPerson(n, c, p) {
        return _super.call(this, n, c, p * 3) || this;
    }
    return yayerPerson;
}(yayPerson));
var yayList;
yayList = 'yaaay';
var YayColors;
(function (YayColors) {
    YayColors[YayColors["RED"] = 1] = "RED";
    YayColors[YayColors["ORANGE"] = 2] = "ORANGE";
    YayColors[YayColors["YELLOW"] = 3] = "YELLOW";
    YayColors[YayColors["GREEN"] = 4] = "GREEN";
    YayColors[YayColors["BLUE"] = 5] = "BLUE";
    YayColors[YayColors["INDIGO"] = 6] = "INDIGO";
    YayColors[YayColors["VIOLET"] = 7] = "VIOLET";
})(YayColors || (YayColors = {}));
console.log(YayColors.ORANGE);
