const Joi=require("joi");

const validateNewUser=(req)=>{
    const schema= Joi.object({
        username:Joi.string().min(3).required(),
        name:Joi.string().min(3).required(),
        password:Joi.string().min(5).required(),
        phoneNumber:Joi.string().regex(/^[0-9]{10}$/).message('Phone Number must have 10 digits').required()
    })
    return schema.validate(req.body);
}

const validateUpdateUser=(req)=>{
    const schema=Joi.object({
        name:Joi.string().min(3),
        password:Joi.string().min(5),
        phoneNumber:Joi.string().regex(/^[0-9]{10}$/).message('Phone Number must have 10 digits')
    })
    return schema.validate(req.body);
}

module.exports.validateNewUser=validateNewUser;
module.exports.validateUpdateUser=validateUpdateUser;