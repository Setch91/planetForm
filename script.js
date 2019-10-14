// Write your JavaScript code here!
window.addEventListener("load",function(){
   let form = document.querySelector("form")
   form.addEventListener("submit",function(event){
      let pilotInput = document.querySelector("input[name=pilotName]")
      let copilotInput = document.querySelector("input[name=copilotName]")
      let fuelInput = document.querySelector("input[name=fuelLevel]")
      let cargoInput = document.querySelector("input[name=cargoMass]")
      if (pilotInput.value === ""|| copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === ""){
         alert("All fields are required!")
         event.preventDefault()
      } 
      else if (typeof pilotInput.value !== "string" || typeof copilotInput.value !== "string" || isNaN(fuelInput.value) === true || isNaN(cargoInput.value) === true){
         alert("Incorrect values!")
         event.preventDefault()
      }

   })
   form.addEventListener("submit",function(){
      let pilotInput = document.querySelector("input[name=pilotName]")
      let copilotInput = document.querySelector("input[name=copilotName]")
      // let fuelInput = document.querySelector("input[name=fuelLevel]")
      // let cargoInput = document.querySelector("input[name=cargoMass]")
      let pilotName1 = document.getElementById("pilotStatus")
      let copilotName1 = document.getElementById("copilotStatus")
      pilotName1.innerhtml = `Pilot ${pilotInput} is ready for launch`
      copilotName1.innerHTML = `Co-Pilot ${copilotInput} is ready for launch`
      console.log(pilotName1)
      console.log(copilotName1)
   })
})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

/*Too low of fuel level
if (fuelInput.value < 10000){
   let fuelLevel = document.getElementById("fuelStatus")
   let noLaunch = document.getElementById("launchStatus")
   faultyItems.style.visibility("visible")
   fuelLevel.innerHTML = "Fuel level too low for Takeoff."
   noLaunch.innerHTML = "Shuttle Not Ready For Launch"
   noLaunch.style.color("red")
}
*/

/*Cargo too heavy
else if (cargoInput.value > 10000){
   let cargoLevel = document.getElementById("cargoStatus")
   let noLaunch = document.getElementById("launchStatus")
   faultyItems.style.visibility("visible")
   cargoLevel.innerHTML = "Too much mass for Takeoff."
   noLaunch.innerHTML = "Shuttle Not Ready For Launch"
   noLaunch.style.color("red")
}
*/

/*Green Light
else {
   let launchGo = document.getElementById("launchStatus")
   launchGo.innerHTML = "Shuttle Is Ready For Launch"
   launchGo.style.color("green")
}
*/