// // import { Button, Typography, Grid } from "@material-ui/core";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../../firebase";



// const SignIn = () => {
//     return (
//         <div className='sign-in-page'>
//             <Grid container xs={6} spacing={3}>
//                 <Grid item xs={12}>
//                     <Typography variant='h6' component='h1' className='title'>
//                         Sign In (ACOW) 
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Button onClick={() => signInWithGoogle()} variant='contained' startIcon={<FcGoogle />}>
//                         Sign In with Google
//                     </Button>
//                 </Grid>
//             </Grid>


//         </div>
//     );
// }

// export default SignIn;
import './SignIn.style.scss'

function SignInPage() {
    return (
        <div className='w-full h-full flex sign-in'>
            <div className='left-tile p-10'>
                <div className='rounded-2xl  px-4'>
                    <h1 className='text-white font-extrabold'>ACOW</h1>
                </div>

            </div >
            <div className='right-tile flex justify-center items-center'>
                <div className="flex items-center flex-col">
                    <div>
                        <h1 className='font-extrabold text-white pb-5 text-2xl'>Login to your account</h1>
                        <form className='flex flex-col items-center mb-5' onSubmit={() => { }}>
                            <input type="text" placeholder="email" name="" id="" />
                            <input type="text" placeholder="password" name="" id="" />
                            <button>Login</button>
                        </form>
                    </div>
                    <div className=" text-white pb-5 ">------OR-------</div>
                    <button className="flex items-center google-button" onClick={() => signInWithGoogle()} ><FcGoogle /> <span className=" px-1"></span>Sign in with Google</button>
                </div>
            </div>
        </div>
    )
}

export default SignInPage