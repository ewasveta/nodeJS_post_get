class Car {
    
    constructor(brand){
        this.brand = brand
    }

    toString(){
        return "brand:" + this.brand
    }
}


const cars = [
    {
        brand: "BMW"
    },
    {
        brand: "Audi"
    },
    {
        brand: "Tesla"
    },
    {
        brand: "Toyota"
    },
    {
        brand: "Skoda"
    },
    {
        brand: "BYD"
    },
    
]

module.exports = cars