import { startGame } from "./startGame.js";

export const createGameMenu = () => {
    const title = document.createElement('h2');
    const gameTitle = document.querySelector('.game__title');
    const gameSection = document.querySelector('.game-section__container');

    gameSection.innerHTML = '';
    gameTitle.innerHTML = '';
    title.textContent = 'Выбор сложности';
    title.classList.add('game-menu__title');
    document.querySelector('.confetti').innerHTML = '';

    const createDifficultButton = (difficult) => {
        const button = document.createElement('button');

        button.classList.add('game-menu__difficult-btn');
        button.textContent = `${difficult}`;

        button.addEventListener('click', () => startGame(difficult))

        return button;
    }
    gameTitle.append(
        title
    )

    gameSection.append(
        
        createDifficultButton(1),
        createDifficultButton(2),
        createDifficultButton(3),
        createDifficultButton('pro'),
    )
}