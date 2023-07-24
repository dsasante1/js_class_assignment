
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
    // console.log(this.courses)
  }
}

const g = new Student('enyata', 43, 56, ['js', 'py', 'rs', 'go']);

console.log(g.studentName());
console.log(g.studentAge());
g.increaseAge();
g.increaseAge();
g.addCourse('.ts');
g.addCourse('.dart');
