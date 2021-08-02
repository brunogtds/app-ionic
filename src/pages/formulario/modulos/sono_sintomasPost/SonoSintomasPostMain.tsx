import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';

import ISIPost from './ISIPost';
import MCTQ1Post from "./mctQ1Post";
import MCTQ2Post from "./mctq2Post";
import Gad7Post from './Gad7Post';
import PHQPost from './PHQPost';
import Who5Post from './Who5Post'
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
function App() {

   return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>SONO E SINTOMAS</b></IonTitle>
                  <div id="header-items">
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