/* import js file */

import { handelSubmit } from "./js/handelSubmit.js";
import { getData } from "./js/getData.js";
import { postData } from "./js/postData.js";
import { updateData } from "./js/updateData.js";

// Event listener
const form = document.getElementById("my_form");
form.addEventListener("submit", handelSubmit);

/* import scss file */
import "./styles/base.scss";
import "./styles/btn.scss";
import "./styles/img.scss";
import "./styles/input.scss";
import "./styles/result.scss";

module.exports = { handelSubmit, getData, postData, updateData };
