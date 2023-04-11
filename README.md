# Licence Credits Js

This project demonstrates how to generate and display credits for the third party licences used within an HTML/CSS/JavaScript application. This code should be easily adaptable to JavaScript front end applications, including those built with React. Versions of this project for Angular and Vue.Js can be found at  [LicenceCreditsNg](https://github.com/SteveCorbett/LicenceCreditsNg) and [LicenceCreditsVue](https://github.com/SteveCorbett/LicenceCreditsVue) respectively.

There are two package.json scripts that are required to extract and format the licence details.

A post-install script runs the [NPM License Checker](https://www.npmjs.com/package/license-checker) package to create a JSON file containing the licence details of all the production dependancies of the project. Note that License Checker may not be able to identify the licences of those packages whose licence files are not available or are in unusual places. More details can be found in the License Checker documentation.

A pre-build script is run to parse the extracted JSON file and place it into the public directory. This script consolidates multiple entries for the same publisher that have the same licence.

At run-time, the JavaScript reads this file and displays the details.

## Using This Code

This code is provide under the 0BSD licence, meaning that you can use, modify and adapt this code as you see fit. Refer to this project's licence file for details.

First copy the extractLicences.js file into the root directory of the project. Then add the following two scripts into the package.json file:

```
    "prebuild": "node extractLicences.js",
    "postinstall": "license-checker --production --json > ./licences.json"
```

Add License Checker to the project. If you are using the NPM package manager:
```
npm i license-checker --save-dev
```
If you are using the Yarn package manager:
```
yarn add license-checker --dev
``` 

The first time after installing the License Checker package you may need to maually run the post install and prebuild processes using:
```
npm run postinstall
npm run prebuild
```

Finally, place the code from /src/index.js and the html from /index.html into an appropriate place in your project, customise the headings, and apply styling as required.

## Additional Notes 
- This project is using Webpack and is built using the 'npm run build' command. If you are not building your project then you will need to run the postinstall script manually.
- This project's package.json file contains dependancies for the roboto-fontface and webfontloader packages. These packages are not used by this project, but have been added to ensure that there are credits to be displayed for this project.