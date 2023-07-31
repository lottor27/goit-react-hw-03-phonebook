import React from 'react';
import css from './Filter.module.css'

const Filter = ({ value, onChange }) => {
return (
<label className={css.filterbox}>
    <samp className={css.textfilter}>Find contacts by name</samp> 
    <input 
    className={css.inputfilter}
    type="text" 
    value={value} onChange={onChange} />
  </label>)}


export default Filter;