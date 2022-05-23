import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../Forms.css';

import Habitos1 from '../habitos/Habitos1';
import Habitos2 from '../habitos/Habitos2';
import Habitos3 from '../habitos/Habitos3';
import Habitos4 from '../habitos/Habitos4';

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
          <img src={logo_regente} className={"logo"} alt={"Logo regente"}/>
         </div>
  </div> 
        
        </IonToolbar>
      </IonHeader>


        <IonContent fullscreen>
           
                <Steps>
                 <Step component={Habitos1} /> 
                    <Step component={Habitos2} /> 
                  <Step component={Habitos3} />  
                    <Step component={Habitos4} />  
                  
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;