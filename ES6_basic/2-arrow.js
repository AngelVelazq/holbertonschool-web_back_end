export default function getNeighborhoodsList() {
  /* eslint-disable no-undef */
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      /* eslint-disable no-console */
      return this.sanFranciscoNeighborhoods;
    };
  }
