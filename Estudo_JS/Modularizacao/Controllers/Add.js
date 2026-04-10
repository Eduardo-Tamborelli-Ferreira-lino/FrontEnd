import { stock } from "../Stock.js";

export function Add(product, id) {

    if (!product.name) {
        throw new Error("Erro. Name can't be null");
    }
    if (!product.category) {
        throw new Error("Erro. Category can't be null");
    }
    if (!product.branch) {
        throw new Error("Erro. Branch can't be null");
    }
    if (product.price < 0) {
        throw new Error("Erro. Price can't be Negative");
    }
    if (product.quantity < 0) {
        throw new Error("Erro. Quantity can't be Negative");
    }

    stock.set(id, product);
    return true;

}