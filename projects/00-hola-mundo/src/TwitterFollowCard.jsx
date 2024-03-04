//hooks
import { useState } from 'react';

// styles
import './TwitterFollowCard.css'

export function TwitterFollowCard ({children, userName, name}){
    // ? Definición de estado por defecto
    // Usamos desesctructuracion ya que useState es un vector con dos posiciones
    // *[0] -> el estado del bombillo, encendido o apagado (en este caso lo tenemos por defecto apagado)
    // *[1] -> el interruptor
    const [isFollowing, setIsFollowing] = useState(false);


    //pasar por parametro a la imagen del avatar de forma dinamica
    const imgSrc = `https://unavatar.io/${userName}`;


    const text = isFollowing ? 'Siguiendo' : 'Seguir'


    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-Following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        // tw -> Twitter
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar" src={imgSrc} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}