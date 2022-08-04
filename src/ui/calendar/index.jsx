import { useState, useEffect } from "react";
import {
  parseISO,
  format,
  isBefore,
  isAfter,
  isSameDay,
  addDays,
  subDays,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
} from "date-fns";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function Calendar({
  value = new Date().toString(),
  onChange = () => {},
  minDate,
  modal = false,
  events = [],
}) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(
      buildCalendar(value.length === 0 ? new Date() : new Date(value))
    );
  }, [value]);

  function buildCalendar(date) {
    const a = [];
    const startDay = startOfWeek(startOfMonth(new Date(date)));
    const endDay = endOfWeek(endOfMonth(new Date(date)));

    let _date = subDays(startDay, 1);
    let max = 60;

    for (let i = 0; i < max; i++) {
      if (isAfter(_date, endDay)) break;
      a.push(
        [...new Array(7)].map(() => {
          _date = addDays(_date, 1);
          return _date;
        })
      );
    }

    return a;
  }

  function dayClassName(date) {
    if (isSameDay(new Date(value), date)) return "text-green-700 bg-green-100";
    if (isBefore(date, new Date())) return "text-gray-500 bg-gray-100";

    return "bg-white";
  }

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function eventsForDay(day) {
    return events.filter((event) => isSameDay(new Date(event.date), day));
  }

  return (
    <div className={`w-full shadow`}>
      <div className="flex items-center justify-around w-full bg-white border border-gray-100 ">
        {dayNames.map((day) => (
          <div className="py-6 text-sm font-medium uppercase ">
            {day.slice(0, 3)}
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 text-blue-600 bg-white border border-blue-100 bg-blue-50">
        <div className="mx-8">
          <ChevronLeftIcon
            onClick={() => onChange(subMonths(new Date(value), 1))}
            className={modal ? "h-6 w-6" : "h-12 w-12"}
          />
        </div>
        <div
          className={`flex-grow text-center ${
            modal ? "text-lg" : "text-2xl"
          } font-light`}>
          {value && format(new Date(value), "MMMM")}{" "}
          {value && format(new Date(value), "yyyy")}
        </div>
        <div className="mx-8">
          <ChevronRightIcon
            onClick={() => onChange(addMonths(new Date(value), 1))}
            className={modal ? "h-6 w-6" : "h-12 w-12"}
          />
        </div>
      </div>
      <div className="w-full ">
        {calendar.map((week, wi) => (
          <div
            className={`flex items-center w-full justify-around ${
              modal ? "h-16" : "h-16 md:h-24"
            } `}>
            {week.map((day, di) => {
              return (
                <div
                  onClick={() => {
                    if (minDate && day < minDate) return;
                    onChange(format(day, "yyyy/MM/dd"));
                  }}
                  className={`cursor-pointer ${wi > 0 ? "border-t" : ""} ${
                    di > 0 && "border-l"
                  } w-full h-full flex items-start justify-end ${dayClassName(
                    day
                  )}`}>
                  <div>
                    <div
                      className={`m-2 md:border ${
                        isSameDay(day, new Date(value))
                          ? "bg-white border-green-200"
                          : "border-white"
                      } rounded-full w-10 h-10 flex items-center justify-center `}>
                      {format(day, "d")}
                    </div>
                    <div className=" ">
                      {eventsForDay(day)?.length > 0 &&
                        eventsForDay(day)?.length}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
