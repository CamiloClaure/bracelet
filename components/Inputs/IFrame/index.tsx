interface IframeInputProps {
  src: string
  height: string
  width: string
}

const Iframe = (props: IframeInputProps) => {
  const {src, height, width} = props

  return (
    <div>
      <iframe src={src} height={height} width={width} />
    </div>
  )
}

export default Iframe
