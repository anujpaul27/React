import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>oops!..</h1>
            {
                error.message()
            }
        </div>
    );
};

export default ErrorPage;