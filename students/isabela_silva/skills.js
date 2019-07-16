const skillsList = [
        {skill:'HTML5', score: 10},
        {skill:'CSS3', score: 9},
        {skill:'SASS', score: 9},
        {skill:'JAVASCRIPT', score: 9},
        {skill:'JQUERY', score: 8},
        {skill:'GIT/GITHUB', score: 9},
        {skill:'BOOTSTRAP', score: 7},
        {skill:'NODE.JS', score: 5},
        {skill:'REACT', score: 8},
        {skill:'ADOBE XD', score: 9},
        {skill:'PHOTOSHOP', score: 7},
        {skill:'MÉTODOS ÁGEIS', score: 7},
        {skill:'UI/UX', score: 6}

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
