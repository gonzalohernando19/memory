# Memory Game

Memory Game is an interactive game designed to test and improve your visual memory. In this game, you are shown numbers from 1 to 9, which are then hidden. You must select the number requested within a certain time limit. With an attractive design and adjustable difficulty levels, Memory Game offers fun and a mental challenge for people of all ages.

# Features
- Intuitive Interface: A clean and easy-to-navigate user interface.
- Difficulty Levels: Three difficulty levels to suit players of all ages and skills:
 + Easy: 10 seconds to remember and choose the number.
 + Medium: 5 seconds to remember and choose the number.
 + Hard: 2 seconds to remember and choose the number.
- Scoring System: A scoring system that allows players to track their performance and compete with friends.

# Tech
- I have used lit-element for creating web components, as it is a library that simplifies web component creation.
- Husky has been used to run prettier and the linter before commit and tests before a push to prevent pushing failed tests and maintain code quality.
- I have used Web Test Runner for the test. Using Web Test Runner aligns with our goal of maintaining high code quality, robust test coverage, and consistent cross-browser compatibility throughout the development lifecycle.
   + Convenient Coverage Reporting: By using the --coverage flag with Web Test Runner, we can easily collect code coverage metrics during our test runs. This helps us identify areas of our codebase that require more testing and ensures comprehensive test coverage.
   + Interactive Watch Mode: The --watch mode provided by Web Test Runner is invaluable during development. It automatically re-runs tests whenever we make changes to our codebase, allowing for rapid iteration and immediate feedback on test results.
- @vaadin/router has been opted to create a SPA with its routes.
- I chose Rollup for bundling my JavaScript modules because it is the default scaffolding tool recommended by Open WC.
- I chose prettier for code format.
- I have used to integrate Prettier into the project to maintain a unified coding style effortlessly.
- In this project i have used custom properties to manage our CSS more effectively.
   + By defining values such as colors, spacing, and font sizes in one place, we can easily update our styles throughout the entire project. For example, changing the primary color only requires an update in a single location, which automatically propagates throughout the application.

# Specific decisions

- Persistent Data Management:
   UserState is employed to store and retrieve critical data such as the player's name and score across different game sessions.
   This ensures that important player data persists even when the game is refreshed or navigated away from, providing a seamless user experience.

- Gameplay Flow
   The core gameplay mechanics revolve around revealing and memorizing numbers. Here’s how the game orchestrates these actions:

  1.- Start and Reset Game:
    startGame() initializes a new game session by resetting game state variables (showButtons, showNumbers, selectedNumbers, choice, isPlaying) and triggering the display of interactive game elements.
    Ensures each game session starts with a clean slate, providing consistent gameplay initiation and preparing the game environment for player interaction.

  2.- Number Revelation and Memorization:
    hideNumbers() randomly selects a number from revealedNumbers after a specified hideTimeout, toggling visibility (showNumbers) to challenge player memory.
    Tests and enhances player memory retention by briefly displaying numbers before hiding them, prompting players to recall and select the correct number during gameplay.

  3.-Score Calculation and Management:
    playRound() evaluates player input (choice) against the targetNumber, adjusting the player’s score (scoreToSum) based on correct selections.
    Provides immediate feedback to players on their performance, reinforcing gameplay objectives and rewarding correct responses to maintain engagement and motivation.

- Modular HTML Structure
  
  1.- renderHeader():
    Separates the rendering of the game header, which includes player information and difficulty selection.
    By encapsulating the header rendering in a dedicated function, renderHeader(), the main render() function remains focused on assembling the entire game UI. This separation improves code organization and clarity, making it easier to manage and update header-related components independently.

  2.- renderButtons():
    Handles the rendering of game buttons that reveal numbers and allow player interaction.
    Abstracts the button rendering logic into a separate function, renderButtons(), to isolate the presentation logic from the main game structure. This promotes code modularity and simplifies maintenance, especially when dealing with complex button interactions and styling.

  3.-getMessage() Function:
    Dynamically generates messages based on game state (e.g., game start prompt, memorization phase, target number display).
    Centralizes the logic for displaying game messages within getMessage(), ensuring consistent and contextual messaging throughout different game phases. This separation of concerns enhances code readability and facilitates quick updates to game messaging without altering other UI components.

- Not Separating Game Logic into a Separate Component
    In the Game View, the decision not to separate the game logic into a separate component was based on the understanding that the game's specific logic and functionality are tightly coupled with the current view and are unlikely to be reused elsewhere.


# Quickstart

To get started with the Memory game:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/gonzalohernando19/memory.git
    cd memory-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

4. **Open the application in your browser:**

    Navigate to [http://localhost:8000/](http://localhost:8000/)

## Scripts

- `start`: Runs your app for development, reloading on file changes.
- `start:build`: Runs your app after it has been built using the build command.
- `build`: Builds your app and outputs it in your `public` directory.
- `test`: Runs your test suite with Web Test Runner.
- `lint`: Runs the linter for your project.
- `format`: Fixes linting and formatting errors.

## Production

1. **Build the project:**

    ```bash
    npm run build
    ```

2. **Publish the `public` folder:**

    Deploy the contents of the `public` directory to your hosting provider or server.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. To ensure your contribution aligns with project standards:

- Follow the coding style and conventions used in the project.
- Provide clear and detailed descriptions of your changes in the pull request.

