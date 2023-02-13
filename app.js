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

entradaDados.question('Nome do(a) aluno(a): \n ', function (nomeAluno) {
    if (mediaEscolar.campoVazio(nomeAluno))
        entradaDados.close();

    else {
        let aluno = nomeAluno;

        entradaDados.question('Qual o sexo do(a) Aluno(a):[feminino, masculino] \n', function (sexoAluno) {
            if (mediaEscolar.campoVazio(sexoAluno))
                entradaDados.close();
            else if (!mediaEscolar.generoAluno(sexoAluno))
                entradaDados.close();
            else {
                let sexoDoAluno = sexoAluno;

                entradaDados.question('Nome do(a) professor(a): \n', function (nomeProfessor) {
                    if (mediaEscolar.campoVazio(nomeProfessor))
                        entradaDados.close();

                    else {
                        let professor = nomeProfessor;

                        entradaDados.question('Qual o sexo do(a) Professor(a):[feminino, masculino] \n', function (sexoProfessor) {
                            if (mediaEscolar.campoVazio(sexoProfessor))
                                entradaDados.close();

                            else {
                                let sexoDoProfessor = sexoProfessor;

                                entradaDados.question('Qual o nome do Curso: \n', function (nomeCurso) {
                                    if (mediaEscolar.campoVazio(nomeCurso))
                                        entradaDados.close();

                                    else {
                                        let curso = nomeCurso;

                                        entradaDados.question('Qual o nome da Disciplina?: \n', function (nomeDisciplina) {
                                            if (mediaEscolar.campoVazio(nomeDisciplina))
                                                entradaDados.close();

                                            else {
                                                let disciplina = nomeDisciplina;

                                                entradaDados.question('Nota 1: \n', function (nota1) {
                                                    if (mediaEscolar.campoVazio(nota1))
                                                        entradaDados.close();

                                                    else {
                                                        let valor1 = Number(nota1);

                                                        entradaDados.question('Nota 2: \n', function (nota2) {
                                                            if (mediaEscolar.campoVazio(nota2))
                                                                entradaDados.close();

                                                            else {
                                                                let valor2 = Number(nota2);

                                                                entradaDados.question('Nota 3: \n', function (nota3) {
                                                                    if (mediaEscolar.campoVazio(nota3))
                                                                        entradaDados.close();

                                                                    else {
                                                                        let valor3 = Number(nota3);

                                                                        entradaDados.question('Nota 4: \n', function (nota4) {
                                                                            if (mediaEscolar.campoVazio(nota4))
                                                                                entradaDados.close();

                                                                            else {
                                                                                let valor4 = Number(nota4);


                                                                            }
                                                                        })
                                                                    }
                                                                });
                                                            }
                                                        });

                                                    }
                                                });
                                            }

                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});





