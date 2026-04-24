import { stock } from "../Stock.js";

export function Remove(id) {

    if (stock.has(id)) {

        let product = stock.get(id);

        stock.delete(id);

        console.log(`The product ${product.name} is delete from system`);

        return true;
    }
    else {
        throw new Error(`Error: Product with ID ${id} not found.`);
    }
}