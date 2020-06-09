import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { CharacterAddComponent } from './character-add/character-add.component';
import { MaterialModule } from 'src/app/material.module';
import { CharacterRoutes } from './characters.routes';

@NgModule({
  declarations: [CharacterAddComponent, CharacterEditComponent, CharactersViewComponent, AllCharactersComponent, CreateCharacterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CharacterRoutes
  ]
})
export class CharactersModule { }
