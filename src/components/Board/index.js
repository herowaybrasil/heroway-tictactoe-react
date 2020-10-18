import React from 'react';

import Logo from '../Logo';

function Board() {
  return (
    <div className="board">
      <Logo />
      <div className="message">A grande batalha começou!</div>

      <table>
        <tr>
          <td className="cell" />
          <td className="cell" />
          <td className="cell" />
        </tr>
        <tr>
          <td className="cell" />
          <td className="cell" />
          <td className="cell" />
        </tr>
        <tr>
          <td className="cell" />
          <td className="cell" />
          <td className="cell" />
        </tr>
      </table>

      <button className='replay'>Replay</button>
    </div>
  )
}

export default Board;