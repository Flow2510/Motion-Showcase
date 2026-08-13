import article from '../../data/article.json'
import Tighteningcontainer from './tighteningcontainer'

export default function TighteningWordLines() {
    return(
        <section className="flex flex-col gap-4">
            {article.map((item, index) => (
                <Tighteningcontainer 
                    key={item.title}
                    title={item.title}
                    text={item.description}
                />
            ))}
        </section>
    )
}