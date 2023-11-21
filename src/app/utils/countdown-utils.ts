export const calculateTimeToEvent = () => {
    const eventDateUTC = new Date("2023-12-29T09:00:00-07:00"); // October 12, 2023, 9 AM PT
    const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
  
    // Convert event date to IST
    const eventDateIST = new Date(eventDateUTC.getTime() + istOffset);
  
    const currentDate = new Date();
    const timeRemaining = eventDateIST.getTime() - currentDate.getTime();
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  };
  