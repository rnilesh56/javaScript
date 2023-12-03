function setUsername(username){
    // complex DB calss
    this.username = username
    console.log('Called')
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const hey = new createUser('Hey There', 'hey@gmail.com', 123)
console.log(hey)