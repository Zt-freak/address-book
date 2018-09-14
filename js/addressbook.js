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

/*asyncAJAX('https://randomuser.me/api/?results10')
.then(result => {
    console.log('result: ', result);
    var person = result;
    obj = JSON.parse(person);
    //document.getElementById("test").innerHTML += obj.results[0].name.first;
}, error => {
    console.error('error: ', error);
})*/

function writeList(item, index) {
    document.getElementById("test").innerHTML += "index[" + index + "]: " + item + "<br>"; 
}

function generatePeople() {
    asyncAJAX('https://randomuser.me/api/?results=10').then (
        result => {
            console.log('result: ', result);
            var people = result;
            peopleList = JSON.parse(people);

            for (var key in peopleList.results){
                //document.write(peopleList.results[key].gender);
                document.getElementById("test").innerHTML += peopleList.results[key].name.first + " " + peopleList.results[key].name.last + "<br />";
            }
        }, error => {
            console.error('error: ', error);
        }
    )
}

/*Code to be immediately executed*/

generatePeople();
//document.getElementById("test").innerHTML += generatePeople().data;