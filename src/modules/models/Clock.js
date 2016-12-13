import Module from 'models/Module';

export default new Module(
  "Clock",
  "Clock",
  "This module displays the current date and time. The information will be updated realtime.",
  { height: 4, square: true },
  { height: 8, square: true },
  {
    isDigital: true,
    display: [
      'h:mm:ss a', 'h:mm:ss A', // 1:00:00 pm | 1:00:00 PM
      'h:mm a', 'h:mm A',       // 1:00 pm | 1:00 PM
      'H:mm:ss', 'H:mm', // 13:00:00 | 13:00
    ]
  }
);
