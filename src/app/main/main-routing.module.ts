import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthorComponent } from './pages/author/author.component';
import { TeamComponent } from './pages/team/team.component';
import { WorklogComponent } from './pages/worklog/worklog.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'en' },
  { path: ':language', component: HomeComponent },
  { path: ':language/authors', component: AuthorsComponent },
  { path: ':language/author/:id', component: AuthorComponent },
  { path: ':language/team', component: TeamComponent },
  { path: ':language/worklog', component: WorklogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
