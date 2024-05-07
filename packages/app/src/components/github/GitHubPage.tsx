import React from "react";
import { Header } from '@backstage/core-components';
import { WelcomeTitle } from '@backstage/plugin-home';

export const GitHubPage = () => {
    return (
        <>
            <Header title={<WelcomeTitle language={['English']} />} pageTitleOverride="Home" />
            <h1>Welcome to Github Component</h1>;
        </>
    ) 
}

export default GitHubPage;
