import ScrollStaggeredReveal from './scrollstaggeredreveal'

export default function ScrollStaggeredRevealComponent(){
    return(
        <section>
            <ScrollStaggeredReveal 
                right={true}
                color={'#0a0a0a'}
                text='Staggered'
                textColor={"#fafafa"}
            />
            <ScrollStaggeredReveal 
                right={false}
                color={'#fafafa'}
                text='Scroll'
                textColor={"#0a0a0a"}
            />
            <ScrollStaggeredReveal 
                right={true}
                color={'#0a0a0a'}
                text='Reveal'
                textColor={"#fafafa"}
            />
        </section>
    )
}