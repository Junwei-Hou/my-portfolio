import React, { useState } from "react";
import { Modal, Carousel, Col, Row } from "antd";
import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";
import {
  projects,
  miscellaneous,
  section3Title,
} from "../../profile";
import "../../styles/carousel.css";

const Detail = ({ id, name, url, framework, link }) => {

  const projectList = [...projects,...miscellaneous]

  let info = projectList.find((item) => item.id === id);

  return (
    <>
      <div>
        <Row
          style={{
            padding: "20px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col xl={10} lg={10} xs={24} sm={10} md={10}>
            <div className={info.direction === 'vertical' ? "c-intro-vertical" : "c-intro-horizontal"}>
              <Carousel
                arrows={true}
                prevArrow={<LeftOutlined />}
                nextArrow={<RightOutlined />}
                dots={true}
              >
                {info.carousel && info.carousel.length>0 && info.carousel.map((item) => (
                  <img src={item} key={item} />
                ))}
                {info.hasVideo && (
                  <video
                    className="c-image-box"
                    controls
                    muted
                    width={info.width ? info.width : ""}
                    //
                    poster={info.posterImgUrl}
                  >
                    <source src={info.videoUrl} type="video/mp4" />
                  </video>
                )}
              </Carousel>
            </div>
          </Col>
          <Col
            xl={10}
            lg={10}
            xs={24}
            sm={10}
            md={10}
            className="c-information"
          >
                
            <div className="c-title">{info.name}</div>
            <div
              className="c-description"
              dangerouslySetInnerHTML={{ __html: info.description }}
            ></div>

            <div className="c-detail">
              <div className="c-icon"></div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <i className="fa fa-file-text-o pr-2 c-icon-i"></i>
                  <span className="project-label">Applications </span>:
                  <span className="ft-wt-600 uppercase">
                    {info.applications}
                  </span>
                </div>
                <div>
                  <i className="fa fa-user-o pr-2 c-icon-i"></i>
                  <span className="project-label">Client </span>:
                  <span className="ft-wt-600 uppercase">{info.client}</span>
                </div>
                <div>
                  <i className="fa fa-thumb-tack pr-2 c-icon-i"></i>
                  <span className="project-label">Position </span>:
                  <span className="ft-wt-600 uppercase">{info.position}</span>
                </div>
                <div>
                  <i className="fa fa-code pr-2 c-icon-i"></i>
                  <span className="project-label">Front-end </span>:
                  <span className="ft-wt-600 uppercase">{info.frontend} </span>
                </div>
                <div>
                  <i className="fa fa-code pr-2 c-icon-i"></i>
                  <span className="project-label">Back-end </span>:
                  <span className="ft-wt-600 uppercase">{info.backend}</span>
                </div>
                <div>
                  {/* <FontAwesomeIcon icon="fa-solid fa-database" /> */}
                  <i className="fas fa-database fa fa-code pr-2 c-icon-i"></i>
                  <span className="project-label">Database </span>:
                  <span className="ft-wt-600 uppercase">{info.database} </span>
                </div>
                {info.link &&<div>
                  <i className="fa fa-external-link pr-2 c-icon-i"></i>
                  <span className="project-label">Link </span>:
                  <span className="ft-wt-600 uppercase">
                    <a href={info.link} target="_blank">
                      {info.link}
                    </a>
                  </span>
                </div>}
                {info.codeReview &&<div>
                  <i className="fa fa-share pr-2 c-icon-i"></i>
                  <span className="project-label">Code Review </span>:
                  <span className="ft-wt-600 uppercase">
                    <a href={info.codeReview} target="_blank">
                      {info.codeReview}
                    </a>
                  </span>
                </div>}
                {info.responsibility &&<div style={{ display: "flex" }}>
                  <div style={{ display: "flex" }}>
                    <i className="fa fa-regular fa fa-users pr-2 c-icon-i"></i>
                    <div>
                      <span className="project-label">Responsibility </span>:
                      <span className="ft-wt-600 uppercase">
                        {info.responsibility}{" "}
                      </span>
                    </div>
                  </div>
                </div>}
               
              </div>
            </div>
            <div
              className="c-challenge"
              style={{ fontSize: "18px", textTransform: "none" }}
            >
              <i className="fa fa-bolt pr-2"></i>
              <span className="project-label">Key Challenges </span>
              <div className="ft-wt-600">
                {info.keyChallenges.map((item) => (
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: "5px" }}>· </div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Detail;
