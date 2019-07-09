const skillsList = [
        {skill:'HTML', score:10},
        {skill:'CSS', score: 8},
        {skill:'SASS', score: 8},
        {skill:'JAVASCRIPT', score: 8},
        {skill:'JQUERY', score: 7},
        {skill:'GIT/GITHUB', score: 9},
        {skill:'BOOTSTRAP', score: 10},
        {skill:'API', score: 7},
        {skill:'REACT', score: 8},
        {skill:'AXIOS', score: 7},
        {skill:'NODE.JS', score: 4},
        {skill:'UX', score: 9},
        {skill:'PHOTOSHOP', score: 7},
        {skill:'FIGMA', score: 7},
        {skill:'SCRUM', score: 8}
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
