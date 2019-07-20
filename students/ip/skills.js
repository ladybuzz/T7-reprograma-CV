const skillsList = [
        {skill:'HTML', score:10},
        {skill:'CSS', score: 9},
        {skill:'Sass', score: 7},
        {skill:'Javascript', score: 8},
        {skill:'JQuery', score: 8},
        {skill:'Git', score: 9},
        {skill:'Bootstrap', score: 8},
        {skill:'ReactJs', score: 7},
        {skill:'Material-UI', score: 6},
        {skill:'Firebase', score: 6},
        {skill:'Web Design Responsivo', score: 9},
        {skill:'UX|UI Design', score: 9},
        {skill:'Modelagem 3D', score: 10},
        {skill:'Adobe XD', score: 9},
        {skill:'Figma', score: 9},
        {skill:'Zeplin', score: 9},
        {skill:'Photoshop', score: 8},
        {skill:'Illustrator', score: 8},
        {skill:'InDesign', score: 8},
        {skill:'GIS|Qgis', score: 9},
        {skill:'Scrum', score: 8},
        {skill:'Inglês', score: 9},
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
