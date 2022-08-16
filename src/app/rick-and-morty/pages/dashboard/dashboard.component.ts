import { Component, OnInit } from '@angular/core';
import { CharacterResult } from 'src/app/interfaces/character';
import { EpisodesService } from '../../services/episodes.service';
import { CharactersService } from '../../services/characters.service';
import { LocationsService } from '../../services/locations.service';
import { LocationResult } from '../../../interfaces/location';
import { EpisodesResult } from '../../../interfaces/episodes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  public episodeCount: number = 0;
  public loadingCharacters: boolean = true;
  public loadingLocations: boolean = true;
  public loadingEpisodes: boolean = true;
  public mainCharacters: CharacterResult[] = [];
  public mainLocations: LocationResult[] = [];
  public latestEpisodes: EpisodesResult[] = [];
  public residentsNames: string[][] = [];
  public episodeCharacterNames: string[][] = [];

  constructor(private es: EpisodesService, private cs: CharactersService, private ls: LocationsService) { }
  
    ngOnInit(): void {
    //Muestra la cuenta de episodios
    this.es.getEpisodecount().subscribe(count => {
      this.episodeCount = count;
    });
    //Busca los personajes principales
    this.getMainCharacters();
    //Busca las principales localizaciones
    this.getMainLocations();
    //Busca los últimos episodios
    this.getLatestEpisodes();
  }


  getMainCharacters() {
    this.cs.getPrincipalCharacters().subscribe(characters => {
      this.mainCharacters = characters;
      this.loadingCharacters = false;
    });
  }

  getMainLocations() {
    this.ls.getMainLocations().subscribe(locations => {
      this.mainLocations = locations;
        this.mainLocations.forEach((location, j) => {
          this.residentsNames[j]= []
          location.residents = location.residents.slice(0, 5);
          location.residents.forEach((resident, i) => {
            this.cs.getCharacterName(resident)
              .subscribe(name => {
                this.residentsNames[j][i] = name;
              }
              )
          })
        });
        this.loadingLocations = false;
        
      });
      
    
  }

  getLatestEpisodes() {
    this.es.getLatestEpisodes().subscribe(episodes => {
      this.latestEpisodes = episodes;
      this.latestEpisodes.forEach((episode, j) => {
        this.episodeCharacterNames[j]= []
        episode.characters = episode.characters.slice(0, 5);
        episode.characters.forEach((character, i) => {
          this.cs.getCharacterName(character)
            .subscribe(name => {
              this.episodeCharacterNames[j][i] = name;
            }
            )
        })
      });

      this.loadingEpisodes = false;
    });
  }

 
}
