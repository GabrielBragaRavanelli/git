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