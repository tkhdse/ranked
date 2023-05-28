'use client';

import axios from 'axios'
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'; 
import useAuthModal from '@/app/hooks/UseAuthModal';
import Input from '../input';
import Modal from './modal';
import {FcGoogle} from 'react-icons/fc';
import Button from '../button';

import { auth } from '@/firebase/clientApp';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

/**
 * provides loading status and used for once user is logged in
 */
import { useAuthState } from "react-firebase-hooks/auth" 

/**
 * FieldValues - a type
 * SubmitHandler
 */

export default function AuthModal() {

    // an object that can control Modal attributes (isOpen)
    const authModal = useAuthModal();

    /**
     * State used to dynamically update values
        const ['name', function] = useState( value )
        --> value is stored in name
        --> function can be uesd to change the value in name
     */


    const [ isLoading, setIsLoading ] = useState(false);


    /**
     * useForm:
     * 
     * register: ...register("field") -> field gets added to form data
     * handleSubmit: handleSubmit( function(data) ) -> extracts the registered field when submit button is pressed
     * formState: {errors} -> detects invalid inputs and allows page to still render
     * 
     * defaultValues: will select registered fields and set appropriate default values inside of the form
     */
    const {
        register,
        handleSubmit,
        formState: {
            errors, 
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true); // updates state

        if (authModal.switchToReg) {
            // sign in
            createUserWithEmailAndPassword(auth, data["email"], data["password"])
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                setIsLoading(false);
            })
             
        } else {
            // log in
            signInWithEmailAndPassword(auth, data["email"], data["password"])
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                setIsLoading(false);
            })
        }

 
        // signUp(data["email"], data["password"]);
        // signUp(auth, );
        
        // axios.post('/api/register', data).then( () => {
        //     authModal.onClose();
        // })
        // .catch((error)=> {
        //     console.log(error);
        // })
        // .finally(() => {
        //     setIsLoading(false); // updates state after process runs
        // })
    }

    
    const bodyContent = (
        <div className='flex flex-col gap-2 items-center'>
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            {authModal.switchToReg && (
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required                
            />

            )}

            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required                
            />

{           authModal.switchToReg && (
            <Input
                id="passwordSecond"
                type="password"
                label="Re-type Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required                
            />

            )}

        </div>
    )


    const footerContent = (

        <div className="flex flex-col gap-4 mt-6 items-center">
            <div className="h-[1px] w-full bg-zinc-300"></div>
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={()=>{}}   
            />


            <p onClick={authModal.toggleSwitch}
                className="
                bottom-5
                hover:cursor-pointer
                text-sm
                text-neutral-500
                hover:opacity-70
                pb-6
            ">
                {!authModal.switchToReg ? "Create Account" : "Back to login"}
            </p>
    </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={authModal.isOpen}
            title={authModal.switchToReg ? "Register" : "Login"}
            actionLabel="Sign in"
            onClose={authModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
            
        />
    );
}