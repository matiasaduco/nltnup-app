const drinking = [
  {
    title: "Despedida",
    description:
      "Jugá esta carta y elegí a un jugador. \n\
       \nTodos los demás jugadores levantan sus vasos y brindan en su honor. El jugador elegido, pierde.\n\
       \n¡Pero los demaás nunca lo olvidarán!",
    leyend:
      "Recuerda que para empezar una nueva etapa tienes que cerrar otra. ¡No tengas miedo de decir adiós!.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Exponencial",
    description:
      "Eligí a otro jugador.\n\
      \nDeberá tomar 1 trago y elegir a su vez a otro que deberá tomar 2 tragos. El siguiente deberá tomar 3 y así hasta que hayan elegido a todos.\n\
      \nNadie te puede elegir a vos ni a otro que ya haya sido elegido. Todo el que no lo haga, pierde",
    leyend: "La carta es buena. pero el título es medio jamón y queso.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Mal Trago",
    description:
      "Jugá esta carta si otro jugador acaba de ganar y vos seguís en juego.\n\
      \nSi hacés un fondo blanco, en lugar de ganar, pierden todos: él, vos, los demás, tu vieja...TODOS!",
    leyend:
      "Y ahora miralos a todos, en vez de pedir perdón deciles: ¡Se me ríen los huevos!",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Mezcladito",
    description:
      "Jugá esta carta y elegí a dos jugadores.\n\
      \nTienen que mezclar sus bebidas entre sí y luego repartir y mezcla en los dos vasos en igual cantidad. \n\
      \nSi no se te ocurre cómo mezclarlos, ya tomaste mucho por hoy.",
    leyend:
      "Si todos están tomando lo mismo esta carta es un embole. Y ustedes también.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "AA",
    description:
      "Colocá esta carta boca arriba enfrente tuyo.\n\
      \nSi aguantás hasta tu próximo turno sin beber ni un trago, ganás.\n\
      \nPero si alguien te hace beber, perdés",
    leyend: "El alcoholismo es un tema serio. No se jode con eso.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Todo O Nada",
    description:
      "Colocá esta carta sobre la mesa.\n\
      \nTodos los jugadores te dan sus vasos, aun los que ya hayan sido eliminados.\n\
      \nSi lográs beber todos en menos de 30 segundos, ganaste. Si no, perdiste",
    leyend: "Qué oscurbio todo...",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Irse En Seco",
    description:
      "Jugá esta carta y eliminá a toso los jugadores que no hayan tomado un trago en esta partida.\n\
      \nSi todos lo que quedan ya tomaron, podés jugar esta carta y tomarte unos minutos para que el grupo reflexione sobre la inmortalidad del alma",
    leyend:
      "Era un re nombre de carta para el Picante. Y hablando de eso... qué quilombo si lo jugás ahora ¿no?",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Pub Crawl",
    description:
      "Jugá esta carta y eligí a un jugador. \n\
      \nTiene que tomar un trago de cada vaso de la mesa o pierde.",
    leyend:
      "Pub Crawl, también conocido como bar tour, bar-hopping, ir de bares o piringundear. Ok, esta última no.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Trabalenguas",
    description:
      "Jugáesta carta y elegí a un jugador.\n\
      \nTiene que decir SIN EL MÁS MÍNIMO ERROR el siguiente trabalenguas o pierde.\n\
      \n'Pedro Pérez Pereira, pobre pintor portugués, pinta preciosos paisajes para poder partir para París",
    leyend:
      "Esperabas un chiste y te encontrás con esta mierda. La vida es así, dura y cruel. Como los trabalenguas",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "¡Regalos!",
    description:
      "Preguntale a cada jugador si acepta o no tu regalo.\n\
      \nDespués de que todos elijan, revelá la carta\n\
      \n¡El regalo era la fórmula de la felicidad!\n\
      \nTodos los que no aceptaron, tienen que tomar un trago para ahogar sus penas.",
    leyend: "A fórmula de la felicidad regalada no se le miran los dientes.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Del Orto",
    description:
      "Colocá esta carta enfrente de otro jugador.\n\
      \nDicho jugador deberá continuar jugando con sus trasero apoyado sobre la mesa por el resto de la partida.\n\
      \nSi no lo hace, pierde.",
    leyend:
      "Podría llamarse Del Culo, De La Cola, Del Cortachurro, Del Tiracaca, Del Anillo De Cuero, y así...",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Control de Alcoholemia",
    description:
      "Jugá esta carta y elegí a otro jugador: tiene que 'hacer el 4', o pierde",
    leyend:
      "Y si encuentra una manera de hacer un 3 se gana como mínimo, MÍNIMO, el aplauso y el respeto de todos.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "¡Regalos",
    description:
      "Preguntale a cada jugador si acepta o no tu regalo.\n\
      \nDespués de que todos elijan, revelá la carta\n\
      \n¡El regalo eran cervezas!\n\
      \nTodos los que aceptaron, tienen que tomar un trago.",
    leyend: "Sin televisión y sin cerveza, Homero pierde la cabeza",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Happy Hour",
    description:
      "Elegí a otro jugador: tiene que servirse otro vaso con la misma bebida y colocarlo al lado del que ya tenia.\n\
      \nAhora, cada vez que tenga que tomar, tiene que hacerlo de los dos vasos, o pierde.\n\
      \nSi usás esta carta antes de las 21hs en lugar de a un jugador podés elegir a dos.",
    leyend: "¿Te parece andar jugando un drinking game antes de las 21hs?",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Bombay",
    description:
      "Colocá esta carta boca arriba enfrente tuyo, tomá un trago y luego jugá otro turno.\n\
      \nEsta carta cuenta como Bomba.\n\
      \n¡Si hay cuatro o más Bombas en la mesa, explotan y todos pierden!",
    leyend:
      "Mientras esperás que juegen más Bombas pensate un sinónimo de sinónimo.",
    isStar: false,
    isBomb: true,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Fondo Blanco",
    description:
      "Jugá esta carta cuando pierdas aunque no sea tu turno.\n\
      \n¡Si hacés un fondo blanco, no pérdes!\n\
      \nO jugá esta carta en tu turno para tomar un trago, festejar que todavía no perdiste y robar dos cartas",
    leyend: "En el fondo blanco somos todos mucho más alegres.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Bombay",
    description:
      "Colocá esta carta boca arriba enfrente tuyo, tomá un trago y luego jugá otro turno.\n\
      \nEsta carta cuenta como Bomba.\n\
      \n¡Si hay cuatro o más Bombas en la mesa, explotan y todos pierden!",
    leyend: "Vale por una referencia de los Simpsons",
    isStar: false,
    isBomb: true,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Vale x Una Consumisión",
    description:
      "Colocá esta carta boca arriba enfrente tuyo y tomá un trago.\n\
      \nEsta carta vale 8 puntos. El primero en llegar a 15, gana.",
    leyend:
      "Los telos deberían darte un papelito que diga 'vale x una consumación.",
    isStar: false,
    isBomb: false,
    points: 8,
    expansion: "drinking",
  },
  {
    title: "Gatorei",
    description:
      "Podés jugar esta carta en cualquier momento aunque no sea tu turno.\n\
      \nElegí un vaso de la mesa y reemplazá su contenido por otra bebida a tu elección.\n\
      \nSi elegís gatore sumás 5 puntos y si elegís lo que había en el bidón de Branco, sumás 10.",
    leyend: "No tiene bebida alcóholica, señorita, tiene gatorei.",
    isStar: false,
    isBomb: false,
    points: 5,
    expansion: "drinking",
  },
  {
    title: "Yo Nunca",
    description:
      "Jugá la carta y leé en voz alta:\n\
      \n'Yo nunca tuve una fantasía sexual con alguien de esta mesa'\n\
      \nTodos los que nunca la tuvieron, pierden. Los que sí, quedan en juego pero tienen que tomar un trago.",
    leyend:
      "No seas cagón, tomate un trago por cada persona de la mesa con la que fantaseaste.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Yo Nunca",
    description:
      "Jugá la carta y leé en voz alta:\n\
      \n'Yo nunca pagué por sexo'\n\
      \nTodos los que nunca lo hicieron, pierden. Los que sí, quedan en juego pero tienen que tomar un trago.",
    leyend: "No es un tema de principios, es que soy muy miserable",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Yo Nunca",
    description:
      "Jugá la carta y leé en voz alta:\n\
      \n'Yo nunca le metí los cuernos a una pareja'.\n\
      \nTodos los que nunca lo hicieron, pierden. Los que sí, quedan en juego pero tienen que tomar un trago.",
    leyend: "Qué momento de mierda perder mientras tu pareja toma.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Yo Nunca",
    description:
      "Jugá la carta y leé en voz alta:\n\
      \n'Yo nunca dudé de mi sexualidad'\n\
      \nTodos los que nunca dudaron, pierden. Los que sí quedan en juego pero tienen que tomar un trago.\n\
      \n No es heteronormativa, TODOS pueden dudar, ¡así que no jodan, eh!",
    leyend:
      "Y hablando de heteronormativa... Macho es el que probó y no le gustó y después dijo 'que sea al mejor de 3'.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Quien se Ha Tomado Todo El Vino Ah Ah",
    description:
      "Leé la primera parte de la cartta en voz alta y colocala boca boca abajo. ¡No reveles la última parte hasta el final!\n\
      \n'A la cuenta de 3, todos tienen que apuntar a otro jugador'\n\
      \nTodos los jugadores que no hayan sido apuntados tiene que tomar un trago y hacer Ah Ah Ah, o pierden.",
    leyend:
      "Si jugás esta carta con el tema de la Mona de fonde te voy a querer mucho.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Yo Nunca",
    description:
      "Jugá la carta y leé en voz alta:\n\
      \n'Yo nunca me saqué una selfie en bolas'\n\
      \nTodos los que nunca lo hicieron, pierden. Los que sí quedan en juego pero tienen que tomar un trago.",
    leyend:
      "Si lo hiciste, mandá la prueba a fotosparacascarnos@bureaudejuegos.com",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Quien se Ha Tomado Todo El Vino Ah Ah",
    description:
      "Leé la primera parte de la cartta en voz alta y colocala boca boca abajo. ¡No reveles la última parte hasta el final!\n\
      \n'A la cuenta de 3, todos tienen que apuntar a otro jugador'\n\
      \nEl jugador al que más apuntaron tiene que hacer fondo blanco, o pierde. Si hay empate, lo hacen todos los que hayan empatado.",
    leyend:
      "Me pregunto por qué le dirán cuarteto si el que canta siempre es uno y los que tocan son como ochenta...",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Bevedor Social",
    description:
      "Colocá esta carta boca arriba enfrente de otro jugador.\n\
      \nSi esta carta está enfrente tuyo cada vez que otra jugador pierda, tenés que tomar un trago. Si no lo hacés, pierdés",
    leyend: "Hacé de cuenta que estás brindadndo para festejar que otro perdió",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Aguas Frescas",
    description:
      "Colocá esta carta boca arriba, enfrente de un jugador (podés ser vos).\n\
      \nMientras esta carta este enfrente tuyo, solo podés tomar agua.",
    leyend: "La que parece de cerveza es de fernet pero sabe a gin tonic.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Barman",
    description:
      "Cuando jugás esta carta le tenés que llenar el vaso de bebida a todos los demás jugadores.\n\
      \nLuego jugá otro turno.",
    leyend:
      "¡Rata miserable! Seguro que esto es lo más parecido a invitar una ronda que hiciste en tu perra vida. ¿Cuánta agresión al pedo, no?",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Ley Seca",
    description:
      "Colocá esta carta sobre la mesa y leé en voz alta:\n\
      \n'A partir de este momento nadie puede tomar. Si una carta te pide tomar, pierdés'.",
    leyend:
      "'La ley seca de 1920 trataba de mantener y defender la moralidad puritana de la población norteamericana anglosajona rural' NLTNUP: te divierte y te enseña",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Wing Man",
    description:
      "Colocá esta carta enfrente tuyo y elegí otro jugador.\n\
      \nCada vez que tengas que tomar, dicho jugador tiene que hacerte la segunda y tomar él también.\n\
      \nSi no lo hace, pierden ambos.",
    leyend: "Haaave you met Ted?",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Números",
    description:
      "Leé la primera parte de la carta en voz alta y colocala boca abajo. ¡No reveles la última parte hasta el final!\n\
      \n'A la cuenta de 3, todos levantan entre 1 y 5 dedos'.\n\
      \nTodos toman tantos tragos como dedos hayan levantado, o pierden.",
    leyend:
      "-¿Te sirvo?\n\
      \n-Un dedito\n\
      \n-¡PLOP!",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Números",
    description:
      "Leé la primera parte de la carta en voz alta y colocala boca abajo. ¡No reveles la última parte hasta el final!\n\
      \n'A la cuenta de 3, todos levantan entre 1 y 5 dedos'.\n\
      \nTodos los que levantaron 1 solo dedo tienen que hacer fondo blanco, o pierden.",
    leyend: "Todo aquel que crea en la telequinesis que levante mi mano.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Barney",
    description:
      "Colocá esta carta enfrente tuyo y elegí otro jugador\n\
      \nCada vez que tengas que tomar, dicho jugador deberá tomar en tu lugar.\n\
      \nSi no lo hace, pierde.",
    leyend: "No lloren por mí, ya estoy muerto.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "¡Batalla!",
    description:
      "Leé la primera parte de la carta en voz alta. ¡No reveles la última parte hasta el final!\n\
      \n'A la cuenta de 3, todo el mundo tiene que hacer Piedra, Papel o Tijera'.\n\
      \nCualquiera que haya hecho Piedra, Papel o Tijera, tiene que tomar un trago, o pierde",
    leyend:
      "Los hacés tomar a los demás Y ENCIMA los hacés ilusionarse al pedo. ¡Hermoso!",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Perinola",
    description:
      "¡Todos tomas!\n\
      \nO pierden.\n\
      \nY como sobraba mucho espacio en la carta: cualquiera que tenga una carta de Aguas Frescas adelante suyo, la descarta y hace fondo blanco, o pierde.",
    leyend:
      "No entiendo cómo no hicimos una carta Perinola en la Picante que diga: ¡Todos la ponen!",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Yo Nunca",
    description:
      "Jugá la carta y leé en voz alta:\n\
      \n'Yo nunca tuve sexo en mi lugar de trabajo'.\n\
      \nTodos los que nunca lo hicieron, pierden. Los que sí quedan en juego pero tienen que tomar un trago.",
    leyend: "Al fin una carta para el ama de casa.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Yo Nunca",
    description:
      "Jugá la carta y leé en voz alta:\n\
      \n'Yo nunca fui a trabajar drogado'.\n\
      \nTodos los que nunca lo hicieron, pierden. Los que sí quedan en juego pero tienen que tomar un trago.",
    leyend: "Tengo las bolas llenas de pensar chistecitos para las cartas.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Yo Nunca",
    description:
      "Jugá la carta y leé en voz alta:\n\
      \n'Yo nunca me masturbé en la casa de un amigo'.\n\
      \nTodos los que nunca lo hicieron, pierden. Los que sí, quedan en juego pero tienen que tomar un trago.",
    leyend: "Todavía estás a tiempor de una paja bolsillera.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Yo Nunca",
    description:
      "Jugá la carta y leé en voz alta:\n\
      \n'Yo nunca hice un trío'.\n\
      \nTodos los que nunca lo hicieron, pierden. Los que sí, quedan en juego pero tienen que tomar un trago.",
    leyend:
      "Es obvio que nos referimos a trío sexual, no vengan con truco gallo ni ninguna de esas boludeces.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Yo Nunca",
    description:
      "Jugá la carta y leé en voz alta:\n\
      \n'Yo nunca me depilé los genitales'.\n\
      \nTodos los que nunca lo hicieron, pierden. Los que sí, quedan en juego pero tienen que tomar un trago.",
    leyend: "En Bureau de Juegos abogamos por un mundo sin pelos en la lengua.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
  {
    title: "Cerveza",
    description:
      "Colocá esta carta boca arriba enfrente tuyo y leé en voz alta:\n\
      \n'A partir de este momento cualquier jugador que diga las palabras 'agua', 'cerveza' o cualquier conjugación del verbo 'tomar' pierde inmediatamente'.\n\
      \n¡Buena suerte!",
    leyend:
      "Hasta 2013, en Rusia, la cerveza no era considerada una bebida alcóholica. Mira qué lindo tema de conversación.",
    isStar: false,
    isBomb: false,
    points: 0,
    expansion: "drinking",
  },
];

export default drinking;
