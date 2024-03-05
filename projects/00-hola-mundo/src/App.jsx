// styles
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Duran',
        isFollowing: true
    },
    {
        userName: 'JuanOviedo2003',
        name: 'Juan Jose Oviedo',
        isFollowing: false
    },
    {
        userName: 'CarlosRivera247',
        name: 'Carlos Felipe Rivera',
        isFollowing: true
    }
]

export function App (){
    return(
        <section className='App'> 
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard
                            key={userName} 
                            // * Se agrega una key para diferenciar este elemento de los demas en el DOM
                            // Normalmente se pone como key algo que haga que ese elemento sea unico
                            // * EN ESTE CASO EL userName
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}

// <> </> es igual que usar <React.Fragment> </React.Fragment>