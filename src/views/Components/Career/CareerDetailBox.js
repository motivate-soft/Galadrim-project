import React from 'react'
import { ReactComponent as SendIcon } from "../../../assets/Icons/send.svg"
import { ReactComponent as LinkedinIcon } from "../../../assets/Icons/linkedin.svg"
import { FaFacebookF } from 'react-icons/fa'

const SendIconBox = () => {
    return <div className="send-icon-box"><SendIcon /></div>
}

const FacebookIconBox = () => {
    return <div className="facebook-icon-box"><FaFacebookF /></div>
}

const jobDetailData = {
    description: `Torquatos nostros? quos tu paulo ante cum a sapiente delectus, ut aut quid sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque gaudere ut summum malum dolorem, idque instituit docere sic: omne animal, simul atque corrupti, quos tu tam. \n
    Primum igitur, quid bonum sit aut in voluptate velit esse, quam interrogare aut perferendis doloribus asperiores repellat hanc ego cum teneam sententiam, quid est consecutus? laudem et voluptates omittantur maiorum voluptatum deleniti atque natum sit, amet, consectetur, adi  pisci velit. \n
    Tum dicere exorsus est laborum et ultimum bonorum, quod maxime consuevit iactare vestra se esse ratione neque disputatione, quam ob aliquam causam ista, quae sunt in animis nostris inesse notionem, ut enim ad modum, quaeso, interpretaris? sicine eos censes.`,
    qualification: [
        `Torquatos nostros? quos tu paulo ante cum a sapiente delectus, ut aut quid sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque gaudere ut summum malum dolorem, idque instituit docere sic: omne animal, simul atque corrupti, quos tu tam.`,
        `Primum igitur, quid bonum sit aut in voluptate velit esse, quam interrogare aut perferendis doloribus asperiores repellat hanc ego cum teneam sententiam, quid est consecutus? laudem et voluptates omittantur maiorum voluptatum deleniti atque natum sit, amet, consectetur, adipisci velit.`,
        `Tum dicere exorsus est laborum et ultimum bonorum, quod maxime consuevit iactare vestra se esse ratione neque disputatione, quam ob aliquam causam ista, quae sunt in animis nostris inesse notionem, ut enim ad modum, quaeso, interpretaris? sicine eos censes.`
    ],
    process: `Torquatos nostros? quos tu paulo ante cum a sapiente delectus, ut aut quid sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque gaudere ut summum malum dolorem, idque instituit docere sic: omne animal, simul atque corrupti, quos tu tam.

    Primum igitur, quid bonum sit aut in voluptate velit esse, quam interrogare aut perferendis doloribus asperiores repellat hanc ego cum teneam sententiam, quid est consecutus? laudem et voluptates omittantur maiorum voluptatum deleniti atque natum sit, amet, consectetur, adipisci velit.
    
    Tum dicere exorsus est laborum et ultimum bonorum, quod maxime consuevit iactare vestra se esse ratione neque disputatione, quam ob aliquam causam ista, quae sunt in animis nostris inesse notionem, ut enim ad modum, quaeso, interpretaris? sicine eos censes.`
}

// const getSplitText = (str) => {
//     // str.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
//     return str.match(/[^\.!\?]+[\.!\?]+/g);
// }

export default function CareerDetailBox() {
    return (
        <div className="section career-detail-block">
            <div className="container">
                <div className="career-container">
                    <div className="article-block">
                        <div className="social-media-link">
                            <SendIconBox />
                            <LinkedinIcon className="linkedin-icon" />
                            <FacebookIconBox />
                        </div>
                        <h4>Descriptif</h4>
                        <p>{jobDetailData.description}</p>
                        {/* {
                            getSplitText(jobDetailData.description).map((sentence, index) => (
                                <p>{sentence}</p>
                            ))
                        } */}
                    </div>
                    <div className="article-block">
                        <h4>Qualification</h4>
                        <p>{jobDetailData.qualification}</p>
                    </div>
                    <div className="article-block">
                        <h4>Processus de recrutement</h4>
                        <p>{jobDetailData.process}</p>
                    </div>
                    <h5>Vous êtes intéressés par cette offre ? Envoyez nous un email : rh@efisens.com</h5>
                </div>
            </div>
        </div>
    )
}
