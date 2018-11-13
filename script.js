
// Add button clicked
// If text entered in input field, add text to list
document.getElementById('add').addEventListener('click', function() {
    let value = document.getElementById('item').value;
    if (value) {
        addItemToDo(value);
        document.getElementById('item').value = '';
    }
});

function removeItem(){
   let item = this.parentNode.parentNode;
   let parent = item.parentNode;
   parent.removeChild(item);
};

function completeItem(){
    let list = this.parentNode.parentNode.parentNode;
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let x = this.parentNode;
    parent.removeChild(item);
    list.appendChild(item);
    x.removeChild(this);
    item.classList.add('completed');
};

// Add new item to list

function addItemToDo(text){

    let list = document.getElementById('toDo');

    let item = document.createElement('li');
    item.innerText = text;

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerText = 'Delete';
    //add event to remove item on click
    remove.addEventListener('click', removeItem);

    let complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerText = 'Complete';
    //add event to check off completed tasks
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]);
};