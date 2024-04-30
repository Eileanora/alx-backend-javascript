const fs = require('fs');

const countStudents = (path) => {
  fs.readFile(path, { encoding: 'utf8' }, (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    }
    const lines = data.split('\n').filter((line) => line.length > 0);
    console.log(`Number of students: ${lines.length - 1}`);
    const fields = {};
    for (const line of lines) {
      const student = line.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }
    delete fields.field;
    for (const field in fields) {
      if (fields[field].length) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  });
};

module.exports = countStudents;
