import "./App.css"
import React, { useState } from "react"
import { BrowserRouter } from "react-router-dom"

import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'

import DataContext, { data } from "../data/DataContext"

interface Props { }

export default function App(props: Props) {
    const [state, setState] = useState(data)

    return (
        <DataContext.Provider value={{ state, setState }}>
            <div className="App">
                <BrowserRouter>
                    <Menu />
                    <Content />
                </BrowserRouter>
            </div>
        </DataContext.Provider>
    )
}