// styles
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    return(
        <section className='App'> 
            <TwitterFollowCard userName="JuanOviedo2003" initialIsFollowing={true}>
                Juan Jose Oviedo
            </TwitterFollowCard>
        </section>
    )
}

// <> </> es igual que usar <React.Fragment> </React.Fragment>