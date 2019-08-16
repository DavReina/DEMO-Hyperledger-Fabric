Este es un pre-README puesto que va a estar mejor documentado:

# Crear materiales criptográficos
Esto se hace por que las identidades de establecen con certificados x.509.
### Caracteristicas
* Los nodos `Peer` necesitan identidades para firmar avales.
* Los nodos `Orderer` necesitan identidades para firmar bloques propuestos para que los Peers los validen y se agreguen en el Ledger.
* Las `Aplicaciones` necesitan estas identidades para firmar la transacciones requeridas.
* La `Fabric CA` (Autoridad de certificación) también requieren identidades porque así sus firmas en los certificados pueden validarse.
## Guia
Crear archivos necesarios para manejar la Red blockchain.

### Linux
Se crean los archivos `.yaml`:

Nos dirigimos a la carpeta donde queremos definir nuestra Red. Ya en esta carpeta creamos el archivo `crypto-config.yaml`
* Definición del codigo dentro del mismo. (Solo se adjuntan datos importantes en el README de esta carpeta).
* Este archivo es la definición misma de la red.

Tambien creamos junto con este, el archivo `configtx.yaml`
* Definición del codigo igualmente dentro del mismo.

![Imagen](https://github.com/DavReina/DEMO-Hyperledger-Fabric/tree/master/imgs/network_1.png)

Revisar la carpeta `./bin` y su contenido puesto que en esta estarán las librerías necesarias para el manejo de una red blockchain con Hyperledger.

![Imagen](https://github.com/DavReina/DEMO-Hyperledger-Fabric/tree/master/imgs/network_2.png)

Usamos la herramienta `cryptogen` para generar los certificados MSP:
```bash
./bin/cryptogen generate --config=./crypto-config.yaml
```
Luego de que esten generados las certificaciones de las `Organizaciones` usamos la herramienta `configtxgen` para generar el `bloque genesis`:
```bash
./bin/configtxgen -profile <nombredelperfil> -channelID byfn-sys-channel -outputBlock ./channel-artifacts/genesis.block
```
Ahora generaremos el `channel` de transacciones de la organocación, o las orgacnizaciones:
```bash
./bin/configtxgen -channelID <nombreclavedelchannel> -outputCreateChannelTx ./channel-artifacts/<nombredelchannel>.tx -profile OneOrgChannel
```
Una vez creado el canal, procedemos a crear los `anchorPeers` de cada organizaciòn.

```bash
./bin/configtxgen -profile <nombredelperfildelcanal> -outputAnchorPeersUpdate ./channel-artifacts/<nombredelanchor>.tx -channelID <nombreclavedelchannel> -asOrg <nombredelcertificadoMSPdelaorganizacion>
```
Despues de esto, teniendo en cuneta que se tienen los archivos base del Docker-Composer en nuestra carpeta raiz ![Imagen](https://github.com/DavReina/DEMO-Hyperledger-Fabric/tree/master/imgs/network_3.png), procedemos a crear la imagen de nuestra org.

* Tener en cuenta que se puede hacer un solo `docker-compose.yaml` sin tener que incluir o llamar (estoy muy acostumbrado a C++) al archivo `base` expuesto en este punto.

Ahora creamos el archivo `docker-compose-cli-yaml` con el cual crearemos los contenedores basados en las imagens instaladas de la fabrica. (Este archivo fue modificado con fines de aprendizaje)

Desde un terminal nuevo ejecutamos el siguente comando:

```bash 
docker-compose -f docker-compose-cli.yaml up -d
```
Teniendo en nuestro como salida (si se realizo correctamente):

```bash
Creating network "hlf_basic" with the default driver
Creating couchdb            ... done
Creating ordenador.acme.com ... done
Creating ca.acme.com        ... done
Creating cli                ... done
Creating peer0.motores.acme.com ... done
```
