// DOM ELEMENTS
const emailListElm = document.getElementById("email-list")
const generateElm = document.getElementById("generate-random")


// FUNCTIONS
function generate() {
    const emailArray = [];
    emailListElm.innerHTML = ' ';
    for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response) {
            emailArray.push(response.data.response)
            emailListElm.innerHTML += `<li>${response.data.response}</li>`
        })
    }
console.log(emailArray)
}

// EVENTS
generateElm.addEventListener('click', generate)







