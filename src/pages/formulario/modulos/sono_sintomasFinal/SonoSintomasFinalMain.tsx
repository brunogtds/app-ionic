import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../Forms.css';

import ISIFinal from './ISIFinal';
import MCTQ1Final from "./mctQ1Final";
import MCTQ2Final from "./mctq2Final";

import Gad7Final from './Gad7Final';
import PHQFinal from './PHQFinal';
import Who5Final from './Who5Final'
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
                    
                    <Step component={MCTQ1Final} />
                    <Step component={MCTQ2Final} />  
                    <Step component={Gad7Final}/>
                    <Step component={Who5Final}/>
                    <Step component={PHQFinal}/>
                    <Step component={ISIFinal} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;