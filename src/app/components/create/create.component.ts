import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  width: Number = 10;
  height: Number = 10;
  description: String = "";
  board = [];
  original = [];
  playing = false;
  generations = 0;
  changeDimension(x) {
    let newWidth: Number = x.value.width;
    let newHeight: Number = x.value.height;
    if (newWidth < 10) {
      newWidth = 10;
    }
    if (newWidth > 100) {
      newWidth = 100;
    }
    if (newHeight < 10) {
      newHeight = 10;
    }
    if (newHeight > 100) {
      newHeight = 100;
    }
    this.width = newWidth;
    this.height = newHeight;
    this.buildBoard();
  }

  buildBoard() {
    let board = [];
    let oBoard = [];
    for (let j = 0; j < this.height; j++) {
      let newArray = [];
      let oNewArray = [];
      for (let i = 0; i < this.width; i++) {
        let newObj = {
          position: i + "," + j,
          value: "0",
          bool: false,
        };
        newArray.push(newObj);
        oNewArray.push(newObj);
      }
      board.push(newArray);
      oBoard.push(oNewArray);
    }
    this.board = board;
    this.original = oBoard;
  }

  changeLife(position) {
    for (let j = 0; j < this.height; j++) {
      for (let i = 0; i < this.width; i++) {
        if (this.board[j][i].position === position) {
          if (this.board[j][i].value === "1") {
            this.board[j][i].value = "0";
            this.board[j][i].bool = false;
            this.original[j][i].value = "0";
            this.original[j][i].bool = false;
          } else {
            this.board[j][i].value = "1";
            this.board[j][i].bool = true;
            this.original[j][i].value = "1";
            this.original[j][i].bool = true;
          }
        }
      }
    }
  }

  checkNeighbours(i, j) {
    let count = 0;
    let iDontGoBack = false;
    let iDontGoForward = false;
    let jDontGoBack = false;
    let jDontGoForward = false;
    if (i === 0) {
      iDontGoBack = true;
    }

    if (i + 1 === this.width) {
      iDontGoForward = true;
    }

    if (j === 0) {
      jDontGoBack = true;
    }

    if (j + 1 === this.height) {
      jDontGoForward = true;
    }

    if (!iDontGoBack) {
      count += Number(this.board[j][i - 1].value);
      if (!jDontGoBack) {
        count += Number(this.board[j - 1][i - 1].value);
      }
      if (!jDontGoForward) {
        count += Number(this.board[j + 1][i - 1].value);
      }
    }
    if (!iDontGoForward) {
      count += Number(this.board[j][i + 1].value);
      if (!jDontGoBack) {
        count += Number(this.board[j - 1][i + 1].value);
      }
      if (!jDontGoForward) {
        count += Number(this.board[j + 1][i + 1].value);
      }
    }
    if (!jDontGoBack) {
      count += Number(this.board[j - 1][i].value);
    }
    if (!jDontGoForward) {
      count += Number(this.board[j + 1][i].value);
    }
    if (i === 2 && j === 1) {
    }
    return count;
  }

  play() {
    this.generations += 1;
    this.playing = true;
    let newBoard = [];
    for (let j = 0; j < this.height; j++) {
      let newArray = [];
      for (let i = 0; i < this.width; i++) {
        let alive = true;
        if (this.board[j][i].value === "0") {
          alive = false;
        }
        let count = this.checkNeighbours(i, j);
        let value;

        if (alive && count < 2) {
          value = "0";
        } else if (alive && count > 3) {
          value = "0";
        } else if (!alive && count !== 3) {
          value = "0";
        } else {
          value = "1";
        }
        let bool = true;
        if (value === "0") {
          bool = false;
        }
        let newObj = {
          position: i + "," + j,
          value: value,
          bool: bool,
        };
        newArray.push(newObj);
      }
      newBoard.push(newArray);
    }
    for (let j = 0; j < this.height; j++) {
      for (let i = 0; i < this.width; i++) {
        this.board[j][i] = newBoard[j][i];
      }
    }
    setTimeout(() => {
      if (this.playing) {
        this.play();
      }
    }, 1000);
  }

  pause() {
    this.playing = false;
  }

  restart() {
    this.generations = 0;
    this.playing = false;
    this.buildBoard();
  }

  tick() {
    this.playing = false;
    this.generations += 1;
    let newBoard = [];
    for (let j = 0; j < this.height; j++) {
      let newArray = [];
      for (let i = 0; i < this.width; i++) {
        let alive = true;
        if (this.board[j][i].value === "0") {
          alive = false;
        }
        let count = this.checkNeighbours(i, j);
        let value;

        if (alive && count < 2) {
          value = "0";
        } else if (alive && count > 3) {
          value = "0";
        } else if (!alive && count !== 3) {
          value = "0";
        } else {
          value = "1";
        }
        let bool = true;
        if (value === "0") {
          bool = false;
        }
        let newObj = {
          position: i + "," + j,
          value: value,
          bool: bool,
        };
        newArray.push(newObj);
      }
      newBoard.push(newArray);
    }
    for (let j = 0; j < this.height; j++) {
      for (let i = 0; i < this.width; i++) {
        this.board[j][i] = newBoard[j][i];
      }
    }
  }

  constructor() {
    this.buildBoard();
  }

  ngOnInit(): void {
  }
}
