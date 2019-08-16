# Convector: Smart Contracts
## Guia:
Instalar `CLI` convector
 ```bash
 npm i -g @worldsibu/convector-cli
 ```
 Instalar `REST SERVER` convector (BETA 16-Agosto-2019)

 ```bash
 npm install -g @worldsibu/conv-rest-api
 ```

 Instalamos `Hurley`, que es el que instala automaticamente ambiente de desarrollo Hyperledger
 ```bash
 npm i -g @worldsibu/hurley
 ```
Ahora procedemos a crear nuestro proyecto en el directorio deseado usando los siguentes  comandos
```bash
conv new motor
cd motor
npm install
```
Este es el modelo por defecto que genero convector

### Modelo
Para generar un nuevo `Model` usamos el siguente comando:
```bash
conv generate -c <NOMBRE-DEL-CHAINCODE> model <NOMBRE-DEL-MODELO>
```