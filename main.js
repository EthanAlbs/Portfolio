document.getElementById("summary").addEventListener('click', () => {
    displayContent("summary")
})
document.getElementById("education").addEventListener('click', () => {
    displayContent("education")
})
document.getElementById("skills").addEventListener('click', () => {
    displayContent("skills")
})
document.getElementById("projects").addEventListener('click', () => {
    displayContent("projects")
})
document.getElementById("work").addEventListener('click', () => {
    displayContent("work")
})


function displayContent(id) {
    let curTab = document.querySelector(".active")
    if (curTab.id == id) {
        return
    }
    curTab.classList.replace("active", "inactive")
    console.log(curTab.id + "Info")
    document.getElementById(curTab.id + "Info").classList.toggle("hidden")
    document.getElementById(id).classList.replace("inactive", "active")
    document.getElementById(id + "Info").classList.toggle("hidden")
}
