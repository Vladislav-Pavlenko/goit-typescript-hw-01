enum DayOfWeek {
  Monday = "false",
  Tuesday = "false",
  Wednesday = "false",
  Thursday = "false",
  Friday = "false",
  Saturday = "true",
  Sunday = "true",
}

type DayOfWeekKeys = keyof typeof DayOfWeek;

const isWeekend = (day: DayOfWeekKeys): boolean => {
  return Boolean(DayOfWeek[day]);
};

for (const key in DayOfWeek) {
  if (Object.prototype.hasOwnProperty.call(DayOfWeek, key)) {
    isWeekend(key as DayOfWeekKeys);
  }
}

export {};
