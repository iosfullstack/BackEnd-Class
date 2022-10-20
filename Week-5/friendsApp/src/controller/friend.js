const data = require ('../model/data')
const FriendsModel = require(`../model/friendsSchema`)
const bcrypt = require(`bcrypt`)
const jwt = require(`jsonwebtoken`)
const dotenv = require(`dotenv`)
dotenv.config()
const createFriend = async (req, res)=> {
    // res.status(200).send("data")
    // const person = req.body
    // data.push(person)
    // res.status(201).json(person)

    // Mongoose Method

    // No two friends must have the same email
    // encrypt passwords

    const { name, age, phoneNumber, email, password } = req.body

    const friend = await FriendsModel.findOne({email})
    if (friend) return res.status(400).json ({
        success: false,
        message: `Email Already Exist`
    })

    const hashedPassword = await bcrypt.hash(password, 12)

    const small_name = name.toLowerCase()
    try {
        let newFriend = await FriendsModel.create({name: small_name, age, phoneNumber, email, password: hashedPassword})
        await newFriend.save()
        
        delete newFriend._doc.password
        res.status(201).json({success: true, message: "Successfully Created", data: newFriend})
    } catch (error){
        res.status(400).json({success: false, message: "Operation Failed"})
    }
}

// Get All Friends
const getFriends = async (req, res)=> {
    // res.status(200).send(data)
    try {
        const allFriends = await FriendsModel.find({})
        res.status(201).json({success: true, message: "All Friends Retrieve Successfully", data: allFriends})
    } catch (error) {
        res.status(400).json({success: false, message: "Operation Failed"})
    }
}

const signIn = async (req, res) => {
    try {
        const {email, password} = req.body
        const friends = await FriendsModel.findOne({email})
        if (!friends) return res.status(404).json({success: false, message: "your email or password is incorrect" })
        const isValidPassword = await bcrypt.compare(password, friends.password)
        if (!isValidPassword) return res.status(404).json({success: false, message: "invalid email or password"})
        const token = await jwt.sign({_id: friends._id, name: friends.name, age: friends.age}, process.env.JWT_SECRET)
            res.status(200).json({
                success:true,
                message: `friend logged in`,
                data: friends,
                token: token
            })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: `failed`,
        })
    }
}

// Get Friends By Id
const getFriend = async (req, res) => {
    // const id = req.params.personId
    // const onePerson = data.find((person) => person.id == id )
    // res.status(200).send(onePerson)
    const payLoad = req.body
    const friendId = req.params.personId
    try {
        // _id = Number(id)
        const onePerson = await FriendsModel.findOne({_id: friendId})
        onePerson.name = payLoad.name
        onePerson.save()
        res.status(200).json({success: true, message: "All Friends Retrieve Successfully", data: onePerson})
    } catch (error) {
        res.status(400).json({success: false, message: "Operation Failed"})
    }
}




const updateFriend = async (req, res)=>{
    const payLoad = req.body
    const friendId = req.params.personId
    // const onePerson = data.find((person) => person.id == id )
    // onePerson.name = payLoad.name
    // res.status(200).send(onePerson)
    // const { name, age } = req.body
    // const small_name = name.toLowerCase()
    // const id = req.params.personId
    try {
        // _id = Number(id)
        const updateById = await FriendsModel.findOneAndUpdate({_id: friendId}, payLoad, {new: true})
        res.status(200).json({success: true, message: "Successfully Created", data: updateById})
    } catch (error) {
        res.status(400).json({success: false, message: "Operation Failed"})
    }

}

const deleteFriend = async (req, res)=>{
    // const id = req.params.personId
    // const newPeople= data.filter((person) => person.id !== Number(id) )
  
    // res.status(200).send(newPeople)
    const friendId = req.params.personId
    try {
        // _id = Number(id)
        await FriendsModel.findByIdAndDelete(friendId)
        res.status(200).json({success: true, message: "Successfully Created"})
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
        const result = await FriendsModel.find({name: q})
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
    search,
    signIn
}