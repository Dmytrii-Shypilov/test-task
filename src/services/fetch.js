import axios from "axios";

export const fetchJobs = async() => {
    try {
        const {data} = await axios.get("https://api.json-generator.com/templates/ZM1r0eic3XEy/data", {
            headers: {
                Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
            }
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    } 
}