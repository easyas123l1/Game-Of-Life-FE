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
    console.log(this.height);
    console.log(this.width);
  }

  constructor() {}

  ngOnInit(): void {
  }
}
