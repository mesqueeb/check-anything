/**
 * Returns `true` if the string is a valid URL. Allows:
 *
 * - Http(s) URLs
 * - Ftp URLs
 * - IP URLs (existing of only numbers)
 * - Password URLs
 * - URLs with special characters
 *
 * Doesn't allow mailto: URLs
 */
export declare function isUrl(str: string): boolean;
/**
 * Returns `true` if the string is a regular `https://` url
 *
 * `isHttpsUrl` is **opiniated**, it will return `false` for the following list:
 *
 * - Http URLs
 * - Ftp URLs
 * - IP URLs (existing of only numbers)
 * - Password URLs
 * - Mailto URLs
 */
export declare function isHttpsUrl(str: string): boolean;
