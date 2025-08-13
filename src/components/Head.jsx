import React, { useEffect } from 'react'

const Head = (props) => {

    useEffect(() => {
        document.title = props.title + ' | Milena';
        document.querySelector("meta[name='description']")
            .setAttribute('content', props.description || '')
    }, [props])
    return (
        <div></div>
    )
}

export default Head