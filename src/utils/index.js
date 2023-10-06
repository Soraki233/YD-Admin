const optionsLabel = (list) => {
    const formatList = []
    list.forEach((el) => {
        formatList.push({label: el.label, value: el.id})
    })
    return formatList
}
export {
    optionsLabel
}