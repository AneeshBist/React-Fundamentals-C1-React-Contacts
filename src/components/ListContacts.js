import PropTypes from "prop-types";
import { useState } from 'react';

const ListContacts = ({contacts, onDeleteContact}) => {
   
    const [query,setQuery] = useState("");
    const updateQuery = (query) => {
        setQuery(query.trim());
    }

    const showingContact = query==="" ? contacts : contacts.filter((c)=>c.name.toLowerCase().includes(query.toLocaleLowerCase()))

    const clearQuery = ()=> {
        updateQuery("");
    }

   return (
    <div clgitassName="list-contacts">
        <div className="list-contacts-top">
            <input 
                className="search-contacts" 
                type="text" 
                placeholder="Search Contacts" 
                value={query}
                onChange={(event)=>updateQuery(event.target.value)}/>
        </div>
        {
            showingContact.length !== contacts.length && (
                <div className="showing-contacts">
                    <span>
                        Now showing {showingContact.length} of {contacts.length}
                    </span>
                    <button onClick={clearQuery}>Show All</button>
                </div>
            )
        }
        <ol className="contacts-list">
            {showingContact.map((contact) => (
                <li key={contact.id} className="contact-list-item">
                    <div
                        className="contact-avatar"
                        style={{
                            backgroundImage: `url(${contact.avatarURL})`,
                        }}>
                    </div>
                    <div className="contact-details">
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                    </div>
                    <button className="contact-remove" onClick={() => onDeleteContact(contact)}>Remove</button>
                </li>
            ))}
        </ol>
    </div>
    );

}
ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact: PropTypes.func.isRequired,
  
  }
export default ListContacts;