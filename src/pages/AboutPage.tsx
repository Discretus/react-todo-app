import React from 'react';
import {useHistory} from 'react-router-dom'
import GithubLogo from '../resources/github-logo.svg'

const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>
                Simple Full-stack To Do React App.
            </p>
            <a href="https://github.com/Discretus/react-todo-app">
                <div className="mt-4 github">
                    Go to Github repo
                    &nbsp;
                    <img src={GithubLogo} alt="GutHib logo"/>
                </div>
            </a>
            <button className="waves-effect waves-light btn-large grey darken-3 mt-4"
                    onClick={() => history.push('/')}>
                Go back
            </button>
        </React.Fragment>
    )
}

export default AboutPage;