import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { UtilsProvider } from '../../providers/utils/utils';
import { CONFIG } from '../../config/config_global';

/**
 * Generated class for the Tab2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})

export class RankingPage {
  
  borras: any;  

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private http: HttpClient,
       public loadingController: LoadingController,
       private utilsProvider: UtilsProvider) {

       
        let loader = this.loadingController.create({
          content: "Carregando"
        }); 
        
        loader.present(); 
        this.http.get(CONFIG.url_twitch_api,  
          {
            headers: { 'Content-Type': 'application/json', 'Client-Id': CONFIG.id_client_twitch }
          })
          .toPromise().then(data => {            
            loader.dismiss();     
          }).catch(error => {
            console.log(error.status);
          });      
 }
 
 openWebpage(url : string) {  
  this.utilsProvider.openWebpage(url);
 }

 ionViewDidLoad() {    
  this.getAllBorras();
}

getAllBorras() {  
  
  let loader = this.loadingController.create({
    content: "Carregando"
  });  
  loader.present();   
  
  this.http.get(CONFIG.url_api+'getAllBorras', 
  {
    headers: { 'Content-Type': 'application/json' }
  })
  .toPromise().then(data => {
    this.borras = data;
    this.borras.map(borra => {
      console.log(borra.url_imagem); 
      if(borra.url_imagem=="mentiroso"||
        borra.url_imagem=="tonto"||       
        borra.url_imagem=="borralhao"||
        borra.url_imagem=="joao"||
        borra.url_imagem=="cana"||
        borra.url_imagem=="mazzaropi"||
        borra.url_imagem=="woody"||
        borra.url_imagem=="mela"){       
          borra.url_imagem = 'assets/imgs/borras/borrada.png';
       }else{
        borra.url_imagem = "assets/imgs/borras/"+borra.url_imagem+".png";
       }
    })    
    
    //console.log(this.borras);  
    loader.dismiss();
  }).catch(error => {
    console.log(error.status);
  });
}


doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  this.getAllBorras();
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 1000);
}


 
}
