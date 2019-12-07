#publicar no github
alterar no angular.json
tem q estar assim
 "outputPath": "dist/"
 
 sudo ng build --prod --base-href https://stembrino.github.io/portfolio/
 sudo angular-cli-ghpages --dir=dist/

 sudo angular-cli-ghpages

 ##publicar no forebase 
 firebase init
 #analisar se o projeto comeca em dist/nomeApp ou dist/
 ng build --prod
 firebase deploy