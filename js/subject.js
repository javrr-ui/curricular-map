const subject = document.querySelectorAll(".subject");
const subjectModal = document.querySelector(".subject-modal-background");

//modal p's
const subjectName = document.querySelector("#subjectName");
const classHours = document.querySelector("#classHours");
const workshopHours = document.querySelector("#workshopHours");
const labHours = document.querySelector("#labHours");
const extraClassHours = document.querySelector("#extraClassHours");
const subjectId = document.querySelector("#subjectId");
const credits = document.querySelector("#credits");

subjectModal.addEventListener("click", e => {

    subjectModal.classList.add("hideModal");
    setTimeout(() => {
        subjectModal.style.display = "none";
    }, 200);

})

subject.forEach(item => {
    item.addEventListener("click", event => {

        subjectName.innerHTML = "Materia: " + item.querySelector(".subject-name").textContent;
        classHours.innerHTML = "Horas de clase: " + item.querySelector(".top-left-square").textContent;
        workshopHours.innerHTML = "Horas de taller: " + item.querySelector(".workshopHours").textContent;
        labHours.innerHTML = "Horas de laboratorio: " + item.querySelector(".top-right-square").textContent;
        extraClassHours.innerHTML = "Horas extra de clase: " + item.querySelector(".bottom-left-square").textContent;
        subjectId.innerHTML = "Clave: " + item.querySelector(".subject-number").textContent;
        credits.innerHTML = "Creditos: " + item.querySelector(".bottom-right-square").textContent;
        showModal();
    })
})

function showModal() {

    subjectModal.style.display = "block";
    subjectModal.classList.remove("hideModal");
}