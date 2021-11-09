import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../Forms.css';
import ContatoPost1 from "./contatoPost1";
import ContatoPost2 from './contatoPost2';

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
                    <Step component={ContatoPost1} />
                    <Step component={ContatoPost2} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;