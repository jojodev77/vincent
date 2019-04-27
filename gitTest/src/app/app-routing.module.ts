import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ResumeComponent } from './resume/resume.component';
import { PpComponent } from './pp/pp.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { CommanderComponent } from './commander/commander.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [

  {path: 'accueil', component: AccueilComponent},
  {path: '', component: AccueilComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'pp', component: PpComponent},
  {path: 'photo', component: PhotoComponent},
  {path: 'video', component: VideoComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'commander', component: CommanderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
