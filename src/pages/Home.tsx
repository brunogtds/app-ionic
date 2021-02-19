import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


import './Home.css';


import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemDivider, IonButton, IonLoading} from '@ionic/react';


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


const Tab1: React.FC = () => {

  const history= useHistory();
  const [loader, setLoader]= useState<boolean>(false);

  function redirectLogin(){
    
      history.push('/login');
 
  }
  
  async function Logout(){
    setLoader(true)
    const res=  await logoutUser();

    if (res === true){
      toast('Logout efetuado!')
      redirectLogin();    
      setLoader(false); 
      
    }
  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonTitle>Início</IonTitle>
        </IonToolbar>

        <IonButton onClick={Logout}>Sair</IonButton>
      </IonHeader>
      <IonLoading message="Por favor aguarde..." duration={0} isOpen={loader}/>
      <IonContent fullscreen className="ion-text-center ion-padding">

        <IonGrid>

        
       
       {/* <ExploreContainer name="Tab 1 page" /> */}
       <IonCard>
         
       <IonCardTitle>O impacto do distanciamento social nos ritmos biológicos e na saúde mental</IonCardTitle> 

        <IonItem>
    
       
        <div className="ion-text-justify">
        

        <p>Caro participante, </p>
 
        <p>Agradecemos a sua disposição em nos ajudar a entender as consequências do <b>distanciamento social</b>. 
          Com esse estudo, pretendemos encontrar maneiras de estar melhor preparados e munidos de mais informação para diminuir as consequências 
           do distanciamento social na saúde mental. Além disso, poderemos avaliar quais são as recomendações mais 
           importantes para quem está passando por tal situação. </p>
          
           <p>Antes de começar a responder, na próxima página, você poderá ler mais sobre nosso estudo. 
           Caso desista de participar, basta fechar o navegador ou aplicativo a qualquer momento. </p>

           <p>Muito obrigado!</p>
        </div>
        
        </IonItem>
        <IonItemDivider>
        <IonItem>
          <div>
          <p>Equipe do estudo <b>O impacto do distanciamento social nos ritmos biológicos e na saúde mental</b></p>
          <p>Laboratório de Cronobiologia e Sono - HCPA/ UFRGS</p>
          <p>Laboratório de Neurofisiologia e Neuroquímica da Excitabilidade Neuronal e Plasticidade Sináptica - UFRGS</p>
          <p>Laboratório de Neurobiologia da Pineal - UNIFESP</p>
          </div>
        </IonItem>
        </IonItemDivider>

        <IonItem>
        <div className={"ion-text-justify red-text"}>
          <p><b><span className={"red-text"}>Antes de começarmos, você sabe o que é distanciamento social? Confira a explicação <a href={"/ExplanationSlides"}>aqui</a> e depois clique na aba "Formulário" para iniciar a pesquisa.</span></b></p>
        </div>
        </IonItem>

        
      
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
