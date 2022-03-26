import styled from "styled-components";
import Head from "next/head";
import { Button, Checkbox } from "@material-ui/core";
import Link from 'next/link'

export default function Login() {
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo
                    src="/image/logo.png"
                />
                <Input placeholder="Account Name" />
                <Input placeholder="PassWord" />
                <CheckboxContainer>
                    <Checkbox /><a>Remember me</a>
                    <Button variant="outline">Forgot PassWord ?</Button>
                </CheckboxContainer>
                <BTNContainer>
                    <Link href="/"><Button variant="outline">Signin</Button></Link>
                    <Link href="/login/Register"><Button variant="outline">Register an account </Button></Link>
                </BTNContainer>

            </LoginContainer>

        </Container>

    )
}

const Container = styled.div`
    display: grid;
    place-items: center;
    width: 135vh;
    
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;



const BTNContainer = styled.div`
    display: flex;
    place-items: center;
    margin-top: 15px;
`;

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    padding: 100px;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
`;

const Input = styled.input`
    outline: 0;
    align-items: center;
    padding: 10px;
    position: sticky;
    border: none;
    bottom: 0;
    background-color: #e5ded8;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
`;