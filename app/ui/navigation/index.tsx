"use client"
import { useState } from "react";
import Navbar from "@/app/ui/navigation/navbar";
import Sidebar from "@/app/ui/navigation/sidebar";

export default function Navigation() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </>
    );
}