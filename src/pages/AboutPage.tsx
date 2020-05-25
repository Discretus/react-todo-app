import React from 'react';
import {useHistory} from 'react-router-dom'

const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt dicta facere porro quasi
                sapiente
                similique! Adipisci, aperiam, assumenda atque dolorem ea error ipsa iste, itaque magni minus nobis omnis
                porro quae repellendus temporibus tenetur velit veritatis vitae voluptatem voluptatum!</p>
            <button className="waves-effect waves-light btn-large grey darken-3 mt-4"
                    onClick={() => history.push('/')}>
                Go back
            </button>
        </React.Fragment>
    )
}

export default AboutPage;