import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';

import Saude1 from './Saude1';
import Saude2 from './Saude2';
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/

/*progress bar*/


import 'react-circular-progressbar/dist/styles.css';

  
function App() {



   return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>SAÚDE</b></IonTitle>
                  <div id="header-items">
                                  
                    
                  </div>
            </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
           
                <Steps>
                    <Step component={Saude1} />
                   
                    <Step component={Saude2} /> 
    
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;