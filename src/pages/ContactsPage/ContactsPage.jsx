import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import  ContactForm  from "../../components/ContactForm/ContactForm";
import  SearchBox  from "../../components/SearchBox/SearchBox";
import  Loader  from "../../components/Loader/Loader";
import  ContactList  from "../../components/ContactList/ContactList";
import css from './ContactsPage.module.css'

export default function ContactPage() {
   const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);



  return (

    <div className={css.container}>
  <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <div className={css.LoaderOrError}>{loading && <Loader />}
        {error && error}
      </div>
          <ContactList />
        
      </div>
  )
}
