import React, {Suspense} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";


export const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader/>}>
            <Component{...props} />
    </Suspense>
    };
}

