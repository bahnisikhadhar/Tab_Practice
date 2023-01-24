const tab = document.querySelectorAll(".tab");
const tabcontent = document.getElementsByClassName("tab_content");

tab.forEach((tabEle) => {
    tabEle.addEventListener("click", (e) => {
        console.log(e);

        for (let i = 0; i < tabcontent.length; i++) { //hiding everything at first
            tabcontent[i].style.display = "none";
        }

        document.getElementById(e.target.innerText).style.display = "block"; // the desired page to show

        if(e.target.innerText == "Home"){
            e.target.classList.add("tab1");
        }
        else if(e.target.innerText == "News"){
            e.target.classList.add("tab2");
        }
        else if(e.target.innerText == "Contact"){
            e.target.classList.add("tab3");
        }
        else if(e.target.innerText == "About"){
            e.target.classList.add("tab4");
        }
    })
})


document.getElementById("default").click();