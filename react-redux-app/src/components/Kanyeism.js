import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { fetchKanyeism } from '../actions'

const Kanyeism = props => {
    return (
        <div>
            <button onClick={props.fetchKanyeism}>What he say</button>
            {!props.activity && props.isLoading && (
            <h2>Fetch a Kanyeism</h2>
            )}
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
             />
            )}
            {props.activity && !props.isLoading && (
                <h2>{props.activity.quote}</h2>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        activity: state.activity,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchKanyeism }
    )(Kanyeism);