import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';
import SaudePost1 from "../saudePost/SaudePost1"
import SaudePost2 from "../saudePost/SaudePost2";

  
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
                    <Step component={SaudePost1} />
                    <Step component={SaudePost2} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;