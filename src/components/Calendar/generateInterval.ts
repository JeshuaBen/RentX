import { eachDayOfInterval, format } from "date-fns";

import { DayProps, MarkedDateProps } from ".";
import { getPlatformDate } from "../../utils/getPlataformDate";
import theme from "../../styles/theme";
import { CalendarListProps } from "react-native-calendars";

export const generateIntervals = (start: DayProps, end: DayProps) => {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  });
};
