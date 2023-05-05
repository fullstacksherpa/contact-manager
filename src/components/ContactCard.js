import React from 'react';
import profilee from '../images/profilee.png'

const ContactCard=(props) =>{
    // destructuring the props
    const {id, name, email}= props.contact; 
  return (
    <div className='item' id={id} style={{position:'relative'}}>
        <img className='ui avatar image' src={profilee} alt="user profile" />
    <div className='content'>
        <div className='header'>{name}</div>
        <div>{email}</div>
    </div>
    <i className='trash alternate outline icon' style={{color:'red', position:'absolute', top:'12px', right:'21px'}}></i>
</div>
  )
}

export default ContactCard;
