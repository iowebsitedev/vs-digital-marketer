export default function Card({ title, description, bgcolor }) {
    const cardstyle = {
        backgroundColor: bgcolor,
        minHeight: "300px"
    };
    return (<>
        <div className="col col-xxl-5">
            <div className="p-4 p-sm-4 p-lg-5 h-100" style={cardstyle}>
                <div className="fw-medium fs-20 fs-lg-24 pb-4">{title}</div>
                <div className="fw-light fs-14 fs-lg-16">{description}</div>
            </div>
        </div>
    </>)
}