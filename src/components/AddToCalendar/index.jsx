import { AddToCalendarButton } from 'add-to-calendar-button-react';

const AddToCalendar = () => {
  return (
    <AddToCalendarButton
        name="Title"
        location="World Wide Web"
        startDate="2024-07-12"
        endDate="2024-07-12"
        startTime="10:15"
        endTime="23:30"
        useUserTZ="true"
        size='4'
        customCss=''
        options="google"
        styleLight='--btn-background: rgb(28, 29, 35, 0.4); --btn-text: white;--btn-border: none;'
    ></AddToCalendarButton>
  )
}

export default AddToCalendar
