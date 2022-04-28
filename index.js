// Code your solution here

function findMatching(drivers, driverName){
    return drivers.filter(function(name){
     if(name.toLowerCase() === driverName.toLowerCase()){
         return name
     }
    })
}
