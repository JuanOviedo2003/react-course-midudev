// styles
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    const formatUserName = (userName) => `@${userName}`

    return(
        <section className='App'> 
            <TwitterFollowCard 
                formatUserName={formatUserName}
                userName="JuanOviedo2003" 
                name="Juan Jose Oviedo"
            />
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="midudev"
                name="Miguel Ángel Durán"
            />
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="CarlosRivera4726"
                name="Carlos Felipe Rivera"
            />
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="elonmuskceo" 
                name="Elon Musk"
            />
        </section>
    )
}

// <> </> es igual que usar <React.Fragment> </React.Fragment>