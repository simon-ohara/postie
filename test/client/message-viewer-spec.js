import MessageViewer from '../../lib/client/message-viewer';

describe('MessageViewer component', function() {
  it('is a <div>', () => {
    expect(shallow(<MessageViewer/>).type()).to.equal('div');
  });
});

