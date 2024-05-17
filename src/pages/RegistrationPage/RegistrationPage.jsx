import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from '../RegistrationPage/RegistrationPage.module.css'

export default function RegistrationPage() {
  return (
      <div className={css.container}>
      <h2 className={css.title}>Будь ласка, заповніть форму для реєстрації.</h2>
      <RegisterForm></RegisterForm>
      </div>
  )
}
