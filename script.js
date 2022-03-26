
//Retrieving HTML Elements
const bikeListElement = document.getElementById("bikeList")
const bikeName = document.getElementById("name")
const bikeGears = document.getElementById("gears")
const addBike = document.getElementById("addBike")

//Initializing empty bike array
bike_list = []

//Event listener for the add bike button
addBike.addEventListener("click", function (ev) {
    //Prevent page reload
    ev.preventDefault()
    //If bike name is empty or the bike name is already in the list, STOP.
    if (bikeName.value != "" && !(bike_list.some(bike => bike.name === bikeName.value))) {
        const bike = {
            name: bikeName.value,
            gears: gears.value
        };
        bike_list.push(bike)
        updateBikes()
    } else alert("Bike name is blank or list already contains that bikename")

});

function updateBikes() {
    bikeListElement.innerHTML = ""
    for (let bike of bike_list) {
        let newLi = document.createElement("li")
        newLi.innerHTML = `${bike.name}  ${bike.gears} `
        let btn = document.createElement("button")
        let cross = document.createTextNode("X")
        btn.appendChild(cross)
        newLi.appendChild(btn)
        bikeListElement.appendChild(newLi)
        bikeName.value = ""
        bikeName.focus()
        btn.addEventListener("click", function () {
            //Remove element from page
            bikeListElement.removeChild(newLi)
            //Remove element from array
            const index = bike_list.map(bike => bike.name).indexOf(bike.name);
            if (index > -1) {
                bike_list.splice(index, 1); // 2nd parameter means remove one item only
            }
        })
       
    }
}