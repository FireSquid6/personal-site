"use client";

// date-fns is a modern JavaScript date utility library
// https://date-fns.org/
import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  const string = format(date, "LLL d, yyyy");

  return <time dateTime={dateString}>{string}</time>;
  // view different format() string options here:
  // https://date-fns.org/v2.16.1/docs/format
}
