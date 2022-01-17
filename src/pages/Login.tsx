import React, {useState } from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';

import './Login.css';

import {IonButton, IonText} from '@ionic/react';

import logo_regente from '../img/logo_regente.png';

import {loginUser, recoverPassword} from '../firebaseConfig/firebaseConfig';
import { toast } from '../toast';
import {useHistory} from 'react-router';

import {eyeOutline, eyeOffOutline, personOutline, logoGoogle, logoFacebook} from  'ionicons/icons';

const Login: React.FC = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [showSenha, setShowSenha]= useState(false);
  const [errorLogin, setErrorLogin]= useState(false);

  const history= useHistory();

  const passwordVisibility = () => {
    setShowSenha(showSenha ? false: true)
  }
   
  async function Login(){

      const res= await loginUser(email, senha)

      if (!res){
        setErrorLogin(true)
      } 
      else {
        toast('Login feito com sucesso')
        history.replace('/tab1');
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
      
      <IonContent fullscreen className="ion-text-center texto-app">

      <div id="outer">
      <div id="inner">

      <div>
        <img src={logo_regente} className={"logo-login"}/>
      </div>
      

      <div>
        <p className={"texto-login"}> Login </p>
      </div>

      {/*
      <div>
        <IonButton size="large" onClick={LoginGoogle} className={"botao-social"}>Entrar com Google
          <IonIcon icon={logoGoogle} item-right> </IonIcon>
        </IonButton>
      </div>

      <div>
        <IonButton size="large" onClick={LoginFacebook} className={"botao-social"}>Entrar com Facebook
          <IonIcon icon={logoFacebook} item-right> </IonIcon>
        </IonButton>
      </div> */}

     

      <div className='label'>
        
      </div>
      <IonInput type="email" placeholder="E-mail" id="email" onIonChange={(e:any) => setEmail(e.target.value)}>
        <IonIcon icon={personOutline}></IonIcon>
      </IonInput> 
      
      <div className='label'>      
        
      </div>
      <IonInput type={showSenha ? "text" : "password"} placeholder="Senha" id="senha" onIonChange={(e:any) => setSenha(e.target.value)}> 
        <IonIcon onClick={passwordVisibility} hidden={showSenha ? true: false} icon={eyeOutline} float-right></IonIcon>
        <IonIcon onClick={passwordVisibility} hidden={showSenha ? false: true} icon={eyeOffOutline} float-right></IonIcon>
      </IonInput> 
        
      <div className="errorLogin" hidden={!errorLogin}>
        <p><b>Senha ou email incorreto!</b> Tente novamente ou <a href="/recuperacao_senha"> resete sua senha. </a></p>
      </div>

      <div>
      <IonButton size="default" onClick={Login} shape="round" color="orange" fill="solid" className={"ion-button-login"}>Acessar</IonButton>
      </div>

     <p><a href="/recuperacao_senha">Esqueci minha senha</a></p>

     <p>É a sua primeira vez no aplicativo? <a href="/cadastro_main">Clique aqui</a></p>

     
      </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
