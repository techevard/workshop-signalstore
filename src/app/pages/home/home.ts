import { Component, inject, signal, WritableSignal } from "@angular/core";
import { DefaultService, Team } from "../../api";

@Component({
  selector: "app-home",
  imports: [],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {

    private readonly defaultService = inject(DefaultService);

  protected readonly footballTeams: WritableSignal<Team[]> = signal([]);
  protected readonly nbaTeams: WritableSignal<Team[]> = signal([]);
  protected readonly nflTeams: WritableSignal<Team[]> = signal([]);

  constructor() {
    // Pardon. Je me suis loupé qqpart dans la spec du serveur.
    // Les routes retournent des tableaux à 2 dimensions, alors que je m'attendais à des tableaux à 1 dimension.
    // Je "flat" les résultats pour que ça colle à mes attentes.
    this.defaultService.getFootballTeams().subscribe(teams => {
      this.footballTeams.set(teams.flat())
    });
    this.defaultService.getNbaTeams().subscribe(teams => {
      this.nbaTeams.set(teams.flat())
    });
    this.defaultService.getNflTeams().subscribe(teams => {
      this.nflTeams.set(teams.flat())
    });
  }

}
