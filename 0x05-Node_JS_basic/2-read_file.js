const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs
      .readFileSync(path, { encoding: 'utf8' })
      .toString('utf-8')
      .split('\n');

    const numberOfStudents = data.length ? data.length - 1 : 0;
    console.log(`Number of students: ${numberOfStudents - 1}`);

    const fields = {};
    for (const line of data) {
      if (line !== '') {
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }
    }
    delete fields.field;
    for (const field in fields) {
      if (fields[field].length) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
