import React    from "react";
import {notFound} from "next/navigation";

export default function TestPage() {
    notFound()
    return (
        <div>
            Test Page
        </div>
    )
}