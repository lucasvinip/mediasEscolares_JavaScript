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

entradaDados.question('Qual o nome do(a) aluno(a)?: \n', function(nomeAluno){
    const estudante = nomeAluno

    entradaDados.question('Sexo do(a) aluno(a)? [Masculino, Feminino]: ', function(sexoAluno){
        const estudanteSexo = sexoAluno

        entradaDados.question('Qual o nome do(a) professor(a)?: \n', function(nomeProf){
            const mentor = nomeProf

            entradaDados.question('Sexo do(a) professor(a)?: [Masculino, Feminino]: ', function(sexoProf){
                const mentorSexo = sexoProf
                
                entradaDados.question('Qual o nome do curso?: \n', function(nomeCurso){
                    const curso = nomeCurso

                    entradaDados.question('Qual o nome da disciplina?: \n', function(nomeDisciplina){
                        const disciplina = nomeDisciplina

                        entradaDados.question('Digite a primeira nota: ', function(nota1){
                            const primeiraNota = Number(nota1)

                            entradaDados.question('Digite a segunda nota: ', function(nota2){
                                const segundaNota = Number(nota2)

                                entradaDados.question('Digite a terceira nota: ', function(nota3){
                                    const terceiraNota = Number(nota3)

                                    entradaDados.question('Digite a quarta nota: ', function(nota4){
                                        const quartaNota = Number(nota4)

                                        const fechamentoApp = entradaDados.close()
                                        const validarCampos = mediaEscolar.campoVazioStrings(
                                            nomeAluno,
                                            sexoAluno, 
                                            nomeProf, 
                                            sexoProf, 
                                            nomeCurso, 
                                            nomeDisciplina
                                            )
                                        const validarECalcNotas = mediaEscolar.validarNotas(
                                            nota1,
                                            nota2,
                                            nota3,
                                            nota4
                                            )
                                        const imprimirNaTela = mediaEscolar.mostraNaTela(
                                            nomeAluno,
                                            sexoAluno,
                                            nomeProf, 
                                            sexoProf,
                                            nomeCurso,
                                            nomeDisciplina
                                            )
                                            console.log(imprimirNaTela)
                                            if(validarCampos)
                                                fechamentoApp
                                            else if(validarECalcNotas)
                                                fechamentoApp
                                            else    
                                                return true
                                                

                                    })
                                })   
                            })
                        })
                    })
                })
            })
        })
    })
})





