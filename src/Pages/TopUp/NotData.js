
import notdata from "../../assert/notdata.png";


const NotData = () => {
    <div className="not-result">
        <div className="not-result-center">
            <img className="not-result-img" src={notdata} alt=""/>
            <h4 className="not-result-heading">Not Result Found</h4>
        </div>
    </div>
}

export default NotData;