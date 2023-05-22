// statusList is an Array of Array<[name, color]>
const generateStatusColorClasses = (model: string, statusList: Array<Array<[string, string]>>) => {
  const newClasses = statusList?.reduce(
    (prev, item) => ({...prev, [`& .${model}-status--${item[0]}`]: {bgcolor: item[1]}}),
    {}
  )
  return newClasses
}

const setStatusClass = (model: string, status: string) => {
  return `${model}-status--${status}`
}

export {generateStatusColorClasses, setStatusClass}
