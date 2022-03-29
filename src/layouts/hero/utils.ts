import { TFunction } from 'react-i18next';

export const getGreetingText = (t: TFunction) => {
  const date = new Date();
  const hrs = date.getHours();
  let greeting = t('Greeting.Hi');

  if (hrs >= 4 && hrs < 11) {
    greeting = t('Greeting.GoodMorning');
  } else if (hrs >= 11 && hrs < 17) {
    greeting = t('Greeting.GoodAfternoon');
  } else if (hrs >= 17 && hrs < 23) {
    greeting = t('Greeting.GoodEvening');
  }

  return greeting;
};
