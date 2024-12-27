function dinner()
{
    const food = prompt("Food");
    const smthStrange = prompt ("Something strange");
    const adj = prompt("Adjective");
    const animal = prompt("Animal");
    const verb = prompt("Verb ending in -ing");
    const obj = prompt("Object");
    const funQuote1 = prompt("A funny quote");
    const funQuote2 = prompt("Another funny quote");

    if (food && smthStrange && adj && animal && verb && obj && funQuote1 && funQuote2)
    {
        /* Already implemented, missing text and input */
        document.getElementById("output").innerHTML = `
        <p>The dinner party started with a dish of ${food} that smelled like ${smthStrange}. 
        Suddenly, a ${adj} ${animal} appeared and started ${verb} on the table! 
        The host grabbed a ${obj} and yelled "${funQuote1}!" 
        We all laughed and said "${funQuote2}." It was unforgettable!</p>
        `;
    }
    /* Error message goes here */
    else
    {
        alert("Oops! You missed one or more inputs. Please try again!");
    }
}