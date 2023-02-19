import React from 'react'
import { useState } from 'react'

export const TwitterFollowCard = ({ userName, name }) => {

    const [isFollow, setIsFollow] = useState(false)

    const imgSrc = `https://unavatar.io/${userName}`
    const text = isFollow ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollow ?
        'tw-followCard-button is-following' :
        'tw-followCard-button'

    const onHandleClick = () => {
        setIsFollow(!isFollow)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-hd">
                <img
                    className="tw-followCard-avatar"
                    alt="Imagen de un Avatar"
                    src={imgSrc} />
                <div className="tw-followCard-div" >
                    <strong> {name}</strong>
                    <span className="tw-follow-divUser">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={onHandleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
