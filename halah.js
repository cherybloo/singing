(async()=>{
    await fetch("https://cherybloo.github.io/suicidal-jokes-api/suicidal.json")
    .then(res => res.json())
    .then(answer => {
        var randomNumber = Math.floor(Math.random() * answer.length);
        console.log(randomNumber);
        console.log(answer[randomNumber]);
    })
})()