import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule } from "./common/common.module";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		// NgZorroAntdModule,
		BaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
