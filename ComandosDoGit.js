// Para entrar em uma pasta, utiliza o comando "cd" + o nome da pasta.
// Para sair de um pasta, utiliza-se o comando "cd ..".
// Para criar uma pasta, utiliza-se o comando "mkdir" + o nome da pasta.
// Para criar um arquivo, utiliza-se o comando "touch" + o nome do arquivo.

// Para criar um repositório, deve ser utilizado o comando "git init" + o nome do repositorio.
// o Git status, mostra os arquivos que foram modificados  e arquivos que estão prontos para serem commitados.
// Para adicionar as alterações no repositoriao virtual, utiliza-se o comando "git add .".
// Para confirmar as mudanças, precisa usar o comando "git commit -m "Aqui vai a mensagem do commit".

// Caso eu queira que o git ignore um arquivo, eu preciso criar um arquivo chamado .gitignore e tudo que for escrito dentro desse arquivo, o git irá ignorar.
// git diff serve para mostrar as mudanças que foram feitas em um arquivo, mas que ainda não foram adicionadas ao repositório virtual.
// Agora, se as mundanças já foram comitadas, o comando "git log" irá mostrar o historico de commit.
// Ainda no git log, se acrescentar o -p, ele irá mostrar as mudanças que foram feitas em cada commit.
// o git log --oneline, irá mostrar o historico de commit, mas de forma resumida, mostrando apenas o hash do commit e a mensagem do commit.
// o git commit --amend, serve para modificar o ultimo commit, seja para alterar a mensagem do commit ou para adicionar arquivos que foram esquecidos no ultimo commit.
// caso eu tenha dado git add e enviado os arquivos para o repositorio virutal, eu posso retirar esses arquivos por meio do "git reset HEADA" e o git irá retirar os arquivos do repositorio virtual, mas eles ainda estarão presentes no meu computador, ou seja, eles não serão deletados.
// caso você tenha feito muitas alterações e queira reverter todas as mudanças para o arquivo original. Apenas utilize o comando "git checkout -- nome do arquivo" e o git irá reverter as mudanças para o arquivo original, ou seja, ele irá retirar todas as mudanças feitas no arquivo e irá deixar o arquivo como estava antes das mudanças.

// tem o comando git tag, que serve para marcar um commit específico, ou seja, ele serve para criar uma tag em um commit específico, para facilitar a identificação desse commit no futuro.
// Para criar uma tag, você tem que colocar "git tag -a" + o nome da tag + o hash do commit + -m "a mensagem da tag".
// git show + o nome da tag, irá mostrar as informações da tag, como o hash do commit, a mensagem da tag e a data da tag, quem criou a tag e etc.
// Para deletar uma tag, basta utilizar git tag -d + o nome da tag
// git branch + o nome da branch 
// agora git checkout + o nome da branch, para entrar na branch criada
// se você apenas colocar git checkout -b + o nome da branch, ele irá criar a branch e já irá entrar nela.
// git checkou master, para voltar para a branch master
// git merge + o nome da branch, para fazer o merge da branch com a branch atual, ou seja, ele irá juntar as mudanças da branch com a branch atual.
// para deletar git branch -d + o nome da branch, para deletar a branch, mas para isso a branch precisa estar mesclada com a branch master, ou seja, as mudanças da branch precisam estar presentes na branch master, caso contrário, o git irá mostrar um erro dizendo que a branch não pode ser deletada porque ela não está mesclada com a branch master.
// git clone + o código do repositório, para clonar um repositório.
// git pull, para puxar as mudanças do repositório remoto para o repositório local, ou seja, ele irá atualizar o repositório local com as mudanças do repositório remoto.
// git push, para enviar as mudanças do repositório local para o repositório remoto, ou seja, ele irá atualizar o repositório remoto com as mudanças do repositório local.
// git push origin master, faz com que as mundaãs no arquivo origin vá para o arquivo master.


// Curso git e github - Terá comandos repitidis

// Caso eu esteja dentro de uma pasta que está dentro de outra pasta, para eu voltar  para a primeira, eu tenho que usar o comando "cd .." duas vezes, ou seja, "cd .." + "cd ..".
// rm serve para deletar um arquivo, ou seja, ele irá deletar o arquivo do meu computador, ou seja, ele irá retirar o arquivo do meu computador.
// ls serve para listar os arquivos e pastas presentes em uma pasta, ou seja, ele irá mostrar os arquivos e pastas presentes em uma pasta. 
// mkdir + o nome da pasta, para criar uma pasta, ou seja, ele irá criar uma pasta com o nome especificado.
// nano + o nome do arquivo, para criar um arquivo e editar o arquivo, ou seja, ele irá criar um arquivo com o nome especificado e abrir o editor de texto nano para editar o arquivo.
// cat + o nome do arquivo, para mostrar o conteúdo do arquivo.
// E o comando clear para limpar o Terminal.
// mv serve para mover o arquivo, só que se vc colocar  o nomde do arquivo e dedpois colocar outro nome, ele irá renomear o arquivo.
// cd .. + nome da pasta, para entrar na pasta
// git init + o nome do respotório para criar um repositório.
// git status para mostrar os arquvios que foram modificados.
// git add . , para mandar as modificações para o repositório virtual.
// Apnas git add ( sem o ponto), para mandar um arquivo específico para o repositório virtual, ou seja, ele irá mandar apenas o arquivo especificado para o repositório virtual.
// Caso eu tenha dado git add . em algum arquvio e eme arrependi, eu posso usar git rm --cached + o nome do arquivo, para retirar o arquivo do repositório virtual, ou seja, ele irá retirar o arquivo do repositório virtual, mas ele ainda estará presente no meu computador, ou seja, ele não será deletado.
// git commit -m "comentário do commit", para confirmar a mudança.
// git log puxa o histórico dos commits.
// git log --oneline, para mostrar o histórico dos commits de forma resumida, ou seja, ele irá mostrar apenas o hash do commit e a mensagem do commit.

