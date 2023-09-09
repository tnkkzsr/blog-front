import React, { use } from 'react'
import { useState } from 'react';
import { Block } from '@/features/base/components/container/Block';
import {Input} from '@/features/base/components/form/Input';
import { Button } from '@/features/base/components/form/Button';
import { fetchCreateToken } from '@/features/user/libs/external/userFetcher';
import { useAuthContext } from '@/features/user/contexts/AuthContext';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {login} = useAuthContext();


    const handleLogin = async () => {
        //todo
        await login(username,password);
        router.push('/');
    };


  return (
    <Block>
        <Block>
            <h1>ログイン</h1>
            <Input
            text={username}
            setText={setUsername}
            placeholder='ユーザー名'
            type='text'/>

            <Input
            text={password}
            setText={setPassword}
            placeholder='パスワード'
            type='password'/>   

            <Button label='ログイン' onClick={handleLogin}/>


        </Block>



    </Block>

    
  )
}

export default Index