const news = [
    {
        title : `Front-End vs Back-End Developer: What's the Difference?`,
        imageUrl : `images/FEvsBE.png`,
        dateRelease : `January 3 2023`,
        likes : 4800,
        isDone : false
    }
]


const element = document.getElementById('test');
element.innerHTML = news[0].dateRelease;
element.style.backgroundImage = `url(${news[0].imageUrl})`