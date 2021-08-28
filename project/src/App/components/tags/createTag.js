function createTag(Tag, name) {
  return function ({ children, ...rest }) {
    return (
      <Tag className={name} {...rest}>
        {children}
      </Tag>
    )
  }
}

export default createTag
