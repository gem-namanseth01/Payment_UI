import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionRecordPageComponent } from './transaction-record-page/transaction-record-page.component';

const routes: Routes = [
  {path: '', component: TransactionRecordPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
