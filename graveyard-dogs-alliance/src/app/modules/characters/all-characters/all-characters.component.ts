import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterEntity } from '../../../models/entities/CharacterEntity';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss']
})
export class AllCharactersComponent implements OnInit {

  characters$: Observable<CharacterEntity[]>;

  constructor(
    //private baseCharacterService: BaseCharacterService,
    //public authService: AuthService
  ) {
    //this.characters$ = baseCharacterService.list();
  }

  ngOnInit(): void {}

}
