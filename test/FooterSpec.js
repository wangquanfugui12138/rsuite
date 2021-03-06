import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Footer from '../src/Footer';
import innerText from './innerText';

describe('Footer', () => {
  it('Should render a Footer', () => {
    const title = 'Test';
    const instance = ReactTestUtils.renderIntoDocument(<Footer>{title}</Footer>);
    assert.include(findDOMNode(instance).className, 'rs-footer');
    assert.equal(innerText(findDOMNode(instance)), title);
  });

  it('Should have a custom className', () => {
    const instance = ReactTestUtils.renderIntoDocument(<Footer className="custom" />);
    assert.include(findDOMNode(instance).className, 'custom');
  });

  it('Should have a custom style', () => {
    const fontSize = '12px';
    const instance = ReactTestUtils.renderIntoDocument(<Footer style={{ fontSize }} />);
    assert.equal(findDOMNode(instance).style.fontSize, fontSize);
  });
});
