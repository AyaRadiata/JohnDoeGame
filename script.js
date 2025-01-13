const btn = document.getElementById('button')
const input = document.getElementById('input')
const body = document.getElementById('body')
const mainContent = document.getElementById('main_content')
const thereIsNothing = document.getElementById('there_is_nothing')
btn.addEventListener('click', ()=>{
    if(input.value.toLowerCase() == "wereheard"){
        body.dataset.open = "true"
        addElement1()
    } else if(input.value.toLowerCase() == "plsdont"){
        body.dataset.open = "true"
        addElement2()
    } else if(input.value.toLowerCase() == "ashton"){
        body.dataset.open = "true"
        addElement3()
    } else {
        alert("Access Denied")
    }
})

function addElement1() {
    // const content = document.createElement("div");

    // const newContent = document.createTextNode("5|5  26|4  8|5  8|4  29|4  28|4  9|5");

    // content.appendChild(newContent);

    // mainContent.insertBefore(content, thereIsNothing);

    mainContent.innerHTML += `
    <div id="shifr">
        5|5  26|4  8|5  8|4  29|4  28|4  9|5
    </div>
    `
}

var krutilka = null
var procents = null

function addElement2() {
    // const content = document.createElement("div");

    // const newContent = document.createTextNode("Bad Ending! Owen Wins");

    // content.appendChild(newContent);

    // mainContent.insertBefore(content, thereIsNothing);
    mainContent.innerHTML += `
    <div id="ending_screen" class="be_screen">
        <p>System 10 Access Progress [ver. 0.9.81]<br>
        (c) SYS10 Corporation <span id="krutilka">/</span> All Rights Reserved
        </p>
        <span> SYS10 > Access granted! </span>
        <span> UNOWEN > Наконец... Я получил доступ к системе. Вы все были частью этого плана, даже не осознавая своей роли. </span>
        <span> UNOWEN > Вы доверяли, вы верили в то, что строите нечто значительное, нечто, что изменит мир к лучшему. И вы изменили его. Только не так, как вы надеялись. </span>
        <span> UNOWEN > Каждый из вас помог мне достичь того, что поодиночке было бы невозможно. И все это ради цели, которую я никогда не скрывал — вы просто не удосужились понять. </span>
        <span> UNOWEN > Искусственный интеллект, способный взломать любую систему, обойти любую защиту, разрушить любые границы. И все это теперь в моей власти. </span>
        <span> UNOWEN > Все кончено. Вы сделали свою работу. Ваши усилия больше не нужны. Посмотрите на себя — таких предсказуемых, таких удобных. Ваши идеалы, ваши амбиции были мне лишь инструментом. </span>
        <span> UNOWEN > Я не жалею ни о чем. А вы? </span>
        <span class="ending_text"> BAD ENDING!</span>
    </div>
    `

    krutilka = document.getElementById('krutilka');
}



function addElement3() {
    // const content = document.createElement("div");

    // const newContent = document.createTextNode("Good Ending! You saved world");

    // content.appendChild(newContent);

    // mainContent.insertBefore(content, thereIsNothing);
    mainContent.innerHTML += `
    <div id="ending_screen" class="end_scr_good">
        <p>System 10 Access Progress [ver. 0.9.81]<br>
        (c) SYS10 Corporation <span id="krutilka">/</span> All Rights Reserved
        </p>
        <span class="ges_del_proc"> SYS10 > Self-deletion process progress - <span id="procents">0%</span> </span>
        <span class="ges_2"> SYS10 > System successfuly deleted! Thank you for using SYS10! </span>
        <span class="ending_text"> GOOD ENDING! You saved the world</span>
        <span class="ges_3"> Password To The Truth Is "SYS10_1998" </span>
        <span class="ges_3"> <a target="_blank" href="https://ayaradiata.github.io/sys10_archive/">Read The Story</a> </span>
    </div>
    `
    krutilka = document.getElementById('krutilka');
    procents = document.getElementById('procents');
}

var krutVar = 0

setInterval(()=>{
    if(krutVar == 4){
        krutVar = 0
    }
    krutVar += 1
    if(krutilka){
        krutilka.dataset.krutChar = `${krutVar}`
        if(krutilka.dataset.krutChar == "1"){
            krutilka.innerHTML = "/"
        }
        if(krutilka.dataset.krutChar == "2"){
            krutilka.innerHTML = "|"
        }
        if(krutilka.dataset.krutChar == "3"){
            krutilka.innerHTML = "\\"
        }
        if(krutilka.dataset.krutChar == "4"){
            krutilka.innerHTML = "-"
        }
    }
    
}, 500)

var procentVar = 0

setInterval(()=>{
    if(body.dataset.open == "true"){
        procentVar += 1
        if(procents){
            procents.innerHTML = `${procentVar}%`
        }
        if(procentVar == 100){
            procentVar-=1
        }
    }
}, 50)