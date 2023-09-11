// Exemplo de documentos
const documentos = [
    { nome: "Documento1.pdf", data: "2023-09-10" },
    { nome: "Documento2.docx", data: "2023-09-11" },
    { nome: "Documento3.txt", data: "2023-09-12" },
    { nome: "Relatorio.pdf", data: "2023-09-13" },
];

const documentList = document.getElementById("documentList");

// Função para listar os documentos na página
function listDocuments() {
    documentList.innerHTML = ""; // Limpa a lista

    documentos.forEach((documento) => {
        const li = document.createElement("li");
        li.textContent = `Nome do Arquivo: ${documento.nome}, Data de Recebimento: ${documento.data}`;
        documentList.appendChild(li);
    });
}

listDocuments(); // Chama a função para listar os documentos inicialmente

// Função para buscar documentos por nome
function searchDocuments() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

    const filteredDocumentos = documentos.filter((documento) => {
        return documento.nome.toLowerCase().includes(searchTerm);
    });

    documentList.innerHTML = ""; // Limpa a lista

    if (filteredDocumentos.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Nenhum documento encontrado.";
        documentList.appendChild(li);
    } else {
        filteredDocumentos.forEach((documento) => {
            const li = document.createElement("li");
            li.textContent = `Nome do Arquivo: ${documento.nome}, Data de Recebimento: ${documento.data}`;
            documentList.appendChild(li);
        });
    }
}
