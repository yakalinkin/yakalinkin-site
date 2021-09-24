import { DateTime } from 'luxon';

export const calculateAge = (startDate: string) => {
  const start = DateTime.fromISO(startDate);
  const end = DateTime.now();
  const age = Math.trunc(end.diff(start, 'year').years);

  let count = age % 100;
  let txt = 'лет';

	if (count >= 5 && count <= 20) {
		txt = 'лет';
	} else {
		count = count % 10;
		if (count == 1) {
			txt = 'год';
		} else if (count >= 2 && count <= 4) {
			txt = 'года';
		}
	}

	return `${age} ${txt}`;
};
