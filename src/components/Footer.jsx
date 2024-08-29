import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export function Footer() {
    return (
        <>
            <div className="container-fluid bg-black m-0 p-0 d-flex flex-column bg-dark pt-5 align-items-center mt-auto">
                <div className="col-12 col-lg-10 fs-12 fs-md-18 d-flex justify-content-center text-white">
                    <div className=" container-fluid p-0" >
                        <hr className=" border-2 border-white" />
                    </div>
                    <div className="container-fluid text-center p-0 pt-2 ">
                        Vaibhav Sonawane
                    </div>
                    <div className="container-fluid hr-white p-0">
                        <hr className=" border-2 border-white" />
                    </div>
                </div>

                <div className=" col-12 col-lg-10 fs-12 fs-md-16 d-flex justify-content-center text-white text-center pt-3">
                    <div className=" container-fluid px-1"> Mehrun Jalgaon </div>
                    <div className=" container-fluid">Digital Marketer </div>
                    <div className=" container-fluid px-1 text-break ">vaibhavsonawanejalgaon@gmail.com</div>
                </div>

                <div className=" col-12 col-lg-10 d-flex fs-12 fs-md-16 justify-content-center text-white text-center pt-3 ">
                    <div className=" container-fluid "> <HashLink className="text-white" to={"/#top"}> Home</HashLink> </div>
                    <div className=" container-fluid"> <HashLink className="text-white" to={"/#about"}> About Me</HashLink> </div>
                    <div className=" container-fluid"> <Link className="text-white" to="/privacy-policy"> Privacy Policy</Link> </div>
                </div>
                <div className=" col-12 col-lg-10 fs-12 fs-md-16 d-flex justify-content-center text-white text-center pt-3 pb-5">
                    <div className=" container-fluid">
                        Copyright &#169; 2024
                    </div>
                </div>
            </div>
        </>
    )
}