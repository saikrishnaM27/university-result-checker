// const resultContainer = document.querySelector(".resultContainer");
// resultContainer.style.display = 'none';

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", dataSubmitted);

const resultContainer = document.querySelector(".resultContainer");
const formContainer = document.querySelector(".formContainer");
const enterHtNoAgain = document.querySelector("#enterHtNoAgain");

const showResult = () => {
    return resultContainer.style.display = "block";
}
const hideResult = () => {
    return resultContainer.style.display = "none";
}

const showForm = () => {
    return formContainer.style.display = "block";
}
const hideForm = () => {
    return formContainer.style.display = "none";
}

const showEnterHtNoAgain = () => {
    return enterHtNoAgain.style.display = "block";
}
const hideEnterHtNoAgain = () => {
    return enterHtNoAgain.style.display = "none";
}

const subjects = ['HTML', 'CSS', 'JavaScript', 'BootStrap', 'ReactJS', 'Software Engineering']
const marks = [];
const studentSubject = document.querySelectorAll(".subject");
const studentMarks = document.querySelectorAll("#studentResult tr td:nth-child(4)");
const studentResult = document.querySelectorAll("#studentResult tr td:nth-child(5)");
const result = document.getElementById("result");
const studentName = document.querySelector("#studentdetails tr td:nth-child(2)");
const studentRollNo = document.querySelector("#studentdetails tr td:nth-child(1)");
const semisterNo = Math.ceil(Math.random() * 6);
const semister = document.querySelector("#studentdetails tr:nth-child(3) td:nth-child(1)");
const date = document.querySelector("#studentdetails tr:nth-child(3) td:nth-child(2)");
const currentDate = new Date();
console.log(semister)

for (let i = 0; i < subjects.length; i++) {
    marks.push(Math.round(Math.random() * 100));
    studentSubject[i].innerHTML = subjects[i];
    studentMarks[i].innerText = marks[i];
    if (marks[i] < 40) {
        studentResult[i].innerText = "Fail";
    } else {
        studentResult[i].innerText = "Pass";
    }
}
let finalResult = marks.every(mark => mark >= 40);
if (finalResult) {
    result.innerText = "PASS"
}
else {
    result.innerText = "FAIL"
}

// const studentSubject = document.querySelectorAll(".subject");
// const studentMarks = document.querySelectorAll("#studentResult tr td:nth-child(4)");
// for (let i = 0; i < studentSubject.length; i++) {
//     studentSubject[i].innerHTML = subjects[i];
//     studentMarks[i].innerText = marks[i];
// }





function dataSubmitted() {
    studentData = [];
    studentData[0] = document.getElementById("studentHTNo").value;
    studentData[1] = document.getElementById("studentName").value;

    if (studentData[0] !== '' && studentData[1] !== '') {
        hideForm();
        showResult();
        showEnterHtNoAgain();
        studentName.innerHTML = `<b>Student Name: </b>${studentData[1]}`;
        studentRollNo.innerHTML = `<b>RollNo: </b>${studentData[0]}`;
        semister.innerHTML = `<b>Semister</b>: ${semisterNo}`;
        date.innerHTML = `<b>Date: </b> ${currentDate}`;
    } else {
        alert("Please Enter Details to Process");
    }

}


