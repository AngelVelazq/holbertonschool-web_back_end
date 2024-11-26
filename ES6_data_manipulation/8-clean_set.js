export default function cleanSet(set, startString) {
    if (!(set instanceof Set) || typeof startString !== 'string') {
      return '';
    }
  
    if (startString === '') {
      return '';
    }
  
    return [...set]
      .filter((value) => typeof value === 'string' && value.startsWith(startString))
      .map((value) => value.slice(startString.length))
      .join('-');
  }
  