import Module from 'models/Module';

export default new Module(
  "Clock",
  "Clock",
  "This module displays the current time.",
  { width: 6, height: 10 },
  { width: 4, height: 15 },
  {
    isDigital: {
      type: 'checkbox'
    },
    display: {
      type: 'radio',
      values: [
        'h:mm:ss a', 'h:mm:ss A', // 1:00:00 pm | 1:00:00 PM
        'h:mm a', 'h:mm A',       // 1:00 pm | 1:00 PM
        'H:mm:ss', 'H:mm', // 13:00:00 | 13:00
      ]
    }
  }
);
