import { object, string, number, date, InferType, ref } from 'yup';

const requiredMessage = "Bu alan zorunludur!"
const minLengthMessage = "En az 3 karakter girmelisiniz!"
const maxLengthMessage = "En fazla 50 karakter girebilirsiniz!"

const registerSchema = object({
  firstName: string().min(3, minLengthMessage).max(50, maxLengthMessage).required(requiredMessage),
  lastName: string().min(3, minLengthMessage).max(50, maxLengthMessage).required(requiredMessage),
  email: string().min(3, minLengthMessage).max(50, maxLengthMessage).required(requiredMessage),
  userName: string().min(3, minLengthMessage).max(50, maxLengthMessage).required(requiredMessage),
  password: string().min(3, minLengthMessage).max(50, maxLengthMessage).required(requiredMessage),
  passwordConfirm: string().min(3, minLengthMessage).max(50, maxLengthMessage).oneOf([ref("password"), null], 'Şifre ve şifre tekrar aynı olmalı!').required(requiredMessage),
});
export default registerSchema
