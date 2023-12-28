import { parseISO, format } from "date-fns";
import React from "react";

export default function HumanDate({ dateString }) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, "MMM	d, yyyy")}</time>;
}
