const result1  = document.getElementById("x1")
const result2  = document.getElementById("x2")
const form = document.getElementById("form")

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = document.getElementById("c").value

    console.log(a)

    const x1 = ((-b + (Math.sqrt(Math.pow(b,2) - (4 * a * c )))))/(2 * a)
    const x2 = Math.floor((-b -  Math.sqrt(Math.pow(b,2) - (4 * a * c ))))/(2 * a)
    
    result1.innerHTML = x1
    result2.innerHTML = x2
    
    

})