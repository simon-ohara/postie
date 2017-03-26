import ArgumentItem from '../../lib/client/argument-item';

describe('ArgumentItem component', function() {
  var item, children, id;

  before(() => {
    id = 1234;
    item = shallow(<ArgumentItem id={ id }/>);
    children = item.children();
  });

  it('is an <li> element', () => {
    expect(item.type()).to.equal('li');
  });

  it('has an [id] property set from props', () => {
    expect(item.prop('id')).to.equal(id);
  });

  it('has a className of argument-item', () => {
    expect(item.props().className).to.equal('argument-item');
  });

  it('contains three elements', () => {
    expect(children).to.have.length(3);
  });

  it('has an <input.argument-name>', () => {
    expect(item.find('input.argument-name')).to.have.length(1);
  });

  describe('argument-name', function() {
    let argumentName, props;

    beforeEach(() => {
      props = {
        name: 'Larry',
        handleChange: sinon.stub()
      };

      item = shallow(<ArgumentItem { ...props }/>);
      argumentName = item.find('input.argument-name');
    });

    it('has a placeholder of "name"', () => {
      expect(argumentName.props().placeholder).to.equal('name');
    });

    it('has a value from props', () => {
      expect(argumentName.props().value).to.equal(props.name);
    });

    it('has onChange bound to the props.handleChange method', () => {
      expect(argumentName.props().onChange).to.equal(props.handleChange);
    });
  });

  it('has an <input.argument-value>', () => {
    expect(item.find('input.argument-value')).to.have.length(1);
  });

  describe('argument-value', function() {
    let argumentValue, props;

    beforeEach(() => {
      props = {
        value: 'foo',
        handleChange: sinon.stub()
      };

      item = shallow(<ArgumentItem { ...props }/>);
      argumentValue = item.find('input.argument-value');
    });

    it('has a placeholder of "value"', () => {
      expect(argumentValue.props().placeholder).to.equal('value');
    });

    it('has a value from props', () => {
      expect(argumentValue.props().value).to.equal(props.value);
    });

    it('has onChange bound to the props.handleChange method', () => {
      expect(argumentValue.props().onChange).to.equal(props.handleChange);
    });
  });

  it('has a <button.argument-remove', () => {
    expect(item.find('button.argument-remove')).to.have.length(1);
  });

  describe('argument-remove', function() {
    let argumentRemove, props;

    beforeEach(() => {
      props = {
        removeItem: sinon.stub()
      };
      item = shallow(<ArgumentItem { ...props }/>);
      argumentRemove = item.find('button.argument-remove');
    });

    it('has a label of "X"', () => {
      expect(argumentRemove.text()).to.equal('X');
    });

    it('binds click to props.removeItem method', () => {
      expect(argumentRemove.props().onClick).to.equal(props.removeItem);
      expect(props.removeItem.called).to.be.false;
      argumentRemove.simulate('click');
      expect(props.removeItem.called).to.be.true;
    });
  });
});
