import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../Forms.css';
import SaudeFinal1 from "./SaudeFinal1";
import SaudeFinal2 from "./SaudeFinal2";

import logo_regente from '../../../../img/logo_regente_branco.svg';
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/

/*progress bar*/


//Progress bar not working
//import 'react-circular-progressbar/dist/styles.css';

  
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
                    <Step component={SaudeFinal1} />
                    <Step component={SaudeFinal2} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;