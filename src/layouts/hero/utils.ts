export const getGreet = () => {
  const date = new Date();
  const hrs = date.getHours();
  let greet = 'Привет';

  if (hrs >= 4 && hrs < 11) {
    greet = 'Доброе утро';
  } else if (hrs >= 11 && hrs < 17) {
    greet = 'Добрый день';
  } else if (hrs >= 17 && hrs < 23) {
    greet = 'Добрый вечер';
  }

  return greet;
};
