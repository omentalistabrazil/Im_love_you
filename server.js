const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Configuração do Multer para salvar os arquivos em "uploads"
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Nome único
    },
});
const upload = multer({ storage });

// Middleware para servir arquivos estáticos
app.use(express.static("public"));

// Rota para envio de arquivos
app.post("/upload", upload.single("app"), (req, res) => {
    if (!req.file) {
        return res.status(400).send("Nenhum arquivo enviado!");
    }

    res.status(200).json({ message: "Arquivo enviado com sucesso!", file: req.file });
});

// Rota para listar arquivos
app.get("/files", (req, res) => {
    fs.readdir("uploads", (err, files) => {
        if (err) {
            return res.status(500).send("Erro ao listar arquivos.");
        }

        const fileList = files.map(file => ({
            name: file,
            url: `/uploads/${file}`,
        }));
        res.json(fileList);
    });
});

// Servir arquivos da pasta "uploads"
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

