import { stock } from "../Stock.js";

export function Sale(id, sale) {

    if (sale <= 0) {
        throw new Error("Erro.\n You can't insert a quantity negative or zero.");
    }

    if (stock.has(id)) {

        let product = stock.get(id);

        product.quantity -= sale;

        stock.set(id, product);

        console.log(`Successfully updated ${product.name}. New quantity: ${product.quantity}`);

        return true;
    }
    else {
        throw new Error(`Error: Product with ID ${id} not found.`);
    }
}

export function Purchase(id, bought) {

    if (bought <= 0) {
        throw new Error("Erro.\n You can't insert a quantity negative or zero.");
    }

    if (stock.has(id)) {

        let product = stock.get(id);

        product.quantity += bought;

        stock.set(id, product);

        console.log(`Successfully updated ${product.name}. New quantity: ${product.quantity}`);

        return true;
    }
    else {
        throw new Error(`Error: Product with ID ${id} not found.`);
    }

}

export function UpdateProduct(id, name, branch, category, price) {

    if (!name) {
        throw new Error("Erro. Name can't be null");
    }
    if (!category) {
        throw new Error("Erro. Category can't be null");
    }
    if (!branch) {
        throw new Error("Erro. Branch can't be null");
    }
    if (price < 0) {
        throw new Error("Erro. Price can't be Negative");
    }

    if (stock.has(id)) {

        let product = stock.get(id);

        product.name = name;
        product.branch = branch;
        product.category = category;
        product.price = price;

        stock.set(id, product);

        console.log(`Successfully updated ${product.name}.`);

        return true;
    }
    else {
        throw new Error(`Error: Product with ID ${id} not found.`);
    }
}