import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../Forms.css';

import mctQ1 from './mctQ1';
import mctQ2 from './mctQ2';
import ISI from './ISI';
import Gad7 from './Gad7';
import Who5 from './Who5';
import PHQ from './PHQ';

import logo_regente from '../../../../img/logo_regente_branco.svg';

  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
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
                   <Step component={mctQ1} />
                    <Step component={mctQ2}/> 
                    <Step component={Gad7}/> 
                  <Step component={Who5}/> 
                    <Step component={PHQ}/> 
                    <Step component={ISI} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;

