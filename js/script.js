const expensive =['pane', 'pasta', 'vino' ,'cereali', 'uova', 'latte','carne' ];

let container = document.getElementById('shopping-list');

let i=1;
while(i< expensive.length){
    const li = document.createElement("li");
    li.innerText = expensive[i];
    container.appendChild(li);

    i++;
}

