/*******
 * Objetivo: Realizar médias de notas
 * Data: 10/02/23
 * Autor: Lucas Vinicius
 * Versão: 1.1
 */

 console.log('Sistema de Calculo de Médias Escolares');

var readline = require('readline');
const { isString } = require('util');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Nome do aluno(a): \n ', function (nomeAluno){
    let aluno = String(nomeAluno);
    let media = 0;

    entradaDados.question('Nome do professor(a): \n ', function (nomeProfessor){
        let professor = String(nomeProfessor);

        entradaDados.question('Nome do curso: \n ', function (nomeCurso){
            let curso = String(nomeCurso);

            entradaDados.question('Nome da disciplina: \n ', function(nomeDisciplina){
                let disciplina = String(nomeDisciplina);

                entradaDados.question('Primeira nota: ', function(nota1){
                    let primeiraNota = Number(nota1);

                    entradaDados.question('Segunda nota: ', function(nota2){
                        let segundaNota = Number(nota2);
    
                        entradaDados.question('Terceira nota: ', function(nota3){
                            let terceiraNota = Number(nota3)
        
                            entradaDados.question('Quarta nota: ', function(nota4){
                                let quartaNota = Number(nota4);
            
                                if (nomeAluno == '' 
                                || nomeProfessor == '' 
                                || nomeCurso == '' 
                                || nomeDisciplina == ''){
                                    console.log('ERRO: É necessario digitar letras nos campos: Nome do aluno...');
                                    entradaDados.close();
                                } 
                                // else if (isString(nomeAluno) 
                                // || isString(nomeProfessor) 
                                // || isString(nomeCurso)
                                // || isString(nomeDisciplina)) {
                                //     console.log('ERRO: Digite apenas letras nos campos: Nome do aluno...');
                                //     entradaDados.close();
                                // } 
                                else if(nota1 == '' 
                                || nota2 == '' 
                                || nota3 == '' 
                                || nota4 == ''){
                                    console.log('ERRO: É necessario digitar números nos campos: Primeira nota...');
                                    entradaDados.close();
                                }
                                else if(isNaN(nota1) 
                                || isNaN(nota2) 
                                || isNaN(nota3) 
                                || isNaN(nota4)) {
                                    console.log('ERRO: Digite apenas números nos campos: Primeira nota...');
                                    entradaDados.close();
                                } 
                                else {
                                    media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota))/4;

                                    if(media < 0 || media > 100){
                                        console.log('ERRO: Apenas números entre 0 e 100');
                                        entradaDados.close();
                                    } 
                                    else if (media >= 70) 
                                        console.log('Aprovado')
        
                                    else if (media >= 50 || media <= 69 ){
                                        console.log('Exame')
                                    }
                                    else {
                                        console.log('Reprovado')
                                        console.log(media)
                                    }


                                    


                                }
                    


                            });

                        });
                    });

                });

            });

        });

    });


});
