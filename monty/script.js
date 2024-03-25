var button = document.getElementById("button");
var carDoor = document.getElementById("car_door");
var userDoor = document.getElementById("user_door");
var removeDoorTag = document.getElementById("remove_door");
var initial = document.getElementById("initial");
var swap = document.getElementById("swap");

button.onclick = (event) => {
    event.preventDefault();
    var iterations = 10000;
    var switchCounter = 0;
    var stayCounter = 0;

    for(i=0;i< iterations;i++){

        var car = Math.ceil(Math.random() * 3);
        carDoor.innerText = "The car is behind door number: " + car.toString();
    
        var userSelection = Math.ceil(Math.random() * 3);
        userDoor.innerText = "The user selected door number: " + userSelection.toString();
    
        var removedDoor = removeDoor(car,userSelection);
        removeDoorTag.innerText = "The door that was removed: " + removedDoor;
    
        if(car === userSelection){
            stayCounter++;
           
        } else{
            switchCounter++;
            
        }
    }
    initial.innerText = stayCounter/ iterations;
    swap.innerText = switchCounter/ iterations;
}

function removeDoor(carDoor,userDoor){
    var doors =[1,2,3]
    
    const doorIndex = doors.indexOf(carDoor);
    if (doorIndex > -1) { // only splice array when item is found
    doors.splice(doorIndex, 1); // 2nd parameter means remove one item only
    }

    const userIndex = doors.indexOf(userDoor);
    if (userIndex > -1) { // only splice array when item is found
    doors.splice(userIndex, 1); // 2nd parameter means remove one item only
    }

    return doors[Math.floor(Math.random() * doors.length)].toString()

}