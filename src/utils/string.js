import _truncate from 'lodash/truncate';

/**
 * Truncate a string to a given length
 *
 * @method truncateString
 * @param  {string}        str      The string to truncate
 * @param  {Integer}       length   The length to truncate the string to
 * @param  {string}        omission The string to indicate text is omitted
 * @return {string}                 The truncated string
 */
export const truncateString = (str, length, omission = '...') =>
  _truncate(str, {
    length,
    omission
  });
