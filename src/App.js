import React from 'react'
import './styles/mquotient.scss'
import Navbar from './components/mquotient/Navbar'
import Table from './components/mquotient/Table'
import AddContact from './components/mquotient/AddContact'
import EditContact from './components/mquotient/EditContaact'
import { Provider } from 'react-redux'
import Store from './components/mquotient/redux/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default function App() {


    return (
        <Provider store={Store}>
            <Router>

                <div className="container">
                    <Navbar />
                    <div className="py-3 content-part">
                        <Switch>
                            <Route exact path="/" component={Table} />
                            <Route exact path="/contacts/add" component={AddContact} />
                            <Route exact path="/contacts/edit/:id" component={EditContact} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    )
}