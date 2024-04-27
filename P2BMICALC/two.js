const form = document.querySelector('form')
//
form.addEventListener('submit', function (e) {
    //to prevent from submit in browser
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height == '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`
    }
    else if (weight == '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid height ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `${bmi}`
        if (bmi < 18.6) {
            results.innerHTML = `your weight is is underweight ${bmi}`
        }
        if (bmi > 24.9) {
            results.innerHTML = `your weight is is overweight ${bmi}`
        }
    }


})
