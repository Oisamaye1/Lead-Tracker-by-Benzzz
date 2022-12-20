const inputEl = document.getElementById('input-el')
const saveLead = document.getElementById('input-btn')
// const container = document.getElementById('container')
const ulEL = document.getElementById('lead-list')
let myLeads = []

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


saveLead.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    if (inputEl != ''){
        inputEl.value = ''
    }
    renderLeads()
})
