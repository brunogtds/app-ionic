import React from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonIcon, IonCheckbox } from '@ionic/react';

import './Login.css';

import { IonButton} from '@ionic/react';

import { IonLoading} from '@ionic/react';
import thinking from '../../src/img/thinking.png';
import regenteLogo from '../../src/img/logo_regente.png';
import {useState} from 'react';
import { toast } from '../toast';
import {useHistory} from 'react-router';

import {cadastroUser} from '../firebaseConfig/firebaseConfig';

import {mailOutline, lockClosedOutline, personOutline, eyeOutline, eyeOffOutline} from  'ionicons/icons';

const Cadastro: React.FC = () => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [csenha, setCSenha] = useState();

    const [showSenha, setShowSenha]= useState(false);
    const [showCSenha, setShowCSenha]= useState(false);

    const [loader, setLoader]= useState<boolean>(false)
    const history= useHistory();

    const passwordVisibility = () => {
      setShowSenha(showSenha ? false: true)
    }

    const cpasswordVisibility = () => {
      setShowCSenha(showCSenha ? false: true)
    }
  
   async function Cadastro(){
  
      //setLoader(true)
      if (senha !== csenha){
        return toast ('As senhas não são iguais')
       //setLoader(false) 
      } 

      if (email === '' || senha === '' ) {
        return toast ('Email e senha são requeridos')
        //setLoader(false)
      }

      const res= await cadastroUser(email, senha)

      if (res){
        toast('Cadastro feito com sucesso')
        history.replace('/tab1');
        //setLoader(false)
      } else {
        toast('Erro no cadastro! Insira uma senha com pelo menos 6 caracteres')
      }


  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle>Cadastro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Por favor aguarde..." duration={0} isOpen={loader}/>
      <IonContent fullscreen className="ion-text-center">

      <div id="outer">
      <div id="inner">

      <div>
        <img src={regenteLogo} id="logo"/>
      </div>

      <div className='label'>
        <IonLabel>Email</IonLabel>
      </div>
      <IonInput type="email" placeholder="Digite seu email" id="email" onIonChange={(e:any) => setEmail(e.target.value)}>
        <IonIcon icon={mailOutline}></IonIcon>
      </IonInput>

      <div className='label'>
        <IonLabel>Senha</IonLabel>
      </div>
      <IonInput type={showSenha ? "text" : "password"} placeholder="Digite sua senha" id="senha" onIonChange={(e:any) => setSenha(e.target.value)}> 
        <IonIcon onClick={passwordVisibility} hidden={showSenha ? true: false} icon={eyeOutline} float-right></IonIcon>
        <IonIcon onClick={passwordVisibility} hidden={showSenha ? false: true} icon={eyeOffOutline} float-right></IonIcon>
      </IonInput> 

      <div className='label'>
        <IonLabel>Confirme sua senha</IonLabel>
      </div>
      <IonInput type={showCSenha ? "text" : "password"} placeholder="Digite sua senha" id="csenha" onIonChange={(e:any) => setSenha(e.target.value)}> 
        <IonIcon onClick={cpasswordVisibility} hidden={showCSenha ? true: false} icon={eyeOutline} float-right></IonIcon>
        <IonIcon onClick={cpasswordVisibility} hidden={showCSenha ? false: true} icon={eyeOffOutline} float-right></IonIcon>
      </IonInput> 

      <IonButton size="large" onClick={Cadastro} className={"ion-button-cadastro"}>Cadastrar</IonButton>

      <p>Já possui uma conta? Faça <a href="/Login">login</a></p>
      <p><a href="/recuperacao_senha">Resete sua senha.</a></p>
        
      
      </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Cadastro;