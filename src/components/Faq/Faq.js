import React from "react";
import { Accordion } from "react-bootstrap";
import "./Faq.css";
const Faq = () => {
  const datas = [
    {
      id: 1,
      questions: "What is XXXX Platform?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
    {
      id: 2,
      questions: "What is a XXXXX NFT?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
    {
      id: 3,
      questions: "Are all Governance NFTs the same?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
    {
      id: 4,
      questions: "What are the advantages of Governance NFTs?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
    {
      id: 5,
      questions: "How can I get a Governance NFT?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
    {
      id: 6,
      questions: "How can I sell Governance NFTs?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
    {
      id: 7,
      questions: "What blockchain does XXXXX use?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
    {
      id: 8,
      questions: "What are the utilities of XXXX token?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
    {
      id: 9,
      questions: "What NFT tools are offered on XXXXX Platform?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
    {
      id: 10,
      questions: "How can you make money on XXXXX Platform?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
    {
      id: 11,
      questions: "What is XXXX NFT for?",
      answer:
        "The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India.",
    },
  ];

  const AccordionHeadHandle = (e) => {
    console.log(e);
  };
  return (
    <div id="faq_section" className="container faq my-3 my-md-5 py-3 py-md-5">
      <div className="row">
        <div className="col-12 col-xl-6 d-flex justify-content-center align-items-center">
          <div className="faq_content_box">
            <h1 className="p-3 p-md-5">FAQ</h1>
          </div>
        </div>
        <div className="col-12 col-xl-6 text-white text-start">
          {datas?.map((data) => (
            <div key={data.id} className="row align-items-center text-white">
              <div className="col-md-12 text-white">
                <Accordion defaultActiveKey="1" flush>
                  <Accordion.Item eventKey={String(data.id)}>
                    <Accordion.Header onClick={(e) => AccordionHeadHandle(e)}>
                      <div className="d-flex align-items-center">
                        <svg
                          className="me-3 accordion_plus"
                          width={24}
                          height={25}
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0001 11.5V5.5H13.0001V11.5H19.0001V13.5H13.0001V19.5H11.0001V13.5H5.00012V11.5H11.0001Z"
                            fill="white"
                          />
                        </svg>

                        <svg
                          className="accordion_minus me-3 d-none"
                          width={24}
                          height={25}
                          viewBox="0 0 40 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.33346 18.8334H31.6668V22.1667H8.33346V18.8334Z"
                            fill="#FF14B1"
                          />
                        </svg>

                        {data.id === 1 ? (
                          <h2 className="text-white mb-0">{data?.questions}</h2>
                        ) : (
                          <p className="mb-0">{data?.questions}</p>
                        )}
                      </div>
                    </Accordion.Header>
                    <Accordion.Body
                      style={{
                        fontSize: "16px",
                        color: "#C2ABCB",
                        fontWeight: "500",
                      }}
                    >
                      <div className="px-5">{data?.answer}</div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
