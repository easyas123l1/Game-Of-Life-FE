import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BoardsComponent } from "./components/boards/boards.component";
import { PlayComponent } from "./components/play/play.component";
import { CreateComponent } from "./components/create/create.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "boards", component: BoardsComponent },
  { path: "create", component: CreateComponent },
  { path: "play", component: PlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
