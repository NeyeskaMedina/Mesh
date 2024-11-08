import { 
    emailValidation, 
    passwordValidation, 
    confirmPasswordValidation 
} from "./fields.js";
import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: emailValidation,
    password: passwordValidation,
    confirmPassword: confirmPasswordValidation,
});