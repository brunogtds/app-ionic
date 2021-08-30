import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../Forms.css';

import Contato1 from './Contato1';
import Contato2 from './Contato2';
import logo_regente from '../../../../img/logo_regente_branco.svg';
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
function App() {

   return (

    <IonPage>

<IonHeader>
        <IonToolbar color="orange">
        <div id="header-items">
          <div className={"navigation"}>
          <IonButtons slot="start"> <IonMenuButton id="main"></IonMenuButton> </IonButtons> 
          </div>
          <div className={"img-logo"}>
          <img src={logo_regente} className={"logo"}/>
         </div>
  </div> 
        
        </IonToolbar>
      </IonHeader>

        <IonContent fullscreen>
           
                <Steps>
                    <Step component={Contato1}/> 
                    <Step component={Contato2}/>
                  
    
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;