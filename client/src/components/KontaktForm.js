import React from "react"
// Koden her er lavet i forbindelse med Scrimbas React-kursus, som vi tog på forårssemestret
export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            name: "",
            email: "",
            tel: "",
        }
    )

    function handleChange(event) {
        const { name, value, type, checked } = event.target // event.target.name]: event.target.value
        setFormData(prevFormData => {
            return {
                ...prevFormData,
            }
        }
        )
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    return (
        <form className="KontaktForm" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Navn"
                onChange={handleChange}
                name="name"
                value={formData.name}
                className="Navn"
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input
                type="tel"
                placeholder="Tlf"
                onChange={handleChange}
                name="tel"
                value={formData.tel}
            />
            <textarea
                type="text"
                placeholder="Besked"
                onChange={handleChange}
                name="comment"
                value={formData.comment}
                className="Besked"
            />

            <button type="submit">Send</button>
        </form>
    )
}