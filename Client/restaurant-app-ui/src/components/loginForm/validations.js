import { object, string, number, date, InferType } from 'yup';

const requiredMessage = "Bu alan zorunludur!"
const minLengthMessage = "En az 5 karakter girmelisiniz!"
const maxLengthMessage = "En fazla 10 karakter girebilirsiniz!"

const loginSchema = object({
  userName: string().min(3, minLengthMessage).max(50, maxLengthMessage).required(requiredMessage),
  password: string().min(3, minLengthMessage).max(50, maxLengthMessage).required(requiredMessage)
});
export default loginSchema