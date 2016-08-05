import React, { Component } from 'react';
import { connect } from 'react-redux';

import { visibilityModal } from '../actions/index';

class Modal extends Component {
  render() {
    let style = {
      display: this.props.modalVisibility
    }

    return(
      <div className="modal" style={style}>
        <div className="modal__inner">
          <i className="modal__close" onClick={() => this.props.visibilityModal('none')} >&#215;</i>
          <p>
            Уважаемые посетители, если у вас есть желание поделиться со мной бирдекелями, то пишите:
             <a className="modal__link" href="mailto:dima@ld-design.ru">dima@ld-design.ru</a>
          </p>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  if (state.stands.items.length === 0) {
    return { modalVisibility: 'none' };
  }

  return { modalVisibility:  state.stands.modalVisibility};
}

export default connect(mapStateToProps, { visibilityModal })(Modal);
