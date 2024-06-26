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
export function isUrl(str) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(str);
}
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
export function isHttpsUrl(str) {
    return /^(?:(?:https:)?\/\/)(?:(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(str);
}
