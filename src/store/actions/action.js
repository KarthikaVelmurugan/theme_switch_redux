const switchDarkTheme = (state) => {
    return {
        type: "DARK_MODE",
        payload: state
    }
}

export { switchDarkTheme }