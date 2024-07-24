let fruits = ["maçã", "banana", "uva", "laranja"]

fruits.sort()
fruits.reverse()
console.log(fruits)

let cars = [
    { brand: "Fiat", year: 2022},
    { brand: "Ferrari", year: 2020},
    { brand: "bmw", year: 2018}
]

cars.sort(
    function (a, b) {
        return a.year - b.year
    }
    
)
console.log(cars)

let numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 5, 8]
