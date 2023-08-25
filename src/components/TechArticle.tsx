type TechProps = {
  name: string,
  color: string,
  image: string,
  link: string,
  style: {gridColumnStart: number, gridColumnEnd: number, gridRowStart: number, gridRowEnd: number },
  imageSize: number
}

const TechArticle = (props: TechProps) => {
  return (
    <article className={` rounded hover:shadow-lg`} style={{background: `${props.color}` , ...props.style}}>
      <a href={props.link} target="_blank" rel="noopener noreferrer" className=" w-full h-full flex justify-center items-center">
        <img className={`${props.image == "nextjs.png" ? "invert":""}`} src={props.image} alt={props.name} width={props.image == "typescript.png" || props.image == "graphql.png" ? (120/props.imageSize):(180/props.imageSize)}/>
      </a>
    </article>
  )
}
export default TechArticle