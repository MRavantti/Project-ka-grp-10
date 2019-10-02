### Install

Run `npm install` in your terminal to install all dependencies

### Update

Run `npm run update` to fetch all api data from YouTube and SoundCloud

### Start

Run `npm start` to start the server 

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
#
#### Comments
##### General
* Fix warnings in console.
	* Remove unused variables/imports.
* Consider using a css-in-js library such as [Emotion]([https://emotion.sh/docs/styled](https://emotion.sh/docs/styled)) or [Styled-Components]([[https://www.styled-components.com/docs](https://www.styled-components.com/docs)])
* Include .env example file.
* Remove CSS/Code that has been commented out. Consider using a [linter]([https://eslint.org/](https://eslint.org/)) that warns you before pushing to git.
* Add alt property to img-tags for SEO.
* Inconsistent indentation (some places have 4 spaces and other 2). Consider [configuring Prettier for the project]([https://prettier.io/docs/en/configuration.html](https://prettier.io/docs/en/configuration.html))

##
##### Files
* Public/
	* worker 2.js is not used.
* apis/durationFunction.js
	* avoid naming variables "a" and "ret" to improve readability.
	* usage of "var" to declare variables is outdated.
	* Possible to use third-party solutions for time formatting such as Moment.js. <br/>it has iso8601 conversion: `moment.duration('PT15M33S').asMilliseconds();` out of the box.
* apis/fetchData.js
	* Does not work without env variables.
* src/Pages/RegistrationPage.js
	* Inconsistent use of Class component. Can be rewritten as a stateless functional component and hooks.
 	* Can use state variables instead of "progression : 1, 2, 3...". For instance "hasFilledForm" and "hasReferredFriend".
 * src/Components/TextContainer/index.js
	 * Nested ternary seems overkill to determine the length of description. It can also be hard to follow the logic. Consider breaking apart the expression into two or three shorter expressions, maybe make use the `&&` operator.
 * src/Components/ContentContainer/index.js
	 * The "show more" functionality could be broken out into a method instead of manually calling `array.slice(x,y)` every time.
 * src/Components/YouTubePlayer/style.css
	 * Consider adding `overflow-y: hidden` to the `.youtube-player`class.
 * src/Components/CoursePageHero/index.js
	 * Remove console.log. Consider using a [linter]([https://eslint.org/](https://eslint.org/)) that warns you before pushing to git.
 * src/Pages
	 * Rename style.css to "RelatedPage.css" or move RelatedPage and the style file into a folder.
 * src/Components/CategoryPageHero/index.js
	 * The Capitalize method can be replaced with `text-transform: capitalize` <br/>
	 * Avoid nesting ternaries.
