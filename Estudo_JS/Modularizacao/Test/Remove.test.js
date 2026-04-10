import { Remove } from '../Controllers/Remove.js';
import { Add } from '../Controllers/Add.js';
import { stock } from '../Stock.js';

describe("Controller: Remove Product.", () => {

    beforeEach(() => {

        stock.clear();

    });

    test("Should remove the product", () => {

        let product = {
            name: "Rice",
            branch: "Premium",
            category: "Grains",
            price: 10.50,
            quantity: 100
        }

        Add(product, 1);

        let result = Remove(1);

        expect(result).toBe(true);
    });

    test("Should throw error is not found.", () => {

        expect(() => { Remove(1) }).toThrow(`Error: Product with ID ${1} not found.`);

    });
});