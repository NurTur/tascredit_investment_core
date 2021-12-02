import React, { Suspense } from 'react';
import Loader from '../Loader';

function Loadable(Component) {
    return function (props) {
        return (
            <Suspense fallback={<Loader />}>
                <Component {...props} />
            </Suspense>
        );
    };
}

export default Loadable;
