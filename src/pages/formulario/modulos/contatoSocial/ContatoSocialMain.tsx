import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';

import Contato1 from './Contato1';
import Contato2 from './Contato2';

  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
function App() {

   return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>CONTATO SOCIAL</b></IonTitle>
                  <div id="header-items">
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