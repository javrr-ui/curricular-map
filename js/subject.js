const subject = document.querySelectorAll(".subject");


subject.forEach(item => {
    item.addEventListener("click", event => {

        const subject = { 
            subjectName: item.querySelector(".subject-name").textContent,
            classHours: item.querySelector(".top-left-square").textContent,
            workshopHours: item.querySelector(".workshopHours").textContent,
            labHours: item.querySelector(".top-right-square").textContent,
            extraClassHours: item.querySelector(".bottom-left-square").textContent,
            subjectId: item.querySelector(".subject-number").textContent,
            credits: item.querySelector(".bottom-right-square").textContent,
        }
        console.log("materia: "+subject.subjectName)
        try {
            alert(item.querySelector(".subject-name").textContent);
        }catch(error){
            alert("Something weird happend...\n"+error)
        }

    })

})