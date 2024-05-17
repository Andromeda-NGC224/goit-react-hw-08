import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from '../LoginForm/LoginForm.module.css'

export default function LoginForm() {

    const dispatch = useDispatch()

    const initialValues = {
        email: "",
        password: ""
    }

const schema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required(""),
  password: Yup.string().min(7, "Too short").max(256, "Too long").required(""),
});
    
    const emailFieldId = useId();
    const passFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
        actions.resetForm()
    }
    
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            <Form className={css.container}>

<div className={css.inputCont}>
    <label className={css.inputLabel} htmlFor={emailFieldId}>Email</label>
    <Field className={css.inputField} type='email' name='email' id={emailFieldId}></Field>
    <ErrorMessage className={css.error} name='email' as="span"></ErrorMessage>
    </div>

<div className={css.inputCont}>
    <label className={css.inputLabel} htmlFor={passFieldId}>Password</label>
    <Field className={css.inputField} type='text' name='password' id={passFieldId}></Field>
    <ErrorMessage className={css.error} name='password' as="span"></ErrorMessage>
                </div>
                
                <button className={css.btnForm} type="submit">Відправити</button>
            </Form>
      </Formik>
  )
}