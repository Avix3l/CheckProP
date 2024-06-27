window.onload = function() {
    // No save functionality for now
};

function addCategory() {
    const categoryContainer = document.createElement('div');
    categoryContainer.className = 'category';

    const categoryNameInput = document.createElement('input');
    categoryNameInput.type = 'text';
    categoryNameInput.placeholder = 'Category Name';
    categoryNameInput.className = 'category-name-input';

    const addItemButton = createButton('New Item', 'new', function() {
        addItem(categoryContainer);
    });

    const deleteButton = createButton('Delete Category', 'delete', function() {
        if (confirm('Are you sure you want to delete this category?')) {
            categoryContainer.remove();
        }
    });

    const deleteAllCompletedButton = createButton('Delete All Completed', 'delete-all', function() {
        if (confirm('Are you sure you want to delete all completed items in this category?')) {
            const items = categoryContainer.getElementsByClassName('item');
            for (let i = items.length - 1; i >= 0; i--) {
                const item = items[i];
                const checkbox = item.querySelector('input[type="checkbox"]');
                if (checkbox.checked) {
                    item.remove();
                }
            }
        }
    });

    categoryContainer.appendChild(categoryNameInput);
    categoryContainer.appendChild(addItemButton);
    categoryContainer.appendChild(deleteButton);
    categoryContainer.appendChild(deleteAllCompletedButton);
    document.getElementById('categories').appendChild(categoryContainer);
}

function addItem(categoryContainer) {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const itemNameInput = document.createElement('input');
    itemNameInput.type = 'text';
    itemNameInput.placeholder = 'Item Name';
    itemNameInput.className = 'item-name-input';

    const priorityInput = document.createElement('input');
    priorityInput.type = 'text';
    priorityInput.placeholder = 'Priority';
    priorityInput.className = 'priority-input';

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'text';
    dueDateInput.placeholder = 'Due Date';
    dueDateInput.className = 'due-date-input';

    const deleteButton = createButton('Delete Item', 'delete', function() {
        if (confirm('Are you sure you want to delete this item?')) {
            itemContainer.remove();
        }
    });

    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(itemNameInput);
    itemContainer.appendChild(priorityInput);
    itemContainer.appendChild(dueDateInput);
    itemContainer.appendChild(deleteButton);
    categoryContainer.appendChild(itemContainer);
}

function createButton(text, className, onclick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    button.onclick = onclick;

    // Apply button color based on class name
    if (className === 'delete' || className === 'delete-all') {
        button.style.backgroundColor = '#f44336'; // Red for Delete buttons
    } else if (className === 'new') {
        button.style.backgroundColor = '#4CAF50'; // Green for New button
    }

    return button;
}
