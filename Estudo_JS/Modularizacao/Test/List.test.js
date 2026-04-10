import { List } from '../Controllers/List.js';
import { Add } from '../Controllers/Add.js';
import { stock } from '../Stock.js';

describe("Controller: List Product", () => {

    beforeEach(() => {
        stock.clear();
    });

    test("Should list the products", () => {

        let product1 = {
            name: "Rice",
            branch: "Premium",
            category: "Grains",
            price: 10.50,
            quantity: 100
        };
        let product2 = {
            name: "Beans",
            branch: "Premium",
            category: "Grains",
            price: 12.50,
            quantity: 80
        };
        let product3 = {
            name: "Banana",
            branch: "Premium",
            category: "Fruit",
            price: 2.50,
            quantity: 200
        };

        Add(product1, 1);
        Add(product2, 2);
        Add(product3, 3);

        let result = List();

        expect(result).toBe(true);
    });

    test("Should throw error if stock is empty", () => {

        expect(() => { List() }).toThrow("You don't has product save on the system\n Pls insert a product.");
    });
});