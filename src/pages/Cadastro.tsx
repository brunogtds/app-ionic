import React from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';

import { IonGrid, IonRow, IonCol, IonButton, IonItem } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonToast} from '@ionic/react';

import Tab1 from './Home';

import distanciamentoExp from '../../src/img/distanciamentoExp.png';

import thinking from '../../src/img/thinking.png';
import {useState, ChangeEvent} from 'react';
import { toast } from '../toast';

import {cadastroUser} from '../firebaseConfig/firebaseConfig';

const Cadastro: React.FC = () => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [csenha, setCSenha] = useState();
  
   async function Cadastro(){
  
      /*console.log("email:" + email, "senha:" + senha, "csenha:" + csenha);*/

      if (senha !== csenha){
        return toast ('As senhas não são iguais')
      }

      //.trim()
      if (email === '' || senha === '' ) {
        return toast ('Email e senha são requeridos')
      }

      const res= await cadastroUser(email, senha)

      if (res){
        toast('Cadastro feito com sucesso')
      }


  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>
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
      
      <IonLabel>Confirme sua senha</IonLabel>
      <IonInput type="password" placeholder="Confirme a senha" id="csenha" onIonChange={(e:any) => setCSenha(e.target.value)}/>
      
      </div>

      <div>
      
      <IonButton href="/Login" size="large">Login</IonButton>
      <IonButton size="large" onClick={Cadastro}>Cadastro</IonButton>
      
      </div>
      </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Cadastro;