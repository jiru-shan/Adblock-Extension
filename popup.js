function declareListeners()
{
    document.getElementById("press").addEventListener("click", displaySomething)
}
async function displaySomething()
{
    const res = await fetch ("https://api.kanye.rest/")
    const quote = await res.json();
    

    console.log(quote)

    document.getElementById("text").textContent = JSON.stringify(quote.quote)
}

declareListeners();