import { Component } from "../component";

const WINNING_COORDINATATES = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

export interface PlayRecord {
    player: string;
    spot: number;
}

export class Table extends Component<HTMLElement>{
    private _playerLabel: HTMLElement = this.element.querySelector('.player-label');
    private _resetButton: HTMLElement = this.element.querySelector('.reset-button');
    private _currentPlayer: string = "X";
    private _spots: string[] = Array(9).fill("");

    constructor(element: HTMLElement){
        super(element);
        this._playerLabel.innerHTML = this._currentPlayer;
        this._resetButton.addEventListener('click', () => this.resetGame());
        this.addClickEvents();
    }

    public static loadHtml(html: string): HTMLElement {
        const template = document.createElement("template");
        template.innerHTML = html.trim();
        return template.content.firstElementChild as HTMLElement;
    }
    
    public static create(html: string): Table {
    const element = Table.loadHtml(html);
    document.getElementById("app")?.appendChild(element);
    return new Table(element);
    }

    private addClickEvents(): void {
        const spots = this.element.querySelectorAll('[class^="spot-"]');
        this._currentPlayer = "X";

        spots.forEach((spot: Element, index: number) => {
            spot.addEventListener('click', () => this.handleClick(index + 1, spot));
        });
    }

    private updatePlayer(): void {
        this._currentPlayer = this._currentPlayer === "X" ? "O" : "X";
        this._playerLabel.innerHTML = this._currentPlayer;
    }

    private handleClick(index: number, spot: Element): void {
        const player = this._currentPlayer === "X" ? "X" : "O"

        if (this._spots[index - 1] !== "") {
            return; 
        }

        spot.innerHTML = player;
        this._spots[index - 1] = player;

        if (this.checkWinner(player)) {
            alert(`${player} wins!`);
            return;
        }

        this.updatePlayer();
    }

    private checkWinner(player: string): boolean {
        for (const combination of WINNING_COORDINATATES) {
            const [a, b, c] = combination;
            if (this._spots[a - 1] === player && this._spots[b - 1] === player && this._spots[c - 1] === player) {
                return true;
            }
        }
        return false;
    }

    private resetGame(): void {
        const player = "X"
        const spots = this.element.querySelectorAll('[class^="spot-"]');
        this._currentPlayer = player;
        this._playerLabel.innerHTML = player;
        this._spots = Array(9).fill("");

        spots.forEach((spot: Element) => {
            spot.innerHTML = "";
        });
    };
}