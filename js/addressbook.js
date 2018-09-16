/*Functions*/

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
        else if (type == "first") {// If it is a first name but are actually more names
            return string.charAt(0).toUpperCase()
            + string.slice(1, string.lastIndexOf(" ") + 1).toLowerCase()
            + string.charAt(string.lastIndexOf(" ")  + 1).toUpperCase()
            + string.slice(string.lastIndexOf(" ") + 2, string.length).toLowerCase()
            ;
        }
        else if (type == "place") {
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

function displayName(list, key) {
    document.getElementById("listDisplayer").innerHTML +=
    "<a class='personname' onclick='displayInfo(" + key + ")'>"
        + list[key].name.first + " " + list[key].name.last
    + "</a><br />";
}

function displayInfo(key) {
    document.getElementById("infoHeader").innerHTML =
            "<p class='nameinfo'>" +
                peopleList.results[key].name.first + " " + peopleList.results[key].name.last +
            "</p>";
            switch (peopleList.results[key].nat) {
                case "AU":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg'>";
                    break;
                case "BR":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg'>";
                    break;
                case "CA":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg'>";
                    break;
                case "CH":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg'>";
                    break;
                case "DE":
                    document.getElementById("infoHeader").innerHTML +=       
                   "<img class='flag' src='https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'>";
                    break;
                case "DK":
                    document.getElementById("infoHeader").innerHTML +=       
                  "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg'>";
                    break;
                case "ES":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg'>";
                    break;
                case "FI":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg'>";
                    break;
                case "FR":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg'>";
                    break;
                case "GB":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg'>";
                    break;
                case "IE":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg'>";
                    break;
                case "IR":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg'>";
                    break;
                case "NO":
                    document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg'>";
                    break;
                case "NL":
                  document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg'>";
                    break;
                case "NZ":
                 document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg'>";
                    break;
                case "TR":
                   document.getElementById("infoHeader").innerHTML +=       
                   "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg'>";
                    break;
                case "US":
                   document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'>";
                    break;
                default:
                  document.getElementById("infoHeader").innerHTML +=       
                    "<img class='flag' src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Flag_of_None.svg'>";
                    break;
            }
            document.getElementById("infoHeader").innerHTML +=       
            "<img class='picture' src='" +
                peopleList.results[key].picture.large +
            "'>";
        document.getElementById("infoBox").innerHTML = 
        "<p class='infobox__info--attribute'>Place</p>" +
        "<p class='infobox__info--value'>" + peopleList.results[key].location.city + ", " + peopleList.results[key].location.state + "</p>" +
        "<p class='infobox__info--attribute'>Street</p>" +
        "<p class='infobox__info--value'>" + peopleList.results[key].location.street + "</p>" +
        "<p class='infobox__info--attribute'>Postal Code</p>" +
        "<p class='infobox__info--value'>" + peopleList.results[key].location.postcode + "</p>" +
        "<p class='infobox__info--attribute'>E-mail</p>" +
        "<p class='infobox__info--value'>" + peopleList.results[key].email + "</p>" +
        "<p class='infobox__info--attribute'>Phone</p>" +
        "<p class='infobox__info--value'>" + peopleList.results[key].phone + "</p>" +
        "<p class='infobox__info--attribute'>Mobile</p>" +
        "<p class='infobox__info--value'>" + peopleList.results[key].cell + "</p>"
    ;
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

                //Do the same for AnimationPlaybackEvent, this is sloppy code
                peopleList.results[key].location.city = capitalizeFirstLetter(peopleList.results[key].location.city, "place");
                peopleList.results[key].location.state = capitalizeFirstLetter(peopleList.results[key].location.state, "place");
                //peopleList.results[key].location.street = capitalizeFirstLetter(peopleList.results[key].location.street, "place");
            }

            /* Display the List of People */
            let lastKey = 0;//This is the starting value for the variable that will keep track of when a name starts with a new letter.
            for (var key in peopleList.results){
                //Display a new letter first if the last name starts with a new letter
                if (key == 0) {
                    document.getElementById("listDisplayer").innerHTML += "<h3 class='letterindicator'>"
                    + peopleList.results[key].name.last.charAt(
                        peopleList.results[key].name.last.lastIndexOf(" ") + 1)
                    + "</h3>";
                }
                else if (peopleList.results[key].name.last.charAt(
                    peopleList.results[key].name.last.lastIndexOf(" ") + 1)
                != peopleList.results[lastKey].name.last.charAt(
                    peopleList.results[lastKey].name.last.lastIndexOf(" ") + 1)
                ) {
                    document.getElementById("listDisplayer").innerHTML += "<h3 class='letterindicator'>"
                    + peopleList.results[key].name.last.charAt(
                        peopleList.results[key].name.last.lastIndexOf(" ") + 1)
                    + "</h3>";
                    lastKey = key;
                }
                //Display the name
                displayName(peopleList.results, key);
            }

            return peopleList;
        }, error => {
            console.error('error: ', error);
            document.getElementById("listDisplayer").innerHTML = "<p>ERROR: Something went wrong while awaiting the AJAX response.</p>";
        }
    )
}

/*Code to be immediately executed*/

let peopleList = generatePeople();