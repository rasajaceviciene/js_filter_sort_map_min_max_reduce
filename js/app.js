(()=>{

    //Array.prototype.filter()

    console.log("Duomenu filtravimas");

    const students = [
        "Ieva",
        "Tomas",
        "Kristina",
        "Toma"
    ];

    const filteredStudents = students.filter((student)=>student.length > 4);

    console.log(filteredStudents);

    const group = [
        {
            id: 1,
            firstName: "Jonas",
            lastName: "Jonaitis",
            grade: 8.1
        },
        {
            id: 2,
            firstName: "Jurgis",
            lastName: "Jurginis",
            grade: 6.7
        },
        {
            id: 3,
            firstName: "Liepa",
            lastName: "Liepaite",
            grade: 9.2
        },
        {
            id: 4,
            firstName: "Petras",
            lastName: "Petraitis",
            grade: 7.4
        },
        {
            id: 5,
            firstName: "Grazina",
            lastName: "Grazulyte",
            grade: 5.9
        },
        {
            id: 6,
            firstName: "Lina",
            lastName: "Lukaityte",
            grade: 8.8
        }
    ];

    const filteredGroup = group.filter((student)=>student.grade >= 7);

    console.log(filteredGroup);

    // studentai, kuriu vardas ilgesnis uz 5 simbolius, o ivertinimas daugiau kaip 6

    const filteredGroupNameGrade = group.filter((student)=>
        student.firstName.length > 5 && student.grade > 6);

    console.log(filteredGroupNameGrade);

    //Array.prototype.map()
    /* funkcija yra naudojama tam, kad būtų galima perrašyti masyvą 
    pritaikant kiekvienam jo elementui nurodytą funkciją. 
    Ji grąžina naują masyvą su transformuotais elementais, 
    nekeičiant originalaus masyvo. */

    console.log(`--------------------`);

    console.log("Map naudojimas");

    const updatedGrades = group.map(student=>({
        ...student,                                //visi objekto properciai,isskyrus grade bus perkopijuoti
        grade: (student.grade * 1.1).toFixed(2)   //grade bus pakeistas pagal salyga
    }))

    console.log(updatedGrades);

    //sintakse gali buti ir tokia:

    const updatedGradesFull = group.map(student=> {
        return{
            ...student,
            grade: (student.grade * 1.1).toFixed(2)
        }                                            // {} tam, kad grazintu, kaip objekta
    })                                               // { return } = (  )

    console.log(updatedGradesFull);

    //grazinti visus studentu duomenis, bet vardo tik 3 raides

    const updatedFirstName = group.map(student=>({
        ...student,
        firstName: student.firstName.substring(0,3)
    }))

    console.log(updatedFirstName);

    console.log(group[0].firstName.substring(0,3));

    //Array.prototype.sort()

    console.log(`--------------------`);

    console.log("Sort naudojimas");

    const numbers = [2, 100, 9, 0, 20, 99, 11];

    console.log(`Not sorted ${numbers}`);

    console.log(`Sorted ${numbers.sort()}`);

    const items = ["Ieva", "Karolis", "Antanas", "Algis"];

    console.log(`Not sorted ${items}`);

    console.log(`Sorted ${items.sort()}`);

    console.log(`grupes duomenu (studentu) rusiavimas`);

    const sortedGroup = group.sort((a, b)=>{
        if(a.grade < b.grade) return -1;      // sukeitus vietomis ir parasius 1, pasikeis rusiavimo tvarka
        if(a.grade > b.grade) return 1;       // sukeitus vietomis ir parasius -1, pasikeis rusiavimo tvarka
        return 0;
    })

    console.log(sortedGroup);

    //Math.min()
    //Math.max()

    console.log(`--------------------`);

    console.log("Min irr Max naudojimas");

    console.log(Math.min(...numbers));

    console.log("Maziausias vidurkis ");

    const studentsMinGrade = Math.min(...group.map(student => student.grade))

    console.log(studentsMinGrade);

    console.log("Didziausias vidurkis ");

    const studentsMaxGrade = Math.max(...group.map(student => student.grade))

    console.log(studentsMaxGrade);

    console.log("Studentas, kurio vidurkis maziausias");

    const grades = group.map(student => student.grade);
    console.log(`Grades: `, grades);

    const minGrade = Math.min(...grades);
    console.log(`Min grade: `, minGrade);

    const studentWithMinGrade = group[grades.indexOf(minGrade)];
    console.log(`Index construction:`, grades.indexOf(minGrade));
    console.log(`Full students list: `, group);

    console.log(studentWithMinGrade);

    //Array.prototype.reduce()

    console.log(`--------------------`);

    console.log("Reduce naudojimas");

    const array1 = [1, 2, 3, 4];

    const initialValue = 0;

    const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );

    console.log(sumWithInitial);

    console.log(`--------------------`);

    const sumNumbers = (...number) =>{
        return number.reduce((acc, currV) => acc + currV, 0);
    }

    console.log(sumNumbers(2,10,22,5,8,18));

    //Apskaiciuoti visu studentu vidurki

    const studentsGradesTotal = grades.reduce((acc, currV) => acc + currV, 0);
    const studentsNumber = group.length;
    const studentsGradesAverage = (studentsGradesTotal / studentsNumber).toFixed(2);

    console.log(`Studentu balu suma: `, studentsGradesTotal);
    console.log(`Studentu skaicius:`, studentsNumber);
    console.log(`Studentu balu vidurkis:`, studentsGradesAverage);

    //Paprastesnis variantas

    console.log(`--------------------`);
    
    console.log(`Paprastesnis variantas`);

    const groupStudentsGradesTotal = group.reduce((sum, student) => sum + student.grade, 0);
    const groupStudentsGradesAverage = (groupStudentsGradesTotal / group.length).toFixed(2);
    console.log(`Studentu balu vidurkis: `, groupStudentsGradesAverage);


 


    

})();