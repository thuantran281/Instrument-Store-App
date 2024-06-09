import * as yup from "yup";

export const userSchema = yup.object().shape({
    fname: yup.string().required(),
    lname: yup.string().required(),
    emailAddress: yup.string().email().required(),
    subject: yup.string().required(),
    country: yup.string().required(),
})
