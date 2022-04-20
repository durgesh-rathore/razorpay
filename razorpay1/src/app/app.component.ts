import { Component } from '@angular/core';
// import { resourceLimits } from 'worker_threads';
import { OrderService } from './order.service';
declare let Razorpay:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'razorpay1';
  amount:any="";
  constructor(private serve:OrderService){}
  RazorPayment(){
    this.serve.createOrder(this.amount).subscribe((result:any)=>{
      console.log(result);
      console.log(result.id);
      var options = {
        "key": "rzp_test_25KnYfoIcEzVyf", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": result.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "http://localhost:3000/order-status",
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();

    })
 

  
   
}
}
