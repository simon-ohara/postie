import CommunicationView from '../../lib/client/communication-view';
import MessageComposer from '../../lib/client/message-composer';
import MessageViewer from '../../lib/client/message-viewer';

describe('<CommunicationView/> component', function() {
  let view;

  before(() => {
    view = shallow(<CommunicationView/>);   
  });

  it('is a <div>', () => {
    expect(view.type()).to.equal('div');
  });

  it('has a MessageComposer', () => {
    expect(view.children().first().type()).to.equal(MessageComposer); 
  });

  it('has a MessageViewer', () => {
    expect(view.children().last().type()).to.equal(MessageViewer); 
  });
});
