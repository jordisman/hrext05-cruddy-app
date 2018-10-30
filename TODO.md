### Cruddy App Todo

#### Basic Improvments (requirements)

- [ ] create indivdiual items

        - create an unorder list structure in html
        - add new list item to ToDo list when add-text-btn is clicked
        - append the new list item to the ToDo list 
        - create function that will store input items to the list 

        
- [ ] delete individual items

        - remove a task from the ToDo list when the delete button is clicked
        
- [ ] edit individual items

        - change text content by clicking on edit button
        - add ability to toggle a single item
        - click and drag to reorder the items
        - click the item to mark as completed
        

##### Notes
- [ ] Keep DOM and localStorage matching 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)

#### My Spin

    - add css to beautify the interface (practice css)
    - add animation effect with jQuery UI (explore more jquery)
