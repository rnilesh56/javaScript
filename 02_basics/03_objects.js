// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Nilesh",
    "full name" : "Nilesh Raj",
    [mySym]: "myKey1",
    age: 24,
    location: "Patna",
    email: "nilesh@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

// console.log(jsUser)
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log( jsUser[mySym])

jsUser.email = "nilesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "nilesh@microsoft.com"

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Welcome")
}

jsUser.greetingTwo = function(){
    console.log(`Hello ${this["full name"]} `)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())