const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

let selector = {
  getContacts,
  getFilter,
  getFilteredContacts,
};

export default selector;
