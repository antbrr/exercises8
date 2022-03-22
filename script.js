
const bikeListElement = document.getElementById("bikeList")
const bikeName = document.getElementById("name")
const bikeGears = document.getElementById("gears")
const addBike = document.getElementById("addBike")

bike_list = []

addBike.addEventListener("click", function(ev){
    ev.preventDefault()
    console.log(bike_list.includes(bikeName.value))
    if(bikeName.value != "" && !(bike_list.some(bike => bike.name === bikeName.value))){
        const bike = {
            name : bikeName.value,
            gears : gears.value
            };
    bike_list.push(bike)
    updateBikes()
    } else alert("Bike name is blank or list already contains that bikename")

});

function updateBikes(){
    bikeListElement.innerHTML =""
    for(let bike of bike_list){
        const newLi = document.createElement("li")
        const content1 = document.createTextNode(bike.name)
        const content2 = document.createTextNode(bike.gears)
        const btn = document.createElement("button")
        const cross = document.createTextNode("X")
        btn.appendChild(cross)
        btn.addEventListener("click",function(){
            bikeListElement.removeChild(newLi)
            const index = bike_list.map(bike => bike.name).indexOf(bike.name);
            if (index > -1) {
                bike_list.splice(index, 1); // 2nd parameter means remove one item only
              }
        })
        newLi.appendChild(content1)
        newLi.appendChild(content2)
        newLi.appendChild(btn)

        bikeListElement.appendChild(newLi)
        bikeName.value=""
        bikeName.focus()
    }
}


    

