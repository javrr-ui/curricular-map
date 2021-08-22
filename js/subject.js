const subject = document.querySelectorAll(".subject");


subject.forEach(item => {
    item.addEventListener("click", event => {
        alert(item);
    })

})