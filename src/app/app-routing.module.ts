import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanctionLoanComponent } from './sanction-loan/sanction-loan.component';
const routes: Routes = [
  {path: 'sanction-loan', component: SanctionLoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
