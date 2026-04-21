let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addButton");
let toDoContainer = document.querySelector(".todoContainer");

let API = "https://69e6156cce4e908a155eee67.mockapi.io/api/v1/ToDos";
addBtn.addEventListener("click", postData);
// Additinals related to api
//CRUD = create → read → update → delete .. are the basic operateion done
/* create (POST) is to add new data
  read (GET) is to fetch existing data
  update(PUT) is used to update full data 
  (PATCH) is for modifying a segment
  delete(DELETE) to delete
  */
async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();
  console.log(data);
  if (data) {
    toDoContainer.innerHTML = "";

    data.forEach((obj) => {
      let div = document.createElement("div");
      div.className = "todo";
      div.innerHTML = `<div class="todo">
            <p class ="para">${obj.task}</p>
              <input  id="editTask" type="text" placeholder="Enter your task..." value='${obj.task}' >
           <div class="select"><button class="correct">Edit</button>
            <button class="cross">❌</button>  
            <button class = "save" style = "display :none " >Save</button>  
         </div>
         </div>


         
`;
let paraText = div.querySelector(".para")
let input = div.querySelector("#editTask")
      let cross =  div.querySelector('.cross');
      cross.addEventListener('click',function(){
        deleteData(obj.id)
      })
      toDoContainer.append(div);
      let correct = div.querySelector('.correct')
      correct.addEventListener('click' , function(){
       correct.style.display = 'none'
       save.style.display = 'block'
       cross.style.display = 'none'
       input.style.display = 'block'
       paraText.style.display = 'none'
       
      
       


      })
       let save = div.querySelector('.save')
      save.addEventListener('click' ,async function(){
let editvalue = input.value
 await editData(obj.id, editvalue)
       correct.style.display = 'block';
       cross.style.display = 'block'
       input.style.display = 'none'
       paraText.style.display = "block"
       if(correct.style.display === 'block'){
        save.style.display ='none'
       }

      })
      
      
    });
  }
}
fetchData();
//Now to send data to database we will post
async function postData() {
  let value = taskInput.value;
  console.log(value);

  let objData = {
    task: value.trim(),
  };

  let response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });
  console.log(response);
  if (response.status === 201) {
    fetchData();
    taskInput.value = "";
  }
}
async function deleteData(id){
    console.log(id)

    let response = await fetch(`${API}/${id}`,{

    method: 'DELETE',
    })
    if(response.status === 200){
fetchData();
    }
}

async function editData(id,value) {
 console.log(id,value)

  let objData = {
    task: value.trim(),
  };

  let response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });
console.log(response);
 if (response.status === 200) {
    fetchData();
    taskInput.value = "";
  }
}
