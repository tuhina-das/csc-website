export default function Carousel({children: slides}){
    return (
        <div>
            <div>
                <img src={slides}/>
            </div>
        </div>
    )
}