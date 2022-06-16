import React from "react";

import CatPhoto from "./assets/img/Cat.png";

function List({
  name,
  size,
  gift,
  gift_text,
  massa_text,
  text_buttom,
  disable,
  disable_text,
}) {
  const [selected, setSelected] = React.useState(false);
  const [isShown, setIsShown] = React.useState(false);

  function Textbuttom() {
    if (disable === true) {
      return <span>{disable_text}</span>;
    } else if (selected === false) {
      return (
        <span>
          Чего сидишь? Порадуй котэ,&nbsp;
          <p onClick={() => setSelected(!selected)}>купи.</p>
        </span>
      );
    } else {
      return <span>{text_buttom}</span>;
    }
  }

  return (
    <div className={disable ? "disable" : ""}>
      <div
        className="wrapper"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div
          onClick={
            disable === false
              ? () => setSelected(!selected)
              : () => setSelected(selected)
          }
          className={selected ? "card_active" : "card"}
        >
          <div className="card_path">
            <div className="text">
              <p id={isShown ? "color" : ""}>
                {selected === true && isShown === true
                  ? "Котэ не одобряет?"
                  : "Сказочное заморское яство"}
              </p>
              <p className="nam">Нямушка</p>
              <p className="name">{name}</p>
              <p className="size">
                <b>{size}</b> порций
              </p>
              <p className="gift">
                <b>{gift}</b> {gift_text}
              </p>
            </div>
            <div className="cat">
              <img src={CatPhoto} alt="Cat" />
            </div>
            <div className="ara">
              <div className="massa">
                <p className="massa_text">{massa_text}</p>
                <p>кг</p>
              </div>
            </div>
          </div>
        </div>
        <Textbuttom />
      </div>
    </div>
  );
}

export default List;
