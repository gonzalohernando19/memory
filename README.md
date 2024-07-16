# Memory Cards

El Juego de **Memory Cards** es un juego interactivo diseñado para probar y mejorar tu memoria visual. En este juego, se te muestran números del 1 al 9, los cuales luego se ocultan. Debes seleccionar el número solicitado dentro de un límite de tiempo determinado. Con un diseño atractivo y niveles de dificultad ajustables, Memory Cards ofrece diversión y un desafío mental.


# Características

- **Interfaz Intuitiva:** Una interfaz de usuario limpia y fácil de navegar.
- **Niveles de Dificultad:** Tres niveles de dificultad para adaptarse a jugadores de todas las edades y habilidades:
  + **Fácil:** 10 segundos para recordar y elegir el número (10 puntos).
  + **Medio:** 5 segundos para recordar y elegir el número (20 puntos).
  + **Difícil:** 2 segundos para recordar y elegir el número (30 puntos).
- **Sistema de Puntuación:** Un sistema de puntuación que permite a los jugadores seguir su rendimiento y competir con amigos.

# Tecnología
- He utilizado **lit-element** para crear componentes web, ya que es una biblioteca que simplifica la creación de componentes web.
- **Husky** se ha utilizado para ejecutar prettier y el linter antes de los commits y los test antes de un push para evitar subir test fallidos y mantener la calidad del código.
- He usado **Web Test Runner** para los tests. Usar Web Test Runner se alinea con nuestro objetivo de mantener una calidad de código alta y una cobertura de tests robusta.
  + Usando --coverage con Web Test Runner, podemos recopilar fácilmente métricas de cobertura de código durante nuestras ejecuciones de prueba. Esto nos ayuda a identificar áreas de nuestro código que requieren más tests y asegura una cobertura de tests completa.
  + El modo --watch proporcionado por Web Test Runner vuelve a ejecutar las tests automáticamente cuando realizamos cambios en nuestro código, permitiendo una iteración rápida y retroalimentación inmediata sobre los resultados de los tests.
- He optado por **@vaadin/router** para crear una SPA con sus rutas.
- Elegí **Rollup** para empaquetar mis módulos JavaScript porque es la herramienta de creación predeterminada recomendada por Open WC.
- He integrado **Prettier** en el proyecto para mantener un estilo de código unificado.
- En este proyecto he utilizado **custom properties** para gestionar nuestro CSS de manera más efectiva.
  + Al definir valores como colores, espaciado y tamaños de fuente en un solo lugar, podemos actualizar fácilmente nuestros estilos en todo el proyecto. Por ejemplo, cambiar el --primary-color solo requiere una actualización en una ubicación, que se propaga automáticamente en toda la aplicación.


# Decisiones específicas

- **Persistent data management:**
   `UserState` se emplea para almacenar y recuperar datos como el nombre del jugador y la puntuación en diferentes sesiones de juego.
   Esto asegura que los datos importantes del jugador persistan incluso cuando se actualiza el juego o se navega fuera de él, proporcionando una experiencia de usuario continua.

- **Flujo del juego**
   Las mecánicas centrales del juego giran en torno a revelar y memorizar números. Así es como hemos realizado estas acciones:

  1. **Inicio y reinicio del juego:**
    `startGame()` inicializa una nueva sesión de juego reiniciando las variables de estado del juego (showButtons, showNumbers, selectedNumbers, choice, isPlaying) y activando la visualización de los elementos interactivos del juego (Cartas).
    Asegura que cada sesión de juego comience con una pantalla limpia, proporcionando una iniciación consistente del juego y preparando el entorno del juego para la interacción del jugador.

  2. **Revelación de cartas y memorización de números:**
    `hideNumbers()` selecciona aleatoriamente un número de los 9 que hay en pantalla (targetNumber) y tras el periodo de tiempo especificado, los oculta.

  3. **Cálculo y gestión de puntuación:**
    `playRound()` evalúa la elección del jugador (choice) contra el targetNumber, ajustando la puntuación del jugador (scoreToSum) en función de las selecciones correctas.
    Además suma la puntuación mostrandola al momento en pantalla.


- **Estructura modular de HTML**
  
  1. **renderHeader():**

    Separa el renderizado del encabezado del juego, que incluye información del jugador y la selección de dificultad.
    Al encapsular el renderizado del encabezado en una función dedicada, `renderHeader()`, la función principal render() permanece enfocada en la interfaz del juego. Esta separación mejora la organización y claridad del código, facilitando la gestión y actualización de componentes relacionados con el encabezado de forma independiente.

  2. **renderButtons():**

    Maneja el renderizado de los botones del juego que revelan números y permiten la interacción del jugador.
    Abstrae la lógica de renderizado de botones en una función separada, `renderButtons()`, para aislar la lógica de presentación de la estructura principal del juego. Esto promueve la modularidad del código y simplifica el mantenimiento, especialmente al tratar con interacciones complejas de botones y estilización.

  3. **getMessage():**

    Genera dinámicamente mensajes basados en el estado del juego (por ejemplo, mensaje de inicio del juego, fase de memorización, visualización del número objetivo).
    Centraliza la lógica para mostrar mensajes del juego dentro de `getMessage()`, asegurando unos mensajes consistentes y contextuales a lo largo de las diferentes fases del juego. Esta separación de responsabilidades mejora la legibilidad del código y facilita actualizaciones rápidas de los mensajes del juego sin alterar otros componentes de la interfaz.



- **Lógica de juego en la vista game:**

    En la vista del Juego, la decisión de no separar la lógica del juego en un componente separado se basa en la comprensión de que la lógica y funcionalidad específicas del juego están estrechamente acopladas con la vista actual y es poco probable que se reutilicen en otros lugares.


# Quickstart

Para comenzar con Memory Cards:

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/gonzalohernando19/memory.git
    cd memory-app
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Ejecuta la aplicación:**

    ```bash
    npm start
    ```

4. **Abre la aplicación en tu navegador:**

    Navega a [http://localhost:8000/](http://localhost:8000/)

## Scripts

- `start`: Runs your app for development, reloading on file changes.
- `start:build`: Runs your app after it has been built using the build command.
- `build`: Builds your app and outputs it in your `public` directory.
- `test`: Runs your test suite with Web Test Runner.
- `lint`: Runs the linter for your project.
- `format`: Fixes linting and formatting errors.

## Producción

1. **Cosntruye el proyecto:**

    ```bash
    npm run build
    ```

2. **Publica la carpeta `public`:**

   Despliega el contenido del directorio `public` a tu proveedor de hosting o servidor. 

## Constribuciones

¡Las contribuciones son bienvenidas! Por favor, haz un fork del repositorio y crea una pull request con tus cambios. Para asegurar que tu contribución se alinee con los estándares del proyecto:

- Sigue el estilo de código y las convenciones usadas en el proyecto.
- Proporciona descripciones claras y detalladas de tus cambios en la pull request.


