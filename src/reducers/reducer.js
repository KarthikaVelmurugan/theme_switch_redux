
const darkMode = {
    title: "Switch Dark Theme",
    value: true
}

const switchDarkThemeReducer = (state = darkMode, action) => {
    switch (action.type) {
        case "DARK_MODE":
            return { ...darkMode, value: action.payload }
        default:
            return darkMode
    }
}

export { switchDarkThemeReducer }