import aboutme from "../images/mr__vaibhav_1.png"
export function AboutMe() {
    return (
        <>
            <div id="about" className=" container-fluid fs-32 fs-md-40 fw-bold text-center pt-4">About Me</div>
            <div className=" col-10 mx-auto row m-0 fs-16 fs-md-24 py-5 mb-4 ">

                <div className="col-12 col-sm-8 col-lg-4 col-xl-3 pb-3 pb-lg-0 m-auto">
                    <img className=" img-fluid rounded-circle " src={aboutme} alt="Image" />
                </div>
                <div className="col-12 col-lg-7 text-center text-lg-start ">
                    Hi, I'm Vaibhav Sonawane, a passionate digital marketer with over two years of experience driving growth and engagement for diverse brands. I specialize in SEO, content marketing, and social media management, and have a track record of delivering measurable results.
                    <br />
                    <br />
                    My approach is rooted in understanding both market trends and audience behavior to deliver campaigns that resonate and drive results. I'm always excited about opportunities to learn and innovate in the digital space.
                    <br />
                    <br />
                    Let's connect and explore how we can collaborate to elevate your digital presence!
                </div>
            </div>
        </>
    )

}