/********
 *  Objetivo: Arquivo de funções para realizar funçoes 
 * Data: 13/02/2023
 * Versão: 1.1
 */

const campoVazioStrings = function (nomeAluno, sexoAluno, nomeProf, sexoProf, nomeCurso, nomeDisciplina) {
    const nomeDoALuno = nomeAluno
    const sexoDoALuno = sexoAluno
    const nomeDoProf = nomeProf
    const sexoDoProf = sexoProf
    const nomeDoCurso = nomeCurso
    const nomeDaDisciplna = nomeDisciplina

    if (
        nomeDoALuno ==     '' ||
        sexoDoALuno ==     '' ||
        nomeDoProf ==      '' ||
        sexoDoProf ==      '' ||
        nomeDoCurso ==     '' ||
        nomeDaDisciplna == ''
    )
        console.log('ERRO: preencha os campos vazios')
    else if (
        nomeDoALuno == Number(nomeAluno)   ||
        sexoDoALuno == Number(sexoDoALuno) ||
        nomeDoProf == Number(nomeDoProf)   ||
        sexoDoProf == Number(sexoDoProf)   ||
        nomeDoCurso == Number(nomeDoCurso) ||
        nomeDaDisciplna == Number(nomeDaDisciplna)
        )
            console.log('ERRO: Apenas letras, nos primeiros campos')
}

const validarNotas = function (nota1, nota2, nota3, nota4){
    const valor1 = Number(nota1)
    const valor2 = Number(nota2)
    const valor3 = Number(nota3)
    const valor4 = Number(nota4)
    let media = 0

    if(
        valor1 == '' ||
        valor2 == '' ||
        valor3 == '' ||
        valor4 == ''
    )
        console.log('ERRO: preencha os campos vazios')
    else if (
        isNaN(valor1) || 
        isNaN(valor2) || 
        isNaN(valor3) ||
        isNaN(valor4)
    )
        console.log('ERRO: Apenas números, nos campos nota')
    else if (
        valor1 <0 || valor1 >100 ||
        valor2 <0 || valor2 >100 ||
        valor3 <0 || valor3 >100 ||
        valor4 <0 || valor4 >100
    )
        console.log('ERRO: Apenas notas entre 0 a 100')
    else {
        media = (valor1 + valor2 + valor3 + valor4)/4

        if(media >= 70)
            return 'aprovado'
        else if (media <= 49)
            return 'reprovado'
        else
            console.log(media.toFixed(2))
    }
    
}

const validarSexoAluno = function (sexoALuno) {
    let alunoSexo = sexoALuno

    if(alunoSexo === 'Masculino')
        return 'pelo aluno'
    else if(alunoSexo === 'Feminino')
        return 'pela aluna'
    else    
        return false
}

const validarSexoProf = function (sexoProf) {
    let profSexo = sexoProf

    if(profSexo === 'Masculino')
        return 'O professor'
    else if(profSexo === 'Feminino')
        return 'A professora'
    else    
        return false
}

const mostraNaTela = function (nomeAluno, sexoAluno, nomeProf, sexoProf, nomeCurso, nomeDisciplina) {
    return `
        ${validarSexoAluno} ${nomeAluno}
        ${validarSexoProf} ${nomeProf}. 
        \n ${nomeCurso}:
        \n ${nomeDisciplina}
    `
}

module.exports = {
    campoVazioStrings,
    validarNotas,
    validarSexoAluno,
    validarSexoProf,
    mostraNaTela
}