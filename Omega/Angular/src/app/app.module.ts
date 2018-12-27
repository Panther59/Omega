import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

import { AppComponent } from './app.component';
import { BlockUIModule } from 'ng-block-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DecodeComponent } from './decode/decode.component';
import { EncodeComponent } from './encode/encode.component';
import { EncodeDecodeService } from './_services/encodeDecode.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './_services/message.service';
import { RouterModule } from '@angular/router';
import { StorageService } from './_services/storage.service';
import { ThemeDialogComponent } from './theme-dialog/theme-dialog.component';
import { routing } from './app.routing';

// replaces previous Http service
















const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets',
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad: () => {

    console.log((<any>window).monaco);

    const id = "foo.json";
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [{
        uri: "http://myserver/foo-schema.json",
        fileMatch: [id],
        schema: {
          type: "object",
          properties: {
            p1: {
              enum: ["v1", "v2"]
            },
            p2: {
              $ref: "http://myserver/bar-schema.json"
            }
          }
        }
      }, {
        uri: "http://myserver/bar-schema.json",
        fileMatch: [id],
        schema: {
          type: "object",
          properties: {
            q1: {
              enum: ["x1", "x2"]
            }
          }
        }
      }]
    });

  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeDialogComponent,
    EncodeComponent,
    DecodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MonacoEditorModule.forRoot(monacoConfig),
    routing,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    BlockUIModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [EncodeDecodeService, StorageService, MessageService],
  bootstrap: [AppComponent],
  entryComponents: [ThemeDialogComponent]
})
export class AppModule { }
