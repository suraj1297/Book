var counter = () => {

    features.removeEventListener("mouseenter", counter);

    iscounter = true;

    // incrementing Happy Client number
    let element1 = document.querySelector(".number-one")
    let count1 = 0

    setInterval(() => {
        if (count1 <= 529) {
            element1.innerHTML = `<strong>${count1++}</strong>`
        }
    }, 1)

    // incrementing Cups Coffee number
    let element2 = document.querySelector(".number-two")
    let count2 = 0

    setInterval(() => {
        if (count2 <= 1521) {
            element2.innerHTML = `<strong>${count2+=3}</strong>`
        }
    }, 0.1)


    // incrementing Tickets Submitted number
    let element3 = document.querySelector(".number-three")
    let count3 = 0

    setInterval(() => {
        if (count3 <= 237) {
            element3.innerHTML = `<strong>${count3++}</strong>`
        }
    }, 10)


    // incrementing Total Projects number
    let element4 = document.querySelector(".number-four")
    let count4 = 0

    setInterval(() => {
        if (count4 <= 2052) {
            element4.innerHTML = `<strong>${count4+=5}</strong>`
        }
    }, 0)
}


// get features element
var features = document.querySelector(".features")

features.addEventListener("mouseenter", counter);