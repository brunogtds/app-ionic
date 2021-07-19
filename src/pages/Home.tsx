import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

import logo_regente from '../img/logo_regente.png';
import './Home.css';


import { IonGrid, IonRow, IonCol, IonSlides, IonSlide, IonMenu, IonMenuButton, IonButtons } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemDivider, IonButton, IonLoading, IonLabel} from '@ionic/react';


import distanciamentoExp from '../../src/img/distanciamentoExp.png';

import social_distancing from '../../src/img/social_distancing.svg';
import distancing from '../../src/img/distancing.svg';
import isolation from '../../src/img/isolation.svg';
import quarantine from '../../src/img/quarantine.svg';

import ExplanationSlides from '../../src/pages/ExplanationSlides';

import {auth} from '../../src/firebaseConfig/firebaseConfig';
import  { Redirect, useHistory } from 'react-router-dom' 

import {logoutUser} from '../../src/firebaseConfig/firebaseConfig';
import { toast } from '../toast';

import {useUser} from 'reactfire';


import {AuthCheck} from 'reactfire';

import firebase from 'firebase';

const Tab1: React.FC = () => {

  const history= useHistory();
  const [loader, setLoader]= useState<boolean>(false);
  const {data: user}= useUser();

  function chamaSobre(){
    history.push('/sobre');
  }

  function chamaPerfil(){
    history.push('/perfil');
  }
  
  async function Logout(){
    setLoader(true)
    const res=  await logoutUser();

    if (res === true){
      toast('Logout efetuado!')
      history.replace('/login');
      setLoader(false); 
      
    }
  }

  function checkIfEmailVerified(){
    return user.emailVerified;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="orange">
        
        <div id="header-items">
          <img src={logo_regente} className={"logo"}/>
          <IonButtons slot="end"> <IonMenuButton id="main"></IonMenuButton> </IonButtons>
        </div>   
        
          {/*
          <div id="header-items">
          <IonButton fill="clear" onClick={chamaPerfil}>PERFIL</IonButton>
          <IonButton fill="clear" onClick={chamaSobre}>SOBRE</IonButton>
          <IonButton onClick={Logout} color="tertiary">SAIR</IonButton> 
          </div>    */}      
        </IonToolbar>
        
       
      </IonHeader>
      <IonLoading message="Por favor aguarde..." duration={0} isOpen={loader}/>
      <IonContent fullscreen className="ion-padding" color="background">

        <IonGrid>
       
       
       {/* <ExploreContainer name="Tab 1 page" /> */}
       <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Pesquisa</IonCardSubtitle>
       <IonCardTitle>O impacto do distanciamento social nos ritmos biológicos e na saúde mental</IonCardTitle> 
       </IonCardHeader>

      <IonCardContent>
      <h1>TESTANDO AQUI - EDU!</h1>
      <p hidden={user.emailVerified}> O EMAIL NÃO É VERIFICADO!</p>
      <p> De qualquer forma, esse texto aparece!</p>
      <div>
           <AuthCheck fallback={<IonTitle><b>BEM VINDO!</b></IonTitle>}><IonTitle><b>BEM VINDO, {user.email}!</b></IonTitle></AuthCheck>
         
          </div>  
      </IonCardContent>

      <IonCardContent>
    
       
        <div className="ion-text-wrap">
        
        <div>
        Caro participante, 
        </div>
        <div>
        Agradecemos a sua disposição em nos ajudar a entender as consequências do <b>distanciamento social</b>.
        Com esse estudo, pretendemos encontrar maneiras de estar melhor preparados e munidos de mais informação para diminuir as consequências 
           do distanciamento social na saúde mental. 
         Além disso, poderemos avaliar quais são as recomendações mais 
           importantes para quem está passando por tal situação. </div>
          <div>
          Antes de começar a responder, na próxima página, você poderá ler mais sobre nosso estudo. 
           Caso desista de participar, basta fechar o aplicativo a qualquer momento.
           </div>
           <div>
           Muito obrigado!
           </div>
        </div>
        </IonCardContent>
      
        
        <IonCardContent>
        <div className={"ion-text"}>
          <b><span className={"red-text"}>Antes de começarmos, você sabe o que é distanciamento social? Confira a explicação <a href={"/ExplanationSlides"}>aqui</a> e depois clique na aba "Formulário" para iniciar a pesquisa.</span></b>
        </div>
        </IonCardContent>

        
      
        </IonCard>

       {/*
        <div>
          <img src={distanciamentoExp}/>
       </div> */}


        
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
