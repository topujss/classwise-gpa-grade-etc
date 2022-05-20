// Gpa finder
function findGpa(gpa) {
  students.forEach((grade) => {
    if (grade.GPA === gpa) {
      console.log(`
        Student ID: ${grade.id}
        Student Name: ${grade.names}
        Student Class: ${grade.classe}
        Student GPA: ${grade.GPA}
      `);
    }
  });
}

// CGPA finder
function findCgpa(cgpa) {
  students.forEach((CuGpa) => {
    if (CuGpa.CGPA === cgpa) {
      console.log(`
        Student ID: ${CuGpa.id}
        Student Name: ${CuGpa.names}
        Student Class: ${CuGpa.classe}
        Student CGPA: ${CuGpa.CGPA}
      `);
    }
  });
}

// grade finder
findGrade = (grade) => {
  students.forEach((gradeLetter) => {
    if (gradeLetter.grade === grade) {
      console.log(`
        Student ID: ${gradeLetter.id}
        Student Name: ${gradeLetter.names}
        Student Class: ${gradeLetter.classe}
        Student Grade: ${gradeLetter.grade}
      `);
    }
  });
};

// Final result finder
function findRes(finalResult) {
  students.forEach((final) => {
    let determine = '';

    if (final.CGPA >= 3.8) {
      determine = 'PASSED';
    } else if (final.CGPA < 3.8) {
      determine = 'FAILED';
    }

    if (final.CGPA > 3.8) {
      console.log(`
        Student ID: ${final.id}
        Student Name: ${final.names}
        Student Class: ${final.classe}
        Student Grade: ${final.grade}
        Student GPA: ${final.GPA}
        Student CGPA: ${final.CGPA}
        Student Final Result: ${determine}
      `);
    }
  });
}
