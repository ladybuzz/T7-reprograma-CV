const skillsList = [
        {skill:'HTML', score:1},
        {skill:'CSS', score: 2},
        {skill:'batata', score: 3},
        {skill:'batata', score: 4},
        {skill:'batata', score: 5},
        {skill:'batata', score: 6},
        {skill:'batata', score: 7},
        {skill:'batata', score: 8},
        {skill:'batata', score: 9},
        {skill:'batata', score: 10}
    ]

const skillsListDOM = document.getElementById('skills-list')
let skillsListHTML = ''

function createSkill(skill, score) {
    let skillHTML = 
    `<div class="skill">
        <span class="skill-name">${skill}</span>
        <div class="points"\n>`
    for (let i=1; i<=score;i++){
        skillHTML+=`<div class="point has-point"></div>\n`
    }
    for (let i=1; i<=10-score;i++){
        skillHTML+=`<div class="point"></div>\n`
    }
    skillHTML+=
        `</div>
    </div>`
    return skillHTML
}
skillsList.forEach((item)=>{
    skillsListHTML+=createSkill(item.skill,item.score)
})

skillsListDOM.innerHTML = `<h2>No que me destaco</h2>\n ${skillsListHTML}`
