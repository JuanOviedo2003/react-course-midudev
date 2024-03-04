// styles
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    return(
        <section className='App'> 
            <TwitterFollowCard userName={'JuanOviedo2003'}>
                Juan Jose Oviedo
            </TwitterFollowCard>
            <TwitterFollowCard userName={'midudev'}>
                Miguel Ángel Durán
            </TwitterFollowCard>
        </section>
    )
}

// <> </> es igual que usar <React.Fragment> </React.Fragment>