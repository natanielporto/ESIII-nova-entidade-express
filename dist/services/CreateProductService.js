"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = __importDefault(require("../models/Product"));
var CreateProductService = /** @class */ (function () {
    function CreateProductService(repository) {
        this.repository = repository;
    }
    CreateProductService.prototype.execute = function (_a) {
        var buyPrice = _a.buyPrice, code = _a.code, description = _a.description, lovers = _a.lovers, sellPrice = _a.sellPrice, tags = _a.tags;
        var product = this.repository.findByCode(code);
        if (product) {
            throw Error('Produto já cadastrado');
        }
        else {
            var p = new Product_1.default({
                buyPrice: buyPrice,
                code: code,
                description: description,
                lovers: lovers,
                sellPrice: sellPrice,
                tags: tags,
            });
            this.repository.save(p);
            return p;
        }
    };
    return CreateProductService;
}());
exports.default = CreateProductService;
