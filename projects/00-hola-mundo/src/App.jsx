// styles
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    return(
        <section className='App'> 
            <TwitterFollowCard userName="JuanOviedo2003" name="Juan Jose Oviedo"/>
            <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán"/>
            <TwitterFollowCard userName="CarlosRivera4726" name="Carlos Felipe Rivera"/>
            <TwitterFollowCard userName="elonmuskceo" name="Elon Musk"/>
        </section>
    )
}

// <> </> es igual que usar <React.Fragment> </React.Fragment>