import React from 'react';

const CalendarBody = ({ date }) => {
    const renderDays = () => {
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<td key={`empty-${i}`} className="noday"></td>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(<td key={day}>{day}</td>);
        }

        const rows = [];
        let cells = [];

        days.forEach((day, i) => {
            if ((i + 1) % 7 !== 0) {
                cells.push(day);
            } else {
                cells.push(day);
                rows.push(<tr key={i}>{cells}</tr>);
                cells = [];
            }
        });

        if (cells.length) {
            rows.push(<tr key={`last-${cells.length}`}>{cells}</tr>);
        }

        return rows;
    };

    return (
        <table className="month">
            <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>
            <tbody>
                {renderDays()}
            </tbody>
        </table>
    );
};

export default CalendarBody;
