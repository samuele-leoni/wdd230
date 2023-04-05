const fruitMix = document.getElementById('fruit-mix');
if (localStorage.getItem('fruit-mix')) {
    const data = localStorage.getItem('fruit-mix');
    let fruitMixDataArr = JSON.parse(data);
    let rand = Math.floor(Math.random() * fruitMixDataArr.length);
    fruitMix.innerHTML = `
        <h2>Fruit Mix<br>#${rand + 1}</h2>
        <div>
        <p><strong>Total Fruit Mixes:</strong> ${fruitMixDataArr.length}</p>
        <p><strong>Fruit 1:</strong> ${fruitMixDataArr[rand].fruits[0]}</p>
        <p><strong>Fruit 2:</strong> ${fruitMixDataArr[rand].fruits[1]}</p>
        <p><strong>Fruit 3:</strong> ${fruitMixDataArr[rand].fruits[2]}</p>
        <p><strong>Carbohydrates:</strong> ${fruitMixDataArr[rand].nutritions.carbohydrates.toFixed(2)}g</p>
        </div>
        <div>
        <p><strong>Protein:</strong> ${fruitMixDataArr[rand].nutritions.protein.toFixed(2)}g</p>
        <p><strong>Fat:</strong> ${fruitMixDataArr[rand].nutritions.fat.toFixed(2)}g</p>
        <p><strong>Sugar:</strong> ${fruitMixDataArr[rand].nutritions.sugar.toFixed(2)}g</p>
        <p><strong>Calories:</strong> ${fruitMixDataArr[rand].nutritions.calories.toFixed(2)}kcal</p>
        <p><strong>Order Date:</strong> ${new Date(fruitMixDataArr[rand].orderDate).toLocaleDateString()}</p>
        </div>
    `;
}
else
{
    fruitMix.innerHTML = `
        <h2>Fruit Mix</h2>
        <p>No fruit mix has been created to order one please make sure to visit our <a class="normal-link" href="fresh.html">Fresh</a> page!</p>
    `;
}