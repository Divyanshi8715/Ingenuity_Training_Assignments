import "./css/main.scss";
import {Application, Ticker} from 'pixi.js';
import {Games} from "./ts/Games";
window.onload = ()=>{
    const app = new Application({
        width:800,
        height:500,
        backgroundColor:0x00A300,
        //resizeTo:window,
        sharedTicker: true,
        sharedLoader:true,
        // resolution: window.devicePixelRatio
    });

    document.body.appendChild(app.view);

    const game = new Games(app);
    const ticker = Ticker.shared;
    ticker.add(game.update.bind(game));
};

/*import Game from './ts/game';

import './css/main.scss';

const canvas: HTMLCanvasElement = document.getElementById('arena') as HTMLCanvasElement;
const game = new Game(canvas);

const score: HTMLElement = document.getElementById('score') as HTMLElement;

game.on('score', s => score.innerHTML = s);
game.on('over', s => alert('Game over!\nRefresh page for new game.'));

game.start();*/