import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";

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
            <Form>

<div>
    <label htmlFor={emailFieldId}>Email</label>
    <Field type='email' name='email' id={emailFieldId}></Field>
    <ErrorMessage name='email' as="span"></ErrorMessage>
    </div>

<div>
    <label htmlFor={passFieldId}>Password</label>
    <Field type='text' name='password' id={passFieldId}></Field>
    <ErrorMessage name='password' as="span"></ErrorMessage>
                </div>
                
                <button type="submit">Submit</button>
            </Form>
      </Formik>
  )
}