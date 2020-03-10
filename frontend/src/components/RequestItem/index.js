import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import history from '~/services/history';

import { Wrapper } from './styles';

export default function RequestItem({ data }) {
  function handleClick(dataInfo) {
    history.push(`/dashboard/${dataInfo.id}/details`);
  }
  return (
    <Wrapper>
      <li>
        <div className="info">
          <div id="name">{data.name}</div>
          <div id="phone">{data.phone}</div>
          <div className="button">
            <button type="button" onClick={() => handleClick(data)}>
              <MdChevronRight size={20} color="#03254c" />
            </button>
          </div>
        </div>
      </li>
    </Wrapper>
  );
}
