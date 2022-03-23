import LogoHead from './login.svg';
 import StyleLogin from './Style.module.css';
function Login() {
    return ( 
        <>
        <img src={LogoHead} alt='mohammad'  className={StyleLogin.logo}/>

        </> );
}

export default Login;