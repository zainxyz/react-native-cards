import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import format from 'date-fns/format';
import getTime from 'date-fns/get_time';

import { DATE_FORMAT, TIME_FORMAT } from './constants';

/**
 * Get the current date in a unix timestamp value
 *
 * @method getCurrentTimestamp
 * @return {Integer}            The current date in unix timestamp format
 */
export const getCurrentTimestamp = () => getTime(new Date());

/**
 * Format the given timestamp to a human readable date format
 *
 * @method formatDate
 * @param  {number|string} timestamp The given timestamp
 * @return {string}
 */
export const formatDate = timestamp => format(timestamp, DATE_FORMAT);

/**
 * Format the given timestamp to a human readble time format
 *
 * @method formatTime
 * @param  {number|string} timestamp The given timestamp
 * @return {string}
 */
export const formatTime = timestamp => format(timestamp, TIME_FORMAT);

/**
 * Format the given timestamp to a human readable date, with date and timestamp
 *
 * @method formatDateWithTime
 * @param  {number|string}    timestamp The given timestamp
 * @return {string}
 */
export const formatDateWithTime = timestamp =>
  `${formatDate(timestamp)} at ${formatTime(timestamp)}`;

export const dateTillNow = timestamp => `${distanceInWordsToNow(timestamp)} ago`;
