import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { productReducer } from './store/products-store/product.reducer';
import { ProductComponent } from './product/product.component';
import { environment } from 'src/environments/environment.prod';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ products: productReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 15, logOnly: environment.production }),
    CurrencyMaskModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
