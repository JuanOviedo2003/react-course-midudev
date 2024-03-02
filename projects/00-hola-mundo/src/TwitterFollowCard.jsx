// styles
import './TwitterFollowCard.css'

export function TwitterFollowCard ({ userName, name, isFollowing }){
        
    //pasar por parametro a la imagen del avatar de forma dinamica
    const imgSrc = `https://unavatar.io/${userName}`;

    return(
        // tw -> Twitter
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar" src={imgSrc} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </article>
    )
}