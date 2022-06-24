import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './formulario/Forms.css';


import CadastroNovo from './CadastroNovo';
import Perfil_Cadastro1 from './Perfil_Cadastro1';
import Perfil_Cadastro2 from './Perfil_Cadastro2';
import Perfil_CadastroPergunta from './Perfil_CadastroPergunta';


  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
function App() {

   return (

    <IonPage>
        
        <IonContent fullscreen>
           
                <Steps>
                   
                   <Step component={CadastroNovo} /> 
                   <Step component={Perfil_CadastroPergunta}/>
                    <Step component={Perfil_Cadastro1} /> 
                    <Step component={Perfil_Cadastro2}/> 
    
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;