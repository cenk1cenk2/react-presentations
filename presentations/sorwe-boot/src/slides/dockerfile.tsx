import { Note, Slide, Code, H2, Div, Link } from '@cenk1cenk2-presentations/react-reveal-base'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

const Dockerfile: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2>
          <FontAwesomeIcon icon={faDocker} />
        </H2>
        <Div className="">
          <Code language="docker" lineNumbers={true}>
            {{ code }}
          </Code>
        </Div>
        <Div fragment={true}>
          <Link href="https://docs.docker.com/engine/reference/builder/" target="_blank">
            dockerfile dokumantasyonu
          </Link>
        </Div>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const code = `
FROM node:14-alpine

# Workdir for node package
WORKDIR /data/app

COPY . /data/app

# Install Tini
RUN apk --no-cache --no-progress add tini

# Create custom entrypoint supports environment variables
RUN printf "#!/bin/ash\nyarn start" > /entrypoint.sh && \
  chmod +x /entrypoint.sh

# Install Node packages, can not use lock file because of NX
RUN yarn --production

ENTRYPOINT ["/sbin/tini", "-vg", "--", "/entrypoint.sh"]
`

const notes = `
Bu containerlari paketlemek icin dockerin kendi syntaxini kullanan bir dockerfile yaratiyoruz.

Syntax acikcasi gayet basit bize verdigi genel seyler, bir baz image almak, containerin icine local sistemimizden kopyalamak, shell commandlari calistirmak, cesitli environmental ve build argumanlari eklemek ve container calistiginda ona ne yapacagini soylemekten ibaret.

En baz olan isletim sistemleri imagelari genelde bir isletimin sisteminin yalin hale getirilmis ve snapshot alinmis hali ki bu zaten container yapisina tamamen uyuyor.

Fakat bize verilen ozgurluk bunun uzerine yapilmis herhangi bir containeri alip ustune birseyler ekleyebiliyoruz ve tekrardan durmadan paketlemek zorunda kalmiyoruz.

En guzel kismida yapilan islemlerin tamamen cached olup, sadece degisme sansi olan adimlarin veya kod olarak degismis adimlarini tekrardan isleme tabi tutuyor.

Bu imagelara gereken ismi ve versiyonu verip sonradan tekrar kullanmak uzere registryimize ekleyebiliyoruz.

<-next->

bu linkte bununla ilgili ihtiyac duyulan tum bilgiye ulasabilirsiniz.
`

export default Dockerfile
