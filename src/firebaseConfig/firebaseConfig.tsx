import firebase from 'firebase';
import { toast } from '../toast';

import "firebase/auth";
import "firebase/firestore";

/*Credenciais do Firebase vão num arquivo .env.local e .gitignore */

export const config = {
apiKey: process.env.REACT_APP_API_KEY,
authDomain: process.env.REACT_APP_AUTH_DOMAIN,
databaseURL: process.env.REACT_APP_DATABASE_URL,
projectId:  process.env.REACT_APP_PROJECT_ID,
storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
appId: process.env.REACT_APP_ID
}

firebase.initializeApp(config)

export const auth= firebase.auth();
export const user= firebase.auth().currentUser;
export const firestore= firebase.firestore();

/*Funções Login, Cadastro e Logout */

export async function loginUser (email: any, password: any) {

   try{
       const res= await firebase.auth().signInWithEmailAndPassword(email, password);
       
       return true
    }
    catch(error){
        toast('Erro no login', 4000)
        return false
    }

};


export async function logoutUser(){
    try{
        const res= await firebase.auth().signOut();
        return true
    } 
    catch(error){
        toast('Erro no logout', 4000)
        return false
}};

export async function cadastroUser (email: any, senha: any){

    try{
        const res= await firebase.auth().createUserWithEmailAndPassword(email, senha)
        console.log(res)
        
        return true
    }
    catch(error){
        toast('Erro no cadastro', 4000)
        return false
    }
};

export async function recoverPassword (email: any, confirmation_email: any) {

    if (email != confirmation_email){
        toast('Email devem ser iguais!', 4000)
        return false
    }

    try{
        const res= await firebase.auth().sendPasswordResetEmail(email);
        toast('Email de recuperação enviado com sucesso!', 4000)
        return true
     }
     catch(error){
        toast('Email inválido!', 4000)
         return false
     }
 
 };