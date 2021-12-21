# Save Live
## Desafio TGroup
## Como iniciar a aplicação ?


Primeiramente dê um git clone https://github.com/IsaacCidreira/saveLives.git em uma pasta, depois abra na Raiz da pasta
![image](https://user-images.githubusercontent.com/80259818/146966226-161aeb9b-9235-4b94-a0f7-c6ce6061ac58.png)

logo em seguida execute o comando npm install para instalar todas as dependências do projeto, precisam todas estarem instaladas ou irá ter conflito na aplicação.
Com as depedências instaladas precisam ser executados dois comandos o yarn server ou npm run server e o yarn start ou npm start, precisa ser nessa sequência 1- Iniciar o server e depois o Front, pois estou utilizando o JSON Server para simular Api.
![image](https://user-images.githubusercontent.com/80259818/146966585-06e4a5f0-1f26-48a7-b6d3-cbc1a1130665.png)


## Sobre o projeto
Prototipei no figma, para ter uma melhor visualização antes de codar, segue o link da UI feita por mim : https://www.figma.com/file/VplumPcszUpj8DSteL4FqD/Untitled?node-id=1%3A2.
Pensei em abordar um tema sobre preocupação com as pessoas ao seu redor, pois acho isso de extrema importância, ajudar o próximo. As cores bases escolhidas foi o amarelo e o preto amarelado.

Conforme segue imagem abaixo:
![image](https://user-images.githubusercontent.com/80259818/146966069-1317bac2-dbde-40c4-8d06-65bf360cd274.png)

## Tecnologias usadas
1.CRA, para a criação do react
2.JSON SERVER, buscando trazer dados dinâmicos e simulando requisições de api rest, que será explicado em breve o motivo de sua utilização
3. Typescript
4. Axios
5. Styled Components
6. React Router V6
7. Context API

## Explicação de por que eu ter usado cada tecnologia :

## JSON SERVER:

O react é uma poderosa lib, pelas sua reatividade e tratativa de dados de forma dinâmica, seguindo obviamente o princípio da imutabilidade. Com o desafio passado não me senti confortável em usar tal poder de forma limitada, sendo assim, como uma alternativa para nós front end utilizarmos um back end, existem umas libs que podem simular API Rest, temos o MirageJS e o usado nesse projeto JSON Server.

No projeto atual todos os dados estão sendo recebido formas dinâmica por Exemplo na Home, usando o axios e fazendo a requisição para o JSON Server eu consigo puxar os dados, conforme abaixo : 
![image](https://user-images.githubusercontent.com/80259818/146968267-b3f27b6b-7ec0-4eeb-a46e-941851c03b71.png)

Os dados da home logo abaixo, vêm de forma dinâmica usando a fake API JSON SERVER :
![image](https://user-images.githubusercontent.com/80259818/146967226-c0112254-8d42-4d5c-885e-e0730275e1e6.png)

Caso eu precise adicionar imagem a Home ou Texto eu não utilizo mais de codificação no front e sim indo direto no backend, caso deseje adicionar mais uma imagem, basta apenas adicionar mais elementos como se segue : 

![image](https://user-images.githubusercontent.com/80259818/146967381-e4981982-f54e-4de2-bc07-d3da79a42c2e.png)

Outro motivo por eu ter escolhido usar essa lib, foi a proposta de eu ter que criar um formulário, por a proposta trazida por mim, ser um site contra a depressão/suicidio, eu precisava dar importância ao que o usuário iria digitar e precisava salvar isso, ao menos deixar tudo pronto para tal.

Pensando dessa forma eu criei uma custom hook de formulário, nomeado de useForm, nesse mesmo custom hook eu já faço as devidas validações das informações que acho pertinente no formulário, segue exemplo abaixo, onde tem o inicio da validação para o e-mail e telefone, como dados indispensáveis para enviar o formulário: 
![image](https://user-images.githubusercontent.com/80259818/146968973-a71fae02-1212-42c7-a338-c48316801941.png)

Caso o usuário não passe nada nos inputs e tente enviar ou apenas desfoque do input, como falado anteriormente fiz as tratativas de todos os erros que achava pertinente, ou seja, caso o usuário não passe um e-mail ou telefone da forma que eu solicitei ou deixer em branco, já é acusado o erro e o usuário não consegue enviar o forms.
![image](https://user-images.githubusercontent.com/80259818/146969860-d2fe7146-386d-40b9-9375-9eb01251e8dd.png)
![image](https://user-images.githubusercontent.com/80259818/146969897-7c773fbd-53e2-43db-8ecf-b6598380e1ac.png)

Agora chegou a hora de mostrar que o forms está funcionando e sendo reativo, conforme segue os dados enviados: 
![image](https://user-images.githubusercontent.com/80259818/146970090-e2a0c12a-604f-4548-b2f5-9812e963c217.png)
Na imagem acima todos os requisitos foram satisfeito, ou seja, conseguirei enviar os dados.
Podemos ver na imagem a seguir a requisição sendo feita pelo console e também a tratativa do botão enquanto está sendo enviado os dados 
![image](https://user-images.githubusercontent.com/80259818/146970500-36764d04-508a-4d93-8635-be0fec5304f3.png)

Agora vamos no nosso banco de dados observar os dados salvos :
![image](https://user-images.githubusercontent.com/80259818/146970620-ca457518-bde4-414f-8b87-05540920a209.png)

OBS: o fake banco de dados fica no arquivo server.json a primeira parte chamada help é a rota de onde puxa as imagens e texto, scrollando mais para baixo você vai ver a parte dos dados que são recebidos do formulário quando um forms for enviado, irá aparecer lá.
Esses foram o motivo da escolha de usar o JSON Server, mostrar o poder do React e meu conhecimento em requisições de api e tratativas de dados.


## TYPESCRIPT: 

Uma tecnologia que dispensa comentários, evita erros diversos, a sua utilização no começo pode ser um pouco complexa, porém o ganho a médio e curto prazo é muito grande, podemos tirar como exemplo a seguinte situação : Irei receber de uma context API dados, porém é um projeto muito grande e eu não sei bem o que cada método vai me retornar, será que é string ? boolean ? Ou seja, a confusão reina. 

Um exemplo usado no meu projeto foi na contex api, eu tipei as parâmetros que ela iria receber, para não ser passado algo que minha api não quer e também para eu ter noção do que aquele hook está pedindo. 
![image](https://user-images.githubusercontent.com/80259818/146971273-1b252d8a-5637-4305-8098-9bf6bea5fc73.png)
Podemos ver na imagem que a interface tipa diversos métodos, que eu conseguirei usar em outro lugar, vendo os métodos, pois eu tipei os mesmos, como se segue : 
![image](https://user-images.githubusercontent.com/80259818/146971500-92c2b6f8-8bf3-4dc3-8a1d-f06b28b653ea.png)

Por isso eu trouxe tal tecnologia para meu projeto, pois organização e escalabilidade são coisas muito importantes, por Typescript ser algo realmente mais complexo muitas pessoas preferem não utilizar, porém é uma relação de amor e ódio, é um mal muito necessário.


## Axios
Minha escolha do Axios foi para agilizar mesmo, eu poder fazer as requisições de forma mais rápida, acho o axios muito bom!

## Styled Components

Sou fã de SCSS ou SASS, o styled components é muito parecido com ele, sendo assim, é algo que já utilizo sempre, também permite tipagens e javascript dentro dele, podendo fazer diversas coisas.


## React Router V6
O CRA sem o React Router não é react, eu falo sempre que deveria já fazer parte do pacote, o REACT Router são as rotas que fazem a gente clicar e já ser levado para a outra página sem carregar, conforme se observar clicando no contato ou na home, segue a estrutura :

![image](https://user-images.githubusercontent.com/80259818/146972106-638a3eab-c2e7-442b-84e8-edfd565a5f4a.png)

##  Context API
Dispensa até comentários, é uma forma de tratar dados que iremos utilizar ao longo do nosso projeto, podemos usar como exemplo um site de login, queremos ao longo do site inteiro ter informaçõe do usuário, como user.id, user.age , etc. Para isso nós fazemos um custoom hook para sua utilização, a home foi feita recebendo dados de context API, que estão na pasta Hooks > useContext.

Então foram esses os motivos de eu ter utilizado cada tecnologia, espero que gostem!

