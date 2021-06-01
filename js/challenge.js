
        const likeButton = document.querySelector('#heart')
        const timer = document.querySelector('#counter')
        const minusButton = document.querySelector("#minus")
        const plusButton = document.querySelector('#plus')
        const likesList = document.querySelector('.likes')
        const likesPerNumber = []
        
       
       
        const decreaseTimer = () => timer.innerText--
        const increaseTimer = () => timer.innerText++
        const handleClick = () => {
            const likedNumber = parseInt(timer.innerHTML)
            if (likesPerNumber.find(item => item.number === likedNumber)) {
           const likedNumberObject = likesPerNumber.find(item => item.number === likedNumber)
           likedNumberObject.timesLiked = likedNumberObject.timesLiked + 1
           let listItem = document.querySelector(`#num-${likedNumber}`)
           listItem.innerHTML = `${likedNumber} has been liked ${likedNumberObject.timesLiked} times.`
         } else {
            likesPerNumber.push({number: likedNumber, timesLiked : 1})
            let li = document.createElement("li")
            li.innerHTML = `${likedNumber} has been liked <span> 1 </span> time.` 
            li.id = `num-${likedNumber}`
            likesList.appendChild(li)
       }
    }

       
       
     window.addEventListener("DOMContentLoaded", () => {
           let timerInterval = setInterval(increaseTimer, 1000)

           plusButton.addEventListener('click', increaseTimer)
           minusButton.addEventListener('click', decreaseTimer)
       })
       
       likeButton.addEventListener('click', handleClick)