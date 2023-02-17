/*******
 * Objetivo: Realizar médias de notas
 * Data: 10/02/23
 * Autor: Lucas Vinicius
 * Versão: 1.1
 */

console.log('Sistema de Calculo de Médias Escolares');

var readline = require('readline');
var mediaEscolar = require('./modulo/funcoes.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Qual o nome do aluno ?: \n', function(nomeAluno){
    let aluno = nomeAluno

        entradaDados.question('Qual o sexo do aluno? [Masculino, Feminino]:', function (sexoAluno){
        let mascFem = sexoAluno
        
        entradaDados.question('Qual o nome do professor ? \n', function (nomeProfessor){
            let professor = nomeProfessor

            entradaDados.question('Qual o sexo do Professor? [Masculino, Feminino]: \n', function (sexoProfessor){
                let femMasc = sexoProfessor

                entradaDados.question('Qual o nome do curso ? \n', function (nomeCurso){
                    let curso = nomeCurso;

                    entradaDados.question('Qual o nome da disciplina ? \n', function (nomeDisciplina){
                        let disciplina = nomeDisciplina;

                        entradaDados.question('Nota 1: ', function(nota1){
                            let valor1 = mediaEscolar.validaNota(Number(nota1));

                            entradaDados.question('Nota 2: ', function(nota2){
                                let valor2 = mediaEscolar.validaNota(Number(nota2));

                                entradaDados.question('Nota 3: ', function(nota3){
                                    let valor3 = mediaEscolar.validaNota(Number(nota3));

                                    entradaDados.question('Nota 4: ', function(nota4){
                                        let valor4 = mediaEscolar.validaNota(Number(nota4));

                                        const media = mediaEscolar.validaNota;
                                        const notasAlunos = mediaEscolar.avaliacaoAluno(media);
                                        

                                    })
                                })
                            })
                        })
                    });
                });
            });
        });     
    });
});





