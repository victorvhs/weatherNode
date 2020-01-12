console.log("Javasctrip is here")

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data) =>{
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('message-1')
const messageTwo = document.querySelector('#message-2')

const temperature = document.getElementById('temp')
const sumary = document.getElementById('sumary')
const locationData = document.getElementById('location')
const icon = document.getElementById('icon')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const location = search.value
    messageTwo.textContent = 'Loading ...'
    messageOne.style.display = 'none'
    
   

    const urlData ='http://localhost:3000/weather?address='+location 
    fetch(urlData).then((response) =>{
        response.json().then((data)=>{
            if(data.error){
                return messageOne.textContent = data.error
            }
            
            temperature.textContent = data.temperature + '°C'
            sumary.textContent = data.sumary
            locationData.textContent = data.location
            icon.src = '/img/icon/'+data.icon+'.png'
            messageOne.style.display = 'block'
            messageTwo.textContent = ''
                })
    })

})