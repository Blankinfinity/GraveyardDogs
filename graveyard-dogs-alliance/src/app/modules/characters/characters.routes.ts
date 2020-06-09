import { Routes, RouterModule } from '@angular/router';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { CharacterAddComponent } from './character-add/character-add.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

const routes: Routes = [
    {
        component: AllCharactersComponent,
        path: 'characters',
        children: [
            { path: '', component: AllCharactersComponent },
            { path: 'view', component: CharactersViewComponent },
            { path: 'add', component: CharacterAddComponent },
            { path: 'edit', component: CharacterEditComponent },
            { path: 'create', component: CreateCharacterComponent },
        ],
    }];

export const CharacterRoutes: any = RouterModule.forChild(routes);
