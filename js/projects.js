const projectsNumber = 5;
const imgName = "../Art/eggscapeHeader.jpg";
const text = "Here we'll talk about the project, a quick summary and a button.";
const textList = ["Created by me", "Woooah", "And it has this too!"];
const projectName = "PROJECT NAME";
const date = ["Apr", "08", "2021"];

function AddProjects(){
    var project = document.getElementById('projects');
    for (let index = 0; index < projectsNumber; index++) {
        project.innerHTML += `<img src="${imgName}" alt="Project" class="projectBox"></img>
        <div class="projectSidebox">
        <div class="projectSideboxText">
        <p class="white italic" style="font-size: 12px">${text}</p>
        <ul>
        <li class="title i" style="font-size: 14px">${textList[0]}</li>
        <li class="italic" style="font-size: 14px">${textList[1]}</li>
        <li class="italic" style="font-size: 14px">${textList[2]}</li>
        </ul>
        </div>
        </div>
        <div class="projectSideboxBar">
            <div class="projectSideboxBarText">
                <h3 class="black">${projectName}</h3> 
            </div>
        </div>
        <div class="projectDatebar">
            <h3 class="black" style="font-size: 12px">${date[0]}</h3>
            <h3 class="black" style="font-size: 25px">${date[1]}</h3>
            <h3 class="black" style="font-size: 12px">${date[2]}</h3>
        </div>`
    }
}

AddProjects()