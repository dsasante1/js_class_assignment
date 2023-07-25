
class Student {
  constructor (name, age, score, courses = []) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.courses = courses;
  }

  studentName () {
    return this.name;
  }

  studentAge () {
    return this.age;
  }

  increaseAge () {
    this.age += 1;
  }

  addCourse (extraCourse) {
    this.courses.push(extraCourse);
    //console.log(this.courses)
  }
}

const newStudent = new Student('enyata', 43, 56, ['js', 'py', 'rs', 'go']);

console.log(newStudent.studentName());
console.log(newStudent.studentAge());
newStudent.increaseAge();
newStudent.increaseAge();
newStudent.addCourse('.ts');
newStudent.addCourse('.dart');
