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

function sortNames(list) {
    return list.sort(function (a, b) {
        return a.name.last.slice(a.name.last.lastIndexOf(" ") + 1, a.name.last.length).localeCompare(b.name.last.slice(b.name.last.lastIndexOf(" ") + 1, b.name.last.length));
    })
}

function capitalizeFirstLetter(string, type) {
    /* Check name for containig multiple words */
    if (string.includes(" ")) {
        if (type == "last") {// If it is a last name with prefixes
            return string.charAt(0).toLowerCase()
            + string.slice(1, string.lastIndexOf(" ") + 1).toLowerCase()
            + string.charAt(string.lastIndexOf(" ")  + 1).toUpperCase()
            + string.slice(string.lastIndexOf(" ") + 2, string.length).toLowerCase()
            ;
        }
        else {// If it is a first name but are actually more names
            return string.charAt(0).toUpperCase()
            + string.slice(1, string.lastIndexOf(" ") + 1).toLowerCase()
            + string.charAt(string.lastIndexOf(" ")  + 1).toUpperCase()
            + string.slice(string.lastIndexOf(" ") + 2, string.length).toLowerCase()
            ;
        }
    }
    /* Check name for being a compound name */
    else if (string.includes("-")) {
        return string.charAt(0).toUpperCase()
        + string.slice(1, string.lastIndexOf("-") + 1).toLowerCase()
        + string.charAt(string.lastIndexOf("-")  + 1).toUpperCase()
        + string.slice(string.lastIndexOf("-") + 2, string.length).toLowerCase()
        ;
    }
    /* If it is a one-word name */
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

            peopleList.results = sortNames(peopleList.results);

            /* Change names to start with uppercase characters */
            for (var key in peopleList.results){
                peopleList.results[key].name.first = capitalizeFirstLetter(peopleList.results[key].name.first, "first");
                peopleList.results[key].name.last = capitalizeFirstLetter(peopleList.results[key].name.last, "last");
            }

            /* Display the List of People */

            for (var key in peopleList.results){
                document.getElementById("test").innerHTML += peopleList.results[key].name.first + " " + peopleList.results[key].name.last + "<br />";
            }

            return peopleList;
        }, error => {
            console.error('error: ', error);
        }
    )
}

/*Code to be immediately executed*/

generatePeople();