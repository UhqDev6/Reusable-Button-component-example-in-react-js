import './index.css';
import Button from './components/Button';
import { BrandFacebook, BrandGithub, BrandTwitter } from 'tabler-icons-react';
import Card from './components/Card';
const App = () => {
    return (
        <>
            <div className='bg-sky-100 antialiased text-slate-800 tracking-tight flex items-center justify-center min-h-screen'>
                <div className='max-w-md w-full'>
                    <div className='flex gap-x-2'>
                    </div>
                    <div className='max-w-md items-center'>
                        <Card>
                            <Card.Title>
                                Twitter
                            </Card.Title>
                            <Card.Body>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                            </Card.Body>
                            <Card.Footer>
                                <Button className='bg-purple-500' onClick={() => {console.log('Register')}} type='reset'>
                                    <BrandTwitter />
                                    Twitter
                                </Button>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Title>
                                Facebook
                            </Card.Title>
                            <Card.Body>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                            </Card.Body>
                            <Card.Footer>
                                <Button className='bg-sky-700' onClick={() => {console.log('Login')}} type='submit'>
                                    <BrandFacebook />
                                    Facebook
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
