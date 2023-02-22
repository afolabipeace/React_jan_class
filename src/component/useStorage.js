export const useStorage = () => {
    const getIt =(key) =>{
        return JSON.parse(localStorage.getItem(key))
    }
    const setIt =(key,value) =>{
        // localStorage.set=JSON.stringify([...detailsArray,details])
        localStorage.set=JSON.stringify(value)
        // localStorage.set(key,JSON.stringify(value))
        // loc4alStorage.setItem(key,JSON.stringify(value))
        // localStorage.setItem('budget', JSON.stringify(this.budget_array))
    }

    return {getIt,setIt}
}
