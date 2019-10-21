var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var item = document.getElementById('item');
var submitItem = document.getElementById('submitItem');
var filter = document.getElementById("filter");

var num;
//Submit Event
submitItem.addEventListener('click', addItem);

//Delete Event (the itemlist gets us the whole list of items)
itemList.addEventListener('click', deleteItem);

//Filter Event
filter.addEventListener('keyup', filterItem);

//Adding an item to the list
function addItem(e) {
    e.preventDefault();
    //Get input value
    var newItem = item.value;
    //Create new li 
    var li = document.createElement('li');
    //add class to li element
    li.className = 'list-group-item';
    //create new button
    var deleteBtn = document.createElement('button');
    //add class to button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //add text node to li with the item value
    li.appendChild(document.createTextNode(newItem));
    //add text to the deleteBtn
    deleteBtn.appendChild(document.createTextNode('X'));
    // append delete button to li;
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

}

// Delete Function
function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
            //localStorage.removeItem(item);
        }
    }
}

//Filter Function
function filterItem(e) {
    var searchItem = e.target.value.toLowerCase();

    //get the list of items
    var items = itemList.getElementsByTagName('li')

    //Convert HTML Object List to Array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        // checking if the text matches condition
        if (itemName.toLowerCase().indexOf(searchItem) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    })
}


//Adding Local Stoag