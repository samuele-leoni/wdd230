
if (localStorage.getItem('lastVisit')) {
    let lastVisit = new Date(localStorage.getItem('lastVisit'));

    let difference = Date.now() - lastVisit.getTime();

    let days = Math.round(difference / (1000 * 3600 * 24));

    document.getElementById('lastVis').innerHTML = `${days} days since your last visit.`;
}
localStorage.setItem('lastVisit', new Date());
