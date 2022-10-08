import './index.css';
import Button from './component/Button';
import { BrandFacebook, BrandGithub, BrandTwitter } from 'tabler-icons-react';
const App = () => {
    return (
        <>
            <div className='bg-sky-800 grid place-content-center min-h-screen'>
                <div className='max-w-md w-full'>
                    <div className='flex gap-x-2'>
                        <Button className='bg-sky-700' onClick={() => {console.log('Login')}} type='submit'>
                            <BrandFacebook />
                            Login
                        </Button>
                        <Button className='bg-purple-500' onClick={() => {console.log('Register')}} type='reset'>
                            <BrandTwitter />
                            Register
                        </Button>
                        <Button onClick={() => {console.log('Register')}} type='reset'>
                            <BrandGithub/>
                            Github
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
