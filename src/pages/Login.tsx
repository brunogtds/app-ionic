import React, { useState } from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';

import { IonGrid, IonRow, IonCol, IonButton, IonItem } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLoading} from '@ionic/react';

import Tab1 from './Home';

import distanciamentoExp from '../../src/img/distanciamentoExp.png';

import thinking from '../../src/img/thinking.png';

import {loginUser} from '../firebaseConfig/firebaseConfig';
import { toast } from '../toast';



import  { Redirect } from 'react-router-dom' 


const Login: React.FC = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const [error, setError]= useState();

  const [loader, setLoader]= useState<boolean>(false)


  async function Login(){

      setLoader(true)
      const res= await loginUser(email, senha)
      

      if (!res){
        toast('Erro no Login', 4000)
        setLoader(false)
      } 
      else {
        toast('Login feito com sucesso', 4000)
        setLoader(false)
        return <Redirect to="/tab1" />
      } 
      
      
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
        <img src={thinking} width="100px" height="100px" id="logo"/>
      </div>


      <div>
     
      <IonLabel>Email</IonLabel>
      <IonInput type="email" placeholder="Digite seu email" id="email" onIonChange={(e:any) => setEmail(e.target.value)}/>
      
      </div>
      
      <div>
      
      <IonLabel>Senha</IonLabel>
      <IonInput type="password" placeholder="Digite sua senha" id="senha" onIonChange={(e:any) => setSenha(e.target.value)}/>
      
      </div>

      <div>
      
      <IonButton onClick={Login} size="large">Login</IonButton>
      <IonButton size="large" href="/Cadastro">Cadastro</IonButton>
      
      </div>
      </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
