# Save Live
## Desafio TGroup
## Como iniciar a aplicação ?


Primeiramente dê um git clone https://github.com/IsaacCidreira/saveLives.git em uma pasta, depois abra na Raiz da pasta
![image](https://user-images.githubusercontent.com/80259818/146966226-161aeb9b-9235-4b94-a0f7-c6ce6061ac58.png)

logo em seguida execute o comando npm install para instalar todas as dependências do projeto, precisam todas estarem instaladas ou irá ter conflito na aplicação.
Com as depedências instaladas precisam ser executados dois comandos o yarn server ou npm run server e o yarn start ou npm start, precisa ser nessa sequência 1- Iniciar o server e depois o Front, pois estou utilizando o JSON Server para simular Api.
![image](https://user-images.githubusercontent.com/80259818/146966585-06e4a5f0-1f26-48a7-b6d3-cbc1a1130665.png)


## Sobre o projeto
Protipei no figma, para ter uma melhor visualização antes de codar, segue o link da UI feita por mim : https://www.figma.com/file/VplumPcszUpj8DSteL4FqD/Untitled?node-id=1%3A2.
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

##JSON SERVER:

O react é uma poderosa lib, pelas sua reatividade e tratativa de dados de forma dinâmica, seguindo obviamente o princípio da imutabilidade. Com o desafio passado não me senti confortável em usar tal poder de forma limitada, sendo assim, como uma alternativa para nós front end utilizarmos um back end, existem umas libs que podem simular API Rest, temos o MirageJS e o usado nesse projeto JSON Server.

No projeto atual todos os dados estão sendo recebido formas dinâmica por Exemplo na Home, usando o axios e fazendo a requisição para o JSON Server eu consigo puxar os dados, conforme abaixo : 
![image](https://user-images.githubusercontent.com/80259818/146968267-b3f27b6b-7ec0-4eeb-a46e-941851c03b71.png)

Os dados da home logo abaixo, vêm de forma dinâmica usando a fake API JSON SERVER :
![image](https://user-images.githubusercontent.com/80259818/146967226-c0112254-8d42-4d5c-885e-e0730275e1e6.png)

Caso eu precise adicionar imagem a Home ou Texto eu não utilizo mais de codificação no front e sim indo direto no backend, caso deseje adicionar mais uma imagem, basta apenas adicionar mais elementos como se segue : 

![image](https://user-images.githubusercontent.com/80259818/146967381-e4981982-f54e-4de2-bc07-d3da79a42c2e.png)

Outro motivo por eu ter escolhido usar essa lib, foi a proposta de eu ter que criar um formulário, por a proposta trazida por mim, foi um site contra a depressão/suicidio, eu precisava dar importância ao que o usuário iria digitar e precisava salvar isso, ao menos deixar tudo pronto para tal.

Pensando dessa forma eu criei uma custom hook de formulário, nomeado de useForm, nesse mesmo custom hook eu já faço as devidas validações das informações que acho pertinente no formulário, segue exemplo abaixo, onde tem o inicio da validação para o e-mail e telefone, como dados indispensáveis para enviar o formulário: 
![image](https://user-images.githubusercontent.com/80259818/146968973-a71fae02-1212-42c7-a338-c48316801941.png)


