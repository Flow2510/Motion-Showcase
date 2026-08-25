import article from "../../data/article.json";
import ListItem from "./listitem";

export default function ListSlider(){
    return(
        <section className="flex items-center justify-center min-h-dvh">
            <div className="flex flex-col">
                {article.map((item, index) => (
                    <ListItem 
                        key={item.id + index} 
                        item={item}
                    />
                ))}
            </div>
        </section>
    )
}