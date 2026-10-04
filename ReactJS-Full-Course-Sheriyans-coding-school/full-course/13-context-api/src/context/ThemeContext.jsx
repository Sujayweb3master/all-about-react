import { createContext } from "react"


export const ThemeDataContext = createContext()

const ThemeContext = (props) => {

    return (
        <div>
            <ThemeDataContext.Provider value={{
                theme: 'dark',
                user: 'Sujay'
            }}>
                {props.children}
            </ThemeDataContext.Provider>
        </div>
    )
}

export default ThemeContext