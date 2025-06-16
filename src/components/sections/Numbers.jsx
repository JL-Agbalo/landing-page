import React from "react";
import Container from "../shared/Container";
function Numbers() {
const numbersData = [
    { value: "100+", label: "AI Models Implemented" },
    { value: "250+", label: "Clients Served" },
    { value: "50+", label: "Team Members" },
    { value: "10+", label: "Years Experience" },
];

return (
    <section className="relative mt-12 md:mt-16">
        <Container className="flex justify-center align-center">
            <div className="mx-auto lg:mx-0 p-5 sm:p-6 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4">
                {numbersData.map((item, idx) => (
                    <div className="text-center px-5 " key={idx}>
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">{item.value}</h2>
                        <p className="mt-2 text-heading-3">{item.label}</p>
                    </div>
                ))}
            </div>
        </Container>
    </section>
);
}

export default Numbers;
