class Building {
    constructor(sqft) {
      if (new.target === Building) {
        throw new Error("Building is an abstract class and cannot be instantiated directly.");
      }
  
      this._sqft = sqft;
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method
    evacuationWarningMessage() {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }
  
  // Example of an extended class that properly implements evacuationWarningMessage
  class OfficeBuilding extends Building {
    evacuationWarningMessage() {
      return "Please evacuate the building immediately!";
    }
  }
  
  // Testing the classes
  try {
    const office = new OfficeBuilding(5000);
    console.log(office.sqft); // Output: 5000
    console.log(office.evacuationWarningMessage()); // Output: Please evacuate the building immediately!
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    const building = new Building(3000); // Should throw an error
  } catch (error) {
    console.error(error.message); // Output: Building is an abstract class and cannot be instantiated directly.
  }
  