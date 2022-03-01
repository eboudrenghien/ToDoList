// Afficher les sélecteurs
const todoText = document.querySelector(".todotext");
const todoAjout = document.querySelector(".todo-ajout");
const todoList = document.querySelector(".todo-list"); 

todoAjout.addEventListener("click", addTodo)

function addTodo(event) {
    event.preventDefault();
    // création d'une div to do list
    const todoDiv = document.createElement("div"); //permet de créer une div si on clique sur le bouton ajout
    // création de la class div précédente (todo)
    todoDiv.classList.add("todo");
    // création d'une liste non ordonnée
    const newTodo = document.createElement("li");
    //texte pour tester si ça marche
    newTodo.innerText = "pwet";
    // ajoute une class todo-item
    newTodo.classList.add("todo-item");
    //permet de créer un enfant (newTodo, liste) à la div todoDiv
    todoDiv.appendChild(newTodo);
    console.log("hi")

    // création du bouton check
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    checkButton.classList.add("check-button");
    todoDiv.appendChild(checkButton);

    // création du bouton delete;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("delete-button");
    todoDiv.appendChild(deleteButton);
    // ajouter notre tâche à la liste todo
    todoList.appendChild(todoDiv);
 
    // création du bouton editer;
    const editButton = document.createElement("button");
    
    // création test bouton editer img;
    const edit = document.createElement("input");
    edit.setAttribute('type','image','src');
    edit.classList.add("editer");
    todoDiv.appendChild(edit);
    
    document.querySelector(".editer").src="/assets/editer.svg";
    console.log(imgEdit);

}