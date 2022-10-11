const data = require ('../model/data')
const FriendsModel = require(`../model/friendsSchema`)

const createFriend = async (req, res)=> {
    // res.status(200).send("data")
    // const person = req.body
    // data.push(person)
    // res.status(201).json(person)

    // Mongoose Method

    const { name, age } = req.body
    const small_name = name.toLowerCase()
    try {
        const newFriend = await FriendsModel.create({name: small_name, age})
        newFriend.save()
        res.status(201).json({success: true, message: "Successfully Created", data: newFriend})
    } catch (error){
        res.status(400).json({success: false, message: "Operation Failed"})
    }
}

const getFriend = async (req, res) => {
    // const id = req.params.personId
    // const onePerson = data.find((person) => person.id == id )
    // res.status(200).send(onePerson)
    try {
        const id = req.params.personId
        // _id = Number(id)
        const onePerson = await FriendsModel.findOne({_id: id})
        res.status(200).send(onePerson)
    } catch (error) {
        console.log(error)
    }
}


const getFriends = async (req, res)=> {
    // res.status(200).send(data)
    try {
        const allFriends = await FriendsModel.find({})
        res.status(201).json({success: true, message: "All Friends Retrieve Successfully", data: allFriends})
    } catch (error) {
        res.status(400).json({success: false, message: "Operation Failed"})
    }
}


const updateFriend = async (req, res)=>{
    // const payLoad = req.body
    // const id = req.params.personId
    // const onePerson = data.find((person) => person.id == id )
    // onePerson.name = payLoad.name
    // res.status(200).send(onePerson)
    const { name, age } = req.body
    const small_name = name.toLowerCase()
    const id = req.params.personId
    try {
        // _id = Number(id)
        const updateById = await FriendsModel.findByIdAndUpdate(id, { name: small_name, age })
        res.status(200).json({success: true, message: "Successfully Created", data: updateById})
    } catch (error) {
        res.status(400).json({success: false, message: "Operation Failed"})
    }

}

const deleteFriend = async (req, res)=>{
    // const id = req.params.personId
    // const newPeople= data.filter((person) => person.id !== Number(id) )
  
    // res.status(200).send(newPeople)
    const id = req.params.personId
    try {
        // _id = Number(id)
        const newFriend = await FriendsModel.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "Successfully Created", data: newFriend})
    } catch (error) {
        res.status(400).json({success: false, message: "Operation Failed"})
    }
}

const search = async (req, res)=>{
    // const{q} = req.query
    //  const result = data.filter((person) => person.name.includes(q) )
    //  res.status(200).send(result)
    
    const{q} = req.query
    
    try {
        // _id = Number(id)
        const result = await FriendsModel.find(q)
        res.status(200).json({success: true, message: "Successfully Created", data: result})
    } catch (error) {
        res.status(400).json({success: false, message: "Operation Failed"})
    }
}

module.exports ={
    createFriend,
    getFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    search
}