const subject = document.querySelectorAll(".subject");


subject.forEach(item => {
    item.addEventListener("click", event => {
        
        try {
            alert(item.querySelector(".subject-name").textContent);
        }catch(error){
            alert("Something weird happend...\n"+error)
        }

    })

})