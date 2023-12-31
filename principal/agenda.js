let deadlineCount = 2;

    function addDeadline() {
      deadlineCount++;

      const deadlinesContainer = document.querySelector(".deadlines");

      const newDeadline = document.createElement("div");
      newDeadline.className = "deadline";
      newDeadline.innerHTML = `
        <h2 class="deadline-title">Prazo ${deadlineCount}</h2>
        <div class="upload-container">
          <label for="file${deadlineCount}">Arquivo:</label>
          <input type="file" id="file${deadlineCount}" name="file${deadlineCount}">
        </div>
        <div class="date-container">
          <label for="date${deadlineCount}">Data:</label>
          <input type="date" id="date${deadlineCount}" name="date${deadlineCount}">
        </div>
        <button class="btn btn-remove" onclick="removeDeadline(this)">Remover</button>
        
      `;

      deadlinesContainer.appendChild(newDeadline);
    }

    function removeDeadline(button) {
      const deadline = button.parentElement;
      const deadlinesContainer = document.querySelector(".deadlines");
      deadlinesContainer.removeChild(deadline);
    }


    function salvarAlteracoes() {
  
  const tarefas = [];

  const deadlineElements = document.querySelectorAll(".deadline");
  deadlineElements.forEach((deadlineElement) => {
    const titulo = deadlineElement.querySelector(".deadline-title").textContent;
    const arquivo = deadlineElement.querySelector("input[type=file]").value;
    const data = deadlineElement.querySelector("input[type=date]").value;

    
    const tarefa = {
      titulo: titulo,
      arquivo: arquivo,
      data: data,
    };

    tarefas.push(tarefa);
  });

  
  window.location.href = "principal.html";
}




