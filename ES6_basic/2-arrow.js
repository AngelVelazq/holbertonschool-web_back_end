/**
 * Returns an object with a list of San Francisco neighborhoods.
 * The returned object has a single method, addNeighborhood,
 * which takes a new neighborhood name and adds it to the list.
 * @return {Object} - An object with addNeighborhood method, and a list of neighborhoods.
 */
export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }