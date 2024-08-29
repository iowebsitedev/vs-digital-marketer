import Card from "./Card";
import ServiceImage from "../images/services.png"

export default function Services() {
    return (<>
        <div className="container-fluid mx-0 row py-5">
            <div className="col-12 col-md-5 my-auto">
                <img className="img-fluid" src={ServiceImage} />
            </div>
            <div className="col">
                <div className="fs-32 fs-md-40 fw-bold pb-4 pb-sm-5">Empowering your <br />Digital Success</div>
                <div className="row row-cols-sm-2 g-3">
                    <Card title={"Search Engine Optimization (SEO)"} description={"To help generate qualified traffic to your website."} bgcolor={"#F1E5D1"} />
                    <Card title={"Pay Per Click (PPC) Management"} description={"Measuring the effectiveness of your ad campaigns throughout social media."} bgcolor={"#E3F4F4"} />
                    <Card title={"Social Media Marketing"} description={"Helping you to create content for social media to promote your products and services."} bgcolor={"#E8EAE6"} />
                    <Card title={"Online Reputation Management"} description={"Your reviews and online reputation can make or break your success online."} bgcolor={"#FFEEF4"} />

                    {/* <Card title={"Pay Per Click (PPC) Management"} description={"Measuring the effectiveness of your ad campaigns throughout social media."} bgcolor={"#E3F4F4"} />
                    <Card title={"Search Engine Optimization (SEO)"} description={"To help generate qualified traffic to your website."} bgcolor={"#EEE0C9"} /> */}
                </div>
            </div>
        </div>
    </>)
}