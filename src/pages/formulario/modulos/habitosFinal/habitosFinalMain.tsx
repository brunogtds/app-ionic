import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../Forms.css';

import HabitosFinal1 from "./habitosFinal1";
import HabitosFinal2 from "./habitosFinal2";
import HabitosFinal3 from "./habitosFinal3";
import HabitosFinal4 from "./habitosFinal4";
  
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
                   <Step component={HabitosFinal1} /> 
                    <Step component={HabitosFinal2} /> 
                    <Step component={HabitosFinal3} /> 
                    <Step component={HabitosFinal4} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;