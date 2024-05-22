import React, { useState } from "react";
import Detail from "./Detail";

import { Modal, Carousel } from "antd";
import { LogoutOutlined, CloseOutlined } from "@ant-design/icons";
import "../../styles/modal.css";
const Project = ({ id, name, url, skills, description, link, twoWords }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
        <div className="image-project" onClick={handleClick}>
          <div className={`img-pro ${id}`}></div>
        </div>
        <div>
          <div>
            {link ? <a href={link} target="_blank">
              <h2>{name}</h2>
            </a> : 
              <h2>{name}</h2>
            }
          </div>
          <div
          >
              <h3>
                {twoWords}
              </h3>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer=""
        width="100vw"
        className="modalStyle"
        // closeIcon={<LogoutOutlined />}
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
        style={{ maxWidth: "100vw", paddingLeft: "0", marginLeft: "0", marginTop: "100px" }}
      >
        <div className="header-right" onClick={handleCancel}>
          <CloseOutlined style={{ fontSize: "40px" }} />
        </div>
        {/* <MyCarousel id={id} /> */}
        <Detail id={id} />
      </Modal>
    </>
  );
};

export default Project;
