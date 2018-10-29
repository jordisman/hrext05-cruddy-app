### Cruddy App Todo

#### Basic Improvments (requirements)

- [ ] create indivdiual items
        create an unorder list structure in html
        add new note on click of the button
        create a function that will add input text to the list 

        
- [ ] delete individual items
        remove text in notes when click on the item
        
- [ ] edit individual items
        change text content
        add ability to toggle a single item
        click and drag to reorder the item
        click the item to mark as complete
        

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
add css to beautify the interface
add animation effect with jQuery
