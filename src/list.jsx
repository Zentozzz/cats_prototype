import React from 'react';

import CatPhoto from './assets/img/Cat.png';

function List({ name, size, gift, gift_text, massa_text }) {
  const [selected, setSelected] = React.useState(false);

  return (
    <div className="text_buttom">
      <div onClick={() => setSelected(!selected)} className={selected ? 'card_active' : 'card'}>
        <div className="card_path">
          <div className="text">
            <p>Сказочное заморское яство</p>
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
      <span>
        Чего сидишь? Порадуй котэ,&nbsp;<p onClick={() => setSelected(!selected)}>купи.</p>
      </span>
    </div>
  );
}

export default List;
