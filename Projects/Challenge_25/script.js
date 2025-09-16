const handleGreat = () => {
    const name = getInfo('name')
    const lastname = getInfo('lastname')
    const age = getAge('age')
    const stature = getStature('stature')
    alert(name+ ' ' +lastname+' '+age+' '+stature)
}

const getInfo = (id) => {
    let data; 
    data = document.getElementById(id)
    return data.value
}

const getAge = (id) =>{
    let age;
    age = document.getElementById(id)
    return parseInt(age.value)
}

const getStature = (id) => {
    let stature;
    stature = document.getElementById(id)
    return parseFloat(stature.value)
}