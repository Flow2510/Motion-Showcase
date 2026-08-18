export default function TextAssembly() {
    const text = "Long Title Text"
    const letters = text.split('')

    const rows = Array.from({ length: letters.length }, (_, i) => i + 1)

    // Shuffle de Fisher-Yates
    for (let i = rows.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[rows[i], rows[j]] = [rows[j], rows[i]]
    }

    return (
        <section className="p-5 flex flex-col gap-8">
            <div className="flex flex-col gap-8">
                <div className="min-h-dvh w-fit relative">
                    <h2
                        className="uppercase grid text-5xl lg:text-9xl h-full w-full relative"
                        style={{ gridTemplateColumns: `auto` }}
                    >
                    {letters.map((letter, index) => (
                        <span
                            className="sticky h-fit top-20"
                            key={letter + index}
                            style={{ gridRow: rows[index], gridColumn: index + 1 }}
                        >
                            {letter === " " ? <>&nbsp;</> : letter}
                        </span>
                    ))}
                    </h2>
                </div>

                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
                    <div className="font-extralight">
                        <p>01 — Architecture</p>
                        <p>Spaces in motion</p>
                        <p>Designing for tomorrow</p>
                    </div>

                    <div>
                        <p>
                            Architecture has always been a way of imagining the future. From
                            the smallest interior detail to the largest urban landscape, every
                            space influences the way we move, think and interact with the world
                            around us. Today, new materials, digital tools and changing ways of
                            living are pushing designers to rethink what a building can be.
                            Rather than simply creating structures, the goal is to create
                            places that evolve with the people who inhabit them.
                        </p>
                    </div>
                    <div className="h-full w-full">
                        <img
                            src=""
                            className="aspect-[1/0.6] w-full bg-white"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8">
            <div className="min-h-dvh w-fit relative">
                <h2
                    className="uppercase grid text-5xl lg:text-9xl h-full w-full relative"
                    style={{ gridTemplateColumns: `repeat(${letters.length}, auto)` }}
                    >
                    {letters.map((letter, index) => (
                        <span
                            className="sticky h-fit top-20"
                            key={letter + index}
                            style={{ gridRow: rows[index], gridColumn: index + 1 }}
                        >
                            {letter === " " ? <>&nbsp;</> : letter}
                        </span>
                    ))}
                </h2>
            </div>

            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
                <div className="font-extralight">
                    <p>02 — Technology</p>
                    <p>Beyond the interface</p>
                    <p>A more human future</p>
                </div>

            <div>
                <p>
                    Technology is becoming less visible while becoming more present in
                    our everyday lives. The most interesting digital experiences are
                    often the ones that do not ask for our attention, but quietly
                    understand how we interact with them. As screens, devices and
                    physical environments become increasingly connected, designers have
                    the opportunity to create experiences that feel natural rather than
                    complicated. The challenge is no longer about adding more
                    technology, but about knowing when technology should disappear.
                </p>
                </div>

                <div className="h-full w-full">
                    <img
                        src=""
                        className="aspect-[1/0.6] w-full bg-white rounded-lg"
                        alt=""
                    />
                    </div>
                </div>
            </div>
        </section>
    );
}