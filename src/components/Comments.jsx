import React from "react";
import style from "../components/Comments.module.css";
import threestars from "../assets/3starrating.webp";

const comments = [
  {
    id: 1,
    name: "Jacqueline Medina",
    comment:
      "Muy buen servicio, los empleados fueron muy profesionales y la calidad de la pintura es excelente.",
    date: "Mayo 10, 2023",
  },
  {
    id: 2,
    name: "Juan Gomez",
    comment:
      "Estoy muy satisfecho con el resultado de la pintura de mi casa, el color que elegimos es perfecto y la atención al cliente fue excelente.",
    date: "Abril 25, 2023",
  },
  {
    id: 3,
    name: "Carlos Gonzalez",
    comment:
      "Me encantó la rapidez en que terminaron el trabajo y la calidad de la pintura es excelente, sin duda volvería a contratar sus servicios.",
    date: "Marzo 12, 2023",
  },
];

const Comments = () => {
  return (
    <div className={style.commentsContainer}>
      <h2>
        La satisfacción de nuestros clientes es lo{" "}
        <span className={style.commentsWordSpan}>primordial.</span>
      </h2>
      {comments.map((comment) => (
        <div className={style.commentBox} key={comment.id}>
          <h4 className={style.commentName}>{comment.name}</h4>
          <p className={style.commentText}>{comment.comment}</p>
          <p className={style.dateAndStars}>
            <img className={style.commentStars} src={threestars} alt="" />
            <i className={style.commentDate}>{comment.date}</i>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
