/*
Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

- nome;
- nota da primeira prova;
- nota da segunda prova;

[] Crie uma **função** que irá calcular a média das notas de cada aluno;
[] Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

function approved(average, aluno){
  if(average >= 7 )
    return `Parabéns ${aluno}! Você foi aprovado(a) no concurso`
  else
    return `Não foi dessa vez ${aluno}, Tente Novamente!`
}
function printAverage(name, notea, noteb){
  let average = (((Number(notea) + Number(noteb))) / 2)
  
  return `A média do(a) aluno(a) ${name} é: ${average} \n
          ${approved(average,name)}`
}

let listStudents = []
let option = 0


while(option != 3){
  option = Number(prompt(`Escolha a opção desejada:
                  
    1- Cadastrar Aluno(a)s e notas: 
    2- Imprimir Aluno(a)s e notas: 
    3- Sair do Programa!`))

  switch(option){
    
    case 1:
      let nameStu = prompt('Digite o nome do Aluno(a)')
      let nota1Stu = Number(prompt('Digite a primeira nota do Aluno(a)'))
      let nota2Stu = Number(prompt('Digite a segunda nota do Aluno(a)'))
    
      listStudents.push(
      {
        name: nameStu,
        nota1: nota1Stu,
        nota2: nota2Stu,
      }
    )
    console.log(listStudents)
    break;

    case 2:

      for (let i = 0; i < listStudents.length; i++ ){
        alert(printAverage(listStudents[i].name,listStudents[i].nota1, listStudents[i].nota2))
        console.log(listStudents[i])
      }  
      
    break;

    case 3:
      alert('Saindo do programa! ')
      break;

      default:
      alert('Opção inválida!')
      break;
  }
}

alert('Até!')
