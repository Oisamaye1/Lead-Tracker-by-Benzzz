const inputEl = document.getElementById('input-el')
const saveLead = document.getElementById('input-btn')
let clearLead = document.getElementById('clear-btn')
let saveTab = document.getElementById('tab-btn')
let welcomeEl = document.getElementById('tmessage')
const ulEL = document.getElementById('lead-list')
let myLeads = []

const localStorageLead = JSON.parse(localStorage.getItem('myLeads'))

if (localStorageLead){
    myLeads = localStorageLead
    render(myLeads)
}

saveTab.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })   
})

function render(leads){
    let listItem = ''
    for (let i = 0; i < leads.length; i++){
        listItem += 
        `<li>
            <a href='${leads[i]}' target = '_blank'>
                ${leads[i]}
            </a>
        </li>`
}
ulEL.innerHTML = listItem
}


clearLead.addEventListener('click', function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

saveLead.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    if (inputEl != ''){
        inputEl.value = ''
    }

    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
})


