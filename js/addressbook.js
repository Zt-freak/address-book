/*Here are my functions*/

function asyncAJAX(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    })
}

function capitalizeFirstLetter(string) {
    /* Check name for prefixes */
    if (string.includes(" ")) {
        return string.charAt(0).toLowerCase()
        + string.slice(1, string.lastIndexOf(" ") + 1).toLowerCase()
        + string.charAt(string.lastIndexOf(" ")  + 1).toUpperCase()
        + string.slice(string.lastIndexOf(" ") + 2, string.length).toLowerCase()
        ;
    }
    /* Check name for being a compound name */
    else if (string.includes("-")) {
        return string.charAt(0).toUpperCase()
        + string.slice(1, string.lastIndexOf("-") + 1).toLowerCase()
        + string.charAt(string.lastIndexOf("-")  + 1).toUpperCase()
        + string.slice(string.lastIndexOf("-") + 2, string.length).toLowerCase()
        ;
    }
    else {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}

function generatePeople() {
    asyncAJAX('https://randomuser.me/api/?results=50').then (
        result => {
            console.log('result: ', result);
            var people = result;
            peopleList = JSON.parse(people);

            /* Sort alphabetically */

            peopleList.results.sort(function (a, b) {
                return a.name.last.localeCompare(b.name.last);
            })

            /* Change names to start with uppercase characters */
            for (var key in peopleList.results){
                peopleList.results[key].name.first = capitalizeFirstLetter(peopleList.results[key].name.first);
                peopleList.results[key].name.last = capitalizeFirstLetter(peopleList.results[key].name.last);
            }

            /* Display the List of People */

            for (var key in peopleList.results){
                document.getElementById("test").innerHTML += peopleList.results[key].name.first + " " + peopleList.results[key].name.last + "<br />";
            }
        }, error => {
            console.error('error: ', error);
        }
    )
}

/*Code to be immediately executed*/

generatePeople();