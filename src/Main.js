import React from 'react';
import Hornebeast from './Hornebeast';


class Main extends React.Component {
  render() {
    return (
      <>
      < Hornebeast  title={'Giant Eland'} src={'https://cdn.pixabay.com/photo/2020/08/23/03/03/unicorn-5509763_960_720.jpg'} description={'flying Horse'}/>
      < Hornebeast title={'Noble moose'} src={'https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmwyMjQ3ODIxMjI0NC1pbWFnZS1rdTJmcHUxbi5qcGc.jpg?s=eYuW9qkt09NpQR4_67PpLRMApAiHwxwC2MOhlniXYAc'} description={'the largest noble moose'} />
      < Hornebeast title={'Jacksons Chameleon'} src={'https://images.rawpixel.com/image_1000/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B4MTI2NTE0OS1pbWFnZS1rd3Z3NWtmNC5qcGc.jpg?s=Z923nKPfkiuHEO9hYDVXxICdkKXRTydip-ecEHdZ1qI'} description={'Cute Animal'}/>
      </>
    )
  }
}

export default Main;
