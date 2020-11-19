let inputText;
let saveBtn = document.getElementById('save');
let toDoList = document.getElementById('todolist');
let newElemToDo;
let editBtn;
let removeBtn;
let listText = document.createElement('h1');
let elem;
let idNum;
let createdNewListElem;
let elemToRemove ;


function addNote(){

        newElemToDo = document.createElement('li');
        elem = document.getElementsByTagName('li');
        idNum = elem.length;
      
        newElemToDo.setAttribute('id',`${idNum}`);
        newElemToDo.setAttribute('data-set',`${idNum}`);
        editBtn = document.createElement('button');
        removeBtn = document.createElement('button');
        inputText = document.getElementById('ttt').value;
        createdNewListElem = toDoList.append(newElemToDo);
        newElemToDo.innerText=inputText;
        newElemToDo.append(editBtn,removeBtn);

        editBtn.innerText='Edit';
        editBtn.className='edit';
        removeBtn.innerText='Remove';
        removeBtn.className='remove';
        document.getElementById('ttt').value='';

        removeBtn.addEventListener('click', removeNote);
        

}

function removeNote() {
        
        
       
      
       
        


}




saveBtn.addEventListener('click', addNote);







