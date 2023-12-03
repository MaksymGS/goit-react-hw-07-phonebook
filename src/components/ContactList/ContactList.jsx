import React from 'react';
import { ContactItem } from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const getfilteredContacts =
    filter === ''
      ? contacts
      : contacts.filter(({ name }) => {
          const filterValue = filter.toLowerCase();
          const filteredContacts = name.toLowerCase().includes(filterValue);
          return filteredContacts;
        });

  return (
    <>
      <ul>
        {getfilteredContacts.map(({ name, number, id }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};
