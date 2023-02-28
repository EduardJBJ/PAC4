
const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorage = (key) => {
    let resultat = JSON.parse(localStorage.getItem(key))
    return resultat
}

export { setLocalStorage, getLocalStorage }

// He declarat la key com a "luisalbertoarana" en honor a un professor amb molta paciència i més coneixements.
// Moltes gràcies, Luís !!!!!!!!!!!!!!!