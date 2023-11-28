import {useEffect, useState} from 'react';

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [timeDescription, setTimeDescription] = useState('');

  useEffect(() => {
    const getTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
      const today = new Date().setHours(0, 0, 0, 0);
      const yesterday = new Date(today - 86400000);
      const tomorrow = new Date(today + 86400000);

      const currentDate = new Date().setHours(0, 0, 0, 0);
      if (currentDate === today) {
        setTimeDescription('Today');
      } else if (currentDate === yesterday) {
        setTimeDescription('Yesterday');
      } else if (currentDate === tomorrow) {
        setTimeDescription('Tomorrow');
      } else {
        setTimeDescription('');
      }
    };

    getTime();
  }, []);

  return {currentTime, timeDescription};
};

export default useCurrentTime;
