import React from 'react';
import moment from 'moment';
import { AiFillFolder, AiOutlineFile } from 'react-icons/ai';

const ListItem = ({ type, name, comment, modifiled_time }) => {
  return (
    <React.Fragment>
      <div className='list-item'>
        <div className='file'>
          <span className='file-icon'>
            {type === 'folder' ? (
              <AiFillFolder color='#79b8ff' size='20' />
            ) : (
              <AiOutlineFile size='18' />
            )}
          </span>
          <span className='label'>{name}</span>
        </div>
        <div className='comment'>{comment}</div>
        <div className='time' title={modifiled_time}>
          {moment(modifiled_time).fromNow()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListItem;
