function Conteiner({ children, ...rest }) {
  return (
    <div className="Conteiner" {...rest}>
      {children}
    </div>
  )
}

export default Conteiner
