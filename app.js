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

entradaDados.question('Qual o nome do(a) aluno(a)?: \n', function (nomeAluno) {
    let estudante = nomeAluno

    entradaDados.question('Sexo do(a) aluno(a)? [masculino, feminino]: ', function (sexoAluno) {
        let estudanteSexo = sexoAluno.toLowerCase()
        const sexoEstudante = mediaEscolar.validarSexoAluno(sexoAluno)

        entradaDados.question('Qual o nome do(a) professor(a)?: \n', function (nomeProf) {
            let mentor = nomeProf

            entradaDados.question('Sexo do(a) professor(a)?: [masculino, feminino]: ', function (sexoProf) {
                let mentorSexo = sexoProf.toLowerCase()
                const sexoMentor = mediaEscolar.validarSexoProf(sexoProf)

                entradaDados.question('Qual o nome do curso?: \n', function (nomeCurso) {
                    let curso = nomeCurso

                    entradaDados.question('Qual o nome da disciplina?: \n', function (nomeDisciplina) {
                        let disciplina = nomeDisciplina
                        console.log('------------------------------------------------------')

                        entradaDados.question('Digite a primeira nota: ', function (nota1) {
                            let primeiraNota = Number(nota1.replace(',', '.'))

                            entradaDados.question('Digite a segunda nota: ', function (nota2) {
                                let segundaNota = Number(nota2.replace(',', '.'))

                                entradaDados.question('Digite a terceira nota: ', function (nota3) {
                                    let terceiraNota = Number(nota3.replace(',', '.'))

                                    entradaDados.question('Digite a quarta nota: ', function (nota4) {
                                        let quartaNota = Number(nota4.replace(',', '.'))

                                        const validarErrosNotas = mediaEscolar.validarNotas(primeiraNota, segundaNota, terceiraNota, quartaNota)
                                        const campoVazio = mediaEscolar.campoVazioStrings(estudante, estudanteSexo, mentor, mentorSexo, curso, disciplina)

                                        if (campoVazio)
                                            entradaDados.close()
                                        else if(validarErrosNotas)
                                            entradaDados.close
                                        else if (nota1 <= 100 && nota1 >= 0 || nota2 <= 100 && nota2 >= 0 || nota3 >= 100 && nota3 <= 0 || nota4 >= 100 && nota4 <= 0) {

                                            let alunoNotaFinal = mediaEscolar.validarAlunoNota(primeiraNota, segundaNota, terceiraNota, quartaNota)

                                            if (alunoNotaFinal >= 70) {
                                            console.log(`
                                            ${sexoEstudante}: ${estudante}
                                            ${sexoMentor}: ${mentor} 
                                            Curso: ${curso}
                                            Disciplina: ${disciplina}
                                            Notas: primeira nota: ${primeiraNota}| segunda nota: ${segundaNota}| terceira nota: ${terceiraNota}| quarta nota: ${quartaNota}
                                            Situação: ${alunoNotaFinal}
                                                            PASSOU!
                                            `)
                                            entradaDados.close()
                                            }
                                            else if (alunoNotaFinal >= 50 && alunoNotaFinal <= 69) {
                                                entradaDados.question("Aluno(a) em exame, nota do exame?: ", function (notaExame) {

                                                    let exame = notaExame;
                                                    let resultadoExame = 0
                                                    resultadoExame = mediaEscolar.validarAlunoExame(alunoNotaFinal, exame)
                                                    if (resultadoExame >= 60) {
                                                        console.log(`
                                                    ${sexoEstudante}: ${estudante}
                                                    ${sexoMentor}: ${mentor} 
                                                    Curso: ${curso}
                                                    Disciplina: ${disciplina}
                                                    Notas: primeira nota: ${primeiraNota}| segunda nota: ${segundaNota}| terceira nota: ${terceiraNota}| quarta nota: ${quartaNota}
                                                    Situação: ${resultadoExame}
                                                                PASSOU!
                                                    `)
                                                    entradaDados.close()
                                                    } else {
                                                        console.log(`
                                                    ${sexoEstudante}: ${estudante}
                                                    ${sexoMentor}: ${mentor} 
                                                    Curso: ${curso}
                                                    Disciplina: ${disciplina}
                                                    Notas: primeira nota: ${primeiraNota}| segunda nota: ${segundaNota}| terceira nota: ${terceiraNota}| quarta nota: ${quartaNota}
                                                    Situação: ${resultadoExame}
                                                                REPROVOU!
                                                    `)
                                                    entradaDados.close()
                                                    }
                                                })
                                            } else {
                                                console.log(`
                                                ${sexoEstudante}: ${estudante}
                                                ${sexoMentor}: ${mentor} 
                                                Curso: ${curso}
                                                Disciplina: ${disciplina}
                                                Notas: primeira nota: ${primeiraNota}| segunda nota: ${segundaNota}| terceira nota: ${terceiraNota}| quarta nota: ${quartaNota}
                                                Situação: ${alunoNotaFinal}
                                                            REPROVOU!
                                                `)
                                                entradaDados.close()
                                            }
                                        }
                                        else
                                        console.log('INSIRA NÚMEROS ENTRE 0 A 100')
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

















