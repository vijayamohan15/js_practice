const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`


//Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON);

// -Stringify the age 
const age = 250;
const ageJSON = JSON.stringify(age);
console.log(ageJSON);

// -Stringify the isMarried variable
const isMarried = true;
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

// -Stringify the student object
const student = {
    firstName:'Aaaa',
    lastName:'Ye',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
    };
    const studentJSON = JSON.stringify(student);
    console.log(studentJSON);

// -Stringify the students object with only firstName, lastName and skills properties
const students = JSON.parse(txt);
const studentsFiltered = {};
for (let student in students) {
studentsFiltered[student] = {
firstName: students[student].firstName,
lastName: students[student].lastName,
skills: students[student].skills
};
}
const studentsJSON = JSON.stringify(studentsFiltered);
console.log(studentsJSON);