
import ButtonUI from '../../../../shared/components/Button/Button'
import './TestResultPanel.css'

const TestResultPanel = ({info})=>{

    console.log("Info",info)

    return (<div className={'test-panel-block'}>
        <div className='test-window-wrapper'>
            <h2 className='header-text-page-result'>Вы прошли тест</h2>
            <div className="block-text-page-result">
                <span>{info.message}</span>
            </div>
            {info.checklist !== null && (
            <div className="button-report-redirect">
                <ButtonUI type={'green smaller'} text={"Просмотреть отчет"}/>
            </div>
            )}
        </div>
    </div>
    )
}

export default TestResultPanel