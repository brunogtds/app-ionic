import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../Forms.css';

import HabitosPost1 from "./habitosPost1";
import HabitosPost2 from "./habitosPost2";
import HabitosPost3 from "./habitosPost3";
import HabitosPost4 from "./habitosPost4";
  
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
          <img src={logo_regente} className={"logo"}/>
          <IonButtons slot="end"> <IonMenuButton id="main"></IonMenuButton> </IonButtons>
        </div>   
        </IonToolbar>
      </IonHeader>
  
        <IonContent fullscreen>
                
                <Steps>
                    <Step component={HabitosPost1} /> 
                    <Step component={HabitosPost2} /> 
                    <Step component={HabitosPost3} /> 
                    <Step component={HabitosPost4} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;