// Variables
var inputTop = document.getElementById("input-top")
var inputBottom = document.getElementById("input-bottom")

var nums = document.querySelectorAll(".num")
var op = document.querySelectorAll(".op")

var reset = document.getElementById("reset")
var equal = document.getElementById("equal")

var opHistoryContainer = document.getElementById("op-history-container")
var opHistory = []

var toggleHistory = document.getElementById("toggle-history")

var done = false

// Get each element with the class ".num"
for (let i = 0; i < nums.length; i++) {
  // When a ".num" element is clicked, display its data-set in inputBottom.
  nums[i].addEventListener("click", () => {
    // If the equal button has been clicked (done), replace inputBottom value with the new one, if not, add it to the current.
    if (done) {
      inputBottom.value = nums[i].getAttribute("data-set")
      done = false
    } else {
      inputBottom.value += nums[i].getAttribute("data-set")
    }
    
    gsap.to(nums[i], .25, {scale: 1.8, transformOrigin: "center", ease: Back.easeOut})
    gsap.to(nums[i], .25, {scale: 1, delay: .25, transformOrigin: "center", ease: Back.easeOut})
    
    inputBottomLength()
  })
}

// Get each element with the class ".op"
for (let i = 0; i < op.length; i++) {
  // When the ".op" element is clicked, display its data-set in inputBottom
  op[i].addEventListener("click", () => {
    done = false
    inputBottom.value += op[i].getAttribute("data-set")
    
    gsap.to(op[i], .25, {scale: 1.2, transformOrigin: "center", ease: Power3.easeOut})
    gsap.to(op[i], .25, {scale: 1, delay: .25, transformOrigin: "center", ease: Back.easeOut})
    
    inputBottomLength()
  })
}

// When the equal is clicked
equal.addEventListener("click", () => {
  // If inputBottom value isn't empty and isn't undefined
  if (inputBottom.value != "" && inputBottom.value != "undefined") {
    // Pass the value to inputTop and then clear it
    inputTop.value = inputBottom.value
    inputBottom.value = ""
    // Then try to evaluate the result, add it to the value of inputBottom and push it to opHistory array
    try {
      inputBottom.value = eval(inputTop.value)
      opHistory.push(`${inputTop.value} = ${inputBottom.value}`)
      
      done = true
      
      // For every item in the opHistory array, create a <p> element in the HTML container
      var newOpItem = `<p class="op-item">${inputTop.value} = ${inputBottom.value}</p>`
      opHistoryContainer.insertAdjacentHTML("afterbegin", newOpItem)
      
      createHistoryOp()
    } catch {}
  }

  // Make the button squashy
  gsap.to(equal, .15, {scaleX: .95, scaleY: .95})
  gsap.to(equal, 1, {delay: .15, scaleX: 1, scaleY: 1, ease: Elastic.easeOut})
})

// Reset all inputs when C is clicked
reset.addEventListener("click", () => {
 inputTop.value = ""
 inputBottom.value = ""
 inputBottom.style.fontSize = "60px"
  
 done = false
})

// Reduce the fontSize of inputBottom if it exceeds X chars.
function inputBottomLength() {
  var inputBottomValue = inputBottom.value
  
  if (inputBottomValue.length < 6) {
    inputBottom.style.fontSize = "60px"
  }
   else if (inputBottomValue.length === 6) {
    inputBottom.style.fontSize = "42px"
  } else if (inputBottomValue.length === 9) {
    inputBottom.style.fontSize = "30px"
  } else if (inputBottomValue.length === 12) {
    inputBottom.style.fontSize = "24px"
  } else if (inputBottomValue.length === 18) {
    inputBottom.style.fontSize = "12px"
  }
}

function createHistoryOp() {
  opHistory.forEach(item => {
  })
}

toggleHistory.addEventListener("click", () => {
  opHistoryContainer.classList.toggle("hide")
  toggleHistory.classList.toggle("fa-history-toggle")
})