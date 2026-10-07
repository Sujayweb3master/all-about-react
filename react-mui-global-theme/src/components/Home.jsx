import { useState } from "react"
import AppButtonGroup from "./AppButtonGroup"
import AppButtonsList from "./AppButtonsList"
import AppSelect from "./AppSelect"
import GeneralSection from "./GeneralSection"

const Home = () => {
    const [selectValue, setSelectValue] = useState(10)

    const handleSelectChange = e => {
        setSelectValue(e.target.value)
    }

    return (
        <main className='main-box'>
            <header>
                MUI Central Theme:
            </header>

            <GeneralSection heading={'Buttons'}>
                <AppButtonsList />
            </GeneralSection>
            <GeneralSection heading={'Button Group'}>
                <AppButtonGroup />
            </GeneralSection>
            <GeneralSection heading={'Select'}>
                <AppSelect value={selectValue} handleChange={handleSelectChange} size="small" />
            </GeneralSection>

        </main>
    )
}

export default Home