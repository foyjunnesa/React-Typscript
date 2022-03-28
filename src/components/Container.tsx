import React from 'react';

type containerProps = {
    name: string;
    messages: number;
    isLogged: boolean;
}
const Container = (props: containerProps) => {
    return (
        <div>
            <h1>Hello {props.isLogged ? props.name : ""} ! how are you? {props.isLogged ? `you have ${props.messages} messages` : ""}</h1>
        </div>
    );
};

export default Container;