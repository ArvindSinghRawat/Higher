import React from "react";
import CalendarItemComponent from "./CalendarItemComponent";

type CalendarItemComponentProps = {
  month: number;
  year: number;
};

/**
 * Returns a list of components which can be used for the monthly calendar page
 * @param month - Number of month for which calender's page is requested, starts from 1 for January
 * @param year - Year for which page is requested
 * @returns List of components for all of the dates of the month of an year
 */
export default function CalendarItemGenerator({
  month,
  year,
}: CalendarItemComponentProps) {
  const dateList = [];

  const firstDate = new Date(year, month - 1);
  const firstDay = firstDate.getDay();

  let row = 0;
  let col = firstDay;
  let currentDate = new Date(year, month - 1);
  let negative_col;

  // Render before first date of the month
  for (negative_col = 0; negative_col < firstDay; negative_col++) {
    currentDate.setDate(currentDate.getDate() - 1);
    dateList.unshift(
      <CalendarItemComponent
        key={Math.floor(Math.random() * 10000)}
        label={currentDate.getDate().toString()}
        is_muted={true}
      />
    );
  }

  currentDate = new Date(year, month - 1);

  // Render after first date of the month
  for (row = 0; row < 7; row++) {
    for (col; col < 7; col++) {
      if (currentDate.getMonth() === firstDate.getMonth()) {
        dateList.push(
          <CalendarItemComponent label={currentDate.getDate().toString()} />
        );
      } else if (currentDate.getMonth() > firstDate.getMonth()) {
        dateList.push(
          <CalendarItemComponent
            label={currentDate.getDate().toString()}
            is_muted={true}
          />
        );
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    if (currentDate.getMonth() > firstDate.getMonth()) break;
    col = 0;
  }
  return dateList;
}
