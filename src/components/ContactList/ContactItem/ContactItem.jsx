import { DeleteButton, ListItem, Number } from './ContactItem.styled';
import { AiFillCloseCircle } from 'react-icons/ai';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const onDelete = contactId => {
    return dispatch(
      deleteContact(contacts.filter(contact => contact.id !== contactId))
    );
  };
  return (
    <ListItem>
      <p>{name} :</p>
      <Number>{number}</Number>
      <DeleteButton onClick={() => onDelete(id)}>
        <AiFillCloseCircle size={18} />
      </DeleteButton>
    </ListItem>
  );
};
