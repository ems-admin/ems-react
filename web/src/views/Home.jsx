import Logo from '../assets/image/ems.png'
const Home = () => {

    return(
        <>
            <div style={{textAlign: 'center'}}>
                <img alt="EMS logo" src={Logo} />
                <h1 style={{fontSize: '60px'}}>welcome to ems-admin</h1>
            </div>
        </>
    )
}

export default Home