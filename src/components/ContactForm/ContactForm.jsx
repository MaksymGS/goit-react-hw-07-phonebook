import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  Button,
  ErrMessage,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'To short')
    .max(15, 'To long')
    .required('* This field required'),
  number: Yup.number().required('* This field required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const addContacts = objContact => {
    if (contacts.some(contact => contact.name === objContact.name)) {
      alert(`${objContact.name} is already in the phone book`);
      return;
    }
    return dispatch(addContact({ ...objContact, id: nanoid(5) }));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        addContacts(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <Field type="text" name="name" placeholder="Enter name..."></Field>
        <ErrMessage component="span" name="name" />

        <StyledLabel htmlFor="name">Number</StyledLabel>
        <Field
          type="tel"
          name="number"
          placeholder="Enter phone number..."
        ></Field>
        <ErrMessage component="span" name="number" />

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
