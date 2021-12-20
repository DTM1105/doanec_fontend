// const express = require('express');
// const paypal = require('paypal-rest-sdk');
// const ejs = require('ejs');       
// const app= express();
// app.set('view engine','ejs');
//         paypal.configure({
//              'mode': 'sandbox', //sandbox or live
//              'client_id': 'AdJaeOzBCe-O0CkLYaGFnYGHvZZe1GELt62l4BXbR9olW_z2NEl75B5fWOHnlZWJPSelN-zw_7RunCb5',
//              'client_secret': 'ED22dSyjHWNJl1cEN6z0dG5EnQuHrIg9DVBZWAHMOelkrXnyzqv3mfF99wC_8QvpWawlJ6UH-J1Q4kJQ'
//            });
           
//            let tktk = JSON.parse(localStorage.getItem('tktietkiem-info'));;
//            const sotiengoc=tktk.sotiengoc;
//            app.post('/pay',(req,res)=>{
//             const create_payment_json={
//               "intent":"sale",
//               "payer":{
//                 "payment_method":"paypal"
//               },
//               "redirect_urls":{
//                 "return_url":"http://locallhost:3000/successs",
//                 "cancel_url":"htt://locallhost:3000/cancel"
//               },
//               "transactions":[
//                 {
//                   "item_list":{
//                     "item":[{
//                       "name":"Rut tien",
//                       "sku":"001",
//                       "price":{sotiengoc},
//                       "currency":"USD",
//                       "quantity":1
//                     }]
//                   },
//                   "amount":{
//                     "currency":"USD",
//                     "total":{sotiengoc}
//                   },
//                   "description":"Rut tien"
//                  }

//               ]
//             };
//         //     paypal.payment.create(create_payment_json, function (error, payment) {
//         //      if (error) {
//         //          throw error;
//         //      } else {
//         //          console.log("Create Payment Response");
//         //          console.log(payment);
//         //          console.warn('test');
//         //      }
//         //  });
//             paypal.payment.create(create_payment_json,function(err,payment){
//               if(err){
//                 throw err;
//               }
//               else{
//                 for(let i=0;i<payment.links.length;i++){
//                   if(payment.links[i].rel==='approval_url'){
//                     res.redirect(payment.links[i].href);
//                   }
//                 }
//               }
//             });
//           });

// app.listen(3000,()=>console.log('Server Started'));