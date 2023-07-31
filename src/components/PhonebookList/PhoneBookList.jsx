import React from "react";
import css from './PhoneBookList.module.css'

const PhoneBookList = ({visibleContacts, onDeleteContacts } ) =>{
    return(
      <div>
      
      <ul className={css.list}>
      {visibleContacts.map(contact =>( 
      <li className={css.textList}
      key={contact.id}>{contact.name}: {contact.number}
       <button
          type="button"
          onClick={() => onDeleteContacts(contact.id)}
          className={css.delbtn}
        >
          Удалить
        </button></li> 
    ))}
  
</ul>
</div>
      )
    }

export default PhoneBookList