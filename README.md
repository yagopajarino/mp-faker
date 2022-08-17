# MP Faker

Emulador de pagos con QR de MercadoPago

Aplicación disponible en https://yagopajarino.github.io/mp-faker

| Original                                                                                        | Faked                                                                                              |   |
|-------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|---|
| ![imagen original](https://github.com/yagopajarino/mp-faker/blob/main/src/templates/screen.png) | ![imagen faked](https://github.com/yagopajarino/mp-faker/blob/main/src/templates/screen_faker.jpg) |   |
|                                                                                                 |                                                                                                    |   |

## Motivación

Vas a tu café favorito [este es el mío](https://www.instagram.com/cuervocafe/), disfrutas de un café y algo para comer, cuando vas a pagar ocurre algo así:

> \- Tenés Mercado Pago?\
> \- Sí, ahora te lo traigo

Y, en el 90% de los casos te traen y dejan en la mesa un código QR impreso en una hoja, pegado en algún tipo de plástico o cartón.

Escaneas el QR, hacés todo el proceso de pago en la aplicación y le mostrás la pantalla de post pago a quien te atendió. Se agradecen mutuamente y te vas.

Sí, así, casi sin nigún control ni verificación del pago que hiciste.

Pero, qué pasaría si, en lugar de escanear el QR, quien paga tuviera una aplicación que emule la interfaz de post-pago de Mercado Pago.

Me propuse generarla para ver que tan complicado era también sirvió para practicar algunas skills de programación.

## Finalidad

El fin de este repositorio y la aplicación contenida en él es concientizar sobre los riesgos que se corren al cobrar con QR sin control post pago. Principalmente destinado a:

**Personas encargadas de cobros en comercios** que puedan incluir rutinas y/o procedimientos para la verificación de pago con las herramientas disponibles de la plataforma.

**Equipo de Mercado Pago** que pueda implementar un mecanismo para verificar la autenticidad de los pagos. Podría ser un QR en la interfaz de postpago que pueda ser escaneada por quien cobra para verificar la validez del mismo desde cualquier dispostivo, ahorrando el tener que ir la computadora en donde tienen el dashboard de cobros (o algo así).
