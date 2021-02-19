import firebase from 'firebase';
import { toast } from '../toast';

import "firebase/auth";
import "firebase/firestore";



const config = {
    apiKey: "AIzaSyCnE1bpDQ3qwKvfFxBy4T5R7kEfJmpcfuM",
    authDomain: "appsono-157c2.firebaseapp.com",
    databaseURL: "https://appsono-157c2-default-rtdb.firebaseio.com",
    projectId: "appsono-157c2",
    storageBucket: "appsono-157c2.appspot.com",
    messagingSenderId: "220391668930",
    appId: "1:220391668930:web:ebd56be8de039df0278f5b"
}

firebase.initializeApp(config)

export const auth= firebase.auth();
export const firestore= firebase.firestore();

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