/********
 *  Objetivo: Arquivo de funções para realizar funçoes 
 * Data: 13/02/2023
 * Versão: 1.1
 */
const campoVazioStrings = function (nomeAluno, sexoAluno, nomeProf, sexoProf, nomeCurso, nomeDisciplina) {
    let nomeDoALuno = nomeAluno
    let sexoDoALuno = sexoAluno
    let nomeDoProf = nomeProf
    let sexoDoProf = sexoProf
    let nomeDoCurso = nomeCurso
    let nomeDaDisciplna = nomeDisciplina

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



const validarNotasAluno = function (nota1, nota2, nota3, nota4){
    let valor1 = Number(nota1)
    let valor2 = Number(nota2)
    let valor3 = Number(nota3)
    let valor4 = Number(nota4)
    

    if(
        valor1 == '' ||
        valor2 == '' ||
        valor3 == '' ||
        valor4 == ''
    ){
        console.log('ERRO: preencha os campos vazios')
        
    }
        
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
    else{
        let contaMedia = (valor1 + valor2 + valor3 + valor4) 
        let mediaResultado = contaMedia / 4
        return mediaResultado.toFixed(1)
    }
}
const alunoAvaliacao = function(validarNotas){
    if(validarNotas >=70)
        return `    Aprovado(a) com a média: ${validarNotas}  `
    else if(validarNotas >=50 && validarNotas <=69)
        return `    Em exame com a média: ${validarNotas}     `
    else if(validarNotas <50)
        return `    Reprovado(a) com a média: ${validarNotas} `
}

const alunoExame = function(notaExameResultado, validarNotas){
    if(notaExameResultado < 50 )
       console.log(`Reprovado no exame, média final: ${notaExameResultado}`) 
    else if(notaExameResultado >= 50)
        console.log(`Aprovado no exame, média final: ${notaExameResultado}`) 
    else
        return false 
}

const validarSexoAluno = function(sexoALuno) {
    
    if(sexoALuno === 'masculino')
        return 'Aluno'
    else if(sexoALuno === 'feminino')
        return 'Aluna'
    else    
        return null
}

const validarSexoProf = function (sexoProf) {
    if(sexoProf === 'masculino')
        return 'Professor'
    else if(sexoProf === 'feminino')
        return 'Professora'
    else    
        return null
}


const mostraNaTela = function (
    nomeAluno, sexoAluno, nomeProf, sexoProf, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, alunoMedia
    ) {
    return `
    ${sexoAluno}: ${nomeAluno}
    ${sexoProf}: ${nomeProf} 
    Curso: ${nomeCurso}
    Disciplina: ${nomeDisciplina}
    Notas: primeira nota: ${nota1}| segunda nota: ${nota2}| terceira nota: ${nota3}| quarta nota: ${nota4}
    Situação: ${alunoMedia}
     `
}

module.exports = {
    campoVazioStrings,
    validarNotasAluno,
    validarSexoAluno,
    validarSexoProf,
    alunoAvaliacao,
    alunoExame,
    mostraNaTela,
}