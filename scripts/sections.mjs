export function setSectionSelection() {}

export function populateSections(sections) {
const sectionSelect = document.querySelector("#sectionNumber");
const existing = Array.from(sectionSelect.querySelectorAll("option"));
existing.forEach((opt, idx) => {
if (idx > 0) opt.remove();
});


sections.forEach((section) => {
const option = document.createElement("option");
option.value = section.sectionNumber;
option.textContent = `${section.sectionNumber}`;
sectionSelect.appendChild(option);
});
}
