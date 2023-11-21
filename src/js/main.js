import '../css/style.css'
import { darkModeHandle  } from './utils'
import { startGame } from './game'

darkModeHandle()

// localStorage.setItem('x', '12345')
// const x = localStorage.getItem('x')

const startGameButton = document.getElementById('startGame')

startGameButton.addEventListener('click', startGame)
