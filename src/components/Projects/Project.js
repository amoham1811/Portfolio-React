import React from 'react';
import {useState} from 'react';
import './index.scss';

const Project = ({ title, deployedUrl, githubUrl, image, description }) => {
    const [img,setImg] = useState("../../../public/images/Home.png");
    function getImg(src) {
        import(`../../../public/images/${src}`).then((image) => setImg(image.default));
    }
    //set image on each import of data from json file.
    getImg(image);
    return (
        <div data-test='component-character'>
            <h2 data-test='proj-title'>{title}</h2>

            <img className="img" data-test='proj-img' src={img} alt={title} />

            <ul data-test='proj-detail'>
                <li className="Desc" data-proj='proj-desc'>
                    Project Description: {description}
                </li>
                <li data-proj='proj-github'>
                    Github Url: {githubUrl}
                </li>
                <li data-proj='proj-deployurl'>
                    Deployed Url: {deployedUrl}
                </li>
            </ul>
        </div>
    );
};

export default Project;