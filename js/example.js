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
var transport = /** @class */ (function () {
    function transport() {
    }
    return transport;
}());
var truck = /** @class */ (function (_super) {
    __extends(truck, _super);
    function truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    truck.prototype.delivery = function () {
        console.log("we deliver by earth");
    };
    return truck;
}(transport));
var ship = /** @class */ (function (_super) {
    __extends(ship, _super);
    function ship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ship.prototype.delivery = function () {
        console.log("we deliver by sea");
    };
    return ship;
}(transport));
var logistic = /** @class */ (function () {
    function logistic() {
    }
    logistic.prototype.log = function (name) {
        if (name === "truck") {
            return new truck();
        }
        else if (name === "sea") {
            return new ship();
        }
        else {
            console.log("error");
        }
    };
    return logistic;
}());
var a = new logistic();
var road = a.log("truck");
road.delivery();
var sea = a.log("sea");
sea.delivery();
