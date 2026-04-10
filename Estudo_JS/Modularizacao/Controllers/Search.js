import { stock } from "../Stock.js";

export function Search(name) {
    if (stock.size === 0) {
        throw new Error("You don't has product save on the system\n Pls insert a product.");
    }
    if (!name) {
        throw new Error("Pls enter with a name.")
    }

    for (let [id, product] of stock) {
        if (product.name.toLowerCase() === name.toLowerCase()) {
            console.log
                (`ID: ${id} | Name: ${product.name} | Branch: ${product.branch} | Category: ${product.category} | Price: ${product.price} | Quantity: ${product.quantity}`);
            return true;
        }
    }
    throw new Error(`The product ${name} is not found on the system.`);
}