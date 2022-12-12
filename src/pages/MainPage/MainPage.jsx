import s from "./main.module.scss"
import Container from "components/Container"
import JobList from "components/JobList"
import Pagination from "components/Pagination"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getJobsData } from "redux/operations"
import { useSelector } from "react-redux"
import { getJobs } from "redux/selector"
import TrainingTimer from "components/TrainingTimer"


const MainPage = () => {
const dispatch = useDispatch()
const jobs = useSelector(getJobs)

useEffect(()=> {
    dispatch(getJobsData())
}, [dispatch])

    return(
        <section className={s.section}>
            <Container>
                <TrainingTimer/>
            </Container>
        </section>
    )
} 

export default MainPage