// src/components/Calendar.js
import React, { useState } from 'react';
import '../css/Calendar.css';

// Función para obtener el primer día del mes
const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// Función para obtener el número de días en el mes
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// Función para obtener el nombre del mes en formato "Julio"
const getMonthName = (month) => {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return months[month];
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Generar el calendario para el mes actual
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const months = getMonthName(currentMonth);

  // Crear un array de días del calendario, con días vacíos antes del primer día del mes
  const calendarDays = Array.from({ length: firstDay }, (_, index) => null)
    .concat(Array.from({ length: daysInMonth }, (_, index) => index + 1));

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-navigation">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span id="calendarTitle">{months} {currentYear}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <table className="month">
        <thead>
          <tr>
            <th>Dom</th>
            <th>Lun</th>
            <th>Mar</th>
            <th>Mié</th>
            <th>Jue</th>
            <th>Vie</th>
            <th className="sat">Sáb</th>
          </tr>
        </thead>
        <tbody>
          {calendarDays.map((day, index) => {
            if (index % 7 === 0) {
              return (
                <tr key={index}>
                  {calendarDays.slice(index, index + 7).map((day, subIndex) => (
                    <td
                      key={subIndex}
                      className={day ? 'day' : 'noday'}
                      data-event={day ? 'Evento' : ''}
                    >
                      {day || ''}
                    </td>
                  ))}
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
