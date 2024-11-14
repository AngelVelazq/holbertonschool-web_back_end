class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new Error('Students must be an array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('Students must be an array');
    }
    this._students = value;
  }
}

// Usage example
const course = new HolbertonCourse('JavaScript', 12, ['Alice', 'Bob', 'Charlie']);
console.log(course.name); // Output: JavaScript
console.log(course.length); // Output: 12
console.log(course.students); // Output: ['Alice', 'Bob', 'Charlie']
course.name = 'Python';
console.log(course.name); // Output: Python
course.length = 10;
console.log(course.length); // Output: 10
course.students = ['Alice', 'Bob'];
console.log(course.students); // Output: ['Alice', 'Bob']