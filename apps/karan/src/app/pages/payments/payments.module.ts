import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

@NgModule({
  declarations: [PaymentsComponent, PaymentDetailsComponent],
  imports: [CommonModule],
})
export class PaymentsModule {}
