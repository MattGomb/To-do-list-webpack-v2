/** * @jest-environment jsdom */

import Storage from "./storage";

window.localStorage = Storage.prototype;

