import React from "react";
import "./styles.sections.css";

function SectionOrganization() {
    return (
        <>
            <div className="conteiner-sectionOrganization h-[auto] bg-black">
                <section className="container mx-[10px] px-4 py-12 md:py-24">
                    <div className="grid gap-8 md:grid-cols-2 items-center ">
                        <div className="relative aspect-[4/5] md:aspect-square w-full max-w-md mx-auto">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1690303193653-0418179e5512?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Consultor profesional"

                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-8 ">
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    Las empresas del futuro deben construirse sobre bases equilibradas: Empatía y
                                    pragmatismo, previsión y perspicacia, humanidad y tecnología.
                                    En Consultoría Co, tratamos a las organizaciones como socios, con un
                                    fuerte enfoque en la colaboración.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Vemos a nuestros clientes como personas, y trabajamos con los retos a los que
                                    se enfrentan.
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SectionOrganization;