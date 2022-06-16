# Redux



### Problema

- **Quando trabalhamos com aplicações componentizadas, em algum momento podemos ter um estado em um componente, que gostaríamos de compartilhar com outro componente, que se encontra bem distante (isso, de acordo com a árvore de componentes);**
- **Para resolver isso, poderíamos passar esse estado de um em um, componente, até chegar no componente de destino mas, dependendo do tamanho da árvore de componentes, essa situação se tornaria inviável;**



### Solução

- **O Redux é a solução de gerenciamento de estado da nossa aplicação. Logo, a ideia é ter um estado externalizado, fora do componente, para que daí, o componente possa alterar o estado e, quem usa esse estado, vai poder ser notificado, quando essa alteração ocorrer (qualquer componente vai ter acesso a esse estado compartilhado e qualquer componente pode ser notificado quando o estado for modificado);**



### Fluxo (Visão Geral)

- **Estado gerenciado pelo Redux, é um objeto;**
- **Algum ação/evento ocorre, é chamado uma função que apresenta determinada lógica;**
- **Essa função por sua vez, vai retornar um objeto com dados (de forma síncrona);**
- **Com esse objeto de dados, podemos configurar processamentos (um conjunto de Middlewares) para esses dados;**
- **Após esses processamentos, os dados passam pro um processo chamando Dispatch (os dados serão despachados para várias funções - para cada atributo do objeto, devemos ter uma função);**
- **Essas funções serão responsáveis por gerar uma nova versão do estado;**



### Uso do Middleware

- **Lidar com o assincronismo, para que assim os dados possam ser despachados;**



### Nomes

- **Objeto de dados <=> Action (possui pelo menos um atributo, chamado type);**
- **Função com determinada lógica <=> Action Creator;**
- **Funções responsáveis por gerar uma nova versão do estado <=> Reducers (devemos ter um para cada atributo do nosso estado e ele é responsável por receber o estado anterior, receber a Action e com essas duas informações, gerar uma nova versão do estado);**



### Conceitos Centrais

- **Action Creator:**
  - **É uma função síncrona;**
  - **Cria e retorna uma Action;**
- **Action:**
  - **É um objeto;**
  - **Possui um atributo .type;**
  - **Pode conter outros dados;**
- **Reducers:**
  - **São funções puras (não gera efeito colateral);**
  - **Sempre que passarmos um determinado parâmetro para ela, ela retornará, exatamente, a mesma resposta;**
  - **Não pega informações externas a função e não gera nenhuma alteração externa;**
  - **Os parâmetros passados não são alterados, apenas novas versões deles é que são geradas;**



### Anatomia da Action

```react
{
    type: "Algum_Evento_Ocorreu", // Atributo string
    // Podemos ter, ou não, o payload
    payload:  {
        /* Dados */
    }
}
```



### Anatomia do ActionCreator

```react
function Nome(parâmetros)	{
    // instruções...
    
    return {
      	type: "Algum_Evento_Ocorreu"  
         payload:  {/* Dados */}
    };
}
```



### Anatomia do estado

```react
{
    atributo1: [/* Dados */]
    atributo2: {/* Dados */}
    .
    .
    .
}
```



### Como os estados são gerados

- **Os estados são gerados a partir dos reducers e suas atualizações (novas versões) a partir de funções (os próprios reducers);**
- **Existe uma função ligada a cada atributo do estado da aplicação, responsáveis por alterar esses atributos;**



### Reducers

- **As funções recebem dois parâmetros: o estado anterior (referente ao atributo) e uma ação;**
- **Daí, nessas funções, implementamos uma lógica e retornamos um novo estado;**
- **Cada função deve estar em um arquivo separado;**



### Código

- **`import { connect } from 'react-redux'`: responsável por conectar o componente ao estado da aplicação;**



