const btn = document.getElementById('button')
const input = document.getElementById('input')
const body = document.getElementById('body')
btn.addEventListener('click', ()=>{
    if(input.value == "19915152"){
        body.dataset.open = "true"
    } else {
        alert("not right")
    }
})