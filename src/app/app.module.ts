import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './menu/login/login.component';
import { HomeComponent } from './menu/home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { MaterialModule } from './NgMaterial/material/material.module';
import { tablaComponent } from './Usuario/tabla.component';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { FooterComponent } from './menu/footer/footer.component';
//importar HttpClientModule
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ArticuloComponent } from './articulo/articulo.component';
import { FacturaComponent } from './factura/factura.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MenuModule } from './menu/menu.module';
///pdf
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
//prime
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { PruebaComponent } from './prueba/prueba.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { ClienteDialogoComponent } from './facturacion/cliente-dialogo/cliente-dialogo.component';
import { ArticuloDialogoComponent } from './facturacion/articulo-dialogo/articulo-dialogo.component';
import {FieldsetModule} from 'primeng/fieldset';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoEncontradoComponent,
    tablaComponent,
    NavbarComponent,
    FooterComponent,
    ArticuloComponent,
    FacturaComponent,
    ClienteComponent,
    PruebaComponent,
    FacturacionComponent,
    ClienteDialogoComponent,
    ArticuloDialogoComponent,
    ExamplePdfViewerComponent,
    DetalleFacturaComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
MenuModule,
ButtonModule,
TableModule,
DialogModule,
ReactiveFormsModule,
FieldsetModule,
MatSidenavModule,
CheckboxModule,
RadioButtonModule,
NgxExtendedPdfViewerModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
