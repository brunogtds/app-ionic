import React from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonIcon, IonRouterLink } from '@ionic/react';

import './Login.css';

import { IonButton} from '@ionic/react';

import { IonLoading} from '@ionic/react';

import regenteLogo from '../../src/img/logo_regente.png';
import thinking from '../../src/img/thinking.png';
import {useState} from 'react';
import { toast } from '../toast';
import {useHistory} from 'react-router';

import {recoverPassword} from '../firebaseConfig/firebaseConfig';

import {mailOutline} from  'ionicons/icons';

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
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle>Recuperação de senha</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Por favor aguarde..." duration={0} isOpen={loader}/>
      <IonContent fullscreen className="ion-text-center">

      <div id="outer">
      <div id="inner">

      <div>
        <img src={regenteLogo} id="logo"/>
      </div>


      <div className = 'label'>
        <IonLabel>Para iniciar o processo de redefinição de senha, digite seu e-mail cadastrado.</IonLabel>
      </div>

      <div>
        <IonInput type="email" placeholder="Digite seu email" id="email" onIonChange={(e:any) => setEmail(e.target.value)}/>
        <IonInput type="email" placeholder="Confirme seu email" id="confirmation_email" onIonChange={(e:any) => setConfirmationEmail(e.target.value)}/>
      </div>

      <div>
      <IonButton onClick={recover} size="large">Enviar email</IonButton>
      </div>
      

      <p><a href="/Login" id="returnLogin">Voltar ao login</a></p>

      </div>
      </div>
      
      </IonContent>
    </IonPage>
  );
};

export default RecuperacaoSenha;