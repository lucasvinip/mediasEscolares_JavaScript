/********
 *  Objetivo: Arquivo de funções para realizar funçoes 
 * Data: 13/02/2023
 * Versão: 1.1

 */


const validaNota = function (nota1, nota2, nota3, nota4) {
    if (
        nota1 > 100 || 
        nota2 > 100 || 
        nota3 > 100 || 
        nota4 > 100 || 
        nota1 < 0 || 
        nota2 < 0 || 
        nota3 < 0 || 
        nota4 < 0
        ) {
        console.log('ERRO: Digite apenas valores entre 0 e 100');
    }
    if (isNaN(nota1)
        || isNaN(nota2)
        || isNaN(nota3)
        || isNaN(nota4)) {
        console.log('ERRO: Digite apenas números');
    }
    else {
        let somaMedia = (nota1 + nota2 + nota3 + nota4);
        let resultadoMedia = somaMedia / 4;
        return resultadoMedia;
    }

}

const campoVazio = function (arg) {
    let argumentos = arg;

    if (!argumentos) {
        console.log('Erro: preencha o campo')
        return true
    }
}

const mascFemAluno = function (sexoAluno) {
    if (sexoAluno === "masculino") 
        return Aluno;
    else if (sexoAluno === 'feminino') 
        return Aluna;
    else 
       console.log('ERRO: Digite um sexo') 
}

const mascFemProf = function (sexoProfessor) {
    if (sexoProfessor === "masculino") 
        return Professor;
    else if (sexoProfessor === 'feminino') 
        return Professora;
    else 
       console.log('ERRO: Digite um sexo') 
}

const avaliacaoAluno = function(media) {
    if (media > 70)
        return `Aprovado, média: ${media}`
    else if(media >= 50 && media <= 69)
        return `Exame, média: ${media}`
    else 
    return `Reprovado, média: ${media}`
}

const resultadoTela = function(
    nomeAluno, 
    sexoAluno,
    nomeProfessor,
    sexoProfessor,
    nomeCurso,
    nomeDisciplina
    ){
        return `O ${sexoAluno}: ${nomeAluno} 
        \n${sexoProfessor}: ${nomeProfessor}
        \nCurso: ${nomeCurso}
        \nDisciplina: ${nomeDisciplina} 
        `
    }

module.exports = {
    // validacaoPerguntas,
    campoVazio,
    validaNota,
    mascFemAluno,
    mascFemProf,
    avaliacaoAluno,
}

