export default function TextAssembly() {
    const text = "Long Title Text"
    const letters = text.split('')

    const rows = Array.from({ length: letters.length }, (_, i) => i + 1)

    // Shuffle de Fisher-Yates
    for (let i = rows.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[rows[i], rows[j]] = [rows[j], rows[i]]
    }

    return(
        <section className="p-5 flex flex-col gap-8">
            <div className="flex flex-col gap-8">
                <div className="min-h-dvh w-fit relative">
                    <h2 className={`uppercase grid text-5xl lg:text-9xl h-full w-full relative`} style={{ gridTemplateColumns: `auto`}}>
                        {letters.map((letter, index) => (
                            <span className="sticky h-fit top-20" key={letter + index} style={{  gridRow: rows[index], gridColumn: index + 1 }}>
                                {letter === " " ? <>&nbsp;</> : letter}
                            </span>
                        ))}
                    </h2>
                </div>
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
                    <div className="font-extralight">
                        <p>Long Subtitle Text</p>
                        <p>Subtitle</p>
                        <p>Subtitle Text</p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam, doloribus minima obcaecati veritatis ad fugiat veniam dolores debitis voluptates eos quis dolor voluptate dolorem illum enim vitae? Ab, impedit.
                        </p>
                    </div>
                    <div className="h-full w-full">
                        <img src="" className="aspect-[1/0.6] w-full bg-white" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="min-h-dvh w-fit relative">
                    <h2 className={`uppercase grid text-5xl lg:text-9xl h-full w-full relative`} style={{ gridTemplateColumns: `repeat(${letters.length}, auto)`}}>
                        {letters.map((letter, index) => (
                            <span className="sticky h-fit top-20" key={letter + index} style={{  gridRow: rows[index], gridColumn: index + 1 }}>
                                {letter === " " ? <>&nbsp;</> : letter}
                            </span>
                        ))}
                    </h2>
                </div>
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
                    <div className="font-extralight">
                        <p>Long Subtitle Text</p>
                        <p>Subtitle</p>
                        <p>Subtitle Text</p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam, doloribus minima obcaecati veritatis ad fugiat veniam dolores debitis voluptates eos quis dolor voluptate dolorem illum enim vitae? Ab, impedit.
                        </p>
                    </div>
                    <div className="h-full w-full">
                        <img src="" className="aspect-[1/0.6] w-full bg-white rounded-lg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}