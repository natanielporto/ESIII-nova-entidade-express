"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var Product = /** @class */ (function () {
    function Product(_a) {
        var buyPrice = _a.buyPrice, code = _a.code, description = _a.description, lovers = _a.lovers, sellPrice = _a.sellPrice, tags = _a.tags;
        this.buyPrice = buyPrice;
        this.code = code;
        this.sellPrice = sellPrice;
        this.buyPrice = buyPrice;
        this.tags = tags;
        this.lovers = lovers;
        this.description = description;
        this.id = uuidv4_1.uuid();
    }
    return Product;
}());
exports.default = Product;
