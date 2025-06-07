const useClasses = (classes) => {
	const cl = classes.toString().replace(`,`, ` `)
	return cl
}

export default useClasses