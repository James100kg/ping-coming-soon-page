import { React, useState } from "react";
import { MobileLayout } from "./MobileLayout";
import { DesktopLayout } from "./DesktopLayout";


export function ParentWrapper() {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        
        const trimmedEmail = email.trim()

         if (trimmedEmail === "") {
        setEmailError("Email is required")
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            setEmailError("Email is invalid")
        } else {
            setEmailError("")
        }
        
    }
    
    return (
    <>
    <div className="block md:hidden">
    <MobileLayout />
    </div>
    <div className="hidden md:block">
    <DesktopLayout
    email={email}
    emailError={emailError}
    setEmail={setEmail}
    handleSubmit={handleSubmit} />
    </div>
    </>
)
}