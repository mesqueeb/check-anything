/**
 * Returns `true` if the string is a valid URL.
 * Allows:
 * - http(s) URLs
 * - ftp URLs
 * - IP URLs (existing of only numbers)
 * - password URLs
 * - URLs with special characters
 *
 * Doesn't allow mailto: URLs
 */
export declare function isUrl(str: string): boolean;
/**
 * Returns `true` if the string is a regular `https://` url
 *
 * `isHttpsUrl` is **opiniated**, it will return `false` for the following list:
 * - http URLs
 * - ftp URLs
 * - IP URLs (existing of only numbers)
 * - password URLs
 * - mailto URLs
 */
export declare function isHttpsUrl(str: string): boolean;
