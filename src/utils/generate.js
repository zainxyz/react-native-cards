import uuidV4 from 'uuid/v4';

/**
 * Generate a unique ID
 *
 * @method generateID
 * @return {string}   The uniquely generated ID
 */
export const generateID = () => uuidV4();

/**
 * Generate a unique Key (which is not as long as a UUID)
 *
 * @method generateKey
 * @return {string}    The uniquely generated Key
 */
export const generateKey = () => {
  const id = uuidV4();

  return id.substring(id.length - 12);
};
