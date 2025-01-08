// DOM ELEMENTS
const emailListElm = document.getElementById("email-list")
const emailElm = document.getElementById("email")
const generateElm = document.getElementById("generate-random")


// FUNCTIONS
function generate() {
    const emailArray = [];

    for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response) {
            emailArray.push(response.data.response)
        })
    }
    
console.log(emailArray)
}

// EVENTS
generateElm.addEventListener('click', generate() {
    
})








