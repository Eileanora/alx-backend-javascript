export default class HolbertonCourse {
  static validateType(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    if (students.every((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }

  constructor(name, length, students) {
    HolbertonCourse.validateType(name, length, students);
    /* eslint-disable */
    this._name = name;
    this._length = length;
    this._students = students;
  }
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    HolbertonCourse.validateType(newName, this._length, this._students);
    this._name = newName;
  }

  set length(newLength) {
    HolbertonCourse.validateType(this._name, newLength, this._students);
    this._length = newLength;
  }

  set students(newStudents) {
    HolbertonCourse.validateType(this._name, this._length, newStudents);
    this._students = newStudents;
  }
}
