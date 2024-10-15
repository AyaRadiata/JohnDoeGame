const btn = document.getElementById('button')
const input = document.getElementById('input')
const body = document.getElementById('body')
const mainContent = document.getElementById('main_content')
const thereIsNothing = document.getElementById('there_is_nothing')
btn.addEventListener('click', ()=>{
    if(input.value == "19915152"){
        body.dataset.open = "true"
        addElement1()
    } else if(input.value == "Alexandr"){
        body.dataset.open = "true"
        addElement2()
    } else {
        alert("not right")
    }
})

function addElement1() {
    const content = document.createElement("div");

    const newContent = document.createTextNode("12|4 9|4 26|4 26|4 29|4");

    content.appendChild(newContent);

    mainContent.insertBefore(content, thereIsNothing);
}

function addElement2() {
    const content = document.createElement("div");

    const newContent = document.createTextNode("not bad");

    content.appendChild(newContent);

    mainContent.insertBefore(content, thereIsNothing);
}