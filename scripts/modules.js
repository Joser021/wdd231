import byuiCourse from "./course.mjs";
import { setSectionSelection, populateSections } from "./sections.mjs";
import { setTitle, renderSections } from "./output.mjs";


setTitle(byuiCourse);
populateSections(byuiCourse.sections);
renderSections(byuiCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
const sectionNum = Number(document.querySelector("#sectionNumber").value);
if (!sectionNum) return;
byuiCourse.changeEnrollment(sectionNum, true);
renderSections(byuiCourse.sections);
});


document.querySelector("#dropStudent").addEventListener("click", function () {
const sectionNum = Number(document.querySelector("#sectionNumber").value);
if (!sectionNum) return;
byuiCourse.changeEnrollment(sectionNum, false);
renderSections(byuiCourse.sections);
});

