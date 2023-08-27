import PrimarySearchAppBar from "./components/topAppBar/AppBar";
import MainSection from "./components/sections/MainSection";
import CarouselSection from "./components/carouselSection/carouselSection";
import {useState} from "react";
import {useEffect} from "react";

function App() {
    const [session, setSession] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/account/info')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('No session');
                }
            })
            .then(data => setSession(data))
            .catch(error => {
                console.error(error);
            });
    }, []);

    // console.log("session here");
    // console.log(session.accountInfo)
    // if (session.accountInfo && session.accountInfo.role) {
    //     console.log(session.accountInfo)
    //     console.log(session.accountInfo.role)
    //     console.log(session.accountInfo.id);
    // }

    return (
        <div>
            <PrimarySearchAppBar session={session}/>
            <CarouselSection session={session}/>
            <MainSection session={session}/>
        </div>
    );
}

export default App;
