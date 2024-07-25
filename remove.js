const ls = require('./read.js')
const prompt = require("prompt-sync")()
const alunos = [
    {nomeAluno: "Edson", dataNascimento : 1988, curso: "dev", periodo: "noite", },
    {nomeAluno: "Aluno 1", dataNascimento : 2010, curso: "dev", periodo: "noite",},
    {nomeAluno: "Aluno 2", dataNascimento : 1999, curso: "dev", periodo: "tarde",},
]; 
const remover = () => {
    let indice = +prompt("qual indice quer remover") - 1;
    alunos.splice(indice, 1);
    console.log("Jogo removido com sucesso");
    console.log("__________________________");
    console.log(alunos);
    };

// ls()
// console.log("__________________________");
// remover()
