const modalEl = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentFrom = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const scaryMsg = document.getElementById('changing-header-text')
const buttonContainer = document.getElementById('button-container')

setTimeout(function() {
    modalEl.style.display = 'block'
}, 3000) 

declineBtn.addEventListener('mouseenter', function() {
    console.log("Hey you're hovering on me")
    buttonContainer.classList.toggle("reverse")
  });


consentFrom.addEventListener('submit', function(e) {
    e.preventDefault()
    const consentFromData = new FormData(consentFrom)
    console.log(consentFromData)
    const username = consentFromData.get('user-name')

    modalText.innerHTML = ` <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div> `

    setTimeout(function(){
        document.getElementById('uploadText').innerText = `Making the sale...`      
    }, 2500) 


    setTimeout(function(){
        document.getElementById('main-title').style.display = 'none';
        consentFrom.style.display = 'none'
        modalText.innerHTML = ``
        modalText.innerHTML = `<h2>Thanks 
        <span class="modal-display-name">${username}</span>, you sucker! 
        </h2>
        <p>We just sold the rights to your soul.</p>
        <div class="idiot-gif">
            <img src="https://media0.giphy.com/media/2zelCiUo5KJyN8MgMr/giphy.gif?cid=ecf05e47slmz8vg81ewiy59ix89ini7oi7x8karc6coirfuh&rid=giphy.gif&ct=g">
        </div>`
        modalCloseBtn.disabled = false
    
    }, 5000)
})



modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

