import TighteningContainer from './tighteningcontainer'

export default function TighteningWordLines() {
    return(
        <section className="flex flex-col gap-4">
            <TighteningContainer 
                title={"01 - Title Text"}
                text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dicta dolorem totam exercitationem consectetur ducimus tempore commodi accusantium modi beatae voluptatum ab, est, sed numquam ad?"}
            />
            <TighteningContainer 
                title={"02 - Title Text"}
                text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dicta dolorem totam exercitationem consectetur ducimus tempore commodi accusantium modi beatae voluptatum ab, vitae minima nam quo."}
            />
            <TighteningContainer 
                title={"03 - Title Text"}
                text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dicta dolorem totam exercitationem consectetur ducimus tempore commodi accusantium modi beatae voluptatum ab."}
            />
        </section>
    )
}