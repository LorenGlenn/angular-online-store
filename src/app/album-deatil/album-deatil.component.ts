import { Component, OnInit } from '@angular/core';
import { ActivatedRotue, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-deatil',
  templateUrl: './album-deatil.component.html',
  styleUrls: ['./album-deatil.component.css']
})
export class AlbumDeatilComponent implements OnInit {
  albumId: number = null;
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
  }

}
