export default function getNeighborhoodsList() {
    const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    this.addNeighborhood = (newNeighborhood) => {
      // Add the new neighborhood to the list
      sanFranciscoNeighborhoods.push(newNeighborhood);
      // Return the updated list
      return sanFranciscoNeighborhoods;
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }
