"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductRepository_1 = __importDefault(require("../repositories/ProductRepository"));
var CreateProductService_1 = __importDefault(require("../services/CreateProductService"));
var productRouter = express_1.Router();
var productRepository = new ProductRepository_1.default();
productRouter.get('/', function (request, response) {
    response.json(productRepository.findAll());
});
productRouter.post('/', function (request, response) {
    try {
        var service = new CreateProductService_1.default(productRepository);
        var _a = request.body, buyPrice = _a.buyPrice, code = _a.code, description = _a.description, lovers = _a.lovers, sellPrice = _a.sellPrice, tags = _a.tags, id = _a.id;
        var produto = service.execute({
            buyPrice: buyPrice,
            code: code,
            description: description,
            lovers: lovers,
            sellPrice: sellPrice,
            tags: tags,
            id: id,
        });
        response.status(201).json(produto);
    }
    catch (err) {
        return response.status(400).json({ Erro: err.message });
    }
});
exports.default = productRouter;
