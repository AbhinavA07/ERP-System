import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const isEventForDate = (event, date) => {
  const eventMoment = moment(event.start);
  return eventMoment.isSame(date, 'day');
};

const events = [
  {
    title: 'Order 1',
    start: new Date(2024, 2, 1), // March 1, 2024
    end: new Date(2024, 2, 1),
  },
  {
    title: 'Order 2',
    start: new Date(2024, 2, 5), // March 5, 2024
    end: new Date(2024, 2, 5),
  },
  {
    title: 'Order 3',
    start: new Date(2024, 2, 10), // March 10, 2024
    end: new Date(2024, 2, 10),
  },
];

const CalendarComponent = () => {
  const handleDateClick = (date) => {
    const filteredOrders = events.filter((event) => isEventForDate(event, date));
    console.log('Orders due on', date.toLocaleDateString(), ':', filteredOrders);
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h2>Orders Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelect={handleDateClick}
      />
    </div>
  );
};

export default CalendarComponent;
