const Joi = require('joi')


const registerFriendSchema = async (payload) => {
    const schema = Joi.object({
        name: Joi.string().required().min(2),
        age: Joi.string().required().min(2),
        phoneNumber: Joi.string().required().min(11).max(11),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
    }).unknown();
    return schema.validate(payload);
}

module.exports = {registerFriendSchema}