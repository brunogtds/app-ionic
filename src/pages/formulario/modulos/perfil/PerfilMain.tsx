import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../Forms.css';

import logo_regente from '../../../../img/logo_regente_branco.svg';

import Perfil1 from './Perfil1';
import Perfil2 from './Perfil2';
  
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
                    <Step component={Perfil1} /> 
                    <Step component={Perfil2} /> 
    
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;