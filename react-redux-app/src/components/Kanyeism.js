import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { fetchKanyeism } from '../actions'


import styled from 'styled-components'

const MainDiv = styled.div`
    width: 50%;
    border: 4px solid crimson;
    box-shadow: -8px 8px 8px darkgrey;
    margin: auto;
    margin-top: 5%;
`;

const Header = styled.h1`
    color: crimson;
    text-shadow: -3px 3px 3px black;
`;

const Button = styled.button`
    width: 25%;
    background-color: crimson;
    box-shadow: -8px 8px 8px darkgrey;
    border: 1px solid darkgrey;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 5%;
    padding: 1%;
`;

const Quote = styled.h3`
    padding: 5%;
    margin-top: 2%;
`;

const Kanyeism = props => {

    
    return (
        <MainDiv>
            <Header>Fetch A Kanyeism</Header>
            <Button onClick={props.fetchKanyeism}>What He Say?</Button>
            <div>
                {props.gif.map((item, index) => (
                    index === (Math.floor(Math.random() * 10) + 1) &&
                    <div key={index}>
                        <img src={item.max2mbGif} />
                    </div>    
                ))}
            </div>
            {!props.activity && props.isLoading && (
            <h2>Fetch a Kanyeism</h2>
            )}
            {props.isLoading ? (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
                timeout={3000} //3 secs
             />)
            : (
              
                
                <Quote>{props.activity.quote}</Quote>
            )}
            
            
        </MainDiv>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        activity: state.activity,
        error: state.error,
        gif: state.gif
    }
}

export default connect(
    mapStateToProps,
    { fetchKanyeism}
    )(Kanyeism);