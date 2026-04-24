import { Search } from '../Controllers/Search.js';
import { Add } from '../Controllers/Add.js';
import { stock } from '../Stock.js';

describe("Controller: Search Product", () => {

    beforeEach(() => {

        stock.clear();

    });

    test("Should list the product found", () => {

        let product = {
            name: "Rice",
            branch: "Premium",
            category: "Grains",
            price: 10.50,
            quantity: 100
        };

        let searchName = "rice";

        Add(product, 1);

        let result = Search(searchName);

        expect(result).toBe(true);

    });

    test("Should throw error if the search name don't exist in stock", () => {

        let product = {
            name: "Rice",
            branch: "Premium",
            category: "Grains",
            price: 10.50,
            quantity: 100
        };

        let name = "beans";

        Add(product, 1);

        expect(() => { Search(name) }).toThrow(`The product ${name} is not found on the system.`);

    });

    test("Should throw error if the search name is null", () => {

        let product = {
            name: "Rice",
            branch: "Premium",
            category: "Grains",
            price: 10.50,
            quantity: 100
        };

        let searchName = "";

        Add(product, 1);

        expect(() => { Search(searchName) }).toThrow("Pls enter with a name.");

    });

    test("Should throw error if stock is empty", () => {

        expect(() => { Search("any name") }).toThrow("You don't has product save on the system\n Pls insert a product.");

    });
});