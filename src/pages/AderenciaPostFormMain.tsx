import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import '../../src/pages/formulario/Forms.css';

import Aderencia_2Post from '../../src/pages/Aderencia_2Post';
  
import logo_regente from '../img/logo_regente_branco.svg';
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
                <img src={logo_regente} className={"logo"}/>
                </div>
                </div> 
            
                </IonToolbar>
            </IonHeader>
        
        <IonContent fullscreen>
           
                <Steps>
                   <Step component={Aderencia_2Post} /> 
                   
                   
    
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;