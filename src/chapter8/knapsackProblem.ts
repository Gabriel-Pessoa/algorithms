type Product = {
    name: string,
    price: number,
    weight: number
}

type Cell = {
    products: Product[];
    totalWeight: number;
    totalPrice: number;
}

const emptyCell: Cell = {
    products: [],
    totalWeight: 0,
    totalPrice: 0,
}

function knapsackProblem(products: Product[], capacity: number) {
    const firstTableLine = initializeFirstTableRow(products[0], capacity);
    const table: { [line: number]: Cell[] } = { 0: firstTableLine };

    for (let line = 1; line < products.length; line++) {
        const columns: Cell[] = [];
        const currentProduct = products[line];

        for (let weight = 0; weight <= capacity; weight++) {
            let currentCell = table[line - 1][weight];

            if (currentProduct.weight <= weight) {
                const leftMaxCell = table[line - 1][weight - currentProduct.weight];
                const newValue = currentProduct.price + leftMaxCell.totalPrice;

                if (newValue > currentCell.totalPrice) {
                    currentCell = {
                        products: [...leftMaxCell.products, currentProduct],
                        totalWeight: leftMaxCell.totalWeight + currentProduct.weight,
                        totalPrice: leftMaxCell.totalPrice + currentProduct.price,
                    };
                }
            }
            columns.push(currentCell);
        }
        table[line] = columns;
    }

    return table[products.length - 1][capacity];
}

function initializeFirstTableRow(product: Product, capacity: number) {
    const line: Cell[] = [];
    for (let weight = 0; weight <= capacity; weight++) {
        if (product.weight <= weight) {
            line.push({
                totalWeight: product.weight,
                totalPrice: product.price,
                products: [product],
            });
        } else {
            line.push(emptyCell);
        }
    }
    return line
}

const products: Product[] = [
    {
        name: 'Violão',
        price: 1500,
        weight: 1,
    },
    {
        name: 'Rádio',
        price: 3000,
        weight: 4,
    },
    {
        name: 'Notebook',
        price: 2000,
        weight: 3,
    },
    {
        name: 'Iphone',
        price: 2000,
        weight: 1,
    },
];

console.log(knapsackProblem(products, 4));