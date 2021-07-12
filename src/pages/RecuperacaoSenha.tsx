import React from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonIcon, IonRouterLink } from '@ionic/react';

import './Login.css';

import logo_regente from '../img/logo_regente.png';

import { IonButton} from '@ionic/react';

import { IonLoading} from '@ionic/react';

import regenteLogo from '../../src/img/logo_regente.png';
import thinking from '../../src/img/thinking.png';
import {useState} from 'react';
import { toast } from '../toast';
import {useHistory} from 'react-router';

import {recoverPassword} from '../firebaseConfig/firebaseConfig';

import {mailOutline, personOutline} from  'ionicons/icons';

const RecuperacaoSenha: React.FC = () => {

    const [email, setEmail] = useState();
    const [confirmation_email, setConfirmationEmail] = useState();

    const [loader, setLoader]= useState<boolean>(false)
    const history= useHistory();


    async function recover(){

      setLoader(true)
      const res= await recoverPassword(email, confirmation_email)

      if (!res){
        setLoader(false)
      } 
      else {
        setLoader(false)
        
      } 
 
    }
  

  return (
    <IonPage>
      

      <IonLoading message="Por favor aguarde..." duration={0} isOpen={loader}/>
      <IonContent fullscreen className="ion-text-center texto-app">

      <div id="outer">
      <div id="inner">

      <div>
        <img src={logo_regente} className={"logo-login"}/>
      </div>

      <div>
        <p className={"texto-login"}> Recuperar senha </p>
      </div>

      <div >
        <p>Preencha o campo abaixo com seu endereço de e-mail que enviaremos instruções para a recuperação da senha</p>
      </div>

      <div>
        <IonInput type="email" placeholder="E-mail" id="email" onIonChange={(e:any) => setEmail(e.target.value)}> <IonIcon icon={personOutline}></IonIcon></IonInput>
      </div>
      <div className='label'>
        
      </div>
      <div>
        <IonInput type="email" placeholder="Confirme seu email" id="confirmation_email" onIonChange={(e:any) => setConfirmationEmail(e.target.value)}><IonIcon icon={personOutline}></IonIcon></IonInput>
      </div>

      <div>
      <IonButton color="orange" shape="round" size="default" fill="solid" className={"ion-button-recuperar"} onClick={recover} >Enviar</IonButton>
      </div>
      

      <p><a href="/Login" id="returnLogin">Voltar ao login</a></p>

      </div>
      </div>
      
      </IonContent>
    </IonPage>
  );
};

export default RecuperacaoSenha;