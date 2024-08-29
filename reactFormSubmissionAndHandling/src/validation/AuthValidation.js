
import * as Yup from 'yup';

export const registrationSchema = Yup.object({
    name:Yup.string().required('Name is required !').min(3,'Name must be at least 3 characters'),
    email:Yup.string().required('Email is required !').email('Invalid email format !'),
    password:Yup.string().required('Password is required !').min(8,'Name must be at least 8 characters'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    gender:Yup.string().required('Gender is required'),
    terms:Yup.boolean().oneOf([true],'You must accept the terms and conditions'),
    dateOfBirth: Yup.date().nullable(),

});