import dayjs from "dayjs";
import jalaliday from "jalaliday";
import utc from "dayjs/plugin/utc";
import { formatDigits } from "./text";

dayjs.extend(utc);
dayjs.extend(jalaliday);

const toLocalDate = (
    date: string,
    type: "short" | "long" | "month-year" = "long"
): string =>
    formatDigits(
        dayjs
            .utc(date)
            .local()
            .calendar("jalali")
            .locale("fa")
            .format(
                type === "long"
                    ? "D MMMM YYYY، ساعت HH:mm"
                    : type === "month-year"
                    ? "MMMM YYYY"
                    : "YYYY/MM/DD"
            ),
        "persian"
    );

const calculateAge = (date: string): number =>
    dayjs(Date()).diff(dayjs(date), "year");

export { toLocalDate, calculateAge };
