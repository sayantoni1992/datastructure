
function LinkedList() {

    console.log("Inside Constructor");
    let count = 0;
    let head = null;

    this.GetCount = function() {
        console.log("Inside Get Count");
        return count;
    }

    this.DisplayAll = function(){
        console.log("Inside Display All");
        if(head === null) { return null;}
        else {
            var arr = new Array();
            var current = head;
            var text = "<h2>The LinkedList Output is :</h2>"
            //var text = "";

            for(let i= 0; i < count; i++) {
                arr[i] = current.data;
                console.log("Value at position " + i + " is " + arr[i]);
                text += "<li>"+arr[i]+"</li>";
                current = current.next;

            }

            document.getElementById("output-list").innerHTML = text;
            return arr;
            
        }
    }

    this.AddFirst = function(data) {
        console.log("Inside Add First");
        let node = {
            data: data,
            next: head
        };

        head = node;
        count++;

    }

    this.Add = function(data, index) {
        console.log("Inside Only Add");

        if(index === 0) {
            this.AddFirst(data);
        }
        else if(index > -1 && index <= count) {
            console.log("Inside the count range");
            var node = {
            data: data,
            next: null
        };
        let previous;
        let current = head;

        let i= 0;

        while(i++ < index) {
            previous = current;
            current = current.next;
        }

        previous.next = node;
        node.next = current;

        count++;
        }

        else {
            alert("Error. Index outside Range");
        }
    }

    this.RemoveFirst = function() {
        if(head === null) {
            return null;
        }
        else {
            head = head.next;
            count--;
        }
    }

    this.RemoveAt = function(index) {
        if(head === null || (index < 0 && index > count)) {
            return null;
        }
        else {
            let current = head;
            let previous;
            let i= 0;

            while(i < index) {
                previous = current;
                current = current.next;
                i++;
            }

            previous.next = current.next;
            count--;
        }
    }

    this.ClearList = function() {
        head = null;
        count = 0;
    }

}

function to_add() {
    var add_value = document.getElementById("to-add-value").value;
    console.log("Value to be added is : " + add_value);
    var add_position = document.getElementById("to-add-position").value;
    console.log("Value to be added is : " + add_position);

    if(add_value != "") {

    count = minlista.GetCount();
    add_position = add_position - 1;// User inputs the value of the position as seen. Count doesnt start from 0

    if(count == 0) {
        minlista.AddFirst(add_value);
    }
    else {
        minlista.Add(add_value, add_position);
    }

    minlista.GetCount();
    console.log("The count of the List is : " + count);
    minlista.DisplayAll();
}

else {
    alert("The value to be added is not entered. Please try again");
}

}

function to_remove() {
    
    var remove_position = document.getElementById("to-remove-position").value;
    console.log("Value to be added is : " + remove_position);
    parseInt(remove_position);

    count = minlista.GetCount();

    if(remove_position >= 2 && remove_position <= count) {
        remove_position = remove_position - 1;
        minlista.RemoveAt(remove_position);
    }
    else {
        minlista.RemoveFirst();
    }

    document.getElementById("to-remove-position").value = "";

    count = minlista.GetCount();
    console.log("The count of the List is : " + count);

    if(count > 0) {
    minlista.DisplayAll();
    }
    else {
        document.getElementById("output-list").innerHTML = "Nothing to display";
    }

}

function to_display() {
    count = minlista.GetCount();
    console.log("The count of the List is : " + count);
    if(count > 0) {    
    minlista.DisplayAll();
    }
    else {
        document.getElementById("output-list").innerHTML = "Nothing to display. No elements present."
    }
}


var minlista = new LinkedList();


    minlista.Add("Först Element",0);
    minlista.Add("Andra Element",1);
    minlista.Add("Tredje Element",2);
    minlista.Add("Added Element",1);
    minlista.AddFirst("New First Element");
    /*document.getElementById('output').innerHTML += "MinLista : " + minlista.DisplayAll() + "<br>";
    //minlista.RemoveAt(2);
    //minlista.RemoveFirst();
    document.getElementById('output').innerHTML += "MinLista : " + minlista.DisplayAll() + "<br>";

    //minlista.ClearList();
    document.getElementById('output').innerHTML += "MinLista : " + minlista.DisplayAll() + "<br>";

    
    
    document.getElementById('output').innerHTML += "MinLista : " + minlista.DisplayAll() + "<br>";*/
