  /**
   * This function returns an object with a list of San Francisco neighborhoods.
   * It also has an addNeighborhood method that adds a new neighborhood to the list.
   * @returns {object} An object with a list of San Francisco neighborhoods and an addNeighborhood method.
   */
export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }