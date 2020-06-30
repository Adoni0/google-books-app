import React, { Component } from 'react'

export default function SaveLayout (props) {

    const style = {
        marginLeft: 30,
        marginRight: 30
    }

    // render() {
        return (
            <div style={style} class="media">
                <img src={props.source} class="align-self-center mr-3" alt="..." />
                <div class="media-body">
        <h5 class="mt-0">{props.title} by {props.author}</h5>
                    <p>
                        {props.description}
          </p>
          <a href={props.link}>Link</a>
        
                </div>
            </div>
        )
    // }
}
