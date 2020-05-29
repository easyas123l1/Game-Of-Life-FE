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
    for (let j = 0; j < this.height; j++) {
      let newArray = [];
      for (let i = 0; i < this.width; i++) {
        let newObj = {
          position: i + "," + j,
          value: "0",
          bool: false,
        };
        newArray.push(newObj);
      }
      board.push(newArray);
    }
    this.board = board;
  }

  changeLife(position) {
    for (let j = 0; j < this.height; j++) {
      for (let i = 0; i < this.width; i++) {
        if (this.board[j][i].position === position) {
          if (this.board[j][i].value === "1") {
            this.board[j][i].value = "0";
            this.board[j][i].bool = false;
          } else {
            this.board[j][i].value = "1";
            this.board[j][i].bool = true;
          }
        }
      }
    }
  }

  constructor() {
    this.buildBoard();
  }

  ngOnInit(): void {
  }
}
