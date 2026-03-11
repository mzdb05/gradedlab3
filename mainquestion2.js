document.getElementById("add").addEventListener("click", AddItem);

function AddItem(){

    let useritem = document.getElementById("item").value;
    let items = useritem.split(" ");

    items.forEach(function(item){

        let listitem = document.createElement("li");
        listitem.textContent = item;

        document.getElementById("list").appendChild(listitem);

    });

    document.getElementById("item").value = "";
    let ListItems = document.querySelectorAll("#list li");
    ListItems.forEach((item, index) => {
        if(index % 2 === 0){
        
            item.style.backgroundColor = "white";
   
        } else{

            item.style.backgroundColor = "yellow";

        }
    });


    }


document.getElementById("remove").addEventListener("click", RmvItem);
let countrem = 0;

function RmvItem(){

    let usritem = document.getElementById("item").value;
    let itemlower = usritem.toLowerCase();
    let listItems = document.querySelectorAll("#list li");
    for(let i = 0; i < listItems.length; i++){

        let itemindex = listItems[i].textContent.toLowerCase();
        if(itemindex === itemlower){
            listItems[i].remove();

            console.log("Items that haver been removeded: " + usritem);

            countrem++;
            console.log("Items removed:" + countrem);
            break;
        }   
    }    
        let newlist = document.querySelectorAll("#list li");
        for (let r = 0; r < newlist.length; r++) {
            if (r % 2 === 0) {
                newlist[r].style.backgroundColor = "white";
            } else {
                newlist[r].style.backgroundColor = "yellow";
            }
            }

        
        document.getElementById("item").value = "";

    }


