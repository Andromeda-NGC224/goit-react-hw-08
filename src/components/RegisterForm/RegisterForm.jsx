import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

export default function RegisterForm() {

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
            <Form>
<div>
    <label htmlFor={nameFieldId}>Your name</label>
    <Field type='text' name='name' id={nameFieldId}></Field>
    <ErrorMessage name='name' as="span"></ErrorMessage>
    </div>

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
