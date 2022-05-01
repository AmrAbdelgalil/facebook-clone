import Joi from "joi";


const schema = Joi.object({
  first: Joi.string().required().min(3).max(30).label("First name"),
  last: Joi.string().required().min(3).max(30).label("Surname"),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .label("Email"),
  password: Joi.string().required().min(3).max(30).label("Password"),
});


export default schema;