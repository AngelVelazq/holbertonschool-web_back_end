class Currency {
    /**
     * Constructor for the Currency class
     * @param {string} code - The currency code
     * @param {string} name - The currency name
     */
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    /**
     * Getter for the code attribute
     * @returns {string} The currency code
     */
    get code() {
      return this._code;
    }
  
    /**
     * Setter for the code attribute
     * @param {string} value - The new currency code
     */
    set code(value) {
      this._code = value;
    }
  
    /**
     * Getter for the name attribute
     * @returns {string} The currency name
     */
    get name() {
      return this._name;
    }
  
    /**
     * Setter for the name attribute
     * @param {string} value - The new currency name
     */
    set name(value) {
      this._name = value;
    }
  
    /**
     * Returns the full currency information in the format "name (code)"
     * @returns {string} The full currency information
     */
    displayFullCurrency() {
      return `${this.name} (${this.code})`;
    }
  }
  
  export default Currency;