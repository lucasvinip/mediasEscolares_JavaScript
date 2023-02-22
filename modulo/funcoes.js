const validarNotas = function(nota1, nota2, nota3, nota4){
    let valor1 = Number(nota1)
    let valor2 = Number(nota2)
    let valor3 = Number(nota3)
    let valor4 = Number(nota4)

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4))
        console.log('ERROR: INSIRA APENAS NÚMEROS!')
    else if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '')
        console.log('ERROR: PREENCHA OS CAMPOS')

        
}

const campoVazioStrings = function(nomeAluno, sexoAluno, nomeProf, sexoProf, nomeCurso, nomeDisciplina){
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

function validarAlunoNota(nota1, nota2, nota3, nota4) {

    let valor1 = Number(nota1)
    let valor2 = Number(nota2)
    let valor3 = Number(nota3)
    let valor4 = Number(nota4)
    let media


    media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) / 4

    if (media >= 70)
        return media

    else
        return media

}

const validarAlunoExame = (mediaNormal, exame) =>
    (Number(mediaNormal) + Number(exame)) / 2;


const validarSexoProf = function(sexoProf){
    
    if(sexoProf === 'masculino')
        return 'Professor'
    else if(sexoProf === 'feminino')
        return 'Professora'
    else    
        return false
}

const validarSexoAluno = function(sexoAluno){
   
    if(sexoAluno === 'masculino')
        return 'ALuno'
    else if(sexoAluno === 'feminino')
        return 'Aluna'
    else    
        return false
    
}


module.exports = {
    validarSexoProf,
    validarSexoAluno,
    validarAlunoNota,
    validarAlunoExame,
    validarNotas,
    campoVazioStrings
}