
import './TestResultPanel.css'

const TestResultPanel = ({info})=>{

    console.log("Info",info)

    return (<div className={'test-panel-block'}>
        <div className='test-window-wrapper'>
            <h2 className='header-text-page-result'>Вы прошли тест</h2>
            <div className="block-text-page-result">
                {info.message}
            </div>
        </div>
    </div>
    )
}

export default TestResultPanel