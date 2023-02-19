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
    let estudante = nomeAluno

    entradaDados.question('Sexo do(a) aluno(a)? [masculino, feminino]: ', function(sexoAluno){
        let estudanteSexo = sexoAluno
        const sexoEstudante = mediaEscolar.validarSexoAluno(estudanteSexo)

        entradaDados.question('Qual o nome do(a) professor(a)?: \n', function(nomeProf){
            let mentor = nomeProf

            entradaDados.question('Sexo do(a) professor(a)?: [masculino, feminino]: ', function(sexoProf){
                let mentorSexo = sexoProf.toLowerCase()
                const sexoMentor = mediaEscolar.validarSexoProf(mentorSexo)
                
                entradaDados.question('Qual o nome do curso?: \n', function(nomeCurso){
                    let curso = nomeCurso

                    entradaDados.question('Qual o nome da disciplina?: \n', function(nomeDisciplina){
                        let disciplina = nomeDisciplina
                        console.log('------------------------------------------------------')

                        entradaDados.question('Digite a primeira nota: ', function(nota1){
                           let primeiraNota = Number(nota1.replace(',', '.'))

                            entradaDados.question('Digite a segunda nota: ', function(nota2){
                                let segundaNota = Number(nota2.replace(',', '.'))

                                entradaDados.question('Digite a terceira nota: ', function(nota3){
                                    let terceiraNota = Number(nota3.replace(',', '.'))

                                    entradaDados.question('Digite a quarta nota: ', function(nota4){
                                        let quartaNota = Number(nota4.replace(',', '.'))

                                        const fechamentoApp = entradaDados.close()

                                        const validarCampos = mediaEscolar.campoVazioStrings(
                                            nomeAluno,
                                            sexoAluno, 
                                            nomeProf, 
                                            sexoProf, 
                                            nomeCurso, 
                                            nomeDisciplina
                                            )

                                        const validarECalcNotas = mediaEscolar.validarNotasAluno(
                                            primeiraNota,
                                            segundaNota,
                                            terceiraNota,
                                            quartaNota
                                            )

                                        const alunoMedia = mediaEscolar.alunoAvaliacao(validarECalcNotas)

                                        const imprimirNaTela = mediaEscolar.mostraNaTela(
                                            nomeAluno,
                                            sexoEstudante,
                                            nomeProf, 
                                            sexoMentor,
                                            nomeCurso,
                                            nomeDisciplina,
                                            primeiraNota,
                                            segundaNota,
                                            terceiraNota, quartaNota
                                            )

                                            console.log(imprimirNaTela)

                                            if(alunoMedia === `    Em exame com a média: ${validarECalcNotas}     `){
                                                console.log(alunoMedia)
                                                entradaDados.question('Aluno(a) precisou fazer a prova de exame, nota do exame?: ',
                                                 function (notaExame){
                                                    let exame = Number(notaExame)
                                                    let somaExame = exame + validarECalcNotas
                                                    let mediaExameResultado = somaExame /2
                                                    console.log(mediaEscolar.alunoExame(mediaExameResultado, validarECalcNotas))
                                                })
                                            }

                                                       
                                            
                                                                        
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





