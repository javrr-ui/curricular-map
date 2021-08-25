const subject = document.querySelectorAll(".subject");


subject.forEach(item => {
    item.addEventListener("click", event => {

        try {
            const subject = {
                subjectName: item.querySelector(".subject-name").textContent,
                classHours: item.querySelector(".top-left-square").textContent,
                workshopHours: item.querySelector(".workshopHours").textContent,
                labHours: item.querySelector(".top-right-square").textContent,
                extraClassHours: item.querySelector(".bottom-left-square").textContent,
                subjectId: item.querySelector(".subject-number").textContent,
                credits: item.querySelector(".bottom-right-square").textContent,
            }
            const subjectKeys = ["Materia: ", "Horas de clase: ", "Horas de taller: ",
                "Horas de laboratorio: ", "Horas extra de clase: ", "Clave de materia: ", "Creditos: "];
            const subjectInfo = [];
            var i = 0;
            Object.values(subject).forEach(val => {

                if (val === null || val === undefined || val == "") {
                    subjectInfo.push(subjectKeys[i] + "0" + "\n")
                } else {
                    subjectInfo.push(subjectKeys[i] + val + "\n")
                }
                i++;
            })
            alert(subjectInfo.toString().replace(/,/g, ""));
        } catch (error) {
            alert("Something weird happend...\n" + error)
        }
    })
})