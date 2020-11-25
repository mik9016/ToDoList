let inputText;
let saveBtn = document.getElementById('save');
let toDoList = document.getElementById('todolist');
let newElemToDo;
let doneBtn;
let removeBtn;
let listText = document.createElement('h1');
let elem;
let idNum;
let createdNewListElem;
let elemToRemove ;
let newNote;
let doneList = document.getElementById('done');



function addNote(){

        newElemToDo = document.createElement('li');
        elem = document.getElementsByTagName('li');
        idNum = elem.length;
      
        newElemToDo.setAttribute('id',`${idNum}`);
        newElemToDo.setAttribute('data-set',`${idNum}`);
        doneBtn = document.createElement('button');
        removeBtn = document.createElement('button');
        inputText = document.getElementById('ttt').value;
        createdNewListElem = toDoList.append(newElemToDo);
        newElemToDo.innerText=inputText;
        newElemToDo.append(doneBtn,removeBtn);

        doneBtn.innerText='Done';
        doneBtn.className='done';
        removeBtn.innerText='Remove';
        removeBtn.className='remove';
        document.getElementById('ttt').value='';

        removeBtn.addEventListener('click', removeNote);
        doneBtn.addEventListener('click', moveDoneNote)
        

}

function removeNote() {
        newNote = this.parentNode;
        newNote.remove();

}

function moveDoneNote() {
        let clickedNote = this.parentNode;
        //clickedNote.style.display="none";
        doneList.append(clickedNote);


        //clickedNote.
        //set display to none 
        //visibility w jednym divie jako niewidoczna a potem. appendTo another list.

}




saveBtn.addEventListener('click', addNote);







