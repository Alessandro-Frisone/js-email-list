// DOM ELEMENTS

// FUNCTIONS

const emailArray = [];
    for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response) {
            emailArray.push(response.data.response)
        })
    }
    
console.log(emailArray)







