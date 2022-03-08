import './Home.css';

const Home = ({setloginuser})=>{
    return(
        <>
            <div className='home'>
                
                <h1>Hello world</h1>
                <div className='button' onClick={() => setloginuser({})}>Logout</div>
            </div>
        </>
    );
}

export default Home;