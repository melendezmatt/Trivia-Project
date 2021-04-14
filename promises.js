function name1() {
    return 'matt'
}

async function name2() {
    return 'torrell'
}

console.log('name1:', name1());
console.log('name2:', name2());

name2().then(result => console.log(result))

async function waiting() {
    const value = await name2();
    console.log('waiting', value)
}

waiting();
