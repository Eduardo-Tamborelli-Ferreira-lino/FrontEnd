import promptSync from 'prompt-sync';
const prompt = promptSync();

import * as Controllers from "./Controllers/Index.js";
var id = 1;

var menu = `
======================================
  📦 SUPERMARKET INVENTORY SYSTEM
======================================
1. Add New Product
2. List All Products
3. Search Product by Name
4. Edit Product Information
5. Register Inventory In/Out
6. Remove Product
0. Exit System
======================================
Choose an option:
`

mainMenu();

function mainMenu() {
    while (true) {
        try {
            console.log(menu);
            let option = Number(prompt());

            if (isNaN(option)) {
                console.log();
                console.log("Error enter a number, not a text.");
            }
            else {
                switch (option) {
                    case 1: {
                        addProduct();
                        break;
                    }
                    case 2: {
                        listAllProducts();
                        break;
                    }
                    case 3: {
                        searchProduct();
                        break;
                    }
                    case 4: {
                        editProduct();
                        break;
                    }
                    case 5: {
                        registerInventory();
                        break;
                    }
                    case 6: {
                        removeProduct();
                        break;
                    }
                    case 0: {
                        process.exit(0);
                    }
                    default: {
                        console.log("Pls enter a correct option");
                        console.log("Press enter for go to menu.");
                        prompt();
                        break;
                    }
                }
            }
        } catch (error) {
            console.log("My system has a error. Sorry :( \n" + error);
            break;
        }
    }
}

function addProduct() {
    try {
        let action = "Add Products";
        let product = {
            name: "",
            branch: "",
            category: "",
            price: 0,
            quantity: 0
        }

        if (!verifyAction(action)) {
            return;
        }
        else {
            product.name = prompt("Insert the name of the product. ");
            product.branch = prompt("Insert the branch of the product. ");
            product.category = prompt("Insert the category of the product. ");
            let price = Number(prompt("Insert the price of the product. "));
            let quantity = Number(prompt("Insert the quantity of the product. "));

            if (isNaN(price) && isNaN(quantity)) {
                console.log("Error enter a number, not a text.\n Try Again");
                addProduct();
            }

            product.price = price;
            product.quantity = quantity;

            if (Controllers.Add(product, id)) {

                id++;

                console.log("Sucess to save the product");
                console.log("Press enter for go to menu.");
                prompt();

            }
        }
    } catch (error) {
        console.log(error.message);
        console.log("Press enter for go to menu.");
        prompt();
        return;
    }
}

function listAllProducts() {
    try {
        let action = "List All Products.";

        if (!verifyAction(action)) {
            return;
        }

        if (Controllers.List()) {

            console.log("Press enter for go to menu.");
            prompt();

        }

    } catch (error) {
        console.log(error.message);
        console.log("Press enter for go to menu.");
        prompt();
        return;
    }
}

function searchProduct() {
    try {

        let action = "Search Product.";
        let name = "";

        if (!verifyAction(action)) {
            return;
        }

        name = prompt("Insert the name of the product do you wanna search. ");

        if (Controllers.Search(name)) {

            console.log("Press enter for go to menu.");
            prompt();

        }

    } catch (error) {
        console.log(error.message);
        console.log("Press enter for go to menu.");
        prompt();
        return;
    }
}

function editProduct() {
    try {

        let action = "Edit product. ";

        if (!verifyAction(action)) {
            return;
        }

        Controllers.List();

        console.log("Chose the product do you want to edit by ID. ");
        let id = Number(prompt());

        console.log("If do you don't insert a new value insert the same value on the input. ");

        let name = prompt("Insert the new name of the products. ");
        let branch = prompt("Insert the new branch of the products. ");
        let category = prompt("Insert the new category of the products. ");
        let price = prompt("Insert the new price of the products. ");

        if (Controllers.UpdateProduct(id, name, branch, category, price)) {

            console.log("Press enter for go to menu.");
            prompt();

        }

    } catch (error) {
        console.log(error.message);
        console.log("Press enter for go to menu.");
        prompt();
        return;
    }
}

function registerInventory() {
    try {

        let action = "Register inventory";

        if (!verifyAction(action)) {
            return;
        }

        let validy = false;

        while (!validy) {
            console.log(`Do you wish to make a sale or a purchase?\n 1 - Sale. \n 2 - Purchase.`);
            let option = prompt();

            if (option == 1) {

                Controllers.List();

                console.log("OK");

                console.log("Chose the product do you want to edit by ID. ");
                let id = Number(prompt());

                console.log("Insert the quantity do you sale.");
                let sale = Number(prompt());

                if (Controllers.Sale(id, sale)) {

                    console.log("Press enter for go to menu.");
                    prompt();
                    validy = true;

                }

            }

            else if (option == 2) {

                Controllers.List();

                console.log("OK");

                console.log("Chose the product do you want to edit by ID. ");
                let id = Number(prompt());

                console.log("insert the quantity do you bought");
                let bought = Number(prompt());

                if (Controllers.Purchase(id, bought)) {

                    console.log("Press enter for go to menu.");
                    prompt();
                    return;

                }

            }

            else {

                console.log("Insert a validy number option. ");
                console.log("Press enter for go to try again.");
                prompt();

            }
        }
        return;

    } catch (error) {
        console.log(error.message);
        console.log("Press enter for go to menu.");
        prompt();
        return;
    }
}

function removeProduct() {
    try {

        let action = "Remove product.";

        if (!verifyAction(action)) {
            return;
        }

        Controllers.List();

        console.log("Chose the product do you want to edit by ID. ");
        let id = Number(prompt());

        if (Controllers.Remove(id)) {

            console.log("Press enter for go to menu.");
            prompt();
            return;

        }

    } catch (error) {
        console.log(error.message);
        console.log("Press enter for go to menu.");
        prompt();
        return;
    }
}

function verifyAction(action) {
    try {
        while (true) {
            console.log(`\n\nDo you wanna do this function??\n${action}\n\n 1 - Yes\n 2 - No`);
            let option = Number(prompt());
            if (isNaN(option)) {
                console.log("\n\nError enter a number, not a text.\n Try Again");
            }
            if (option === 1) {
                console.log("\n\nInicilization the function.");
                return true;
            }
            else {
                console.log("\n\nOk return for menu");
                console.log("Press enter for go to menu.");
                prompt();
                return false;
            }
        }
    } catch (error) {
        console.log("The system was a error.");
        console.log("Press enter for go to menu.");
        prompt();
        return false;
    }
}