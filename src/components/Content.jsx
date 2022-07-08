import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";

const Content = () => {
  useEffect(() => {
    gsap.fromTo(
      [".content__text", ".content__author-img"],
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.easeOut",
        stagger: 0.3,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div className="content">
      <Container>
        <Row>
          <Col xl={7}>
            <p className="content__text mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              illo obcaecati optio? Animi iure maxime quo tenetur vel? Dolor
              eaque earum error fugit magnam molestias nemo nostrum odit omnis,
            </p>
            <p className="content__text">
              perspiciatis quia, quod sapiente similique totam veritatis! Alias
              consectetur eligendi impedit numquam repellendus? Animi assumenda
              aut commodi exercitationem harum ipsam quam.
            </p>
          </Col>
          <Col className="content__author-img" xl={5}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
            aperiam consectetur cum dignissimos explicabo facilis laudantium
            mollitia necessitatibus odit placeat quam, sapiente sint temporibus,
            ullam velit voluptatem. Modi, officiis?
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
