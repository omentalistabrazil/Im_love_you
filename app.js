document.getElementById("upload-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
        const response = await fetch("/upload", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) throw new Error("Erro ao enviar o arquivo.");
        alert("Arquivo enviado com sucesso!");
        loadFiles(); // Recarregar a lista de arquivos
    } catch (error) {
        console.error(error);
        alert("Erro ao enviar o arquivo.");
    }
});

// Carregar a lista de arquivos enviados
async function loadFiles() {
    try {
        const response = await fetch("/files");
        if (!response.ok) throw new Error("Erro ao carregar os arquivos.");

        const files = await response.json();
        const fileList = document.getElementById("file-list");
        fileList.innerHTML = files
            .map(file => `<li><a href="${file.url}" download>${file.name}</a></li>`)
            .join("");
    } catch (error) {
        console.error(error);
        alert("Erro ao carregar os arquivos.");
    }
}

// Carrega os arquivos ao abrir o site
loadFiles();

