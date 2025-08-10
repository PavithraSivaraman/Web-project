import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { TravelComponent } from './travel/travel.component';
import { EventsComponent } from './events/events.component';
import { EastComponent } from './east/east.component';
import { NorthComponent } from './north/north.component';
import { SouthComponent } from './south/south.component';
import { WestComponent } from './west/west.component';
import { CarvingsComponent } from './carvings/carvings.component';
import { CavesComponent } from './caves/caves.component';
import { DivinityComponent } from './divinity/divinity.component';
import { HistoricsComponent } from './historics/historics.component';
import { BioresComponent } from './biores/biores.component';
import { BirdsancComponent } from './birdsanc/birdsanc.component';
import { NatparkComponent } from './natpark/natpark.component';
import { WildsancComponent } from './wildsanc/wildsanc.component';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BookComponent } from './book/book.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatesComponent,
    AssamComponent,
    PunjabComponent,
    JkComponent,
    KeralaComponent,
    MaharastraComponent,
    HpComponent,
    TnComponent,
    KarnatakaComponent,
    RajasthanComponent,
    TravelComponent,
    EventsComponent,
    EastComponent,
    NorthComponent,
    SouthComponent,
    WestComponent,
    CarvingsComponent,
    CavesComponent,
    DivinityComponent,
    HistoricsComponent,
    BioresComponent,
    BirdsancComponent,
    NatparkComponent,
    WildsancComponent,
    BookComponent,
    MyprofileComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
