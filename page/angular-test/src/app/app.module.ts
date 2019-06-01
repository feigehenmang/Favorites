import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevExtremeModule } from "devextreme-angular";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule } from "./common/common.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { DevExtremeModule } from "devextreme-angular";

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		// NgZorroAntdModule,
		BaseModule,
		NgZorroAntdModule,
		FormsModule,
		HttpClientModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    DevExtremeModule
=======
		BrowserAnimationsModule,
		DevExtremeModule
>>>>>>> f8c84ba0839ce9f921a4892ebb70f746a9276b3d
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
