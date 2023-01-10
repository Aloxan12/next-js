interface IHeading{
    text: string
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = ({text, tag}: IHeading)=>{
    const Tag = tag || 'h1'
    return <Tag>{text}</Tag>
}

export default Heading