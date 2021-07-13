import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'
import { signIn } from "next-auth/client"

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
             <Image src="https://links.papareact.com/1ui"
             height="300"
             width="550"
             objectFit="contain" />
             <Button
             className="w-44 mt-10"
             color="blue"
             buttonType="filled"
             ripple="light"
             onClick={signIn}
            >
                Sign In
            </Button> 
            
        </div>
    )
}

export default Login
