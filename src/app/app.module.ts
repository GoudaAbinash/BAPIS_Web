import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FGFormComponent } from './fgform/fgform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminformComponent } from './adminform/adminform.component';
import { HeaderComponent } from './header/header.component';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import { DataListComponent } from './data-list/data-list.component';
import { Pipe, PipeTransform } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyQuoteComponent } from './my-quote/my-quote.component';
import { DownloadPolicyComponent } from './download-policy/download-policy.component';
import { ReportComponent } from './report/report.component';
import { FireFormComponent } from './fireform/fireform.component';
import { OnlynumberDirective } from './directive/NumberOnlyDirective';
import { AboutComponent } from './about/about.component';
import { MyFilterPipe } from './pipe/myFilterPipe';
import { SalesFilterPipe } from './pipe/salesFilterPipe';
import { FilterBranchPipe } from './pipe/filterBranchPipe';
import { HttpReqInterceptorService } from './interceptor/http-req-interceptor.service';
import { OnlyAlphabetDirective } from './directive/only-aplhabets';
import { TwoDigitDecimaNumberDirective } from './directive/onlyTwoDecimal';
import { SfspComponent } from './sfsp/sfsp.component';
import { BOIUploadComponent } from './boi-upload/boi-upload.component';
import { BOIDashboardComponent } from './boi-dashboard/boi-dashboard.component';
import { RenewalComponent } from './renewal/renewal.component';
import { DisablecopyPasteDirective } from './directive/disablecopy-paste.directive';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddBankMasterUserComponent } from './add-bank-master-user/add-bank-master-user.component';
import { EditBankMasterUserComponent } from './edit-bank-master-user/edit-bank-master-user.component';
import { ChnagePasswordComponent } from './chnage-password/chnage-password.component';
import { CustomFilterPipe } from './pipe/customFilterPipe';
import { filterFilesPipe } from './pipe/filterFilesPipe';
import { ApplicationLogsComponent } from './application-logs/application-logs.component';
import { FAQComponent } from './faq/faq.component';
import { RenewaldashComponent } from './renewaldash/renewaldash.component';
import { PrkitComponent } from './prkit/prkit.component';
import { FSLComponent } from './fsl/fsl.component';
import { GLLComponent } from './gll/gll.component';
import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, Injector } from '@angular/core';
import { FGLComponent } from './fgl/fgl.component';
import { FSRrenewalComponent } from './fsrrenewal/fsrrenewal.component';
import { FusrenewalComponent } from './fusrenewal/fusrenewal.component';
import { FrgrenewalComponent } from './frgrenewal/frgrenewal.component';
import { FbgrenewalComponent } from './fbgrenewal/fbgrenewal.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminformComponent,
    FGFormComponent,
    HeaderComponent,
    MyFilterPipe,
    SalesFilterPipe,
    FilterBranchPipe,
    DataListComponent,
    MyQuoteComponent,
    DownloadPolicyComponent,
    ReportComponent,
    FireFormComponent,
    OnlynumberDirective,
    AboutComponent,
    OnlyAlphabetDirective,
    SfspComponent,
    TwoDigitDecimaNumberDirective,
    BOIUploadComponent,
    BOIDashboardComponent,
    RenewalComponent,
    DisablecopyPasteDirective,
    AdminPanelComponent,
    AddBankMasterUserComponent,
    EditBankMasterUserComponent,
    ChnagePasswordComponent,
    CustomFilterPipe,
    filterFilesPipe,
    ApplicationLogsComponent,
    FAQComponent,
    RenewaldashComponent,
    PrkitComponent,
    FSLComponent,
    GLLComponent,
    BulkUploadComponent,
    FGLComponent,
    BulkUploadComponent,
    FSRrenewalComponent,
    FusrenewalComponent,
    FrgrenewalComponent,
    FbgrenewalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRippleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatTooltipModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' },
  { provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }