import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AdminformComponent } from "./adminform/adminform.component";
import { AuthGuard } from "./gaurds/auth.guard";
import { BOIDashboardComponent } from "./boi-dashboard/boi-dashboard.component";
import { BOIUploadComponent } from "./boi-upload/boi-upload.component";
import { DataListComponent } from "./data-list/data-list.component";
import { DownloadPolicyComponent } from "./download-policy/download-policy.component";
import { FGFormComponent } from "./fgform/fgform.component";
import { FireFormComponent } from "./fireform/fireform.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MyQuoteComponent } from "./my-quote/my-quote.component";
import { ReportComponent } from "./report/report.component";
import { SfspComponent } from "./sfsp/sfsp.component";
import { TokenResolverService } from "./tokenResolver.service";
import { RenewalComponent } from "./renewal/renewal.component";
import { AddBankMasterUserComponent } from "./add-bank-master-user/add-bank-master-user.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { EditBankMasterUserComponent } from "./edit-bank-master-user/edit-bank-master-user.component";
import { AdminGuard } from "./gaurds/admin.guard";
import { ChnagePasswordComponent } from "./chnage-password/chnage-password.component";
import { ApplicationLogsComponent } from "./application-logs/application-logs.component";
import { FAQComponent } from "./faq/faq.component";
import { RenewaldashComponent } from "./renewaldash/renewaldash.component";
import { PrkitComponent } from "./prkit/prkit.component";
import { FSLComponent } from "./fsl/fsl.component";
import { GLLComponent } from "./gll/gll.component";
import { BulkUploadComponent } from "./bulk-upload/bulk-upload.component";
import { FGLComponent } from "./fgl/fgl.component";
import { FrgrenewalComponent } from "./frgrenewal/frgrenewal.component";
import { FSRrenewalComponent } from "./fsrrenewal/fsrrenewal.component";
import { FusrenewalComponent } from "./fusrenewal/fusrenewal.component";
import { FbgrenewalComponent } from "./fbgrenewal/fbgrenewal.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },

  {
    path: "renewal",
    component: RenewalComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "renewal/:id/:status/:transData",
    component: RenewalComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "renewal/:id",
    component: RenewalComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },

    // fsr renewals Abinash 
  {
    path: "fsrrenewal",
    component: FSRrenewalComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "fsrrenewal/:id/:status/:transData",
    component: FSRrenewalComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "fsrrenewal/:id",
    component: FSRrenewalComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },

  {
    path: "fusrenewal",
    component: FusrenewalComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "fusrenewal/:id/:status/:transData",
    component: FusrenewalComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "fusrenewal/:id",
    component: FusrenewalComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  
  
  {
    path: "frgrenewal",
    component: FrgrenewalComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "frgrenewal/:id/:status/:transData",
    component: FrgrenewalComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "frgrenewal/:id",
    component: FrgrenewalComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },

  {
    path: "fbgrenewal",
    component: FbgrenewalComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "fbgrenewal/:id/:status/:transData",
    component: FbgrenewalComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "fbgrenewal/:id",
    component: FbgrenewalComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  


  ////end renewal abinash




  {
    path: "fgForm/:id/:status/:transData",
    component: FGFormComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "fgForm/:id",
    component: FGFormComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "fgForm",
    component: FGFormComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "fireForm",
    component: FireFormComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "fireForm/:id/:status/:transData",
    component: FireFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "fireForm/:id",
    component: FireFormComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },

  {
    path: "gll",
    component: GLLComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "gll/:id/:status/:transData",
    component: GLLComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "fireForm/:id",
    component: GLLComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "fgl",
    component: FGLComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "fgl/:id/:status/:transData",
    component: FGLComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "fgl/:id",
    component: FGLComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },

  {
    path: "sfsp",
    component: SfspComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "sfsp/:id/:status/:transData",
    component: SfspComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "sfsp/:id",
    component: SfspComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },

  {
    path: "fsl",
    component: FSLComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "fsl/:id/:status/:transData",
    component: FSLComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "fsl/:id",
    component: FSLComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },

  { path: "admin", component: AdminformComponent, canActivate: [AuthGuard] },
  { path: "boi", component: BOIUploadComponent, canActivate: [AuthGuard] },
  {
    path: "boiDash",
    component: BOIDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "quote",
    component: MyQuoteComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },

  {
    path: "prkit",
    component: PrkitComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },

  {
    path: "dash",
    component: RenewaldashComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },

  {
    path: "policyCopy/:id",
    component: DownloadPolicyComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "policyCopy",
    component: DownloadPolicyComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: 'banca-bulk-uploader',
    children: [
      { path: '', component: BulkUploadComponent,
      canActivate: [AuthGuard],
      resolve: { tokenGuest: TokenResolverService } },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ]
  },

  { path: "report", component: ReportComponent, canActivate: [AuthGuard] },
  { path: "WinnersEdge", component: DataListComponent },
  { path: "faq-support", component: FAQComponent },
  {
    path: "change-password",
    component: ChnagePasswordComponent,
    canActivate: [AuthGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "add-bank-branch",
    component: AddBankMasterUserComponent,
    canActivate: [AuthGuard, AdminGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "admin-panel",
    component: AdminPanelComponent,
    canActivate: [AuthGuard, AdminGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "edit/:userId/:solId/:bankName",
    component: EditBankMasterUserComponent,
    canActivate: [AuthGuard, AdminGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  {
    path: "application-logs",
    component: ApplicationLogsComponent,
    canActivate: [AuthGuard, AdminGuard],
    resolve: { tokenGuest: TokenResolverService },
  },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
