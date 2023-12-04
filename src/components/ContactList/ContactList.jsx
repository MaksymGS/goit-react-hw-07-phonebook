import React, { useEffect } from 'react';
import Notiflix from 'notiflix';
import { ThreeDots } from 'react-loader-spinner';
import { ContactItem } from './ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/fetchingData';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    Notiflix.Notify.failure(error);
  }

  const getfilteredContacts =
    filter === ''
      ? items
      : items.filter(({ name }) => {
          const filterValue = filter.toLowerCase();
          const filteredContacts = name.toLowerCase().includes(filterValue);
          return filteredContacts;
        });

  return (
    <>
      <ul>
        {getfilteredContacts.map(({ name, phone, id }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#16437e"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={isLoading}
      />
    </>
  );
};
