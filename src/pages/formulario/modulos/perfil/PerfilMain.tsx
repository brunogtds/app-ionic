import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';

import Perfil1 from './Perfil1';
import Perfil2 from './Perfil2';
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
function App() {

   return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>SOBRE VOCÊ</b></IonTitle>
                  <div id="header-items">
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