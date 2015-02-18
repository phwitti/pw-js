# pw.js

pw.js could propably be defined as 'minimal two-chars helper-library' for javascript. It has no dependencies is pretty small and provides shortcuts for some of the most common javascript calls and snippets. The library was created for a small private project and raises no claim for completeness. Still, if you think it's useful for you, feel free to use it. If you think it should provide certain additional shortcuts feel free to comment or fork and create pull requests.

# Currently provided shortcuts


- `pw.by.cn(parent, className)`:
  Same as `parent.getElementByClassName(className)`.
- `pw.by.id(id)`:
  Same as `document.getElementById(id)`.
- `pw.ca(element, className)`:
  Adds the css-class `className` to `element`, if it doesn't already have it.
- `pw.ch(element, className)`: Returns true, if `element` has the css-class `className`, false otherwise.
- `pw.cr(element, className)`: Removes the css-class `className` from `element`.
- `pw.wc(element)`: Wraps `element` inside an div-block and returns the created div-element.
- `pw.wr(element)`: Unwraps an `element` by moving it outside of its parent and removing its former parent afterwards.
- `pw.xc(callType, url, fn)`: Create an Ajax-Call (with `xmlhttp`) on the `url`, using the provided `callType` and call the callback-function (`fn`) on success with the response-text as single parameter.
- `pw.xg(url, fn)`: Shortcut for `pw.xc('GET', url, fn)`.
- `pw.xp(url, fn)`: Shortcut for `pw.xc('POST', url, fn)`.
