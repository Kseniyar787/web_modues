import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';

export function getDatesDif({ from, to }) {
    if (from > to) {
        [to, from] = [from, to]
    }

    let toDate = DateTime.fromISO(to);
    let fromDate = DateTime.fromISO(from);

    return toDate.diff(fromDate, ["years", "months", "days"]).toObject();
}