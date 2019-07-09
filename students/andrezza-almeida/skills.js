const skillsList = [
        {skill:'HTML', score:9},
        {skill:'CSS', score: 9},
        {skill:'SASS', score: 6},
        {skill:'JAVASCRIPT', score: 8},
        {skill:'JQUERY', score: 6}, 
        {skill:'NODE', score: 1}, 
        {skill:'GIT/GITHUB', score: 8},
        {skill:'BOOTSTRAP', score: 9},
        {skill:'REACT', score: 8},
        {skill:'METODOLOGIAS ÁGEIS', score: 5},
        {skill:'RESPONSIVIDADE', score: 9},
        {skill:'UX DESIGN', score: 6},
        {skill:'TECNOLOGIA ASSISTIVAS', score: 6},
        {skill:'WORDPRESS', score: 9},
        {skill:'PHP', score: 3},
        {skill:'MySQL', score: 3},
        {skill:'HOSPEDAGEM DE SITE', score: 8},
        {skill:'FTP', score: 5},
        {skill:'CONFIGURAÇÃO DE DOMÍNIO', score: 8},
        {skill:'PHOTOSHOP', score: 9},
        {skill:'ILUSTRATOR', score: 9},
        {skill:'INDESIGN', score: 9},
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
