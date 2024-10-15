"use client";

import Image from "next/image";
import calendar from "../../../public/image/calendar.jpg"

export default async function Calendar() {
    return (
        <div className="flex justify-center min-h-screen">
            <Image
                src={calendar}
                alt={"Calendar"}
                width={600}
                height={600}
                className="my-8 pb-16 h-fit"
            />
        </div>
    );
}
