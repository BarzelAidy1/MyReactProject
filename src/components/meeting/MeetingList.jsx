import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { GetList } from "../../data/meetingDataServer";
import meetingStore from "../../data/meetingStore";
import './Meeting.css';

const MeetingList = observer(() => {

  useEffect(() => {

    if (!meetingStore.meetings.length) {
      GetList();
    }
  }, [])

  const meetingColor = (dateTime) => {

    const currentDate = new Date();
    const meetingDate = new Date(dateTime);
    console.log(meetingDate)

    const lastDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 7);
    if (meetingDate > currentDate && meetingDate <= lastDayOfWeek)
      return <div id="orange">{dateTime}</div>;


    if (meetingDate.getDate() === currentDate.getDate() &&
      meetingDate.getMonth() === currentDate.getMonth() &&
      meetingDate.getFullYear() === currentDate.getFullYear())
      return <div id="red">{dateTime}</div>;
    else return <div id="green">{dateTime}</div>;
  }
  return (
    <>
      <div>

        <h2>רשימת ההזמנות שבוצעו</h2>
        <ul>
          {meetingStore.meetings.map((meeting, index) => (
            <li key={index}>

              <strong>{meeting.name}</strong> - {meeting.email} - {meeting.phone} - {meetingColor(meeting.dateTime)}-

            </li>
          ))}
        </ul>
      </div>
    </>
  );
})

export default MeetingList
