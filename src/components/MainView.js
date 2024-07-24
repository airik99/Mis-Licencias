// src/components/MainView.js
import React, { useState } from 'react';
import '../css/MainView.css'; // Asegúrate de que la ruta sea correcta
import Calendar from './Calendar'; // Importa el componente Calendar
import Sidebar from './Sidebar';   // Importa el componente Sidebar
import Header from './Header';     // Importa el componente Header
import Summary from './Summary';   // Importa el componente Summary
import PendingRequests from './PendingRequests'; // Importa el componente PendingRequests


const MainView = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const generateDays = (month) => {
    const weeks = [];
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const startDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();

    let week = Array(startDay).fill(null);

    for (let i = 1; i <= daysInMonth; i++) {
      week.push(i);

      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) week.push(null);
      weeks.push(week);
    }

    return weeks;
  };

  const days = generateDays(currentMonth);

  return (
    <div className="main-view">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Calendar />
        <Summary /> {/* Agrega el componente Summary */}
        <PendingRequests /> {/* Agrega el componente PendingRequests */}
      </div>
    </div>
  );
};

export default MainView;
