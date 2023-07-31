import React, { Component } from "react";
import Form from "./Phonebook/PhonebookForm";
import PhoneBookList from "./PhonebookList/PhoneBookList";
import { nanoid } from 'nanoid'
import Filter from "./Filter/Filter";
import Notiflix from 'notiflix';



export default class App extends Component  {
  state = {
    contacts:[
      {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
      {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
      {id: "id-3", name: "Eden Clements", number: "645-17-79"},
      {id: "id-4", name: "Annie Copeland", number: "227-91-26"}
    ],
    filter: '',
    
  }

  addContact = ({name, number}) => {
    
    const contact = {
      id: nanoid(),
      name,
      number,
          };
  
    const checkName = this.state.contacts.map(el=>el.name).includes(contact.name)
    const checkNumbers = this.state.contacts.map(el=>el.number).includes(contact.number)
    
    if (checkName && checkNumbers) {
      Notiflix.Report.failure( 
        `${contact.name} and ${contact.number} is already in contacts`);
      return
    } else if (checkName) {
      Notiflix.Report.failure( 
        `${contact.name} is already in contacts`);
      return
    } else if (checkNumbers){
      Notiflix.Report.failure( 
        `${contact.number} is already in contacts`);
      return
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };


  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  toggleCompleted = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.map(contact =>
        contact.id === contactId ? { ...contact, completed: !contact.completed } : contact,
      ),
    }));
  };


  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };


  formSubmitHandler = data =>{
    console.log(data);
    data.id = nanoid();
    this.state.contacts.push(data)
  }


  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),)
    
  };
  
render(){
  return (
    <div> 
  <h2>Phonebook</h2>

    <Form onSubmit={this.addContact}></Form>
    
    <Filter value={this.state.filter} onChange={this.changeFilter} />

    <h2>Contacts</h2>
    
    <PhoneBookList 
    contacts={this.state.contacts} 
    visibleContacts={this.getVisibleContacts()}onDeleteContacts={this.deleteContact} />
</div>
  );
}
};
