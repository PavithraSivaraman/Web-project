import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatesComponent } from './states/states.component';
import { AssamComponent } from './assam/assam.component';
import { PunjabComponent } from './punjab/punjab.component';
import { JkComponent } from './jk/jk.component';
import { KeralaComponent } from './kerala/kerala.component';
import { MaharastraComponent } from './maharastra/maharastra.component';
import { HpComponent } from './hp/hp.component';
import { TnComponent } from './tn/tn.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { race } from 'rxjs';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { TravelComponent } from './travel/travel.component';
import { EventsComponent } from './events/events.component';
import { EastComponent } from './east/east.component';
import { SouthComponent } from './south/south.component';
import { WestComponent } from './west/west.component';
import { NorthComponent } from './north/north.component';
import { CarvingsComponent } from './carvings/carvings.component';
import { CavesComponent } from './caves/caves.component';
import {DivinityComponent} from './divinity/divinity.component';
import {HistoricsComponent} from './historics/historics.component';
import {BioresComponent} from './biores/biores.component';
import {BirdsancComponent} from './birdsanc/birdsanc.component';
import {NatparkComponent} from './natpark/natpark.component';
import {WildsancComponent} from './wildsanc/wildsanc.component';
import { ProfileComponent } from './profile/profile.component';
import { BookComponent } from './book/book.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AuthGuard } from './auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
 {path:'home',component:HomeComponent},
 {path:'states',component:StatesComponent},
 {path:'assam',component:AssamComponent},
 {path:'punjab',component:PunjabComponent},
 {path:'jk',component:JkComponent},
 {path:'kerala',component:KeralaComponent},
 {path:'maharastra',component:MaharastraComponent},
 {path:'hp',component:HpComponent},
 {path:'tn',component:TnComponent},
 {path:'karnataka',component:KarnatakaComponent},
 {path:'rajasthan',component:RajasthanComponent},
 {path:'events',component:EventsComponent},
 {path:'east',component:EastComponent},
 {path:'south',component:SouthComponent},
 {path: 'west',component:WestComponent},
 {path:'north',component:NorthComponent},
 {path:'carvings',component:CarvingsComponent},
 {path:'caves',component:CavesComponent},
 {path:'divinity',component:DivinityComponent},
 {path:'historics',component:HistoricsComponent},
 {path:'biores',component:BioresComponent},
 {path:'birdsanc',component:BirdsancComponent},
 {path:'natpark',component:NatparkComponent},
 {path:'wildsanc',component:WildsancComponent},
 {path:'profile',component:ProfileComponent},
 {path:'book',component:BookComponent,canActivate:[AuthGuard]},
 { path: 'myprofile', component:MyprofileComponent, canActivate:[AuthGuard]},
 {path:'admin-dashboard',component:AdminDashboardComponent},
 {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
