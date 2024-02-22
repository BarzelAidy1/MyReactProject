import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { addMeeting } from '../../data/meetingDataServer';
import './AddMeeting.css';

const AddMeeting = ({ onReservation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateTime, setDateTime] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMeeting = { name, email, phone, dateTime };
    addMeeting(newMeeting).then(x => {


      onReservation(updatedMeetings);
      setName('');
      setEmail('');
      setPhone('');
      setDateTime('');
    })
  };  

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="outlined-basic" name='name' label="Name" variant="outlined" type="text" value={name} onChange={handleNameChange} />
      <TextField id="outlined-basic" name='email' label=" Email:" variant="outlined" type='email' value={email} onChange={handleEmailChange} />
      <TextField id="outlined-basic" name='phone' label="Phone" variant="outlined" type="tel" value={phone} onChange={handlePhoneChange} />
      <TextField id="date" name='dateTime' label="Date and Time" variant="outlined" type="datetime-local" value={dateTime} onChange={handleDateTimeChange} />
      <br/>
      <br/>
      <button type="submit" id="btn">אישור הזמנה</button>
    </form>
  );
};

export default AddMeeting;
