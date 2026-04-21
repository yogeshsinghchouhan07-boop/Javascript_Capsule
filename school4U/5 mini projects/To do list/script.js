let listContainer = document.querySelector('.listContainer');
let addInput = document.querySelector('.inputText');
let addBtn = document.querySelector('.addButton');

let list = [];

function renderList(arr) {
    listContainer.innerHTML = '';

    arr.forEach((obj) => {
        let divElement = document.createElement('div');
        divElement.classList.add('list');

        let textElem = document.createElement('p');
        textElem.innerText = obj.text;

        let buttonElem = document.createElement('button');
        buttonElem.innerText = '❌';

        buttonElem.addEventListener('click', () => {
            removeItem(obj.id);
        });

        divElement.appendChild(textElem);
        divElement.appendChild(buttonElem);
        listContainer.appendChild(divElement);
    });
}

function handleAddList() {
    let value = addInput.value.trim();

    if (value === '') {
        return;
    }

    let obj = {
        id: Date.now(),
        text: value
    };

    list.push(obj);
    renderList(list);
    addInput.value = '';
}

function removeItem(id) {
    list = list.filter((obj) => obj.id !== id);
    renderList(list);
}

addBtn.addEventListener('click', handleAddList);

addInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleAddList();
    }
});

renderList(list);