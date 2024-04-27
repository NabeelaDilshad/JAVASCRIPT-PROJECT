const clock = document.getElementById('clock')

//to run the date again nd again i have a method which run after an given interval
setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

