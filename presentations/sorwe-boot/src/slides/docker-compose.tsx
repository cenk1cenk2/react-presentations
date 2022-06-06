import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

import { Note, Slide, Code, H2, Div, Link } from '@cenk1cenk2-presentations/react-reveal-base'

const DockerCompose: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2>
          <FontAwesomeIcon icon={faDocker} />
        </H2>
        <Code language="yml" lineNumbers={true} code={code} />
        <Div fragment={true}>
          <Link href="https://docs.docker.com/compose/compose-file/compose-file-v3/" target="_blank">
            docker-compose dokumantasyonu
          </Link>
        </Div>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const code = `
version: '3.7'
services:
  nx:
    image: cenk1cenk2/node-fnm:latest
    env_file: .docker/env/nx.env
    ports:
      - 3000-3025:3000-3025
      - 9010-9020:9010-9020
      - 9229:9229
    volumes:
      - .:/data
    depends_on:
      - db-mysql
      - db-mongo
      - rabbitmq

  db-mysql:
    image: mysql:5.7
    env_file: .docker/env/db-mysql.env
    volumes:
      - ./.docker/scripts/mysql-initialize.sh:/docker-entrypoint-initdb.d/mysql-initialize.sh:ro

  dba-mysql:
    image: phpmyadmin/phpmyadmin:latest
    ports:
      - 8080:80
    logging:
      driver: none
    depends_on:
      - db-mysql

  db-mongo:
    image: mongo:latest
    command: '--directoryperdb'
    env_file: .docker/env/db-mongo.env
    volumes:
      - ./.docker/scripts/mongo-initialize.sh:/docker-entrypoint-initdb.d/mongo-initialize.sh:ro
    ports:
      - 27017:27017

  rabbitmq:
    image: rabbitmq:3-management-alpine
    ports:
      - 15672:15672
`

const notes = `
Gelistirme veya dagitim yaparken bu containerlari tekrardan bize uygun sekilde bir araya getirmeye ihtiyacimiz var.

Bunu dockerin command line interface uzerinden yapabilsekte tekrarlanabilir sonuclar elde etmek icin, docker-compose kalici bir dosya oldugu icin daha iyi bir tercih oluyor.

Tekrar namespacelerden yararlanip gerekli dosyalari veya klasorleri kalici olarak containerin ustune monte edebiliyor, network portlarimizi disari acik hale getirebiliyor veya dockerin kendi ic syntaxini kullanarak containerlara cesitli degisiklikler yapabiliyoruz.

Bunun bizim icin iyi olan kismi hangi ortamda olursak olalim, hicbirsey yuklemeden, hicbir ayar yapmadan, herseyin idealde calisacak olmasidir. Eger linux containerlari kullanirsak ise bu windows, linux ve macos uzerinde sorunsuz bir sekilde calismaktadir. Macosde dosya adaptoru biraz yavas oldugu icin kagni gibi calissada, windowsda wsl2 uzerinde gayet guzel calismaktadir.

Dockerin kendi icinde dns servisi oldugu icin eger yazilimimizda bir containerin uzerinde ve ayni docker-compose networkunde ise, dis servislerimizi container ismi ile oraya hedefleyebiliyoruz. Eger kodumuz disarda calisiyorsa portlari disariya actigimiz icin localhost uzerinden erisebiliyoruz.

<-next->

docker-compose icin gerekli dokumantasyona da ayni sekilde bu linkten ulasabilirsiniz.
`

export default DockerCompose
