import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
// import core firebase client (required)
import * as firebase from 'firebase/app'
import 'firebase/analytics';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FabioRC';


  ngOnInit(){
     // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDx07-6dU9iuPwTz_o181jMWOkDzaOaEwY",
      authDomain: "porfolio-fabio.firebaseapp.com",
      databaseURL: "https://porfolio-fabio.firebaseio.com",
      projectId: "porfolio-fabio",
      storageBucket: "porfolio-fabio.appspot.com",
      messagingSenderId: "1054670305623",
      appId: "1:1054670305623:web:5d3e4ab72bd56ecf87a612",
      measurementId: "G-FNTEN66MTC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

}
