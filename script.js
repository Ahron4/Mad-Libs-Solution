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
        document.getElementById("output").innerHTML = `
        <p>The dinner party started with a dish of ${food} that smelled like ${smthStrange}. 
        Suddenly, a ${adj} ${animal} appeared and started ${verb} on the table! 
        The host grabbed a ${obj} and yelled "${funQuote1}!" 
        We all laughed and said "${funQuote2}." It was unforgettable!</p>
        `;
    }
    else
    {
        alert("Oops! You missed one or more inputs. Please try again!");
    }
}

function mystery()
{
    const adj = prompt("Adjective");
    const place = prompt("Place");
    const sound = prompt("Sound");
    const silName = prompt("A Silly Name");
    const obj = prompt("A object");
    const noun = prompt("A noun");
    const name = prompt("A name");
    const jobTitle = prompt("A job title");
    const verb = prompt("Verb ending in -ing");
    const sub = prompt("Substance");
    const food = prompt("Food");

    if (adj && place && sound && silName && obj && noun && name && jobTitle && verb && sub && food)
    {
        document.getElementById("output").innerHTML = `
        <p>On a(n) ${adj1} night in the grand ${place}, a loud ${sound} revealed Lord ${silName} lying beside a ${obj}, muttering, "It was the ${noun}!"
        Detective ${name}, questioned the ${jobTitle}, who was caught ${verb} near the scene. But the truth was stranger than fiction.
        It turns out Lord ${silName} had slipped on ${sub} while trying to steal a plate of ${food}.
        Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
        `;
    }
    else
    {
        alert("Oops! You missed one or more inputs. Please try again!");
    }
}

function travel()
{
    const histFig = prompt("A historical figure");
    const place = prompt("A place in time");
    const obj = prompt("A object");
    const pluNoun = prompt("A plural noun");
    const adj1 = prompt("Adjective");
    const verb = prompt("Verb");
    const event = prompt("An Event in History");
    const silName = prompt("A silly name");
    const adj2 = prompt("Adjective");

    if (histFig && place && obj && pluNoun && adj1 && verb && event && silName && adj2)
    {
        document.getElementById("output").innerHTML = `
        <p>Your time machine malfunctions, and a ${histFig} steals your homework escaping to ${place}!
        Armed with a ${obj}, you chase them through time, dodging ${pluNoun} and a ${adj1} dinosaur trying to ${verb} you.
        You finally catch the thief at ${event} and grab your homework just time.
        Back in class, your teacher, ${silName}, says, "That's the most ${adj2} excuse ever!" But hey, you got an A!</p>
        `;
    }
    else
    {
        alert("Oops! You missed one or more inputs. Please try again!");
    }
}
