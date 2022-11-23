import { RingLoader } from "react-spinners";


const GlobalLoader = () => {
    return (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RingLoader color='#5E27C9' size={75} margin={2} />
            <h1>hello</h1>
        </div>
    );
}

export default GlobalLoader;