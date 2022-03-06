import React, { memo } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styles from "./AuthForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import {clearCart} from "../../store/actionCreators/cartAC";
import NumberFormat from 'react-number-format';

const AuthForm = () => {
    const cartData = useSelector((state)=>state.cart.inCart);
    const dispatch = useDispatch();
    const initialValues = {
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        address: "",
    }
    const schema = yup.object().shape({
        firstName: yup.string().required('Required').matches(/[A-Za-z ]/gi, 'Only A-Za-z').max(15, 'Must be 15 characters or less'),
        lastName: yup.string().required('Required').matches(/[A-Za-z ]/gi, 'Only A-Za-z').max(20, 'Must be 15 characters or less'),
        age: yup.string().required('Required').matches(/[0-9 ]/gi, 'Only number'),
        email: yup.string().email('Invalid email address').required('Required'),
        address: yup.string().required('Required'),
    })
    const onSubmit = async (values) => {
        try {
            console.log("What user bought:");
            console.log(cartData);
            console.log("Inf about user");
            console.log(values);
            dispatch(clearCart());
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
            <Form className={styles.form}>
                <Field className={styles.input} name='firstName' placeholder='Your firstName' />
                <ErrorMessage name="firstName" render={msg => <span className={styles.error}>{msg}</span>} />

                <Field className={styles.input} name='lastName' placeholder='Your lastName' />
                <ErrorMessage name="lastName" render={msg => <span className={styles.error}>{msg}</span>} />

                <Field className={styles.input} name='age' placeholder='Your age' />
                <ErrorMessage name="age" render={msg => <span className={styles.error}>{msg}</span>} />

                <Field className={styles.input} name='email' placeholder='Your email' />
                <ErrorMessage name="email" render={msg => <span className={styles.error}>{msg}</span>} />

                <Field className={styles.input} name='address' placeholder='Your address' />
                <ErrorMessage name="address" render={msg => <span className={styles.error}>{msg}</span>} />
                
                <NumberFormat className={styles.input} placeholder='Your phone number' format="(###)###-##-##" />

                <Button type='submit'>Checkout</Button>
            </Form>
        </Formik>
    )
}
export default memo(AuthForm);