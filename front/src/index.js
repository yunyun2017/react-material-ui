import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import './index.css'
import * as serviceWorker from './serviceWorker'

//store相关
import { Provider } from 'react-redux'
import { init } from '@rematch/core'
import createLoadingPlugin from '@rematch/loading'
import immerPlugin from '@rematch/immer'
import * as models from './models'

import Layout from './layouts/Basic'

const store = init({
  models,
  plugins: [createLoadingPlugin({}), immerPlugin()]
})

const App = () => {
  return (
    <Provider store={store}>
        <Router>
            <Layout path='/'></Layout>
        </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
