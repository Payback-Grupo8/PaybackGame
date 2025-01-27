# PaybackGame
Juegos en Red

Game Design Document


![payback](https://github.com/user-attachments/assets/f8581f69-3f3c-4251-a570-52467556726a)



Versión: 1.0.0












Grupo 8

Escrito por:
María González Martínez-Cubells: m.gonzalezma.2020@alumnos.urjc.es / https://github.com/mgmcubells

José Antonio Moratalla Zabala: ja.moratalla.2020@alumnos.urjc.es / https://github.com/janmorata

Javier Luis Moreno Erustes: jl.moreno.2020@alumnos.urjc.es / https://github.com/ChonLarsen

Carlos Vega San Román: c.vegas.2020@alumnos.urjc.es

## Video de presentación
Enlace al video de presentación: https://www.youtube.com/watch?v=z5gaTHsl_7E&t=96s

# Índice

Resumen	4

Concepto del juego	4

Características del juego	4

Género	5

Juego de lucha	6

Disparos	6

Plataformas	6

Público objetivo	6

Jugabilidad	7

Referencias a otros videojuegos	8

Historia y trasfondo	9

Mecánicas de juego	10

Mecánicas	10

Movimiento	10

Armamento	10

PowerUps	10

Supervivencia	11

Sistema de combate	11

Plataformas	11

Elección de personajes	11

Personajes	12

Características de los personajes	12

Cámaras	13

Periféricos	14

Controles	14

Movimiento y físicas	15

Movimiento sobre plataformas	15

Interacción entre elementos	15

Colisiones y Física del Juego	16

Interfaz	17

Diagrama de Flujo	17

Menú Principal	17

Menú de Selección del Personaje	18

Menú de Pausa	18

Escenarios	19

Modos de juego	19

Progresión y personalización	19

Arte y sonido	20

Estilo artístico 2D	20

Colores	20

Música y efectos de sonido	21

Referencias de otros videojuegos	21

Monetización	22

API REST 23

WebSockets 24

Equipo	25
























# Resumen

Este es el  documento de diseño del juego Payback, diseñado y desarrollado por Grupo 8, conformado por los miembros: María González Martínez-Cubells, José Antonio Moratalla Zabala, Javier Luis Moreno Erustes, Carlos Vega San Román. 
Se trata de un juego de lucha y plataformas multijugador donde para ganar el jugador deberá derrotar a su rival acabando con todas sus vidas.  Es un videojuego diseñado y desarrollado para PC con gráficos 2D.


# Concepto del juego

Payback es un emocionante juego de lucha en 2D que permite enfrentamientos de hasta dos jugadores simultáneamente. En este dinámico juego, los jugadores asumen el control de diversos héroes, cada uno con habilidades y características únicas, participando en intensas batallas multijugador. El objetivo principal es utilizar estrategias y habilidades de combate para eliminar a los oponentes, con la meta final de ser el último jugador en pie. Payback destaca por su amplia gama de personajes, cada uno con su propio conjunto de movimientos especiales y estilo de pelea, lo que añade profundidad y variedad a la experiencia de juego. Además, el juego ofrece una diversidad de arenas con distintos diseños y características que afectan la jugabilidad, manteniendo las batallas frescas y desafiantes. Para mantener el interés de los jugadores a largo plazo, Payback incluye varios modos de juego, desde combates rápidos y frenéticos hasta torneos estructurados, proporcionando así una experiencia rica y envolvente para todos los aficionados a los juegos de lucha.


# Características del juego

Payback, el juego de lucha en 2D, se distingue por una serie de características que lo hacen atractivo y divertido para los jugadores. A continuación, se describen algunas de sus principales características:

Multijugador
Permite enfrentamientos entre dos jugadores, promoviendo la competencia y la interacción directa entre amigos.





Variedad de personajes
Ofrece una amplia gama de héroes jugables, cada uno con habilidades, movimientos y estilos de combate únicos, permitiendo a los jugadores encontrar el personaje que mejor se adapte a su estilo de juego.

Diversidad de arenas
Incluye múltiples escenarios de batalla, cada uno con su propio diseño y características específicas que pueden influir en la estrategia de los jugadores y en la dinámica de las peleas.

Gráficos en 2D
Presenta gráficos en 2D bien detallados y animaciones fluidas que capturan la esencia de los clásicos juegos de lucha, mientras aportan un toque moderno y atractivo visualmente.

Controles intuitivos
Los controles están diseñados para ser fáciles de aprender pero difíciles de dominar, permitiendo a los nuevos jugadores comenzar rápidamente, mientras que los jugadores experimentados pueden perfeccionar sus habilidades y técnicas.

Actualizaciones y contenido adicional
El juego se mantiene fresco mediante actualizaciones regulares que pueden incluir nuevos personajes, arenas y modos de juego, asegurando que siempre haya algo nuevo para los jugadores.


# Género

Payback pertenece al género de juegos de lucha en 2D, un subgénero de los juegos de acción que se caracteriza por enfrentar a dos o más personajes en combates directos. Estos juegos se centran en el control preciso del personaje, la ejecución de movimientos especiales y combinaciones, así como en la estrategia y la táctica para derrotar al oponente.


Juego de lucha
Como se describe arriba, el juego será de peleas entre los personajes del mismo. Además, el juego estará hecho en 2D, proporcionando una perspectiva clásica y estilizada que rememora los títulos icónicos del género. Los jugadores podrán elegir entre una amplia variedad de personajes, cada uno con habilidades y estilos de combate únicos, lo que añade profundidad y estrategia a cada encuentro. El objetivo principal es vencer a los oponentes en combates intensos, utilizando una combinación de movimientos básicos y ataques especiales.

Disparos
Cada jugador tiene como objetivo eliminar a su rival, quitándole las vidas. Para ello, podrá tirarle de las plataformas y también podrá dispararle. Este elemento de disparos añade una capa adicional de estrategia. Con ello se quiere conseguir una jugabilidad bastante rápida, en la que las habilidades de cada jugador para moverse y disparar sean las que supongan la victoria y derrota. Los jugadores tendrán acceso a una variedad de armas y proyectiles, cada uno con sus propias características y efectos, lo que permite diferentes estilos de juego y tácticas.

Plataformas
Cada nivel se compone de una pantalla estática con perspectiva lateral, donde unas cuantas plataformas están colocadas a diferentes alturas. Estas funcionan como suelos y paredes, y los jugadores pueden moverse por la pantalla saltando de una a otra, lo que ayuda a añadir una dimensión vertical a la jugabilidad y más complejidad. Las plataformas no solo sirven como terreno de combate, sino también como obstáculos y oportunidades estratégicas. Por ejemplo, los jugadores pueden usar las plataformas para evadir ataques, planear emboscadas desde arriba o forzar a sus oponentes a posiciones desfavorables. La variedad en el diseño de los niveles y la disposición de las plataformas aseguran que cada combate sea único y lleno de sorpresas.


# Público objetivo

Payback es un juego enfocado a jugadores que buscan competitividad y frenetismo contra otros usuarios. Está diseñado para atraer a una amplia variedad de jugadores, desde aficionados a los juegos de lucha y retro hasta jóvenes jugadores y entusiastas de la competencia. Su combinación de combate en 2D, elementos de disparos y plataformas, junto con una estética visual atractiva y una jugabilidad accesible pero profunda, lo hacen adecuado para una audiencia diversa que busca tanto diversión casual como competencia intensa. 


A estos jugadores les debe gustar los juegos de acción rápida donde pongan a prueba sus habilidades. No será para todos los públicos debido a la violencia con armas, será apto para mayores de 16 años.

Las interacciones sociales y la comunidad en torno a Payback desempeñan un papel fundamental en la experiencia de juego y en la construcción de una comunidad sólida.

Foros y redes sociales: el videojuego cuenta con foros en línea y presencia en redes sociales donde los jugadores pueden interactuar entre sí, compartir consejos y estrategias, discutir las últimas actualizaciones del juego y conectarse con la comunidad en general. Estos espacios proporcionan un medio para que los jugadores se comuniquen, se relacionan y se mantengan informados sobre las novedades y eventos relacionados con el juego.

Eventos y torneos: El juego organiza regularmente eventos y torneos en los que los jugadores pueden participar para ganar recompensas exclusivas, demostrar sus habilidades en el combate y competir por el reconocimiento dentro de la comunidad. Estos eventos fomentan la participación activa de los jugadores, promueven la competitividad saludable y fortalecen el sentido de comunidad al reunir a jugadores de diferentes partes del mundo para enfrentarse en desafíos emocionantes.


# Jugabilidad

La jugabilidad de Payback se distingue por su dinamismo y profundidad, ofreciendo una experiencia envolvente tanto para jugadores casuales como para aquellos más dedicados. Aquí se detallan los principales aspectos de la jugabilidad:

Combate en 2D
El juego se desarrolla en un plano bidimensional, lo que facilita la precisión en los movimientos y ataques. Los combates son rápidos e intensos. Los jugadores pueden realizar una variedad de movimientos básicos combinados con disparos.

Elementos de disparos
Los jugadores tienen acceso a armas de fuego y proyectiles que pueden usar para atacar a distancia. Estas armas añaden una capa extra de estrategia, ya que los jugadores deben manejar los ataques a larga distancia. Los disparos permiten a los jugadores mantener a raya a sus oponentes y controlar el ritmo del combate, obligando a los oponentes a moverse constantemente y planificar sus ataques cuidadosamente.
Plataformas
Diseño de niveles: Cada nivel consiste en una pantalla estática con una disposición de plataformas a diferentes alturas. Los jugadores pueden saltar y moverse entre estas plataformas, lo que añade una dimensión vertical a la jugabilidad. Las plataformas no solo actúan como terreno, sino también como elementos estratégicos que los jugadores pueden usar para evadir ataques, lanzar emboscadas o posicionarse en lugares ventajosos.

Payback tendrá diferentes niveles donde competir. Cada uno de ellos tendrá una disposición de plataformas diferentes, que ayudarán a que los jugadores no se aburran con un solo nivel, si no que puedan ir probando distintos escenarios.

El jugador controlará al personaje que escoja, y podrá desplazarse por el escenario, andando horizontalmente por las distintas plataformas, y verticalmente saltando a las diferentes alturas que se disponen en el nivel.


# Referencias a otros videojuegos

Payback se inspira en Super Smash Bros en varios aspectos de su jugabilidad, como el combate frenético y rápido en Payback el combate es rápido y frenético. Los jugadores se enfrentan en arenas de batalla donde el objetivo es derrotar a los oponentes. Ambos juegos fomentan la acción rápida y recompensan la habilidad y la destreza del jugador en el combate cuerpo a cuerpo.

Ambos presentan controles simples que permiten a los jugadores realizar una variedad de movimientos y ataques. A pesar de su simplicidad, ambos videojuegos ofrecen una profundidad considerable en términos de estrategia y habilidad. Los jugadores pueden aprender combos, técnicas avanzadas y aprovechar al máximo las habilidades únicas de cada personaje para ganar ventaja sobre sus oponentes.

La selección de personajes es variada y distintiva, los jugadores pueden elegir entre una amplia gama de personajes, cada uno con su propio estilo de juego, habilidades especiales y personalidad. Estos personajes provienen de diferentes trasfondos y universos temáticos, lo que añade variedad y diversión a las partidas.






# Historia y trasfondo

La historia y el trasfondo de Payback se desarrollan en un mundo inmerso en el caos y el conflicto, donde diferentes fuerzas militares y facciones luchan por el poder y la supremacía. La trama se centra en la competencia entre personajes, cada uno con sus propios motivos y objetivos, que los impulsan a participar en intensos enfrentamientos uno contra uno.
El trasfondo de cada personaje se construye en torno a su origen y contexto histórico, que varía desde soldados de élite de la II Guerra Mundial hasta guerreros modernos y futuristas. Cada personaje tiene una historia única que refleja su pasado, sus experiencias y sus motivaciones personales para participar en la contienda de Payback. Las motivaciones para actuar por cada personaje del juego pueden ser diversas:

Venganza
Algunos personajes pueden buscar vengarse de un enemigo específico que los ha traicionado o causado daño en el pasado. Su participación en Payback les brinda la oportunidad de enfrentarse directamente a su adversario y saldar cuentas.

Ambición
Otros personajes pueden estar motivados por el deseo de ascender en las filas militares o ganar renombre y reconocimiento en el campo de batalla. Participar les ofrece la oportunidad de demostrar su valía y habilidades en combate.

Lealtad
Algunos personajes pueden estar comprometidos con una causa o una facción específica, y participan para defender los intereses de su grupo y cumplir con su deber como soldados.

Supervivencia
Para otros, la participación puede ser una cuestión de supervivencia, donde se ven obligados a luchar por su vida en un mundo donde la ley del más fuerte prevalece.

Redención
Algunos personajes pueden buscar redimirse de acciones pasadas o errores cometidos, y ven una oportunidad para demostrar su valía y cambiar su destino.



# Mecánicas de juego

Payback es un juego en el que dos jugadores controlan a distintos personajes con los que deben enfrentarse hasta que uno de los dos acabe sin vidas. Estos personajes lucharán en distintos niveles creados por plataformas colocadas en diferentes posiciones y alturas. Cada combate está diseñado para ser una mezcla intensa de estrategia, habilidad y rapidez.


Mecánicas

Las mecánicas del juego son las siguientes:

Movimiento
Los personajes podrán moverse en todas direcciones en un plano 2D, lo que permite desplazamientos horizontales y verticales fluidos. Los jugadores pueden correr, saltar y esquivar, aprovechando el entorno para evitar ataques y posicionarse estratégicamente. El sistema de movimiento es intuitivo pero ofrece profundidad, permitiendo a los jugadores dominar técnicas avanzadas como los saltos dobles y las esquivas aéreas.

Armamento
Habrá una variedad de armas de fuego pertenecientes a cada personaje. Cada arma tiene características únicas, como la cadencia de tiro, el daño, el alcance y la velocidad de recarga. Los jugadores deben aprender a manejar eficazmente sus armas y considerar cuándo disparar y cuándo conservar munición. Algunas armas pueden ofrecer habilidades especiales, como proyectiles explosivos o disparos que atraviesan obstáculos.

PowerUps
Los power-ups de recuperación de vida juegan un papel crucial en la estrategia de supervivencia durante el combate. Estos power-ups, representados por iconos en forma de corazón, permiten a los jugadores recuperar un corazón de vida al ser recogidos. Aleatoriamente ubicados en los escenarios, estos ítems de curación brindan la oportunidad de reponerse durante intensos enfrentamientos. Los jugadores deben aprender a gestionar eficazmente su salud, evaluando cuándo arriesgarse para conseguir un power-up y cuándo priorizar otras tácticas de combate. La competencia por estos valiosos recursos puede cambiar el rumbo de una batalla, añadiendo una capa adicional de profundidad y emoción al juego.
Supervivencia
El objetivo del jugador será acabar con su rival, para ello deberá reducir la vida del enemigo a cero. Los corazones de vida de cada personaje se gastan cuando recibe daño de ataques directos o proyectiles. La gestión de la vida y la capacidad de evitar daños son cruciales para la supervivencia. Además, algunos niveles pueden incluir ítems de recuperación que restauran la vida, añadiendo una capa estratégica a la gestión de recursos durante el combate.

Sistema de combate
El sistema de combate se basará en las armas, que dañan a los rivales a distancia, para ello los proyectiles deberán impactar. Los jugadores deben apuntar con precisión y anticipar los movimientos de su oponente para maximizar la efectividad de sus disparos.

Plataformas
Las plataformas serán importantes, ya que se contará con plataformas flotantes a diferentes alturas, para dificultar el fuego directo y forzar a los jugadores a moverse por todo el mapa. Las plataformas proporcionan cobertura y oportunidades tácticas, como emboscadas desde posiciones elevadas o maniobras evasivas. La disposición de las plataformas varía en cada nivel, manteniendo el combate fresco y desafiando a los jugadores a adaptarse a nuevos entornos.

Elección de personajes
Se podrá elegir a diferentes personajes preestablecidos con armas únicas para cada personaje. Cada personaje tiene su propio conjunto de habilidades y estilo de combate, lo que permite a los jugadores seleccionar el personaje que mejor se adapte a su estilo de juego. Algunos personajes pueden ser más rápidos y ágiles, mientras que otros pueden ser más resistentes y tener armas de mayor potencia. Esta variedad fomenta la experimentación y el desarrollo de estrategias personalizadas.

La combinación de combate rápido, plataformas estratégicas y una amplia variedad de personajes y armas, asegura que cada partida de Payback sea emocionante y única. Los jugadores deben utilizar su agilidad, precisión y tácticas inteligentes para dominar el campo de batalla y vencer a su oponente. La jugabilidad accesible pero profunda garantiza que tanto los nuevos jugadores como los veteranos del género encuentren algo que disfrutar.


# Personajes

El juego contará con una amplia variedad de personajes, cada uno equipado con armas de fuego únicas y habilidades especiales. Cada personaje tendrá unos corazones de vida que indica su resistencia en combate, y su estética será bélica, representando figuras militares como soldados, cadetes, sargentos y otros rangos. Los personajes podrán provenir de diferentes épocas y lugares del mundo, lo que añade diversidad y riqueza histórica al juego.

Características de los personajes
Armas únicas
Cada personaje estará armado con un conjunto exclusivo de armas de fuego, que varían en términos de cadencia de tiro, daño, alcance y velocidad de recarga. Las armas pueden incluir rifles de asalto, pistolas, francotiradores y lanzagranadas, entre otros. Además, algunas armas podrán tener habilidades especiales, como proyectiles explosivos, munición perforante o disparos que se dividen en múltiples direcciones.

Diseño y estética
Los personajes estarán diseñados con una estética bélica, representando diversas fuerzas militares de diferentes épocas y regiones del mundo. Esto incluye soldados de la II Guerra Mundial, guerreros modernos, soldados futuristas y figuras militares históricas de diferentes culturas. La variedad en el diseño visual de los personajes no solo añade atractivo visual sino también permite a los jugadores identificarse con diferentes estilos de combate y épocas históricas.

Origen y contexto
Cada personaje tendrá una historia y un trasfondo que refleje su origen y contexto histórico. Por ejemplo, un personaje podría ser un soldado de élite de la II Guerra Mundial, mientras que otro podría ser un cadete de una unidad futurista de operaciones especiales. Estos trasfondos pueden influir en las habilidades y el armamento de los personajes, añadiendo profundidad a la jugabilidad y al desarrollo de la narrativa.

Diversidad global
Los personajes provienen de diferentes lugares del mundo, representando a diversas fuerzas militares y culturas. Esto incluye soldados de diferentes países y continentes, cada uno con sus propias tácticas y estilos de combate. La inclusión de personajes de diversas procedencias promueve una experiencia de juego multicultural y variada.
Cámaras

La cámara estática en Payback es un elemento crucial que define la experiencia visual y la jugabilidad del juego. Esta elección de diseño se alinea con el enfoque del juego en combates en 2D y la interacción con plataformas.

La cámara estática proporciona una visión completa y constante de todo el campo de batalla, permitiendo a los jugadores ver todas las plataformas, obstáculos y a sus oponentes en todo momento. Esta perspectiva facilita la planificación estratégica y la toma de decisiones rápidas, ya que los jugadores siempre tienen una vista clara del entorno y pueden anticipar los movimientos del oponente.

La cámara también mantiene la acción centralizada, sin movimientos bruscos ni cambios de ángulo que puedan distraer a los jugadores. Por ello esto asegura que los jugadores puedan concentrarse completamente en el combate y en la navegación por las plataformas, mejorando la inmersión y la intensidad de los duelos.
Garantiza que todos los jugadores tengan la misma perspectiva del campo de batalla, proporcionando una experiencia de juego justa y equilibrada. Esto es especialmente importante en un juego competitivo, donde cualquier ventaja visual podría influir en el resultado del combate. La consistencia visual asegura que la habilidad y la estrategia sean los factores decisivos.

Se facilita el seguimiento de los personajes y proyectiles en pantalla, ya que no hay movimientos de cámara que puedan causar confusión o pérdida de la perspectiva. Los jugadores pueden seguir fácilmente la trayectoria de los disparos y los movimientos de los personajes, lo que es crucial para la precisión en el combate y la navegación estratégica.

Una cámara estática reduce la carga de procesamiento en comparación con cámaras dinámicas que requieren constantes ajustes y renderizado de diferentes ángulos. Esto puede mejorar el rendimiento del juego, proporcionando una experiencia más fluida y sin interrupciones, especialmente en dispositivos menos potentes.

En resumen, la cámara estática en Payback juega un papel fundamental en la creación de una experiencia de juego clara, justa y centrada en la acción. Al proporcionar una visión constante y completa del campo de batalla, permite a los jugadores enfocarse en el combate y la estrategia sin distracciones. Esta elección de diseño mejora la estabilidad del juego, facilita el seguimiento de los personajes y proyectiles, y asegura una experiencia visual coherente y equilibrada para todos los jugadores.


# Periféricos

Para jugar a Payback, el periférico esencial es el teclado. El teclado es fundamental para controlar los movimientos y acciones de los personajes de manera precisa y efectiva.
El movimiento con el uso de teclas de dirección: Las teclas ‘W’, ‘A’, ‘D’ se utilizan para mover al personaje en las cuatro direcciones:

En el caso del jugador 1:
‘W’: Saltar.
‘A’: Moverse a la izquierda.
‘D’: Moverse a la derecha.
En el caso del jugador 2:
Las teclas de flecha (↑, ←, →) .
También para realizar acciones de combate:
Disparo principal: La tecla ‘F’ se asigna para el ataque principal del jugador 1 y la tecla ‘P’ para el jugador 2, que dispara el arma principal del personaje.

El teclado permite una entrada rápida y precisa, esencial para ejecutar movimientos complejos y ataques en tiempo real. Con múltiples teclas disponibles, los jugadores pueden acceder a una variedad de comandos sin necesidad de cambiar de periférico.
La capacidad de reasignar teclas permite a los jugadores crear una configuración que se adapte mejor a su estilo de juego, aumentando la comodidad y la eficacia durante el combate.


# Controles

En Payback, los controles del juego están diseñados para ser intuitivos y accesibles, proporcionando a los jugadores un manejo preciso y rápido durante el combate. La disposición de las teclas está optimizada para permitir una fluida ejecución de movimientos y acciones. 

Movimiento Jugador 1
Las teclas ‘W’, ‘A’ y ‘D’
‘W’: Saltar.
‘A’: Moverse a la izquierda.
‘D’: Moverse a la derecha.

Movimiento Jugador 2
Las teclas de flecha (↑, ←, →) servirán al jugador 2 para poder moverse por el mapa.
Acciones de combate
El disparo principal hace uso de la tecla ‘F’ para el jugador 1 y la tecla ‘P’ para el jugador 2.
La elección de estos botones como botones de disparo permite un acceso rápido y cómodo durante el combate, asegurando que los jugadores puedan disparar sin retrasos.

La configuración de controles de Payback está diseñada para maximizar la rapidez y la comodidad del jugador. Esta disposición permite un control preciso de los movimientos y acciones, facilitando una jugabilidad fluida y estratégica. 


# Movimiento y físicas

En Payback, el movimiento y las físicas son aspectos fundamentales que contribuyen a la jugabilidad dinámica y desafiante del juego. 

Movimiento sobre plataformas
El juego se desarrolla en entornos que presentan una variedad de plataformas dispuestas en diferentes alturas. Los personajes pueden desplazarse lateralmente en el eje x y verticalmente en el eje y. Los controles permiten a los jugadores moverse con fluidez y precisión, saltando entre plataformas y evitando caídas en los huecos entre ellas. La física del juego simula el peso y la inercia de los personajes, lo que agrega un elemento de realismo y desafío a la navegación por los niveles.

Interacción entre elementos
Ataques a distancia
Los personajes pueden atacar a distancia utilizando disparos, los cuales deben ser esquivados por el rival para evitar perder corazones de vida. La precisión y la velocidad de los disparos son clave para infligir daño al oponente mientras se evaden los ataques enemigos.

Utilización del entorno
Los jugadores pueden aprovechar las distintas plataformas y muros como cobertura para esquivar disparos enemigos y planificar estrategias ofensivas. La disposición del entorno proporciona oportunidades tácticas para emboscar al rival o ganar ventaja en el combate.


Colisiones y Física del Juego
Las colisiones que pueden ocurrir en Payback se dividen en varios tipos:

Personaje - Personaje
Cuando dos personajes entran en contacto.

Personaje - Escenario
Las colisiones entre personajes y el entorno, como las plataformas y los muros, determinan la movilidad y la estrategia de los jugadores.

Disparo - Personaje
Los disparos lanzados por un personaje pueden colisionar con otro, infligiendo daño si impacta.

Disparo - Escenario
Los disparos pueden interactuar con elementos del entorno, como muros y obstáculos, afectando su trayectoria y permitiendo tácticas de defensa y ataque.

El movimiento y las físicas en Payback ofrecen una experiencia de juego inmersiva y desafiante, donde los jugadores deben dominar la navegación por plataformas y utilizar estratégicamente los ataques a distancia y cuerpo a cuerpo para alcanzar la victoria. 

Las interacciones entre elementos y las colisiones añaden profundidad táctica y realismo al combate, proporcionando una experiencia emocionante y dinámica para los jugadores.












# Interfaz

En Payback, cada pantalla juega un papel crucial en la experiencia de juego, proporcionando información, opciones y desafíos para los jugadores. Aquí se detallan las distintas pantallas del juego, sus transiciones y su utilidad:


### Diagrama de Flujo

Este diagrama de flujo enseña las distintas pantallas que tiene el juego y sus transiciones entre ellas. El diagrama proporciona una guía visual clara de las pantallas del juego y las transiciones entre ellas, ayudando a los jugadores a navegar por el juego de manera efectiva y disfrutar de una experiencia de juego fluida y envolvente.





![Diagrama](Capturas/Fase3/diagrama_estados.jpg)















### Menú Principal

El menú principal de Payback es la puerta de entrada a la experiencia de juego, ofreciendo una interfaz sencilla pero efectiva para que los jugadores puedan comenzar a jugar rápidamente. Este consta de varios elementos: 
![Menu](Capturas/Fase3/MenuInicial.jpg)


Título del videojuego (Payback) ubicado en la parte superior de la pantalla, el título "Payback" se presenta de manera prominente, destacando la identidad del juego y estableciendo el tono para la experiencia que está por venir.

Cuatro botones de navegación: jugar y salir del juego. 

El botón "Jugar"
Permite a los jugadores acceder al menú de selección de personajes, donde podrán prepararse para la partida.

El botón "Controles"
Permite a los jugadores conocer los controles de la partida.

El botón "Instrucciones"
Permite a los jugadores conocer las instrucciones del videojuego.

El botón "Créditos"
Permite a los jugadores conocer a los autores.

El botón "Chat"
Permite a los jugadores conectar entre si a través de un chat.

### Chat
Aquí el jugador podrá interactuar con otros jugadores a través de un chat, primero deberá conectarse con un nombre de usuario y posteriormente podrá escribir por un chat global.
![Chat](Capturas/Fase3/Chat.jpg)


### Menú Controles
Se muestran los controles para ambos jugadores, movimiento y disparo para cada personaje.
![MenuCon](Capturas/menuContr.jpeg)

### Menú Instrucciones
Se muestran a los jugadores cómo jugar las partidas y pequeños consejos a seguir.
![MenuInstrucciones](Capturas/Fase3/Tutorial.jpg)

### Menú Créditos
Aquí se muestran los nombres de los integrantes del equipo.
![MenuCred](Capturas/Fase3/Creditos.jpg)

### Menú de Pausa

El menú de pausa proporciona a los jugadores la capacidad de tomar un respiro durante la partida y realizar acciones adicionales sin interferir con la acción del juego
Acceso con la tecla ‘Esc’ los jugadores pueden pausar la partida presionando la tecla ‘Esc’ en su teclado o con el botón de Pause incluido en la parte superior de la pantalla. 
Dentro del menú de pausa, los jugadores tienen la opción de continuar la partida o salir de la partida, con los botones explicados anteriormente.
![MenuPausa](Capturas/Fase3/Pausa.jpg)

### Menú de Victoria

En esta escena se muestra que jugador ha ganado y un botón para regresar al menú principal
![victoria_J1](Capturas/Fase3/VicJ1.jpg)
![victoria_J2](Capturas/Fase3/VicJ2.jpg)


# Escenarios

Los escenarios en Payback ofrecen una variedad de entornos únicos donde se desarrolla la acción del juego.  Los jugadores pueden interactuar con el entorno para obtener ventajas tácticas, como refugiarse detrás de obstáculos o utilizar elementos del entorno para emboscar a sus oponentes.

Los escenarios cuentan con diferentes niveles en el eje y  están compuestos por plataformas flotantes, agregando una dimensión vertical a la jugabilidad y permitiendo estrategias de movimiento y combate complejas. Al inicio de la partida, cada jugador aparece en puntos distintos del mapa, lo que fomenta la estrategia al comenzar el juego.

![Juego](Capturas/Fase3/Juego.jpg)

# Modos de juego

El juego principal de Payback es el modo multijugador, que permite a dos jugadores enfrentarse entre sí en línea o en local. Los jugadores pueden disfrutar del juego en un emocionante enfrentamiento uno contra uno, ya sea en línea, enfrentándose a otros jugadores de todo el mundo, o en local, jugando con amigos en la misma consola o PC.


# Progresión y personalización

El juego ofrece un sistema de progresión y personalización que permite a los jugadores desbloquear nuevos personajes, trajes y accesorios a medida que avanzan en el juego.
Completar desafíos y alcanzar logros en el juego otorga a los jugadores recompensas especiales, como monedas o puntos de experiencia, que pueden usarse para desbloquear contenido adicional.










# Arte y sonido

En Payback, el arte y el sonido se fusionan para crear un ambiente vívido y evocador que sumerge a los jugadores en un mundo de conflicto y desafío.


Estilo artístico 2D

El estilo artístico 2D con uso de pixel art de Payback es esencial para su identidad visual, ofreciendo una estética única que refuerza la narrativa del juego:

Los sprites, tanto de personajes como de objetos, están meticulosamente diseñados para ofrecer detalles visuales nítidos y vibrantes.
Los fondos planos proporcionan un telón de fondo estilizado que resalta la acción en primer plano, permitiendo que los elementos clave del juego destacan.

Junto a una estética belicista pero colorida, el juego adopta una estética belicista que se refleja en cada aspecto del diseño artístico. Los tonos cálidos crean una atmósfera de diversión y frenetismo que envuelve a los jugadores en un mundo inmersivo de conflicto.

Elementos visuales como cajas de munición, vehículos militares y escombros dispersos por el escenario refuerzan la sensación de estar inmerso en un campo de batalla.


Colores
El uso de colores alegres y cálidos desempeña un papel importante en la creación de una atmósfera vibrante y llena de energía que complementa la naturaleza dinámica y divertida del juego. La atracción visual de los colores alegres y cálidos, como el rojo, el amarillo, el naranja y el rosa, se utilizan en los escenarios, personajes y elementos del juego para llamar la atención del jugador de manera inmediata. Estos tonos vibrantes son visualmente estimulantes y ayudan a captar la atención del jugador en medio de la acción rápida y frenética del juego.

Lo cual transmite energía y emoción a través de los colores brillantes y cálidos transmiten una sensación de energía y emoción, lo que contribuye a la atmósfera dinámica y emocionante. Estos colores evocan sentimientos positivos y optimistas, lo que refuerza la sensación de diversión y disfrute durante el juego. 


Reflejan el tono general del juego, que es enérgico, divertido y optimista. Estos tonos positivos ayudan a establecer una experiencia de juego lúdica y entretenida que invita a los jugadores a sumergirse en el mundo del juego y disfrutar de la experiencia.


Música y efectos de sonido

La música y los efectos de sonido en Payback están cuidadosamente diseñados para elevar la experiencia de juego y aumentar la inmersión del jugador. El juego está acompañado de música rápida e intrépida que impulsa la energía del jugador y lo motiva a sumergirse en la acción. Melodías enérgicas y ritmos animados ayudan a mantener el ritmo y el flujo del juego incluso entre las partidas.

Los efectos de sonido, como disparos, explosiones y gritos de combate, añaden capas de realismo y emoción a la experiencia de juego. Cada efecto está diseñado para ser impactante y envolvente, sumergiendo a los jugadores en el caos y la adrenalina del campo de batalla.

En conjunto, el arte y el sonido en Payback trabajan en armonía para crear una experiencia de juego emocionante y envolvente. 


Referencias de otros videojuegos

El pixel art es un estilo de arte digital que utiliza píxeles individuales para crear imágenes detalladas. Muchos juegos independientes y retro utilizan pixel art debido a su estética nostálgica y capacidad para representar escenas detalladas con recursos limitados. Juegos como "Stardew Valley" es ejemplo de juego que emplea pixel art de manera efectiva y podría influenciar los gráficos 2D de Payback.







# Monetización

En Payback, la monetización se basa en una estrategia que equilibra la oferta de una única compra.

En su lanzamiento, Payback se ofrece como una compra única, lo que significa que los jugadores adquieren el juego completo por un precio fijo. Esta opción permite a los jugadores acceder a todos los contenidos principales del juego, incluyendo personajes, arenas y modos de juego disponibles en el lanzamiento, sin necesidad de realizar compras adicionales.

La compra única garantiza a los jugadores que obtendrán una experiencia completa y satisfactoria desde el principio, sin restricciones ni barreras para disfrutar del juego en su totalidad.

La estrategia de monetización busca encontrar un equilibrio entre el precio inicial del juego y el valor percibido por los jugadores, asegurando que la compra única ofrezca una experiencia de juego completa y satisfactoria.


# API-REST
El código implementa una API REST utilizando Spring Boot en Java, diseñada para gestionar un "lobby" de usuarios y mensajes dentro de un entorno de chat. Esta API REST ofrece una serie de endpoints que permiten realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre usuarios y mensajes, facilitando una comunicación eficiente y estructurada entre el cliente y el servidor. Los métodos HTTP adecuados, como GET, POST y DELETE, se utilizan para cada operación, asegurando que las interacciones sean claras y sigan los estándares establecidos para APIs RESTful.

La API incluye funcionalidades clave para la gestión del chat y del lobby de usuarios. Por ejemplo, el endpoint GET /lobby permite recuperar todos los mensajes almacenados en el chat, devolviendo una lista de cadenas de texto que representan estos mensajes. Asimismo, el endpoint GET /lobby/jugadores proporciona una colección de objetos User, que representan a todos los usuarios registrados en el lobby. Para la creación de nuevos recursos, los endpoints POST /lobby/mensaje y POST /lobby permiten añadir nuevos mensajes y usuarios respectivamente. El método POST /lobby/mensaje recibe un objeto Message en el cuerpo de la solicitud, lo añade al chat y lo almacena, mientras que POST /lobby crea un nuevo usuario, asignándole un ID único y almacenando en la lista de usuarios.

Además de la creación y recuperación de recursos, la API permite obtener información específica de un usuario a través del endpoint GET /lobby/{id}, que devuelve los detalles del usuario correspondiente al ID proporcionado, o un código de estado 404 Not Found si el usuario no existe. La eliminación de usuarios se maneja con el endpoint DELETE /lobby/{id}, que elimina al usuario especificado por el ID y devuelve el objeto User eliminado o un código de estado 404 Not Found si el usuario no se encuentra. Para obtener información adicional, el endpoint GET /lobby/valor devuelve el número total de usuarios en el lobby, proporcionando una visión rápida del tamaño del lobby.

En resumen, esta API REST está diseñada para ser robusta y fácil de usar, permitiendo una gestión eficiente del lobby y del chat de usuarios. Al seguir las buenas prácticas de desarrollo de APIs REST, como el uso adecuado de los métodos HTTP y los códigos de estado, se asegura que los clientes de la API puedan entender y manejar adecuadamente las respuestas del servidor. Esto facilita una integración fluida con otras aplicaciones o servicios, haciendo de esta API una herramienta valiosa para cualquier aplicación que requiera la gestión de usuarios y mensajes en tiempo real.

Para ejecutar el archivo .jar, que se encuentra en la siguiente ruta:
...src\main\java\com\payback\demo\PayBackApplication.java

Con ello debes ejecutar esa aplicación.java y en el navegador debes escribir LocalHost:8080





# Web Sockets

Lobby La clase WS_Lobby se encarga de gestionar las conexiones WebSocket y de mantener un seguimiento de los usuarios conectados. Utiliza un ConcurrentHashMap para almacenar las sesiones de los usuarios, lo que permite un acceso seguro y concurrente. Además, define dos variables, user1_id y user2_id, para identificar a los dos usuarios principales en el lobby.

Cuando se establece una nueva conexión mediante el método afterConnectionEstablished, el manejador verifica si hay menos de dos usuarios conectados. Si es así, la nueva sesión se agrega al mapa de usuarios. Dependiendo de si user1_id o user2_id están disponibles, la sesión se asigna a una de estas variables y se envía un mensaje JSON al cliente indicando su rol (jugador 1 o jugador 2). Si ambos usuarios están conectados, se envía un mensaje adicional indicando que ambos jugadores están listos.

El método handleTextMessage procesa los mensajes recibidos de los usuarios. Utiliza ObjectMapper para convertir el mensaje de texto en un objeto JSON y determinar el tipo de mensaje. Dependiendo del tipo (play, winJ1, winJ2), el manejador envía mensajes correspondientes a todos los usuarios conectados, notificándoles del estado actual del juego.

Posición El código WS_Position implementa un manejador de WebSocket utilizando Spring Boot, que facilita la comunicación en tiempo real entre el servidor y los clientes. Esta clase extiende TextWebSocketHandler para manejar mensajes de texto y gestionar conexiones WebSocket. El manejador mantiene un mapa concurrente (ConcurrentHashMap) para almacenar las sesiones WebSocket de los usuarios. Este mapa garantiza la seguridad en el acceso concurrente, permitiendo que múltiples hilos lean y escriban en él sin causar inconsistencias.

La función createPosSocket en JavaScript establece y maneja una conexión WebSocket desde el lado del cliente. La función createPosSocket crea un nuevo WebSocket apuntando a la URL del servidor. Los eventos de conexión (onopen), error (onerror), y cierre (onclose) se manejan con funciones específicas que registran mensajes en la consola para fines de depuración.

La implementación de WebSocket tanto en el servidor (con Java y Spring Boot) como en el cliente (con JavaScript) permite una comunicación bidireccional en tiempo real. El servidor gestiona las conexiones y reenvía los mensajes a los clientes conectados, mientras que el cliente envía y recibe actualizaciones de posición, manteniendo a los usuarios sincronizados. Esta arquitectura es esencial para aplicaciones que requieren interacciones dinámicas y en tiempo real, como juegos en línea y sistemas de seguimiento de posiciones.

Disparo El código WS_Shoot implementa un manejador de WebSocket utilizando Spring Boot para gestionar eventos de disparos en un juego multijugador. Esta clase extiende TextWebSocketHandler y maneja la conexión, desconexión y el envío de mensajes entre los usuarios conectados. Utiliza un ConcurrentHashMap para almacenar las sesiones WebSocket activas, garantizando la seguridad en el acceso concurrente. Cuando una conexión es establecida o cerrada, se actualiza este mapa adecuadamente.

El método handleTextMessage es crucial para la lógica del juego, ya que recibe mensajes de los usuarios y los reenvía a todos los demás usuarios conectados. Esta función asegura que, cuando un jugador envía un mensaje (como un evento de disparo), dicho mensaje se propague a los otros jugadores, manteniendo así la sincronización del estado del juego entre todos los participantes. La función sendMessage garantiza que los mensajes solo se envíen si las sesiones están abiertas, manejando cualquier excepción que pueda ocurrir durante el envío.

Del lado del cliente, el código JavaScript establece una conexión WebSocket con el servidor en el endpoint ws://localhost:8080/payback/shoot. La función createShootSocket maneja los eventos de conexión, error, y cierre de la conexión WebSocket, proporcionando también un método sendWS para enviar mensajes de disparos al servidor. Cuando se recibe un mensaje, la función onmessage actualiza el estado del disparo de los jugadores en el juego, permitiendo que la interfaz del usuario refleje los eventos de disparo en tiempo real. Esto asegura una experiencia de juego fluida y reactiva para los usuarios.



![Diagrama de clases](Capturas/diagrama.jpeg)










# Equipo

El éxito de un juego como Payback no solo depende de su concepto y mecánicas, sino también del talento y la experiencia del equipo de desarrollo que trabaja detrás de escena.

Jefa de Arte: María González Martínez-Cubells
María lidera el equipo de arte, supervisando la creación de los elementos visuales del juego, como personajes, escenarios y efectos especiales. Trabaja en estrecha colaboración con otros miembros del equipo para garantizar que el arte del juego cumpla con los estándares de calidad y se alinee con la visión creativa del proyecto.

Jefe de programación: José Antonio Moratalla Zabala
José lidera el equipo de programación, encargado de desarrollar y mantener el código del juego, incluyendo la implementación de mecánicas de juego, la optimización del rendimiento y la corrección de errores. Coordina el trabajo del equipo para asegurarse de que el juego cumpla con los estándares de calidad y los plazos de entrega.

Jefe de proyecto: Javier Luis Moreno Erustes
Javi lidera el equipo de proyecto, supervisando la planificación, coordinación y ejecución de todas las actividades relacionadas con el desarrollo del juego. Se encarga de gestionar los recursos, presupuestos y plazos para asegurar que el proyecto se complete con éxito y dentro del tiempo y el presupuesto establecidos.
