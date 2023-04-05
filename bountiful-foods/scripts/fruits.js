const api_url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruit() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
}

function displayFruits(fruits) {
    const fruitList = [document.getElementById("fruit1"), document.getElementById("fruit2"), document.getElementById("fruit3")];
    fruitList.forEach(fruitSelect => {
        fruits.forEach(fruit => {
            const fruitItem = document.createElement("option");
            fruitItem.value = fruit.name;
            fruitItem.innerHTML = fruit.name;
            fruitSelect.appendChild(fruitItem);
        });
    });
}

function handleSubmit() {
    console.log("handleSubmit called");
    const firstName = document.getElementById("firstName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phoneNumber");
    const fruit1 = document.getElementById("fruit1");
    const fruit2 = document.getElementById("fruit2");
    const fruit3 = document.getElementById("fruit3");
    const instructions = document.getElementById("special-instructions");

    let fruitMixData = {};

    getFruit().then(fruits => {
        const fruitData = {};
        fruits.forEach(fruit => {
            fruitData[fruit.name] = fruit;
        });

        const totalCarbs = fruitData[fruit1.value].nutritions.carbohydrates + fruitData[fruit2.value].nutritions.carbohydrates + fruitData[fruit3.value].nutritions.carbohydrates;
        const totalProtein = fruitData[fruit1.value].nutritions.protein + fruitData[fruit2.value].nutritions.protein + fruitData[fruit3.value].nutritions.protein;
        const totalFat = fruitData[fruit1.value].nutritions.fat + fruitData[fruit2.value].nutritions.fat + fruitData[fruit3.value].nutritions.fat;
        const totalSugar = fruitData[fruit1.value].nutritions.sugar + fruitData[fruit2.value].nutritions.sugar + fruitData[fruit3.value].nutritions.sugar;
        const totalCalories = fruitData[fruit1.value].nutritions.calories + fruitData[fruit2.value].nutritions.calories + fruitData[fruit3.value].nutritions.calories;

        const output = document.getElementById("output");
        output.innerHTML = `
            <h2>Order Summary</h2>
            <h3>Thank you! Here is a summary of your order:</h3>
            <p><strong>Name:</strong> ${firstName.value}</p>
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Phone:</strong> ${phone.value}</p>
            <p><strong>Fruit 1:</strong> ${fruit1.value}</p>
            <p><strong>Fruit 2:</strong> ${fruit2.value}</p>
            <p><strong>Fruit 3:</strong> ${fruit3.value}</p>
            <p><strong>Special Instructions:</strong> ${instructions.value}</p>
            <p><strong>Total Carbs:</strong> ${totalCarbs.toFixed(2)}g</p>
            <p><strong>Total Protein:</strong> ${totalProtein.toFixed(2)}g</p>
            <p><strong>Total Fat:</strong> ${totalFat.toFixed(2)}g</p>
            <p><strong>Total Sugar:</strong> ${totalSugar.toFixed(2)}g</p>
            <p><strong>Total Calories:</strong> ${totalCalories.toFixed(2)}kcal</p>
    `;
        fruitMixData = {
            "fruits": [fruit1.value, fruit2.value, fruit3.value],
            "nutritions": {
                "carbohydrates": totalCarbs,
                "protein": totalProtein,
                "fat": totalFat,
                "sugar": totalSugar,
                "calories": totalCalories
            },
            "orderDate": new Date()
        };

        let fruitMixDataArr = [];

        if (localStorage.getItem('fruit-mix')) {
            const data = localStorage.getItem('fruit-mix');
            fruitMixDataArr = JSON.parse(data);
        }

        fruitMixDataArr.push(fruitMixData);

        localStorage.setItem('fruit-mix', JSON.stringify(fruitMixDataArr));
    });
}

const btn = document.getElementById("submit");
btn.addEventListener("click", handleSubmit);

getFruit().then(fruits => {
    displayFruits(fruits);
});