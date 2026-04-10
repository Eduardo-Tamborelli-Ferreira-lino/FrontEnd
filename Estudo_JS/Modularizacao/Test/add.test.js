import { Add } from '../Controllers/Add.js';
import { stock } from '../Stock.js';

describe('Controller: Add Product', () => {

    // Limpa o estoque antes de cada teste para garantir isolamento
    beforeEach(() => {
        stock.clear();
    });

    test('Should add a valid product successfully', () => {
        const product = {
            name: "Rice",
            branch: "Premium",
            category: "Grains",
            price: 10.50,
            quantity: 100
        };
        const result = Add(product, 1);

        expect(result).toBe(true);
        expect(stock.has(1)).toBe(true);
        expect(stock.get(1)).toEqual(product);
    });

    test('Should throw error if name is missing', () => {
        const product = {
            branch: "Premium",
            category: "Grains",
            price: 10,
            quantity: 5
        };
        expect(() => Add(product, 1)).toThrow("Erro. Name can't be null");
    });

    test('Should throw error if price is negative', () => {
        const product = {
            name: "Rice",
            branch: "Premium",
            category: "Grains",
            price: -5,
            quantity: 5
        };
        expect(() => Add(product, 1)).toThrow("Erro. Price can't be Negative");
    });

    test('Should throw error if quantity is negative', () => {
        const product = {
            name: "Rice",
            branch: "Premium",
            category: "Grains",
            price: 10,
            quantity: -1
        };
        expect(() => Add(product, 1)).toThrow("Erro. Quantity can't be Negative");
    });
});