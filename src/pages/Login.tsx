import React, {useState } from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';

import './Home.css';

import {IonButton} from '@ionic/react';

import {IonLoading} from '@ionic/react';


import thinking from '../../src/img/thinking.png';

import {loginUser, recoverPassword} from '../firebaseConfig/firebaseConfig';
import { toast } from '../toast';
import {useHistory} from 'react-router';

import {eye} from  'ionicons/icons';

const Login: React.FC = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [showSenha, setShowSenha]= useState(false);

  const [error, setError]= useState();

  const [loader, setLoader]= useState<boolean>(false)

  const history= useHistory();

  const passwordVisibility = () => {
    setShowSenha(showSenha ? false: true)
  }
   
  async function Login(){

      setLoader(true)
      const res= await loginUser(email, senha)

      if (!res){
        toast('Erro no Login', 4000)
        setLoader(false)
      } 
      else {
        toast('Login feito com sucesso', 4000)
        history.replace('/tab1');
        setLoader(false)
        
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
      <IonInput type={showSenha ? "text" : "password"} placeholder="Digite sua senha" id="senha" onIonChange={(e:any) => setSenha(e.target.value)}> <IonIcon onClick={passwordVisibility} icon={eye} slot="end"></IonIcon></IonInput> 
     
      
      
      
      </div>

      

      <div>
      
      <IonButton size="large" onClick={Login} >Login</IonButton>
      <IonButton size="large" href="/cadastro">Cadastro</IonButton>
      
      </div>
      <IonButton size="large" href="/recuperacao_senha">Esqueceu a senha? Clique aqui</IonButton>
      </div>
      
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
