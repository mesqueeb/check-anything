# Check Anything 👁

<a href="https://www.npmjs.com/package/check-anything"><img src="https://img.shields.io/npm/v/check-anything.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/check-anything"><img src="https://img.shields.io/npm/dw/check-anything.svg" alt="Latest Stable Version"></a>

```
npm i check-anything
```

Check anything from URLs to Email addresses.

## Usage

```js
import { isUrl, isHttpsUrl, isEmail } from 'check-anything'

isHttpsUrl('https://github.com') // true

isUrl('ftp://foo.bar/baz') // true

isEmail('me@github.com') // true
```

### Https vs Http vs FTP vs other URLs

You usually want to use `isHttpsUrl` instead of `isUrl`. It will limit the URLs to just regular `https://` urls and also has the smallest footprint.

#### isHttpsUrl

`isHttpsUrl` is **opiniated**, it will return `false` for the following list to keep the source code small and simple.

- http URLs
- ftp URLs
- IP URLs (existing of only numbers)
- password URLs
- mailto URLs

```js
import { isHttpsUrl } from 'check-anything'

// returns true:
isHttpsUrl('https://github.com')
isHttpsUrl('https://ギットハブ.com') // special characters in domain
isHttpsUrl('https://github.com/ギットハブ') // special characters in URI

// returns false:
isHttpsUrl('http://github.com') // http
isHttpsUrl('ftp://foo.bar/baz') // ftp
isHttpsUrl('https://142.42.1.1/') // ip
isHttpsUrl('https://userid:password@example.com') // password
isHttpsUrl('mailto:me@github.com') // mailto URLs
```

#### isUrl

`isUrl` on the other hand will return `true` for all of these, except for the `mailto:` URL.

```js
import { isUrl } from 'check-anything'

// returns true:
isUrl('https://github.com')
isUrl('https://ギットハブ.com') // special characters in domain
isUrl('https://github.com/ギットハブ') // special characters in URI
isUrl('http://github.com') // http
isUrl('ftp://foo.bar/baz') // ftp
isUrl('https://142.42.1.1/') // ip
isUrl('https://userid:password@example.com') // password

// returns false:
isUrl('mailto:me@github.com') // mailto URLs
```

### TODO

Let me know if you are interested in any of these functions, I will consider adding them:

- [ ] `isProbableUrl` — to allow URLs like `'github.com'` without protocol (has chance of failure though)
- [ ] `isFtpUrl`
- [ ] `isPasswordUrl`
- [ ] `isIpUrl`
- [ ] `isMailtoUrl`

## Meet the family (more tiny utils with TS support)

- [is-what 🙉](https://github.com/mesqueeb/is-what)
- [is-where 🙈](https://github.com/mesqueeb/is-where)
- [merge-anything 🥡](https://github.com/mesqueeb/merge-anything)
- [check-anything 👁](https://github.com/mesqueeb/check-anything)
- [remove-anything ✂️](https://github.com/mesqueeb/remove-anything)
- [getorset-anything 🐊](https://github.com/mesqueeb/getorset-anything)
- [map-anything 🗺](https://github.com/mesqueeb/map-anything)
- [filter-anything ⚔️](https://github.com/mesqueeb/filter-anything)
- [copy-anything 🎭](https://github.com/mesqueeb/copy-anything)
- [case-anything 🐫](https://github.com/mesqueeb/case-anything)
- [flatten-anything 🏏](https://github.com/mesqueeb/flatten-anything)
- [nestify-anything 🧅](https://github.com/mesqueeb/nestify-anything)
