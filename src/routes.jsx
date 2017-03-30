import React from 'react'
import { Route } from 'react-router'
import Layout from './containers/Layout'
import Result from './containers/Result'
import Home from './components/Home'
import {fetchData} from './actions'


export const getRoutes = (store) => {
    // console.log(store.dispatch);
    let routeConfig = [

        {
            path: '/',
            component: Layout,
            indexRoute: {
                getComponent: (nextState,cb)=>{
                                        fetchData({},store.dispatch);
                                        cb(null, Home);
                                    }
            },
            childRoutes: [
                {
                    path: 'result',
                    getComponent: (nextState,cb)=>{
                                        fetchData({},store.dispatch);
                                        cb(null, Result);
                                    }
                },
                

            ]
        }
    ];

    return routeConfig;
}


