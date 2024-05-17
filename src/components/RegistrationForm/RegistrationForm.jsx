import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from './RegistrationForm.module.css'


export default function RegistrationForm() {

    const dispatch = useDispatch()

    const initialValues = {
        name: "",
        email: "",
        password: ""
    }

const schema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string().min(7, "Too short").max(256, "Too long").required("Required"),
});
    
    
    const nameFieldId = useId();
    const emailFieldId = useId();
    const passFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        actions.resetForm()
    }
    
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            <Form className={css.container}>
<div className={css.inputCont}>
    <label className={css.inputLabel} htmlFor={nameFieldId}>Ваше ім'я</label>
    <Field className={css.inputField} type='text' name='name' id={nameFieldId}></Field>
    <ErrorMessage className={css.error} name='name' as="span"></ErrorMessage>
    </div>

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
