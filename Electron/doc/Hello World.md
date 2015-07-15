Itamar de Aguiar, em 09/07/2015.


## Pré-requisitos para seguir este tutorial. <!--{{{-->


    * Saber o básico de linha de comando
    * Saber instalar o [nodejs][nodejs] e o [npm][npm]
    * Outros [Acrescentar!]

Notas: 
    * Os marcadores "{{{" e "}}}" são para o meu [editor de texto][vim]. Assim
      eu posso ver o texto ![assim](fold.png "fold").

    * Este tutorial foi feito no [Arch Linux][Arch]. Desta forma, os comandos e 
      diretórios expostos aqui podem diferir dos do seu sistema operacional.
<!--}}}-->
## Introdução <!--{{{-->

A biblioteca (???) [Electron][Electron]

    * Cria aplicações "desktops" com puro JavaScript
    * Não significa que é o JavaScript que constroi a GUI 
    * É uma versão mínima do Navegador Chromium controlado por JavaScript
    * Cada página web no Electron roda em cima de seu próprio processo
    * Usa a API io.js, que permite interagir com operações de baixo nível do 
      sistema
<!--}}}-->
## Hello World! <!--{{{-->

    1. Instale o Electron Globalmente <!--{{{-->

        Considerando que você já tem o [nodejs][nodejs] e o seu respectivo 
        [gerenciador de pacotes (npm)][npm] instalados, então faça o seguinte:

                   $ sudo npm install -g electron-prebuilt

        Se tudo ocorrer como o esperado, espera-se que o electron se instale no 
        diretório de módulos instalados globalmente do node. No Arch Linux esse 
        diretório é "/lib/node_modules". Veja o meu:

```text
         ~  ▶ tree -L 1 /lib/node_modules/
         /lib/node_modules/
         ├── angular                     .---> Foi Instalado Globalmente!
         ├── bower                      ·
         ├── csslint                    |
         ├── electron-prebuilt    <---·´
         ├── express
         ├── gulp
         ├── htmlhint
         ├── instant-markdown-d
         ├── jshint
         ├── npm
         └── polymer
         
         11 directories, 0 files
```

<!--}}}-->
    2. Crie a Estrutura do Seu Projeto <!--{{{-->

        * Nome do Projeto do Exemplo: "app"

                   $ mkdir app
                   $ cd app

        * Arquivos do Projeto do Exemplo:

                   $ touch index.html index.js package.json
                   $ tree -L 1
                    
                    .
                    ├── index.html
                    ├── index.js
                    └── package.json

        * Conteúdo de Cada Arquivo:

* index.html <!--{{{-->
```html
<!DOCTYPE html>
<html>

    <meta charset="utf-8"/>
    <title>Hello World Example</title>

    <body>
        <h1>Checkout my Pecks!</h1>
        <br>
        <img src="../img/KungFuryThor.png"/>
        <br>
        <h1>Electron is Working, and was too easy to do so!</h1>
        <br>
        <h1>AWESOME!!!</h1>
    </body>

</html>
```
<!--}}}-->

* index.js <!--{{{-->
```javascript
var app = require('app');  
var BrowserWindow = require('browser-window');  
var mainWindow = null;

require('crash-reporter').start();


// Quando a Aplicação for fechada
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
  }
});

// Quando a aplicação estiver pronta
app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadUrl('file://' + __dirname + '/html/index.html');
    //mainWindow.openDevTools();
    mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
```
<!--}}}-->

* package.json <!--{{{-->
```json
{
  "name"    : "app",
  "version" : "0.1.0",
  "main"    : "index.js"
}
```
<!--}}}-->

<!--}}}-->
    3. Execute a sua aplicação <!--{{{-->

        Para mim funcionou apenas fazendo:

            $ cd /caminho/até/o/projeto/app
            $ electron .

        Espera-se  que  uma  "GUI"  apareça mostrando alguma informação estúpida
        qualquer, usada meramente como teste. Vale ressaltar que como o Electron
        roda  em  cima  de  uma  versão  mínima  do  Chromium  temos que algumas
        funcionalidades  (  mainWindow.openDevTools(); no index.js ) ainda estão
        acessíveis.  Tente  o  atalho  "Alt+Ctrl+i" para abrir as ferramentas de
        desenvolvimento     (Developer    Tools)    do    Navegador    Chromium.

    <!--}}}-->

<!--}}}-->
## Conclusão <!--{{{-->
    E assim se encerra esse simples Hello World (Ok, nem tão simples assim!)
<!--}}}-->



    → Revisar Estes Links se Estão Corretos
[vim]: http://vim.org
[nodejs]: http://nodejs.com
[npm]: http://npmjs.com
[Arch]: http://archlinux.org
[Electron]: http://electron.atom.io/
