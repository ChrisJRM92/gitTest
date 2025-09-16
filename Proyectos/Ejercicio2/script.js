const handleGreat = () => {
    const name = getInfo('name')
    const lastname = getInfo('lastname')
    alert(name+ ' ' + lastname)
}

const getInfo = (id) => {
    let data; 
    data = document.getElementById(id)
    return data.value
}