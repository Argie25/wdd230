const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const output = document.querySelector('#list');

let chaptersArray = getChapterArrayList() || [];

// Display existing chapters on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value.trim() !== "") { // Ensure input is not empty or just spaces
        displayList(input.value);

        chaptersArray.push(input.value);
        setChapterList();

        input.value = '';  // Clear input
        input.focus();  // Fix typo: `fucos` → `focus`
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');

    li.textContent = item;
    delBtn.textContent = '❌';
    delBtn.classList.add('delete');

    li.appendChild(delBtn);
    output.appendChild(li);

    delBtn.addEventListener('click', () => {
        output.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterArrayList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove last character (❌)
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
