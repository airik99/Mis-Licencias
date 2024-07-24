import React from 'react';

const CalendarHeader = ({ date, onChangeMonth }) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    return (
        <div className="calendar-navigation">
            <button onClick={() => onChangeMonth(-1)}>&lt;</button>
            <span>{monthNames[date.getMonth()]} {date.getFullYear()}</span>
            <button onClick={() => onChangeMonth(1)}>&gt;</button>
        </div>
    );
};

export default CalendarHeader;
