import "./applicant.scss";
import Topbar from "../../ui/topbar/Topbar";
import { applicantData } from "../../../data/dashSource";

function Applicant() {
    return (
        <section className="applicant">
            <Topbar title={"New Applicants"} />
            <div className="applicantContainer">
                {applicantData.map((item, i) =>
                    <div className="user" key={i}>
                        <div className="imgBox">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="text">
                            <h3 className="name">{item.name}</h3>
                            <p className="desc">Applied for <span>{item.occupation}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
};

export default Applicant;
