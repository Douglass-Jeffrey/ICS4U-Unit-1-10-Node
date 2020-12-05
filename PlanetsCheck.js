/*
* This program finds a planets position in the solar system when the name of 
* said planet is inputted.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-04
* Class PlanetsCheck.
*/


// prompt for user input
const prompt = require('prompt-sync')({sigint: true});

// Enum containing planets and their location
const PlanetsEnum = {
  MERCURY: '1',
  VENUS: '2',
  EARTH: '3',
  MARS: '4',
  JUPITER: '5',
  SATURN: '6',
  URANUS: '7',
  NEPTUNE: '8'
};

try {
  // get planet name
  const planetInputLower = prompt("Enter the planet name: ");
  
  // convert planet name to upper to prevent stray capitals
  const planetInput = planetInputLower.toUpperCase();
  console.log();

  // Process (Case statement to check each aspect of the enum for its position)
  let planetPosition;
  switch (planetInput) {
    
    // If user inputs "mercury":
    case "MERCURY":
      planetPosition = PlanetsEnum.MERCURY;
      break;
      
    // If user inputs "venus":
    case "VENUS":
      planetPosition = PlanetsEnum.VENUS;
      break;
      
    // If user inputs "earth":
    case "EARTH":
      planetPosition = PlanetsEnum.EARTH;
      break;
      
    // If user inputs "mars":
    case "MARS":
      planetPosition = PlanetsEnum.MARS;
      break;
      
    // If user inputs "jupiter":
    case "JUPITER":
      planetPosition = PlanetsEnum.JUPITER;
      break;
      
    // If user inputs "saturn":
    case "SATURN":
      planetPosition = PlanetsEnum.SATURN;
      break;
      
    // If user inputs "uranus":
    case "URANUS":
      planetPosition = PlanetsEnum.URANUS;
      break;
      
    // If user inputs "neptune":
    case "NEPTUNE":
      planetPosition = PlanetsEnum.NEPTUNE;
      break;
      
    // default case of the enumeration is null
    default:
      planetPosition = null;
  }

  // Output (if planet position remains at default an error has occured)
  if (planetPosition == null) {
    console.log("Please input only valid planet names");
  } else {
    
    console.log(planetInputLower + " is planet number " + planetPosition
                + " in the solar system.");
  }

  // catches improper inputs
} catch (err) {
  console.log("Please input only valid planet names");
}