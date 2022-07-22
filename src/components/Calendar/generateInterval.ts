import { eachDayOfInterval, format } from "date-fns";

import { DayProps, MarkedDateProps } from ".";
import { getPlatformDate } from "../../utils/getPlataformDate";
import theme from "../../styles/theme";
import { CalendarProps } from "react-native-calendars";
import { MarkedDatesType } from "react-native-calendars/src/calendar";

export const generateIntervals = (start: DayProps, end: DayProps) => {
  let interval: MarkedDatesType = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM--dd");

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return interval;
};
