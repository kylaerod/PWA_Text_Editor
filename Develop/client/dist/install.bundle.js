/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\nlet deferredPrompt; \n\n// Logic for installing the PWA\nwindow.addEventListener('beforeinstallprompt', (event) => {\n\n    // Prevent automatic prompt display\n    event.preventDefault();\n  \n    // Store the prompt for later use\n    deferredPrompt = event;\n  \n    // Update the button UI to enable installation\n    butInstall.style.display = 'block'\n});\n\n\nbutInstall.addEventListener('click', async () => {\n    if (deferredPrompt) {\n        // Trigger the prompt manually\n        deferredPrompt.prompt();\n    \n        // Await user's choice\n        const { outcome } = await deferredPrompt.userChoice;\n    \n        if (outcome === 'accepted') {\n          console.log('PWA installation accepted!');\n         \n        } else {\n          console.log('PWA installation declined.');\n        }\n    \n        deferredPrompt = null;\n      } else {\n        console.log('Unable to trigger prompt.');\n}});\n\nwindow.addEventListener('appinstalled', (event) => {\n    console.log('PWA has been installed!');\n});\n\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;