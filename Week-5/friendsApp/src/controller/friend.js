const data = require ('../model/data')

const createFriend =(req, res)=>{
    res.status(200).send("data")
    const person = req.body
    data.push(person)
    res.status(201).json(person)
}

const getFriend =(req, res)=>{
    const id = req.params.personId
    const onePerson = data.find((person) => person.id === id )
    res.status(200).send(onePerson)
}


const getFriends =(req, res)=>{
    res.status(200).send(data)
}


const updateFriend =(req, res)=>{
    const payLoad = req.body
    const id = req.params.personId
    const onePerson = data.find((person) => person.id === id )
    onePerson.name = payLoad.name
    res.status(200).send(onePerson)
}

const deleteFriend =(req, res)=>{
    const id = req.params.personId
    const newPeople= data.filter((person) => person.id !== Number(id) )
  
    res.status(200).send(newPeople)
}

const search =(req, res)=>{
    const{q} = req.query
   
     //const result = data.find((person) => person.name === q )
     const result = data.filter((person) => person.name.includes(q) )
    //const result = data.filter((person) => person.name.startsWith(q) )
     res.status(200).send(result)
}

module.exports ={
    createFriend,
    getFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    search
}