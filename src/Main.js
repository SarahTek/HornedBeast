import React from 'react';
import Hornebeast from './Hornebeast';


class Main extends React.Component {
  render() {
    return (
      <>
      < Hornebeast  title={'Giant Eland'} src={'img/GiantEland.jpg'} description={'the largest species of antelope in the world.'}  />
      < Hornebeast title={'Noble moose'} src={'img/nooblemoose.jpg'} description={'the largest of all the deer species'}  />
      < Hornebeast title={'Jacksons Chameleon'} src={'img/jacksons Chameleon'} description={'a species of chameleon native to East Africa, '}  />
      </>
    )
  }
}

export default Main;
