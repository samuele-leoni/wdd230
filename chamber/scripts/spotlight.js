const spotlight = [document.getElementById("spotlight1"), document.getElementById("spotlight2"), document.getElementById("spotlight3")];
const path = "data/data.json"

function getRandomElement(array) {
    let idx = Math.floor(Math.random() * array.length);
    let el = array[idx];
    if (el.membership != "Gold" && el.membership != "Silver") return getRandomElement(array);
    array.splice(idx, 1);
    return el;
}

function displaySpotlightResults(companyData) {
    let spotlightEl = [];
    spotlightEl.push(getRandomElement(companyData));
    spotlightEl.push(getRandomElement(companyData));
    spotlightEl.push(getRandomElement(companyData));
    for (let i = 0; i < spotlight.length; i++) {
        let html = `
        <h3 class="spotName">${spotlightEl[i].name}</h3>
        <div class="spotlight-company-logos">
			<img class="spotlightLogos" src="${spotlightEl[i].logo}" alt="${spotlightEl[i].name} logo" loading="lazy">
        </div>
        <div class="spot-info">
          <p><a href="mailto:${spotlightEl[i].email}">${spotlightEl[i].email}</a></p>
          <p>${spotlightEl[i].phone} | <a href="${spotlightEl[i].website}">Website</a></p>
        </div>
		`;
        spotlight[i].innerHTML = html;
    }
}
async function apiFetch() {
    try {
        const response = await fetch(path);
        if (response.ok) {
            const data = await response.json();
            displaySpotlightResults(data.companies);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();