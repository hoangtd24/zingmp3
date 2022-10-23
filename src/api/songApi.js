import axios from "axios"

export const getSong = async (value) => {
    const result = await axios.get(`https://apizingmp3.herokuapp.com/api/search?keyword=${value}`)
    .then(res => res)
    return result
}