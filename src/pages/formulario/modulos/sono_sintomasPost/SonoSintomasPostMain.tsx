import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../Forms.css';

import ISIPost from './ISIPost';
import MCTQ1Post from "./mctQ1Post";
import MCTQ2Post from "./mctq2Post";
import Gad7Post from './Gad7Post';
import PHQPost from './PHQPost';
import Who5Post from './Who5Post'
  
import logo_regente from '../../../../img/logo_regente_branco.svg';
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
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
          <img src={logo_regente} className={"logo"}/>
         </div>
  </div>  
        </IonToolbar>
      </IonHeader>


        <IonContent fullscreen>
           
                <Steps>
                    
                   <Step component={MCTQ1Post} /> 
                    <Step component={MCTQ2Post} />  
                  <Step component={Gad7Post}/> 
                    <Step component={Who5Post}/> 
                    <Step component={PHQPost}/> 
                    <Step component={ISIPost} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;