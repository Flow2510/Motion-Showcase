import ScrollingSection from "./scrollingsection";
import article from '../../data/article.json'

export default function ScrollingSections() {
    return(
        <div className="">
            {article.map((item, index) => (
                <ScrollingSection 
                    key={item.title}
                    item={item}
                    index={index}
                    length={article.length}
                />
            ))}
        </div>
    )
}