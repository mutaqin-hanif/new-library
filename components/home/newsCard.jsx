import React from "react";
import CalendarIcon from "@/components/icons/calendar";
import PinPoint from "../icons/pinPoint";
import Wallet from "../icons/wallet";
import Cards from "../icons/cards";

export default function ({
  newsThumbnail,
  newsType,
  newsTitle,
  newsDate,
  eventDate,
  eventLocation,
  eventPaid,
  eventGift,
}) {
  function dateDifference(date1, date2) {
    let firstDate = new Date(date1);
    let secondDate = new Date(date2);
    let differenceInMilliseconds = secondDate - firstDate;
    let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    return differenceInDays;
  }

  const dateRange = Math.round(dateDifference(new Date(), new Date(newsDate)));
  const dateRangeMonth =
    Math.abs(dateRange) > 30
      ? { number: Math.round(dateRange / 30), unit: "month" }
      : { number: dateRange, unit: "day" };
  const relativeTime = new Intl.RelativeTimeFormat("id", { style: "long" });

  return (
    <div className="p-5 bg-white rounded-md flex items-center gap-x-5">
      <img src={newsThumbnail} alt="News" className="w-12 h-12 rounded-full" />
      <div className="flex flex-col gap-y-1 flex-1">
        <div className="flex justify-between">
          <span>{newsType}</span>
          <span>
            {relativeTime.format(dateRangeMonth.number, dateRangeMonth.unit)}
          </span>
        </div>
        <p className="text-xl font-semibold">{newsTitle}</p>
        <div className="flex gap-x-5 text-gray-500">
          <span className="flex items-center gap-x-1">
            <CalendarIcon />
            {eventDate}
          </span>
          <span className="flex items-center gap-x-1">
            <PinPoint />
            {eventLocation}
          </span>
          <span className="flex items-center gap-x-1">
            <Wallet />
            {eventPaid}
          </span>
          <span className="flex items-center gap-x-1">
            <Cards />
            {eventGift}
          </span>
        </div>
      </div>
    </div>
  );
}
