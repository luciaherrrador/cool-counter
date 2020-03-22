import React from 'react';

 
class Audio extends React.Component {
 

  render() {

    const item = [
      {
        id: 1,
        audio: "./BerBernard Herrmann - I Still Can't Sleep",
        formato: 'audio/mpeg',
      }
    ];
 
    return (
 
      item.map(item => { 
        return  <div key={ item.id }>
                  <audio>
                    <source src={ item.audio } type={ item.formato }/>
                  </audio>
                </div>
       
 
      })
    )
  }
};
 
export default Audio;