const btnEL = document.getElementById('btn');
const jokeEL = document.getElementById("joke");

const apiKey = "kXWSWjwFI5CBmPQhbznTUQ==ZYAXg65MiM4Lcqtd";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke(){

    try {
        jokeEL.innerText = "Updating...";
        btnEL.disabled = true;
        btnEL.innerText = "Loading...";
        
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEL.disabled = false;
        btnEL.innerText = "Tell me a Joke";

        jokeEL.innerText = data[0].joke;

        
    } catch (error) {
        jokeEL.innerText = "An Error happened, try again later";
        btnEL.innerText = "Tell me a Joke";
    }

    jokeEL.innerText = "Updating...";
    btnEL.disabled = true;
    btnEL.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEL.disabled = false;
    btnEL.innerText = "Tell me a Joke";

    jokeEL.innerText = data[0].joke;

}


btnEL.addEventListener("click", getJoke)