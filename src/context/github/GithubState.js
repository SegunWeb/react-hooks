import React, {userReducer} from 'react';
import {GithubContext} from "./githubContext";
import {githubReduscer} from "./githubReducer";

const GithubState = ({children}) => {
    const initialState = {

    };

    const [state, dispatch]= userReducer(githubReduscer, initialState);

    return (
        <GithubContext.Provider
            value={{}}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubState;