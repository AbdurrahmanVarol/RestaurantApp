import { object, string, number, date, InferType } from 'yup';

const requiredMessage = "Bu alan zorunludur!"
const minLengthMessage = "En az 5 karakter girmelisiniz!"
const maxLengthMessage = "En fazla 10 karakter girebilirsiniz!"

const createProductSchema = object({
    name: string().min(3, minLengthMessage).max(50, maxLengthMessage).required(requiredMessage),
    description: string().min(3, minLengthMessage).max(500, "En fazla 500 karakter girebilirsiniz!").required(requiredMessage),
    price: number().positive("Ürün fiyatı 0'dan büyük olmalı!!!").required(requiredMessage),
    imageUrl: string().required(requiredMessage),
    categoryId: number().notOneOf([0], "Bir kategori seçiniz!!!"),
});
export default createProductSchema