function calcular(){

    var nome = document.getElementById('txtAluno').value;
    var av1 = parseFloat(document.getElementById('txtAv1').value);
    var av2 = parseFloat(document.getElementById('txtAv2').value);
    var av3 = parseFloat(document.getElementById('txtAv3').value);
    var mediaAluno;


    if (av1 < 4 && av2 < 4) {
        document.getElementById('outSituacao').textContent = `${nome}, você está reprovado!`
    }
    else {
        if (av1 >= 4 && av2 >= 4)
        {
            mediaAluno = (av1+av2)/2;

            if (mediaAluno < 6)
            {
        if (av1 >= av2 && av3 >= 4)
        {
            mediaAluno = (av1+av3)/2;
        }
        else 
        {
            if (av3 >= 4)
            {
                mediaAluno = (av2+av3)/2;
            }
        }
    }
}
    else {
        if (av1 >= 4 && av1 > av2 && av3 >=4){
            mediaAluno = (av1+av3)/2;
        }
        else {
            if (av2 >= 4 && av3 >=4){
                mediaAluno = (av2+av3)/2;
            }
            else {
                document.getElementById('outSituacao').textContent = `${nome}, você está reprovado!`
                mediaAluno = 'Indefinida';
            }
        }
    }

    if (mediaAluno >= 6){
        document.getElementById('outMedia').textContent = 'Média: ' +mediaAluno;
        document.getElementById('outSituacao').textContent = `Parabéns ${nome}, você foi APROVADO!`
    }
    else {
        document.getElementById('outMedia').textContent = 'Média: ' +mediaAluno;
        document.getElementById('outSituacao').textContent = nome+ ', você foi REPROVADO!';
    }
}   
}


document.getElementById('btnMedia').addEventListener('click', calcular);