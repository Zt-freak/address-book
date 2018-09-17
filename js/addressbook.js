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

function displayErrorGraphic(type) {
    document.getElementById("infoDisplayer").innerHTML = 
    `
    <div id="infoHeader" class="infoheader"></div>
    <svg version="1.1" id="kevinTheCat" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 800 675" style="enable-background:new 0 0 800 675;" xml:space="preserve">
    <style type="text/css">
        .st0{fill:#008B8B;}
        .st1{fill:#FFFFFF;}
    </style>
    <g>
        <g>
            <path class="st0" d="M593.9,385.4c-3.2-20.3-12.8-40.3-27.5-54.7c-16.4-16.1-37.9-25.2-60.6-27c-20.6-1.7-43,5.1-59.5,17.3
                c-18.4,13.6-30.8,32.1-37.3,54c-5.6,18.9-6.7,39.3-6.4,58.9c0.1,10.1,0.6,20.2,0.7,30.4c0,5,0,10-0.2,15c-0.1,2.3-0.2,4.7-0.4,7
                c-0.1,1.2-0.2,2.3-0.3,3.5c0,0.3-0.2,1.5-0.3,2.4c-0.1,0.7-0.2,1.4-0.3,1.6c-0.2,1.4-0.5,2.8-0.8,4.2c-0.5,2.5-1.1,5-1.9,7.5
                c-0.7,2.5-1.6,4.9-2.4,7.4c-0.5,0.6-1.5,3.3-1.9,3.9c-1.1,2-2.3,3.9-3.6,5.8c-0.1,0.2-0.3,0.4-0.4,0.6c0.7-0.9,1.1-1.2-0.1,0.1
                c-0.4,0.5-0.8,1-1.1,1.5c0.3-0.5,0.7-1,1-1.5c-0.1,0.1-0.2,0.2-0.3,0.4c-1.8,2-3.8,3.8-5.8,5.6l-22.7-412.5
                c-0.4-8.1-6.1-14.4-14.1-15.7c-7.8-1.3-14.9,2.7-18.1,9.8L242.9,251l-69.9-0.5L88.1,111.2c-3.1-7.1-10.2-11.1-18-9.9
                c-8,1.2-13.7,7.5-14.2,15.6L26.2,596.3c-0.4,7.2,3.6,13.7,10.3,16.6l334.9,3.7c2.2,0,4.4-0.4,6.5-1.3c6.7-2.8,10.8-9.2,10.4-16.5
                l-0.9-16.5c18.7-6.6,35.5-20.2,46.4-37.2c22.6-35.4,16.4-79.5,16.7-119.2c0-4.3,0.2-8.6,0.4-12.9c0.1-1.9,0.3-3.8,0.4-5.6
                c0.1-1,0.2-1.9,0.3-2.9c0,0.2-0.1,0.3-0.1,0.5c0-0.2,0.1-0.3,0.1-0.5c0-0.1,0-0.2,0-0.3c0.4-3.4,0.4-1.8,0,0.3c1-3.9,1.3-8,2.3-12
                c1.1-4.3,2.8-8.3,4.1-12.5c0.4-0.8,0.7-1.5,1.1-2.3c1-1.8,2-3.7,3.1-5.4c0.6-0.9,1.2-1.7,1.7-2.6c0.7-1,0.7-1.3,0.6-1.1
                c1.2-1.2,2.7-2.6,3.2-3c1.4-1.5,3-2.8,4.5-4.2c0.5-0.3,0.9-0.7,1.4-1c1.7-1.2,3.5-2.2,5.3-3.2c0.9-0.5,1.8-1,2.8-1.4
                c0.5-0.2,0.9-0.5,1.4-0.7c0,0,0,0,0,0c3.2-1,9-2.6,9.7-2.8c0.7-0.1,1.7-0.2,2.5-0.4c1.9-0.1,3.9-0.2,5.8-0.2
                c1.7,0,3.5,0.2,5.2,0.3c0.8,0.1,1.5,0.3,2.3,0.5c2,0.4,4,1,6,1.6c0.9,0.3,1.7,0.6,2.6,0.9c-0.1-0.1-0.2-0.2-0.4-0.3
                c0.1,0.1,0.2,0.2,0.4,0.3c0.1,0,0.2,0.1,0.3,0.1c3.3,1.2,1.3,1-0.3-0.1c3,2.3,7.3,3.6,10.5,5.8c-0.1,0,0.4,0.2,0.9,0.6
                c0.1,0.1,0.3,0.2,0.4,0.4c1.9,1.7,3.8,3.5,5.6,5.4c0.5,0.5,0.9,1,1.3,1.5c0-0.1-0.1-0.2-0.1-0.4c0.1,0.1,0.1,0.3,0.2,0.4
                c0.2,0.3,0.4,0.5,0.7,0.8c0.7,0.7,0.8,1.3,0.7,1.3c0.5,0.7,1.1,1.4,1.5,2c1.1,1.8,2.1,3.6,3,5.4c0.4,0.7,0.7,1.5,1.1,2.2
                c1.6,4.6,3,9.3,4,14.2c0.2,0.8,0.3,1.7,0.4,2.5c0.2,2.5,0.4,5.1,0.5,7.6c0.1,4.8,0,9.5-0.5,14.2c0,0-0.3,2-0.4,2.8
                c0,0.1,0,0.1,0,0.2c-0.5,2.7-1,5.4-1.6,8c-1.2,5.3-2.7,10.6-4.5,15.7c-0.9,2.6-1.8,5.2-2.7,7.7c-0.9,2.5-1.7,6.4-3.4,8.5
                c0.4-0.5,2.1-4.9,0.3-0.7c-0.6,1.4-1.2,2.8-1.8,4.2c-1.1,2.5-2.3,5-3.4,7.5c-2.6,5.5-5.3,11-7.9,16.5c-5.5,11.3-3.4,26.5,8.6,32.8
                c10.8,5.7,27,3.4,32.8-8.6c9.8-20.1,19.8-40.6,26-62.1C595.6,429.6,597.4,407.6,593.9,385.4z M396.6,512.8
                c-0.1,0.2-0.2,0.5-0.3,0.7C395,517.5,396.1,513.8,396.6,512.8z M463.2,370.6c0-0.3,0.3-0.8,0.7-1.4
                C463.5,369.7,463.1,370.3,463.2,370.6z M481,355.7c0-0.1,0.5-0.3,1.5-0.6C482,355.2,481.6,355.4,481,355.7z M492.9,351.8
                C492.6,351.8,492.5,351.8,492.9,351.8L492.9,351.8z M529.8,361.8c0.3,0.2,0.5,0.4,0.5,0.4C530.3,362.3,530.1,362.1,529.8,361.8z
                    M390.7,523.2C390.7,523.2,390.7,523.2,390.7,523.2c0,0,0.1-0.1,0.1-0.1C390.8,523.1,390.8,523.1,390.7,523.2z M451.7,404.3
                C451.7,404.3,451.7,404.3,451.7,404.3C451.7,404.3,451.7,404.3,451.7,404.3C451.7,404.3,451.7,404.3,451.7,404.3z M536,368.4
                c0.3,0.7,0.9,1.4,1.4,2.1C537.3,370.6,536.7,370,536,368.4C536,368.4,536,368.4,536,368.4z M517.3,354.6
                C517.3,354.7,517.3,354.7,517.3,354.6C517.3,354.7,517.3,354.7,517.3,354.6C517.3,354.6,517.3,354.6,517.3,354.6z"/>
        </g>
    </g>
    <g>
        <ellipse class="st1" cx="301.8" cy="409" rx="42" ry="56.8"/>
    </g>
    <g>
        <ellipse class="st1" cx="112.8" cy="409" rx="42" ry="56.8"/>
    </g>
    <g>
        <path class="st1" d="M225.6,462.5c-3,0-5.5-2.5-5.5-5.5c0-9.5-5.8-17.5-12.8-17.5s-12.8,8-12.8,17.5c0,3-2.5,5.5-5.5,5.5
            s-5.5-2.5-5.5-5.5c0-15.7,10.7-28.5,23.8-28.5c13.1,0,23.8,12.8,23.8,28.5C231.1,460.1,228.6,462.5,225.6,462.5z"/>
    </g>
    <g>
        <path class="st0" d="M562.7,86.3c0,9.9-2.7,17.8-8,23.5c-5.3,5.7-12.6,8.6-21.9,8.6c-9.3,0-16.6-2.9-21.9-8.7
            c-5.3-5.8-7.9-13.6-7.9-23.4c0-9.9,2.6-17.7,7.9-23.5c5.3-5.7,12.6-8.6,21.9-8.6c9.3,0,16.5,2.9,21.9,8.6
            C560,68.5,562.7,76.4,562.7,86.3z M546.7,86.3c0-3.7-0.4-6.8-1.1-9.4c-0.8-2.6-1.8-4.7-3-6.3c-1.3-1.7-2.8-2.9-4.5-3.6
            s-3.4-1.1-5.2-1.1c-1.9,0-3.6,0.3-5.2,1c-1.5,0.7-3,1.9-4.5,3.6c-1.3,1.6-2.3,3.7-3.1,6.4s-1.2,5.8-1.2,9.5c0,3.8,0.4,6.9,1.1,9.4
            s1.8,4.6,3.1,6.3c1.3,1.7,2.8,2.9,4.5,3.7c1.7,0.7,3.4,1.1,5.2,1.1c1.8,0,3.6-0.4,5.3-1.2s3.2-2,4.4-3.7c1.3-1.8,2.3-3.9,3.1-6.3
            C546.4,93.3,546.7,90.1,546.7,86.3z"/>
        <path class="st0" d="M614.5,117.1h-14.6v-23c0-1.9-0.1-3.7-0.2-5.6c-0.2-1.9-0.4-3.2-0.8-4.1c-0.5-1-1.2-1.8-2.1-2.3
            c-0.9-0.5-2.2-0.7-3.8-0.7c-1.2,0-2.4,0.2-3.6,0.7s-2.5,1.1-3.9,2.1v32.9H571V52.8h14.5v23c2.4-2,4.7-3.6,6.9-4.7s4.7-1.7,7.5-1.7
            c4.7,0,8.4,1.5,10.9,4.5s3.8,7.3,3.8,13V117.1z"/>
        <path class="st0" d="M693.5,117.1h-14.6v-23c0-1.9-0.1-3.7-0.2-5.6c-0.2-1.9-0.4-3.2-0.8-4.1c-0.5-1-1.2-1.8-2.1-2.3
            c-0.9-0.5-2.2-0.7-3.8-0.7c-1.2,0-2.4,0.2-3.6,0.7s-2.5,1.1-3.9,2.1v32.9H650V70.7h14.5v5.1c2.4-2,4.7-3.6,6.9-4.7s4.7-1.7,7.5-1.7
            c4.7,0,8.4,1.5,10.9,4.5s3.8,7.3,3.8,13V117.1z"/>
        <path class="st0" d="M748.7,93.9c0,7.6-2.1,13.6-6.3,18c-4.2,4.4-10.1,6.6-17.7,6.6c-7.6,0-13.5-2.2-17.7-6.6
            c-4.2-4.4-6.3-10.4-6.3-18c0-7.7,2.1-13.8,6.3-18.1c4.2-4.4,10.1-6.6,17.7-6.6c7.6,0,13.5,2.2,17.7,6.6
            C746.7,80.2,748.7,86.2,748.7,93.9z M733.9,94c0-2.8-0.2-5-0.7-6.9c-0.5-1.8-1.1-3.3-1.9-4.4c-0.9-1.2-1.8-2-2.9-2.4
            c-1.1-0.5-2.3-0.7-3.7-0.7c-1.3,0-2.5,0.2-3.5,0.6c-1,0.4-2,1.2-2.9,2.3c-0.8,1.1-1.5,2.5-2,4.4c-0.5,1.9-0.7,4.2-0.7,7.1
            c0,2.8,0.2,5.1,0.7,6.9c0.5,1.8,1.1,3.1,1.8,4.2c0.8,1.1,1.7,1.9,2.9,2.4s2.4,0.7,3.8,0.7c1.2,0,2.3-0.2,3.5-0.7
            c1.2-0.5,2.2-1.2,2.9-2.2c0.9-1.2,1.5-2.6,1.9-4.3C733.7,99.2,733.9,96.9,733.9,94z"/>
        <path class="st0" d="M773.6,55.5l-1.7,43.8h-13.1l-1.7-43.8H773.6z M773.6,117.1h-16.3v-10.9h16.3V117.1z"/>
    </g>
    <g>
        <g>
            <path class="st0" d="M412,250.1v-14c46.4,0,81.7-13.4,105-39.9c17.3-19.8,21.2-39.9,21.3-40.1l13.8,2.5c-0.2,1-4.4,23.6-24,46.2
                C510.2,225.5,475.5,250.1,412,250.1z"/>
        </g>
    </g>
    </svg>
    <p class="errormessage">It seems that something made Kevin the Cat very upset!</p>
    <div class="pagefooter">
            <p class="pagefooter__text">This is an address book with randomly generated people from the Random User Generator API. <a href="https://randomuser.me" class="pagefooter__link"><i>https://randomuser.me</i></a><br />This address book is made by Bryan Kho. Fork on GitHub at <a href="https://github.com/Zt-freak/address-book" class="pagefooter__link"><i>https://github.com/Zt-freak/address-book</i></a><br />Kevin the Cat is a creation by Bryan Kho.</p>
        </div>
    </footer>
    `;
    switch (type) {
        case "ajax":
            document.getElementById("infoDisplayer").innerHTML +=
            `
            <p class="errormessage">Kevin the Cat expected an AJAX response, but he never got one. The disappointment is unbearable.</p>
            `;
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
                    document.getElementById("listDisplayer").innerHTML += "<h3 id='"
                    + key
                    + "' class='letterindicator'>"
                    + peopleList.results[key].name.last.charAt(
                        peopleList.results[key].name.last.lastIndexOf(" ") + 1)
                    + "</h3>";
                    document.getElementById("letterRegister").innerHTML += "<a href='#"
                    + key
                    + "'class='shortcutlink'>"
                    + peopleList.results[key].name.last.charAt(
                        peopleList.results[key].name.last.lastIndexOf(" ") + 1)
                    + "</a><br />";
                }
                else if (peopleList.results[key].name.last.charAt(
                    peopleList.results[key].name.last.lastIndexOf(" ") + 1)
                != peopleList.results[lastKey].name.last.charAt(
                    peopleList.results[lastKey].name.last.lastIndexOf(" ") + 1)
                ) {
                    document.getElementById("listDisplayer").innerHTML += "<h3 id='"
                    + key
                    + "' class='letterindicator'>"
                    + peopleList.results[key].name.last.charAt(
                        peopleList.results[key].name.last.lastIndexOf(" ") + 1)
                    + "</h3>";
                    document.getElementById("letterRegister").innerHTML += "<a href='#"
                    + key
                    + "'class='shortcutlink'>"
                    + peopleList.results[key].name.last.charAt(
                        peopleList.results[key].name.last.lastIndexOf(" ") + 1)
                    + "</a><br />";
                    lastKey = key;
                }
                //Display the name
                displayName(peopleList.results, key);
            }

            return peopleList;
        }, error => {
            console.error('error: ', error);
            displayErrorGraphic("ajax");
        }
    )
}

/*Code to be immediately executed*/

let peopleList = generatePeople();