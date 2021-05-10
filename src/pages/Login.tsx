import React, {useState } from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';

import './Login.css';

import {IonButton} from '@ionic/react';

import {IonLoading} from '@ionic/react';


import thinking from '../../src/img/thinking.png';
import regenteLogo from '../../src/img/logo_regente.png';

import {loginUser, recoverPassword} from '../firebaseConfig/firebaseConfig';
import { toast } from '../toast';
import {useHistory} from 'react-router';

import {eyeOutline, eyeOffOutline, personOutline, logoGoogle, logoFacebook} from  'ionicons/icons';

const Login: React.FC = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [showSenha, setShowSenha]= useState(false);
  const [errorLogin, setErrorLogin]= useState(false);

  const [loader, setLoader]= useState<boolean>(false)

  const history= useHistory();

  const passwordVisibility = () => {
    setShowSenha(showSenha ? false: true)
  }
   
  async function Login(){

      setLoader(true)
      const res= await loginUser(email, senha)

      if (!res){
        setErrorLogin(errorLogin ? false: true)
        setLoader(false)
      } 
      else {
        toast('Login feito com sucesso', 4000)
        history.replace('/tab1');
        setLoader(false)
        
      } 
 
    }

    async function LoginGoogle(){
      toast("Nao implementado ainda")
    }

    async function LoginFacebook(){
      toast("Nao implementado ainda")
    }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonLoading message="Por favor aguarde..." duration={0} isOpen={loader}/>

      <IonContent fullscreen className="ion-text-center">

      <div id="outer">
      <div id="inner">

      <div>
        <img src={regenteLogo} id="logo"/>
      </div>

      <div>
        <IonButton size="large" onClick={LoginGoogle} className="botao_social">Entrar com Google
          <IonIcon icon={logoGoogle} item-right> </IonIcon>
        </IonButton>
      </div>

      <div>
        <IonButton size="large" onClick={LoginFacebook} className="botao_social">Entrar com Facebook
          <IonIcon icon={logoFacebook} item-right> </IonIcon>
        </IonButton>
      </div>

      <div className="errorLogin" hidden={errorLogin? false: true}>
        <p><b>Senha incorreta!</b> Tente novamente ou <a href="/recuperacao_senha"> resete sua senha. </a></p>
      </div>

      <div className='label'>
        <IonLabel>Email</IonLabel>
      </div>
      <IonInput type="email" placeholder="Digite seu email" id="email" onIonChange={(e:any) => setEmail(e.target.value)}>
        <IonIcon icon={personOutline}></IonIcon>
      </IonInput> 
      
      <div className='label'>      
        <IonLabel>Senha</IonLabel> 
      </div>
      <IonInput type={showSenha ? "text" : "password"} placeholder="Digite sua senha" id="senha" onIonChange={(e:any) => setSenha(e.target.value)}> 
        <IonIcon onClick={passwordVisibility} hidden={showSenha ? true: false} icon={eyeOutline} float-right></IonIcon>
        <IonIcon onClick={passwordVisibility} hidden={showSenha ? false: true} icon={eyeOffOutline} float-right></IonIcon>
      </IonInput> 
        

      <div>
      <IonButton size="large" onClick={Login}>Entrar</IonButton>
      </div>

      <p>Ainda não possui uma conta? <a href="/cadastro">Cadastre-se!</a></p>
  
      </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
