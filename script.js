const inputEl = document.getElementById('input-el')
const saveLead = document.getElementById('input-btn')
let clearLead = document.getElementById('clear-btn')
// const container = document.getElementById('container')
const ulEL = document.getElementById('lead-list')
let myLeads = []


const localStorageLead = JSON.parse(localStorage.getItem('myLeads'))

if (localStorageLead){
    myLeads = localStorageLead
    renderLeads()
}

function renderLeads(){
    let listItem = ''
    for (let i = 0; i < myLeads.length; i++){
        listItem += 
        `<li>
            <a href='${myLeads[i]}' target = '_blank'>
                ${myLeads[i]}
            </a>
        </li>`
}
ulEL.innerHTML = listItem


}


clearLead.addEventListener('click', function(){
    console.log("helloo")
    localStorage.clear()
    myLeads = []
    renderLeads()
})

saveLead.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    if (inputEl != ''){
        inputEl.value = ''
    }

    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    renderLeads()
})

