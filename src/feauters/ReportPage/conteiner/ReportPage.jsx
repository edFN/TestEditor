import { useParams } from "react-router-dom"

import useReportUser from "../hooks/useReport"

import ReportAnswer from "../components/ReportAnswer"

import "./ReportPage.css"

const ReportPage = () =>{
    const {id} = useParams()

    const [report, setReport] = useReportUser(id)


    console.log(report)


    if(!report.report && !report.error){
        return <h1>Loading...</h1>
    }


    return (
        <div className={'report-page-block'}>
            <div className='test-window-wrapper'>
                    {report.error && <div className="error-report">
                        <h1>Произошла ошибка</h1>
                        <p>{report.error}</p>    
                    </div>}
                    {report.report && 
                    <div className="success-report">
                        <h1 className="header-report-success">Результат тестирования</h1>
                        <div className="report-content">

                          <div className="report-user-data">
                                <p>Пользователь: {report.report.user_answer}</p>
                                <p>Количество баллов: {report.report.score}</p>
                          </div>

                          <div className="report-answer-data">
                              {report.report.test_answers.map((item) => (
                                  <ReportAnswer item={item} />
                              ))}
                          </div>  
                            
                            
                        </div>
                    </div>}
            </div>

        </div>
    )
}

export default ReportPage;