import { stock } from "../Stock.js";

export function List() {
    if (stock.size === 0) {
        throw new Error("You don't has product save on the system\n Pls insert a product.");
    }

    console.log("==========Products============");
    for (let [id, product] of stock) {
        console.log
            (`ID: ${id} | Name: ${product.name} | Branch: ${product.branch} | Category: ${product.category} | Price: ${product.price} | Quantity: ${product.quantity}`);
    }
    return true;
}