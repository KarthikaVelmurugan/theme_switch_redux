import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { switchDarkTheme } from '../store/actions/action';
import "./ToggleSwtichStyle.css"
function ToggleSwitch() {
    const [darkMode,setDarkMode]=useState(false)
    const dispatch = useDispatch();
    const value = useSelector(state=>state.value)

    return (
        <div className="toggle-switch">
            <input type="checkbox" className="checkbox"
                name="theme" id="theme" onClick={() => {
                    setDarkMode(!darkMode)
                 dispatch(switchDarkTheme(darkMode))
                 console.log(value,"value")
                }} />
            <label className="label" htmlFor="theme">
                <span className="inner" />
                <span className="switch" />
            </label>
        </div>
    )
}

export default ToggleSwitch