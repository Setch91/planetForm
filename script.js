// Write your JavaScript code here!
window.addEventListener("load",function(){
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         let planet = document.getElementById("missionTarget")
         let random = Math.floor(Math.random()*6)
         planet.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[random].name}</li>
            <li>Diameter: ${json[random].diameter}</li>
            <li>Star: ${json[random].star}</li>
            <li>Distance from Earth: ${json[random].distance}</li>
            <li>Number of Moons: ${json[random].moons}</li>
         </ol>
         <img src="${json[random].image}">`
      })
   })
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
      else if (isNaN(pilotInput.value) === false || isNaN(copilotInput.value) === false || isNaN(fuelInput.value) === true || isNaN(cargoInput.value) === true){
         alert("Incorrect values!")
         event.preventDefault()
      }
      let pilotName1 = document.getElementById("pilotStatus")
      let copilotName1 = document.getElementById("copilotStatus")
      pilotName1.innerHTML = `Pilot ${pilotInput.value} is ready for launch`
      copilotName1.innerHTML = `Co-Pilot ${copilotInput.value} is ready for launch`
      let faultyItems = document.getElementById("faultyItems")
      if (fuelInput.value < 10000 && cargoInput.value > 10000){
         let fuelLevel = document.getElementById("fuelStatus")
         let cargoLevel = document.getElementById("cargoStatus")
         let noLaunch = document.getElementById("launchStatus")
         faultyItems.style.visibility = "visible"
         fuelLevel.innerHTML = "Fuel level too low for Takeoff."
         cargoLevel.innerHTML = "Too much mass for Takeoff."
         noLaunch.innerHTML = "Shuttle Not Ready For Launch"
         noLaunch.style.color = "red"
      }
      else if (cargoInput.value > 10000){
         let cargoLevel = document.getElementById("cargoStatus")
         let noLaunch = document.getElementById("launchStatus")
         faultyItems.style.visibility = "visible"
         cargoLevel.innerHTML = "Too much mass for Takeoff."
         noLaunch.innerHTML = "Shuttle Not Ready For Launch"
         noLaunch.style.color = "red"
      }
      else if (fuelInput.value < 10000){
         let fuelLevel = document.getElementById("fuelStatus")
         let noLaunch = document.getElementById("launchStatus")
         faultyItems.style.visibility = "visible"
         fuelLevel.innerHTML = "Fuel level too low for Takeoff."
         noLaunch.innerHTML = "Shuttle Not Ready For Launch"
         noLaunch.style.color = "red"
      }
      else {
         let launchGo = document.getElementById("launchStatus")
         let fuelLevel = document.getElementById("fuelStatus")
         let cargoLevel = document.getElementById("cargoStatus")
         faultyItems.style.visibility = "hidden"
         cargoLevel.innerHTML = "Cargo mass low enough for launch"
         fuelLevel.innerHTML = "Fuel level high enough for launch"
         launchGo.innerHTML = "Shuttle Is Ready For Launch"
         launchGo.style.color = "green"
      }
      event.preventDefault()
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
   faultyItems.style.visibility("visible")
   launchGo.innerHTML = "Shuttle Is Ready For Launch"
   launchGo.style.color("green")
}
*/