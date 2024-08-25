function createStudent (name, school, year, age) {
    return {
        name, 
        school,
        year,
        age,
    }
}
let student1 = createStudent("pedro", "elite", 2, 16) 
console.log(student1)