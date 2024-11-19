import React from 'react'
import { Calendar } from "@/components/ui/calendar"

const Calender = () => {
    const [date, setDate] = React.useState(new Date())
    console.log(date)

    return (
        <>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md mx-auto border w-fit  shadow"
            />
        </>
    )
}

export default Calender