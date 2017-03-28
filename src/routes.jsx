import React from 'react'
import { Route } from 'react-router'
import Layout from './containers/Layout'
import Result from './containers/Result'
import Home from './components/Home'



export const getRoutes = (store) => {
    let routeConfig = [

        {
            path: '/',
            component: Layout,
            indexRoute: {
                getComponent: (nextState,cb)=>{
                                        cb(null, Home);
                                    }
            },
            childRoutes: [
                {
                    path: 'result',
                    component: Result
                },
                

            ]
        }
    ];

    return routeConfig;
}


