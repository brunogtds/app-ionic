import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './formulario/Forms.css';


import CadastroNovo from './CadastroNovo';
import Perfil_1Novo from './Perfil_1Novo';
import Perfil_2Novo from './Perfil_2Novo';
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
function App() {

   return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>Cadastro</b></IonTitle>
                  <div id="header-items">
                  </div>
            </IonToolbar>
        </IonHeader>


        <IonContent fullscreen>
           
                <Steps>
                   
                    <Step component={CadastroNovo} /> 
                    <Step component={Perfil_1Novo} />
                    <Step component={Perfil_2Novo}/> 
    
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;