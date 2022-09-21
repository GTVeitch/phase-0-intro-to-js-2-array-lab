const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newList = [
        ...cats.slice(),
        `${name}`,
    ]

    return newList
}

function prependCat(name) {
    const newList = [
        `${name}`,
        ...cats.slice(),
    ]

    return newList
}

function removeLastCat() {
    return cats.slice(0, cats.length-1)
}

function removeFirstCat() {
    return cats.slice(1, cats.length+1)
}