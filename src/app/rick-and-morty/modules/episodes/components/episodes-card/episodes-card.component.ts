import { Component, Input, OnInit } from '@angular/core';
import { EpisodesResult, Episodes } from '../../../../../interfaces/episodes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episodes-card',
  templateUrl: './episodes-card.component.html',
  styleUrls: []
})
export class EpisodesCardComponent implements OnInit {

  @Input("Episode") episode!:EpisodesResult;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToEpisode(episodeUrl:string){
    const id = episodeUrl.slice(40);
    if (id) {
      this.router.navigateByUrl(`/episodes/${id}`);
    }
  }
}
