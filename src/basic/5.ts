enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: string): boolean => {
  return (
    day === DayOfWeek[DayOfWeek.Saturday] || day === DayOfWeek[DayOfWeek.Sunday]
  );
};

for (const key in DayOfWeek) {
  isWeekend(key);
}

export {};
