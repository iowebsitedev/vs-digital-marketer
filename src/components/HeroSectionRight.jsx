import BannerImage from "../images/vaibhav_banner.png"
import Bulleeye from "../icons/bullseye.svg"
import PieChart from "../icons/pie-chart-fill.svg"
import Journal from "../icons/journal-text.svg"

export function HeroSectionRight() {
    return (<>
        <div className="container-fluid bg-blue rounded-5 text-center text-sm-start py-4 py-sm-0">
            <img className="img-fluid col-sm-12 col-8" src={BannerImage} />
            <div className="container-fluid px-xl-5 px-lg-3 px-3">
                <ul className="list-group list-group-flush montserrat fs-xl-24 fs-lg-20 fs-md-16 fs-14">
                    <li className="list-group-item py-3 py-md-4 bg-blue list-border"><img className="img-fluid pe-lg-3 pe-2" src={Bulleeye} alt="" />Clear Objectives and Goals</li>
                    <li className="list-group-item py-3 py-md-4 bg-blue list-border"><img className="img-fluid pe-lg-3 pe-2" src={PieChart} alt="" />Data Collection and Integration</li>
                    <li className="list-group-item py-3 py-md-4 bg-blue list-border"><img className="img-fluid pe-lg-3 pe-2" src={Journal} alt="" />Market Segmentation & Targeting</li>
                </ul>
            </div>

        </div>
    </>)
}