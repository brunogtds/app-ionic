import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';
import ContatoFinal1 from "./contatoFinal1";
import ContatoFinal2 from './contatoFinal2';

  
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
                <IonTitle><b>CONTATO SOCIAL</b></IonTitle>
                  <div id="header-items">
                    
                    
                  </div>
            </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
                
                <Steps>
                    <Step component={ContatoFinal1} />
                    <Step component={ContatoFinal2} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;