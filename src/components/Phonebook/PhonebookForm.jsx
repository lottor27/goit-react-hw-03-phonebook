import React, { Component } from "react";
import { nanoid } from 'nanoid'
import css from './Phonebook.module.css'


class Form extends Component{
  nameInputId = nanoid();
  numberInputId = nanoid();

    state = {
    name: '',
    number: ''
    }

handleChange=(event) =>{

const {name, value} = event.currentTarget;
this.setState({
  [name]:value})
}

handleSabmit=(event) =>{
  event.preventDefault()
  this.props.onSubmit(this.state)
  this.reset()
}



reset =()=>{
    this.setState({name:'', number:''})
}

render(){
        return(
          <form onSubmit={this.handleSabmit}
          className={css.formbox}>
      
    <label htmlFor={this.nameInputId}>
    Name
      <input
      className={css.inputPhone}
      onChange={this.handleChange}
      value={this.state.name}
      id={this.nameInputId}
    type="text"
    name="name"
    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
   required
 />
 </label>
 <label htmlFor={this.numberInputId}>
  Number
 <input
 className={css.inputPhone}
 value={this.state.number}
 onChange={this.handleChange}
 id={this.numberInputId}
  type="tel"
  name="number"
  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
</label>
 <button type="submit" onSubmit={this.handleSubmit} className={css.btnsubmit}>Add contact</button>
 
</form>  
        );
    }
}

export default Form