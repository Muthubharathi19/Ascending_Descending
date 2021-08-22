<h1> Hi, Find here ascending and descending using Javascript</h1>

Create the layout and styles as you like, you could find below my layout

<img src="https://github.com/Muthubharathi19/Ascending_Descending/blob/master/ascending&descending.PNG?raw=true?raw=true" width="100%">

This is my full HTML code

    <html>

    <head>
        <title>Ascending and Descending order</title>
        <script src="index.js"></script>
    </head>

    <body>
        <div class="container">
            <div class="box-header">
                <h1 class="header-card">Ascending and Descending order</h1>
                <p class="header-card">Find the ascending and descending order here ...</p>
            </div>
            <div class="box-container">
                <p class="header-text">Ascending Order</p>
                <input type="text" id="ascending-dependency">
                <button class="math-button" onClick="ascending()">Ascending</button>
                <p id="ascending-value"></p>
            </div>
            <div class="box-container">
                <p class="header-text">Descending Order</p>
                <input type="text" id="descending-dependency">
                <button class="math-button" onClick="descending()">Descending</button>
                <p id="descending-value"></p>
            </div>
        </div>
    </body>

    </html>
    
While clicking ascending button after entering some strings with "," separation it calls **ascending()** method then get user input from input element using "id"

    const ascendingInputValue = document.getElementById("ascending-dependency").value;
  
Now create a method to split the values and convert it from string to int

    let splitValue = (input) => input.split(",").map(function (item) {
    return parseInt(item, 10);
    });

Now passing user input to **splitValue()** function, it return splited and integer values

    const myArr = splitValue(ascendingInputValue);
    
Now create **sort()** for ascending order 

    let sortValue = (sortVal) => sortVal.sort(function (a, b) {
    return a - b;
    });

  Note: For sorting numbers we need to pass this anonymous function as an arguments to sort method

Now passing int value which we have in **myArr** to **sortValue()** function, it return sorted value

    const sortedValue = sortValue(myArr);
    
Now append this value to html element

    document.getElementById("ascending-value").innerHTML = sortedValue;

The same procedure we need to do for **Descending order** also, additionally we have to reverse the sorted numbers create **reverseValue()** function

    let reverseValue = (reverseVal) => reverseVal.reverse();
    
Pass the sorted value to **reverseValue()** function
    
      const reversedValue = reverseValue(sortedValue);
    
 Find below the complete js code 
 
    let splitValue = (input) => input.split(",").map(function (item) {
    return parseInt(item, 10);
    });
    let sortValue = (sortVal) => sortVal.sort(function (a, b) {
        return a - b;
    });
    let reverseValue = (reverseVal) => reverseVal.reverse();

    function ascending() {
        const ascendingInputValue = document.getElementById("ascending-dependency").value;
        const myArr = splitValue(ascendingInputValue);
        const sortedValue = sortValue(myArr);
        document.getElementById("ascending-value").innerHTML = sortedValue;
    }

    function descending() {
        const descendingInputValue = document.getElementById("descending-dependency").value;
        const myArr = splitValue(descendingInputValue);
        const sortedValue = sortValue(myArr);
        const reversedValue = reverseValue(sortedValue);
        document.getElementById("descending-value").innerHTML = reversedValue;
    }

And finally this is how the output:

<img src="https://github.com/Muthubharathi19/Ascending_Descending/blob/master/Ascending-value.PNG?raw=true?raw=true" width="100%">

    
